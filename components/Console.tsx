import React, { useState } from 'react';
import { TestResult, ExecutionStatus } from '../types';
import { Terminal, CheckCircle, XCircle, Loader2, ListChecks, FileText } from 'lucide-react';

interface ConsoleProps {
  status: ExecutionStatus;
  output: string;
  testResults: TestResult[];
}

export const Console: React.FC<ConsoleProps> = ({ status, output, testResults }) => {
  const [activeTab, setActiveTab] = useState<'output' | 'tests'>('tests');

  // Switch to tests tab automatically if tests run, or output if only output exists
  React.useEffect(() => {
    if (status === ExecutionStatus.COMPLETED) {
      if (testResults.length > 0) setActiveTab('tests');
      else setActiveTab('output');
    }
  }, [status, testResults.length]);

  const passedCount = testResults.filter(r => r.passed).length;
  const totalCount = testResults.length;

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 font-mono text-sm transition-colors duration-200">
      {/* Tabs Header */}
      <div className="flex items-center bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 select-none">
        <button
          onClick={() => setActiveTab('tests')}
          className={`flex items-center px-4 py-2 text-xs font-semibold transition-colors border-r border-slate-200 dark:border-slate-700 ${
            activeTab === 'tests' 
              ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white border-b-2 border-b-blue-500' 
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50'
          }`}
        >
          <ListChecks className="w-3.5 h-3.5 mr-2" />
          Test Results
          {totalCount > 0 && (
            <span className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] ${
              passedCount === totalCount 
              ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
              : 'bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300'
            }`}>
              {passedCount}/{totalCount}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('output')}
          className={`flex items-center px-4 py-2 text-xs font-semibold transition-colors border-r border-slate-200 dark:border-slate-700 ${
            activeTab === 'output' 
              ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white border-b-2 border-b-blue-500' 
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50'
          }`}
        >
          <FileText className="w-3.5 h-3.5 mr-2" />
          Terminal Output
          {output && <span className="ml-2 w-1.5 h-1.5 rounded-full bg-blue-500 block" />}
        </button>
        
        {status === ExecutionStatus.RUNNING && (
          <div className="ml-auto px-4 flex items-center text-blue-500 dark:text-blue-400 text-xs">
            <Loader2 className="w-3 h-3 mr-1 animate-spin" />
            Running...
          </div>
        )}
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
                  className={`p-3 rounded-md border flex items-start space-x-3 ${
                    result.passed 
                      ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900/50' 
                      : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900/50'
                  }`}
                >
                  <div className="mt-0.5">
                    {result.passed ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className={`font-semibold ${result.passed ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {result.passed ? 'Passed' : 'Failed'}
                      </span>
                      <span className="text-slate-500 text-xs bg-slate-100 dark:bg-slate-800/50 px-2 py-0.5 rounded">Case {idx + 1}</span>
                    </div>
                    
                    {result.error ? (
                      <div className="text-red-600 dark:text-red-300 text-xs mt-2 font-mono break-all bg-red-100 dark:bg-red-950/30 p-2 rounded border border-red-200 dark:border-red-900/30">
                        {result.error}
                      </div>
                    ) : (
                      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-xs mt-2 text-slate-500 dark:text-slate-400">
                        <span className="text-right">Input:</span>
                        <code className="font-mono bg-white dark:bg-slate-950/50 px-1.5 py-0.5 rounded text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">{result.input}</code>
                        
                        <span className="text-right">Expected:</span>
                        <code className="font-mono bg-white dark:bg-slate-950/50 px-1.5 py-0.5 rounded text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">{result.expected}</code>
                        
                        {!result.passed && (
                          <>
                            <span className="text-right">Actual:</span>
                            <code className="font-mono bg-red-100 dark:bg-red-950/30 px-1.5 py-0.5 rounded text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900/30">{result.actual}</code>
                          </>
                        )}
                      </div>
                    )}
                  </div>
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