import React, { useState, useEffect, useRef } from 'react';
import { Copy, Trash2, Type, Check } from 'lucide-react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
}

interface Suggestion {
  text: string;
  type: 'keyword' | 'variable' | 'snippet';
  snippet?: string;
}

const KEYWORDS_BY_LANG: Record<string, string[]> = {
  python: [
    'def', 'class', 'return', 'import', 'from', 'if', 'else', 'elif', 'for', 'while',
    'try', 'except', 'finally', 'with', 'as', 'pass', 'break', 'continue', 'print',
    'True', 'False', 'None', 'and', 'or', 'not', 'is', 'in', 'lambda', 'yield',
    'global', 'nonlocal', 'assert', 'del', 'raise', 'async', 'await'
  ],
  java: [
    'public', 'private', 'protected', 'class', 'interface', 'extends', 'implements',
    'void', 'int', 'double', 'boolean', 'String', 'new', 'this', 'super', 'return',
    'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue',
    'try', 'catch', 'finally', 'throw', 'throws', 'static', 'final', 'abstract',
    'package', 'import', 'null', 'true', 'false', 'enum', 'synchronized', 'volatile'
  ],
  sql: [
    'SELECT', 'FROM', 'WHERE', 'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE',
    'CREATE', 'TABLE', 'DROP', 'ALTER', 'INDEX', 'VIEW', 'JOIN', 'INNER', 'LEFT',
    'RIGHT', 'OUTER', 'ON', 'GROUP', 'BY', 'HAVING', 'ORDER', 'ASC', 'DESC',
    'LIMIT', 'OFFSET', 'UNION', 'ALL', 'DISTINCT', 'COUNT', 'SUM', 'AVG', 'MIN', 'MAX',
    'AND', 'OR', 'NOT', 'NULL', 'IS', 'IN', 'BETWEEN', 'LIKE', 'EXISTS', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END'
  ],
  bash: [
    'echo', 'read', 'if', 'fi', 'then', 'else', 'elif', 'for', 'do', 'done',
    'while', 'case', 'esac', 'function', 'return', 'exit', 'export', 'local',
    'source', 'alias', 'unalias', 'set', 'unset', 'shift', 'trap', 'wait'
  ],
  javascript: [
    'function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while',
    'switch', 'case', 'break', 'continue', 'try', 'catch', 'finally', 'throw',
    'new', 'this', 'class', 'extends', 'super', 'import', 'export', 'default',
    'null', 'true', 'false', 'undefined', 'NaN', 'async', 'await', 'typeof', 'instanceof'
  ],
  typescript: [
    'function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while',
    'switch', 'case', 'break', 'continue', 'try', 'catch', 'finally', 'throw',
    'new', 'this', 'class', 'extends', 'super', 'import', 'export', 'default',
    'null', 'true', 'false', 'undefined', 'NaN', 'async', 'await', 'typeof', 'instanceof',
    'interface', 'type', 'enum', 'implements', 'declare', 'namespace', 'module', 'public', 'private', 'protected', 'readonly', 'as', 'any', 'void', 'never', 'unknown'
  ]
};

const SNIPPETS_BY_LANG: Record<string, Record<string, string>> = {
  python: {
    'def': 'def function_name():\n    pass',
    'if': 'if condition:\n    pass',
    'for': 'for item in iterable:\n    pass',
    'class': 'class ClassName:\n    def __init__(self):\n        pass',
    'try': 'try:\n    pass\nexcept Exception as e:\n    print(e)',
    'print': 'print()'
  },
  java: {
    'sout': 'System.out.println();',
    'psvm': 'public static void main(String[] args) {\n    \n}',
    'for': 'for (int i = 0; i < n; i++) {\n    \n}',
    'if': 'if (condition) {\n    \n}'
  },
  javascript: {
    'log': 'console.log();',
    'func': 'function name(params) {\n    \n}',
    'if': 'if (condition) {\n    \n}',
    'for': 'for (let i = 0; i < n; i++) {\n    \n}'
  }
};

const DEFAULT_KEYWORDS = [
  ...KEYWORDS_BY_LANG.python,
  ...KEYWORDS_BY_LANG.java,
  ...KEYWORDS_BY_LANG.sql,
  ...KEYWORDS_BY_LANG.bash
];

