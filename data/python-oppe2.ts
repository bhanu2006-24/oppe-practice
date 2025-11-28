import { Problem } from '../types';

export const PYTHON_OPPE2_PROBLEMS: Problem[] = [
    {
        id: 'py-oppe2-matrix-mult',
        title: 'Matrix Multiplication',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Write a function 'matrix_multiply' that takes two matrices (2D lists) A and B and returns their product. Return None if dimensions are incompatible.`,
        examples: [
            { input: 'A=[[1,2],[3,4]], B=[[1,0],[0,1]]', output: '[[1, 2], [3, 4]]' }
        ],
        starterCode: `def matrix_multiply(A, B):
    # Write your code here
    pass`,
        functionName: 'matrix_multiply',
        testCases: [
            { input: '([[1,2],[3,4]], [[1,0],[0,1]])', expected: '[[1, 2], [3, 4]]' },
            { input: '([[1,2]], [[1],[2]])', expected: '[[5]]' },
            { input: '([[1,2]], [[1,2]])', expected: 'None' }
        ],
        hint: 'Result dimensions will be Rows(A) x Cols(B). Check if Cols(A) == Rows(B) first.'
    },
    {
        id: 'py-oppe2-dict-invert',
        title: 'Invert Dictionary',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'invert_dict' that takes a dictionary d. Return a new dictionary where keys and values are swapped.
    
    If multiple keys have the same value, the new value should be a sorted list of the original keys.`,
        examples: [
            { input: '{ "a": 1, "b": 1, "c": 2 }', output: '{ 1: ["a", "b"], 2: ["c"] }' }
        ],
        starterCode: `def invert_dict(d):
    # Write your code here
    pass`,
        functionName: 'invert_dict',
        testCases: [
            { input: '({"a": 1, "b": 1, "c": 2})', expected: '{1: ["a", "b"], 2: ["c"]}' },
            { input: '({"x": 10, "y": 20})', expected: '{10: ["x"], 20: ["y"]}' }
        ],
        hint: 'Iterate items. If value exists in new dict, append key; else create new list.'
    },
    {
        id: 'py-oppe2-lcp',
        title: 'Longest Common Prefix',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'longest_common_prefix' that takes a list of strings and returns the longest common prefix string amongst them. If there is no common prefix, return "".`,
        examples: [
            { input: '["flower","flow","flight"]', output: '"fl"' }
        ],
        starterCode: `def longest_common_prefix(strs):
    # Write your code here
    pass`,
        functionName: 'longest_common_prefix',
        testCases: [
            { input: '(["flower","flow","flight"])', expected: '"fl"' },
            { input: '(["dog","racecar","car"])', expected: '""' }
        ],
        hint: 'Sort the list and compare only the first and last strings.'
    },
    {
        id: 'py-oppe2-flatten',
        title: 'Flatten Nested List',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'flatten' that takes a nested list (which may contain integers or other lists) and returns a single flat list of integers.`,
        examples: [
            { input: '[1, [2, [3, 4], 5], 6]', output: '[1, 2, 3, 4, 5, 6]' }
        ],
        starterCode: `def flatten(nested_list):
    # Write your code here
    pass`,
        functionName: 'flatten',
        testCases: [
            { input: '([1, [2, [3, 4], 5], 6])', expected: '[1, 2, 3, 4, 5, 6]' },
            { input: '([])', expected: '[]' },
            { input: '([1, 2, 3])', expected: '[1, 2, 3]' }
        ],
        hint: 'Use recursion. If element is a list, extend result with flatten(element).'
    },
    {
        id: 'py-oppe2-spiral',
        title: 'Spiral Matrix',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Given an m x n matrix, return all elements of the matrix in spiral order (clockwise starting from top-left).`,
        examples: [
            { input: '[[1,2,3],[4,5,6],[7,8,9]]', output: '[1,2,3,6,9,8,7,4,5]' }
        ],
        starterCode: `def spiral_order(matrix):
    # Write your code here
    pass`,
        functionName: 'spiral_order',
        testCases: [
            { input: '([[1,2,3],[4,5,6],[7,8,9]])', expected: '[1, 2, 3, 6, 9, 8, 7, 4, 5]' },
            { input: '([[1,2,3,4],[5,6,7,8],[9,10,11,12]])', expected: '[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]' }
        ],
        hint: 'Maintain boundaries (top, bottom, left, right) and shrink them as you traverse.'
    }
];
