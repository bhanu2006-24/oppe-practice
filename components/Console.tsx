import React, { useState } from 'react';
import { TestResult, ExecutionStatus } from '../types';
import { Terminal, CheckCircle, XCircle, Loader2, ListChecks, FileText, Copy, Trash2, ChevronDown, ChevronRight, Check } from 'lucide-react';

interface ConsoleProps {
  status: ExecutionStatus;
  output: string;
  testResults: TestResult[];
}

export const Console: React.FC<ConsoleProps> = ({ status, output, testResults }) => {
  const [activeTab, setActiveTab] = useState<'output' | 'tests'>('tests');
  const [expandedCases, setExpandedCases] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);
  const [cleared, setCleared] = useState(false);

  // Switch to tests tab automatically if tests run, or output if only output exists
  React.useEffect(() => {
    if (status === ExecutionStatus.COMPLETED) {
      if (testResults.length > 0) {
        setActiveTab('tests');
        // Auto-expand failed cases
        const failedIndices = testResults
          .map((r, i) => r.passed ? -1 : i)
          .filter(i => i !== -1);
        setExpandedCases(new Set(failedIndices));
      } else {
        setActiveTab('output');
      }
      setCleared(false);
    } else if (status === ExecutionStatus.RUNNING) {
      setCleared(false);
    }
  }, [status, testResults.length]);

  const passedCount = testResults.filter(r => r.passed).length;
  const totalCount = testResults.length;

  const toggleCase = (idx: number) => {
    const newSet = new Set(expandedCases);
    if (newSet.has(idx)) {
      newSet.delete(idx);
    } else {
      newSet.add(idx);
    }
    setExpandedCases(newSet);
  };

  const handleCopy = () => {
    const textToCopy = activeTab === 'output' ? output : testResults.map((r, i) =>
      `Case ${i + 1}: ${r.passed ? 'Passed' : 'Failed'}\nInput: ${r.input}\nExpected: ${r.expected}\nActual: ${r.actual || r.error}\n`
    ).join('\n');

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setCleared(true);
  };

  if (cleared && status !== ExecutionStatus.RUNNING) {
    return (
      <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 font-mono text-sm transition-colors duration-200 items-center justify-center text-slate-400">
        <div className="text-center">
          <Terminal className="w-12 h-12 mx-auto mb-2 opacity-20" />
          <p>Console cleared</p>
          <button
            onClick={() => setCleared(false)}
            className="mt-4 text-xs text-blue-500 hover:underline"
          >
            Show previous output
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 font-mono text-sm transition-colors duration-200">
      {/* Tabs Header */}
      <div className="flex items-center bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 select-none justify-between pr-2">
        <div className="flex items-center">
          <button
            onClick={() => setActiveTab('tests')}
            className={`flex items-center px-4 py-2 text-xs font-semibold transition-colors border-r border-slate-200 dark:border-slate-700 ${activeTab === 'tests'
                ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white border-b-2 border-b-blue-500'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50'
              }`}
          >
            <ListChecks className="w-3.5 h-3.5 mr-2" />
            Test Results
            {totalCount > 0 && (
              <span className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] ${passedCount === totalCount
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  : 'bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300'
                }`}>
                {passedCount}/{totalCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('output')}
            className={`flex items-center px-4 py-2 text-xs font-semibold transition-colors border-r border-slate-200 dark:border-slate-700 ${activeTab === 'output'
                ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white border-b-2 border-b-blue-500'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50'
              }`}
          >
            <FileText className="w-3.5 h-3.5 mr-2" />
            Output
            {output && <span className="ml-2 w-1.5 h-1.5 rounded-full bg-blue-500 block" />}
          </button>
        </div>

        <div className="flex items-center gap-2">
          {status === ExecutionStatus.RUNNING ? (
            <div className="flex items-center text-blue-500 dark:text-blue-400 text-xs px-2">
              <Loader2 className="w-3 h-3 mr-1 animate-spin" />
              Running...
            </div>
          ) : status === ExecutionStatus.COMPLETED ? (
            <div className="flex items-center text-green-600 dark:text-green-400 text-xs px-2">
              <CheckCircle className="w-3 h-3 mr-1" />
              Done
            </div>
          ) : status === ExecutionStatus.ERROR ? (
            <div className="flex items-center text-red-600 dark:text-red-400 text-xs px-2">
              <XCircle className="w-3 h-3 mr-1" />
              Error
            </div>
          ) : null}

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>

          <button
            onClick={handleCopy}
            className="p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
            title="Copy Content"
          >
            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
          </button>
          <button
            onClick={handleClear}
            className="p-1.5 rounded hover:bg-red-100 dark:hover:bg-red-900/30 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            title="Clear Console"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-0 bg-slate-50 dark:bg-slate-900">
        {/* Test Results View */}
        {activeTab === 'tests' && (
          <div className="p-4 space-y-3">
            {testResults.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-20 text-slate-500 dark:text-slate-600 space-y-2 mt-8">
                <ListChecks className="w-8 h-8 opacity-20" />
                <p>Run your code to see test results</p>
              </div>
            ) : (
              testResults.map((result, idx) => (
                <div
                  key={idx}
                  className={`rounded-md border overflow-hidden transition-all ${result.passed
                      ? 'bg-green-50/50 dark:bg-green-950/10 border-green-200 dark:border-green-900/30'
                      : 'bg-red-50/50 dark:bg-red-950/10 border-red-200 dark:border-red-900/30'
                    }`}
                >
                  <div
                    className="flex items-center p-3 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    onClick={() => toggleCase(idx)}
                  >
                    <div className="mr-3">
                      {result.passed ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className={`font-semibold text-xs ${result.passed ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                        Case {idx + 1}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[150px] sm:max-w-[300px] ml-2 font-mono opacity-70">
                        {result.input}
                      </span>
                    </div>
                    <div className="ml-2 text-slate-400">
                      {expandedCases.has(idx) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </div>
                  </div>

                  {expandedCases.has(idx) && (
                    <div className="p-3 pt-0 border-t border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/20">
                      {result.error ? (
                        <div className="text-red-600 dark:text-red-300 text-xs mt-2 font-mono break-all bg-red-100 dark:bg-red-950/30 p-2 rounded border border-red-200 dark:border-red-900/30">
                          {result.error}
                        </div>
                      ) : (
                        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-xs mt-2 text-slate-500 dark:text-slate-400">
                          <span className="text-right font-medium">Input:</span>
                          <code className="font-mono bg-white dark:bg-slate-950/50 px-2 py-1 rounded text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 block w-full">{result.input}</code>

                          <span className="text-right font-medium">Expected:</span>
                          <code className="font-mono bg-white dark:bg-slate-950/50 px-2 py-1 rounded text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 block w-full">{result.expected}</code>

                          {!result.passed && (
                            <>
                              <span className="text-right font-medium text-red-500">Actual:</span>
                              <code className="font-mono bg-red-100 dark:bg-red-950/30 px-2 py-1 rounded text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900/30 block w-full">{result.actual}</code>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* Output View */}
        {activeTab === 'output' && (
          <div className="p-4 h-full">
            {output ? (
              <pre className="text-slate-800 dark:text-slate-300 whitespace-pre-wrap break-words font-mono text-sm leading-relaxed">
                {output}
              </pre>
            ) : (
              <div className="flex flex-col items-center justify-center h-20 text-slate-500 dark:text-slate-600 space-y-2 mt-8">
                <Terminal className="w-8 h-8 opacity-20" />
                <p>No standard output to display</p>
                <p className="text-xs opacity-50">Print statements will appear here</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};