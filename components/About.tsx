import React from 'react';
import { ArrowLeft, CheckCircle2, Trophy, Users, Globe, Sun, Moon, Github, Linkedin } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
  onToggleTheme: () => void;
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ onBack, onToggleTheme, isDark }) => {
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
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Info Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800">
            <h1 className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">About OPPE Practice</h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              OPPE Practice is a community-driven platform designed specifically for students of the 
              <strong> IIT Madras BS Degree in Data Science & Applications</strong>. 
              Our mission is to provide a stress-free, browser-based environment to practice for the 
              Open Programming & Project Exams (OPPE).
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="flex items-center text-xl font-bold mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-2" />
                  Zero Setup Required
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Forget installing Python or IDEs. We use WebAssembly (Pyodide) to run Python code directly in your browser securely and instantly.
                </p>
              </div>
              <div>
                <h3 className="flex items-center text-xl font-bold mb-4">
                  <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
                  Exam Aligned
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Questions are categorized by Course (Python, Java, DBMS, PDSA) and Level (OPPE 1 vs OPPE 2) to match the actual curriculum structure.
                </p>
              </div>
            </div>
          </div>

          {/* Creator Profile */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-8">
             <div className="flex-shrink-0">
               <img 
                 src="https://github.com/bhanu2006-24.png" 
                 alt="Bhanu Saini" 
                 className="w-24 h-24 rounded-full border-4 border-slate-100 dark:border-slate-800 shadow-md"
               />
             </div>
             <div className="text-center md:text-left flex-1">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Developed by Bhanu Saini</h2>
                <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-bold mb-4 border border-indigo-200 dark:border-indigo-800">
                   IITM BS Diploma Student
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                   Built to help fellow students practice effectively. Open for contributions and feedback!
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                   <a 
                     href="https://github.com/bhanu2006-24" 
                     target="_blank" 
                     rel="noreferrer" 
                     className="flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium text-sm text-slate-700 dark:text-slate-300"
                   >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                   </a>
                   <a 
                     href="https://www.linkedin.com/in/bhanu-saini-3bb251391/" 
                     target="_blank" 
                     rel="noreferrer" 
                     className="flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors font-medium text-sm text-blue-700 dark:text-blue-400"
                   >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                   </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};