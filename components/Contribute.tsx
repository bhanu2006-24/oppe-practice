import React from 'react';
import { ArrowLeft, Github, Linkedin, GitPullRequest, MessageSquarePlus, Sun, Moon } from 'lucide-react';

interface ContributeProps {
  onBack: () => void;
  onToggleTheme: () => void;
  isDark: boolean;
}

export const Contribute: React.FC<ContributeProps> = ({ onBack, onToggleTheme, isDark }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-800 dark:text-slate-200">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 h-16 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <button
          onClick={onToggleTheme}
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-black mb-4">Contribute to the Platform</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Help us build the largest repository of practice questions for the IITM BS Degree.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <a
                href="https://github.com/bhanu2006-24/oppe-practice"
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GitPullRequest className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Submit a Pull Request</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Found a bug? Want to add a new feature? Fork the repository and send us a PR. We review all contributions.
                </p>
              </a>

              <a
                href="https://wa.me/8949731495"
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquarePlus className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Suggest Questions</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                  Have a good OPPE question in mind? Message us on WhatsApp or open an Issue on GitHub with the question details.
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 italic">
                  Note: LinkedIn is not working currently, you can message me on WhatsApp.
                </p>
              </a>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6">
              <h3 className="font-bold mb-4">How to format a new question</h3>
              <pre className="text-xs md:text-sm bg-slate-900 text-slate-300 p-4 rounded-lg overflow-x-auto font-mono">
                {`{
  id: 'py-oppe1-new-question',
  title: 'My New Question',
  subject: 'Python',
  examLevel: 'OPPE 1',
  difficulty: 'Medium',
  description: 'Write a function that...',
  examples: [{ input: '...', output: '...' }],
  starterCode: 'def solve():\\n    pass',
  testCases: [{ input: '()', expected: 'True' }]
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};