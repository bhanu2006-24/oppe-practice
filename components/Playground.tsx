import React, { useState } from 'react';
import { CodeEditor } from './CodeEditor';
import { Console } from './Console';
import { runPythonCode } from '../services/pythonRuntime';
import { ExecutionStatus } from '../types';
import { Play, RotateCcw, TerminalSquare, LogOut, Sun, Moon, Download } from 'lucide-react';

interface PlaygroundProps {
  onExit: () => void;
  onToggleTheme: () => void;
  isDark: boolean;
}

export const Playground: React.FC<PlaygroundProps> = ({ onExit, onToggleTheme, isDark }) => {
  const [code, setCode] = useState<string>("# Write your Python code here\nprint('Hello, World!')\n\n# You can define functions and variables\ndef greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Developer'))");
  const [output, setOutput] = useState<string>("");
  const [status, setStatus] = useState<ExecutionStatus>(ExecutionStatus.IDLE);

  const handleRun = async () => {
    setStatus(ExecutionStatus.RUNNING);
    setOutput("");
    try {
      // Small delay for UI feedback
      await new Promise(r => setTimeout(r, 300));
      // Run with empty test cases just to execute main code
      const { output } = await runPythonCode(code, '', []);
      setOutput(output);
      setStatus(ExecutionStatus.COMPLETED);
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
      setStatus(ExecutionStatus.ERROR);
    }
  };

  const handleReset = () => {
    setCode("# Write your Python code here\nprint('Hello, World!')");
    setOutput("");
    setStatus(ExecutionStatus.IDLE);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'playground.py';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
      {/* Enhanced Header */}
      <div className="h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 md:px-6 shadow-sm z-10">
        
        {/* Left: Branding */}
        <div className="flex items-center space-x-3">
          <div className="bg-purple-600 p-1.5 rounded-md">
            <TerminalSquare className="w-5 h-5 text-white" />
          </div>
          <h2 className="font-bold text-slate-800 dark:text-slate-100 hidden md:block">Python Playground</h2>
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
           <CodeEditor value={code} onChange={setCode} />
        </div>
        <div className="h-1/3 min-h-[150px]">
          <Console status={status} output={output} testResults={[]} />
        </div>
      </div>
    </div>
  );
};