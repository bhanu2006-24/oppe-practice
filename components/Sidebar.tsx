import React, { useState, useMemo } from 'react';
import { Problem } from '../types';
import { CheckCircle, ArrowLeft, Search } from 'lucide-react';

interface SidebarProps {
  problems: Problem[];
  currentProblemId: string;
  onSelectProblem: (id: string) => void;
  solvedProblems: Set<string>;
  onBackToDashboard: () => void;
}

// Extracted and Memoized List Item
const ProblemItem = React.memo(({
  problem,
  isSelected,
  isSolved,
  onSelect
}: {
  problem: Problem;
  isSelected: boolean;
  isSolved: boolean;
  onSelect: (id: string) => void;
}) => {
  return (
    <button
      onClick={() => onSelect(problem.id)}
      className={`w-full flex items-start p-3 rounded-lg text-sm transition-all border ${isSelected
          ? 'bg-white dark:bg-slate-800 border-blue-500 shadow-sm z-10'
          : 'bg-transparent border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400'
        }`}
    >
      <div className="mt-0.5 mr-3">
        {isSolved ? (
          <CheckCircle className="w-4 h-4 text-green-500" />
        ) : (
          <div className={`w-4 h-4 rounded-full border-2 ${isSelected ? 'border-blue-500' : 'border-slate-300 dark:border-slate-600'}`} />
        )}
      </div>
      <div className="flex-1 text-left">
        <div className={`font-medium mb-1 ${isSelected ? 'text-blue-700 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>
          {problem.title}
        </div>
        <div className="flex items-center space-x-2">
          <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${problem.difficulty === 'Easy' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
              problem.difficulty === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' :
                'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
            }`}>
            {problem.difficulty}
          </span>
        </div>
      </div>
    </button>
  );
});

ProblemItem.displayName = 'ProblemItem';

export const Sidebar: React.FC<SidebarProps> = ({
  problems, currentProblemId, onSelectProblem, solvedProblems, onBackToDashboard
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const currentSubject = problems[0]?.subject || 'Practice';
  const currentLevel = problems[0]?.examLevel || '';

  // Memoize filtered problems to avoid recalculation on every render
  const filteredProblems = useMemo(() => problems.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  ), [problems, searchTerm]);

  return (
    <div className="w-72 bg-slate-50 dark:bg-[#0b1120] border-r border-slate-200 dark:border-slate-800 flex flex-col h-full transition-colors duration-200">

      {/* Back Button */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={onBackToDashboard}
          className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </button>
      </div>

      <div className="p-4 bg-slate-100 dark:bg-slate-900/50">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
          {currentSubject} &middot; {currentLevel}
        </h3>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1">
        {filteredProblems.length > 0 ? (
          filteredProblems.map((problem) => (
            <ProblemItem
              key={problem.id}
              problem={problem}
              isSelected={currentProblemId === problem.id}
              isSolved={solvedProblems.has(problem.id)}
              onSelect={onSelectProblem}
            />
          ))
        ) : (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400 text-sm">
            No problems found.
          </div>
        )}
      </div>

      <div className="p-4 text-center border-t border-slate-200 dark:border-slate-800 text-xs text-slate-400">
        {problems.filter(p => solvedProblems.has(p.id)).length} / {problems.length} Completed
      </div>
    </div>
  );
};