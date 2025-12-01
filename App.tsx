import React, { useState, useEffect, useCallback, useRef } from 'react';
import { PROBLEMS } from './data/problems';
import { Problem, TestResult, ExecutionStatus, Subject, ExamLevel } from './types';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { Playground } from './components/Playground';
import { ProblemDetail } from './components/ProblemDetail';
import { CodeEditor } from './components/CodeEditor';
import { Console } from './components/Console';
import { About } from './components/About';
import { Contribute } from './components/Contribute';
import { initializePyodide, runPythonCode } from './services/pythonRuntime';
import { executeCode } from './services/multiCompilerRuntime';
import { Play, RotateCcw, Clock, Sun, Moon, Download, Menu, X, Keyboard, Maximize2, Minimize2, GripVertical } from 'lucide-react';

// Declaration for confetti
declare const confetti: any;

type View = 'home' | 'ide' | 'playground' | 'about' | 'contribute';
type Theme = 'dark' | 'light';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [theme, setTheme] = useState<Theme>('dark');

  // Selection State
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedExamLevel, setSelectedExamLevel] = useState<ExamLevel | null>(null);
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);

  // IDE State
  const [userCode, setUserCode] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [status, setStatus] = useState<ExecutionStatus>(ExecutionStatus.IDLE);
  const [solvedProblems, setSolvedProblems] = useState<Set<string>>(new Set());
  const [isPyodideReady, setIsPyodideReady] = useState(false);

  // Timer State
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef<number | null>(null);

  // Mobile Sidebar State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // UX Features State
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [leftPanelWidth, setLeftPanelWidth] = useState(40); // Percentage
  const isDraggingRef = useRef(false);

  // Initialize Theme
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Load solved problems from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('solvedProblems');
    if (saved) {
      try {
        setSolvedProblems(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error("Failed to parse solved problems", e);
      }
    }
  }, []);

  // Save solved problems to localStorage whenever it changes
  useEffect(() => {
    if (solvedProblems.size > 0) {
      localStorage.setItem('solvedProblems', JSON.stringify(Array.from(solvedProblems)));
    }
  }, [solvedProblems]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Initialize Pyodide on mount
  useEffect(() => {
    setStatus(ExecutionStatus.LOADING_RUNTIME);
    initializePyodide()
      .then(() => {
        setIsPyodideReady(true);
        setStatus(ExecutionStatus.IDLE);
      })
      .catch((err) => {
        console.error("Failed to load runtime", err);
        setOutput("Error: Failed to load Python runtime (Pyodide). Please refresh or check your connection.");
        setStatus(ExecutionStatus.ERROR);
      });
  }, []);

  // Timer logic
  useEffect(() => {
    if (view === 'ide') {
      timerRef.current = window.setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setElapsedTime(0);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [view, currentProblem]);

  // Drag Logic for Resizable Split
  const handleMouseDown = useCallback(() => {
    isDraggingRef.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current) return;
    const newWidth = (e.clientX / window.innerWidth) * 100;
    if (newWidth > 20 && newWidth < 80) {
      setLeftPanelWidth(newWidth);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);


  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectCourse = (subject: Subject, examLevel: ExamLevel) => {
    setSelectedSubject(subject);
    setSelectedExamLevel(examLevel);

    // Find the first problem that matches both subject and exam level
    const firstProblem = PROBLEMS.find(p => p.subject === subject && p.examLevel === examLevel);

    if (firstProblem) {
      loadProblem(firstProblem);
    } else {
      alert(`No problems available for ${subject} ${examLevel} yet. Contributions welcome!`);
    }
  };

  const loadProblem = (problem: Problem) => {
    setCurrentProblem(problem);

    // Check for cached code
    const cachedCode = localStorage.getItem(`problem_code_${problem.id}`);
    setUserCode(cachedCode || problem.starterCode);

    setTestResults([]);
    setOutput("");
    setStatus(ExecutionStatus.IDLE);
    setElapsedTime(0);
    setView('ide');
  };

  const handleRun = useCallback(async () => {
    if (!currentProblem) return;

    // Only block for Python runtime if we are running Python
    const isPython = ['Python', 'PDSA', 'ML_Practice'].includes(currentProblem.subject);
    if (isPython && !isPyodideReady) return;

    setStatus(ExecutionStatus.RUNNING);
    setOutput("");
    setTestResults([]);

    try {
      await new Promise(r => setTimeout(r, 300)); // UI Feedback delay

      if (isPython) {
        const { results, output } = await runPythonCode(
          userCode,
          currentProblem.functionName,
          currentProblem.testCases
        );
        setTestResults(results);
        setOutput(output);
        setStatus(ExecutionStatus.COMPLETED);

        const allPassed = results.length > 0 && results.every(r => r.passed);
        if (allPassed) {
          if (!solvedProblems.has(currentProblem.id)) {
            setSolvedProblems(prev => new Set(prev).add(currentProblem.id));
          }
          triggerConfetti();
        }
      } else {
        // Handle Non-Python Languages (Java, Bash, SQL/DBMS) via Piston
        const langMap: Record<string, string> = {
          'Java': 'java',
          'System_Commands': 'bash',
          'SQL': 'sql',
          'DBMS': 'sql'
        };

        const language = langMap[currentProblem.subject];
        if (!language) {
          throw new Error(`Unsupported subject: ${currentProblem.subject}`);
        }

        // For Piston, we run the code against each test case
        const results: TestResult[] = [];
        let fullOutput = "";

        // If no test cases, just run once
        const casesToRun = currentProblem.testCases.length > 0 ? currentProblem.testCases : [{ input: "", expected: "" }];

        for (const testCase of casesToRun) {
          // Prepend setup code if available (for SQL/DBMS)
          const codeToRun = currentProblem.setupCode
            ? `${currentProblem.setupCode}\n${userCode}`
            : userCode;

          const { output: runOutput, status: runStatus } = await executeCode(language, codeToRun, testCase.input);

          // Clean up output (trim whitespace for comparison)
          const cleanActual = runOutput.trim();
          const cleanExpected = testCase.expected.trim();

          // Simple string comparison for now
          // For SQL, we might need more robust comparison (e.g. ignoring row order if not specified), but strict string match is a good start
          const passed = runStatus === ExecutionStatus.COMPLETED && cleanActual === cleanExpected;

          results.push({
            passed,
            input: testCase.input,
            expected: testCase.expected,
            actual: cleanActual,
            error: runStatus === ExecutionStatus.ERROR ? runOutput : undefined
          });

          fullOutput += `--- Input: ${testCase.input} ---\n${runOutput}\n`;
        }

        setTestResults(results);
        setOutput(fullOutput);
        setStatus(ExecutionStatus.COMPLETED);

        const allPassed = results.length > 0 && results.every(r => r.passed);
        if (allPassed) {
          if (!solvedProblems.has(currentProblem.id)) {
            setSolvedProblems(prev => new Set(prev).add(currentProblem.id));
          }
          triggerConfetti();
        }
      }

    } catch (error: any) {
      setStatus(ExecutionStatus.ERROR);
      setOutput(prev => prev + `\nExecution Error: ${error.message}`);
    }
  }, [isPyodideReady, userCode, currentProblem, solvedProblems]);

  const handleRunCustom = useCallback(async (customInput: string) => {
    if (!currentProblem) return;

    // Only block for Python runtime if we are running Python
    const isPython = ['Python', 'PDSA', 'ML_Practice'].includes(currentProblem.subject);
    if (isPython && !isPyodideReady) return;

    setStatus(ExecutionStatus.RUNNING);
    setOutput("");
    // Don't clear test results when running custom input, so user can switch back to tests tab

    try {
      await new Promise(r => setTimeout(r, 300)); // UI Feedback delay

      if (isPython) {
        // For custom input, we need a slightly different execution path or just run the code with input mocking
        // Since runPythonCode expects test cases, we can mock a single test case
        const { results, output: runOutput } = await runPythonCode(
          userCode,
          currentProblem.functionName,
          [{ input: customInput, expected: "" }] // Dummy expected
        );

        // We only care about the output for custom run
        setOutput(runOutput);
        setStatus(ExecutionStatus.COMPLETED);
      } else {
        // Handle Non-Python Languages
        const langMap: Record<string, string> = {
          'Java': 'java',
          'System_Commands': 'bash',
          'SQL': 'sql',
          'DBMS': 'sql'
        };

        const language = langMap[currentProblem.subject];
        if (!language) {
          throw new Error(`Unsupported subject: ${currentProblem.subject}`);
        }

        const codeToRun = currentProblem.setupCode
          ? `${currentProblem.setupCode}\n${userCode}`
          : userCode;

        const { output: runOutput, status: runStatus } = await executeCode(language, codeToRun, customInput);

        setOutput(runOutput);
        setStatus(runStatus);
      }
    } catch (error: any) {
      setStatus(ExecutionStatus.ERROR);
      setOutput(prev => prev + `\nExecution Error: ${error.message}`);
    }
  }, [isPyodideReady, userCode, currentProblem]);

  const triggerConfetti = () => {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#f59e0b']
      });
    }
  };

  const handleDownload = () => {
    const blob = new Blob([userCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentProblem?.id || 'solution'}.py`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const ThemeToggleBtn = ({ className }: { className?: string }) => (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors ${className}`}
      title="Toggle Theme"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );

  // Filter problems for the sidebar based on selected subject AND exam level
  const filteredProblems = PROBLEMS.filter(p =>
    p.subject === selectedSubject &&
    p.examLevel === selectedExamLevel
  );

  if (view === 'home') {
    return (
      <Home
        onSelectCourse={handleSelectCourse}
        onGoPlayground={() => setView('playground')}
        onGoAbout={() => setView('about')}
        onGoContribute={() => setView('contribute')}
        onToggleTheme={toggleTheme}
        isDark={theme === 'dark'}
        solvedCount={solvedProblems.size}
      />
    );
  }

  if (view === 'about') {
    return (
      <About
        onBack={() => setView('home')}
        onToggleTheme={toggleTheme}
        isDark={theme === 'dark'}
      />
    );
  }

  if (view === 'contribute') {
    return (
      <Contribute
        onBack={() => setView('home')}
        onToggleTheme={toggleTheme}
        isDark={theme === 'dark'}
      />
    );
  }

  if (view === 'playground') {
    return (
      <div className="h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-200 transition-colors duration-200">
        <Playground
          onExit={() => setView('home')}
          onToggleTheme={toggleTheme}
          isDark={theme === 'dark'}
        />
      </div>
    )
  }

  // IDE VIEW
  return (
    <div className="flex h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-200 font-sans overflow-hidden transition-colors duration-200">

      {/* Shortcuts Modal */}
      {showShortcuts && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowShortcuts(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-6 w-full max-w-md m-4 border border-slate-200 dark:border-slate-700" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center">
                <Keyboard className="w-5 h-5 mr-2" />
                Keyboard Shortcuts
              </h3>
              <button onClick={() => setShowShortcuts(false)} className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                <span className="text-sm font-medium">Run Code</span>
                <kbd className="px-2 py-1 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded text-xs font-mono">Cmd/Ctrl + Enter</kbd>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                <span className="text-sm font-medium">Toggle Comment</span>
                <kbd className="px-2 py-1 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded text-xs font-mono">Cmd/Ctrl + /</kbd>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                <span className="text-sm font-medium">Find / Replace</span>
                <kbd className="px-2 py-1 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded text-xs font-mono">Cmd/Ctrl + F</kbd>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                <span className="text-sm font-medium">Duplicate Line</span>
                <kbd className="px-2 py-1 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded text-xs font-mono">Shift + Alt + ↓</kbd>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                <span className="text-sm font-medium">Move Line</span>
                <kbd className="px-2 py-1 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded text-xs font-mono">Alt + ↑/↓</kbd>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Hidden on mobile by default, slides in when open */}
      {currentProblem && (
        <div className={`fixed lg:relative lg:translate-x-0 z-50 h-full transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <Sidebar
            problems={filteredProblems}
            currentProblemId={currentProblem.id}
            onSelectProblem={(id) => {
              const p = PROBLEMS.find(p => p.id === id);
              if (p) {
                loadProblem(p);
                setIsSidebarOpen(false); // Close sidebar on mobile after selection
              }
            }}
            solvedProblems={solvedProblems}
            onBackToDashboard={() => {
              setView('home');
              setIsSidebarOpen(false);
            }}
          />
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">

        {/* IDE Header */}
        <header className="h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-3 sm:px-6 shadow-sm z-30">
          <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
              title="Toggle Sidebar"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <h2 className="font-semibold text-slate-900 dark:text-white truncate text-sm sm:text-base">
              <span className="hidden sm:inline">{currentProblem?.title}</span>
              <span className="sm:hidden">{currentProblem?.title.substring(0, 20)}...</span>
              <span className="text-xs font-normal text-slate-500 ml-1 sm:ml-2 border border-slate-700 px-1 sm:px-1.5 py-0.5 rounded">{selectedExamLevel}</span>
            </h2>
            <div className="hidden md:flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 mr-2" />
              <span className="font-mono">{formatTime(elapsedTime)}</span>
            </div>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-3">
            <button
              onClick={() => setShowShortcuts(true)}
              className="hidden sm:flex items-center p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              title="Keyboard Shortcuts"
            >
              <Keyboard className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsFocusMode(!isFocusMode)}
              className="hidden sm:flex items-center p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              title={isFocusMode ? "Exit Focus Mode" : "Enter Focus Mode"}
            >
              {isFocusMode ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>

            <ThemeToggleBtn className="hidden sm:flex" />
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2 hidden md:block"></div>

            <button
              onClick={handleDownload}
              className="hidden sm:flex items-center px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded transition-colors"
              title="Download Solution"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              <span className="hidden lg:inline">Save</span>
            </button>

            <button
              onClick={() => {
                if (window.confirm('Reset code to starter template? This will clear your changes.')) {
                  const starter = currentProblem?.starterCode || "";
                  setUserCode(starter);
                  if (currentProblem) {
                    localStorage.removeItem(`problem_code_${currentProblem.id}`);
                  }
                }
              }}
              className="hidden sm:flex items-center px-2 sm:px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded transition-colors"
              title="Reset to starter code"
            >
              <RotateCcw className="w-3.5 h-3.5 sm:mr-1.5" />
              <span className="hidden lg:inline">Reset</span>
            </button>

            <button
              onClick={handleRun}
              disabled={status === ExecutionStatus.RUNNING || !isPyodideReady || status === ExecutionStatus.LOADING_RUNTIME}
              className={`flex items-center px-3 sm:px-4 py-1.5 text-xs font-bold text-white rounded shadow-sm transition-all
                  ${status === ExecutionStatus.RUNNING || !isPyodideReady
                  ? 'bg-slate-400 dark:bg-slate-600 cursor-not-allowed opacity-70'
                  : 'bg-green-600 hover:bg-green-500 active:scale-95'}`}
            >
              <Play className={`w-3.5 h-3.5 sm:mr-1.5 ${status === ExecutionStatus.RUNNING ? 'hidden' : 'block'}`} />
              <span className="hidden sm:inline">{status === ExecutionStatus.RUNNING ? 'Running...' : 'Run Code'}</span>
              <span className="sm:hidden">{status === ExecutionStatus.RUNNING ? '...' : 'Run'}</span>
            </button>
          </div>
        </header>

        {/* Main Workspace - Split View */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
          {/* Left Panel: Description */}
          <div
            className={`flex flex-col bg-slate-50 dark:bg-slate-900 overflow-y-auto transition-all duration-300 ease-in-out ${isFocusMode ? 'w-0 opacity-0 overflow-hidden' : ''}`}
            style={{ width: isFocusMode ? '0%' : (window.innerWidth >= 1024 ? `${leftPanelWidth}%` : '100%') }}
          >
            <div className="border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-700 min-h-full">
              {currentProblem && <ProblemDetail problem={currentProblem} />}
            </div>
          </div>

          {/* Drag Handle (Desktop Only) */}
          {!isFocusMode && (
            <div
              className="hidden lg:flex w-1 bg-slate-200 dark:bg-slate-700 hover:bg-blue-500 dark:hover:bg-blue-500 cursor-col-resize items-center justify-center z-20 transition-colors"
              onMouseDown={handleMouseDown}
            >
              <GripVertical className="w-3 h-3 text-slate-400" />
            </div>
          )}

          {/* Right Panel: Editor & Console */}
          <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-900 min-h-0 min-w-0">
            {/* Editor Area */}
            <div className="flex-1 relative border-b border-slate-200 dark:border-slate-700 min-h-[200px]">
              <div className="absolute inset-0">
                <CodeEditor
                  value={userCode}
                  onChange={(newCode) => {
                    setUserCode(newCode);
                    if (currentProblem) {
                      localStorage.setItem(`problem_code_${currentProblem.id}`, newCode);
                    }
                  }}
                  onRun={handleRun}
                  language={currentProblem ? (
                    ['Python', 'PDSA', 'ML_Practice'].includes(currentProblem.subject) ? 'python' :
                      currentProblem.subject === 'Java' ? 'java' :
                        currentProblem.subject === 'System_Commands' ? 'bash' :
                          ['SQL', 'DBMS'].includes(currentProblem.subject) ? 'sql' : 'python'
                  ) : 'python'}
                />
              </div>
            </div>

            {/* Console Area (Bottom Half of Right Panel) */}
            <div className="h-2/5 min-h-[150px] sm:min-h-[200px] max-h-[50%]">
              <Console
                status={status}
                output={output}
                testResults={testResults}
                onRunCustom={handleRunCustom}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;