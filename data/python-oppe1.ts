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
        examples: [{ input: 'a = 3, b = 4', output: '(25, 7)' }, { input: 'a = 1, b = 1', output: '(2, 0)' }],
        starterCode: `def sum_squares_abs_diff_squares(a, b):
    # Write your code here
    pass`,
        functionName: 'sum_squares_abs_diff_squares',
        testCases: [
            { input: '(3, 4)', expected: '(25, 7)' },
            { input: '(1, 1)', expected: '(2, 0)' },
            { input: '(10, 5)', expected: '(125, 75)' }
        ],
        hint: 'Return (a**2 + b**2, abs(a**2 - b**2))'
    },
    {
        id: 'py-oppe1-set1-p2',
        title: 'Odd Length Palindrome',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'is_odd_length_palindrome' that takes a string s and returns True if s is a palindrome of odd length, and False otherwise.
        
A palindrome is a string that reads the same forwards and backwards.`,
        examples: [
            { input: '"nun"', output: 'True' },
            { input: '"noon"', output: 'False' },
            { input: '"madam"', output: 'True' }
        ],
        starterCode: `def is_odd_length_palindrome(s):
    # Write your code here
    pass`,
        functionName: 'is_odd_length_palindrome',
        testCases: [
            { input: '("nun")', expected: 'True' },
            { input: '("noon")', expected: 'False' },
            { input: '("madam")', expected: 'True' },
            { input: '("a")', expected: 'True' },
            { input: '("ab")', expected: 'False' }
        ],
        hint: 'Check s == s[::-1] and len(s) % 2 != 0'
    },
    {
        id: 'py-oppe1-set1-p3',
        title: 'Remove Elements at Indices',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'remove_elements_at_two_indices' that takes a list l and two indices i1 and i2. The function should remove the elements at these two indices from the list l. Assume the indices are non-negative and unique. The function should not return anything but should modify the input list directly.`,
        examples: [
            { input: 'l = [1, 2, 3, 4, 5, 6, 7], i1 = 5, i2 = 1', output: '[1, 3, 4, 5, 7]' },
            { input: 'l = [10, 20, 30], i1 = 0, i2 = 2', output: '[20]' }
        ],
        starterCode: `def remove_elements_at_two_indices(l, i1, i2):
    # Write your code here
    pass`,
        functionName: 'remove_elements_at_two_indices',
        testCases: [
            { input: '([1, 2, 3, 4, 5, 6, 7], 5, 1)', expected: 'None' }, // Side effect check
            { input: '([10, 20, 30], 0, 2)', expected: 'None' },
            { input: '([1, 2, 3, 4], 1, 2)', expected: 'None' }
        ],
        hint: 'Remove larger index first to avoid shifting issues.'
    },
    {
        id: 'py-oppe1-set1-p4',
        title: 'Sum of Squares of Even',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'sum_of_squares_of_even' that takes a list of integers and returns the sum of squares of all even numbers in the list.`,
        examples: [
            { input: '[1, 2, 3, 4, 5, 6]', output: '56' },
            { input: '[1, 3, 5]', output: '0' }
        ],
        starterCode: `def sum_of_squares_of_even(nums):
    # Write your code here
    pass`,
        functionName: 'sum_of_squares_of_even',
        testCases: [
            { input: '([1, 2, 3, 4, 5, 6])', expected: '56' },
            { input: '([1, 3, 5])', expected: '0' },
            { input: '([2, 4])', expected: '20' }
        ],
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
The next n lines contain the passage.

Output Format:
Print the modified lines.`,
        examples: [
            { input: '1\nHello World', output: 'hEllO wOrld' },
            { input: '2\nPython\nJava', output: 'pythOn\njAvA' }
        ],
        starterCode: `def main():
    # Write your code here
    pass`,
        functionName: 'main',
        testCases: [
            { input: '1\nHello World', expected: 'hEllO wOrld' },
            { input: '2\nPython\nJava', expected: 'pythOn\njAvA' }
        ],
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
        examples: [
            { input: 'data=[(1, 50), (2, 80)], criteria="above_average"', output: '[2]' },
            { input: 'data=[(1, 30), (2, 95)], criteria="fail"', output: '[1]' }
        ],
        starterCode: `def get_roll_nos(data, criteria=None):
    # Write your code here
    pass`,
        functionName: 'get_roll_nos',
        testCases: [
            { input: '([(1, 50), (2, 80)], "above_average")', expected: '[2]' },
            { input: '([(1, 30), (2, 95)], "fail")', expected: '[1]' },
            { input: '([(1, 95), (2, 90)], "toppers")', expected: '[1, 2]' }
        ],
        hint: 'Calculate average first.'
    },
    {
        id: 'py-oppe1-set1-p7',
        title: 'V Shaped Pattern',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given an integer n > 0, print a "V" shaped pattern with n rows using backslashes and forward slashes, with 'v' at the bottom.
        
Example for n=2:
\\ /
 v
 
Example for n=3:
\\   /
 \\ /
  v`,
        examples: [
            { input: '2', output: '\\ /\n v' },
            { input: '3', output: '\\   /\n \\ /\n  v' }
        ],
        starterCode: `def main():
    # Write your code here
    pass`,
        functionName: 'main',
        testCases: [
            { input: '2', expected: '\\ /\n v' },
            { input: '3', expected: '\\   /\n \\ /\n  v' },
            { input: '1', expected: 'v' } // Or just v? Description says n rows, usually n=1 is just v
        ],
        hint: 'Use loops and spacing.'
    },

    // --- Set 2 ---
    {
        id: 'py-oppe1-set2-p1',
        title: 'Right Triangle Even Sides',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Given three side lengths a, b, c (where a <= b <= c), check if they form a right-angled triangle AND the perpendicular sides (a and b) are even integers.
        
Return True if both conditions are met, otherwise False.`,
        examples: [
            { input: '6, 8, 10', output: 'True' },
            { input: '3, 4, 5', output: 'False' }
        ],
        starterCode: `def is_right_triangle_with_even_sides(a, b, c):
    # Write your code here
    pass`,
        functionName: 'is_right_triangle_with_even_sides',
        testCases: [
            { input: '(6, 8, 10)', expected: 'True' },
            { input: '(3, 4, 5)', expected: 'False' },
            { input: '(5, 12, 13)', expected: 'False' },
            { input: '(8, 6, 10)', expected: 'True' }
        ],
        hint: 'Check a**2 + b**2 == c**2 and a%2==0 and b%2==0'
    },
    {
        id: 'py-oppe1-set2-p2',
        title: 'Odd Alpha Even Digits',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Given a string, check if all characters at odd indices are alphabets and all characters at even indices are digits.
        
Return True if the condition holds, otherwise False.
Note: Indices are 0-based. Even indices: 0, 2, 4... Odd indices: 1, 3, 5...`,
        examples: [
            { input: '"1a2b3c"', output: 'True' },
            { input: '"a1b2"', output: 'False' }
        ],
        starterCode: `def is_odd_indices_alpha_and_even_indices_digits(string):
    # Write your code here
    pass`,
        functionName: 'is_odd_indices_alpha_and_even_indices_digits',
        testCases: [
            { input: '("1a2b3c")', expected: 'True' },
            { input: '("a1b2")', expected: 'False' },
            { input: '("1a2")', expected: 'True' },
            { input: '("1")', expected: 'True' }
        ],
        hint: 'Enumerate and check types.'
    },
    {
        id: 'py-oppe1-set2-p3',
        title: 'Unique Chars Diff',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function that takes two strings s1 and s2. Return a set containing characters that are present in s1 but NOT in s2.`,
        examples: [
            { input: 's1="apple", s2="pear"', output: "{'l'}" },
            { input: 's1="abc", s2="def"', output: "{'a', 'b', 'c'}" }
        ],
        starterCode: `def unique_chars_present_in_first_not_in_second(s1, s2):
    # Write your code here
    pass`,
        functionName: 'unique_chars_present_in_first_not_in_second',
        testCases: [
            { input: '("apple", "pear")', expected: "{'l'}" },
            { input: '("abc", "def")', expected: "{'a', 'b', 'c'}" },
            { input: '("abc", "abc")', expected: "set()" }
        ],
        hint: 'set(s1) - set(s2)'
    },
    {
        id: 'py-oppe1-set2-p4',
        title: 'Repeat Tuple',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Given a tuple t = (a, b), return a new tuple where the element 'a' is repeated 'b' times, followed by the element 'b' repeated 'a' times.`,
        examples: [
            { input: '(2, 3)', output: '(2, 2, 2, 3, 3)' },
            { input: '(1, 2)', output: '(1, 1, 2)' }
        ],
        starterCode: `def repeat(t):
    # Write your code here
    pass`,
        functionName: 'repeat',
        testCases: [
            { input: '((2, 3),)', expected: '(2, 2, 2, 3, 3)' },
            { input: '((1, 2),)', expected: '(1, 1, 2)' },
            { input: '((3, 1),)', expected: '(3, 1, 1, 1)' }
        ],
        hint: 'Return tuple([a]*b + [b]*a)'
    },
    {
        id: 'py-oppe1-set2-p5',
        title: 'Swap Even Odd Indices',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function that takes a list l. It should swap the element at index 0 with index 1, index 2 with index 3, and so on. If the list has an odd length, the last element remains unchanged. The function should modify the list in-place and return None.`,
        examples: [
            { input: '[1, 2, 3, 4]', output: '[2, 1, 4, 3]' },
            { input: '[1, 2, 3]', output: '[2, 1, 3]' }
        ],
        starterCode: `def swap_even_and_odd_indices(l):
    # Write your code here
    pass`,
        functionName: 'swap_even_and_odd_indices',
        testCases: [
            { input: '([1, 2, 3, 4])', expected: 'None' }, // Check side effect manually or via runner logic
            { input: '([1, 2, 3])', expected: 'None' },
            { input: '([])', expected: 'None' }
        ],
        hint: 'Loop with step 2.'
    },
    {
        id: 'py-oppe1-set2-p6',
        title: 'Num Squares Dict',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'num_squares' that takes an integer n. Return a dictionary where keys are numbers from 1 to n, and values are their squares.`,
        examples: [{ input: '3', output: '{1: 1, 2: 4, 3: 9}' }],
        starterCode: `def num_squares(n):
    # Write your code here
    pass`,
        functionName: 'num_squares',
        testCases: [
            { input: '(3)', expected: '{1: 1, 2: 4, 3: 9}' },
            { input: '(1)', expected: '{1: 1}' },
            { input: '(5)', expected: '{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}' }
        ],
        hint: '{i: i**2 for i in range(1, n+1)}'
    },
    {
        id: 'py-oppe1-set2-p7',
        title: 'Row with Max Zeros',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given a matrix (list of lists), find the index of the row that contains the maximum number of zeros. If multiple rows have the same maximum number of zeros, return the index of the first such row.`,
        examples: [
            { input: '[[1, 0], [0, 0]]', output: '1' },
            { input: '[[1, 1], [1, 1]]', output: '0' } // Or -1 if none? Usually 0 if max is 0.
        ],
        starterCode: `def row_index_with_most_number_of_zeros(matrix):
    # Write your code here
    pass`,
        functionName: 'row_index_with_most_number_of_zeros',
        testCases: [
            { input: '([[1, 0], [0, 0]])', expected: '1' },
            { input: '([[0, 0, 0], [1, 0, 1]])', expected: '0' },
            { input: '([[1, 1], [1, 1]])', expected: '0' }
        ],
        hint: 'Use max with key counting zeros.'
    },
    {
        id: 'py-oppe1-set2-p8',
        title: 'Top K Teams',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given a list of dictionaries, where each dictionary represents a batsman with keys 'name', 'runs', and 'team'. Write a function 'top_k_teams' that returns a list of the names of the top k teams based on the total runs scored by their batsmen. The list should be sorted in descending order of total runs. If two teams have the same runs, break ties alphabetically.`,
        examples: [
            { input: 'batsmen=[{"name": "A", "runs": 100, "team": "T1"}, {"name": "B", "runs": 50, "team": "T2"}], k=1', output: "['T1']" },
            { input: 'batsmen=[{"name": "X", "runs": 10, "team": "A"}, {"name": "Y", "runs": 20, "team": "B"}], k=2', output: "['B', 'A']" }
        ],
        starterCode: `def top_k_teams(batsmen, k):
    # Write your code here
    pass`,
        functionName: 'top_k_teams',
        testCases: [
            { input: '([{"name": "A", "runs": 100, "team": "T1"}, {"name": "B", "runs": 50, "team": "T2"}], 1)', expected: "['T1']" },
            { input: '([{"name": "A", "runs": 100, "team": "T1"}, {"name": "B", "runs": 150, "team": "T2"}], 1)', expected: "['T2']" },
            { input: '([{"name": "X", "runs": 10, "team": "A"}, {"name": "Y", "runs": 20, "team": "B"}], 2)', expected: "['B', 'A']" }
        ],
        hint: 'Aggregate runs per team then sort.'
    },
    {
        id: 'py-oppe1-set2-p9',
        title: 'Antakshari Subsequence',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Given a sequence of words, find the length of the longest subsequence where the last character of a word matches the first character of the next word in the subsequence.
        
Input Format:
Space separated words.

Output Format:
Length of the longest subsequence.`,
        examples: [
            { input: 'ant tiger rat', output: '3' },
            { input: 'cat dog', output: '1' }
        ],
        starterCode: `def main():
    # Write your code here
    pass`,
        functionName: 'main',
        testCases: [
            { input: 'ant tiger rat', expected: '3' },
            { input: 'apple elephant', expected: '2' },
            { input: 'a b c', expected: '1' }
        ],
        hint: 'Dynamic programming or greedy if simple.'
    },

    // --- Set 3 ---
    {
        id: 'py-oppe1-set3-p1',
        title: 'Square and Clip',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'square_and_clip' that takes two integers x and threshold. The function should return the square of x, but if the square is greater than the threshold, it should return the threshold instead.`,
        examples: [
            { input: 'x=5, threshold=30', output: '25' },
            { input: 'x=6, threshold=30', output: '30' }
        ],
        starterCode: `def square_and_clip(x, threshold):
    # Write your code here
    pass`,
        functionName: 'square_and_clip',
        testCases: [
            { input: '(5, 30)', expected: '25' },
            { input: '(6, 30)', expected: '30' },
            { input: '(10, 50)', expected: '50' },
            { input: '(2, 10)', expected: '4' }
        ],
        hint: 'min(x**2, threshold)'
    },
    {
        id: 'py-oppe1-set3-p2',
        title: 'Lower First Upper Second',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function that takes a string s of even length. It should return a new string where the first half of s is converted to lowercase and the second half is converted to uppercase.`,
        examples: [
            { input: '"Python"', output: '"pytHON"' },
            { input: '"ABCD"', output: '"abCD"' }
        ],
        starterCode: `def lowercase_first_half_and_uppercase_second_half(s):
    # Write your code here
    pass`,
        functionName: 'lowercase_first_half_and_uppercase_second_half',
        testCases: [
            { input: '("Python")', expected: '"pytHON"' },
            { input: '("ABCD")', expected: '"abCD"' },
            { input: '("1234")', expected: '"1234"' }
        ],
        hint: 'Slice and convert.'
    },
    {
        id: 'py-oppe1-set3-p3',
        title: 'Add Middle to Ends',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function that takes a list l of odd length. It should find the middle element and append it to both the beginning and the end of the list. The function should modify the list in-place and return None.`,
        examples: [
            { input: '[1, 2, 3]', output: '[2, 1, 2, 3, 2]' },
            { input: '[10]', output: '[10, 10, 10]' }
        ],
        starterCode: `def add_middle_to_ends(l):
    # Write your code here
    pass`,
        functionName: 'add_middle_to_ends',
        testCases: [
            { input: '([1, 2, 3])', expected: 'None' }, // Side effect check
            { input: '([10])', expected: 'None' },
            { input: '([1, 2, 3, 4, 5])', expected: 'None' }
        ],
        hint: 'Find middle index len(l)//2.'
    },
    {
        id: 'py-oppe1-set3-p4',
        title: 'Manhattan Distance via B',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'manhattan_distance_via_b' that takes three points a, b, and c. Each point is a tuple (x, y). The function should calculate the Manhattan distance from a to c passing through b. Manhattan distance between (x1, y1) and (x2, y2) is |x1 - x2| + |y1 - y2|.`,
        examples: [
            { input: 'a=(0,0), b=(1,1), c=(2,2)', output: '4' },
            { input: 'a=(1,1), b=(1,1), c=(1,1)', output: '0' }
        ],
        starterCode: `def manhattan_distance_via_b(a, b, c):
    # Write your code here
    pass`,
        functionName: 'manhattan_distance_via_b',
        testCases: [
            { input: '((0,0), (1,1), (2,2))', expected: '4' },
            { input: '((0,0), (0,0), (0,0))', expected: '0' },
            { input: '((1,2), (3,4), (5,6))', expected: '8' }
        ],
        hint: 'dist(a,b) + dist(b,c)'
    },
    {
        id: 'py-oppe1-set3-p5',
        title: 'Unique Common Digits',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'number_of_unique_common_digits' that takes two integers n1 and n2. Return the number of unique digits that are present in both numbers.`,
        examples: [
            { input: 'n1=123, n2=234', output: '2' },
            { input: 'n1=111, n2=12', output: '1' }
        ],
        starterCode: `def number_of_unique_common_digits(n1, n2):
    # Write your code here
    pass`,
        functionName: 'number_of_unique_common_digits',
        testCases: [
            { input: '(123, 234)', expected: '2' },
            { input: '(111, 12)', expected: '1' },
            { input: '(123, 456)', expected: '0' }
        ],
        hint: 'set(str(n1)) & set(str(n2))'
    },
    {
        id: 'py-oppe1-set3-p6',
        title: 'Create Indexed Dict',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'create_indexed_dict' that takes a list of names. Return a dictionary where the keys are the indices (0-based) and the values are the corresponding names from the list.`,
        examples: [
            { input: '["Alice", "Bob"]', output: '{0: "Alice", 1: "Bob"}' },
            { input: '["A", "B", "C"]', output: '{0: "A", 1: "B", 2: "C"}' }
        ],
        starterCode: `def create_indexed_dict(names):
    # Write your code here
    pass`,
        functionName: 'create_indexed_dict',
        testCases: [
            { input: '(["Alice", "Bob"])', expected: '{0: "Alice", 1: "Bob"}' },
            { input: '([])', expected: '{}' },
            { input: '(["One"])', expected: '{0: "One"}' }
        ],
        hint: 'dict(enumerate(names))'
    },
    {
        id: 'py-oppe1-set3-p7',
        title: 'Num to Word',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'num_to_word' that takes an integer num and returns a string where each digit of num is replaced by its English word equivalent, separated by hyphens.`,
        examples: [
            { input: '123', output: '"one-two-three"' },
            { input: '0', output: '"zero"' }
        ],
        starterCode: `def num_to_word(num):
    # Write your code here
    pass`,
        functionName: 'num_to_word',
        testCases: [
            { input: '(123)', expected: '"one-two-three"' },
            { input: '(0)', expected: '"zero"' },
            { input: '(987)', expected: '"nine-eight-seven"' }
        ],
        hint: 'Map digits to words.'
    },
    {
        id: 'py-oppe1-set3-p8',
        title: 'Courses Sorted by Enrollment',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a function 'courses_sorted_by_enrollment' that takes a dictionary where keys are student names and values are lists of courses they are enrolled in. Return a list of courses sorted by their enrollment count in descending order. If two courses have the same enrollment, sort them alphabetically.`,
        examples: [
            { input: '{"A": ["Math", "Physics"], "B": ["Math"]}', output: '["Math", "Physics"]' },
            { input: '{"X": ["A"], "Y": ["A", "B"]}', output: '["A", "B"]' }
        ],
        starterCode: `def courses_sorted_by_enrollment(student_courses):
    # Write your code here
    pass`,
        functionName: 'courses_sorted_by_enrollment',
        testCases: [
            { input: '({"A": ["Math", "Physics"], "B": ["Math"]})', expected: '["Math", "Physics"]' },
            { input: '({"A": ["CS"], "B": ["CS"], "C": ["Math"]})', expected: '["CS", "Math"]' },
            { input: '({})', expected: '[]' }
        ],
        hint: 'Count course occurrences then sort.'
    },
    {
        id: 'py-oppe1-set3-p9',
        title: 'Min Max Balance',
        subject: 'Python',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Write a program that reads an initial balance and a series of daily transactions. For each day, calculate and print the minimum, maximum, and end-of-day balance.
        
Input Format:
First line: Initial balance (float).
Subsequent lines: Transactions for a day (space-separated floats). Each line represents one day.

Output Format:
For each day, print: "Min: <min_bal>, Max: <max_bal>, End: <end_bal>"`,
        examples: [
            { input: '1000\n-100 200\n-500', output: 'Min: 900.0, Max: 1100.0, End: 1100.0\nMin: 600.0, Max: 1100.0, End: 600.0' }
        ],
        starterCode: `def main():
    # Write your code here
    pass`,
        functionName: 'main',
        testCases: [
            { input: '1000\n-100 200\n-500', expected: 'Min: 900.0, Max: 1100.0, End: 1100.0\nMin: 600.0, Max: 1100.0, End: 600.0' },
            { input: '0\n100 -50', expected: 'Min: 0.0, Max: 100.0, End: 50.0' },
            { input: '100\n10 20', expected: 'Min: 100.0, Max: 130.0, End: 130.0' }
        ],
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
            { input: 'a = 3, b = 4', output: '(25, 7)', explanation: 'Sum of squares: 9+16=25. Abs diff: |9-16|=7.' },
            { input: 'a = 1, b = 1', output: '(2, 0)' }
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
            { input: '5', output: '120' },
            { input: '3', output: '6' }
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
            { input: 'L=[1,2,3,4,5], k=2', output: '[4, 5, 1, 2, 3]' },
            { input: 'L=[1,2,3], k=1', output: '[3, 1, 2]' }
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
            { input: '"Hello World"', output: '3' },
            { input: '"xyz"', output: '0' }
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
            { input: '"The sky is blue"', output: '"blue is sky The"' },
            { input: '"Hello"', output: '"Hello"' }
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
        examples: [{ input: '123', output: '6' }, { input: '10', output: '1' }],
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
        examples: [{ input: '153', output: 'True' }, { input: '10', output: 'False' }],
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
        examples: [{ input: '7', output: 'True' }, { input: '10', output: 'False' }],
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
        examples: [{ input: '5', output: '[0, 1, 1, 2, 3]' }, { input: '1', output: '[0]' }],
        starterCode: `def fibonacci_seq(n):
    # Write your code here
    pass`,
        functionName: 'fibonacci_seq',
        testCases: [{ input: '(5)', expected: '[0, 1, 1, 2, 3]' }, { input: '(1)', expected: '[0]' }, { input: '(2)', expected: '[0, 1]' }],
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
        examples: [{ input: '12, 18', output: '6' }, { input: '10, 5', output: '5' }],
        starterCode: `def gcd(a, b):
    # Write your code here
    pass`,
        functionName: 'gcd',
        testCases: [{ input: '(12, 18)', expected: '6' }, { input: '(7, 13)', expected: '1' }, { input: '(10, 5)', expected: '5' }],
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
        examples: [{ input: '4, 6', output: '12' }, { input: '10, 5', output: '10' }],
        starterCode: `def lcm(a, b):
    # Write your code here
    pass`,
        functionName: 'lcm',
        testCases: [{ input: '(4, 6)', expected: '12' }, { input: '(5, 7)', expected: '35' }, { input: '(10, 5)', expected: '10' }],
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
        examples: [{ input: '121', output: 'True' }, { input: '10', output: 'False' }],
        starterCode: `def is_palindrome_num(n):
    # Write your code here
    pass`,
        functionName: 'is_palindrome_num',
        testCases: [{ input: '(121)', expected: 'True' }, { input: '(-121)', expected: 'False' }, { input: '(10)', expected: 'False' }],
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
        examples: [{ input: '-123', output: '-321' }, { input: '123', output: '321' }],
        starterCode: `def reverse_int(n):
    # Write your code here
    pass`,
        functionName: 'reverse_int',
        testCases: [{ input: '(-123)', expected: '-321' }, { input: '(120)', expected: '21' }, { input: '(0)', expected: '0' }],
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
        examples: [{ input: '12345', output: '5' }, { input: '0', output: '1' }],
        starterCode: `def count_digits(n):
    # Write your code here
    pass`,
        functionName: 'count_digits',
        testCases: [{ input: '(12345)', expected: '5' }, { input: '(0)', expected: '1' }, { input: '(99)', expected: '2' }],
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
        examples: [{ input: '"hello", "ell"', output: 'True' }, { input: '"abc", "d"', output: 'False' }],
        starterCode: `def is_substring(s, sub):
    # Write your code here
    pass`,
        functionName: 'is_substring',
        testCases: [{ input: '("hello", "ell")', expected: 'True' }, { input: '("hello", "world")', expected: 'False' }, { input: '("abc", "d")', expected: 'False' }],
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
        examples: [{ input: '"hello", "l"', output: '2' }, { input: '"banana", "a"', output: '3' }],
        starterCode: `def count_char(s, c):
    # Write your code here
    pass`,
        functionName: 'count_char',
        testCases: [{ input: '("hello", "l")', expected: '2' }, { input: '("world", "z")', expected: '0' }, { input: '("banana", "a")', expected: '3' }],
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
        examples: [{ input: '"hello", "l", "w"', output: '"hewwo"' }, { input: '"banana", "a", "o"', output: '"bonono"' }],
        starterCode: `def replace_char(s, old, new):
    # Write your code here
    pass`,
        functionName: 'replace_char',
        testCases: [{ input: '("hello", "l", "w")', expected: '"hewwo"' }, { input: '("banana", "a", "o")', expected: '"bonono"' }, { input: '("abc", "d", "e")', expected: '"abc"' }],
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
        examples: [{ input: '"hello"', output: '"hll"' }, { input: '"xyz"', output: '"xyz"' }],
        starterCode: `def remove_vowels(s):
    # Write your code here
    pass`,
        functionName: 'remove_vowels',
        testCases: [{ input: '("hello")', expected: '"hll"' }, { input: '("apple")', expected: '"ppl"' }, { input: '("xyz")', expected: '"xyz"' }],
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
        examples: [{ input: '"hello world"', output: '"Hello World"' }, { input: '"python is fun"', output: '"Python Is Fun"' }],
        starterCode: `def capitalize_words(s):
    # Write your code here
    pass`,
        functionName: 'capitalize_words',
        testCases: [{ input: '("hello world")', expected: '"Hello World"' }, { input: '("python is fun")', expected: '"Python Is Fun"' }, { input: '("hello")', expected: '"Hello"' }],
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
        examples: [{ input: '"my_variable_name"', output: '"myVariableName"' }, { input: '"this_is_snake_case"', output: '"thisIsSnakeCase"' }],
        starterCode: `def snake_to_camel(s):
    # Write your code here
    pass`,
        functionName: 'snake_to_camel',
        testCases: [{ input: '("my_variable_name")', expected: '"myVariableName"' }, { input: '("this_is_snake_case")', expected: '"thisIsSnakeCase"' }, { input: '("hello")', expected: '"hello"' }],
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
        examples: [{ input: '"listen", "silent"', output: 'True' }, { input: '"hello", "world"', output: 'False' }],
        starterCode: `def is_anagram(s1, s2):
    # Write your code here
    pass`,
        functionName: 'is_anagram',
        testCases: [{ input: '("listen", "silent")', expected: 'True' }, { input: '("rat", "car")', expected: 'False' }, { input: '("hello", "world")', expected: 'False' }],
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
        examples: [{ input: '"The quick brown fox jumps over the lazy dog"', output: 'True' }, { input: '"Hello World"', output: 'False' }],
        starterCode: `def is_pangram(s):
    # Write your code here
    pass`,
        functionName: 'is_pangram',
        testCases: [{ input: '("The quick brown fox jumps over the lazy dog")', expected: 'True' }, { input: '("Hello World")', expected: 'False' }, { input: '("Pack my box with five dozen liquor jugs")', expected: 'True' }],
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
        examples: [{ input: '"I love Python"', output: '"Python"' }, { input: '"A quick brown fox"', output: '"quick"' }],
        starterCode: `def longest_word(s):
    # Write your code here
    pass`,
        functionName: 'longest_word',
        testCases: [{ input: '("I love Python")', expected: '"Python"' }, { input: '("A quick brown fox")', expected: '"quick"' }, { input: '("hello")', expected: '"hello"' }],
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
        examples: [{ input: '"Hello world"', output: '2' }, { input: '"   "', output: '0' }],
        starterCode: `def count_words(s):
    # Write your code here
    pass`,
        functionName: 'count_words',
        testCases: [{ input: '("Hello world")', expected: '2' }, { input: '("   ")', expected: '0' }, { input: '("one")', expected: '1' }],
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
        examples: [{ input: '"banana"', output: '"ban"' }, { input: '"hello"', output: '"helo"' }],
        starterCode: `def remove_duplicates_str(s):
    # Write your code here
    pass`,
        functionName: 'remove_duplicates_str',
        testCases: [{ input: '("banana")', expected: '"ban"' }, { input: '("hello")', expected: '"helo"' }, { input: '("aaaa")', expected: '"a"' }],
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
        examples: [{ input: '[1, 2, 3]', output: '6' }, { input: '[]', output: '0' }],
        starterCode: `def sum_list(L):
    # Write your code here
    pass`,
        functionName: 'sum_list',
        testCases: [{ input: '([1, 2, 3])', expected: '6' }, { input: '([])', expected: '0' }, { input: '([-1, 1])', expected: '0' }],
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
        examples: [{ input: '[1, 2, 3]', output: '2.0' }, { input: '[10, 20]', output: '15.0' }],
        starterCode: `def avg_list(L):
    # Write your code here
    pass`,
        functionName: 'avg_list',
        testCases: [{ input: '([1, 2, 3])', expected: '2.0' }, { input: '([])', expected: '0' }, { input: '([10, 20])', expected: '15.0' }],
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
        examples: [{ input: '[1, 5, 3]', output: '5' }, { input: '[-1, -5, -3]', output: '-1' }],
        starterCode: `def max_element(L):
    # Write your code here
    pass`,
        functionName: 'max_element',
        testCases: [{ input: '([1, 5, 3])', expected: '5' }, { input: '([-1, -5, -3])', expected: '-1' }, { input: '([10])', expected: '10' }],
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
        examples: [{ input: '[1, 5, 3]', output: '1' }, { input: '[-1, -5, -3]', output: '-5' }],
        starterCode: `def min_element(L):
    # Write your code here
    pass`,
        functionName: 'min_element',
        testCases: [{ input: '([1, 5, 3])', expected: '1' }, { input: '([-1, -5, -3])', expected: '-5' }, { input: '([10])', expected: '10' }],
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
        examples: [{ input: '[1, 5, 3, 5]', output: '3' }, { input: '[1, 2]', output: '1' }],
        starterCode: `def second_largest(L):
    # Write your code here
    pass`,
        functionName: 'second_largest',
        testCases: [{ input: '([1, 5, 3, 5])', expected: '3' }, { input: '([1])', expected: 'None' }, { input: '([1, 2])', expected: '1' }],
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
        examples: [{ input: '[1, 2, 2, 3]', output: '[1, 2, 3]' }, { input: '[1, 1, 1]', output: '[1]' }],
        starterCode: `def remove_duplicates_list(L):
    # Write your code here
    pass`,
        functionName: 'remove_duplicates_list',
        testCases: [{ input: '([1, 2, 2, 3])', expected: '[1, 2, 3]' }, { input: '([1, 1, 1])', expected: '[1]' }, { input: '([1, 2, 3])', expected: '[1, 2, 3]' }],
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
        examples: [{ input: '[1, 2, 3, 4]', output: '(2, 2)' }, { input: '[1, 3, 5]', output: '(0, 3)' }],
        starterCode: `def count_even_odd(L):
    # Write your code here
    pass`,
        functionName: 'count_even_odd',
        testCases: [{ input: '([1, 2, 3, 4])', expected: '(2, 2)' }, { input: '([1, 3, 5])', expected: '(0, 3)' }, { input: '([])', expected: '(0, 0)' }],
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
        examples: [{ input: '[1, 2], [3, 4]', output: '[1, 2, 3, 4]' }, { input: '[], [1]', output: '[1]' }],
        starterCode: `def merge_lists(L1, L2):
    # Write your code here
    pass`,
        functionName: 'merge_lists',
        testCases: [{ input: '([1, 2], [3, 4])', expected: '[1, 2, 3, 4]' }, { input: '([], [1])', expected: '[1]' }, { input: '([1], [])', expected: '[1]' }],
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
        examples: [{ input: '[1, 2, 3]', output: 'True' }, { input: '[1, 3, 2]', output: 'False' }],
        starterCode: `def is_sorted(L):
    # Write your code here
    pass`,
        functionName: 'is_sorted',
        testCases: [{ input: '([1, 2, 3])', expected: 'True' }, { input: '([1, 3, 2])', expected: 'False' }, { input: '([1, 1, 1])', expected: 'True' }],
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
        examples: [{ input: '[1, 2, 3, 4, 5], 2', output: '[3, 4, 5, 1, 2]' }, { input: '[1, 2, 3], 1', output: '[2, 3, 1]' }],
        starterCode: `def rotate_left(L, k):
    # Write your code here
    pass`,
        functionName: 'rotate_left',
        testCases: [{ input: '([1, 2, 3, 4, 5], 2)', expected: '[3, 4, 5, 1, 2]' }, { input: '([1, 2, 3], 1)', expected: '[2, 3, 1]' }, { input: '([1, 2], 3)', expected: '[2, 1]' }],
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
        examples: [{ input: '[1, 2, 2], [2, 3]', output: '[2]' }, { input: '[1, 2], [3, 4]', output: '[]' }],
        starterCode: `def list_intersection(L1, L2):
    # Write your code here
    pass`,
        functionName: 'list_intersection',
        testCases: [{ input: '([1, 2, 2], [2, 3])', expected: '[2]' }, { input: '([1, 2], [3, 4])', expected: '[]' }, { input: '([1, 1], [1])', expected: '[1]' }],
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
        examples: [{ input: '[1, 2], [2, 3]', output: '[1, 2, 3]' }, { input: '[1], [1]', output: '[1]' }],
        starterCode: `def list_union(L1, L2):
    # Write your code here
    pass`,
        functionName: 'list_union',
        testCases: [{ input: '([1, 2], [2, 3])', expected: '[1, 2, 3]' }, { input: '([1], [1])', expected: '[1]' }, { input: '([], [1])', expected: '[1]' }],
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
        examples: [{ input: '[1, 2, 3], [2, 4]', output: '[1, 3]' }, { input: '[1, 2], [1, 2]', output: '[]' }],
        starterCode: `def list_difference(L1, L2):
    # Write your code here
    pass`,
        functionName: 'list_difference',
        testCases: [{ input: '([1, 2, 3], [2, 4])', expected: '[1, 3]' }, { input: '([1, 2], [1, 2])', expected: '[]' }, { input: '([1], [])', expected: '[1]' }],
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
        examples: [{ input: '[1, 2, 3]', output: '[1, 3, 6]' }, { input: '[1, 1, 1]', output: '[1, 2, 3]' }],
        starterCode: `def cumulative_sum(L):
    # Write your code here
    pass`,
        functionName: 'cumulative_sum',
        testCases: [{ input: '([1, 2, 3])', expected: '[1, 3, 6]' }, { input: '([1, 1, 1])', expected: '[1, 2, 3]' }, { input: '([])', expected: '[]' }],
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
        examples: [{ input: '[1, 2, 2, 3]', output: '{1: 1, 2: 2, 3: 1}' }, { input: '[1, 1, 1]', output: '{1: 3}' }],
        starterCode: `def element_frequency(L):
    # Write your code here
    pass`,
        functionName: 'element_frequency',
        testCases: [{ input: '([1, 2, 2, 3])', expected: '{1: 1, 2: 2, 3: 1}' }, { input: '([1, 1, 1])', expected: '{1: 3}' }, { input: '([])', expected: '{}' }],
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
        examples: [{ input: '["a", "b"], [1, 2]', output: '{"a": 1, "b": 2}' }, { input: '[], []', output: '{}' }],
        starterCode: `def dict_from_lists(keys, values):
    # Write your code here
    pass`,
        functionName: 'dict_from_lists',
        testCases: [{ input: '(["a", "b"], [1, 2])', expected: '{"a": 1, "b": 2}' }, { input: '([], [])', expected: '{}' }, { input: '(["a"], [1])', expected: '{"a": 1}' }],
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
        examples: [{ input: '{"a": 1, "b": 2}', output: '{1: "a", 2: "b"}' }, { input: '{"a": 1}', output: '{1: "a"}' }],
        starterCode: `def invert_dict_simple(d):
    # Write your code here
    pass`,
        functionName: 'invert_dict_simple',
        testCases: [{ input: '({"a": 1, "b": 2})', expected: '{1: "a", 2: "b"}' }, { input: '({"a": 1})', expected: '{1: "a"}' }, { input: '({})', expected: '{}' }],
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
        examples: [{ input: '{"a": 1}, {"b": 2}', output: '{"a": 1, "b": 2}' }, { input: '{}, {"a": 1}', output: '{"a": 1}' }],
        starterCode: `def merge_dicts(d1, d2):
    # Write your code here
    pass`,
        functionName: 'merge_dicts',
        testCases: [{ input: '({"a": 1}, {"b": 2})', expected: '{"a": 1, "b": 2}' }, { input: '({}, {"a": 1})', expected: '{"a": 1}' }, { input: '({"a": 1}, {"a": 2})', expected: '{"a": 2}' }],
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
        examples: [{ input: '{"a": 1}, "a"', output: 'True' }, { input: '{"a": 1}, "b"', output: 'False' }],
        starterCode: `def check_key(d, k):
    # Write your code here
    pass`,
        functionName: 'check_key',
        testCases: [{ input: '({"a": 1}, "a")', expected: 'True' }, { input: '({"a": 1}, "b")', expected: 'False' }, { input: '({}, "a")', expected: 'False' }],
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
        examples: [{ input: '{"a": 1, "b": 2}', output: '3' }, { input: '{}', output: '0' }],
        starterCode: `def sum_dict_values(d):
    # Write your code here
    pass`,
        functionName: 'sum_dict_values',
        testCases: [{ input: '({"a": 1, "b": 2})', expected: '3' }, { input: '({})', expected: '0' }, { input: '({"a": -1, "b": 1})', expected: '0' }],
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
        examples: [{ input: '{"a": 1, "b": 5, "c": 3}', output: '"b"' }, { input: '{"a": 10, "b": 2}', output: '"a"' }],
        starterCode: `def max_key_by_value(d):
    # Write your code here
    pass`,
        functionName: 'max_key_by_value',
        testCases: [{ input: '({"a": 1, "b": 5, "c": 3})', expected: '"b"' }, { input: '({"a": 10, "b": 2})', expected: '"a"' }, { input: '({"a": 1})', expected: '"a"' }],
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
        examples: [{ input: '{"b": 2, "a": 1}', output: '[("a", 1), ("b", 2)]' }, { input: '{"c": 3, "a": 1}', output: '[("a", 1), ("c", 3)]' }],
        starterCode: `def sort_dict_key(d):
    # Write your code here
    pass`,
        functionName: 'sort_dict_key',
        testCases: [{ input: '({"b": 2, "a": 1})', expected: '[("a", 1), ("b", 2)]' }, { input: '({"c": 3, "a": 1})', expected: '[("a", 1), ("c", 3)]' }, { input: '({})', expected: '[]' }],
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
        examples: [{ input: '{"a": 2, "b": 1}', output: '[("b", 1), ("a", 2)]' }, { input: '{"a": 10, "b": 2}', output: '[("b", 2), ("a", 10)]' }],
        starterCode: `def sort_dict_value(d):
    # Write your code here
    pass`,
        functionName: 'sort_dict_value',
        testCases: [{ input: '({"a": 2, "b": 1})', expected: '[("b", 1), ("a", 2)]' }, { input: '({"a": 10, "b": 2})', expected: '[("b", 2), ("a", 10)]' }, { input: '({})', expected: '[]' }],
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
        examples: [{ input: '"hello world hello"', output: '{"hello": 2, "world": 1}' }, { input: '"hello"', output: '{"hello": 1}' }],
        starterCode: `def word_frequency(s):
    # Write your code here
    pass`,
        functionName: 'word_frequency',
        testCases: [{ input: '("hello world hello")', expected: '{"hello": 2, "world": 1}' }, { input: '("hello")', expected: '{"hello": 1}' }, { input: '("")', expected: '{}' }],
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
        examples: [{ input: '85', output: '"B"' }, { input: '60', output: '"F"' }],
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
        examples: [{ input: '2020', output: 'True' }, { input: '2021', output: 'False' }],
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
        examples: [{ input: '3, 4, 5', output: 'True' }, { input: '1, 1, 3', output: 'False' }],
        starterCode: `def is_valid_triangle(a, b, c):
    # Write your code here
    pass`,
        functionName: 'is_valid_triangle',
        testCases: [{ input: '(3, 4, 5)', expected: 'True' }, { input: '(1, 1, 3)', expected: 'False' }, { input: '(5, 12, 13)', expected: 'True' }],
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
        examples: [{ input: '1000, 5, 2', output: '100.0' }, { input: '5000, 10, 5', output: '2500.0' }],
        starterCode: `def simple_interest(P, R, T):
    # Write your code here
    pass`,
        functionName: 'simple_interest',
        testCases: [{ input: '(1000, 5, 2)', expected: '100.0' }, { input: '(5000, 10, 5)', expected: '2500.0' }, { input: '(100, 1, 1)', expected: '1.0' }],
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
        examples: [{ input: '1000, 5, 2', output: '102.5' }, { input: '100, 10, 1', output: '10.0' }],
        starterCode: `def compound_interest(P, R, T):
    # Write your code here
    pass`,
        functionName: 'compound_interest',
        testCases: [{ input: '(1000, 5, 2)', expected: '102.5' }, { input: '(100, 10, 1)', expected: '10.0' }, { input: '(5000, 5, 2)', expected: '512.5' }],
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
        examples: [{ input: '0', output: '32.0' }, { input: '100', output: '212.0' }],
        starterCode: `def c_to_f(c):
    # Write your code here
    pass`,
        functionName: 'c_to_f',
        testCases: [{ input: '(0)', expected: '32.0' }, { input: '(100)', expected: '212.0' }, { input: '(-40)', expected: '-40.0' }],
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
        examples: [{ input: '"line1\\nline2\\nline3"', output: '3' }, { input: '"one"', output: '1' }],
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
        examples: [{ input: '"hello world\\npython"', output: '3' }, { input: '"one"', output: '1' }],
        starterCode: `def count_words_file(content):
    # Write your code here
    pass`,
        functionName: 'count_words_file',
        testCases: [
            { input: '("hello world\\npython")', expected: '3' },
            { input: '("one")', expected: '1' },
            { input: '("")', expected: '0' }
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
        examples: [{ input: '"short\\nlonger line\\nok"', output: '"longer line"' }, { input: '"a\\nbc"', output: '"bc"' }],
        starterCode: `def find_longest_line(content):
    # Write your code here
    pass`,
        functionName: 'find_longest_line',
        testCases: [
            { input: '("short\\nlonger line\\nok")', expected: '"longer line"' },
            { input: '("a\\nbc")', expected: '"bc"' },
            { input: '("one\\ntwo\\nthree")', expected: '"three"' }
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
        examples: [{ input: '"hello world\\npython", "python"', output: 'True' }, { input: '"hello", "hi"', output: 'False' }],
        starterCode: `def search_in_file(content, word):
    # Write your code here
    pass`,
        functionName: 'search_in_file',
        testCases: [
            { input: '("hello world\\npython", "python")', expected: 'True' },
            { input: '("hello world", "java")', expected: 'False' },
            { input: '("hello", "hi")', expected: 'False' }
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
        examples: [{ input: '"hello world hello", "hello"', output: '2' }, { input: '"a a b", "a"', output: '2' }],
        starterCode: `def count_word_occurrences(content, word):
    # Write your code here
    pass`,
        functionName: 'count_word_occurrences',
        testCases: [
            { input: '("hello world hello", "hello")', expected: '2' },
            { input: '("python java python", "python")', expected: '2' },
            { input: '("a a b", "a")', expected: '2' }
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
        examples: [{ input: '"hello world\\npython"', output: '(2, 3, 19)' }, { input: '"a"', output: '(1, 1, 1)' }],
        starterCode: `def file_stats(content):
    # Write your code here
    pass`,
        functionName: 'file_stats',
        testCases: [
            { input: '("hello world\\npython")', expected: '(2, 3, 19)' },
            { input: '("test")', expected: '(1, 1, 4)' },
            { input: '("a")', expected: '(1, 1, 1)' }
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
        examples: [{ input: '"hello world\\npython\\nhello python", "python"', output: '["python", "hello python"]' }, { input: '"a\\nb\\nc", "b"', output: '["b"]' }],
        starterCode: `def filter_lines(content, keyword):
    # Write your code here
    pass`,
        functionName: 'filter_lines',
        testCases: [
            { input: '("hello world\\npython\\nhello python", "python")', expected: '["python", "hello python"]' },
            { input: '("a\\nb\\nc", "x")', expected: '[]' },
            { input: '("a\\nb\\nc", "b")', expected: '["b"]' }
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
        examples: [{ input: '"line1\\n\\nline2"', output: '"line1\\nline2"' }, { input: '"\\n\\n"', output: '""' }],
        starterCode: `def remove_empty_lines(content):
    # Write your code here
    pass`,
        functionName: 'remove_empty_lines',
        testCases: [
            { input: '("line1\\n\\nline2")', expected: '"line1\\nline2"' },
            { input: '("a\\n\\n\\nb")', expected: '"a\\nb"' },
            { input: '("\\n\\n")', expected: '""' }
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
        examples: [{ input: '"10\\n20\\n30"', output: '20.0' }, { input: '"10\\n20"', output: '15.0' }],
        starterCode: `def avg_numbers(content):
    # Write your code here
    pass`,
        functionName: 'avg_numbers',
        testCases: [
            { input: '("10\\n20\\n30")', expected: '20.0' },
            { input: '("5\\n15")', expected: '10.0' },
            { input: '("10\\n20")', expected: '15.0' }
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
        examples: [{ input: '"hello world", "world", "python"', output: '"hello python"' }, { input: '"a b", "a", "c"', output: '"c b"' }],
        starterCode: `def replace_in_file(content, old, new):
    # Write your code here
    pass`,
        functionName: 'replace_in_file',
        testCases: [
            { input: '("hello world", "world", "python")', expected: '"hello python"' },
            { input: '("test test", "test", "ok")', expected: '"ok ok"' },
            { input: '("a b", "a", "c")', expected: '"c b"' }
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
        examples: [{ input: '"first\\nsecond\\nthird"', output: '"third\\nsecond\\nfirst"' }, { input: '"a\\nb"', output: '"b\\na"' }],
        starterCode: `def reverse_lines(content):
    # Write your code here
    pass`,
        functionName: 'reverse_lines',
        testCases: [
            { input: '("first\\nsecond\\nthird")', expected: '"third\\nsecond\\nfirst"' },
            { input: '("a\\nb")', expected: '"b\\na"' },
            { input: '("a")', expected: '"a"' }
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
        examples: [{ input: '"john,25,engineer"', output: '["john", "25", "engineer"]' }, { input: '"a,b"', output: '["a", "b"]' }],
        starterCode: `def parse_csv_line(line):
    # Write your code here
    pass`,
        functionName: 'parse_csv_line',
        testCases: [
            { input: '("john,25,engineer")', expected: '["john", "25", "engineer"]' },
            { input: '("a,b,c")', expected: '["a", "b", "c"]' },
            { input: '("a,b")', expected: '["a", "b"]' }
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
        examples: [{ input: '"line1\\n\\n  \\nline2"', output: '2' }, { input: '"\\n"', output: '1' }],
        starterCode: `def count_blank_lines(content):
    # Write your code here
    pass`,
        functionName: 'count_blank_lines',
        testCases: [
            { input: '("line1\\n\\n  \\nline2")', expected: '2' },
            { input: '("a\\nb")', expected: '0' },
            { input: '("\\n")', expected: '1' }
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
        examples: [{ input: '"content1", "content2"', output: '"content1\\ncontent2"' }, { input: '"a", "b"', output: '"a\\nb"' }],
        starterCode: `def merge_contents(content1, content2):
    # Write your code here
    pass`,
        functionName: 'merge_contents',
        testCases: [
            { input: '("content1", "content2")', expected: '"content1\\ncontent2"' },
            { input: '("a", "b")', expected: '"a\\nb"' },
            { input: '("a", "")', expected: '"a\\n"' }
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
        examples: [{ input: '"price is 100 and quantity is 5"', output: '[100, 5]' }, { input: '"1 2"', output: '[1, 2]' }],
        starterCode: `def extract_numbers(content):
    # Write your code here
    pass`,
        functionName: 'extract_numbers',
        testCases: [
            { input: '("price is 100 and quantity is 5")', expected: '[100, 5]' },
            { input: '("no numbers here")', expected: '[]' },
            { input: '("1 2")', expected: '[1, 2]' }
        ],
        hint: 'Use regex or check if word.isdigit().'
    }
];

