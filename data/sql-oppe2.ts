import { Problem } from '../types';

export const SQL_OPPE2_PROBLEMS: Problem[] = [
    {
        id: 'sql-oppe2-join',
        title: 'Inner Join',
        subject: 'SQL',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a SQL query to join 'users' and 'orders' on user_id.
        
        Table 'users': id, name
        Table 'orders': id, user_id, amount
        
        Select user name and order amount.`,
        examples: [
            { input: '', output: 'Alice|100' }
        ],
        starterCode: `-- Setup
CREATE TABLE users (id INT, name TEXT);
INSERT INTO users VALUES (1, 'Alice');
CREATE TABLE orders (id INT, user_id INT, amount INT);
INSERT INTO orders VALUES (101, 1, 100);

-- Your query:
`,
        functionName: 'sql',
        testCases: [
            { input: '', expected: 'Alice|100' }
        ],
        hint: 'SELECT u.name, o.amount FROM users u JOIN orders o ON u.id = o.user_id'
    },
    // Adding 49 more placeholder questions
    ...Array.from({ length: 49 }, (_, i) => ({
        id: `sql-oppe2-q${i + 2}`,
        title: `SQL OPPE 2 Practice Q${i + 2}`,
        subject: 'SQL' as const,
        examLevel: 'OPPE 2' as const,
        difficulty: 'Medium' as const,
        description: `This is a practice question for SQL OPPE 2. Problem #${i + 2}.
        
        Select the number ${i + 100} as 'val'.`,
        examples: [
            { input: '', output: `${i + 100}` }
        ],
        starterCode: `SELECT ${i + 100} as val;`,
        functionName: 'sql',
        testCases: [
            { input: '', expected: `${i + 100}` }
        ]
    }))
];
