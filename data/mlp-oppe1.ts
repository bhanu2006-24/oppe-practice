import { Problem } from '../types';

export const MLP_OPPE1_PROBLEMS: Problem[] = [
    {
        id: 'mlp-oppe1-vector-add',
        title: 'Vector Addition',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function that adds two vectors (lists) element-wise.`,
        examples: [
            { input: '[1,2], [3,4]', output: '[4, 6]' }
        ],
        starterCode: `def vector_add(v1, v2):
    # Write your code here
    pass`,
        functionName: 'vector_add',
        testCases: [
            { input: '([1,2], [3,4])', expected: '[4, 6]' }
        ],
        hint: 'Use a list comprehension: [x + y for x, y in zip(v1, v2)]'
    },
    {
        id: 'mlp-oppe1-dot-prod',
        title: 'Dot Product',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Calculate dot product: sum(a[i] * b[i]).`,
        examples: [
            { input: '[1,2], [3,4]', output: '11' }
        ],
        starterCode: `def dot_product(v1, v2):
    # Write your code here
    pass`,
        functionName: 'dot_product',
        testCases: [
            { input: '([1,2], [3,4])', expected: '11' }
        ],
        hint: 'Sum of products of zip(v1, v2).'
    },
    {
        id: 'mlp-oppe1-euclidean',
        title: 'Euclidean Distance',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Calculate Euclidean distance between two points (lists) p1 and p2. Return float rounded to 2 decimals.`,
        examples: [
            { input: '[0,0], [3,4]', output: '5.0' }
        ],
        starterCode: `import math
    def euclidean_dist(p1, p2):
    # Write your code here
    pass`,
        functionName: 'euclidean_dist',
        testCases: [
            { input: '([0,0], [3,4])', expected: '5.0' }
        ],
        hint: 'sqrt(sum((x-y)**2)).'
    }
];
