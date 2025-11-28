import { Problem } from '../types';

export const SQL_OPPE1_PROBLEMS: Problem[] = [
    {
        id: 'sql-oppe1-select',
        title: 'Basic Select',
        subject: 'SQL',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a SQL query to select all columns from the 'users' table.
        
        Table 'users' has columns: id (INT), name (TEXT).
        Data: (1, 'Alice'), (2, 'Bob').`,
        examples: [
            { input: '', output: '1|Alice\n2|Bob' }
        ],
        starterCode: `-- Write your SQL here
CREATE TABLE users (id INT, name TEXT);
INSERT INTO users VALUES (1, 'Alice'), (2, 'Bob');
-- Your query below:
`,
        functionName: 'sql',
        testCases: [
            { input: '', expected: '1|Alice\n2|Bob' }
        ],
        hint: 'SELECT * FROM users'
    },
    // Adding 49 more placeholder questions
    ...Array.from({ length: 49 }, (_, i) => ({
        id: `sql-oppe1-q${i + 2}`,
        title: `SQL OPPE 1 Practice Q${i + 2}`,
        subject: 'SQL' as const,
        examLevel: 'OPPE 1' as const,
        difficulty: 'Easy' as const,
        description: `This is a practice question for SQL OPPE 1. Problem #${i + 2}.
        
        Select the number ${i + 2} as 'result'.`,
        examples: [
            { input: '', output: `${i + 2}` }
        ],
        starterCode: `SELECT ${i + 2} as result;`,
        functionName: 'sql',
        testCases: [
            { input: '', expected: `${i + 2}` }
        ]
    }))
];
