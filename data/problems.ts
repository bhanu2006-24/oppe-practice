import { Problem } from '../types';

export const PROBLEMS: Problem[] = [
  // ==========================================
  // SUBJECT: PROGRAMMING IN PYTHON
  // ==========================================
  
  // --- PYTHON OPPE 1 ---
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

  // --- PYTHON OPPE 2 ---
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

  // ==========================================
  // SUBJECT: PDSA (Programming Data Structures & Algorithms)
  // ==========================================

  // --- PDSA OPPE 1 ---
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
  },

  // --- PDSA OPPE 2 ---
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
  },

  // ==========================================
  // SUBJECT: DBMS (SQL Simulation in Python)
  // ==========================================

  // --- DBMS OPPE 1 ---
  {
    id: 'dbms-oppe1-where',
    title: 'SQL: SELECT WHERE',
    subject: 'DBMS',
    examLevel: 'OPPE 1',
    difficulty: 'Easy',
    description: `Simulate: SELECT name FROM users WHERE age >= 18 AND country = 'India'.
    
    Input: List of dictionaries. Output: List of names (strings).`,
    examples: [
      { input: '[{"name":"A","age":20,"country":"India"}, {"name":"B","age":17,"country":"India"}]', output: '["A"]' }
    ],
    starterCode: `def filter_users(users):
    # Write your code here
    pass`,
    functionName: 'filter_users',
    testCases: [
      { input: '([{"name":"A","age":20,"country":"India"}, {"name":"B","age":17,"country":"India"}, {"name":"C","age":22,"country":"US"}])', expected: '["A"]' }
    ],
    hint: 'List comprehension: [u["name"] for u in users if ...]'
  },
  {
    id: 'dbms-oppe1-agg',
    title: 'SQL: AVG Aggregation',
    subject: 'DBMS',
    examLevel: 'OPPE 1',
    difficulty: 'Easy',
    description: `Simulate: SELECT AVG(salary) FROM employees.
    
    Input: List of dicts. Return float. Return 0 if list is empty.`,
    examples: [
      { input: '[{"salary": 100}, {"salary": 200}]', output: '150.0' }
    ],
    starterCode: `def avg_salary(employees):
    # Write your code here
    pass`,
    functionName: 'avg_salary',
    testCases: [
      { input: '([{"salary": 100}, {"salary": 200}])', expected: '150.0' },
      { input: '([])', expected: '0' }
    ],
    hint: 'Sum the salaries and divide by len(employees).'
  },
  {
    id: 'dbms-oppe1-update',
    title: 'SQL: UPDATE',
    subject: 'DBMS',
    examLevel: 'OPPE 1',
    difficulty: 'Medium',
    description: `Simulate: UPDATE products SET price = price * 0.9 WHERE category = 'Electronics'.
    
    Modify the list in-place and return the list.`,
    examples: [
      { input: '[{"cat":"Electronics", "price":100}]', output: '[{"cat":"Electronics", "price":90.0}]' }
    ],
    starterCode: `def update_prices(products):
    # Write your code here
    pass`,
    functionName: 'update_prices',
    testCases: [
      { input: '([{"cat":"Electronics", "price":100}, {"cat":"Books", "price":50}])', expected: '[{"cat": "Electronics", "price": 90.0}, {"cat": "Books", "price": 50}]' }
    ],
    hint: 'Iterate loops and modify dictionary values directly.'
  },

  // --- DBMS OPPE 2 ---
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
  },

  // ==========================================
  // SUBJECT: ML PRACTICE
  // ==========================================

  // --- MLP OPPE 1 ---
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
  },

  // --- MLP OPPE 2 ---
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