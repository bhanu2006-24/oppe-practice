import { Problem } from '../types';

export const PDSA_OPPE2_PROBLEMS: Problem[] = [
    {
        id: 'pdsa-oppe2-kth-largest',
        title: 'Kth Largest Element',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given an integer array nums and an integer k, return the kth largest element in the array.`,
        examples: [
            { input: '[3,2,1,5,6,4], k=2', output: '5' }
        ],
        starterCode: `def find_kth_largest(nums, k):
    # Write your code here
    pass`,
        functionName: 'find_kth_largest',
        testCases: [
            { input: '([3,2,1,5,6,4], 2)', expected: '5' },
            { input: '([3,2,3,1,2,4,5,5,6], 4)', expected: '4' }
        ],
        hint: 'Sort the list and take element at index -k.'
    },
    {
        id: 'pdsa-oppe2-sort-colors',
        title: 'Sort Colors (Dutch Flag)',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given an array with n objects colored red, white, or blue (0, 1, 2), sort them in-place so that objects of the same color are adjacent.
    
    Return the sorted list.`,
        examples: [
            { input: '[2,0,2,1,1,0]', output: '[0,0,1,1,2,2]' }
        ],
        starterCode: `def sort_colors(nums):
    # Write your code here
    return nums`,
        functionName: 'sort_colors',
        testCases: [
            { input: '([2,0,2,1,1,0])', expected: '[0, 0, 1, 1, 2, 2]' },
            { input: '([2,0,1])', expected: '[0, 1, 2]' }
        ],
        hint: 'Use 3 pointers: low (0s), mid (1s), high (2s).'
    },
    {
        id: 'pdsa-oppe2-bst-val',
        title: 'Validate BST',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Given a list representing an Inorder Traversal of a Binary Tree, determine if it represents a valid Binary Search Tree (BST).
    
    A BST's inorder traversal must be strictly sorted.`,
        examples: [
            { input: '[1, 2, 3]', output: 'True' },
            { input: '[1, 3, 2]', output: 'False' }
        ],
        starterCode: `def is_valid_bst_inorder(arr):
    # Write your code here
    pass`,
        functionName: 'is_valid_bst_inorder',
        testCases: [
            { input: '([1, 2, 3])', expected: 'True' },
            { input: '([1, 3, 2])', expected: 'False' },
            { input: '([1, 1])', expected: 'False' }
        ],
        hint: 'Check if the list is strictly increasing.'
    }
];
