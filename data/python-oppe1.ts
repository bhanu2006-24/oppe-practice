import { Problem } from '../types';

export const PYTHON_OPPE1_PROBLEMS: Problem[] = [
    // --- PYQ PROBLEMS ---

    // --- Set 1 ---
    {
        id: 'py-oppe1-set1-p1',
        title: 'Sum Squares & Abs Diff',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'sum_squares_abs_diff_squares' that takes two integer inputs, a and b, and returns a tuple with:
1. The sum of the squares of a and b.
2. The absolute difference of the squares of a and b.`,
        examples: [{ input: 'a = 3, b = 4', output: '(25, 7)' }],
        starterCode: `def sum_squares_abs_diff_squares(a, b):
    # Write your code here
    pass`,
        functionName: 'sum_squares_abs_diff_squares',
        testCases: [{ input: '(3, 4)', expected: '(25, 7)' }],
        hint: 'Return (a**2 + b**2, abs(a**2 - b**2))'
    },
    {
        id: 'py-oppe1-set1-p2',
        title: 'Odd Length Palindrome',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'is_odd_length_palindrome' that takes a string s and returns True if s is a palindrome of odd length, and False otherwise.`,
        examples: [{ input: '"nun"', output: 'True' }, { input: '"noon"', output: 'False' }],
        starterCode: `def is_odd_length_palindrome(s):
    # Write your code here
    pass`,
        functionName: 'is_odd_length_palindrome',
        testCases: [{ input: '("nun")', expected: 'True' }, { input: '("noon")', expected: 'False' }],
        hint: 'Check s == s[::-1] and len(s) % 2 != 0'
    },
    {
        id: 'py-oppe1-set1-p3',
        title: 'Remove Elements at Indices',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'remove_elements_at_two_indices' that takes a list l and two indices i1 and i2. The function should remove the elements at these two indices from the list l. Assume the indices are non-negative and unique. The function should not return anything but should modify the input list directly.`,
        examples: [{ input: 'l = [1, 2, 3, 4, 5, 6, 7], i1 = 5, i2 = 1', output: '[1, 3, 4, 5, 7]' }],
        starterCode: `def remove_elements_at_two_indices(l, i1, i2):
    # Write your code here
    pass`,
        functionName: 'remove_elements_at_two_indices',
        testCases: [{ input: '([1, 2, 3, 4, 5, 6, 7], 5, 1)', expected: 'None' }], // Checks side effect usually
        hint: 'Remove larger index first to avoid shifting issues.'
    },
    {
        id: 'py-oppe1-set1-p4',
        title: 'Sum of Squares of Even',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'sum_of_squares_of_even' that takes a list of integers and returns the sum of squares of all even numbers in the list.`,
        examples: [{ input: '[1, 2, 3, 4, 5, 6]', output: '56' }],
        starterCode: `def sum_of_squares_of_even(nums):
    # Write your code here
    pass`,
        functionName: 'sum_of_squares_of_even',
        testCases: [{ input: '([1, 2, 3, 4, 5, 6])', expected: '56' }],
        hint: 'Sum x**2 for x in nums if x % 2 == 0'
    },
    {
        id: 'py-oppe1-set1-p5',
        title: 'Vowels to Uppercase',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a program that takes a passage with n lines of text as input. For each line, convert all vowels (a, e, i, o, u) to uppercase and all other characters to lowercase.
        
Input Format:
The first line contains an integer n, the number of lines.
The next n lines contain the passage.`,
        examples: [{ input: '1\nHello World', output: 'hEllO wOrld' }],
        starterCode: `def main():
    # Write your code here
    pass`,
        functionName: 'main', // I/O problem
        testCases: [],
        hint: 'Iterate chars, check if in "aeiou".'
    },
    {
        id: 'py-oppe1-set1-p6',
        title: 'Filter Roll Numbers',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'get_roll_nos' to filter student roll numbers based on criteria:
- 'above_average': Marks >= average.
- 'below_average': Marks < average.
- 'fail': Marks < 40.
- 'toppers': Marks >= 90.
- None: Return all.
Data format: list of tuples (rollno, marks).`,
        examples: [],
        starterCode: `def get_roll_nos(data, criteria=None):
    # Write your code here
    pass`,
        functionName: 'get_roll_nos',
        testCases: [],
        hint: 'Calculate average first.'
    },
    {
        id: 'py-oppe1-set1-p7',
        title: 'V Shaped Pattern',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given an integer n > 0, print a "V" shaped pattern with n rows using backslashes and forward slashes, with 'v' at the bottom.`,
        examples: [{ input: '2', output: '\\ /\n v' }],
        starterCode: `def main():
    # Write your code here
    pass`,
        functionName: 'main',
        testCases: [],
        hint: 'Use loops and spacing.'
    },

    // --- Set 2 ---
    {
        id: 'py-oppe1-set2-p1',
        title: 'Right Triangle Even Sides',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Given three side lengths a, b, c (a<=b<=c), check if they form a right triangle AND the perpendicular sides (a, b) are even.`,
        examples: [],
        starterCode: `def is_right_triangle_with_even_sides(a, b, c):
    # Write your code here
    pass`,
        functionName: 'is_right_triangle_with_even_sides',
        testCases: [],
        hint: 'Check a**2 + b**2 == c**2 and a%2==0 and b%2==0'
    },
    {
        id: 'py-oppe1-set2-p2',
        title: 'Odd Alpha Even Digits',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Given a string, check if all odd indices are alphabets and even indices are digits.`,
        examples: [],
        starterCode: `def is_odd_indices_alpha_and_even_indices_digits(string):
    # Write your code here
    pass`,
        functionName: 'is_odd_indices_alpha_and_even_indices_digits',
        testCases: [],
        hint: 'Enumerate and check types.'
    },
    {
        id: 'py-oppe1-set2-p3',
        title: 'Unique Chars Diff',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Find unique chars present in first word but not in second. Return a set.`,
        examples: [],
        starterCode: `def unique_chars_present_in_first_not_in_second(s1, s2):
    # Write your code here
    pass`,
        functionName: 'unique_chars_present_in_first_not_in_second',
        testCases: [],
        hint: 'set(s1) - set(s2)'
    },
    {
        id: 'py-oppe1-set2-p4',
        title: 'Repeat Tuple',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Given tuple (a, b), return tuple with a repeated b times followed by b repeated a times.`,
        examples: [{ input: '(2, 3)', output: '(2, 2, 2, 3, 3)' }],
        starterCode: `def repeat(t):
    # Write your code here
    pass`,
        functionName: 'repeat',
        testCases: [],
        hint: 'Return tuple([a]*b + [b]*a)'
    },
    {
        id: 'py-oppe1-set2-p5',
        title: 'Swap Even Odd Indices',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Swap values at even and odd indices in a list. Modify in place.`,
        examples: [],
        starterCode: `def swap_even_and_odd_indices(l):
    # Write your code here
    pass`,
        functionName: 'swap_even_and_odd_indices',
        testCases: [],
        hint: 'Loop with step 2.'
    },
    {
        id: 'py-oppe1-set2-p6',
        title: 'Num Squares Dict',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Create dict with numbers 1 to n as keys and their squares as values.`,
        examples: [],
        starterCode: `def num_squares(n):
    # Write your code here
    pass`,
        functionName: 'num_squares',
        testCases: [],
        hint: '{i: i**2 for i in range(1, n+1)}'
    },
    {
        id: 'py-oppe1-set2-p7',
        title: 'Row with Max Zeros',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Find index of row with max number of zeros in a matrix.`,
        examples: [],
        starterCode: `def row_index_with_most_number_of_zeros(matrix):
    # Write your code here
    pass`,
        functionName: 'row_index_with_most_number_of_zeros',
        testCases: [],
        hint: 'Use max with key counting zeros.'
    },
    {
        id: 'py-oppe1-set2-p8',
        title: 'Top K Teams',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given list of dicts (name, runs, team), find top k teams by total runs.`,
        examples: [],
        starterCode: `def top_k_teams(batsmen, k):
    # Write your code here
    pass`,
        functionName: 'top_k_teams',
        testCases: [],
        hint: 'Aggregate runs per team then sort.'
    },
    {
        id: 'py-oppe1-set2-p9',
        title: 'Antakshari Subsequence',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Find length of longest subsequence where last char of word equals first char of next word.`,
        examples: [],
        starterCode: `def main():
    # Write your code here
    pass`,
        functionName: 'main',
        testCases: [],
        hint: 'Dynamic programming or greedy if simple.'
    },

    // --- Set 3 ---
    {
        id: 'py-oppe1-set3-p1',
        title: 'Square and Clip',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Square the integer x and clip result to threshold.`,
        examples: [],
        starterCode: `def square_and_clip(x, threshold):
    # Write your code here
    pass`,
        functionName: 'square_and_clip',
        testCases: [],
        hint: 'min(x**2, threshold)'
    },
    {
        id: 'py-oppe1-set3-p2',
        title: 'Lower First Upper Second',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Given even length string, first half lowercase, second half uppercase.`,
        examples: [],
        starterCode: `def lowercase_first_half_and_uppercase_second_half(s):
    # Write your code here
    pass`,
        functionName: 'lowercase_first_half_and_uppercase_second_half',
        testCases: [],
        hint: 'Slice and convert.'
    },
    {
        id: 'py-oppe1-set3-p3',
        title: 'Add Middle to Ends',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given odd length list, insert middle element to both ends. Modify in place.`,
        examples: [],
        starterCode: `def add_the_middle_element_to_both_ends(l):
    # Write your code here
    pass`,
        functionName: 'add_the_middle_element_to_both_ends',
        testCases: [],
        hint: 'Find mid index, insert at 0 and append.'
    },
    {
        id: 'py-oppe1-set3-p4',
        title: 'Manhattan Distance via B',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Calculate Manhattan distance from a to c via b. Points are tuples (x, y).`,
        examples: [],
        starterCode: `def manhattan_distance_via_b(a, b, c):
    # Write your code here
    pass`,
        functionName: 'manhattan_distance_via_b',
        testCases: [],
        hint: 'dist(a,b) + dist(b,c)'
    },
    {
        id: 'py-oppe1-set3-p5',
        title: 'Unique Common Digits',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Return number of unique digits common to both n1 and n2.`,
        examples: [],
        starterCode: `def number_of_unique_common_digits(n1, n2):
    # Write your code here
    pass`,
        functionName: 'number_of_unique_common_digits',
        testCases: [],
        hint: 'set(str(n1)) & set(str(n2))'
    },
    {
        id: 'py-oppe1-set3-p6',
        title: 'Create Indexed Dict',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Create dict with indices as keys and names as values from list.`,
        examples: [],
        starterCode: `def create_indexed_dict(names):
    # Write your code here
    pass`,
        functionName: 'create_indexed_dict',
        testCases: [],
        hint: 'dict(enumerate(names))'
    },
    {
        id: 'py-oppe1-set3-p7',
        title: 'Num to Word',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Generate string with digits as words separated by hyphens.`,
        examples: [],
        starterCode: `def num_to_word(num):
    # Write your code here
    pass`,
        functionName: 'num_to_word',
        testCases: [],
        hint: 'Map digits to words.'
    },
    {
        id: 'py-oppe1-set3-p8',
        title: 'Courses Sorted by Enrollment',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given dict of student: [courses], return courses sorted by enrollment count (desc).`,
        examples: [],
        starterCode: `def courses_sorted_by_enrollment(student_courses):
    # Write your code here
    pass`,
        functionName: 'courses_sorted_by_enrollment',
        testCases: [],
        hint: 'Count course occurrences then sort.'
    },
    {
        id: 'py-oppe1-set3-p9',
        title: 'Min Max Balance',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Given initial balance and daily transactions, find min, max, and end balance for each day.`,
        examples: [],
        starterCode: `def main():
    # Write your code here
    pass`,
        functionName: 'main',
        testCases: [],
        hint: 'Track running balance.'
    },
    // --- EXISTING PROBLEMS ---
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
    },

    // --- NEW PROBLEMS (50) ---

    // 1. Sum of Digits
    {
        id: 'py-oppe1-sum-digits',
        title: 'Sum of Digits',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'sum_digits' that takes a positive integer n and returns the sum of its digits.`,
        examples: [{ input: '123', output: '6' }],
        starterCode: `def sum_digits(n):
    # Write your code here
    pass`,
        functionName: 'sum_digits',
        testCases: [{ input: '(123)', expected: '6' }, { input: '(456)', expected: '15' }, { input: '(100)', expected: '1' }],
        hint: 'Convert to string or use modulo 10 loop.'
    },
    // 2. Armstrong Number
    {
        id: 'py-oppe1-armstrong',
        title: 'Armstrong Number',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'is_armstrong' that returns True if a number n is an Armstrong number (sum of digits raised to power of number of digits equals n), else False.`,
        examples: [{ input: '153', output: 'True' }],
        starterCode: `def is_armstrong(n):
    # Write your code here
    pass`,
        functionName: 'is_armstrong',
        testCases: [{ input: '(153)', expected: 'True' }, { input: '(370)', expected: 'True' }, { input: '(123)', expected: 'False' }],
        hint: 'Sum of int(digit)**len(str(n)).'
    },
    // 3. Prime Check
    {
        id: 'py-oppe1-is-prime',
        title: 'Check Prime',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'is_prime' that takes an integer n and returns True if it is prime, else False.`,
        examples: [{ input: '7', output: 'True' }],
        starterCode: `def is_prime(n):
    # Write your code here
    pass`,
        functionName: 'is_prime',
        testCases: [{ input: '(7)', expected: 'True' }, { input: '(4)', expected: 'False' }, { input: '(1)', expected: 'False' }],
        hint: 'Check divisibility from 2 to sqrt(n).'
    },
    // 4. Fibonacci Sequence
    {
        id: 'py-oppe1-fib-seq',
        title: 'Fibonacci Sequence',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'fibonacci_seq' that returns a list of the first n Fibonacci numbers.`,
        examples: [{ input: '5', output: '[0, 1, 1, 2, 3]' }],
        starterCode: `def fibonacci_seq(n):
    # Write your code here
    pass`,
        functionName: 'fibonacci_seq',
        testCases: [{ input: '(5)', expected: '[0, 1, 1, 2, 3]' }, { input: '(1)', expected: '[0]' }],
        hint: 'Start with [0, 1] and append sum of last two.'
    },
    // 5. GCD
    {
        id: 'py-oppe1-gcd',
        title: 'GCD of Two Numbers',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'gcd' that returns the Greatest Common Divisor of a and b.`,
        examples: [{ input: '12, 18', output: '6' }],
        starterCode: `def gcd(a, b):
    # Write your code here
    pass`,
        functionName: 'gcd',
        testCases: [{ input: '(12, 18)', expected: '6' }, { input: '(7, 13)', expected: '1' }],
        hint: 'Use Euclidean algorithm or math.gcd.'
    },
    // 6. LCM
    {
        id: 'py-oppe1-lcm',
        title: 'LCM of Two Numbers',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'lcm' that returns the Least Common Multiple of a and b.`,
        examples: [{ input: '4, 6', output: '12' }],
        starterCode: `def lcm(a, b):
    # Write your code here
    pass`,
        functionName: 'lcm',
        testCases: [{ input: '(4, 6)', expected: '12' }, { input: '(5, 7)', expected: '35' }],
        hint: 'LCM(a, b) = abs(a*b) // GCD(a, b).'
    },
    // 7. Palindrome Number
    {
        id: 'py-oppe1-pal-num',
        title: 'Palindrome Number',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'is_palindrome_num' that returns True if integer n is a palindrome.`,
        examples: [{ input: '121', output: 'True' }],
        starterCode: `def is_palindrome_num(n):
    # Write your code here
    pass`,
        functionName: 'is_palindrome_num',
        testCases: [{ input: '(121)', expected: 'True' }, { input: '(-121)', expected: 'False' }],
        hint: 'Convert to string and reverse.'
    },
    // 8. Reverse Integer
    {
        id: 'py-oppe1-rev-int',
        title: 'Reverse Integer',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'reverse_int' that reverses the digits of an integer. Preserve sign.`,
        examples: [{ input: '-123', output: '-321' }],
        starterCode: `def reverse_int(n):
    # Write your code here
    pass`,
        functionName: 'reverse_int',
        testCases: [{ input: '(-123)', expected: '-321' }, { input: '(120)', expected: '21' }],
        hint: 'Handle sign separately. Reverse string of abs(n).'
    },
    // 9. Count Digits
    {
        id: 'py-oppe1-count-digits',
        title: 'Count Digits',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'count_digits' that returns the number of digits in n.`,
        examples: [{ input: '12345', output: '5' }],
        starterCode: `def count_digits(n):
    # Write your code here
    pass`,
        functionName: 'count_digits',
        testCases: [{ input: '(12345)', expected: '5' }, { input: '(0)', expected: '1' }],
        hint: 'len(str(n)).'
    },
    // 10. Check Substring
    {
        id: 'py-oppe1-check-sub',
        title: 'Check Substring',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'is_substring' that returns True if sub is in s, else False.`,
        examples: [{ input: '"hello", "ell"', output: 'True' }],
        starterCode: `def is_substring(s, sub):
    # Write your code here
    pass`,
        functionName: 'is_substring',
        testCases: [{ input: '("hello", "ell")', expected: 'True' }, { input: '("hello", "world")', expected: 'False' }],
        hint: 'Use "in" operator.'
    },
    // 11. Count Char Occurrences
    {
        id: 'py-oppe1-count-char',
        title: 'Count Character',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'count_char' that returns the count of char c in string s.`,
        examples: [{ input: '"hello", "l"', output: '2' }],
        starterCode: `def count_char(s, c):
    # Write your code here
    pass`,
        functionName: 'count_char',
        testCases: [{ input: '("hello", "l")', expected: '2' }, { input: '("world", "z")', expected: '0' }],
        hint: 's.count(c).'
    },
    // 12. Replace Char
    {
        id: 'py-oppe1-replace-char',
        title: 'Replace Character',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'replace_char' that replaces all occurrences of old with new in s.`,
        examples: [{ input: '"hello", "l", "w"', output: '"hewwo"' }],
        starterCode: `def replace_char(s, old, new):
    # Write your code here
    pass`,
        functionName: 'replace_char',
        testCases: [{ input: '("hello", "l", "w")', expected: '"hewwo"' }],
        hint: 's.replace(old, new).'
    },
    // 13. Remove Vowels
    {
        id: 'py-oppe1-remove-vowels',
        title: 'Remove Vowels',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'remove_vowels' that removes all vowels from string s.`,
        examples: [{ input: '"hello"', output: '"hll"' }],
        starterCode: `def remove_vowels(s):
    # Write your code here
    pass`,
        functionName: 'remove_vowels',
        testCases: [{ input: '("hello")', expected: '"hll"' }, { input: '("apple")', expected: '"ppl"' }],
        hint: 'List comprehension or loop checking "aeiou".'
    },
    // 14. Capitalize Words
    {
        id: 'py-oppe1-cap-words',
        title: 'Capitalize Words',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'capitalize_words' that capitalizes the first letter of every word in s.`,
        examples: [{ input: '"hello world"', output: '"Hello World"' }],
        starterCode: `def capitalize_words(s):
    # Write your code here
    pass`,
        functionName: 'capitalize_words',
        testCases: [{ input: '("hello world")', expected: '"Hello World"' }],
        hint: 's.title().'
    },
    // 15. Snake to Camel
    {
        id: 'py-oppe1-snake-camel',
        title: 'Snake to Camel Case',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'snake_to_camel' that converts snake_case to camelCase.`,
        examples: [{ input: '"my_variable_name"', output: '"myVariableName"' }],
        starterCode: `def snake_to_camel(s):
    # Write your code here
    pass`,
        functionName: 'snake_to_camel',
        testCases: [{ input: '("my_variable_name")', expected: '"myVariableName"' }],
        hint: 'Split by "_", capitalize subsequent words, join.'
    },
    // 16. Check Anagram
    {
        id: 'py-oppe1-anagram',
        title: 'Check Anagram',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'is_anagram' that checks if s1 and s2 are anagrams.`,
        examples: [{ input: '"listen", "silent"', output: 'True' }],
        starterCode: `def is_anagram(s1, s2):
    # Write your code here
    pass`,
        functionName: 'is_anagram',
        testCases: [{ input: '("listen", "silent")', expected: 'True' }, { input: '("rat", "car")', expected: 'False' }],
        hint: 'sorted(s1) == sorted(s2).'
    },
    // 17. Check Pangram
    {
        id: 'py-oppe1-pangram',
        title: 'Check Pangram',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'is_pangram' that checks if s contains every letter of the alphabet.`,
        examples: [{ input: '"The quick brown fox jumps over the lazy dog"', output: 'True' }],
        starterCode: `def is_pangram(s):
    # Write your code here
    pass`,
        functionName: 'is_pangram',
        testCases: [{ input: '("The quick brown fox jumps over the lazy dog")', expected: 'True' }],
        hint: 'Check if set of lowercase s contains all "a-z".'
    },
    // 18. Longest Word
    {
        id: 'py-oppe1-longest-word',
        title: 'Longest Word',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'longest_word' that returns the longest word in a sentence.`,
        examples: [{ input: '"I love Python"', output: '"Python"' }],
        starterCode: `def longest_word(s):
    # Write your code here
    pass`,
        functionName: 'longest_word',
        testCases: [{ input: '("I love Python")', expected: '"Python"' }],
        hint: 'Split by space, max(words, key=len).'
    },
    // 19. Reverse String Words (Already exists as py-oppe1-reverse-words, skipping duplicate idea, replacing with "Count Words")
    {
        id: 'py-oppe1-count-words-len',
        title: 'Count Words',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'count_words' that returns the number of words in a sentence.`,
        examples: [{ input: '"Hello world"', output: '2' }],
        starterCode: `def count_words(s):
    # Write your code here
    pass`,
        functionName: 'count_words',
        testCases: [{ input: '("Hello world")', expected: '2' }],
        hint: 'len(s.split()).'
    },
    // 20. Remove Duplicates String
    {
        id: 'py-oppe1-remove-dup-str',
        title: 'Remove Duplicate Chars',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'remove_duplicates_str' that removes duplicate characters from s, keeping first occurrence.`,
        examples: [{ input: '"banana"', output: '"ban"' }],
        starterCode: `def remove_duplicates_str(s):
    # Write your code here
    pass`,
        functionName: 'remove_duplicates_str',
        testCases: [{ input: '("banana")', expected: '"ban"' }],
        hint: 'Iterate and build new string if char not seen.'
    },
    // 21. List Sum
    {
        id: 'py-oppe1-list-sum',
        title: 'Sum of List',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'sum_list' that returns the sum of all elements in a list.`,
        examples: [{ input: '[1, 2, 3]', output: '6' }],
        starterCode: `def sum_list(L):
    # Write your code here
    pass`,
        functionName: 'sum_list',
        testCases: [{ input: '([1, 2, 3])', expected: '6' }],
        hint: 'sum(L).'
    },
    // 22. List Average
    {
        id: 'py-oppe1-list-avg',
        title: 'Average of List',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'avg_list' that returns the average of elements in a list. Return 0 if empty.`,
        examples: [{ input: '[1, 2, 3]', output: '2.0' }],
        starterCode: `def avg_list(L):
    # Write your code here
    pass`,
        functionName: 'avg_list',
        testCases: [{ input: '([1, 2, 3])', expected: '2.0' }, { input: '([])', expected: '0' }],
        hint: 'sum(L) / len(L).'
    },
    // 23. Max Element
    {
        id: 'py-oppe1-max-elem',
        title: 'Max Element',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'max_element' that returns the maximum element in a list.`,
        examples: [{ input: '[1, 5, 3]', output: '5' }],
        starterCode: `def max_element(L):
    # Write your code here
    pass`,
        functionName: 'max_element',
        testCases: [{ input: '([1, 5, 3])', expected: '5' }],
        hint: 'max(L).'
    },
    // 24. Min Element
    {
        id: 'py-oppe1-min-elem',
        title: 'Min Element',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'min_element' that returns the minimum element in a list.`,
        examples: [{ input: '[1, 5, 3]', output: '1' }],
        starterCode: `def min_element(L):
    # Write your code here
    pass`,
        functionName: 'min_element',
        testCases: [{ input: '([1, 5, 3])', expected: '1' }],
        hint: 'min(L).'
    },
    // 25. Second Largest
    {
        id: 'py-oppe1-second-largest',
        title: 'Second Largest',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'second_largest' that returns the second largest unique element in a list. Return None if not possible.`,
        examples: [{ input: '[1, 5, 3, 5]', output: '3' }],
        starterCode: `def second_largest(L):
    # Write your code here
    pass`,
        functionName: 'second_largest',
        testCases: [{ input: '([1, 5, 3, 5])', expected: '3' }, { input: '([1])', expected: 'None' }],
        hint: 'Remove duplicates, sort, take second from last.'
    },
    // 26. Remove Duplicates List
    {
        id: 'py-oppe1-remove-dup-list',
        title: 'Remove Duplicates List',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'remove_duplicates_list' that returns a list with duplicates removed, preserving order.`,
        examples: [{ input: '[1, 2, 2, 3]', output: '[1, 2, 3]' }],
        starterCode: `def remove_duplicates_list(L):
    # Write your code here
    pass`,
        functionName: 'remove_duplicates_list',
        testCases: [{ input: '([1, 2, 2, 3])', expected: '[1, 2, 3]' }],
        hint: 'Use a set to track seen elements.'
    },
    // 27. Count Even/Odd
    {
        id: 'py-oppe1-count-even-odd',
        title: 'Count Even and Odd',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'count_even_odd' that returns a tuple (count_even, count_odd).`,
        examples: [{ input: '[1, 2, 3, 4]', output: '(2, 2)' }],
        starterCode: `def count_even_odd(L):
    # Write your code here
    pass`,
        functionName: 'count_even_odd',
        testCases: [{ input: '([1, 2, 3, 4])', expected: '(2, 2)' }],
        hint: 'Iterate and count.'
    },
    // 28. Merge Lists
    {
        id: 'py-oppe1-merge-lists',
        title: 'Merge Lists',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'merge_lists' that concatenates two lists.`,
        examples: [{ input: '[1, 2], [3, 4]', output: '[1, 2, 3, 4]' }],
        starterCode: `def merge_lists(L1, L2):
    # Write your code here
    pass`,
        functionName: 'merge_lists',
        testCases: [{ input: '([1, 2], [3, 4])', expected: '[1, 2, 3, 4]' }],
        hint: 'L1 + L2.'
    },
    // 29. Check Sorted
    {
        id: 'py-oppe1-is-sorted',
        title: 'Check Sorted',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'is_sorted' that returns True if list is sorted in ascending order.`,
        examples: [{ input: '[1, 2, 3]', output: 'True' }],
        starterCode: `def is_sorted(L):
    # Write your code here
    pass`,
        functionName: 'is_sorted',
        testCases: [{ input: '([1, 2, 3])', expected: 'True' }, { input: '([1, 3, 2])', expected: 'False' }],
        hint: 'L == sorted(L).'
    },
    // 30. Rotate List Left
    {
        id: 'py-oppe1-rotate-left',
        title: 'Rotate List Left',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'rotate_left' that rotates list L left by k steps.`,
        examples: [{ input: '[1, 2, 3, 4, 5], 2', output: '[3, 4, 5, 1, 2]' }],
        starterCode: `def rotate_left(L, k):
    # Write your code here
    pass`,
        functionName: 'rotate_left',
        testCases: [{ input: '([1, 2, 3, 4, 5], 2)', expected: '[3, 4, 5, 1, 2]' }],
        hint: 'L[k:] + L[:k].'
    },
    // 31. List Intersection
    {
        id: 'py-oppe1-list-intersection',
        title: 'List Intersection',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'list_intersection' that returns common elements between two lists (unique).`,
        examples: [{ input: '[1, 2, 2], [2, 3]', output: '[2]' }],
        starterCode: `def list_intersection(L1, L2):
    # Write your code here
    pass`,
        functionName: 'list_intersection',
        testCases: [{ input: '([1, 2, 2], [2, 3])', expected: '[2]' }],
        hint: 'list(set(L1) & set(L2)).'
    },
    // 32. List Union
    {
        id: 'py-oppe1-list-union',
        title: 'List Union',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'list_union' that returns all unique elements from both lists.`,
        examples: [{ input: '[1, 2], [2, 3]', output: '[1, 2, 3]' }],
        starterCode: `def list_union(L1, L2):
    # Write your code here
    pass`,
        functionName: 'list_union',
        testCases: [{ input: '([1, 2], [2, 3])', expected: '[1, 2, 3]' }],
        hint: 'list(set(L1) | set(L2)).'
    },
    // 33. List Difference
    {
        id: 'py-oppe1-list-diff',
        title: 'List Difference',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'list_difference' that returns elements in L1 but not in L2.`,
        examples: [{ input: '[1, 2, 3], [2, 4]', output: '[1, 3]' }],
        starterCode: `def list_difference(L1, L2):
    # Write your code here
    pass`,
        functionName: 'list_difference',
        testCases: [{ input: '([1, 2, 3], [2, 4])', expected: '[1, 3]' }],
        hint: 'list(set(L1) - set(L2)).'
    },
    // 34. Cumulative Sum
    {
        id: 'py-oppe1-cum-sum',
        title: 'Cumulative Sum',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'cumulative_sum' that returns a list where ith element is sum of first i+1 elements.`,
        examples: [{ input: '[1, 2, 3]', output: '[1, 3, 6]' }],
        starterCode: `def cumulative_sum(L):
    # Write your code here
    pass`,
        functionName: 'cumulative_sum',
        testCases: [{ input: '([1, 2, 3])', expected: '[1, 3, 6]' }],
        hint: 'Loop and maintain running sum.'
    },
    // 35. Element Frequency
    {
        id: 'py-oppe1-elem-freq',
        title: 'Element Frequency',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'element_frequency' that returns a dictionary of element counts.`,
        examples: [{ input: '[1, 2, 2, 3]', output: '{1: 1, 2: 2, 3: 1}' }],
        starterCode: `def element_frequency(L):
    # Write your code here
    pass`,
        functionName: 'element_frequency',
        testCases: [{ input: '([1, 2, 2, 3])', expected: '{1: 1, 2: 2, 3: 1}' }],
        hint: 'Iterate and update dict.'
    },
    // 36. Dict from Lists
    {
        id: 'py-oppe1-dict-lists',
        title: 'Dict from Two Lists',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'dict_from_lists' that creates a dict mapping keys from L1 to values from L2.`,
        examples: [{ input: '["a", "b"], [1, 2]', output: '{"a": 1, "b": 2}' }],
        starterCode: `def dict_from_lists(keys, values):
    # Write your code here
    pass`,
        functionName: 'dict_from_lists',
        testCases: [{ input: '(["a", "b"], [1, 2])', expected: '{"a": 1, "b": 2}' }],
        hint: 'dict(zip(keys, values)).'
    },
    // 37. Invert Dictionary (Simple)
    {
        id: 'py-oppe1-invert-dict-simple',
        title: 'Invert Dictionary (Simple)',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'invert_dict_simple' that swaps keys and values. Assume values are unique.`,
        examples: [{ input: '{"a": 1, "b": 2}', output: '{1: "a", 2: "b"}' }],
        starterCode: `def invert_dict_simple(d):
    # Write your code here
    pass`,
        functionName: 'invert_dict_simple',
        testCases: [{ input: '({"a": 1, "b": 2})', expected: '{1: "a", 2: "b"}' }],
        hint: '{v: k for k, v in d.items()}.'
    },
    // 38. Merge Dictionaries
    {
        id: 'py-oppe1-merge-dicts',
        title: 'Merge Dictionaries',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'merge_dicts' that merges d2 into d1.`,
        examples: [{ input: '{"a": 1}, {"b": 2}', output: '{"a": 1, "b": 2}' }],
        starterCode: `def merge_dicts(d1, d2):
    # Write your code here
    pass`,
        functionName: 'merge_dicts',
        testCases: [{ input: '({"a": 1}, {"b": 2})', expected: '{"a": 1, "b": 2}' }],
        hint: 'd1.update(d2) or {**d1, **d2}.'
    },
    // 39. Check Key
    {
        id: 'py-oppe1-check-key',
        title: 'Check Key Existence',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'check_key' that returns True if key k is in dict d.`,
        examples: [{ input: '{"a": 1}, "a"', output: 'True' }],
        starterCode: `def check_key(d, k):
    # Write your code here
    pass`,
        functionName: 'check_key',
        testCases: [{ input: '({"a": 1}, "a")', expected: 'True' }, { input: '({"a": 1}, "b")', expected: 'False' }],
        hint: 'k in d.'
    },
    // 40. Sum Dict Values
    {
        id: 'py-oppe1-sum-values',
        title: 'Sum Dictionary Values',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'sum_dict_values' that returns the sum of all values in d.`,
        examples: [{ input: '{"a": 1, "b": 2}', output: '3' }],
        starterCode: `def sum_dict_values(d):
    # Write your code here
    pass`,
        functionName: 'sum_dict_values',
        testCases: [{ input: '({"a": 1, "b": 2})', expected: '3' }],
        hint: 'sum(d.values()).'
    },
    // 41. Max Value Dict
    {
        id: 'py-oppe1-max-val-dict',
        title: 'Max Key by Value',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'max_key_by_value' that returns the key with the maximum value.`,
        examples: [{ input: '{"a": 1, "b": 5, "c": 3}', output: '"b"' }],
        starterCode: `def max_key_by_value(d):
    # Write your code here
    pass`,
        functionName: 'max_key_by_value',
        testCases: [{ input: '({"a": 1, "b": 5, "c": 3})', expected: '"b"' }],
        hint: 'max(d, key=d.get).'
    },
    // 42. Sort Dict by Key
    {
        id: 'py-oppe1-sort-key',
        title: 'Sort Dict by Key',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'sort_dict_key' that returns a list of tuples sorted by key.`,
        examples: [{ input: '{"b": 2, "a": 1}', output: '[("a", 1), ("b", 2)]' }],
        starterCode: `def sort_dict_key(d):
    # Write your code here
    pass`,
        functionName: 'sort_dict_key',
        testCases: [{ input: '({"b": 2, "a": 1})', expected: '[("a", 1), ("b", 2)]' }],
        hint: 'sorted(d.items()).'
    },
    // 43. Sort Dict by Value
    {
        id: 'py-oppe1-sort-value',
        title: 'Sort Dict by Value',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'sort_dict_value' that returns a list of tuples sorted by value.`,
        examples: [{ input: '{"a": 2, "b": 1}', output: '[("b", 1), ("a", 2)]' }],
        starterCode: `def sort_dict_value(d):
    # Write your code here
    pass`,
        functionName: 'sort_dict_value',
        testCases: [{ input: '({"a": 2, "b": 1})', expected: '[("b", 1), ("a", 2)]' }],
        hint: 'sorted(d.items(), key=lambda x: x[1]).'
    },
    // 44. Word Frequency
    {
        id: 'py-oppe1-word-freq',
        title: 'Word Frequency',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'word_frequency' that returns a dict of word counts in a sentence.`,
        examples: [{ input: '"hello world hello"', output: '{"hello": 2, "world": 1}' }],
        starterCode: `def word_frequency(s):
    # Write your code here
    pass`,
        functionName: 'word_frequency',
        testCases: [{ input: '("hello world hello")', expected: '{"hello": 2, "world": 1}' }],
        hint: 'Split and count.'
    },
    // 45. Grade Calculator
    {
        id: 'py-oppe1-grade-calc',
        title: 'Grade Calculator',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'calculate_grade' that returns 'A' for >=90, 'B' for >=80, 'C' for >=70, else 'F'.`,
        examples: [{ input: '85', output: '"B"' }],
        starterCode: `def calculate_grade(score):
    # Write your code here
    pass`,
        functionName: 'calculate_grade',
        testCases: [{ input: '(85)', expected: '"B"' }, { input: '(95)', expected: '"A"' }, { input: '(60)', expected: '"F"' }],
        hint: 'Use if-elif-else.'
    },
    // 46. Leap Year
    {
        id: 'py-oppe1-leap-year',
        title: 'Leap Year Check',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'is_leap_year' that returns True if year is a leap year.`,
        examples: [{ input: '2020', output: 'True' }],
        starterCode: `def is_leap_year(year):
    # Write your code here
    pass`,
        functionName: 'is_leap_year',
        testCases: [{ input: '(2020)', expected: 'True' }, { input: '(2021)', expected: 'False' }, { input: '(2000)', expected: 'True' }, { input: '(1900)', expected: 'False' }],
        hint: 'Divisible by 4 but not 100, unless divisible by 400.'
    },
    // 47. Triangle Validity
    {
        id: 'py-oppe1-triangle-valid',
        title: 'Triangle Validity',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'is_valid_triangle' that takes 3 sides and returns True if they can form a triangle.`,
        examples: [{ input: '3, 4, 5', output: 'True' }],
        starterCode: `def is_valid_triangle(a, b, c):
    # Write your code here
    pass`,
        functionName: 'is_valid_triangle',
        testCases: [{ input: '(3, 4, 5)', expected: 'True' }, { input: '(1, 1, 3)', expected: 'False' }],
        hint: 'Sum of any two sides > third side.'
    },
    // 48. Simple Interest
    {
        id: 'py-oppe1-simple-interest',
        title: 'Simple Interest',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'simple_interest' that calculates SI = (P*R*T)/100.`,
        examples: [{ input: '1000, 5, 2', output: '100.0' }],
        starterCode: `def simple_interest(P, R, T):
    # Write your code here
    pass`,
        functionName: 'simple_interest',
        testCases: [{ input: '(1000, 5, 2)', expected: '100.0' }],
        hint: 'Formula application.'
    },
    // 49. Compound Interest
    {
        id: 'py-oppe1-compound-interest',
        title: 'Compound Interest',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'compound_interest' that calculates CI = P * (1 + R/100)^T - P. Round to 2 decimals.`,
        examples: [{ input: '1000, 5, 2', output: '102.5' }],
        starterCode: `def compound_interest(P, R, T):
    # Write your code here
    pass`,
        functionName: 'compound_interest',
        testCases: [{ input: '(1000, 5, 2)', expected: '102.5' }],
        hint: 'Use ** for power.'
    },
    // 50. Celsius to Fahrenheit
    {
        id: 'py-oppe1-c-to-f',
        title: 'Celsius to Fahrenheit',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'c_to_f' that converts Celsius to Fahrenheit. F = (C * 9/5) + 32.`,
        examples: [{ input: '0', output: '32.0' }],
        starterCode: `def c_to_f(c):
    # Write your code here
    pass`,
        functionName: 'c_to_f',
        testCases: [{ input: '(0)', expected: '32.0' }, { input: '(100)', expected: '212.0' }],
        hint: 'Formula application.'
    },

    // FILE HANDLING QUESTIONS (15 new questions)

    // 51. Count Lines in Content
    {
        id: 'py-oppe1-file-count-lines',
        title: 'Count Lines in File Content',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'count_lines' that takes file content as a string and returns the number of lines.`,
        examples: [{ input: '"line1\\nline2\\nline3"', output: '3' }],
        starterCode: `def count_lines(content):
    # Write your code here
    pass`,
        functionName: 'count_lines',
        testCases: [
            { input: '("line1\\nline2\\nline3")', expected: '3' },
            { input: '("single line")', expected: '1' },
            { input: '("")', expected: '0' }
        ],
        hint: 'Split by newline and count.'
    },

    // 52. Count Words in Content
    {
        id: 'py-oppe1-file-count-words',
        title: 'Count Words in File Content',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'count_words_file' that takes file content and returns total word count.`,
        examples: [{ input: '"hello world\\npython"', output: '3' }],
        starterCode: `def count_words_file(content):
    # Write your code here
    pass`,
        functionName: 'count_words_file',
        testCases: [
            { input: '("hello world\\npython")', expected: '3' },
            { input: '("one")', expected: '1' }
        ],
        hint: 'Split by whitespace and count.'
    },

    // 53. Find Longest Line
    {
        id: 'py-oppe1-file-longest-line',
        title: 'Find Longest Line',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'find_longest_line' that returns the longest line in file content.`,
        examples: [{ input: '"short\\nlonger line\\nok"', output: '"longer line"' }],
        starterCode: `def find_longest_line(content):
    # Write your code here
    pass`,
        functionName: 'find_longest_line',
        testCases: [
            { input: '("short\\nlonger line\\nok")', expected: '"longer line"' },
            { input: '("a\\nbc")', expected: '"bc"' }
        ],
        hint: 'Use max with key=len on lines.'
    },

    // 54. Search Word in Content
    {
        id: 'py-oppe1-file-search',
        title: 'Search Word in File',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'search_in_file' that returns True if word exists in content.`,
        examples: [{ input: '"hello world\\npython", "python"', output: 'True' }],
        starterCode: `def search_in_file(content, word):
    # Write your code here
    pass`,
        functionName: 'search_in_file',
        testCases: [
            { input: '("hello world\\npython", "python")', expected: 'True' },
            { input: '("hello world", "java")', expected: 'False' }
        ],
        hint: 'Check if word in content.'
    },

    // 55. Count Specific Word
    {
        id: 'py-oppe1-file-word-count',
        title: 'Count Specific Word',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'count_word_occurrences' that counts occurrences of a specific word in content.`,
        examples: [{ input: '"hello world hello", "hello"', output: '2' }],
        starterCode: `def count_word_occurrences(content, word):
    # Write your code here
    pass`,
        functionName: 'count_word_occurrences',
        testCases: [
            { input: '("hello world hello", "hello")', expected: '2' },
            { input: '("python java python", "python")', expected: '2' }
        ],
        hint: 'Split content and count word.'
    },

    // 56. File Stats
    {
        id: 'py-oppe1-file-stats',
        title: 'File Statistics',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'file_stats' that returns a tuple (lines, words, chars) for file content.`,
        examples: [{ input: '"hello world\\npython"', output: '(2, 3, 19)' }],
        starterCode: `def file_stats(content):
    # Write your code here
    pass`,
        functionName: 'file_stats',
        testCases: [
            { input: '("hello world\\npython")', expected: '(2, 3, 19)' },
            { input: '("test")', expected: '(1, 1, 4)' }
        ],
        hint: 'Count lines, words, and characters.'
    },

    // 57. Filter Lines by Keyword
    {
        id: 'py-oppe1-file-filter',
        title: 'Filter Lines by Keyword',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'filter_lines' that returns lines containing a specific keyword.`,
        examples: [{ input: '"hello world\\npython\\nhello python", "python"', output: '["python", "hello python"]' }],
        starterCode: `def filter_lines(content, keyword):
    # Write your code here
    pass`,
        functionName: 'filter_lines',
        testCases: [
            { input: '("hello world\\npython\\nhello python", "python")', expected: '["python", "hello python"]' },
            { input: '("a\\nb\\nc", "x")', expected: '[]' }
        ],
        hint: 'Filter lines containing keyword.'
    },

    // 58. Remove Empty Lines
    {
        id: 'py-oppe1-file-remove-empty',
        title: 'Remove Empty Lines',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'remove_empty_lines' that removes empty lines from content and returns as string.`,
        examples: [{ input: '"line1\\n\\nline2"', output: '"line1\\nline2"' }],
        starterCode: `def remove_empty_lines(content):
    # Write your code here
    pass`,
        functionName: 'remove_empty_lines',
        testCases: [
            { input: '("line1\\n\\nline2")', expected: '"line1\\nline2"' },
            { input: '("a\\n\\n\\nb")', expected: '"a\\nb"' }
        ],
        hint: 'Filter out empty lines and join.'
    },

    // 59. Average Numbers in File
    {
        id: 'py-oppe1-file-avg-numbers',
        title: 'Average Numbers in File',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'avg_numbers' that parses numbers (one per line) and returns their average.`,
        examples: [{ input: '"10\\n20\\n30"', output: '20.0' }],
        starterCode: `def avg_numbers(content):
    # Write your code here
    pass`,
        functionName: 'avg_numbers',
        testCases: [
            { input: '("10\\n20\\n30")', expected: '20.0' },
            { input: '("5\\n15")', expected: '10.0' }
        ],
        hint: 'Split, convert to numbers, calculate average.'
    },

    // 60. Replace Text in Content
    {
        id: 'py-oppe1-file-replace',
        title: 'Replace Text in Content',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'replace_in_file' that replaces old text with new text in content.`,
        examples: [{ input: '"hello world", "world", "python"', output: '"hello python"' }],
        starterCode: `def replace_in_file(content, old, new):
    # Write your code here
    pass`,
        functionName: 'replace_in_file',
        testCases: [
            { input: '("hello world", "world", "python")', expected: '"hello python"' },
            { input: '("test test", "test", "ok")', expected: '"ok ok"' }
        ],
        hint: 'Use string replace method.'
    },

    // 61. Reverse Lines Order
    {
        id: 'py-oppe1-file-reverse-lines',
        title: 'Reverse Lines Order',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'reverse_lines' that reverses the order of lines in file content.`,
        examples: [{ input: '"first\\nsecond\\nthird"', output: '"third\\nsecond\\nfirst"' }],
        starterCode: `def reverse_lines(content):
    # Write your code here
    pass`,
        functionName: 'reverse_lines',
        testCases: [
            { input: '("first\\nsecond\\nthird")', expected: '"third\\nsecond\\nfirst"' },
            { input: '("a\\nb")', expected: '"b\\na"' }
        ],
        hint: 'Split, reverse list, join.'
    },

    // 62. Parse CSV Line
    {
        id: 'py-oppe1-file-parse-csv',
        title: 'Parse CSV Line',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'parse_csv_line' that takes a CSV line and returns a list of values.`,
        examples: [{ input: '"john,25,engineer"', output: '["john", "25", "engineer"]' }],
        starterCode: `def parse_csv_line(line):
    # Write your code here
    pass`,
        functionName: 'parse_csv_line',
        testCases: [
            { input: '("john,25,engineer")', expected: '["john", "25", "engineer"]' },
            { input: '("a,b,c")', expected: '["a", "b", "c"]' }
        ],
        hint: 'Split by comma.'
    },

    // 63. Count Blank Lines
    {
        id: 'py-oppe1-file-blank-lines',
        title: 'Count Blank Lines',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'count_blank_lines' that counts empty or whitespace-only lines.`,
        examples: [{ input: '"line1\\n\\n  \\nline2"', output: '2' }],
        starterCode: `def count_blank_lines(content):
    # Write your code here
    pass`,
        functionName: 'count_blank_lines',
        testCases: [
            { input: '("line1\\n\\n  \\nline2")', expected: '2' },
            { input: '("a\\nb")', expected: '0' }
        ],
        hint: 'Check if stripped line is empty.'
    },

    // 64. Merge Two File Contents
    {
        id: 'py-oppe1-file-merge',
        title: 'Merge File Contents',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'merge_contents' that concatenates two file contents.`,
        examples: [{ input: '"content1", "content2"', output: '"content1\\ncontent2"' }],
        starterCode: `def merge_contents(content1, content2):
    # Write your code here
    pass`,
        functionName: 'merge_contents',
        testCases: [
            { input: '("content1", "content2")', expected: '"content1\\ncontent2"' },
            { input: '("a", "b")', expected: '"a\\nb"' }
        ],
        hint: 'Join with newline.'
    },

    // 65. Extract Numbers from Content
    {
        id: 'py-oppe1-file-extract-nums',
        title: 'Extract Numbers from Content',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Write a function 'extract_numbers' that extracts all numbers from content and returns as list of integers.`,
        examples: [{ input: '"price is 100 and quantity is 5"', output: '[100, 5]' }],
        starterCode: `def extract_numbers(content):
    # Write your code here
    pass`,
        functionName: 'extract_numbers',
        testCases: [
            { input: '("price is 100 and quantity is 5")', expected: '[100, 5]' },
            { input: '("no numbers here")', expected: '[]' }
        ],
        hint: 'Use regex or check if word.isdigit().'
    }
];

