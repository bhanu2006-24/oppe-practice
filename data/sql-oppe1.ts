import { Problem } from '../types';

export const SQL_OPPE1_PROBLEMS: Problem[] = [
    {
        id: 'sql1-select-all',
        title: 'Select All',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select all columns from the table 'students'.`,
        examples: [{ input: '', output: '1|Alice\n2|Bob' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (id INT, name TEXT);
INSERT INTO students VALUES (1, 'Alice'), (2, 'Bob');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1|Alice\n2|Bob' }],
        hint: 'SELECT * FROM students;'
    },
    {
        id: 'sql1-select-col',
        title: 'Select Column',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select only the 'name' column from 'students'.`,
        examples: [{ input: '', output: 'Alice\nBob' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (id INT, name TEXT);
INSERT INTO students VALUES (1, 'Alice'), (2, 'Bob');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Alice\nBob' }],
        hint: 'SELECT name FROM students;'
    },
    {
        id: 'sql1-where-eq',
        title: 'Where Equals',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select names of students with id 1.`,
        examples: [{ input: '', output: 'Alice' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (id INT, name TEXT);
INSERT INTO students VALUES (1, 'Alice'), (2, 'Bob');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Alice' }],
        hint: 'WHERE id = 1'
    },
    {
        id: 'sql1-where-gt',
        title: 'Where Greater Than',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select names of students with score > 50.`,
        examples: [{ input: '', output: 'Bob' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT, score INT);
INSERT INTO students VALUES ('Alice', 40), ('Bob', 60);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Bob' }],
        hint: 'WHERE score > 50'
    },
    {
        id: 'sql1-order-asc',
        title: 'Order By Ascending',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select names ordered by score ascending.`,
        examples: [{ input: '', output: 'Alice\nBob' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT, score INT);
INSERT INTO students VALUES ('Bob', 60), ('Alice', 40);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Alice\nBob' }],
        hint: 'ORDER BY score ASC'
    },
    {
        id: 'sql1-order-desc',
        title: 'Order By Descending',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select names ordered by score descending.`,
        examples: [{ input: '', output: 'Bob\nAlice' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT, score INT);
INSERT INTO students VALUES ('Alice', 40), ('Bob', 60);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Bob\nAlice' }],
        hint: 'ORDER BY score DESC'
    },
    {
        id: 'sql1-limit',
        title: 'Limit Results',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select first 1 name ordered by id.`,
        examples: [{ input: '', output: 'Alice' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (id INT, name TEXT);
INSERT INTO students VALUES (1, 'Alice'), (2, 'Bob');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Alice' }],
        hint: 'LIMIT 1'
    },
    {
        id: 'sql1-distinct',
        title: 'Distinct Values',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select distinct cities.`,
        examples: [{ input: '', output: 'NY\nLA' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE users (city TEXT);
INSERT INTO users VALUES ('NY'), ('NY'), ('LA');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'NY\nLA' }],
        hint: 'SELECT DISTINCT city'
    },
    {
        id: 'sql1-count',
        title: 'Count Rows',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Count total number of students.`,
        examples: [{ input: '', output: '2' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (id INT);
INSERT INTO students VALUES (1), (2);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '2' }],
        hint: 'COUNT(*)'
    },
    {
        id: 'sql1-sum',
        title: 'Sum Values',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Calculate sum of scores.`,
        examples: [{ input: '', output: '100' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (score INT);
INSERT INTO students VALUES (40), (60);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '100' }],
        hint: 'SUM(score)'
    },
    {
        id: 'sql1-avg',
        title: 'Average Value',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Calculate average score.`,
        examples: [{ input: '', output: '50.0' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (score INT);
INSERT INTO students VALUES (40), (60);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '50.0' }],
        hint: 'AVG(score)'
    },
    {
        id: 'sql1-min',
        title: 'Minimum Value',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Find minimum score.`,
        examples: [{ input: '', output: '40' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (score INT);
INSERT INTO students VALUES (40), (60);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '40' }],
        hint: 'MIN(score)'
    },
    {
        id: 'sql1-max',
        title: 'Maximum Value',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Find maximum score.`,
        examples: [{ input: '', output: '60' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (score INT);
INSERT INTO students VALUES (40), (60);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '60' }],
        hint: 'MAX(score)'
    },
    {
        id: 'sql1-and',
        title: 'Logical AND',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select names where score > 50 AND city = 'NY'.`,
        examples: [{ input: '', output: 'Bob' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT, score INT, city TEXT);
INSERT INTO students VALUES ('Alice', 60, 'LA'), ('Bob', 60, 'NY');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Bob' }],
        hint: 'AND operator'
    },
    {
        id: 'sql1-or',
        title: 'Logical OR',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select names where city is 'NY' OR 'LA'.`,
        examples: [{ input: '', output: 'Alice\nBob' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT, city TEXT);
INSERT INTO students VALUES ('Alice', 'LA'), ('Bob', 'NY'), ('Charlie', 'TX');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Alice\nBob' }],
        hint: 'OR operator'
    },
    {
        id: 'sql1-not',
        title: 'Logical NOT',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select names where city is NOT 'NY'.`,
        examples: [{ input: '', output: 'Alice' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT, city TEXT);
INSERT INTO students VALUES ('Alice', 'LA'), ('Bob', 'NY');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Alice' }],
        hint: 'NOT or <> or !='
    },
    {
        id: 'sql1-in',
        title: 'IN Operator',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select names where id IN (1, 3).`,
        examples: [{ input: '', output: 'Alice\nCharlie' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (id INT, name TEXT);
INSERT INTO students VALUES (1, 'Alice'), (2, 'Bob'), (3, 'Charlie');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Alice\nCharlie' }],
        hint: 'WHERE id IN (1, 3)'
    },
    {
        id: 'sql1-between',
        title: 'BETWEEN Operator',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select names where score BETWEEN 40 AND 60.`,
        examples: [{ input: '', output: 'Alice\nBob' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT, score INT);
INSERT INTO students VALUES ('Alice', 40), ('Bob', 60), ('Charlie', 70);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Alice\nBob' }],
        hint: 'BETWEEN 40 AND 60'
    },
    {
        id: 'sql1-like',
        title: 'LIKE Operator',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select names starting with 'A'.`,
        examples: [{ input: '', output: 'Alice' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT);
INSERT INTO students VALUES ('Alice'), ('Bob');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Alice' }],
        hint: "LIKE 'A%'"
    },
    {
        id: 'sql1-is-null',
        title: 'IS NULL',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select names where email IS NULL.`,
        examples: [{ input: '', output: 'Bob' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT, email TEXT);
INSERT INTO students VALUES ('Alice', 'a@b.com'), ('Bob', NULL);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Bob' }],
        hint: 'IS NULL'
    },
    {
        id: 'sql1-is-not-null',
        title: 'IS NOT NULL',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select names where email IS NOT NULL.`,
        examples: [{ input: '', output: 'Alice' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT, email TEXT);
INSERT INTO students VALUES ('Alice', 'a@b.com'), ('Bob', NULL);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Alice' }],
        hint: 'IS NOT NULL'
    },
    {
        id: 'sql1-alias',
        title: 'Column Alias',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select name AS 'Student Name'.`,
        examples: [{ input: '', output: 'Alice' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT);
INSERT INTO students VALUES ('Alice');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Alice' }],
        hint: 'AS keyword'
    },
    {
        id: 'sql1-concat',
        title: 'Concatenation',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Select first_name || ' ' || last_name.`,
        examples: [{ input: '', output: 'Alice Smith' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (first_name TEXT, last_name TEXT);
INSERT INTO students VALUES ('Alice', 'Smith');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Alice Smith' }],
        hint: '|| operator'
    },
    {
        id: 'sql1-upper',
        title: 'Upper Case',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select name in uppercase.`,
        examples: [{ input: '', output: 'ALICE' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT);
INSERT INTO students VALUES ('Alice');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'ALICE' }],
        hint: 'UPPER(name)'
    },
    {
        id: 'sql1-lower',
        title: 'Lower Case',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select name in lowercase.`,
        examples: [{ input: '', output: 'alice' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT);
INSERT INTO students VALUES ('Alice');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'alice' }],
        hint: 'LOWER(name)'
    },
    {
        id: 'sql1-length',
        title: 'String Length',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select length of name.`,
        examples: [{ input: '', output: '5' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT);
INSERT INTO students VALUES ('Alice');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '5' }],
        hint: 'LENGTH(name)'
    },
    {
        id: 'sql1-substr',
        title: 'Substring',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Select first 3 chars of name.`,
        examples: [{ input: '', output: 'Ali' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (name TEXT);
INSERT INTO students VALUES ('Alice');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Ali' }],
        hint: 'SUBSTR(name, 1, 3)'
    },
    {
        id: 'sql1-round',
        title: 'Round Number',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select score rounded to 0 decimals.`,
        examples: [{ input: '', output: '10.0' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (score REAL);
INSERT INTO students VALUES (10.4);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '10.0' }],
        hint: 'ROUND(score)'
    },
    {
        id: 'sql1-arithmetic',
        title: 'Arithmetic',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select score * 2.`,
        examples: [{ input: '', output: '20' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (score INT);
INSERT INTO students VALUES (10);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '20' }],
        hint: '*'
    },
    {
        id: 'sql1-group-by',
        title: 'Group By',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Count students per city.`,
        examples: [{ input: '', output: 'LA|1\nNY|2' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (city TEXT);
INSERT INTO students VALUES ('NY'), ('NY'), ('LA');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'LA|1\nNY|2' }],
        hint: 'GROUP BY city'
    },
    {
        id: 'sql1-having',
        title: 'Having Clause',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Select city with count > 1.`,
        examples: [{ input: '', output: 'NY' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE students (city TEXT);
INSERT INTO students VALUES ('NY'), ('NY'), ('LA');`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'NY' }],
        hint: 'HAVING COUNT(*) > 1'
    },
    {
        id: 'sql1-create-table',
        title: 'Create Table',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Create table T with col A INT. Insert 1. Select *.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'CREATE TABLE ... INSERT ... SELECT'
    },
    {
        id: 'sql1-drop-table',
        title: 'Drop Table',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Drop table T. (Setup creates T).`,
        examples: [{ input: '', output: '' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (A INT);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '' }],
        hint: 'DROP TABLE T'
    },
    {
        id: 'sql1-insert',
        title: 'Insert Row',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Insert 1 into T (A INT). Select *.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (A INT);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'INSERT INTO T VALUES (1)'
    },
    {
        id: 'sql1-update',
        title: 'Update Row',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Update T set A=2 where A=1. Select *.`,
        examples: [{ input: '', output: '2' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (A INT);
INSERT INTO T VALUES (1);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '2' }],
        hint: 'UPDATE T SET A=2'
    },
    {
        id: 'sql1-delete',
        title: 'Delete Row',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Delete from T where A=1. Select *.`,
        examples: [{ input: '', output: '' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (A INT);
INSERT INTO T VALUES (1);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '' }],
        hint: 'DELETE FROM T'
    },
    {
        id: 'sql1-alter',
        title: 'Alter Table',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Add column B INT to T. Select *.`,
        examples: [{ input: '', output: '1|' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (A INT);
INSERT INTO T VALUES (1);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1|' }],
        hint: 'ALTER TABLE T ADD COLUMN B INT'
    },
    {
        id: 'sql1-select-expr',
        title: 'Select Expression',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select 1+1.`,
        examples: [{ input: '', output: '2' }],
        starterCode: `-- Write your query below
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '2' }],
        hint: 'SELECT 1+1'
    },
    {
        id: 'sql1-cast',
        title: 'Cast Type',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Cast '1' to INT.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: "CAST('1' AS INT)"
    },
    {
        id: 'sql1-coalesce',
        title: 'Coalesce',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Select first non-null value from (NULL, 1).`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'COALESCE(NULL, 1)'
    },
    {
        id: 'sql1-case',
        title: 'Case Statement',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Select CASE when 1=1 then 'A' else 'B'.`,
        examples: [{ input: '', output: 'A' }],
        starterCode: `-- Write your query below
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'A' }],
        hint: 'CASE WHEN ... END'
    },
    {
        id: 'sql1-limit-offset',
        title: 'Limit Offset',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Select 1 row skipping first 1.`,
        examples: [{ input: '', output: '2' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (A INT);
INSERT INTO T VALUES (1), (2), (3);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '2' }],
        hint: 'LIMIT 1 OFFSET 1'
    },
    {
        id: 'sql1-union',
        title: 'Union',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Union of select 1 and select 2.`,
        examples: [{ input: '', output: '1\n2' }],
        starterCode: `-- Write your query below
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1\n2' }],
        hint: 'UNION'
    },
    {
        id: 'sql1-union-all',
        title: 'Union All',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Union All of select 1 and select 1.`,
        examples: [{ input: '', output: '1\n1' }],
        starterCode: `-- Write your query below
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1\n1' }],
        hint: 'UNION ALL'
    },
    {
        id: 'sql1-intersect',
        title: 'Intersect',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Intersect of select 1 and select 1.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'INTERSECT'
    },
    {
        id: 'sql1-except',
        title: 'Except',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Select 1 EXCEPT select 2.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'EXCEPT'
    },
    {
        id: 'sql1-abs',
        title: 'Absolute Value',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select ABS(-1).`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'ABS()'
    },
    {
        id: 'sql1-random',
        title: 'Random',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select a random number (mocked).`,
        examples: [{ input: '', output: '0' }],
        starterCode: `SELECT 0; -- Mocked
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '0' }],
        hint: 'RANDOM()'
    },
    {
        id: 'sql1-date',
        title: 'Date',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select current date (mocked).`,
        examples: [{ input: '', output: '2023-01-01' }],
        starterCode: `SELECT '2023-01-01'; -- Mocked
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '2023-01-01' }],
        hint: 'DATE()'
    },
    {
        id: 'sql1-time',
        title: 'Time',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Select current time (mocked).`,
        examples: [{ input: '', output: '12:00:00' }],
        starterCode: `SELECT '12:00:00'; -- Mocked
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '12:00:00' }],
        hint: 'TIME()'
    }
];