export const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, language }) => {
  const [lineCount, setLineCount] = useState(1);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [fontSize, setFontSize] = useState<'text-sm' | 'text-base' | 'text-lg'>('text-sm');
  const [copied, setCopied] = useState(false);

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

  const updateCursorCoords = (cursorPos: number) => {
    if (!textareaRef.current) return;

    const textBeforeCursor = value.substring(0, cursorPos);
    const lines = textBeforeCursor.split('\n');
    const currentLineContent = lines[lines.length - 1];

    // We need to account for scroll position
    const lineHeight = parseInt(getComputedStyle(textareaRef.current).lineHeight);
    const top = (lines.length * lineHeight) - textareaRef.current.scrollTop;

    // Measure width using a temporary element or canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
      context.font = getComputedStyle(textareaRef.current).font;
      const width = context.measureText(currentLineContent).width;

      // Adjust for padding
      const paddingLeft = parseInt(getComputedStyle(textareaRef.current).paddingLeft);
      const paddingTop = parseInt(getComputedStyle(textareaRef.current).paddingTop);

      setCoords({
        top: top + paddingTop,
        left: width + paddingLeft
      });
    }
  };

  const applySuggestion = (suggestion: Suggestion) => {
    if (!textareaRef.current) return;

    const start = textareaRef.current.selectionStart;
    const end = textareaRef.current.selectionEnd;
    const textBeforeCursor = value.substring(0, start);
    const lastWordRegex = /\b(\w+)$/;
    const match = textBeforeCursor.match(lastWordRegex);

    if (match) {
      const wordStart = start - match[1].length;
      const textToInsert = suggestion.snippet || suggestion.text;

      const newValue = value.substring(0, wordStart) + textToInsert + value.substring(end);
      onChange(newValue);
      setShowSuggestions(false);

      setTimeout(() => {
        if (textareaRef.current) {
          // If snippet has cursor placeholder logic, we could handle it here.
          // For now, just place cursor at end of insertion.
          let cursorOffset = textToInsert.length;
          if (suggestion.snippet && suggestion.snippet.includes('()')) {
            cursorOffset = textToInsert.indexOf('(') + 1;
          }

          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = wordStart + cursorOffset;
          textareaRef.current.focus();
        }
      }, 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const start = e.currentTarget.selectionStart;
    const end = e.currentTarget.selectionEnd;

    // Handle Suggestions Navigation
    if (showSuggestions) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSuggestionIndex(prev => (prev + 1) % suggestions.length);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSuggestionIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
        return;
      }
      if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault();
        applySuggestion(suggestions[suggestionIndex]);
        return;
      }
      if (e.key === 'Escape') {
        setShowSuggestions(false);
        return;
      }
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      const newValue = value.substring(0, start) + '    ' + value.substring(end);
      onChange(newValue);

      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
        }
      }, 0);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const currentLineStart = value.lastIndexOf('\n', start - 1) + 1;
      const currentLine = value.substring(currentLineStart, start);

      // Calculate indentation
      const match = currentLine.match(/^(\s*)/);
      let indentation = match ? match[1] : '';

      // Check if we should increase indentation (basic check for block openers)
      const trimmedLine = currentLine.trim();
      if (trimmedLine.endsWith('{') || trimmedLine.endsWith(':') || trimmedLine.endsWith('(') || trimmedLine.endsWith('[')) {
        indentation += '    ';
      }

      const newValue = value.substring(0, start) + '\n' + indentation + value.substring(end);
      onChange(newValue);

      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 1 + indentation.length;
        }
      }, 0);
    } else if (['}', ']', ')'].includes(e.key)) {
      // Smart un-indent logic
      const currentLineStart = value.lastIndexOf('\n', start - 1) + 1;
      const currentLine = value.substring(currentLineStart, start);
      const match = currentLine.match(/^(\s+)$/); // Only whitespace on line so far

      if (match) {
        // If we are typing a closer on a line that is only whitespace, un-indent
        const currentIndent = match[1];
        if (currentIndent.length >= 4) {
          const newIndent = currentIndent.substring(0, currentIndent.length - 4);
          const newValue = value.substring(0, currentLineStart) + newIndent + e.key + value.substring(end);
          e.preventDefault();
          onChange(newValue);
          setTimeout(() => {
            if (textareaRef.current) {
              textareaRef.current.selectionStart = textareaRef.current.selectionEnd = currentLineStart + newIndent.length + 1;
            }
          }, 0);
          return;
        }
      }
    }

    if (['(', '[', '{', '"', "'"].includes(e.key)) {
      // Auto-close logic
      e.preventDefault();
      const char = e.key;
      let closeChar = char;
      if (char === '(') closeChar = ')';
      if (char === '[') closeChar = ']';
      if (char === '{') closeChar = '}';

      const newValue = value.substring(0, start) + char + closeChar + value.substring(end);
      onChange(newValue);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 1;
        }
      }, 0);
    } else if (e.key === 'Backspace') {
      // Auto-delete pair logic
      if (start === end && start > 0) {
        const charToDelete = value[start - 1];
        const nextChar = value[start];
        const pairs: Record<string, string> = { '(': ')', '[': ']', '{': '}', '"': '"', "'": "'" };
        if (pairs[charToDelete] === nextChar) {
          e.preventDefault();
          const newValue = value.substring(0, start - 1) + value.substring(end + 1);
          onChange(newValue);
          setTimeout(() => {
            if (textareaRef.current) {
              textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start - 1;
            }
          }, 0);
        }
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    onChange(val);

    // Suggestion logic
    const cursor = e.target.selectionStart;
    const textBeforeCursor = val.substring(0, cursor);
    const lastWordRegex = /\b(\w+)$/;
    const match = textBeforeCursor.match(lastWordRegex);

    if (match) {
      const currentWord = match[1];
      if (currentWord.length >= 1) {
        const langLower = language?.toLowerCase() || 'text';

        // 1. Keywords
        const langKeywords = KEYWORDS_BY_LANG[langLower] || DEFAULT_KEYWORDS;
        const keywordMatches: Suggestion[] = langKeywords
          .filter(k => k.toLowerCase().startsWith(currentWord.toLowerCase()) && k !== currentWord)
          .map(k => ({ text: k, type: 'keyword' }));

        // 2. Snippets
        const langSnippets = SNIPPETS_BY_LANG[langLower] || {};
        const snippetMatches: Suggestion[] = Object.keys(langSnippets)
          .filter(k => k.toLowerCase().startsWith(currentWord.toLowerCase()))
          .map(k => ({ text: k, type: 'snippet', snippet: langSnippets[k] }));

        // 3. Dynamic Variables (scan code)
        const variableMatches: Suggestion[] = [];
        const uniqueWords = new Set<string>(val.match(/\b[a-zA-Z_]\w*\b/g) || []);
        uniqueWords.forEach(word => {
          if (word.toLowerCase().startsWith(currentWord.toLowerCase()) &&
            word !== currentWord &&
            !langKeywords.includes(word)) {
            variableMatches.push({ text: word, type: 'variable' });
          }
        });

        // Combine and deduplicate
        const allSuggestions = [...snippetMatches, ...keywordMatches, ...variableMatches].slice(0, 8);

        if (allSuggestions.length > 0) {
          setSuggestions(allSuggestions);
          setShowSuggestions(true);
          setSuggestionIndex(0);
          updateCursorCoords(cursor);
        } else {
          setShowSuggestions(false);
        }
      } else {
        setShowSuggestions(false);
      }
    } else {
      setShowSuggestions(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearEditor = () => {
    if (window.confirm('Are you sure you want to clear the editor?')) {
      onChange('');
    }
  };

  const toggleFontSize = () => {
    setFontSize(prev => {
      if (prev === 'text-sm') return 'text-base';
      if (prev === 'text-base') return 'text-lg';
      return 'text-sm';
    });
  };

  return (
    <div className="flex flex-col h-full w-full border border-slate-200 dark:border-slate-700 rounded-md overflow-hidden bg-slate-50 dark:bg-[#1e1e1e]">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-[#252526] border-b border-slate-200 dark:border-slate-700">
        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {language || 'Editor'}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFontSize}
            className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#3e3e42] text-slate-600 dark:text-slate-300 transition-colors"
            title="Toggle Font Size"
          >
            <Type size={14} />
          </button>
          <button
            onClick={copyToClipboard}
            className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#3e3e42] text-slate-600 dark:text-slate-300 transition-colors"
            title="Copy Code"
          >
            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
          </button>
          <button
            onClick={clearEditor}
            className="p-1.5 rounded hover:bg-red-100 dark:hover:bg-red-900/30 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            title="Clear Editor"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      <div className={`relative flex flex-1 overflow-hidden font-mono ${fontSize} transition-colors duration-200`}>
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
        <div className="relative flex-1 h-full">
          {/* Indent Guides */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 3ch,
                var(--indent-guide-color) 3ch,
                transparent 3.1ch
              )`,
              backgroundSize: '4ch 100%',
              opacity: 0.1,
              left: '1rem' // Match padding
            }}
          />
          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onScroll={handleScroll}
            className={`w-full h-full bg-transparent text-slate-800 dark:text-slate-200 p-4 pt-4 outline-none resize-none whitespace-pre border-none leading-6 editor-font custom-scrollbar language-${language || 'text'}`}
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            data-language={language}
            style={{ '--indent-guide-color': 'currentColor' } as React.CSSProperties}
          />

          {/* Suggestions Popup */}
          {showSuggestions && (
            <div
              className="absolute z-50 bg-[#252526] border border-[#454545] rounded-md shadow-xl overflow-hidden min-w-[200px] flex flex-col"
              style={{
                top: `${coords.top + 24}px`, // Offset by line height roughly
                left: `${coords.left}px`
              }}
            >
              {suggestions.map((suggestion, index) => (
                <div
                  key={`${suggestion.text}-${index}`}
                  className={`px-3 py-1.5 cursor-pointer text-sm flex items-center gap-2 ${index === suggestionIndex
                    ? 'bg-[#04395e] text-white'
                    : 'text-[#cccccc] hover:bg-[#2a2d2e]'
                    }`}
                  onClick={() => applySuggestion(suggestion)}
                >
                  <span className={`text-xs opacity-70 w-4 text-center ${suggestion.type === 'snippet' ? 'text-yellow-400' :
                    suggestion.type === 'keyword' ? 'text-blue-400' : 'text-green-400'
                    }`}>
                    {suggestion.type === 'snippet' ? '⬚' : suggestion.type === 'keyword' ? '🗝' : '𝑥'}
                  </span>
                  <span className="font-mono">{suggestion.text}</span>
                  {suggestion.type === 'snippet' && <span className="text-xs opacity-50 ml-auto">Snippet</span>}
                </div>
              ))}
              <div className="px-3 py-1 bg-[#1e1e1e] text-[10px] text-[#858585] border-t border-[#454545] flex justify-between">
                <span>Tab/Enter to select</span>
                <span>{suggestionIndex + 1}/{suggestions.length}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};