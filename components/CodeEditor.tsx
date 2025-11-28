import React, { useState, useEffect, useRef } from 'react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, language }) => {
  const [lineCount, setLineCount] = useState(1);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = value.split('\n').length;
    setLineCount(lines);
  }, [value]);

  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;

      const newValue = value.substring(0, start) + '    ' + value.substring(end);
      onChange(newValue);

      // Need to defer setting selection range until after render
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }
  };

  return (
    <div className="relative flex h-full w-full bg-slate-50 dark:bg-[#1e1e1e] font-mono text-sm overflow-hidden transition-colors duration-200">
      {/* Line Numbers */}
      <div
        ref={lineNumbersRef}
        className="w-12 bg-slate-100 dark:bg-[#1e1e1e] border-r border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 text-right pr-3 pt-4 select-none overflow-hidden"
      >
        {Array.from({ length: Math.max(lineCount, 20) }).map((_, i) => (
          <div key={i} className="leading-6 h-6">{i + 1}</div>
        ))}
      </div>

      {/* Text Area */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
        className={`flex-1 bg-transparent text-slate-800 dark:text-slate-200 p-4 pt-4 outline-none resize-none whitespace-pre border-none leading-6 editor-font custom-scrollbar language-${language || 'text'}`}
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        data-language={language}
      />
    </div>
  );
};