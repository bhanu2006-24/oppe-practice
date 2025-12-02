import React, { useState, useEffect, useRef } from 'react';
import { Copy, Check, Type, Search, X, ChevronUp, ChevronDown, AlignLeft, ArrowDownToLine, ArrowUpFromLine, Sparkles, WrapText, MoveVertical, Trash2, ArrowUp, ArrowDown, Replace, Maximize2, Minimize2, Keyboard, PenTool, Play } from 'lucide-react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  onRun?: () => void;
  isZenMode?: boolean;
  onToggleZenMode?: () => void;
  onOpenShortcuts?: () => void;
  onOpenWhiteboard?: () => void;
  errorLine?: number | null;
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

export const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, language, onRun, isZenMode, onToggleZenMode, onOpenShortcuts, onOpenWhiteboard, errorLine }) => {
  const [lineCount, setLineCount] = useState(1);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [fontSize, setFontSize] = useState<'text-sm' | 'text-base' | 'text-lg'>('text-sm');
  const [copied, setCopied] = useState(false);

  // Search & Replace State
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [replaceQuery, setReplaceQuery] = useState('');
  const [searchMatches, setSearchMatches] = useState<number[]>([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(-1);

  // Active Line & Bracket Matching
  const [activeLine, setActiveLine] = useState(0);
  const [matchingBracketIndex, setMatchingBracketIndex] = useState<number | null>(null);

  // Pro Features
  const [wordWrap, setWordWrap] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = value.split('\n').length;
    setLineCount(lines);
  }, [value]);

  // Basic Linting
  const [lintErrors, setLintErrors] = useState<{ line: number; message: string }[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const errors: { line: number; message: string }[] = [];
      const lines = value.split('\n');
      const lang = language?.toLowerCase() || 'text';

      lines.forEach((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('//')) return;

        if (lang === 'python') {
          // Check for missing colons
          if ((trimmed.startsWith('if ') || trimmed.startsWith('elif ') || trimmed.startsWith('else') ||
            trimmed.startsWith('for ') || trimmed.startsWith('while ') || trimmed.startsWith('def ') ||
            trimmed.startsWith('class ') || trimmed.startsWith('try') || trimmed.startsWith('except') ||
            trimmed.startsWith('finally')) && !trimmed.endsWith(':')) {
            errors.push({ line: idx + 1, message: 'Missing colon' });
          }
        }
      });
      setLintErrors(errors);
    }, 800);
    return () => clearTimeout(timer);
  }, [value, language]);

  // Search Logic
  useEffect(() => {
    if (!searchQuery) {
      setSearchMatches([]);
      setCurrentMatchIndex(-1);
      return;
    }
    const matches: number[] = [];
    let pos = value.indexOf(searchQuery);
    while (pos !== -1) {
      matches.push(pos);
      pos = value.indexOf(searchQuery, pos + 1);
    }
    setSearchMatches(matches);
    if (matches.length > 0) {
      setCurrentMatchIndex(0);
    } else {
      setCurrentMatchIndex(-1);
    }
  }, [searchQuery, value]);

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

    // Calculate active line
    setActiveLine(lines.length - 1);

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

  const findMatchingBracket = (index: number) => {
    const char = value[index];
    const pairs: Record<string, string> = { '(': ')', '[': ']', '{': '}', ')': '(', ']': '[', '}': '{' };

    if (!pairs[char]) {
      setMatchingBracketIndex(null);
      return;
    }

    const isOpen = ['(', '[', '{'].includes(char);
    const target = pairs[char];
    let depth = 0;

    if (isOpen) {
      for (let i = index + 1; i < value.length; i++) {
        if (value[i] === char) depth++;
        else if (value[i] === target) {
          if (depth === 0) {
            setMatchingBracketIndex(i);
            return;
          }
          depth--;
        }
      }
    } else {
      for (let i = index - 1; i >= 0; i--) {
        if (value[i] === char) depth++;
        else if (value[i] === target) {
          if (depth === 0) {
            setMatchingBracketIndex(i);
            return;
          }
          depth--;
        }
      }
    }
    setMatchingBracketIndex(null);
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

  // History Management
  const historyRef = useRef<string[]>([value]);
  const historyIndexRef = useRef<number>(0);
  const isUndoRedoRef = useRef(false);

  const addToHistory = (newValue: string) => {
    if (isUndoRedoRef.current) return;

    const currentIndex = historyIndexRef.current;
    const currentHistory = historyRef.current;

    // If we are not at the end of history, discard future
    const newHistory = currentHistory.slice(0, currentIndex + 1);

    // Simple debounce/grouping: if the new value is just one char different and it's been less than 500ms... 
    // Actually, for simplicity and robustness, let's just push. 
    // Optimization: Don't push if identical (handled by slice usually)
    if (newHistory[newHistory.length - 1] !== newValue) {
      newHistory.push(newValue);
      historyRef.current = newHistory;
      historyIndexRef.current = newHistory.length - 1;
    }
  };

  // Sync history with external value changes if needed (optional, but good if value changes from outside)
  // For now, we assume this component drives the changes mostly.

  const handleUndo = () => {
    if (historyIndexRef.current > 0) {
      isUndoRedoRef.current = true;
      historyIndexRef.current -= 1;
      const prevValue = historyRef.current[historyIndexRef.current];
      onChange(prevValue);
      // We need to reset the flag after the render cycle or immediately if synchronous
      // Since onChange might be async or parent-controlled, we just set it.
      // But wait, if parent updates `value` prop, `useEffect` or just render happens.
      // We need to ensure `addToHistory` doesn't trigger on that update.
      setTimeout(() => { isUndoRedoRef.current = false; }, 0);
    }
  };

  const handleRedo = () => {
    if (historyIndexRef.current < historyRef.current.length - 1) {
      isUndoRedoRef.current = true;
      historyIndexRef.current += 1;
      const nextValue = historyRef.current[historyIndexRef.current];
      onChange(nextValue);
      setTimeout(() => { isUndoRedoRef.current = false; }, 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const start = e.currentTarget.selectionStart;
    const end = e.currentTarget.selectionEnd;

    // Undo: Cmd/Ctrl + Z
    if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.key === 'z') {
      e.preventDefault();
      handleUndo();
      return;
    }

    // Redo: Cmd/Ctrl + Shift + Z OR Cmd/Ctrl + Y
    if (((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'z') || ((e.metaKey || e.ctrlKey) && e.key === 'y')) {
      e.preventDefault();
      handleRedo();
      return;
    }

    // Search Shortcut
    if ((e.metaKey || e.ctrlKey) && e.key === 'f') {
      e.preventDefault();
      if (e.shiftKey) {
        // Toggle Zen Mode (Cmd/Ctrl + Shift + F)
        if (onToggleZenMode) onToggleZenMode();
      } else {
        // Find (Cmd/Ctrl + F)
        setShowSearch(true);
      }
      return;
    }

    // Toggle Comment (Cmd/Ctrl + /)
    if ((e.metaKey || e.ctrlKey) && e.key === '/') {
      e.preventDefault();
      const currentLineStart = value.lastIndexOf('\n', start - 1) + 1;
      const currentLineEnd = value.indexOf('\n', start);
      const actualEnd = currentLineEnd === -1 ? value.length : currentLineEnd;
      const currentLine = value.substring(currentLineStart, actualEnd);

      let commentPrefix = '// ';
      if (language === 'python' || language === 'bash') commentPrefix = '# ';
      if (language === 'sql') commentPrefix = '-- ';

      let newLine = '';
      if (currentLine.trimStart().startsWith(commentPrefix.trim())) {
        // Uncomment
        newLine = currentLine.replace(commentPrefix.trim(), '').trimStart();
        const regex = new RegExp(`^(\\s*)${commentPrefix.trim()}\\s?`);
        newLine = currentLine.replace(regex, '$1');
      } else {
        // Comment
        newLine = commentPrefix + currentLine;
      }

      const newValue = value.substring(0, currentLineStart) + newLine + value.substring(actualEnd);
      onChange(newValue);
      addToHistory(newValue);
      // Restore cursor
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = currentLineStart + newLine.length;
        }
      }, 0);
      return;
    }

    // Duplicate Line (Shift + Alt + Down)
    if (e.shiftKey && e.altKey && e.key === 'ArrowDown') {
      e.preventDefault();
      const currentLineStart = value.lastIndexOf('\n', start - 1) + 1;
      const currentLineEnd = value.indexOf('\n', start);
      const actualEnd = currentLineEnd === -1 ? value.length : currentLineEnd;
      const currentLine = value.substring(currentLineStart, actualEnd);

      const newValue = value.substring(0, actualEnd) + '\n' + currentLine + value.substring(actualEnd);
      onChange(newValue);
      addToHistory(newValue);
      return;
    }

    // Move Line Up (Alt + Up)
    if (e.altKey && e.key === 'ArrowUp') {
      e.preventDefault();
      const currentLineStart = value.lastIndexOf('\n', start - 1) + 1;
      if (currentLineStart === 0) return; // Already at top

      const prevLineStart = value.lastIndexOf('\n', currentLineStart - 2) + 1;
      const currentLineEnd = value.indexOf('\n', start);
      const actualEnd = currentLineEnd === -1 ? value.length : currentLineEnd;

      const prevLine = value.substring(prevLineStart, currentLineStart - 1);
      const currentLine = value.substring(currentLineStart, actualEnd);

      const newValue = value.substring(0, prevLineStart) + currentLine + '\n' + prevLine + value.substring(actualEnd);
      onChange(newValue);
      addToHistory(newValue);
      // Move cursor
      setTimeout(() => {
        if (textareaRef.current) {
          const newCursor = prevLineStart + (start - currentLineStart);
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = newCursor;
        }
      }, 0);
      return;
    }

    // Move Line Down (Alt + Down)
    if (e.altKey && e.key === 'ArrowDown') {
      e.preventDefault();
      const currentLineEnd = value.indexOf('\n', start);
      if (currentLineEnd === -1) return; // Already at bottom

      const currentLineStart = value.lastIndexOf('\n', start - 1) + 1;
      const nextLineEnd = value.indexOf('\n', currentLineEnd + 1);
      const actualNextEnd = nextLineEnd === -1 ? value.length : nextLineEnd;

      const currentLine = value.substring(currentLineStart, currentLineEnd);
      const nextLine = value.substring(currentLineEnd + 1, actualNextEnd);

      const newValue = value.substring(0, currentLineStart) + nextLine + '\n' + currentLine + value.substring(actualNextEnd);
      onChange(newValue);
      addToHistory(newValue);
      // Move cursor
      setTimeout(() => {
        if (textareaRef.current) {
          const newCursor = currentLineStart + nextLine.length + 1 + (start - currentLineStart);
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = newCursor;
        }
      }, 0);
      return;
    }

    // Run Code Shortcut (Cmd/Ctrl + Enter)
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      if (onRun) onRun();
      return;
    }

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

      if (e.shiftKey) {
        // Un-indent (Shift + Tab)
        const currentLineStart = value.lastIndexOf('\n', start - 1) + 1;
        const currentLineEnd = value.indexOf('\n', start);
        const actualEnd = currentLineEnd === -1 ? value.length : currentLineEnd;
        const currentLine = value.substring(currentLineStart, actualEnd);

        let removeCount = 0;
        if (currentLine.startsWith('    ')) {
          removeCount = 4;
        } else if (currentLine.startsWith('\t')) {
          removeCount = 1;
        } else {
          // Check for partial spaces
          const match = currentLine.match(/^ +/);
          if (match) {
            removeCount = Math.min(match[0].length, 4);
          }
        }

        if (removeCount > 0) {
          const newValue = value.substring(0, currentLineStart) + currentLine.substring(removeCount) + value.substring(actualEnd);
          onChange(newValue);
          addToHistory(newValue);
          setTimeout(() => {
            if (textareaRef.current) {
              textareaRef.current.selectionStart = textareaRef.current.selectionEnd = Math.max(currentLineStart, start - removeCount);
            }
          }, 0);
        }
      } else {
        // Indent (Tab)
        const newValue = value.substring(0, start) + '    ' + value.substring(end);
        onChange(newValue);
        addToHistory(newValue);

        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
          }
        }, 0);
      }
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
      addToHistory(newValue);

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
          addToHistory(newValue);
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
      addToHistory(newValue);
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
          addToHistory(newValue);
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
    addToHistory(val);

    const cursor = e.target.selectionStart;
    updateCursorCoords(cursor);
    findMatchingBracket(cursor - 1); // Check bracket before cursor

    // Suggestion logic
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

  const goToLine = () => {
    const line = prompt(`Go to line(1 - ${lineCount}): `);
    if (line) {
      const lineNum = parseInt(line);
      if (!isNaN(lineNum) && lineNum >= 1 && lineNum <= lineCount) {
        // Calculate position
        const lines = value.split('\n');
        let pos = 0;
        for (let i = 0; i < lineNum - 1; i++) {
          pos += lines[i].length + 1; // +1 for newline
        }

        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = pos;
          textareaRef.current.focus();
          // Scroll
          const lineHeight = 24;
          textareaRef.current.scrollTop = (lineNum * lineHeight) - 100;
        }
      }
    }
  };

  // Search Functions
  const findNext = () => {
    if (searchMatches.length === 0) return;
    const nextIndex = (currentMatchIndex + 1) % searchMatches.length;
    setCurrentMatchIndex(nextIndex);

    // Scroll to match
    if (textareaRef.current) {
      const matchPos = searchMatches[nextIndex];
      textareaRef.current.selectionStart = matchPos;
      textareaRef.current.selectionEnd = matchPos + searchQuery.length;
      textareaRef.current.focus();

      // Calculate scroll position (approximate)
      const lines = value.substring(0, matchPos).split('\n').length;
      const lineHeight = 24; // approx
      textareaRef.current.scrollTop = (lines * lineHeight) - 100;
    }
  };

  const findPrev = () => {
    if (searchMatches.length === 0) return;
    const prevIndex = (currentMatchIndex - 1 + searchMatches.length) % searchMatches.length;
    setCurrentMatchIndex(prevIndex);

    if (textareaRef.current) {
      const matchPos = searchMatches[prevIndex];
      textareaRef.current.selectionStart = matchPos;
      textareaRef.current.selectionEnd = matchPos + searchQuery.length;
      textareaRef.current.focus();

      const lines = value.substring(0, matchPos).split('\n').length;
      const lineHeight = 24;
      textareaRef.current.scrollTop = (lines * lineHeight) - 100;
    }
  };

  const replaceCurrent = () => {
    if (currentMatchIndex === -1 || searchMatches.length === 0) return;
    const matchPos = searchMatches[currentMatchIndex];
    const newValue = value.substring(0, matchPos) + replaceQuery + value.substring(matchPos + searchQuery.length);
    onChange(newValue);
    // Logic to update matches will trigger via useEffect
  };

  const replaceAll = () => {
    if (!searchQuery) return;
    const newValue = value.replaceAll(searchQuery, replaceQuery);
    onChange(newValue);
  };

  const formatCode = () => {
    let formatted = value;
    const lang = language?.toLowerCase() || 'text';

    if (lang === 'python') {
      // Basic Python formatting: Fix indentation
      const lines = formatted.split('\n');
      let indentLevel = 0;
      const formattedLines = lines.map(line => {
        const trimmed = line.trim();
        if (!trimmed) return '';

        // Decrease indent for dedent keywords
        if (trimmed.startsWith('return') || trimmed.startsWith('break') || trimmed.startsWith('continue') || trimmed.startsWith('pass') || trimmed.startsWith('raise')) {
          // This is heuristic and imperfect for Python without a parser
        }

        // Check for block closer (dedent) - very basic heuristic
        if (trimmed.startsWith('elif') || trimmed.startsWith('else:') || trimmed.startsWith('except') || trimmed.startsWith('finally')) {
          indentLevel = Math.max(0, indentLevel - 1);
        }

        const indent = '    '.repeat(indentLevel);
        const newLine = indent + trimmed;

        // Increase indent for block openers
        if (trimmed.endsWith(':')) {
          indentLevel++;
        }

        return newLine;
      });
      formatted = formattedLines.join('\n');
    } else if (['java', 'javascript', 'typescript', 'cpp', 'c'].includes(lang)) {
      // Basic C-style formatting
      const lines = formatted.split('\n');
      let indentLevel = 0;
      const formattedLines = lines.map(line => {
        const trimmed = line.trim();
        if (!trimmed) return '';

        // Check for closing brace
        if (trimmed.startsWith('}')) {
          indentLevel = Math.max(0, indentLevel - 1);
        }

        const indent = '    '.repeat(indentLevel);
        const newLine = indent + trimmed;

        // Check for opening brace
        if (trimmed.endsWith('{')) {
          indentLevel++;
        }

        return newLine;
      });
      formatted = formattedLines.join('\n');
    }

    onChange(formatted);
  };

  return (
    <div className="flex flex-col h-full w-full border border-slate-200 dark:border-slate-700 rounded-md overflow-hidden bg-slate-50 dark:bg-[#1e1e1e] relative group">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-[#252526] border-b border-slate-200 dark:border-slate-700">
        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {language || 'Editor'}
        </div>
        <div className="flex items-center gap-2">
          {/* Zen Mode Run Button */}
          {isZenMode && onRun && (
            <button
              onClick={onRun}
              className="flex items-center gap-1 px-2 py-1 bg-green-600 hover:bg-green-500 text-white rounded text-xs font-bold mr-2 transition-colors"
              title="Run Code (Cmd/Ctrl + Enter)"
            >
              <Play size={12} />
              Run
            </button>
          )}

          <div className="h-4 w-px bg-slate-300 dark:bg-slate-600 mx-1"></div>

          {onOpenShortcuts && (
            <button
              onClick={onOpenShortcuts}
              className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#3e3e42] text-slate-600 dark:text-slate-300 transition-colors"
              title="Keyboard Shortcuts"
            >
              <Keyboard size={14} />
            </button>
          )}
          {onOpenWhiteboard && (
            <button
              onClick={onOpenWhiteboard}
              className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#3e3e42] text-slate-600 dark:text-slate-300 transition-colors"
              title="Open Whiteboard"
            >
              <PenTool size={14} />
            </button>
          )}
          {onToggleZenMode && (
            <button
              onClick={onToggleZenMode}
              className={`p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#3e3e42] text-slate-600 dark:text-slate-300 transition-colors ${isZenMode ? 'text-blue-500' : ''}`}
              title={isZenMode ? "Exit Zen Mode" : "Enter Zen Mode"}
            >
              {isZenMode ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
          )}

          <div className="h-4 w-px bg-slate-300 dark:bg-slate-600 mx-1"></div>
          <button
            onClick={() => setShowSearch(!showSearch)}
            className={`p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#3e3e42] transition-colors ${showSearch ? 'bg-slate-200 dark:bg-[#3e3e42] text-blue-500' : 'text-slate-600 dark:text-slate-300'}`}
            title="Find & Replace (Cmd/Ctrl+F)"
          >
            <Search size={14} />
          </button>
          <button
            onClick={() => setWordWrap(!wordWrap)}
            className={`p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#3e3e42] transition-colors ${wordWrap ? 'bg-slate-200 dark:bg-[#3e3e42] text-blue-500' : 'text-slate-600 dark:text-slate-300'}`}
            title="Toggle Word Wrap"
          >
            <WrapText size={14} />
          </button>
          <button
            onClick={goToLine}
            className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#3e3e42] text-slate-600 dark:text-slate-300 transition-colors"
            title="Go to Line"
          >
            <MoveVertical size={14} />
          </button>
          <button
            onClick={formatCode}
            className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#3e3e42] text-slate-600 dark:text-slate-300 transition-colors"
            title="Format Code"
          >
            <Sparkles size={14} />
          </button>
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

      {/* Search Popup */}
      {showSearch && (
        <div className="absolute top-10 right-4 z-40 bg-white dark:bg-[#252526] shadow-xl border border-slate-200 dark:border-slate-600 rounded-md p-2 flex flex-col gap-2 w-72">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Find"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-slate-100 dark:bg-[#3e3e42] border-none rounded px-2 py-1 text-xs outline-none text-slate-800 dark:text-slate-200"
              autoFocus
            />
            <div className="text-xs text-slate-400 min-w-[30px] text-center">
              {searchMatches.length > 0 ? `${currentMatchIndex + 1} /${searchMatches.length}` : '0/0'}
            </div >
            <button onClick={findPrev} className="p-1 hover:bg-slate-200 dark:hover:bg-[#505055] rounded"><ArrowUp size={12} /></button>
            <button onClick={findNext} className="p-1 hover:bg-slate-200 dark:hover:bg-[#505055] rounded"><ArrowDown size={12} /></button>
            <button onClick={() => setShowSearch(false)} className="p-1 hover:bg-slate-200 dark:hover:bg-[#505055] rounded"><X size={12} /></button>
          </div >
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Replace"
              value={replaceQuery}
              onChange={(e) => setReplaceQuery(e.target.value)}
              className="flex-1 bg-slate-100 dark:bg-[#3e3e42] border-none rounded px-2 py-1 text-xs outline-none text-slate-800 dark:text-slate-200"
            />
            <button onClick={replaceCurrent} className="p-1 hover:bg-slate-200 dark:hover:bg-[#505055] rounded" title="Replace"><Replace size={12} /></button>
            <button onClick={replaceAll} className="px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[10px]">All</button>
          </div>
        </div >
      )}

      <div className={`relative flex flex-1 overflow-hidden font-mono ${fontSize} transition-colors duration-200`}>
        {/* Line Numbers */}
        <div
          ref={lineNumbersRef}
          className="w-12 bg-slate-100 dark:bg-[#1e1e1e] border-r border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 text-right pr-3 pt-4 select-none overflow-hidden"
        >
          {Array.from({ length: Math.max(lineCount, 20) }).map((_, i) => {
            const isRuntimeError = errorLine === i + 1;
            const lintError = lintErrors.find(e => e.line === i + 1);
            const hasError = isRuntimeError || lintError;

            return (
              <div
                key={i}
                className={`leading-6 h-6 flex justify-end pr-1 ${i === activeLine ? 'text-slate-800 dark:text-slate-200 font-bold' : ''} ${hasError ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' : ''}`}
                title={isRuntimeError ? 'Runtime Error' : lintError?.message}
              >
                {hasError && <span className="text-[10px] mr-1 select-none">!</span>}
                {i + 1}
              </div>
            );
          })}
        </div>

        {/* Text Area */}
        <div className="relative flex-1 h-full">
          {/* Active Line Highlight */}
          <div
            className="absolute left-0 right-0 pointer-events-none bg-slate-200/50 dark:bg-white/5"
            style={{
              top: `${(activeLine * 24) + 16 - (textareaRef.current?.scrollTop || 0)}px`, // 24px line height, 16px padding top
              height: '24px',
              display: textareaRef.current ? 'block' : 'none'
            }}
          />

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
            onClick={() => {
              if (textareaRef.current) {
                updateCursorCoords(textareaRef.current.selectionStart);
                findMatchingBracket(textareaRef.current.selectionStart - 1);
              }
            }}
            className={`w-full h-full bg-transparent text-slate-800 dark:text-slate-200 p-4 pt-4 outline-none resize-none ${wordWrap ? 'whitespace-pre-wrap' : 'whitespace-pre'} border-none leading-6 editor-font custom-scrollbar language-${language || 'text'} relative z-10`}
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
    </div >
  );
};