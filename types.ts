export interface TestCase {
  input: string;
  expected: string;
}

export type Level = 'Foundation' | 'Diploma' | 'Degree';
export type Subject = 'Python' | 'Java' | 'PDSA' | 'DBMS' | 'SQL' | 'ML_Practice' | 'System_Commands';
export type ExamLevel = 'OPPE 1' | 'OPPE 2';
export type Language = 'python' | 'javascript' | 'typescript' | 'java' | 'c++' | 'go' | 'rust' | 'bash' | 'sql';

export interface Problem {
  id: string;
  title: string;
  subject: Subject;
  examLevel: ExamLevel;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  starterCode: string;
  setupCode?: string;
  testCases: TestCase[];
  functionName: string; // The name of the function to call for testing
  hint?: string;
}

export interface TestResult {
  passed: boolean;
  input: string;
  expected: string;
  actual: string;
  error?: string;
}

export enum ExecutionStatus {
  IDLE = 'IDLE',
  LOADING_RUNTIME = 'LOADING_RUNTIME',
  RUNNING = 'RUNNING',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}

export interface Course {
  id: Subject;
  title: string;
  level: Level;
  description: string;
  icon: any;
  color: string;
  available: boolean;
}