import { Problem } from '../types';

export const PYTHON_OPPE1_PROBLEMS: Problem[] = [
    {
        id: 'py-oppe1-sq-diff',
        title: 'Sum Squares & Abs Diff',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'sum_squares_abs_diff_squares' that takes two integer inputs, a and b, and returns a tuple with:
1. The sum of the squares of a and b.
2. The absolute difference of the squares of a and b.`,
        examples: [
            { input: 'a = 3, b = 4', output: '(25, 7)', explanation: 'Sum of squares: 9+16=25. Abs diff: |9-16|=7.' }
        ],
        starterCode: `def sum_squares_abs_diff_squares(a, b):
    # Write your code here
    pass`,
        functionName: 'sum_squares_abs_diff_squares',
        testCases: [
            { input: '(3, 4)', expected: '(25, 7)' },
            { input: '(1, 1)', expected: '(2, 0)' },
            { input: '(10, 5)', expected: '(125, 75)' }
        ],
        hint: 'Use the abs() function for absolute difference and ** operator for power.'
    },
    {
        id: 'py-oppe1-palindrome',
        title: 'Odd Length Palindrome',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'is_odd_length_palindrome' that takes a string s and returns True if s is a palindrome of odd length, and False otherwise.`,
        examples: [
            { input: '"nun"', output: 'True' },
            { input: '"noon"', output: 'False' }
        ],
        starterCode: `def is_odd_length_palindrome(s):
    # Write your code here
    pass`,
        functionName: 'is_odd_length_palindrome',
        testCases: [
            { input: '("nun")', expected: 'True' },
            { input: '("noon")', expected: 'False' },
            { input: '("racecar")', expected: 'True' },
            { input: '("hello")', expected: 'False' }
        ],
        hint: 'Check two conditions: s == s[::-1] AND len(s) % 2 != 0'
    },
    {
        id: 'py-oppe1-factorial',
        title: 'Calculate Factorial',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'factorial' that takes a non-negative integer n and returns its factorial. 
    
    Factorial of 0 is 1.`,
        examples: [
            { input: '5', output: '120' }
        ],
        starterCode: `def factorial(n):
    # Write your code here
    pass`,
        functionName: 'factorial',
        testCases: [
            { input: '(5)', expected: '120' },
            { input: '(0)', expected: '1' },
            { input: '(1)', expected: '1' },
            { input: '(6)', expected: '720' }
        ],
        hint: 'You can use a simple while or for loop, or recursion.'
    },
    {
        id: 'py-oppe1-rotate-list',
        title: 'Rotate List Right',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'rotate_list' that takes a list L and a positive integer k, and returns a new list where the elements are rotated to the right by k steps.`,
        examples: [
            { input: 'L=[1,2,3,4,5], k=2', output: '[4, 5, 1, 2, 3]' }
        ],
        starterCode: `def rotate_list(L, k):
    # Write your code here
    pass`,
        functionName: 'rotate_list',
        testCases: [
            { input: '([1,2,3,4,5], 2)', expected: '[4, 5, 1, 2, 3]' },
            { input: '([1,2], 3)', expected: '[2, 1]' },
            { input: '([], 5)', expected: '[]' }
        ],
        hint: 'Effective rotation is k % len(L). Slicing L[-k:] + L[:-k] helps.'
    },
    {
        id: 'py-oppe1-count-vowels',
        title: 'Count Vowels',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'count_vowels' that takes a string s and returns the number of vowels (a, e, i, o, u) in it. Case insensitive.`,
        examples: [
            { input: '"Hello World"', output: '3' }
        ],
        starterCode: `def count_vowels(s):
    # Write your code here
    pass`,
        functionName: 'count_vowels',
        testCases: [
            { input: '("Hello World")', expected: '3' },
            { input: '("Python")', expected: '1' },
            { input: '("AEIOU")', expected: '5' }
        ],
        hint: 'Iterate through the string and check if character.lower() in "aeiou".'
    },
    {
        id: 'py-oppe1-reverse-words',
        title: 'Reverse Words',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'reverse_words' that takes a string sentence and returns the sentence with the order of words reversed.`,
        examples: [
            { input: '"The sky is blue"', output: '"blue is sky The"' }
        ],
        starterCode: `def reverse_words(s):
    # Write your code here
    pass`,
        functionName: 'reverse_words',
        testCases: [
            { input: '("The sky is blue")', expected: '"blue is sky The"' },
            { input: '("  hello world  ")', expected: '"world hello"' },
            { input: '("a good   example")', expected: '"example good a"' }
        ],
        hint: 'Split the string by spaces to get a list, reverse the list, then join them back.'
    }
];
