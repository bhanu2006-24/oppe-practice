import { Problem } from '../types';

export const DBMS_OPPE1_PROBLEMS: Problem[] = [
    {
        id: 'dbms-oppe1-where',
        title: 'SQL: SELECT WHERE',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Simulate: SELECT name FROM users WHERE age >= 18 AND country = 'India'.
    
    Input: List of dictionaries. Output: List of names (strings).`,
        examples: [
            { input: '[{"name":"A","age":20,"country":"India"}, {"name":"B","age":17,"country":"India"}]', output: '["A"]' }
        ],
        starterCode: `def filter_users(users):
    # Write your code here
    pass`,
        functionName: 'filter_users',
        testCases: [
            { input: '([{"name":"A","age":20,"country":"India"}, {"name":"B","age":17,"country":"India"}, {"name":"C","age":22,"country":"US"}])', expected: '["A"]' }
        ],
        hint: 'List comprehension: [u["name"] for u in users if ...]'
    },
    {
        id: 'dbms-oppe1-agg',
        title: 'SQL: AVG Aggregation',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Simulate: SELECT AVG(salary) FROM employees.
    
    Input: List of dicts. Return float. Return 0 if list is empty.`,
        examples: [
            { input: '[{"salary": 100}, {"salary": 200}]', output: '150.0' }
        ],
        starterCode: `def avg_salary(employees):
    # Write your code here
    pass`,
        functionName: 'avg_salary',
        testCases: [
            { input: '([{"salary": 100}, {"salary": 200}])', expected: '150.0' },
            { input: '([])', expected: '0' }
        ],
        hint: 'Sum the salaries and divide by len(employees).'
    },
    {
        id: 'dbms-oppe1-update',
        title: 'SQL: UPDATE',
        subject: 'DBMS',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Simulate: UPDATE products SET price = price * 0.9 WHERE category = 'Electronics'.
    
    Modify the list in-place and return the list.`,
        examples: [
            { input: '[{"cat":"Electronics", "price":100}]', output: '[{"cat":"Electronics", "price":90.0}]' }
        ],
        starterCode: `def update_prices(products):
    # Write your code here
    pass`,
        functionName: 'update_prices',
        testCases: [
            { input: '([{"cat":"Electronics", "price":100}, {"cat":"Books", "price":50}])', expected: '[{"cat": "Electronics", "price": 90.0}, {"cat": "Books", "price": 50}]' }
        ],
        hint: 'Iterate loops and modify dictionary values directly.'
    }
];
