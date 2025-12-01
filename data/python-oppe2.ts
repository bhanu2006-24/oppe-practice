import { Problem } from '../types';

export const PYTHON_OPPE2_PROBLEMS: Problem[] = [
    // --- PYQ PROBLEMS ---

    // --- Set 1 ---
    {
        id: 'py-oppe2-set1-p1',
        title: 'Ten Digit Even',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'is_ten_digit_even' that returns True if the number is a 10 digit even number, False otherwise.`,
        examples: [{ input: '8769473839', output: 'False' }],
        starterCode: `def is_ten_digit_even(n):
    # Write your code here
    pass`,
        functionName: 'is_ten_digit_even',
        testCases: [{ input: '(8769473839)', expected: 'False' }, { input: '(9289479278)', expected: 'True' }],
        hint: 'Check len(str(n)) == 10 and n % 2 == 0'
    },
    {
        id: 'py-oppe2-set1-p2',
        title: 'Percentage Increase',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Calculate the percentage increase from the original value to the new value.`,
        examples: [{ input: '50, 75', output: '50.0' }],
        starterCode: `def percentage_increase(original, new):
    # Write your code here
    pass`,
        functionName: 'percentage_increase',
        testCases: [{ input: '(50, 75)', expected: '50.0' }, { input: '(80, 100)', expected: '25.0' }],
        hint: '((new - original) / original) * 100'
    },
    {
        id: 'py-oppe2-set1-p3',
        title: 'Find Indices',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Find all indices of an element in a list.`,
        examples: [{ input: '[1, 2, 3, 2, 4], 2', output: '[1, 3]' }],
        starterCode: `def find_indices_of_element(l, elem):
    # Write your code here
    pass`,
        functionName: 'find_indices_of_element',
        testCases: [{ input: '([1, 2, 3, 2, 4], 2)', expected: '[1, 3]' }],
        hint: 'Enumerate and collect indices.'
    },
    {
        id: 'py-oppe2-set1-p4',
        title: 'Swap Adjacent',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Swap every pair of adjacent elements in the tuple.`,
        examples: [{ input: '(1, 2, 3, 4, 5, 6)', output: '(2, 1, 4, 3, 6, 5)' }],
        starterCode: `def swap_adjacent_elements(t):
    # Write your code here
    pass`,
        functionName: 'swap_adjacent_elements',
        testCases: [{ input: '((1, 2, 3, 4, 5, 6))', expected: '(2, 1, 4, 3, 6, 5)' }],
        hint: 'Iterate with step 2.'
    },
    {
        id: 'py-oppe2-set1-p5',
        title: 'Common Chars',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Find all the unique common characters present in the given words and return them as a string in ascending order.`,
        examples: [{ input: '"apple", "ball"', output: '"al"' }],
        starterCode: `def common_chars(word1, word2):
    # Write your code here
    pass`,
        functionName: 'common_chars',
        testCases: [{ input: '("apple", "ball")', expected: '"al"' }],
        hint: 'sorted(set(word1) & set(word2))'
    },
    {
        id: 'py-oppe2-set1-p6',
        title: 'Count Values',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Count the number of occurrences of each value in the dictionary. Return a dict where keys are values from input dict, and values are counts.`,
        examples: [{ input: '{"a": 1, "b": 2, "c": 1}', output: '{1: 2, 2: 1}' }],
        starterCode: `def count_values_occurrences(d):
    # Write your code here
    pass`,
        functionName: 'count_values_occurrences',
        testCases: [{ input: '({"a": 1, "b": 2, "c": 1})', expected: '{1: 2, 2: 1}' }],
        hint: 'Count values using a loop or Counter.'
    },
    {
        id: 'py-oppe2-set1-p7',
        title: 'Longest Common Prefix',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Find the longest common prefix among the given words of the sentence.`,
        examples: [],
        starterCode: `def longest_common_prefix(sentence):
    # Write your code here
    pass`,
        functionName: 'longest_common_prefix',
        testCases: [],
        hint: 'Split sentence, sort, compare first and last.'
    },
    {
        id: 'py-oppe2-set1-p8',
        title: 'Get Leaderboard',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given a list of dictionaries (matches), generate a leaderboard based on points (Win:2, Draw:1, Loss:0) and goal scored. Sort desc.`,
        examples: [],
        starterCode: `def get_leaderboard(matches):
    # Write your code here
    pass`,
        functionName: 'get_leaderboard',
        testCases: [],
        hint: 'Calculate points per team, sort by points then goals.'
    },
    {
        id: 'py-oppe2-set1-p9',
        title: 'Consistent Sales',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Return the name of the region with the highest count of representatives who have shown consistent sales growth (Q1 < Q2 < Q3 < Q4). Input is filename.`,
        examples: [],
        starterCode: `def consistent_sales_increase(filename):
    # Write your code here
    pass`,
        functionName: 'consistent_sales_increase',
        testCases: [],
        hint: 'Read CSV, parse rows, check condition, count by region.'
    },

    // --- Set 2 ---
    {
        id: 'py-oppe2-set2-p1',
        title: 'Digit Product',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Calculate the product of the digits of an integer.`,
        examples: [{ input: '123', output: '6' }],
        starterCode: `def digit_product(n):
    # Write your code here
    pass`,
        functionName: 'digit_product',
        testCases: [{ input: '(123)', expected: '6' }, { input: '(101)', expected: '0' }],
        hint: 'Multiply digits.'
    },
    {
        id: 'py-oppe2-set2-p2',
        title: 'Capitalize First Last',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Capitalize the first and last characters of each word of the sentence.`,
        examples: [{ input: '"hello world"', output: '"HellO WorlD"' }],
        starterCode: `def capitalize_first_and_last(sentence):
    # Write your code here
    pass`,
        functionName: 'capitalize_first_and_last',
        testCases: [{ input: '("hello world")', expected: '"HellO WorlD"' }],
        hint: 'Split, modify each word, join.'
    },
    {
        id: 'py-oppe2-set2-p3',
        title: 'Unflatten Tuple',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given a flat tuple of length m*n, convert it into a tuple of tuples with dimensions m x n.`,
        examples: [{ input: '(1, 2, 3, 4), 2, 2', output: '((1, 2), (3, 4))' }],
        starterCode: `def unflatten(t, m, n):
    # Write your code here
    pass`,
        functionName: 'unflatten',
        testCases: [{ input: '((1, 2, 3, 4), 2, 2)', expected: '((1, 2), (3, 4))' }],
        hint: 'Slice tuple in loop.'
    },
    {
        id: 'py-oppe2-set2-p4',
        title: 'Kth Longest Word',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Find the k-th longest word in a list of words where each word has a unique length.`,
        examples: [{ input: '["apple", "banana"], 1', output: '"banana"' }],
        starterCode: `def kth_longest_word(words, k):
    # Write your code here
    pass`,
        functionName: 'kth_longest_word',
        testCases: [{ input: '(["apple", "banana"], 1)', expected: '"banana"' }],
        hint: 'Sort by length desc, take index k-1.'
    },
    {
        id: 'py-oppe2-set2-p5',
        title: 'Is Heterogram',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Check if a given sentence is a heterogram (no letter occurs more than once). Ignore spaces/case? Usually case insensitive, ignore spaces.`,
        examples: [{ input: '"Blue bat"', output: 'False' }],
        starterCode: `def is_heterogram(sentence):
    # Write your code here
    pass`,
        functionName: 'is_heterogram',
        testCases: [{ input: '("Blue bat")', expected: 'False' }],
        hint: 'Check duplicates in letters.'
    },
    {
        id: 'py-oppe2-set2-p6',
        title: 'Filter Keys',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Filter the dictionary keys where the value is greater than the given threshold. Modify in place.`,
        examples: [],
        starterCode: `def filter_keys_by_value(d, threshold):
    # Write your code here
    pass`,
        functionName: 'filter_keys_by_value',
        testCases: [],
        hint: 'Iterate copy of keys, del if value <= threshold.'
    },
    {
        id: 'py-oppe2-set2-p7',
        title: 'Happy Numbers',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Find the number of happy numbers in the given list. Happy number: sum of square of digits leads to 1.`,
        examples: [],
        starterCode: `def n_happy_numbers(numbers):
    # Write your code here
    pass`,
        functionName: 'n_happy_numbers',
        testCases: [],
        hint: 'Helper function for is_happy.'
    },
    {
        id: 'py-oppe2-set2-p8',
        title: 'Best Performers',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Given list of dicts (overs), generate ranking based on wickets and economy.`,
        examples: [],
        starterCode: `def best_performers(overs):
    # Write your code here
    pass`,
        functionName: 'best_performers',
        testCases: [],
        hint: 'Calculate stats per bowler.'
    },
    {
        id: 'py-oppe2-set2-p9',
        title: 'Total Price',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Compute total amount spent. Inputs: prices_file, shopping_file.`,
        examples: [],
        starterCode: `def calculate_total_price(prices_file, shopping_file):
    # Write your code here
    pass`,
        functionName: 'calculate_total_price',
        testCases: [],
        hint: 'Read both CSVs, join on Product ID/Name.'
    },

    // --- Set 3 ---
    {
        id: 'py-oppe2-set3-p1',
        title: 'Arithmetic Operations',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given tuple (a, b), return tuple (sum, diff, prod, quotient).`,
        examples: [{ input: '(1, 2)', output: '(3, -1, 2, 0)' }],
        starterCode: `def arithmetic_operations(t):
    # Write your code here
    pass`,
        functionName: 'arithmetic_operations',
        testCases: [{ input: '((1, 2))', expected: '(3, -1, 2, 0)' }],
        hint: 'Return (a+b, a-b, a*b, a//b)'
    },
    {
        id: 'py-oppe2-set3-p2',
        title: 'Second Largest',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Return second largest number in list.`,
        examples: [{ input: '[1, 2, 3, 4, 5]', output: '4' }],
        starterCode: `def second_largest(lst):
    # Write your code here
    pass`,
        functionName: 'second_largest',
        testCases: [{ input: '([1, 2, 3, 4, 5])', expected: '4' }],
        hint: 'Sort and pick second last.'
    },
    {
        id: 'py-oppe2-set3-p3',
        title: 'Not Present in Both',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Return list of items present in either list 1 or list 2 but not in both (symmetric difference).`,
        examples: [],
        starterCode: `def not_present_in_both(lst1, lst2):
    # Write your code here
    pass`,
        functionName: 'not_present_in_both',
        testCases: [],
        hint: 'list(set(lst1) ^ set(lst2))'
    },
    {
        id: 'py-oppe2-set3-p4',
        title: 'Create Count Dict',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Return dict where keys are items from lst1 and values are counts in lst2.`,
        examples: [],
        starterCode: `def create_count_dict(lst1, lst2):
    # Write your code here
    pass`,
        functionName: 'create_count_dict',
        testCases: [],
        hint: '{k: lst2.count(k) for k in lst1}'
    },
    {
        id: 'py-oppe2-set3-p5',
        title: 'Modify String',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Separate chars at odd/even indices. Return merged string with even indices first and odd indices second in reverse order.`,
        examples: [{ input: '"abcde"', output: '"acedb"' }],
        starterCode: `def modify_string_1(s):
    # Write your code here
    pass`,
        functionName: 'modify_string_1',
        testCases: [{ input: '("abcde")', expected: '"acedb"' }],
        hint: 's[::2] + s[1:][::-1]'
    },
    {
        id: 'py-oppe2-set3-p6',
        title: 'Average of Numbers',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Return average of integers and floats in list, rounded to 2 decimals. Return -1 if none.`,
        examples: [],
        starterCode: `def average_of_numbers(lst):
    # Write your code here
    pass`,
        functionName: 'average_of_numbers',
        testCases: [],
        hint: 'Filter numbers, sum/count.'
    },
    {
        id: 'py-oppe2-set3-p7',
        title: 'Most Frequent Element',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Find most frequent integer. If multiple, return largest one.`,
        examples: [],
        starterCode: `def most_frequent_element(lst):
    # Write your code here
    pass`,
        functionName: 'most_frequent_element',
        testCases: [],
        hint: 'Count frequencies, sort by count desc then value desc.'
    },
    {
        id: 'py-oppe2-set3-p8',
        title: 'Valid Substring',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Check if string can be split into two substrings that are both in word_list.`,
        examples: [],
        starterCode: `def valid_substring(s, word_list):
    # Write your code here
    pass`,
        functionName: 'valid_substring',
        testCases: [],
        hint: 'Iterate split point.'
    },
    {
        id: 'py-oppe2-set3-p9',
        title: 'Most Frequent Alpha',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Return most frequent alphabetic characters (case sensitive) in file.`,
        examples: [],
        starterCode: `def most_frequent_alpha_character(filename):
    # Write your code here
    pass`,
        functionName: 'most_frequent_alpha_character',
        testCases: [],
        hint: 'Read file, count chars, filter alpha.'
    },
    // --- EXISTING PROBLEMS ---
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
    },

    // --- NEW PROBLEMS (50) ---

    // 1. Recursive Factorial
    {
        id: 'py-oppe2-rec-factorial',
        title: 'Recursive Factorial',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a recursive function 'factorial_rec' that returns the factorial of n.`,
        examples: [{ input: '5', output: '120' }],
        starterCode: `def factorial_rec(n):
    # Write your code here
    pass`,
        functionName: 'factorial_rec',
        testCases: [{ input: '(5)', expected: '120' }, { input: '(0)', expected: '1' }],
        hint: 'Base case: n=0 return 1. Else n * f(n-1).'
    },
    // 2. Recursive Fibonacci
    {
        id: 'py-oppe2-rec-fib',
        title: 'Recursive Fibonacci',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a recursive function 'fib_rec' that returns the nth Fibonacci number (0-indexed).`,
        examples: [{ input: '5', output: '5' }],
        starterCode: `def fib_rec(n):
    # Write your code here
    pass`,
        functionName: 'fib_rec',
        testCases: [{ input: '(5)', expected: '5' }, { input: '(0)', expected: '0' }, { input: '(1)', expected: '1' }],
        hint: 'f(n) = f(n-1) + f(n-2).'
    },
    // 3. Recursive GCD
    {
        id: 'py-oppe2-rec-gcd',
        title: 'Recursive GCD',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a recursive function 'gcd_rec' to find GCD of a and b.`,
        examples: [{ input: '12, 18', output: '6' }],
        starterCode: `def gcd_rec(a, b):
    # Write your code here
    pass`,
        functionName: 'gcd_rec',
        testCases: [{ input: '(12, 18)', expected: '6' }, { input: '(7, 13)', expected: '1' }],
        hint: 'gcd(b, a % b) if b else a.'
    },
    // 4. Recursive Sum List
    {
        id: 'py-oppe2-rec-sum-list',
        title: 'Recursive List Sum',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a recursive function 'sum_list_rec' to find sum of elements in list L.`,
        examples: [{ input: '[1, 2, 3]', output: '6' }],
        starterCode: `def sum_list_rec(L):
    # Write your code here
    pass`,
        functionName: 'sum_list_rec',
        testCases: [{ input: '([1, 2, 3])', expected: '6' }, { input: '([])', expected: '0' }],
        hint: 'L[0] + f(L[1:]) if L else 0.'
    },
    // 5. Recursive String Reverse
    {
        id: 'py-oppe2-rec-str-rev',
        title: 'Recursive String Reverse',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a recursive function 'reverse_str_rec' to reverse a string s.`,
        examples: [{ input: '"hello"', output: '"olleh"' }],
        starterCode: `def reverse_str_rec(s):
    # Write your code here
    pass`,
        functionName: 'reverse_str_rec',
        testCases: [{ input: '("hello")', expected: '"olleh"' }],
        hint: 'f(s[1:]) + s[0] if s else "".'
    },
    // 6. Recursive Power
    {
        id: 'py-oppe2-rec-power',
        title: 'Recursive Power',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a recursive function 'power_rec' to calculate x raised to n.`,
        examples: [{ input: '2, 3', output: '8' }],
        starterCode: `def power_rec(x, n):
    # Write your code here
    pass`,
        functionName: 'power_rec',
        testCases: [{ input: '(2, 3)', expected: '8' }, { input: '(5, 0)', expected: '1' }],
        hint: 'x * f(x, n-1).'
    },
    // 7. Recursive Palindrome
    {
        id: 'py-oppe2-rec-pal',
        title: 'Recursive Palindrome',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a recursive function 'is_palindrome_rec' to check if s is a palindrome.`,
        examples: [{ input: '"racecar"', output: 'True' }],
        starterCode: `def is_palindrome_rec(s):
    # Write your code here
    pass`,
        functionName: 'is_palindrome_rec',
        testCases: [{ input: '("racecar")', expected: 'True' }, { input: '("hello")', expected: 'False' }],
        hint: 's[0] == s[-1] and f(s[1:-1]).'
    },
    // 8. Recursive Binary Search
    {
        id: 'py-oppe2-rec-bin-search',
        title: 'Recursive Binary Search',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a recursive function 'binary_search_rec' that returns index of x in sorted L, else -1.`,
        examples: [{ input: '[1, 3, 5], 3', output: '1' }],
        starterCode: `def binary_search_rec(L, x, low=0, high=None):
    if high is None: high = len(L) - 1
    # Write your code here
    pass`,
        functionName: 'binary_search_rec',
        testCases: [{ input: '([1, 3, 5], 3)', expected: '1' }, { input: '([1, 3, 5], 2)', expected: '-1' }],
        hint: 'Compare mid with x.'
    },
    // 9. Recursive Count Vowels
    {
        id: 'py-oppe2-rec-count-vowels',
        title: 'Recursive Count Vowels',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a recursive function 'count_vowels_rec' to count vowels in s.`,
        examples: [{ input: '"hello"', output: '2' }],
        starterCode: `def count_vowels_rec(s):
    # Write your code here
    pass`,
        functionName: 'count_vowels_rec',
        testCases: [{ input: '("hello")', expected: '2' }],
        hint: '(1 if s[0] in vowels else 0) + f(s[1:]).'
    },
    // 10. Matrix Addition
    {
        id: 'py-oppe2-matrix-add',
        title: 'Matrix Addition',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'matrix_add' to add two matrices A and B.`,
        examples: [{ input: '[[1,2],[3,4]], [[1,1],[1,1]]', output: '[[2, 3], [4, 5]]' }],
        starterCode: `def matrix_add(A, B):
    # Write your code here
    pass`,
        functionName: 'matrix_add',
        testCases: [{ input: '([[1,2],[3,4]], [[1,1],[1,1]])', expected: '[[2, 3], [4, 5]]' }],
        hint: 'Nested loop or list comprehension.'
    },
    // 11. Matrix Transpose
    {
        id: 'py-oppe2-matrix-transpose',
        title: 'Matrix Transpose',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'transpose_matrix' to return the transpose of matrix M.`,
        examples: [{ input: '[[1,2],[3,4]]', output: '[[1, 3], [2, 4]]' }],
        starterCode: `def transpose_matrix(M):
    # Write your code here
    pass`,
        functionName: 'transpose_matrix',
        testCases: [{ input: '([[1,2],[3,4]])', expected: '[[1, 3], [2, 4]]' }],
        hint: '[[row[i] for row in M] for i in range(cols)].'
    },
    // 12. Matrix Diagonal Sum
    {
        id: 'py-oppe2-diag-sum',
        title: 'Matrix Diagonal Sum',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'diagonal_sum' to return sum of main diagonal elements.`,
        examples: [{ input: '[[1,2],[3,4]]', output: '5' }],
        starterCode: `def diagonal_sum(M):
    # Write your code here
    pass`,
        functionName: 'diagonal_sum',
        testCases: [{ input: '([[1,2],[3,4]])', expected: '5' }],
        hint: 'Sum M[i][i].'
    },
    // 13. Symmetric Matrix
    {
        id: 'py-oppe2-is-symmetric',
        title: 'Check Symmetric Matrix',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'is_symmetric' that returns True if matrix M is symmetric (M == M^T).`,
        examples: [{ input: '[[1,2],[2,1]]', output: 'True' }],
        starterCode: `def is_symmetric(M):
    # Write your code here
    pass`,
        functionName: 'is_symmetric',
        testCases: [{ input: '([[1,2],[2,1]])', expected: 'True' }, { input: '([[1,2],[3,4]])', expected: 'False' }],
        hint: 'Check if M[i][j] == M[j][i].'
    },
    // 14. Matrix Row Sums
    {
        id: 'py-oppe2-row-sums',
        title: 'Matrix Row Sums',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'row_sums' that returns a list of sums of each row.`,
        examples: [{ input: '[[1,2],[3,4]]', output: '[3, 7]' }],
        starterCode: `def row_sums(M):
    # Write your code here
    pass`,
        functionName: 'row_sums',
        testCases: [{ input: '([[1,2],[3,4]])', expected: '[3, 7]' }],
        hint: '[sum(row) for row in M].'
    },
    // 15. Matrix Col Sums
    {
        id: 'py-oppe2-col-sums',
        title: 'Matrix Column Sums',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'col_sums' that returns a list of sums of each column.`,
        examples: [{ input: '[[1,2],[3,4]]', output: '[4, 6]' }],
        starterCode: `def col_sums(M):
    # Write your code here
    pass`,
        functionName: 'col_sums',
        testCases: [{ input: '([[1,2],[3,4]])', expected: '[4, 6]' }],
        hint: 'Compute transpose then row sums.'
    },
    // 16. Saddle Point
    {
        id: 'py-oppe2-saddle-point',
        title: 'Saddle Point',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Write a function 'find_saddle_point' that returns coordinates (r, c) of a saddle point (min in row, max in col). Return None if none.`,
        examples: [{ input: '[[1,2],[3,4]]', output: 'None' }],
        starterCode: `def find_saddle_point(M):
    # Write your code here
    pass`,
        functionName: 'find_saddle_point',
        testCases: [{ input: '([[1,2],[3,4]])', expected: 'None' }, { input: '([[3,8],[4,6]])', expected: 'None' }],
        hint: 'Check all elements.'
    },
    // 17. Rotate Matrix 90
    {
        id: 'py-oppe2-rotate-matrix',
        title: 'Rotate Matrix 90 Deg',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Write a function 'rotate_matrix_90' that rotates a square matrix 90 degrees clockwise in-place.`,
        examples: [{ input: '[[1,2],[3,4]]', output: '[[3, 1], [4, 2]]' }],
        starterCode: `def rotate_matrix_90(M):
    # Write your code here
    return M`,
        functionName: 'rotate_matrix_90',
        testCases: [{ input: '([[1,2],[3,4]])', expected: '[[3, 1], [4, 2]]' }],
        hint: 'Transpose then reverse rows.'
    },
    // 18. Longest Palindromic Substring
    {
        id: 'py-oppe2-longest-pal-sub',
        title: 'Longest Palindromic Substring',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Write a function 'longest_palindrome_sub' that returns the longest palindromic substring in s.`,
        examples: [{ input: '"babad"', output: '"bab"' }],
        starterCode: `def longest_palindrome_sub(s):
    # Write your code here
    pass`,
        functionName: 'longest_palindrome_sub',
        testCases: [{ input: '("babad")', expected: '"bab"' }, { input: '("cbbd")', expected: '"bb"' }],
        hint: 'Expand around center.'
    },
    // 19. Group Anagrams
    {
        id: 'py-oppe2-group-anagrams',
        title: 'Group Anagrams',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'group_anagrams' that groups a list of strings into anagrams. Return list of lists.`,
        examples: [{ input: '["eat", "tea", "tan", "ate", "nat", "bat"]', output: '[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]' }],
        starterCode: `def group_anagrams(strs):
    # Write your code here
    pass`,
        functionName: 'group_anagrams',
        testCases: [{ input: '(["eat", "tea", "tan", "ate", "nat", "bat"])', expected: '[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]' }],
        hint: 'Use dict with sorted string as key.'
    },
    // 20. Valid Parentheses (Advanced)
    {
        id: 'py-oppe2-valid-parens',
        title: 'Valid Parentheses',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'is_valid_parens' that checks validity of '()[]{}'.`,
        examples: [{ input: '"()[]{}"', output: 'True' }],
        starterCode: `def is_valid_parens(s):
    # Write your code here
    pass`,
        functionName: 'is_valid_parens',
        testCases: [{ input: '("()[]{}" )', expected: 'True' }, { input: '("(]")', expected: 'False' }],
        hint: 'Use a stack.'
    },
    // 21. String Compression
    {
        id: 'py-oppe2-str-compress',
        title: 'String Compression',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'compress_string' that compresses string like 'aabcccccaaa' to 'a2b1c5a3'. If compressed is not smaller, return original.`,
        examples: [{ input: '"aabcccccaaa"', output: '"a2b1c5a3"' }],
        starterCode: `def compress_string(s):
    # Write your code here
    pass`,
        functionName: 'compress_string',
        testCases: [{ input: '("aabcccccaaa")', expected: '"a2b1c5a3"' }, { input: '("abc")', expected: '"abc"' }],
        hint: 'Iterate and count consecutive chars.'
    },
    // 22. Find Permutations
    {
        id: 'py-oppe2-permutations',
        title: 'Find Permutations',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Write a function 'get_permutations' that returns all permutations of a list.`,
        examples: [{ input: '[1, 2, 3]', output: '[[1, 2, 3], [1, 3, 2], ...]' }],
        starterCode: `import itertools
    def get_permutations(L):
    # Write your code here
    pass`,
        functionName: 'get_permutations',
        testCases: [{ input: '([1, 2])', expected: '[[1, 2], [2, 1]]' }],
        hint: 'Use itertools.permutations or recursion.'
    },
    // 23. Find Subsets
    {
        id: 'py-oppe2-subsets',
        title: 'Find Subsets',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Write a function 'get_subsets' that returns all subsets of a set (list).`,
        examples: [{ input: '[1, 2]', output: '[[], [1], [2], [1, 2]]' }],
        starterCode: `def get_subsets(nums):
    # Write your code here
    pass`,
        functionName: 'get_subsets',
        testCases: [{ input: '([1, 2])', expected: '[[], [1], [2], [1, 2]]' }],
        hint: 'Iterative approach: start with [[]], add element to existing subsets.'
    },
    // 24. Merge Intervals
    {
        id: 'py-oppe2-merge-intervals',
        title: 'Merge Intervals',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Write a function 'merge_intervals' that merges overlapping intervals.`,
        examples: [{ input: '[[1,3],[2,6],[8,10]]', output: '[[1, 6], [8, 10]]' }],
        starterCode: `def merge_intervals(intervals):
    # Write your code here
    pass`,
        functionName: 'merge_intervals',
        testCases: [{ input: '([[1,3],[2,6],[8,10]])', expected: '[[1, 6], [8, 10]]' }],
        hint: 'Sort by start time, then merge.'
    },
    // 25. Product Except Self
    {
        id: 'py-oppe2-prod-except-self',
        title: 'Product Except Self',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'product_except_self' that returns an array where output[i] is product of all elements except nums[i].`,
        examples: [{ input: '[1, 2, 3, 4]', output: '[24, 12, 8, 6]' }],
        starterCode: `def product_except_self(nums):
    # Write your code here
    pass`,
        functionName: 'product_except_self',
        testCases: [{ input: '([1, 2, 3, 4])', expected: '[24, 12, 8, 6]' }],
        hint: 'Use prefix and suffix products.'
    },
    // 26. File: Count Lines
    {
        id: 'py-oppe2-file-count-lines',
        title: 'File: Count Lines',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'count_file_lines' that takes a file content string and returns number of lines.`,
        examples: [{ input: '"line1\\nline2"', output: '2' }],
        starterCode: `def count_file_lines(content):
    # Write your code here
    pass`,
        functionName: 'count_file_lines',
        testCases: [{ input: '("line1\\nline2")', expected: '2' }],
        hint: 'content.split("\\n") or count "\\n" + 1.'
    },
    // 27. File: Count Words
    {
        id: 'py-oppe2-file-count-words',
        title: 'File: Count Words',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'count_file_words' that returns total word count in content.`,
        examples: [{ input: '"hello world\\nhi"', output: '3' }],
        starterCode: `def count_file_words(content):
    # Write your code here
    pass`,
        functionName: 'count_file_words',
        testCases: [{ input: '("hello world\\nhi")', expected: '3' }],
        hint: 'len(content.split()).'
    },
    // 28. File: Longest Line
    {
        id: 'py-oppe2-file-longest-line',
        title: 'File: Longest Line',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'longest_line' that returns the longest line in content.`,
        examples: [{ input: '"short\\nlonger line"', output: '"longer line"' }],
        starterCode: `def longest_line(content):
    # Write your code here
    pass`,
        functionName: 'longest_line',
        testCases: [{ input: '("short\\nlonger line")', expected: '"longer line"' }],
        hint: 'max(content.splitlines(), key=len).'
    },
    // 29. File: Search Word
    {
        id: 'py-oppe2-file-search-word',
        title: 'File: Search Word',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'search_word_in_file' that returns True if word is in content.`,
        examples: [{ input: '"hello world", "world"', output: 'True' }],
        starterCode: `def search_word_in_file(content, word):
    # Write your code here
    pass`,
        functionName: 'search_word_in_file',
        testCases: [{ input: '("hello world", "world")', expected: 'True' }],
        hint: 'word in content.'
    },
    // 30. File: Average Numbers
    {
        id: 'py-oppe2-file-avg-nums',
        title: 'File: Average Numbers',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'avg_nums_in_file' that parses numbers separated by spaces/newlines and returns average.`,
        examples: [{ input: '"10 20\\n30"', output: '20.0' }],
        starterCode: `def avg_nums_in_file(content):
    # Write your code here
    pass`,
        functionName: 'avg_nums_in_file',
        testCases: [{ input: '("10 20\\n30")', expected: '20.0' }],
        hint: 'Split, convert to float, average.'
    },
    // 31. Dict: Group by Key
    {
        id: 'py-oppe2-dict-group',
        title: 'Group by Key',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'group_by_key' that groups a list of dicts by a key.`,
        examples: [{ input: '[{"k":"a", "v":1}, {"k":"a", "v":2}]', output: '{"a": [{"k":"a", "v":1}, {"k":"a", "v":2}]}' }],
        starterCode: `def group_by_key(data, key):
    # Write your code here
    pass`,
        functionName: 'group_by_key',
        testCases: [{ input: '([{"k":"a", "v":1}, {"k":"a", "v":2}], "k")', expected: '{"a": [{"k": "a", "v": 1}, {"k": "a", "v": 2}]}' }],
        hint: 'Iterate and append to list in dict.'
    },
    // 32. Dict: Deep Merge
    {
        id: 'py-oppe2-dict-deep-merge',
        title: 'Deep Merge Dictionaries',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Write a function 'deep_merge' that merges d2 into d1 recursively.`,
        examples: [{ input: '{"a": {"x": 1}}, {"a": {"y": 2}}', output: '{"a": {"x": 1, "y": 2}}' }],
        starterCode: `def deep_merge(d1, d2):
    # Write your code here
    pass`,
        functionName: 'deep_merge',
        testCases: [{ input: '({"a": {"x": 1}}, {"a": {"y": 2}})', expected: '{"a": {"x": 1, "y": 2}}' }],
        hint: 'If value is dict, recurse.'
    },
    // 33. Set: Jaccard Similarity
    {
        id: 'py-oppe2-jaccard',
        title: 'Jaccard Similarity',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'jaccard_similarity' that returns len(intersection)/len(union) of two lists.`,
        examples: [{ input: '[1, 2], [2, 3]', output: '0.3333' }],
        starterCode: `def jaccard_similarity(L1, L2):
    # Write your code here
    pass`,
        functionName: 'jaccard_similarity',
        testCases: [{ input: '([1, 2], [2, 3])', expected: '0.3333' }],
        hint: 'Use sets.'
    },
    // 34. Set: Symmetric Difference
    {
        id: 'py-oppe2-sym-diff',
        title: 'Symmetric Difference',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'sym_diff' that returns symmetric difference of two lists.`,
        examples: [{ input: '[1, 2], [2, 3]', output: '[1, 3]' }],
        starterCode: `def sym_diff(L1, L2):
    # Write your code here
    pass`,
        functionName: 'sym_diff',
        testCases: [{ input: '([1, 2], [2, 3])', expected: '[1, 3]' }],
        hint: 'set(L1) ^ set(L2).'
    },
    // 35. Tuple: Sort by Element
    {
        id: 'py-oppe2-sort-tuple',
        title: 'Sort Tuples',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'sort_tuples' that sorts a list of tuples by the 2nd element.`,
        examples: [{ input: '[(1, 3), (2, 2)]', output: '[(2, 2), (1, 3)]' }],
        starterCode: `def sort_tuples(L):
    # Write your code here
    pass`,
        functionName: 'sort_tuples',
        testCases: [{ input: '([(1, 3), (2, 2)])', expected: '[(2, 2), (1, 3)]' }],
        hint: 'L.sort(key=lambda x: x[1]).'
    },
    // 36. Recursive Flatten
    {
        id: 'py-oppe2-rec-flatten-deep',
        title: 'Recursive Deep Flatten',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'flatten_deep' that flattens arbitrarily nested lists.`,
        examples: [{ input: '[1, [2, [3]]]', output: '[1, 2, 3]' }],
        starterCode: `def flatten_deep(L):
    # Write your code here
    pass`,
        functionName: 'flatten_deep',
        testCases: [{ input: '([1, [2, [3]]])', expected: '[1, 2, 3]' }],
        hint: 'Recursion.'
    },
    // 37. Matrix: Zero Matrix
    {
        id: 'py-oppe2-zero-matrix',
        title: 'Zero Matrix',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'zero_matrix' that if an element is 0, sets its entire row and column to 0.`,
        examples: [{ input: '[[1,1],[1,0]]', output: '[[1, 0], [0, 0]]' }],
        starterCode: `def zero_matrix(M):
    # Write your code here
    pass`,
        functionName: 'zero_matrix',
        testCases: [{ input: '([[1,1],[1,0]])', expected: '[[1, 0], [0, 0]]' }],
        hint: 'Track rows and cols to zero first.'
    },
    // 38. String: Is Subsequence
    {
        id: 'py-oppe2-is-subsequence',
        title: 'Is Subsequence',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'is_subsequence' that checks if s is a subsequence of t.`,
        examples: [{ input: '"abc", "ahbgdc"', output: 'True' }],
        starterCode: `def is_subsequence(s, t):
    # Write your code here
    pass`,
        functionName: 'is_subsequence',
        testCases: [{ input: '("abc", "ahbgdc")', expected: 'True' }],
        hint: 'Two pointers.'
    },
    // 39. List: Move Zeroes
    {
        id: 'py-oppe2-move-zeroes',
        title: 'Move Zeroes',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'move_zeroes' that moves all 0s to end while maintaining order.`,
        examples: [{ input: '[0, 1, 0, 3, 12]', output: '[1, 3, 12, 0, 0]' }],
        starterCode: `def move_zeroes(nums):
    # Write your code here
    pass`,
        functionName: 'move_zeroes',
        testCases: [{ input: '([0, 1, 0, 3, 12])', expected: '[1, 3, 12, 0, 0]' }],
        hint: 'Track insert position.'
    },
    // 40. List: Plus One
    {
        id: 'py-oppe2-plus-one',
        title: 'Plus One',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'plus_one' that adds 1 to integer represented by digits list.`,
        examples: [{ input: '[1, 2, 3]', output: '[1, 2, 4]' }],
        starterCode: `def plus_one(digits):
    # Write your code here
    pass`,
        functionName: 'plus_one',
        testCases: [{ input: '([1, 2, 3])', expected: '[1, 2, 4]' }],
        hint: 'Handle carry.'
    },
    // 41. String: Add Binary
    {
        id: 'py-oppe2-add-binary',
        title: 'Add Binary',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'add_binary' that adds two binary strings.`,
        examples: [{ input: '"11", "1"', output: '"100"' }],
        starterCode: `def add_binary(a, b):
    # Write your code here
    pass`,
        functionName: 'add_binary',
        testCases: [{ input: '("11", "1")', expected: '"100"' }],
        hint: 'bin(int(a, 2) + int(b, 2)).'
    },
    // 42. Math: Sqrt(x)
    {
        id: 'py-oppe2-sqrt',
        title: 'Sqrt(x)',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'my_sqrt' that returns integer part of square root of x.`,
        examples: [{ input: '8', output: '2' }],
        starterCode: `def my_sqrt(x):
    # Write your code here
    pass`,
        functionName: 'my_sqrt',
        testCases: [{ input: '(8)', expected: '2' }, { input: '(4)', expected: '2' }],
        hint: 'Binary search or math.isqrt.'
    },
    // 43. List: Majority Element
    {
        id: 'py-oppe2-majority-elem',
        title: 'Majority Element',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'majority_element' that returns element appearing > n/2 times.`,
        examples: [{ input: '[3, 2, 3]', output: '3' }],
        starterCode: `def majority_element(nums):
    # Write your code here
    pass`,
        functionName: 'majority_element',
        testCases: [{ input: '([3, 2, 3])', expected: '3' }],
        hint: 'Sort and take middle or Boyer-Moore.'
    },
    // 44. String: Isomorphic
    {
        id: 'py-oppe2-isomorphic',
        title: 'Isomorphic Strings',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'is_isomorphic' that checks if s can be replaced to get t.`,
        examples: [{ input: '"egg", "add"', output: 'True' }],
        starterCode: `def is_isomorphic(s, t):
    # Write your code here
    pass`,
        functionName: 'is_isomorphic',
        testCases: [{ input: '("egg", "add")', expected: 'True' }, { input: '("foo", "bar")', expected: 'False' }],
        hint: 'Map chars from s to t and t to s.'
    },
    // 45. List: Contains Duplicate
    {
        id: 'py-oppe2-contains-dup',
        title: 'Contains Duplicate',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'contains_duplicate' that returns True if any value appears twice.`,
        examples: [{ input: '[1, 2, 3, 1]', output: 'True' }],
        starterCode: `def contains_duplicate(nums):
    # Write your code here
    pass`,
        functionName: 'contains_duplicate',
        testCases: [{ input: '([1, 2, 3, 1])', expected: 'True' }],
        hint: 'len(set(nums)) != len(nums).'
    },
    // 46. List: Missing Number
    {
        id: 'py-oppe2-missing-num',
        title: 'Missing Number',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'missing_number' that finds the missing number in range [0, n].`,
        examples: [{ input: '[3, 0, 1]', output: '2' }],
        starterCode: `def missing_number(nums):
    # Write your code here
    pass`,
        functionName: 'missing_number',
        testCases: [{ input: '([3, 0, 1])', expected: '2' }],
        hint: 'Sum(0..n) - Sum(nums).'
    },
    // 47. String: Reverse Vowels
    {
        id: 'py-oppe2-rev-vowels',
        title: 'Reverse Vowels',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'reverse_vowels' that reverses only vowels in a string.`,
        examples: [{ input: '"hello"', output: '"holle"' }],
        starterCode: `def reverse_vowels(s):
    # Write your code here
    pass`,
        functionName: 'reverse_vowels',
        testCases: [{ input: '("hello")', expected: '"holle"' }],
        hint: 'Two pointers.'
    },
    // 48. List: Intersection II
    {
        id: 'py-oppe2-intersect-ii',
        title: 'Intersection of Two Arrays II',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'intersect' that returns intersection of two arrays (include duplicates).`,
        examples: [{ input: '[1, 2, 2, 1], [2, 2]', output: '[2, 2]' }],
        starterCode: `def intersect(nums1, nums2):
    # Write your code here
    pass`,
        functionName: 'intersect',
        testCases: [{ input: '([1, 2, 2, 1], [2, 2])', expected: '[2, 2]' }],
        hint: 'Counter.'
    },
    // 49. String: First Unique Char
    {
        id: 'py-oppe2-first-unique',
        title: 'First Unique Character',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'first_uniq_char' that returns index of first unique char.`,
        examples: [{ input: '"leetcode"', output: '0' }],
        starterCode: `def first_uniq_char(s):
    # Write your code here
    pass`,
        functionName: 'first_uniq_char',
        testCases: [{ input: '("leetcode")', expected: '0' }],
        hint: 'Count frequency then find first with count 1.'
    },
    // 50. String: Ransom Note
    {
        id: 'py-oppe2-ransom-note',
        title: 'Ransom Note',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'can_construct' that returns True if ransomNote can be constructed from magazine.`,
        examples: [{ input: '"a", "b"', output: 'False' }],
        starterCode: `def can_construct(ransomNote, magazine):
    # Write your code here
    pass`,
        functionName: 'can_construct',
        testCases: [{ input: '("a", "b")', expected: 'False' }, { input: '("aa", "aab")', expected: 'True' }],
        hint: 'Check counts.'
    },

    // ADDITIONAL FILE HANDLING QUESTIONS (10 more advanced questions)

    // 51. Parse JSON String
    {
        id: 'py-oppe2-file-parse-json',
        title: 'Parse JSON from File',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'parse_json_content' that parses JSON string and returns the Python object. Return None on error.`,
        examples: [{ input: '\'{"name": "John", "age": 30}\'', output: '{"name": "John", "age": 30}' }],
        starterCode: `import json
def parse_json_content(content):
    # Write your code here
    pass`,
        functionName: 'parse_json_content',
        testCases: [
            { input: '(\'{"name": "John", "age": 30}\')', expected: '{"name": "John", "age": 30}' },
            { input: '(\'invalid json\')', expected: 'None' }
        ],
        hint: 'Use json.loads() with try-except.'
    },

    // 52. Compare Two Files
    {
        id: 'py-oppe2-file-compare',
        title: 'Compare File Contents',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'compare_files' that returns True if two file contents are identical.`,
        examples: [{ input: '"content1", "content1"', output: 'True' }],
        starterCode: `def compare_files(content1, content2):
    # Write your code here
    pass`,
        functionName: 'compare_files',
        testCases: [
            { input: '("content1", "content1")', expected: 'True' },
            { input: '("content1", "content2")', expected: 'False' }
        ],
        hint: 'Simple comparison.'
    },

    // 53. Parse Log Lines
    {
        id: 'py-oppe2-file-parse-logs',
        title: 'Parse Log File',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Write a function 'parse_logs' that extracts ERROR lines from log content and returns them as a list.`,
        examples: [{ input: '"INFO: started\\nERROR: failed\\nINFO: ok"', output: '["ERROR: failed"]' }],
        starterCode: `def parse_logs(content):
    # Write your code here
    pass`,
        functionName: 'parse_logs',
        testCases: [
            { input: '("INFO: started\\nERROR: failed\\nINFO: ok")', expected: '["ERROR: failed"]' },
            { input: '("INFO: all good")', expected: '[]' }
        ],
        hint: 'Filter lines containing "ERROR".'
    },

    // 54. Calculate File Checksum
    {
        id: 'py-oppe2-file-checksum',
        title: 'Simple Checksum',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'simple_checksum' that returns sum of ASCII values of all characters.`,
        examples: [{ input: '"abc"', output: '294' }],
        starterCode: `def simple_checksum(content):
    # Write your code here
    pass`,
        functionName: 'simple_checksum',
        testCases: [
            { input: '("abc")', expected: '294' },
            { input: '("a")', expected: '97' }
        ],
        hint: 'Sum ord(c) for all characters.'
    },

    // 55. Extract Email Addresses
    {
        id: 'py-oppe2-file-extract-emails',
        title: 'Extract Email Addresses',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Write a function 'extract_emails' that finds all email addresses (simple: word@word.word format) in content.`,
        examples: [{ input: '"contact: john@example.com or jane@test.org"', output: '["john@example.com", "jane@test.org"]' }],
        starterCode: `def extract_emails(content):
    # Write your code here
    pass`,
        functionName: 'extract_emails',
        testCases: [
            { input: '("contact: john@example.com or jane@test.org")', expected: '["john@example.com", "jane@test.org"]' },
            { input: '("no emails here")', expected: '[]' }
        ],
        hint: 'Use regex or find patterns with @ and . characters.'
    },

    // 56. Validate CSV Format
    {
        id: 'py-oppe2-file-validate-csv',
        title: 'Validate CSV Rows',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'validate_csv' that checks if all rows have same number of columns. Returns True if valid.`,
        examples: [{ input: '"a,b,c\\n1,2,3"', output: 'True' }],
        starterCode: `def validate_csv(content):
    # Write your code here
    pass`,
        functionName: 'validate_csv',
        testCases: [
            { input: '("a,b,c\\n1,2,3")', expected: 'True' },
            { input: '("a,b\\n1,2,3")', expected: 'False' }
        ],
        hint: 'Count commas in each line.'
    },

    // 57. Word Frequency in File
    {
        id: 'py-oppe2-file-word-freq',
        title: 'File Word Frequency',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'file_word_frequency' that returns dict of word frequencies (case-insensitive).`,
        examples: [{ input: '"Hello world\\nHello"', output: '{"hello": 2, "world": 1}' }],
        starterCode: `def file_word_frequency(content):
    # Write your code here
    pass`,
        functionName: 'file_word_frequency',
        testCases: [
            { input: '("Hello world\\nHello")', expected: '{"hello": 2, "world": 1}' },
            { input: '("a b a")', expected: '{"a": 2, "b": 1}' }
        ],
        hint: 'Convert to lowercase, split, count.'
    },

    // 58. Top N Words
    {
        id: 'py-oppe2-file-top-words',
        title: 'Top N Frequent Words',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Write a function 'top_n_words' that returns the top n most frequent words as list of tuples (word, count).`,
        examples: [{ input: '"apple banana apple orange banana apple", 2', output: '[("apple", 3), ("banana", 2)]' }],
        starterCode: `def top_n_words(content, n):
    # Write your code here
    pass`,
        functionName: 'top_n_words',
        testCases: [
            { input: '("apple banana apple orange banana apple", 2)', expected: '[("apple", 3), ("banana", 2)]' },
            { input: '("a b c", 1)', expected: '[("a", 1)]' }
        ],
        hint: 'Count words, sort by frequency, take top n.'
    },

    // 59. Format Table Data
    {
        id: 'py-oppe2-file-format-table',
        title: 'Format Data as Table',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Write a function 'format_table' that takes CSV content and returns formatted table string with aligned columns.`,
        examples: [{ input: '"name,age\\nJohn,25\\nJane,30"', output: '"name age\\nJohn 25 \\nJane 30 "' }],
        starterCode: `def format_table(csv_content):
    # Write your code here
    pass`,
        functionName: 'format_table',
        testCases: [
            { input: '("name,age\\nJohn,25")', expected: '"name age\\nJohn 25 "' }
        ],
        hint: 'Parse CSV, calculate column widths, format.'
    },

    // 60. Count File Types
    {
        id: 'py-oppe2-file-count-types',
        title: 'Count File Extensions',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'count_file_types' that takes content with filenames (one per line) and returns dict of extension counts.`,
        examples: [{ input: '"file1.txt\\nfile2.txt\\nfile3.py"', output: '{".txt": 2, ".py": 1}' }],
        starterCode: `def count_file_types(content):
    # Write your code here
    pass`,
        functionName: 'count_file_types',
        testCases: [
            { input: '("file1.txt\\nfile2.txt\\nfile3.py")', expected: '{".txt": 2, ".py": 1}' },
            { input: '("test.js")', expected: '{".js": 1}' }
        ],
        hint: 'Extract extensions and count.'
    }
];

