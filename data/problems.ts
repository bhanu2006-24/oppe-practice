import { Problem } from '../types';
import { PYTHON_OPPE1_PROBLEMS } from './python-oppe1';
import { PYTHON_OPPE2_PROBLEMS } from './python-oppe2';
import { PDSA_OPPE1_PROBLEMS } from './pdsa-oppe1';
import { PDSA_OPPE2_PROBLEMS } from './pdsa-oppe2';
import { DBMS_OPPE1_PROBLEMS } from './dbms-oppe1';
import { DBMS_OPPE2_PROBLEMS } from './dbms-oppe2';
import { MLP_OPPE1_PROBLEMS } from './mlp-oppe1';
import { MLP_OPPE2_PROBLEMS } from './mlp-oppe2';
import { JAVA_OPPE1_PROBLEMS } from './java-oppe1';
import { JAVA_OPPE2_PROBLEMS } from './java-oppe2';
import { SYSTEM_COMMANDS_OPPE1_PROBLEMS } from './system-commands-oppe1';
import { SYSTEM_COMMANDS_OPPE2_PROBLEMS } from './system-commands-oppe2';
import { SQL_OPPE1_PROBLEMS } from './sql-oppe1';
import { SQL_OPPE2_PROBLEMS } from './sql-oppe2';

export const PROBLEMS: Problem[] = [
  // ==========================================
  // SUBJECT: PROGRAMMING IN PYTHON
  // ==========================================

  // --- PYTHON OPPE 1 ---
  ...PYTHON_OPPE1_PROBLEMS,

  // --- PYTHON OPPE 2 ---
  ...PYTHON_OPPE2_PROBLEMS,

  // ==========================================
  // SUBJECT: PDSA (Programming Data Structures & Algorithms)
  // ==========================================

  // --- PDSA OPPE 1 ---
  ...PDSA_OPPE1_PROBLEMS,

  // --- PDSA OPPE 2 ---
  ...PDSA_OPPE2_PROBLEMS,

  // ==========================================
  // SUBJECT: DBMS (SQL Simulation in Python)
  // ==========================================

  // --- DBMS OPPE 1 ---
  ...DBMS_OPPE1_PROBLEMS,

  // --- DBMS OPPE 2 ---
  ...DBMS_OPPE2_PROBLEMS,

  // ==========================================
  // SUBJECT: ML PRACTICE
  // ==========================================

  // --- MLP OPPE 1 ---
  ...MLP_OPPE1_PROBLEMS,

  // --- MLP OPPE 2 ---
  ...MLP_OPPE2_PROBLEMS,

  // ==========================================
  // SUBJECT: JAVA
  // ==========================================

  // --- JAVA OPPE 1 ---
  ...JAVA_OPPE1_PROBLEMS,

  // --- JAVA OPPE 2 ---
  ...JAVA_OPPE2_PROBLEMS,

  // ==========================================
  // SUBJECT: SYSTEM COMMANDS (BASH)
  // ==========================================

  // --- BASH OPPE 1 ---
  ...SYSTEM_COMMANDS_OPPE1_PROBLEMS,

  // --- BASH OPPE 2 ---
  ...SYSTEM_COMMANDS_OPPE2_PROBLEMS,

  // ==========================================
  // SUBJECT: SQL (DBMS)
  // ==========================================

  // --- SQL OPPE 1 ---
  ...SQL_OPPE1_PROBLEMS,

  // --- SQL OPPE 2 ---
  ...SQL_OPPE2_PROBLEMS
];