import React, { useState } from 'react';
import { Subject, Level, ExamLevel } from '../types';
import { Clock, Trophy, AlertCircle, CheckCircle, XCircle, Play } from 'lucide-react';

interface ExamSetupProps {
    onStart: (subject: Subject, level: ExamLevel, count: number, duration: number) => void;
    onCancel: () => void;
}

export const ExamSetup: React.FC<ExamSetupProps> = ({ onStart, onCancel }) => {
    const [selectedSubject, setSelectedSubject] = useState<Subject>('Python');
    const [selectedLevel, setSelectedLevel] = useState<ExamLevel>('OPPE 1');
    const [questionCount, setQuestionCount] = useState(3);
    const [duration, setDuration] = useState(45);

    const subjects: Subject[] = ['Python', 'Java', 'DBMS', 'PDSA', 'System_Commands', 'ML_Practice'];

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-8 w-full max-w-md m-4 border border-slate-200 dark:border-slate-700">
                <div className="text-center mb-8">
                    <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Mock Exam Simulator</h2>
                    <p className="text-slate-500 dark:text-slate-400">
                        Customize your exam settings below.
                    </p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Select Subject</label>
                        <div className="grid grid-cols-2 gap-2">
                            {subjects.map(sub => (
                                <button
                                    key={sub}
                                    onClick={() => setSelectedSubject(sub)}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${selectedSubject === sub
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'
                                        }`}
                                >
                                    {sub.replace('_', ' ')}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Select Level</label>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setSelectedLevel('OPPE 1')}
                                className={`flex-1 px-4 py-3 rounded-lg text-sm font-bold transition-colors border ${selectedLevel === 'OPPE 1'
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'
                                    }`}
                            >
                                OPPE 1
                            </button>
                            <button
                                onClick={() => setSelectedLevel('OPPE 2')}
                                className={`flex-1 px-4 py-3 rounded-lg text-sm font-bold transition-colors border ${selectedLevel === 'OPPE 2'
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'
                                    }`}
                            >
                                OPPE 2
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Questions</label>
                            <select
                                value={questionCount}
                                onChange={(e) => setQuestionCount(Number(e.target.value))}
                                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                {[1, 2, 3, 4, 5, 10].map(n => (
                                    <option key={n} value={n}>{n} Questions</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Duration (Mins)</label>
                            <select
                                value={duration}
                                onChange={(e) => setDuration(Number(e.target.value))}
                                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                {[15, 30, 45, 60, 90, 120].map(n => (
                                    <option key={n} value={n}>{n} Minutes</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex gap-3">
                    <button
                        onClick={onCancel}
                        className="flex-1 px-4 py-3 rounded-lg font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onStart(selectedSubject, selectedLevel, questionCount, duration)}
                        className="flex-1 px-4 py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center"
                    >
                        <Play className="w-4 h-4 mr-2" />
                        Start Exam
                    </button>
                </div>
            </div>
        </div>
    );
};

interface ExamResultsProps {
    score: number;
    total: number;
    onClose: () => void;
    results: { id: string; title: string; passed: boolean }[];
}

export const ExamResults: React.FC<ExamResultsProps> = ({ score, total, onClose, results }) => {
    const percentage = Math.round((score / total) * 100);
    let message = "Keep practicing!";
    let color = "text-red-500";

    if (percentage >= 80) {
        message = "Excellent Work!";
        color = "text-green-500";
    } else if (percentage >= 50) {
        message = "Good Effort!";
        color = "text-yellow-500";
    }

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-8 w-full max-w-md m-4 border border-slate-200 dark:border-slate-700 text-center">
                <div className="mb-6">
                    <Trophy className={`w-16 h-16 mx-auto mb-4 ${color}`} />
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">{score} / {total}</h2>
                    <p className={`text-xl font-bold ${color}`}>{message}</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mb-8 text-left space-y-3">
                    {results.map((res, idx) => (
                        <div key={res.id} className="flex items-center justify-between">
                            <div className="flex items-center overflow-hidden">
                                <span className="text-slate-400 font-mono mr-3 text-sm">Q{idx + 1}</span>
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium truncate">{res.title}</span>
                            </div>
                            {res.passed ? (
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 ml-2" />
                            ) : (
                                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 ml-2" />
                            )}
                        </div>
                    ))}
                </div>

                <button
                    onClick={onClose}
                    className="w-full px-4 py-3 rounded-lg font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity"
                >
                    Close & Review
                </button>
            </div>
        </div>
    );
};
