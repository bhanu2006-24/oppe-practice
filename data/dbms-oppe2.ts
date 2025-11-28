import { Problem } from '../types';

export const DBMS_OPPE2_PROBLEMS: Problem[] = [
    {
        id: 'dbms2-transaction-commit',
        title: 'Transaction Commit',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Begin transaction, update balance, commit. Select balance.`,
        examples: [{ input: '', output: '100' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE account (bal INT); INSERT INTO account VALUES (50);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '100' }],
        hint: 'BEGIN; UPDATE ... COMMIT;'
    },
    {
        id: 'dbms2-transaction-rollback',
        title: 'Transaction Rollback',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Begin, update balance, rollback. Select balance.`,
        examples: [{ input: '', output: '50' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE account (bal INT); INSERT INTO account VALUES (50);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '50' }],
        hint: 'ROLLBACK'
    },
    {
        id: 'dbms2-savepoint',
        title: 'Savepoint',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Begin, insert 1, savepoint S, insert 2, rollback to S, commit. Select *.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (val INT);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'SAVEPOINT'
    },
    {
        id: 'dbms2-trigger-insert',
        title: 'Insert Trigger',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Create trigger to log inserts. Insert 1. Select log.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (val INT); CREATE TABLE Log (val INT);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'CREATE TRIGGER'
    },
    {
        id: 'dbms2-trigger-update',
        title: 'Update Trigger',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Create trigger to log updates (old val). Update 1 to 2. Select log.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (val INT); INSERT INTO T VALUES (1); CREATE TABLE Log (val INT);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'OLD.val'
    },
    {
        id: 'dbms2-trigger-delete',
        title: 'Delete Trigger',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Create trigger to prevent deletion (raise error). Try delete (ignore error). Select count.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (val INT); INSERT INTO T VALUES (1);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'RAISE(ABORT, ...)'
    },
    {
        id: 'dbms2-view-update',
        title: 'Updatable View',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create view V on T. Update V. Select T.`,
        examples: [{ input: '', output: '2' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (val INT); INSERT INTO T VALUES (1);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '2' }],
        hint: 'UPDATE V'
    },
    {
        id: 'dbms2-index-unique',
        title: 'Unique Index',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create unique index on T(val). Try insert duplicate (ignore error). Select count.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (val INT); INSERT INTO T VALUES (1);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'CREATE UNIQUE INDEX'
    },
    {
        id: 'dbms2-grant-role',
        title: 'Grant Role (Mocked)',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Grant role R to user. (Mocked).`,
        examples: [{ input: '', output: 'Granted' }],
        starterCode: `SELECT 'Granted'; -- Mocked
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Granted' }],
        hint: 'GRANT'
    },
    {
        id: 'dbms2-revoke-role',
        title: 'Revoke Role (Mocked)',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Revoke role R from user. (Mocked).`,
        examples: [{ input: '', output: 'Revoked' }],
        starterCode: `SELECT 'Revoked'; -- Mocked
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Revoked' }],
        hint: 'REVOKE'
    },
    {
        id: 'dbms2-cte-recursive',
        title: 'Recursive CTE',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Generate 1 to 3 using recursive CTE.`,
        examples: [{ input: '', output: '1\n2\n3' }],
        starterCode: `-- Write your query below
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1\n2\n3' }],
        hint: 'WITH RECURSIVE'
    },
    {
        id: 'dbms2-window-lag',
        title: 'Window LAG',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Select val and previous val (LAG).`,
        examples: [{ input: '', output: '1|NULL\n2|1' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (val INT); INSERT INTO T VALUES (1), (2);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1|NULL\n2|1' }],
        hint: 'LAG(val)'
    },
    {
        id: 'dbms2-window-lead',
        title: 'Window LEAD',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Select val and next val (LEAD).`,
        examples: [{ input: '', output: '1|2\n2|NULL' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (val INT); INSERT INTO T VALUES (1), (2);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1|2\n2|NULL' }],
        hint: 'LEAD(val)'
    },
    {
        id: 'dbms2-window-sum',
        title: 'Window SUM',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Calculate running sum.`,
        examples: [{ input: '', output: '1|1\n2|3' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (val INT); INSERT INTO T VALUES (1), (2);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1|1\n2|3' }],
        hint: 'SUM(val) OVER (ORDER BY val)'
    },
    {
        id: 'dbms2-window-avg',
        title: 'Window AVG',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Calculate running avg.`,
        examples: [{ input: '', output: '1.0|1.0\n2.0|1.5' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (val REAL); INSERT INTO T VALUES (1), (2);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1.0|1.0\n2.0|1.5' }],
        hint: 'AVG(val) OVER (ORDER BY val)'
    },
    {
        id: 'dbms2-explain',
        title: 'Explain Query',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Explain select * from T. (Mocked output check).`,
        examples: [{ input: '', output: 'Valid' }],
        starterCode: `-- Write your query below
EXPLAIN QUERY PLAN SELECT * FROM T;
SELECT 'Valid';
`,
        setupCode: `CREATE TABLE T (val INT);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Valid' }],
        hint: 'EXPLAIN QUERY PLAN'
    },
    {
        id: 'dbms2-analyze',
        title: 'Analyze',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Analyze table T.`,
        examples: [{ input: '', output: '' }],
        starterCode: `-- Write your query below
ANALYZE T;
`,
        setupCode: `CREATE TABLE T (val INT);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '' }],
        hint: 'ANALYZE'
    },
    {
        id: 'dbms2-vacuum',
        title: 'Vacuum',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Vacuum database.`,
        examples: [{ input: '', output: '' }],
        starterCode: `-- Write your query below
VACUUM;
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '' }],
        hint: 'VACUUM'
    },
    {
        id: 'dbms2-attach',
        title: 'Attach Database',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Attach database 'test.db' as 'db2'. (Mocked).`,
        examples: [{ input: '', output: 'Attached' }],
        starterCode: `SELECT 'Attached'; -- Mocked
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Attached' }],
        hint: 'ATTACH DATABASE'
    },
    {
        id: 'dbms2-detach',
        title: 'Detach Database',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Detach database 'db2'. (Mocked).`,
        examples: [{ input: '', output: 'Detached' }],
        starterCode: `SELECT 'Detached'; -- Mocked
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Detached' }],
        hint: 'DETACH DATABASE'
    },
    {
        id: 'dbms2-pragma',
        title: 'Pragma',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Get pragma user_version.`,
        examples: [{ input: '', output: '0' }],
        starterCode: `-- Write your query below
PRAGMA user_version;
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '0' }],
        hint: 'PRAGMA'
    },
    {
        id: 'dbms2-integrity-check',
        title: 'Integrity Check',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Check integrity.`,
        examples: [{ input: '', output: 'ok' }],
        starterCode: `-- Write your query below
PRAGMA integrity_check;
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'ok' }],
        hint: 'PRAGMA integrity_check'
    },
    {
        id: 'dbms2-foreign-key-check',
        title: 'Foreign Key Check',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Check foreign keys.`,
        examples: [{ input: '', output: '' }],
        starterCode: `-- Write your query below
PRAGMA foreign_key_check;
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '' }],
        hint: 'PRAGMA foreign_key_check'
    },
    {
        id: 'dbms2-table-info',
        title: 'Table Info',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Get info for table T.`,
        examples: [{ input: '', output: '0|val|INT|0||0' }],
        starterCode: `-- Write your query below
PRAGMA table_info(T);
`,
        setupCode: `CREATE TABLE T (val INT);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '0|val|INT|0||0' }],
        hint: 'PRAGMA table_info'
    },
    {
        id: 'dbms2-index-list',
        title: 'Index List',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `List indexes on T.`,
        examples: [{ input: '', output: '0|idx|0|c|0' }],
        starterCode: `-- Write your query below
PRAGMA index_list(T);
`,
        setupCode: `CREATE TABLE T (val INT); CREATE INDEX idx ON T(val);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '0|idx|0|c|0' }],
        hint: 'PRAGMA index_list'
    },
    {
        id: 'dbms2-index-info',
        title: 'Index Info',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Get info for index idx.`,
        examples: [{ input: '', output: '0|0|val' }],
        starterCode: `-- Write your query below
PRAGMA index_info(idx);
`,
        setupCode: `CREATE TABLE T (val INT); CREATE INDEX idx ON T(val);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '0|0|val' }],
        hint: 'PRAGMA index_info'
    },
    {
        id: 'dbms2-case-insensitive',
        title: 'Case Insensitive Like',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Select 'a' LIKE 'A'.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
SELECT 'a' LIKE 'A';
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'LIKE'
    },
    {
        id: 'dbms2-json-extract',
        title: 'JSON Extract',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Extract 'a' from '{"a":1}'.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
SELECT json_extract('{"a":1}', '$.a');
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'json_extract'
    },
    {
        id: 'dbms2-json-array',
        title: 'JSON Array',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Create JSON array [1, 2].`,
        examples: [{ input: '', output: '[1,2]' }],
        starterCode: `-- Write your query below
SELECT json_array(1, 2);
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '[1,2]' }],
        hint: 'json_array'
    },
    {
        id: 'dbms2-json-object',
        title: 'JSON Object',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Create JSON object {"a":1}.`,
        examples: [{ input: '', output: '{"a":1}' }],
        starterCode: `-- Write your query below
SELECT json_object('a', 1);
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '{"a":1}' }],
        hint: 'json_object'
    },
    {
        id: 'dbms2-json-type',
        title: 'JSON Type',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Get type of '{"a":1}'.`,
        examples: [{ input: '', output: 'object' }],
        starterCode: `-- Write your query below
SELECT json_type('{"a":1}');
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'object' }],
        hint: 'json_type'
    },
    {
        id: 'dbms2-json-valid',
        title: 'JSON Valid',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Check if '{"a":1}' is valid JSON.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
SELECT json_valid('{"a":1}');
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'json_valid'
    },
    {
        id: 'dbms2-rtree',
        title: 'RTree (Mocked)',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Create RTree index (Mocked).`,
        examples: [{ input: '', output: 'Created' }],
        starterCode: `SELECT 'Created'; -- Mocked
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Created' }],
        hint: 'VIRTUAL TABLE ... USING rtree'
    },
    {
        id: 'dbms2-fts',
        title: 'FTS (Mocked)',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Create FTS table (Mocked).`,
        examples: [{ input: '', output: 'Created' }],
        starterCode: `SELECT 'Created'; -- Mocked
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Created' }],
        hint: 'VIRTUAL TABLE ... USING fts5'
    },
    {
        id: 'dbms2-geopoly',
        title: 'Geopoly (Mocked)',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Create Geopoly table (Mocked).`,
        examples: [{ input: '', output: 'Created' }],
        starterCode: `SELECT 'Created'; -- Mocked
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Created' }],
        hint: 'VIRTUAL TABLE ... USING geopoly'
    },
    {
        id: 'dbms2-upsert',
        title: 'Upsert',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Insert or replace (upsert).`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
INSERT INTO T VALUES (1, 2) ON CONFLICT(id) DO UPDATE SET val=excluded.val;
SELECT val FROM T;
`,
        setupCode: `CREATE TABLE T (id INT PRIMARY KEY, val INT); INSERT INTO T VALUES (1, 1);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '2' }],
        hint: 'ON CONFLICT DO UPDATE'
    },
    {
        id: 'dbms2-returning',
        title: 'Returning Clause',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Insert and return id.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
INSERT INTO T VALUES (1) RETURNING id;
`,
        setupCode: `CREATE TABLE T (id INT);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'RETURNING'
    },
    {
        id: 'dbms2-generated-col',
        title: 'Generated Column',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create table with generated column b = a*2. Insert 1. Select b.`,
        examples: [{ input: '', output: '2' }],
        starterCode: `-- Write your query below
INSERT INTO T VALUES (1);
SELECT b FROM T;
`,
        setupCode: `CREATE TABLE T (a INT, b INT GENERATED ALWAYS AS (a*2));`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '2' }],
        hint: 'GENERATED ALWAYS AS'
    },
    {
        id: 'dbms2-filter-clause',
        title: 'Filter Clause',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Count where val > 1 using FILTER.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
SELECT count(*) FILTER (WHERE val > 1) FROM T;
`,
        setupCode: `CREATE TABLE T (val INT); INSERT INTO T VALUES (1), (2);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'FILTER (WHERE ...)'
    },
    {
        id: 'dbms2-nulls-first',
        title: 'Order Nulls First',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Order by val NULLS FIRST.`,
        examples: [{ input: '', output: 'NULL\n1' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (val INT); INSERT INTO T VALUES (1), (NULL);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'NULL\n1' }],
        hint: 'NULLS FIRST'
    },
    {
        id: 'dbms2-nulls-last',
        title: 'Order Nulls Last',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Order by val NULLS LAST.`,
        examples: [{ input: '', output: '1\nNULL' }],
        starterCode: `-- Write your query below
`,
        setupCode: `CREATE TABLE T (val INT); INSERT INTO T VALUES (NULL), (1);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1\nNULL' }],
        hint: 'NULLS LAST'
    },
    {
        id: 'dbms2-values',
        title: 'Values Clause',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Select values (1), (2).`,
        examples: [{ input: '', output: '1\n2' }],
        starterCode: `-- Write your query below
VALUES (1), (2);
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1\n2' }],
        hint: 'VALUES'
    },
    {
        id: 'dbms2-materialized-view',
        title: 'Materialized View (Mocked)',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Create materialized view (Mocked).`,
        examples: [{ input: '', output: 'Created' }],
        starterCode: `SELECT 'Created'; -- Mocked
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: 'Created' }],
        hint: 'CREATE MATERIALIZED VIEW'
    },
    {
        id: 'dbms2-drop-view',
        title: 'Drop View',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Drop view V.`,
        examples: [{ input: '', output: '' }],
        starterCode: `-- Write your query below
DROP VIEW V;
`,
        setupCode: `CREATE VIEW V AS SELECT 1;`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '' }],
        hint: 'DROP VIEW'
    },
    {
        id: 'dbms2-reindex',
        title: 'Reindex',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Reindex T.`,
        examples: [{ input: '', output: '' }],
        starterCode: `-- Write your query below
REINDEX T;
`,
        setupCode: `CREATE TABLE T (val INT);`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '' }],
        hint: 'REINDEX'
    },
    {
        id: 'dbms2-strict',
        title: 'Strict Table',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create strict table T. Insert 1. Select *.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
INSERT INTO T VALUES (1);
SELECT * FROM T;
`,
        setupCode: `CREATE TABLE T (val INT) STRICT;`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'STRICT'
    },
    {
        id: 'dbms2-without-rowid',
        title: 'Without RowID',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create table without rowid. Insert 1. Select *.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
INSERT INTO T VALUES (1);
SELECT * FROM T;
`,
        setupCode: `CREATE TABLE T (val INT PRIMARY KEY) WITHOUT ROWID;`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'WITHOUT ROWID'
    },
    {
        id: 'dbms2-temp-table',
        title: 'Temp Table',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Create temp table T. Insert 1. Select *.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
CREATE TEMP TABLE T (val INT);
INSERT INTO T VALUES (1);
SELECT * FROM T;
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'TEMP TABLE'
    },
    {
        id: 'dbms2-temp-view',
        title: 'Temp View',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Create temp view V. Select *.`,
        examples: [{ input: '', output: '1' }],
        starterCode: `-- Write your query below
CREATE TEMP VIEW V AS SELECT 1;
SELECT * FROM V;
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '1' }],
        hint: 'TEMP VIEW'
    },
    {
        id: 'dbms2-savepoint-release',
        title: 'Release Savepoint',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Begin, savepoint S, release S, commit.`,
        examples: [{ input: '', output: '' }],
        starterCode: `-- Write your query below
BEGIN; SAVEPOINT S; RELEASE S; COMMIT;
`,
        functionName: 'sql',
        testCases: [{ input: '', expected: '' }],
        hint: 'RELEASE'
    }
];
