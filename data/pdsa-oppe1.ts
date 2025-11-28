import { Problem } from '../types';

export const PDSA_OPPE1_PROBLEMS: Problem[] = [
    {
        id: 'pdsa-oppe1-binary-search',
        title: 'Recursive Binary Search',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Implement a recursive binary search. Return the index of target 'x' is in sorted list 'L', else -1.`,
        examples: [
            { input: 'L=[1, 3, 5, 7], x=3', output: '1' }
        ],
        starterCode: `def binary_search(L, x, low=0, high=None):
    if high is None: high = len(L) - 1
    # Write your code here
    pass`,
        functionName: 'binary_search',
        testCases: [
            { input: '([1, 3, 5, 7], 3)', expected: '1' },
            { input: '([1, 3, 5, 7], 2)', expected: '-1' },
            { input: '([5], 5)', expected: '0' }
        ],
        hint: 'Base case: if low > high return -1. Else compare mid.'
    },
    {
        id: 'pdsa-oppe1-valid-parens',
        title: 'Valid Parentheses',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid using a Stack.`,
        examples: [
            { input: '"()[]{}"', output: 'True' }
        ],
        starterCode: `def is_valid(s):
    # Write your code here
    pass`,
        functionName: 'is_valid',
        testCases: [
            { input: '("()")', expected: 'True' },
            { input: '("([)]")', expected: 'False' },
            { input: '("{[]}")', expected: 'True' }
        ],
        hint: 'Push opening brackets to stack. For closing brackets, check if stack top matches.'
    },
    {
        id: 'pdsa-oppe1-find-peak',
        title: 'Find Peak Element',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index. Assume nums[-1] = nums[n] = -∞.`,
        examples: [
            { input: '[1,2,3,1]', output: '2' }
        ],
        starterCode: `def find_peak(nums):
    # Write your code here
    pass`,
        functionName: 'find_peak',
        testCases: [
            { input: '([1,2,3,1])', expected: '2' },
            { input: '([1,2,1,3,5,6,4])', expected: '5' }
        ],
        hint: 'You can do this in O(log n) using binary search logic.'
    },
    {
        id: 'pdsa-oppe1-merge-sorted',
        title: 'Merge Sorted Arrays',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Merge two sorted lists nums1 and nums2 into a single sorted list.`,
        examples: [
            { input: 'n1=[1,2,3], n2=[2,5,6]', output: '[1,2,2,3,5,6]' }
        ],
        starterCode: `def merge_arrays(nums1, nums2):
    # Write your code here
    pass`,
        functionName: 'merge_arrays',
        testCases: [
            { input: '([1,2,3], [2,5,6])', expected: '[1, 2, 2, 3, 5, 6]' },
            { input: '([], [1])', expected: '[1]' }
        ],
        hint: 'Use two pointers starting at 0 for both lists.'
    }
];
