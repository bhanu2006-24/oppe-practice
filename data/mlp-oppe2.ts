import { Problem } from '../types';

export const MLP_OPPE2_PROBLEMS: Problem[] = [
    {
        id: 'mlp-oppe2-mse',
        title: 'Mean Squared Error',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Calculate MSE = (1/n) * sum((y_true - y_pred)^2).`,
        examples: [
            { input: '[1,1], [0,0]', output: '1.0' }
        ],
        starterCode: `def mse(y_true, y_pred):
    # Write your code here
    pass`,
        functionName: 'mse',
        testCases: [
            { input: '([1,1], [0,0])', expected: '1.0' },
            { input: '([2,2], [1,1])', expected: '1.0' }
        ],
        hint: 'Calculate squared differences, sum them, then divide by length.'
    },
    {
        id: 'mlp-oppe2-sigmoid',
        title: 'Sigmoid Function',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Implement the sigmoid function: f(x) = 1 / (1 + e^-x). Round to 4 decimal places.`,
        examples: [
            { input: '0', output: '0.5' }
        ],
        starterCode: `import math
    def sigmoid(x):
    # Write your code here
    pass`,
        functionName: 'sigmoid',
        testCases: [
            { input: '(0)', expected: '0.5' },
            { input: '(100)', expected: '1.0' }
        ],
        hint: 'Use math.exp(-x).'
    },
    {
        id: 'mlp-oppe2-transpose',
        title: 'Matrix Transpose',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Return the transpose of a matrix (2D list).`,
        examples: [
            { input: '[[1,2], [3,4]]', output: '[[1,3], [2,4]]' }
        ],
        starterCode: `def transpose(matrix):
    # Write your code here
    pass`,
        functionName: 'transpose',
        testCases: [
            { input: '([[1,2], [3,4]])', expected: '[[1, 3], [2, 4]]' },
            { input: '([[1,2,3]])', expected: '[[1], [2], [3]]' }
        ],
        hint: 'Use nested list comprehension: [[row[i] for row in matrix] for i in range(cols)].'
    }
];
