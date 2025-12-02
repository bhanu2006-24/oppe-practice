import React from 'react';
import { X, Keyboard } from 'lucide-react';

interface ShortcutsModalProps {
    onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-6 w-full max-w-md m-4 border border-slate-200 dark:border-slate-700" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center">
                        <Keyboard className="w-5 h-5 mr-2" />
                        Keyboard Shortcuts
                    </h3>
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Run Code</span>
                        <kbd className="px-2 py-1 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded text-xs font-mono text-slate-600 dark:text-slate-200">Cmd/Ctrl + Enter</kbd>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Toggle Comment</span>
                        <kbd className="px-2 py-1 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded text-xs font-mono text-slate-600 dark:text-slate-200">Cmd/Ctrl + /</kbd>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Find / Replace</span>
                        <kbd className="px-2 py-1 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded text-xs font-mono text-slate-600 dark:text-slate-200">Cmd/Ctrl + F</kbd>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Duplicate Line</span>
                        <kbd className="px-2 py-1 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded text-xs font-mono text-slate-600 dark:text-slate-200">Shift + Alt + ↓</kbd>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Move Line</span>
                        <kbd className="px-2 py-1 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded text-xs font-mono text-slate-600 dark:text-slate-200">Alt + ↑/↓</kbd>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Zen Mode</span>
                        <kbd className="px-2 py-1 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded text-xs font-mono text-slate-600 dark:text-slate-200">Cmd/Ctrl + Z</kbd>
                    </div>
                </div>
            </div>
        </div>
    );
};
