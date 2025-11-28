import { Problem } from '../types';

export const DBMS_OPPE2_PROBLEMS: Problem[] = [
    {
        id: 'dbms-oppe2-inner-join',
        title: 'SQL: INNER JOIN',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Simulate: SELECT * FROM T1 JOIN T2 ON T1.id = T2.t1_id.
    
    Inputs: List T1, List T2.
    Output: List of combined dicts. T2's keys should overwrite T1's on conflict (except join key).`,
        examples: [
            { input: 'T1=[{"id":1, "a":1}], T2=[{"t1_id":1, "b":2}]', output: '[{"id":1, "a":1, "t1_id":1, "b":2}]' }
        ],
        starterCode: `def inner_join(t1, t2):
    # Write your code here
    pass`,
        functionName: 'inner_join',
        testCases: [
            { input: '([{"id":1, "val":"A"}], [{"t1_id":1, "score":100}])', expected: '[{"id": 1, "val": "A", "t1_id": 1, "score": 100}]' },
            { input: '([{"id":1}], [{"t1_id":2}])', expected: '[]' }
        ],
        hint: 'Nested loops. For each row in T1, check all rows in T2.'
    },
    {
        id: 'dbms-oppe2-groupby',
        title: 'SQL: GROUP BY COUNT',
        subject: 'DBMS',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Simulate: SELECT dept, COUNT(*) FROM employees GROUP BY dept.
    
    Return a dictionary where key is dept and value is count.`,
        examples: [
            { input: '[{"dept":"HR"}, {"dept":"HR"}, {"dept":"IT"}]', output: '{"HR": 2, "IT": 1}' }
        ],
        starterCode: `def group_by_count(employees):
    # Write your code here
    pass`,
        functionName: 'group_by_count',
        testCases: [
            { input: '([{"dept":"HR"}, {"dept":"HR"}, {"dept":"IT"}])', expected: '{"HR": 2, "IT": 1}' }
        ],
        hint: 'Use a dictionary to store counts. Iterate and increment.'
    }
];
