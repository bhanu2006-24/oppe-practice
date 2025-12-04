import { Problem } from '../types';

export const DBMS_OPPE1_PROBLEMS: Problem[] = [
        {
                id: 'dbms1-create-pk',
                title: 'Create Table with PK',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Create a table 'users' with 'id' as PRIMARY KEY and 'name' as TEXT. Insert (1, 'Alice'). Select *.`,
                examples: [{ input: '', output: '1|Alice' }],
                starterCode: `-- Write your query below
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1|Alice' }],
                hint: 'id INT PRIMARY KEY'
        },
        {
                id: 'dbms1-create-fk',
                title: 'Create Table with FK',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Create table 'orders' with 'user_id' referencing 'users(id)'. Insert valid data. Select *. (Assume users table exists with id 1).`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; CREATE TABLE users (id INT PRIMARY KEY); INSERT INTO users VALUES (1);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'FOREIGN KEY (user_id) REFERENCES users(id)'
        },
        {
                id: 'dbms1-unique',
                title: 'Unique Constraint',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Create table 'emails' with 'email' TEXT UNIQUE. Insert 'a@b.com' twice (ignore error). Select count(*).`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'UNIQUE constraint'
        },
        {
                id: 'dbms1-not-null',
                title: 'Not Null Constraint',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Create table 'items' with 'name' TEXT NOT NULL. Try inserting NULL (ignore error). Select count(*).`,
                examples: [{ input: '', output: '0' }],
                starterCode: `-- Write your query below
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '0' }],
                hint: 'NOT NULL constraint'
        },
        {
                id: 'dbms1-check',
                title: 'Check Constraint',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Create table 'age' with 'val' INT CHECK(val >= 18). Insert 17 (ignore error). Select count(*).`,
                examples: [{ input: '', output: '0' }],
                starterCode: `-- Write your query below
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '0' }],
                hint: 'CHECK(val >= 18)'
        },
        {
                id: 'dbms1-default',
                title: 'Default Value',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Create table 'status' with 'active' INT DEFAULT 1. Insert default. Select active.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'DEFAULT 1'
        },
        {
                id: 'dbms1-composite-pk',
                title: 'Composite PK',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Create table 'enroll' with (sid, cid) as PRIMARY KEY. Insert (1, 101). Select *.`,
                examples: [{ input: '', output: '1|101' }],
                starterCode: `-- Write your query below
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1|101' }],
                hint: 'PRIMARY KEY (sid, cid)'
        },
        {
                id: 'dbms1-alter-add',
                title: 'Alter Add Column',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Add column 'age' INT to 'users'. Select *.`,
                examples: [{ input: '', output: '1|Alice|' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; CREATE TABLE users (id INT, name TEXT); INSERT INTO users VALUES (1, 'Alice');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1|Alice|' }],
                hint: 'ALTER TABLE ... ADD COLUMN'
        },
        {
                id: 'dbms1-drop-table',
                title: 'Drop Table',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Drop table 'temp'.`,
                examples: [{ input: '', output: '' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS temp; CREATE TABLE temp (id INT);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '' }],
                hint: 'DROP TABLE'
        },
        {
                id: 'dbms1-truncate',
                title: 'Truncate Table',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Delete all rows from 'logs'. (SQLite uses DELETE FROM).`,
                examples: [{ input: '', output: '0' }],
                starterCode: `-- Write your query below
DELETE FROM logs;
SELECT count(*) FROM logs;
`,
                setupCode: `DROP TABLE IF EXISTS logs; CREATE TABLE logs (msg TEXT); INSERT INTO logs VALUES ('Error');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '0' }],
                hint: 'DELETE FROM logs'
        },
        {
                id: 'dbms1-update-where',
                title: 'Update with Where',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Update 'users' set name='Bob' where id=1. Select name.`,
                examples: [{ input: '', output: 'Bob' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; CREATE TABLE users (id INT, name TEXT); INSERT INTO users VALUES (1, 'Alice');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Bob' }],
                hint: 'UPDATE ... SET ... WHERE'
        },
        {
                id: 'dbms1-delete-where',
                title: 'Delete with Where',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Delete from 'users' where id=1. Select count(*).`,
                examples: [{ input: '', output: '0' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; CREATE TABLE users (id INT PRIMARY KEY, role TEXT DEFAULT 'user');
INSERT INTO users (id) VALUES (1);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '0' }],
                hint: 'DELETE FROM ... WHERE'
        },
        {
                id: 'dbms1-select-distinct',
                title: 'Select Distinct',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select distinct dept from employees.`,
                examples: [{ input: '', output: 'HR\nIT' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS employees; CREATE TABLE employees (dept TEXT); INSERT INTO employees VALUES ('HR'), ('HR'), ('IT');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'HR\nIT' }],
                hint: 'SELECT DISTINCT'
        },
        {
                id: 'dbms1-order-by',
                title: 'Order By',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select names ordered by age desc.`,
                examples: [{ input: '', output: 'Bob\nAlice' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; CREATE TABLE users (name TEXT, age INT); INSERT INTO users VALUES ('Alice', 20), ('Bob', 30);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Bob\nAlice' }],
                hint: 'ORDER BY age DESC'
        },
        {
                id: 'dbms1-group-by',
                title: 'Group By Count',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Count users per country.`,
                examples: [{ input: '', output: 'IN|2\nUS|1' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; CREATE TABLE users (country TEXT); INSERT INTO users VALUES ('IN'), ('IN'), ('US');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'IN|2\nUS|1' }],
                hint: 'GROUP BY country'
        },
        {
                id: 'dbms1-having',
                title: 'Having Clause',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Select country with > 1 users.`,
                examples: [{ input: '', output: 'IN' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; CREATE TABLE users (country TEXT); INSERT INTO users VALUES ('IN'), ('IN'), ('US');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'IN' }],
                hint: 'HAVING count(*) > 1'
        },
        {
                id: 'dbms1-join',
                title: 'Inner Join',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Join users and orders on user_id. Select user name and order id.`,
                examples: [{ input: '', output: 'Alice|101' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; DROP TABLE IF EXISTS orders; CREATE TABLE users (id INT PRIMARY KEY); INSERT INTO users VALUES (1);
CREATE TABLE orders (id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));
INSERT INTO orders VALUES (101, 1);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice|101' }],
                hint: 'JOIN ... ON'
        },
        {
                id: 'dbms1-left-join',
                title: 'Left Join',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Left join users and orders. Select user name and order id.`,
                examples: [{ input: '', output: 'Alice|101\nBob|NULL' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; DROP TABLE IF EXISTS orders; CREATE TABLE users (id INT, name TEXT); CREATE TABLE orders (id INT, user_id INT);
INSERT INTO users VALUES (1, 'Alice'), (2, 'Bob'); INSERT INTO orders VALUES (101, 1);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice|101\nBob|NULL' }],
                hint: 'LEFT JOIN'
        },
        {
                id: 'dbms1-union',
                title: 'Union',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Union of two selects.`,
                examples: [{ input: '', output: '1\n2' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS A; DROP TABLE IF EXISTS B; CREATE TABLE A (val INT); CREATE TABLE B (val INT);
INSERT INTO A VALUES (1); INSERT INTO B VALUES (2);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1\n2' }],
                hint: 'UNION'
        },
        {
                id: 'dbms1-intersect',
                title: 'Intersect',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Intersect of two selects.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS A; DROP TABLE IF EXISTS B; CREATE TABLE A (val INT); CREATE TABLE B (val INT);
INSERT INTO A VALUES (1), (2); INSERT INTO B VALUES (1), (3);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'INTERSECT'
        },
        {
                id: 'dbms1-except',
                title: 'Except',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Select A except B.`,
                examples: [{ input: '', output: '2' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS A; DROP TABLE IF EXISTS B; CREATE TABLE A (val INT); CREATE TABLE B (val INT);
INSERT INTO A VALUES (1), (2); INSERT INTO B VALUES (1);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '2' }],
                hint: 'EXCEPT'
        },
        {
                id: 'dbms1-subquery',
                title: 'Subquery',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Select name where id in (select user_id from orders).`,
                examples: [{ input: '', output: 'Alice' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; DROP TABLE IF EXISTS orders; CREATE TABLE users (id INT, name TEXT); CREATE TABLE orders (user_id INT);
INSERT INTO users VALUES (1, 'Alice'), (2, 'Bob'); INSERT INTO orders VALUES (1);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice' }],
                hint: 'WHERE id IN (...)'
        },
        {
                id: 'dbms1-exists',
                title: 'Exists',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Select name where exists order for user.`,
                examples: [{ input: '', output: 'Alice' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; DROP TABLE IF EXISTS orders; CREATE TABLE users (id INT, name TEXT); CREATE TABLE orders (user_id INT);
INSERT INTO users VALUES (1, 'Alice'), (2, 'Bob'); INSERT INTO orders VALUES (1);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice' }],
                hint: 'WHERE EXISTS (...)'
        },
        {
                id: 'dbms1-view',
                title: 'Create View',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Create view 'v_users' as select name from users. Select * from v_users.`,
                examples: [{ input: '', output: 'Alice' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; CREATE TABLE users (name TEXT); INSERT INTO users VALUES ('Alice');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice' }],
                hint: 'CREATE VIEW'
        },
        {
                id: 'dbms1-index',
                title: 'Create Index',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Create index 'idx_email' on users(email).`,
                examples: [{ input: '', output: '' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; CREATE TABLE users (email TEXT);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '' }],
                hint: 'CREATE INDEX'
        },
        {
                id: 'dbms1-transaction',
                title: 'Transaction Commit',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Hard',
                description: `Begin transaction, insert 1, commit. Select *.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (val INT);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'BEGIN; ... COMMIT;'
        },
        {
                id: 'dbms1-rollback',
                title: 'Transaction Rollback',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Hard',
                description: `Begin, insert 1, rollback. Select *.`,
                examples: [{ input: '', output: '' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (val INT);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '' }],
                hint: 'ROLLBACK'
        },
        {
                id: 'dbms1-grant',
                title: 'Grant (Mocked)',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Hard',
                description: `Grant SELECT on T to user. (SQLite doesn't support GRANT, just mock SELECT 'Granted').`,
                examples: [{ input: '', output: 'Granted' }],
                starterCode: `-- Write your query below
SELECT 'Granted';
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Granted' }],
                hint: 'GRANT SELECT ON T TO user'
        },
        {
                id: 'dbms1-revoke',
                title: 'Revoke (Mocked)',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Hard',
                description: `Revoke SELECT on T from user. (Mocked).`,
                examples: [{ input: '', output: 'Revoked' }],
                starterCode: `-- Write your query below
SELECT 'Revoked';
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Revoked' }],
                hint: 'REVOKE SELECT ON T FROM user'
        },
        {
                id: 'dbms1-like',
                title: 'Like Operator',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select names starting with 'A'.`,
                examples: [{ input: '', output: 'Alice' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; CREATE TABLE users (name TEXT); INSERT INTO users VALUES ('Alice'), ('Bob');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice' }],
                hint: 'LIKE "A%"'
        },
        {
                id: 'dbms1-glob',
                title: 'Glob Operator',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Select names starting with 'A' using GLOB.`,
                examples: [{ input: '', output: 'Alice' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS users; CREATE TABLE users (name TEXT); INSERT INTO users VALUES ('Alice'), ('Bob');`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'Alice' }],
                hint: 'GLOB "A*"'
        },
        {
                id: 'dbms1-limit',
                title: 'Limit',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select first 1 row.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (val INT); INSERT INTO T VALUES (1), (2);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'LIMIT 1'
        },
        {
                id: 'dbms1-offset',
                title: 'Offset',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Select 1 row skipping first 1.`,
                examples: [{ input: '', output: '2' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (val INT); INSERT INTO T VALUES (1), (2), (3);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '2' }],
                hint: 'LIMIT 1 OFFSET 1'
        },
        {
                id: 'dbms1-null',
                title: 'Is Null',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select where val is null.`,
                examples: [{ input: '', output: '' }],
                starterCode: `-- Write your query below
SELECT val FROM T WHERE val IS NULL;
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (val INT); INSERT INTO T VALUES (NULL);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '' }],
                hint: 'IS NULL'
        },
        {
                id: 'dbms1-not-null-check',
                title: 'Is Not Null',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select where val is not null.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (val INT); INSERT INTO T VALUES (1), (NULL);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'IS NOT NULL'
        },
        {
                id: 'dbms1-between',
                title: 'Between',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select val between 1 and 3.`,
                examples: [{ input: '', output: '2' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (val INT); INSERT INTO T VALUES (0), (2), (4);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '2' }],
                hint: 'BETWEEN 1 AND 3'
        },
        {
                id: 'dbms1-in',
                title: 'In Operator',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select val in (1, 2).`,
                examples: [{ input: '', output: '1\n2' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (val INT); INSERT INTO T VALUES (1), (2), (3);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1\n2' }],
                hint: 'IN (1, 2)'
        },
        {
                id: 'dbms1-case',
                title: 'Case Statement',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Select case when val=1 then 'A' else 'B'.`,
                examples: [{ input: '', output: 'A' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (val INT); INSERT INTO T VALUES (1);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'A' }],
                hint: 'CASE WHEN'
        },
        {
                id: 'dbms1-coalesce',
                title: 'Coalesce',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Select coalesce(val, 0).`,
                examples: [{ input: '', output: '0' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (val INT); INSERT INTO T VALUES (NULL);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '0' }],
                hint: 'COALESCE'
        },
        {
                id: 'dbms1-cast',
                title: 'Cast',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Cast '1' to INT.`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
SELECT CAST('1' AS INT);
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'CAST'
        },
        {
                id: 'dbms1-round',
                title: 'Round',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Round 1.5.`,
                examples: [{ input: '', output: '2.0' }],
                starterCode: `-- Write your query below
SELECT ROUND(1.5);
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '2.0' }],
                hint: 'ROUND'
        },
        {
                id: 'dbms1-random',
                title: 'Random',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select random number (mocked).`,
                examples: [{ input: '', output: '0' }],
                starterCode: `SELECT 0; -- Mocked
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '0' }],
                hint: 'RANDOM'
        },
        {
                id: 'dbms1-abs',
                title: 'Abs',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select abs(-1).`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
SELECT ABS(-1);
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'ABS'
        },
        {
                id: 'dbms1-upper',
                title: 'Upper',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select upper('a').`,
                examples: [{ input: '', output: 'A' }],
                starterCode: `-- Write your query below
SELECT UPPER('a');
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'A' }],
                hint: 'UPPER'
        },
        {
                id: 'dbms1-lower',
                title: 'Lower',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select lower('A').`,
                examples: [{ input: '', output: 'a' }],
                starterCode: `-- Write your query below
SELECT LOWER('A');
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'a' }],
                hint: 'LOWER'
        },
        {
                id: 'dbms1-length',
                title: 'Length',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select length('A').`,
                examples: [{ input: '', output: '1' }],
                starterCode: `-- Write your query below
SELECT LENGTH('A');
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '1' }],
                hint: 'LENGTH'
        },
        {
                id: 'dbms1-substr',
                title: 'Substr',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select substr('AB', 1, 1).`,
                examples: [{ input: '', output: 'A' }],
                starterCode: `-- Write your query below
SELECT SUBSTR('AB', 1, 1);
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'A' }],
                hint: 'SUBSTR'
        },
        {
                id: 'dbms1-replace',
                title: 'Replace',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Replace 'A' with 'B' in 'A'.`,
                examples: [{ input: '', output: 'B' }],
                starterCode: `-- Write your query below
SELECT REPLACE('A', 'A', 'B');
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'B' }],
                hint: 'REPLACE'
        },
        {
                id: 'dbms1-trim',
                title: 'Trim',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Trim ' A '.`,
                examples: [{ input: '', output: 'A' }],
                starterCode: `-- Write your query below
SELECT TRIM(' A ');
`,
                functionName: 'sql',
                testCases: [{ input: '', expected: 'A' }],
                hint: 'TRIM'
        },
        {
                id: 'dbms1-max',
                title: 'Max',
                subject: 'DBMS',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Select max(val).`,
                examples: [{ input: '', output: '2' }],
                starterCode: `-- Write your query below
`,
                setupCode: `DROP TABLE IF EXISTS T; CREATE TABLE T (val INT); INSERT INTO T VALUES (1), (2);`,
                functionName: 'sql',
                testCases: [{ input: '', expected: '2' }],
                hint: 'MAX'
        }
];
