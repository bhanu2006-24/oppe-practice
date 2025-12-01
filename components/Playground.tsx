import React, { useState } from 'react';
import { CodeEditor } from './CodeEditor';
import { Console } from './Console';
import { runPythonCode } from '../services/pythonRuntime';
import { executeCode } from '../services/multiCompilerRuntime';
import { ExecutionStatus, Language } from '../types';
import { Play, RotateCcw, TerminalSquare, LogOut, Sun, Moon, Download, ChevronDown } from 'lucide-react';

interface PlaygroundProps {
  onExit: () => void;
  onToggleTheme: () => void;
  isDark: boolean;
}

const DEFAULT_CODE: Record<Language, string> = {
  python: `# Write your Python code here\nprint('Hello, World!')\n\n# You can define functions and variables\ndef greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Developer'))`,
  javascript: `// Write your JavaScript code here\nconsole.log('Hello, World!');\n\nfunction greet(name) {\n  return \`Hello, \${name}\`;\n}\n\nconsole.log(greet('Developer'));`,
  typescript: `// Write your TypeScript code here\nconst message: string = 'Hello, World!';\nconsole.log(message);\n\nfunction greet(name: string): string {\n  return \`Hello, \${name}\`;\n}\n\nconsole.log(greet('Developer'));`,
  java: `// Write your Java code here\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
  'c++': `// Write your C++ code here\n#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`,
  go: `// Write your Go code here\npackage main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}`,
  rust: `// Write your Rust code here\nfn main() {\n    println!("Hello, World!");\n}`,
  bash: `# Write your Bash script here\necho "Hello, World!"`,
  sql: `-- Write your SQL queries here\nCREATE TABLE users (id INT, name TEXT);\nINSERT INTO users VALUES (1, 'Alice');\nINSERT INTO users VALUES (2, 'Bob');\nSELECT * FROM users;`
};

const LANGUAGES: { id: Language; name: string }[] = [
  { id: 'python', name: 'Python' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'java', name: 'Java' },
  { id: 'c++', name: 'C++' },
  { id: 'go', name: 'Go' },
  { id: 'rust', name: 'Rust' },
  { id: 'bash', name: 'Bash' },
  { id: 'sql', name: 'SQL' },
];

export const Playground: React.FC<PlaygroundProps> = ({ onExit, onToggleTheme, isDark }) => {
  const [language, setLanguage] = useState<Language>('python');
  const [code, setCode] = useState<string>(() => {
    const saved = localStorage.getItem(`playground_code_python`);
    return saved || DEFAULT_CODE['python'];
  });
  const [output, setOutput] = useState<string>("");
  const [status, setStatus] = useState<ExecutionStatus>(ExecutionStatus.IDLE);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    const saved = localStorage.getItem(`playground_code_${lang}`);
    setCode(saved || DEFAULT_CODE[lang]);
    setOutput("");
    setStatus(ExecutionStatus.IDLE);
    setIsLangMenuOpen(false);
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    localStorage.setItem(`playground_code_${language}`, newCode);
  };

  const handleRun = async () => {
    setStatus(ExecutionStatus.RUNNING);
    setOutput("");
    try {
      // Small delay for UI feedback
      await new Promise(r => setTimeout(r, 300));

      let result;
      if (language === 'python') {
        // Use Pyodide for Python (client-side)
        const { output: pyOutput } = await runPythonCode(code, '', []);
        result = { output: pyOutput, status: ExecutionStatus.COMPLETED };
      } else {
        // Use Piston for other languages (server-side)
        result = await executeCode(language, code);
      }

      setOutput(result.output);
      setStatus(result.status);
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
      setStatus(ExecutionStatus.ERROR);
    }
  };

  const handleReset = () => {
    setCode(DEFAULT_CODE[language]);
    setOutput("");
    setStatus(ExecutionStatus.IDLE);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const extMap: Record<Language, string> = {
      python: 'py', javascript: 'js', typescript: 'ts', java: 'java',
      'c++': 'cpp', go: 'go', rust: 'rs', bash: 'sh', sql: 'sql'
    };
    a.download = `playground.${extMap[language]}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
      {/* Enhanced Header */}
      <div className="h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 md:px-6 shadow-sm z-10">

        {/* Left: Branding & Language Selector */}
        <div className="flex items-center space-x-3">
          <div className="bg-purple-600 p-1.5 rounded-md">
            <TerminalSquare className="w-5 h-5 text-white" />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-2 font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 px-2 py-1 rounded transition-colors"
            >
              <span>{LANGUAGES.find(l => l.id === language)?.name} Playground</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>

            {isLangMenuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsLangMenuOpen(false)} />
                <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-20">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => handleLanguageChange(lang.id)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors
                        ${language === lang.id ? 'text-purple-600 dark:text-purple-400 font-medium' : 'text-slate-700 dark:text-slate-300'}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right: Actions Toolbar */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-md text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-1"></div>

          {/* Download */}
          <button
            onClick={handleDownload}
            className="flex items-center px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
            title="Download Code"
          >
            <Download className="w-3.5 h-3.5 mr-1.5" />
            <span className="hidden sm:inline">Save</span>
          </button>

          {/* Reset */}
          <button
            onClick={handleReset}
            className="flex items-center px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          {/* Run */}
          <button
            onClick={handleRun}
            disabled={status === ExecutionStatus.RUNNING}
            className={`flex items-center px-4 py-1.5 text-xs font-bold text-white rounded-md shadow-sm transition-all
              ${status === ExecutionStatus.RUNNING
                ? 'bg-slate-400 dark:bg-slate-600 cursor-not-allowed opacity-70'
                : 'bg-purple-600 hover:bg-purple-500 hover:shadow-md active:scale-95'}`}
          >
            <Play className={`w-3.5 h-3.5 mr-1.5 ${status === ExecutionStatus.RUNNING ? 'hidden' : 'block'}`} />
            {status === ExecutionStatus.RUNNING ? 'Running...' : 'Run Code'}
          </button>

          <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-1"></div>

          {/* Exit */}
          <button
            onClick={onExit}
            className="flex items-center px-3 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-md transition-colors"
          >
            <LogOut className="w-3.5 h-3.5 mr-1.5" />
            Exit
          </button>
        </div>
      </div>

      {/* Workspace */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 relative border-b border-slate-200 dark:border-slate-700">
          <CodeEditor value={code} onChange={handleCodeChange} language={language} />
        </div>
        <div className="h-1/3 min-h-[150px]">
          <Console status={status} output={output} testResults={[]} />
        </div>
      </div>
    </div>
  );
};