import { Problem } from '../types';

export const SQL_OPPE2_PROBLEMS: Problem[] = [
        {
                id: 'sql2-inner-join',
                title: 'Inner Join',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Select student name and course name using INNER JOIN.`,
                examples: [{ input: '', output: 'Alice|Math\nBob|Science' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; DROP TABLE IF EXISTS courses; CREATE TABLE students (id INT, name TEXT);
CREATE TABLE courses (id INT, title TEXT, student_id INT);
INSERT INTO students VALUES (1, 'Alice'), (2, 'Bob');
INSERT INTO courses VALUES (101, 'Math', 1), (102, 'Science', 2);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice|Math\nBob|Science' }],
                hint: 'JOIN ON students.id = courses.student_id'
        },
        {
                id: 'sql2-left-join',
                title: 'Left Join',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Select all students and their courses (if any) using LEFT JOIN.`,
                examples: [{ input: '', output: 'Alice|Math\nBob|NULL' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; DROP TABLE IF EXISTS courses; CREATE TABLE students (id INT, name TEXT);
CREATE TABLE courses (id INT, title TEXT, student_id INT);
INSERT INTO students VALUES (1, 'Alice'), (2, 'Bob');
INSERT INTO courses VALUES (101, 'Math', 1);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice|Math\nBob|NULL' }],
                hint: 'LEFT JOIN'
        },
        {
                id: 'sql2-right-join',
                title: 'Right Join',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Select all courses and their students (if any) using RIGHT JOIN (Simulated with LEFT JOIN swapping tables as SQLite doesn't support RIGHT JOIN directly, but for standard SQL it's RIGHT JOIN. Here use LEFT JOIN courses).`,
                examples: [{ input: '', output: 'Math|Alice\nScience|NULL' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; DROP TABLE IF EXISTS courses; CREATE TABLE students (id INT, name TEXT);
CREATE TABLE courses (id INT, title TEXT, student_id INT);
INSERT INTO students VALUES (1, 'Alice');
INSERT INTO courses VALUES (101, 'Math', 1), (102, 'Science', 2);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Math|Alice\nScience|NULL' }],
                hint: 'FROM courses LEFT JOIN students'
        },
        {
                id: 'sql2-full-join',
                title: 'Full Join',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Select all students and courses matching or not. (Simulate FULL JOIN with UNION of LEFT Joins).`,
                examples: [{ input: '', output: 'Alice|Math\nBob|NULL\nNULL|Science' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; DROP TABLE IF EXISTS courses; CREATE TABLE students (id INT, name TEXT);
CREATE TABLE courses (id INT, title TEXT, student_id INT);
INSERT INTO students VALUES (1, 'Alice'), (2, 'Bob');
INSERT INTO courses VALUES (101, 'Math', 1), (103, 'Science', 3);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice|Math\nBob|NULL\nNULL|Science' }],
                hint: 'LEFT JOIN UNION ... LEFT JOIN'
        },
        {
                id: 'sql2-cross-join',
                title: 'Cross Join',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Select Cartesian product of students and courses.`,
                examples: [{ input: '', output: 'Alice|Math\nAlice|Science\nBob|Math\nBob|Science' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; DROP TABLE IF EXISTS courses; CREATE TABLE students (name TEXT);
CREATE TABLE courses (title TEXT);
INSERT INTO students VALUES ('Alice'), ('Bob');
INSERT INTO courses VALUES ('Math'), ('Science');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice|Math\nAlice|Science\nBob|Math\nBob|Science' }],
                hint: 'CROSS JOIN'
        },
        {
                id: 'sql2-self-join',
                title: 'Self Join',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Select pairs of students from same city.`,
                examples: [{ input: '', output: 'Alice|Bob' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (id INT, name TEXT, city TEXT);
INSERT INTO students VALUES (1, 'Alice', 'NY'), (2, 'Bob', 'NY'), (3, 'Charlie', 'LA');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice|Bob' }],
                hint: 'JOIN students s1, students s2'
        },
        {
                id: 'sql2-subquery-scalar',
                title: 'Scalar Subquery',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Select students with score > average score.`,
                examples: [{ input: '', output: 'Bob' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (name TEXT, score INT);
INSERT INTO students VALUES ('Alice', 40), ('Bob', 60);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Bob' }],
                hint: 'WHERE score > (SELECT AVG(score)...)'
        },
        {
                id: 'sql2-subquery-in',
                title: 'Subquery IN',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Select students enrolled in 'Math'.`,
                examples: [{ input: '', output: 'Alice' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; DROP TABLE IF EXISTS courses; CREATE TABLE students (id INT, name TEXT);
CREATE TABLE courses (student_id INT, title TEXT);
INSERT INTO students VALUES (1, 'Alice'), (2, 'Bob');
INSERT INTO courses VALUES (1, 'Math');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice' }],
                hint: 'WHERE id IN (SELECT student_id ...)'
        },
        {
                id: 'sql2-subquery-exists',
                title: 'Subquery EXISTS',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Select students who have at least one course.`,
                examples: [{ input: '', output: 'Alice' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; DROP TABLE IF EXISTS courses; CREATE TABLE students (id INT, name TEXT);
CREATE TABLE courses (student_id INT);
INSERT INTO students VALUES (1, 'Alice'), (2, 'Bob');
INSERT INTO courses VALUES (1);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice' }],
                hint: 'WHERE EXISTS (SELECT 1 ...)'
        },
        {
                id: 'sql2-subquery-from',
                title: 'Subquery in FROM',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Select max average score per city.`,
                examples: [{ input: '', output: '60.0' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (city TEXT, score INT);
INSERT INTO students VALUES ('NY', 50), ('NY', 70), ('LA', 40);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '60.0' }],
                hint: 'FROM (SELECT AVG(score)...)'
        },
        {
                id: 'sql2-correlated-subquery',
                title: 'Correlated Subquery',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Select students with score > average of their city.`,
                examples: [{ input: '', output: 'Bob' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (name TEXT, city TEXT, score INT);
INSERT INTO students VALUES ('Alice', 'NY', 40), ('Bob', 'NY', 60), ('Charlie', 'LA', 30);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Bob' }],
                hint: 'WHERE score > (SELECT AVG(score) FROM students s2 WHERE s1.city = s2.city)'
        },
        {
                id: 'sql2-view',
                title: 'Create View',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Create view V as select name from students. Select * from V.`,
                examples: [{ input: '', output: 'Alice' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (name TEXT);
INSERT INTO students VALUES ('Alice');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice' }],
                hint: 'CREATE VIEW V AS ...'
        },
        {
                id: 'sql2-cte',
                title: 'CTE',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Use CTE to select students with score > 50.`,
                examples: [{ input: '', output: 'Bob' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (name TEXT, score INT);
INSERT INTO students VALUES ('Alice', 40), ('Bob', 60);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Bob' }],
                hint: 'WITH CTE AS ...'
        },
        {
                id: 'sql2-window-rank',
                title: 'Window RANK',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Rank students by score desc.`,
                examples: [{ input: '', output: 'Bob|1\nAlice|2' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (name TEXT, score INT);
INSERT INTO students VALUES ('Alice', 40), ('Bob', 60);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Bob|1\nAlice|2' }],
                hint: 'RANK() OVER (ORDER BY score DESC)'
        },
        {
                id: 'sql2-window-dense-rank',
                title: 'Window DENSE_RANK',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Dense Rank students by score desc.`,
                examples: [{ input: '', output: 'Bob|1\nAlice|1\nCharlie|2' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (name TEXT, score INT);
INSERT INTO students VALUES ('Alice', 60), ('Bob', 60), ('Charlie', 40);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Bob|1\nAlice|1\nCharlie|2' }],
                hint: 'DENSE_RANK()'
        },
        {
                id: 'sql2-window-row-number',
                title: 'Window ROW_NUMBER',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Row number students by score desc.`,
                examples: [{ input: '', output: 'Bob|1\nAlice|2' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (name TEXT, score INT);
INSERT INTO students VALUES ('Alice', 60), ('Bob', 60);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Bob|1\nAlice|2' }],
                hint: 'ROW_NUMBER()'
        },
        {
                id: 'sql2-partition-by',
                title: 'Partition By',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Rank students within city by score desc.`,
                examples: [{ input: '', output: 'Bob|1\nAlice|2\nCharlie|1' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (name TEXT, city TEXT, score INT);
INSERT INTO students VALUES ('Alice', 'NY', 40), ('Bob', 'NY', 60), ('Charlie', 'LA', 50);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Bob|1\nAlice|2\nCharlie|1' }],
                hint: 'PARTITION BY city'
        },
        {
                id: 'sql2-case-when',
                title: 'Case When in Select',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Select name and 'Pass' if score >= 50 else 'Fail'.`,
                examples: [{ input: '', output: 'Alice|Fail\nBob|Pass' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (name TEXT, score INT);
INSERT INTO students VALUES ('Alice', 40), ('Bob', 60);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice|Fail\nBob|Pass' }],
                hint: 'CASE WHEN score >= 50 THEN ...'
        },
        {
                id: 'sql2-nullif',
                title: 'NULLIF',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Select NULLIF(score, 0). (Returns NULL if score is 0).`,
                examples: [{ input: '', output: 'NULL\n10' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (score INT);
INSERT INTO students VALUES (0), (10);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'NULL\n10' }],
                hint: 'NULLIF(score, 0)'
        },
        {
                id: 'sql2-transaction',
                title: 'Transaction',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Begin transaction, insert 1, commit. Select *.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (A INT);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'BEGIN TRANSACTION; ... COMMIT;'
        },
        {
                id: 'sql2-rollback',
                title: 'Rollback',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Begin transaction, insert 1, rollback. Select *. (Should be empty).`,
                examples: [{ input: '', output: '' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (A INT);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '' }],
                hint: 'ROLLBACK;'
        },
        {
                id: 'sql2-savepoint',
                title: 'Savepoint',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Begin, insert 1, savepoint S, insert 2, rollback to S, commit. Select *. (Should be 1).`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (A INT);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'SAVEPOINT S; ROLLBACK TO S;'
        },
        {
                id: 'sql2-index',
                title: 'Create Index',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Create index idx_name on students(name).`,
                examples: [{ input: '', output: '' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (name TEXT);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '' }],
                hint: 'CREATE INDEX'
        },
        {
                id: 'sql2-drop-index',
                title: 'Drop Index',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Easy',
                description: `Drop index idx_name.`,
                examples: [{ input: '', output: '' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (name TEXT);
CREATE INDEX idx_name ON students(name);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '' }],
                hint: 'DROP INDEX'
        },
        {
                id: 'sql2-unique-constraint',
                title: 'Unique Constraint',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Create table T with unique col A. Try inserting duplicate (ignore error). Select *.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'UNIQUE'
        },
        {
                id: 'sql2-check-constraint',
                title: 'Check Constraint',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Create table T with check A > 0. Insert 1. Select *.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'CHECK'
        },
        {
                id: 'sql2-default-constraint',
                title: 'Default Constraint',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Create table T with default A=1. Insert default. Select *.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'DEFAULT'
        },
        {
                id: 'sql2-not-null-constraint',
                title: 'Not Null Constraint',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Create table T with A INT NOT NULL. Insert 1. Select *.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'NOT NULL'
        },
        {
                id: 'sql2-primary-key',
                title: 'Primary Key',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Create table T with id INT PRIMARY KEY. Insert 1. Select *.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'PRIMARY KEY'
        },
        {
                id: 'sql2-foreign-key',
                title: 'Foreign Key',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Create table P (id PK) and C (pid FK). Insert 1 to P, 1 to C. Select *.`,
                examples: [{ input: '', output: '1|1' }],
                starterCode: `-- Write your query below
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1|1' }],
                hint: 'FOREIGN KEY'
        },
        {
                id: 'sql2-trigger',
                title: 'Trigger',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Create trigger to log insert on T. Insert 1. Select log.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; DROP TABLE IF EXISTS Log; CREATE TABLE T (A INT);
CREATE TABLE Log (A INT);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'CREATE TRIGGER'
        },
        {
                id: 'sql2-drop-trigger',
                title: 'Drop Trigger',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Drop trigger tr.`,
                examples: [{ input: '', output: '' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (A INT);
CREATE TRIGGER tr AFTER INSERT ON T BEGIN INSERT INTO T VALUES (1); END;`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '' }],
                hint: 'DROP TRIGGER'
        },
        {
                id: 'sql2-glob',
                title: 'GLOB Operator',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Select names starting with 'A' using GLOB.`,
                examples: [{ input: '', output: 'Alice' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (name TEXT);
INSERT INTO students VALUES ('Alice'), ('Bob');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice' }],
                hint: "GLOB 'A*'"
        },
        {
                id: 'sql2-replace',
                title: 'Replace String',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Replace 'l' with 'L' in name.`,
                examples: [{ input: '', output: 'ALice' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS students; CREATE TABLE students (name TEXT);
INSERT INTO students VALUES ('Alice');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'ALice' }],
                hint: "REPLACE(name, 'l', 'L')"
        },
        {
                id: 'sql2-trim',
                title: 'Trim String',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Easy',
                description: `Trim spaces from ' A '.`,
                examples: [{ input: '', output: 'A' }],
                starterCode: `SELECT ' A '; -- Mocked input
-- Write your query below
SELECT TRIM(' A ');
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'A' }],
                hint: 'TRIM()'
        },
        {
                id: 'sql2-ltrim',
                title: 'LTrim String',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Easy',
                description: `Left trim ' A'.`,
                examples: [{ input: '', output: 'A' }],
                starterCode: `-- Write your query below
SELECT LTRIM(' A');
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'A' }],
                hint: 'LTRIM()'
        },
        {
                id: 'sql2-rtrim',
                title: 'RTrim String',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Easy',
                description: `Right trim 'A '.`,
                examples: [{ input: '', output: 'A' }],
                starterCode: `-- Write your query below
SELECT RTRIM('A ');
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'A' }],
                hint: 'RTRIM()'
        },
        {
                id: 'sql2-instr',
                title: 'Instr',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Find position of 'l' in 'Alice'.`,
                examples: [{ input: '', output: '2' }],
                starterCode: `-- Write your query below
SELECT INSTR('Alice', 'l');
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '2' }],
                hint: 'INSTR()'
        },
        {
                id: 'sql2-unicode',
                title: 'Unicode',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Get unicode of 'A'.`,
                examples: [{ input: '', output: '65' }],
                starterCode: `-- Write your query below
SELECT UNICODE('A');
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '65' }],
                hint: 'UNICODE()'
        },
        {
                id: 'sql2-char',
                title: 'Char',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Get char from 65.`,
                examples: [{ input: '', output: 'A' }],
                starterCode: `-- Write your query below
SELECT CHAR(65);
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'A' }],
                hint: 'CHAR()'
        },
        {
                id: 'sql2-hex',
                title: 'Hex',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Get hex of 'A'.`,
                examples: [{ input: '', output: '41' }],
                starterCode: `-- Write your query below
SELECT HEX('A');
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '41' }],
                hint: 'HEX()'
        },
        {
                id: 'sql2-quote',
                title: 'Quote',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Quote string 'A'.`,
                examples: [{ input: '', output: "'A'" }],
                starterCode: `-- Write your query below
SELECT QUOTE('A');
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: "'A'" }],
                hint: 'QUOTE()'
        },
        {
                id: 'sql2-typeof',
                title: 'Typeof',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Get type of 1.`,
                examples: [{ input: '', output: 'integer' }],
                starterCode: `-- Write your query below
SELECT TYPEOF(1);
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'integer' }],
                hint: 'TYPEOF()'
        },
        {
                id: 'sql2-last-insert-rowid',
                title: 'Last Insert RowID',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Get last insert rowid.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
SELECT last_insert_rowid();
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (A INT); INSERT INTO T VALUES (1);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'last_insert_rowid()'
        },
        {
                id: 'sql2-changes',
                title: 'Changes',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Get number of changes (1 insert).`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
SELECT changes();
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (A INT); INSERT INTO T VALUES (1);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'changes()'
        },
        {
                id: 'sql2-total-changes',
                title: 'Total Changes',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Medium',
                description: `Get total changes.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
SELECT total_changes();
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (A INT); INSERT INTO T VALUES (1);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'total_changes()'
        },
        {
                id: 'sql2-sqlite-version',
                title: 'SQLite Version',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Easy',
                description: `Get version. (Mocked).`,
                examples: [{ input: '', output: '3.0' }],
                starterCode: `SELECT '3.0'; -- Mocked
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '3.0' }],
                hint: 'sqlite_version()'
        },
        {
                id: 'sql2-ifnull',
                title: 'IFNULL',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Easy',
                description: `Select IFNULL(NULL, 1).`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
SELECT IFNULL(NULL, 1);
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'IFNULL()'
        },
        {
                id: 'sql2-nullif-2',
                title: 'NULLIF 2',
                subject: 'DBMS',
                examLevel: 'OPPE 2',
                difficulty: 'Easy',
                description: `Select NULLIF(1, 1).`,
                examples: [{ input: '', output: 'NULL' }],
                starterCode: `-- Write your query below
SELECT NULLIF(1, 1);
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'NULL' }],
                hint: 'NULLIF()'
        },
        {
                id: 'sql2-likelihood',
                title: 'Likelihood',
                subject: 'SQL',
                examLevel: 'OPPE 2',
                difficulty: 'Hard',
                description: `Select likelihood(1, 1.0).`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
SELECT likelihood(1, 1.0);
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'likelihood()'
        }
];
