import React, { useState } from 'react';
import { Subject, Level, ExamLevel, Course } from '../types';
import {
  Code2, Terminal, BookOpen, Database, Cpu,
  Trophy, Github, Linkedin, Layout,
  GraduationCap, School, Book, Info, Heart, Sun, Moon, Mail
} from 'lucide-react';

interface HomeProps {
  onSelectCourse: (subject: Subject, examLevel: ExamLevel) => void;
  onGoPlayground: () => void;
  onGoAbout: () => void;
  onGoContribute: () => void;
  onToggleTheme: () => void;
  isDark: boolean;
  solvedCount: number;
}

export const Home: React.FC<HomeProps> = ({
  onSelectCourse, onGoPlayground, onGoAbout, onGoContribute, onToggleTheme, isDark, solvedCount
}) => {
  const [activeLevel, setActiveLevel] = useState<Level>('Foundation');

  const courses: Course[] = [
    // Foundation
    {
      id: 'Python',
      title: 'Programming in Python',
      level: 'Foundation',
      description: 'The starting point. Loops, Functions, Strings, Lists and Logic.',
      icon: Code2,
      color: 'blue',
      available: true
    },
    // Diploma
    {
      id: 'PDSA',
      title: 'Data Structures (PDSA)',
      level: 'Diploma',
      description: 'Efficiency, Sorting, recursion, Linked Lists, Trees.',
      icon: Layout,
      color: 'purple',
      available: true
    },
    {
      id: 'DBMS',
      title: 'Database Management',
      level: 'Diploma',
      description: 'SQL Logic, Schema Design, Joins (Real SQL).',
      icon: Database,
      color: 'teal',
      available: true
    },
    {
      id: 'ML_Practice',
      title: 'ML Practice',
      level: 'Diploma',
      description: 'Algorithms from scratch. Vectors, Gradients & Regression.',
      icon: Cpu,
      color: 'indigo',
      available: true
    },
    {
      id: 'Java',
      title: 'Programming in Java',
      level: 'Diploma',
      description: 'Object Oriented Programming. Classes, Inheritance, Interfaces.',
      icon: BookOpen,
      color: 'orange',
      available: true
    },
    {
      id: 'System_Commands',
      title: 'System Commands',
      level: 'Diploma',
      description: 'Linux/Bash Scripting. File manipulation, Grep, Awk, Sed.',
      icon: Terminal,
      color: 'slate',
      available: true
    },
    {
      id: 'SQL',
      title: 'SQL (DBMS)',
      level: 'Diploma',
      description: 'Standard SQL queries. SELECT, JOIN, GROUP BY, Subqueries.',
      icon: Database,
      color: 'teal',
      available: true
    },
    // Degree
    // Placeholder for Degree content which is coming soon
  ];

  const filteredCourses = courses.filter(c => c.level === activeLevel);

  const getLevelIcon = (level: Level) => {
    switch (level) {
      case 'Foundation': return Book;
      case 'Diploma': return School;
      case 'Degree': return GraduationCap;
    }
  };

  const LevelButton = ({ level, label }: { level: Level, label: string }) => {
    const Icon = getLevelIcon(level);
    const isActive = activeLevel === level;
    return (
      <button
        onClick={() => setActiveLevel(level)}
        className={`flex items-center px-5 py-3 rounded-lg font-bold text-sm transition-all duration-200 ${isActive
          ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md transform scale-105'
          : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
          }`}
      >
        <Icon className={`w-4 h-4 mr-2 ${isActive ? '' : 'opacity-50'}`} />
        {label}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-800 dark:text-slate-200 font-sans transition-colors duration-200 flex flex-col">

      {/* Navbar */}
      <nav className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-50 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Back to Top"
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              OPPE <span className="text-blue-600 dark:text-blue-400">Practice</span>
            </span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700 mr-2">
              <Trophy className="w-3.5 h-3.5 mr-2 text-yellow-500" />
              <span>{solvedCount} Solved</span>
            </div>

            <div className="flex items-center space-x-1 border-r border-slate-200 dark:border-slate-700 pr-4 mr-2">
              <button onClick={onGoContribute} className="p-2 text-slate-500 hover:text-pink-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors" title="Contribute">
                <Heart className="w-5 h-5" />
              </button>
              <button onClick={onGoAbout} className="p-2 text-slate-500 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors" title="About">
                <Info className="w-5 h-5" />
              </button>
              <a href="https://github.com/bhanu2006-24/oppe-practice" target="_blank" rel="noreferrer" className="p-2 text-slate-500 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">

        {/* Header Hero */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            IITM BS Degree <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">Exam Practice</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Select your level, choose a subject, and start coding. Designed to mimic the OPPE environment.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onGoPlayground}
              className="inline-flex items-center px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:shadow-lg hover:scale-105 transition-all"
            >
              <Terminal className="w-4 h-4 mr-2" />
              Open Playground
            </button>
            <button
              onClick={onGoContribute}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white dark:bg-transparent border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contribute Question
            </button>
          </div>
        </div>

        {/* Level Tabs */}
        <div className="flex justify-center mb-12 gap-3 flex-wrap sticky top-20 z-10 py-2">
          <LevelButton level="Foundation" label="Foundation Level" />
          <LevelButton level="Diploma" label="Diploma Level" />
          <LevelButton level="Degree" label="Degree Level" />
        </div>

        {/* Degree Placeholder */}
        {activeLevel === 'Degree' && (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 border-dashed">
            <GraduationCap className="w-16 h-16 mx-auto text-slate-300 dark:text-slate-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-500 dark:text-slate-400">Degree Level Content Coming Soon</h3>
            <p className="text-slate-400">We are currently curating questions for the Degree level courses.</p>
          </div>
        )}

        {/* Subjects Grid */}
        {activeLevel !== 'Degree' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => {
              const Icon = course.icon;
              // Dynamic Color Classes
              const colorClasses = {
                blue: 'bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/30',
                purple: 'bg-purple-50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/30',
                indigo: 'bg-indigo-50 dark:bg-indigo-900/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/30',
                teal: 'bg-teal-50 dark:bg-teal-900/10 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-900/30',
                orange: 'bg-orange-50 dark:bg-orange-900/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-900/30',
                slate: 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700',
              }[course.color] || 'bg-slate-50 text-slate-600';

              return (
                <div
                  key={course.id}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 ${course.available
                    ? `bg-white dark:bg-slate-900 hover:shadow-xl hover:-translate-y-1 ${colorClasses}`
                    : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-70 grayscale'
                    }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {!course.available && (
                      <span className="px-2 py-1 text-[10px] font-bold uppercase bg-slate-200 dark:bg-slate-800 text-slate-500 rounded">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {course.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 h-10 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex gap-2 mt-auto pt-4">
                    <button
                      onClick={() => course.available && onSelectCourse(course.id, 'OPPE 1')}
                      disabled={!course.available}
                      className="flex-1 px-3 py-2 text-xs font-bold text-center rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:cursor-not-allowed"
                    >
                      OPPE 1
                    </button>
                    <button
                      onClick={() => course.available && onSelectCourse(course.id, 'OPPE 2')}
                      disabled={!course.available}
                      className="flex-1 px-3 py-2 text-xs font-bold text-center rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      OPPE 2
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </main>

      {/* Professional Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-1.5 rounded-md">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-white">OPPE Practice</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                A community-driven platform built to help IIT Madras BS students ace their programming exams through continuous practice.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/bhanu2006-24" className="text-slate-400 hover:text-black dark:hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              </div>
            </div>

            <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-6">Platform</h4>
                <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                  <li><button onClick={() => setActiveLevel('Foundation')} className="hover:text-blue-600 dark:hover:text-blue-400">Foundation Level</button></li>
                  <li><button onClick={() => setActiveLevel('Diploma')} className="hover:text-blue-600 dark:hover:text-blue-400">Diploma Level</button></li>
                  <li><button onClick={onGoPlayground} className="hover:text-blue-600 dark:hover:text-blue-400">Online Compiler</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-6">Community</h4>
                <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                  <li><button onClick={onGoAbout} className="hover:text-blue-600 dark:hover:text-blue-400">About Us</button></li>
                  <li><button onClick={onGoContribute} className="hover:text-blue-600 dark:hover:text-blue-400">Contribute Questions</button></li>
                  <li><a href="https://github.com/bhanu2006-24/oppe-practice" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">GitHub Repository</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-6">Resources</h4>
                <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                  <li><a href="https://study.iitm.ac.in/ds/" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">IITM BS Website</a></li>
                  <li><a href="https://docs.google.com/document/d/e/2PACX-1vRxGnnDCVAO3KX2CGtMIcJQuDrAasVk2JHbDxkjsGrTP5ShhZK8N6ZSPX89lexKx86QPAUswSzGLsOA/pub" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Student Handbook</a></li>
                  <li><a href="https://docs.google.com/document/d/e/2PACX-1vSBP6TJyZDklGPMyRtTwQc1cWZKOrozsOy5qmBwB8awTFvBbPN33-IxUV2WYupNdlXQOCgKwV9fDQKq/pub" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Grading Document</a></li>
                  <li><a href="https://score-checker-379619009600.asia-south1.run.app/" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Score Checker</a></li>
                  <li><a href="https://lookerstudio.google.com/u/0/reporting/d02dac13-665b-49cc-8d51-0451268a6a3e/page/p_ajm0ky3xtd?s=k3kRC9kDo54" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Looker Studio</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
            <p>&copy; {new Date().getFullYear()} OPPE Practice. Not affiliated with IIT Madras.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>Made with ❤️ by BS Students</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};