import React, { useState } from 'react';
import { Problem } from '../types';
import { BookOpen, Tag, Lightbulb } from 'lucide-react';

interface ProblemDetailProps {
  problem: Problem;
}

export const ProblemDetail: React.FC<ProblemDetailProps> = ({ problem }) => {
  const [showHint, setShowHint] = useState(false);

  // Reset hint state when problem changes
  React.useEffect(() => {
    setShowHint(false);
  }, [problem.id]);

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-950/30 border-green-200 dark:border-green-900/50';
      case 'Medium': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900/50';
      case 'Hard': return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950/30 border-red-200 dark:border-red-900/50';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-slate-50 dark:bg-slate-900 p-6 text-slate-700 dark:text-slate-300 custom-scrollbar transition-colors duration-200">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{problem.title}</h1>
        <div className="flex items-center space-x-2 text-xs">
          <span className={`px-2 py-0.5 rounded-full border ${getDifficultyColor(problem.difficulty)} font-medium`}>
            {problem.difficulty}
          </span>
          <span className="flex items-center text-slate-500 dark:text-slate-500">
            <Tag className="w-3 h-3 mr-1" /> Algorithms
          </span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="prose prose-slate dark:prose-invert prose-sm max-w-none">
          <p className="whitespace-pre-wrap leading-relaxed">
            {problem.description}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center">
            <BookOpen className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" />
            Examples
          </h3>
          {problem.examples.map((ex, i) => (
            <div key={i} className="bg-white dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-800 font-mono text-sm shadow-sm">
              <div className="mb-2">
                <span className="text-slate-500 select-none">Input: </span>
                <span className="text-slate-800 dark:text-slate-200">{ex.input}</span>
              </div>
              <div className="mb-2">
                <span className="text-slate-500 select-none">Output: </span>
                <span className="text-slate-800 dark:text-slate-200">{ex.output}</span>
              </div>
              {ex.explanation && (
                <div>
                  <span className="text-slate-500 select-none">Explanation: </span>
                  <span className="text-slate-600 dark:text-slate-400 whitespace-pre-wrap">{ex.explanation}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {problem.hint && (
          <div className="pt-4">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center text-xs font-bold text-orange-500 hover:text-orange-600 transition-colors"
            >
              <Lightbulb className="w-4 h-4 mr-1.5" />
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
            {showHint && (
              <div className="mt-2 p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/50 rounded-lg text-sm text-orange-800 dark:text-orange-300">
                {problem.hint}
              </div>
            )}
          </div>
        )}

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Constraints:</h3>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
            <li>Time Limit: 2000ms</li>
            <li>Memory Limit: 128MB</li>
            <li>if found any bug.. or want to contribute.. plz contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};