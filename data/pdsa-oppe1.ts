import { Problem } from '../types';

export const PDSA_OPPE1_PROBLEMS: Problem[] = [
    // --- EXISTING PROBLEMS ---
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

    // --- NEW PROBLEMS (50) ---

    // 1. Linear Search
    {
        id: 'pdsa-oppe1-linear-search',
        title: 'Linear Search',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'linear_search' that returns the index of x in L, or -1 if not found.`,
        examples: [{ input: '[1, 2, 3], 2', output: '1' }],
        starterCode: `def linear_search(L, x):
    # Write your code here
    pass`,
        functionName: 'linear_search',
        testCases: [{ input: '([1, 2, 3], 2)', expected: '1' }, { input: '([1, 2], 3)', expected: '-1' }],
        hint: 'Iterate through the list.'
    },
    // 2. Binary Search Iterative
    {
        id: 'pdsa-oppe1-bin-search-iter',
        title: 'Iterative Binary Search',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'binary_search_iter' that implements binary search iteratively.`,
        examples: [{ input: '[1, 3, 5], 3', output: '1' }],
        starterCode: `def binary_search_iter(L, x):
    # Write your code here
    pass`,
        functionName: 'binary_search_iter',
        testCases: [{ input: '([1, 3, 5], 3)', expected: '1' }, { input: '([1, 3, 5], 2)', expected: '-1' }],
        hint: 'While low <= high.'
    },
    // 3. Bubble Sort
    {
        id: 'pdsa-oppe1-bubble-sort',
        title: 'Bubble Sort',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Implement Bubble Sort to sort a list in ascending order.`,
        examples: [{ input: '[3, 2, 1]', output: '[1, 2, 3]' }],
        starterCode: `def bubble_sort(L):
    # Write your code here
    return L`,
        functionName: 'bubble_sort',
        testCases: [{ input: '([3, 2, 1])', expected: '[1, 2, 3]' }],
        hint: 'Nested loops, swap if L[j] > L[j+1].'
    },
    // 4. Selection Sort
    {
        id: 'pdsa-oppe1-selection-sort',
        title: 'Selection Sort',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Implement Selection Sort.`,
        examples: [{ input: '[3, 1, 2]', output: '[1, 2, 3]' }],
        starterCode: `def selection_sort(L):
    # Write your code here
    return L`,
        functionName: 'selection_sort',
        testCases: [{ input: '([3, 1, 2])', expected: '[1, 2, 3]' }],
        hint: 'Find min in unsorted part and swap.'
    },
    // 5. Insertion Sort
    {
        id: 'pdsa-oppe1-insertion-sort',
        title: 'Insertion Sort',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Implement Insertion Sort.`,
        examples: [{ input: '[3, 1, 2]', output: '[1, 2, 3]' }],
        starterCode: `def insertion_sort(L):
    # Write your code here
    return L`,
        functionName: 'insertion_sort',
        testCases: [{ input: '([3, 1, 2])', expected: '[1, 2, 3]' }],
        hint: 'Insert element into sorted sublist.'
    },
    // 6. Check Sorted Recursively
    {
        id: 'pdsa-oppe1-is-sorted-rec',
        title: 'Recursive Check Sorted',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a recursive function 'is_sorted_rec' to check if a list is sorted.`,
        examples: [{ input: '[1, 2, 3]', output: 'True' }],
        starterCode: `def is_sorted_rec(L):
    # Write your code here
    pass`,
        functionName: 'is_sorted_rec',
        testCases: [{ input: '([1, 2, 3])', expected: 'True' }, { input: '([1, 3, 2])', expected: 'False' }],
        hint: 'L[0] <= L[1] and f(L[1:]).'
    },
    // 7. Stack Implementation (List)
    {
        id: 'pdsa-oppe1-stack-ops',
        title: 'Stack Operations',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Simulate a stack. Given a list of operations ["push 1", "pop", "push 2"], return the final stack state.`,
        examples: [{ input: '["push 1", "push 2", "pop"]', output: '[1]' }],
        starterCode: `def stack_ops(ops):
    stack = []
    # Write your code here
    return stack`,
        functionName: 'stack_ops',
        testCases: [{ input: '(["push 1", "push 2", "pop"])', expected: '[1]' }],
        hint: 'Use append and pop.'
    },
    // 8. Queue Implementation (List)
    {
        id: 'pdsa-oppe1-queue-ops',
        title: 'Queue Operations',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Simulate a queue. Operations: "enqueue x", "dequeue". Return final queue.`,
        examples: [{ input: '["enqueue 1", "enqueue 2", "dequeue"]', output: '[2]' }],
        starterCode: `def queue_ops(ops):
    queue = []
    # Write your code here
    return queue`,
        functionName: 'queue_ops',
        testCases: [{ input: '(["enqueue 1", "enqueue 2", "dequeue"])', expected: '[2]' }],
        hint: 'Use append and pop(0).'
    },
    // 9. Reverse List Recursive
    {
        id: 'pdsa-oppe1-rev-list-rec',
        title: 'Recursive List Reverse',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a recursive function 'reverse_list' to reverse a list.`,
        examples: [{ input: '[1, 2, 3]', output: '[3, 2, 1]' }],
        starterCode: `def reverse_list(L):
    # Write your code here
    pass`,
        functionName: 'reverse_list',
        testCases: [{ input: '([1, 2, 3])', expected: '[3, 2, 1]' }],
        hint: 'f(L[1:]) + [L[0]].'
    },
    // 10. Factorial Recursive
    {
        id: 'pdsa-oppe1-fact-rec',
        title: 'Recursive Factorial',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Recursive factorial.`,
        examples: [{ input: '5', output: '120' }],
        starterCode: `def factorial(n):
    # Write your code here
    pass`,
        functionName: 'factorial',
        testCases: [{ input: '(5)', expected: '120' }],
        hint: 'n * f(n-1).'
    },
    // 11. Fibonacci Recursive
    {
        id: 'pdsa-oppe1-fib-rec',
        title: 'Recursive Fibonacci',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Recursive nth Fibonacci number.`,
        examples: [{ input: '5', output: '5' }],
        starterCode: `def fib(n):
    # Write your code here
    pass`,
        functionName: 'fib',
        testCases: [{ input: '(5)', expected: '5' }],
        hint: 'f(n-1) + f(n-2).'
    },
    // 12. GCD Recursive
    {
        id: 'pdsa-oppe1-gcd-rec',
        title: 'Recursive GCD',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Recursive GCD.`,
        examples: [{ input: '12, 18', output: '6' }],
        starterCode: `def gcd(a, b):
    # Write your code here
    pass`,
        functionName: 'gcd',
        testCases: [{ input: '(12, 18)', expected: '6' }],
        hint: 'gcd(b, a%b).'
    },
    // 13. Tower of Hanoi
    {
        id: 'pdsa-oppe1-hanoi',
        title: 'Tower of Hanoi Moves',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Return number of moves for n disks.`,
        examples: [{ input: '3', output: '7' }],
        starterCode: `def hanoi_moves(n):
    # Write your code here
    pass`,
        functionName: 'hanoi_moves',
        testCases: [{ input: '(3)', expected: '7' }, { input: '(1)', expected: '1' }],
        hint: '2^n - 1 or 2*f(n-1) + 1.'
    },
    // 14. Linked List: Count Nodes
    {
        id: 'pdsa-oppe1-ll-count',
        title: 'Linked List Count',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given a list of values representing a linked list, return count. (Simulated with list for simplicity or assume Node class provided in context - here we simulate logic).
    Actually, let's stick to list manipulation that mimics LL logic or standard Python problems for PDSA.
    Problem: Count occurrences of x in L recursively.`,
        examples: [{ input: '[1, 2, 1], 1', output: '2' }],
        starterCode: `def count_rec(L, x):
    # Write your code here
    pass`,
        functionName: 'count_rec',
        testCases: [{ input: '([1, 2, 1], 1)', expected: '2' }],
        hint: '(1 if L[0]==x else 0) + f(L[1:]).'
    },
    // 15. Search in Rotated Sorted Array
    {
        id: 'pdsa-oppe1-search-rotated',
        title: 'Search Rotated Array',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Search x in rotated sorted array.`,
        examples: [{ input: '[4,5,6,7,0,1,2], 0', output: '4' }],
        starterCode: `def search_rotated(nums, target):
    # Write your code here
    pass`,
        functionName: 'search_rotated',
        testCases: [{ input: '([4,5,6,7,0,1,2], 0)', expected: '4' }],
        hint: 'Modified binary search.'
    },
    // 16. First Bad Version
    {
        id: 'pdsa-oppe1-first-bad',
        title: 'First Bad Version',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Find first bad version [False, False, True, True]. Return index.`,
        examples: [{ input: '[False, False, True]', output: '2' }],
        starterCode: `def first_bad_version(versions):
    # Write your code here
    pass`,
        functionName: 'first_bad_version',
        testCases: [{ input: '([False, False, True])', expected: '2' }],
        hint: 'Binary search for first True.'
    },
    // 17. Two Sum (Sorted)
    {
        id: 'pdsa-oppe1-two-sum-sorted',
        title: 'Two Sum (Sorted)',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Find indices of two numbers adding to target in sorted array.`,
        examples: [{ input: '[2, 7, 11, 15], 9', output: '[0, 1]' }],
        starterCode: `def two_sum_sorted(numbers, target):
    # Write your code here
    pass`,
        functionName: 'two_sum_sorted',
        testCases: [{ input: '([2, 7, 11, 15], 9)', expected: '[0, 1]' }],
        hint: 'Two pointers.'
    },
    // 18. Remove Element
    {
        id: 'pdsa-oppe1-remove-elem',
        title: 'Remove Element',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Remove all val from nums in-place, return new length. (Simulate return list).`,
        examples: [{ input: '[3, 2, 2, 3], 3', output: '[2, 2]' }],
        starterCode: `def remove_element(nums, val):
    # Write your code here
    return [x for x in nums if x != val]`,
        functionName: 'remove_element',
        testCases: [{ input: '([3, 2, 2, 3], 3)', expected: '[2, 2]' }],
        hint: 'List comprehension.'
    },
    // 19. Search Insert Position
    {
        id: 'pdsa-oppe1-search-insert',
        title: 'Search Insert Position',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Return index where target should be inserted to maintain order.`,
        examples: [{ input: '[1, 3, 5, 6], 5', output: '2' }],
        starterCode: `def search_insert(nums, target):
    # Write your code here
    pass`,
        functionName: 'search_insert',
        testCases: [{ input: '([1, 3, 5, 6], 5)', expected: '2' }, { input: '([1, 3, 5, 6], 2)', expected: '1' }],
        hint: 'Binary search.'
    },
    // 20. Max Subarray Sum
    {
        id: 'pdsa-oppe1-max-subarray',
        title: 'Max Subarray Sum',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Find contiguous subarray with largest sum.`,
        examples: [{ input: '[-2, 1, -3, 4, -1, 2, 1, -5, 4]', output: '6' }],
        starterCode: `def max_sub_array(nums):
    # Write your code here
    pass`,
        functionName: 'max_sub_array',
        testCases: [{ input: '([-2, 1, -3, 4, -1, 2, 1, -5, 4])', expected: '6' }],
        hint: 'Kadane\'s Algorithm.'
    },
    // 21. Merge Intervals
    {
        id: 'pdsa-oppe1-merge-intervals',
        title: 'Merge Intervals',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Merge overlapping intervals.`,
        examples: [{ input: '[[1,3],[2,6]]', output: '[[1, 6]]' }],
        starterCode: `def merge(intervals):
    # Write your code here
    pass`,
        functionName: 'merge',
        testCases: [{ input: '([[1,3],[2,6]])', expected: '[[1, 6]]' }],
        hint: 'Sort and merge.'
    },
    // 22. Climbing Stairs
    {
        id: 'pdsa-oppe1-climbing-stairs',
        title: 'Climbing Stairs',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Count ways to climb n stairs taking 1 or 2 steps.`,
        examples: [{ input: '2', output: '2' }],
        starterCode: `def climb_stairs(n):
    # Write your code here
    pass`,
        functionName: 'climb_stairs',
        testCases: [{ input: '(2)', expected: '2' }, { input: '(3)', expected: '3' }],
        hint: 'Fibonacci.'
    },
    // 23. Pascal's Triangle
    {
        id: 'pdsa-oppe1-pascals',
        title: 'Pascal\'s Triangle',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Generate first n rows of Pascal's triangle.`,
        examples: [{ input: '1', output: '[[1]]' }],
        starterCode: `def generate_pascal(numRows):
    # Write your code here
    pass`,
        functionName: 'generate_pascal',
        testCases: [{ input: '(1)', expected: '[[1]]' }],
        hint: 'DP.'
    },
    // 24. Best Time to Buy/Sell Stock
    {
        id: 'pdsa-oppe1-stock',
        title: 'Buy/Sell Stock',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Max profit from one transaction.`,
        examples: [{ input: '[7, 1, 5, 3, 6, 4]', output: '5' }],
        starterCode: `def max_profit(prices):
    # Write your code here
    pass`,
        functionName: 'max_profit',
        testCases: [{ input: '([7, 1, 5, 3, 6, 4])', expected: '5' }],
        hint: 'Track min price and max profit.'
    },
    // 25. Single Number
    {
        id: 'pdsa-oppe1-single-number',
        title: 'Single Number',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Find the element that appears only once (others twice).`,
        examples: [{ input: '[2, 2, 1]', output: '1' }],
        starterCode: `def single_number(nums):
    # Write your code here
    pass`,
        functionName: 'single_number',
        testCases: [{ input: '([2, 2, 1])', expected: '1' }],
        hint: 'XOR all elements.'
    },
    // 26. Linked List Cycle (Simulated)
    {
        id: 'pdsa-oppe1-ll-cycle',
        title: 'Detect Cycle (Simulated)',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given list of indices [next_ptr_index], return True if cycle exists. Start at 0.`,
        examples: [{ input: '[1, 2, 0]', output: 'True' }],
        starterCode: `def has_cycle(next_ptrs):
    # Write your code here
    pass`,
        functionName: 'has_cycle',
        testCases: [{ input: '([1, 2, 0])', expected: 'True' }, { input: '([1, -1])', expected: 'False' }],
        hint: 'Visited set or Floyd\'s cycle finding.'
    },
    // 27. Min Stack (Simulated)
    {
        id: 'pdsa-oppe1-min-stack',
        title: 'Min Stack',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Simulate stack that supports getMin. Ops: push x, pop, getMin.`,
        examples: [{ input: '["push -2", "push 0", "push -3", "getMin"]', output: '-3' }],
        starterCode: `def min_stack_ops(ops):
    stack = []
    # Write your code here
    pass`,
        functionName: 'min_stack_ops',
        testCases: [{ input: '(["push -2", "push 0", "push -3", "getMin"])', expected: '-3' }],
        hint: 'Use auxiliary stack for mins.'
    },
    // 28. Intersection of Two Linked Lists (Simulated)
    {
        id: 'pdsa-oppe1-ll-intersect',
        title: 'LL Intersection (Simulated)',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Find intersection of two lists (common suffix).`,
        examples: [{ input: '[1, 2, 3], [4, 3]', output: '[3]' }],
        starterCode: `def get_intersection_node(listA, listB):
    # Write your code here
    pass`,
        functionName: 'get_intersection_node',
        testCases: [{ input: '([1, 2, 3], [4, 3])', expected: '[3]' }],
        hint: 'Align lengths or use set.'
    },
    // 29. Majority Element (Boyer-Moore)
    {
        id: 'pdsa-oppe1-majority',
        title: 'Majority Element',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Find element > n/2 times.`,
        examples: [{ input: '[3, 2, 3]', output: '3' }],
        starterCode: `def majority_element(nums):
    # Write your code here
    pass`,
        functionName: 'majority_element',
        testCases: [{ input: '([3, 2, 3])', expected: '3' }],
        hint: 'Boyer-Moore Voting.'
    },
    // 30. Reverse Bits
    {
        id: 'pdsa-oppe1-reverse-bits',
        title: 'Reverse Bits',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Reverse bits of a 32-bit integer.`,
        examples: [{ input: '43261596', output: '964176192' }],
        starterCode: `def reverse_bits(n):
    # Write your code here
    pass`,
        functionName: 'reverse_bits',
        testCases: [{ input: '(43261596)', expected: '964176192' }],
        hint: 'Bit manipulation.'
    },
    // 31. Number of 1 Bits
    {
        id: 'pdsa-oppe1-hamming-weight',
        title: 'Number of 1 Bits',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Count set bits.`,
        examples: [{ input: '11', output: '3' }],
        starterCode: `def hammingWeight(n):
    # Write your code here
    pass`,
        functionName: 'hammingWeight',
        testCases: [{ input: '(11)', expected: '3' }],
        hint: 'bin(n).count("1").'
    },
    // 32. Power of Two
    {
        id: 'pdsa-oppe1-power-two',
        title: 'Power of Two',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Check if n is power of two.`,
        examples: [{ input: '16', output: 'True' }],
        starterCode: `def isPowerOfTwo(n):
    # Write your code here
    pass`,
        functionName: 'isPowerOfTwo',
        testCases: [{ input: '(16)', expected: 'True' }],
        hint: 'n > 0 and (n & (n-1)) == 0.'
    },
    // 33. Palindrome Linked List (Simulated)
    {
        id: 'pdsa-oppe1-ll-palindrome',
        title: 'Palindrome List',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Check if list is palindrome.`,
        examples: [{ input: '[1, 2, 2, 1]', output: 'True' }],
        starterCode: `def isPalindrome(head):
    # Write your code here
    pass`,
        functionName: 'isPalindrome',
        testCases: [{ input: '([1, 2, 2, 1])', expected: 'True' }],
        hint: 'L == L[::-1].'
    },
    // 34. Move Zeroes
    {
        id: 'pdsa-oppe1-move-zeroes',
        title: 'Move Zeroes',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Move zeroes to end.`,
        examples: [{ input: '[0, 1, 0, 3, 12]', output: '[1, 3, 12, 0, 0]' }],
        starterCode: `def moveZeroes(nums):
    # Write your code here
    return nums`,
        functionName: 'moveZeroes',
        testCases: [{ input: '([0, 1, 0, 3, 12])', expected: '[1, 3, 12, 0, 0]' }],
        hint: 'Two pointers.'
    },
    // 35. Nim Game
    {
        id: 'pdsa-oppe1-nim-game',
        title: 'Nim Game',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Can you win Nim game starting with n stones? (1-3 stones per turn).`,
        examples: [{ input: '4', output: 'False' }],
        starterCode: `def canWinNim(n):
    # Write your code here
    pass`,
        functionName: 'canWinNim',
        testCases: [{ input: '(4)', expected: 'False' }],
        hint: 'n % 4 != 0.'
    },
    // 36. Reverse String
    {
        id: 'pdsa-oppe1-reverse-string',
        title: 'Reverse String',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Reverse string in-place (return new string).`,
        examples: [{ input: '"hello"', output: '"olleh"' }],
        starterCode: `def reverseString(s):
    # Write your code here
    pass`,
        functionName: 'reverseString',
        testCases: [{ input: '("hello")', expected: '"olleh"' }],
        hint: 's[::-1].'
    },
    // 37. Intersection of Two Arrays
    {
        id: 'pdsa-oppe1-intersection',
        title: 'Intersection of Arrays',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Unique intersection.`,
        examples: [{ input: '[1, 2, 2, 1], [2, 2]', output: '[2]' }],
        starterCode: `def intersection(nums1, nums2):
    # Write your code here
    pass`,
        functionName: 'intersection',
        testCases: [{ input: '([1, 2, 2, 1], [2, 2])', expected: '[2]' }],
        hint: 'list(set(nums1) & set(nums2)).'
    },
    // 38. Valid Perfect Square
    {
        id: 'pdsa-oppe1-perfect-square',
        title: 'Valid Perfect Square',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Check if num is perfect square without sqrt.`,
        examples: [{ input: '16', output: 'True' }],
        starterCode: `def isPerfectSquare(num):
    # Write your code here
    pass`,
        functionName: 'isPerfectSquare',
        testCases: [{ input: '(16)', expected: 'True' }],
        hint: 'Binary search.'
    },
    // 39. Fizz Buzz
    {
        id: 'pdsa-oppe1-fizz-buzz',
        title: 'Fizz Buzz',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Return list of strings 1 to n. Fizz for 3, Buzz for 5, FizzBuzz for 15.`,
        examples: [{ input: '3', output: '["1", "2", "Fizz"]' }],
        starterCode: `def fizzBuzz(n):
    # Write your code here
    pass`,
        functionName: 'fizzBuzz',
        testCases: [{ input: '(3)', expected: '["1", "2", "Fizz"]' }],
        hint: 'Modulo operator.'
    },
    // 40. Third Maximum Number
    {
        id: 'pdsa-oppe1-third-max',
        title: 'Third Maximum',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Return 3rd max. If not exist, return max.`,
        examples: [{ input: '[3, 2, 1]', output: '1' }],
        starterCode: `def thirdMax(nums):
    # Write your code here
    pass`,
        functionName: 'thirdMax',
        testCases: [{ input: '([3, 2, 1])', expected: '1' }, { input: '([1, 2])', expected: '2' }],
        hint: 'Use set to remove dups.'
    },
    // 41. Add Strings
    {
        id: 'pdsa-oppe1-add-strings',
        title: 'Add Strings',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Add two non-negative integers as strings.`,
        examples: [{ input: '"11", "123"', output: '"134"' }],
        starterCode: `def addStrings(num1, num2):
    # Write your code here
    pass`,
        functionName: 'addStrings',
        testCases: [{ input: '("11", "123")', expected: '"134"' }],
        hint: 'Convert to int or column addition.'
    },
    // 42. Arranging Coins
    {
        id: 'pdsa-oppe1-coins',
        title: 'Arranging Coins',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `kth row has k coins. How many full rows with n coins?`,
        examples: [{ input: '5', output: '2' }],
        starterCode: `def arrangeCoins(n):
    # Write your code here
    pass`,
        functionName: 'arrangeCoins',
        testCases: [{ input: '(5)', expected: '2' }],
        hint: 'Solve k(k+1)/2 <= n.'
    },
    // 43. Find All Numbers Disappeared
    {
        id: 'pdsa-oppe1-disappeared',
        title: 'Disappeared Numbers',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Find numbers 1..n missing from array.`,
        examples: [{ input: '[4,3,2,7,8,2,3,1]', output: '[5, 6]' }],
        starterCode: `def findDisappearedNumbers(nums):
    # Write your code here
    pass`,
        functionName: 'findDisappearedNumbers',
        testCases: [{ input: '([4,3,2,7,8,2,3,1])', expected: '[5, 6]' }],
        hint: 'set(range(1, len(nums)+1)) - set(nums).'
    },
    // 44. Hamming Distance
    {
        id: 'pdsa-oppe1-hamming-dist',
        title: 'Hamming Distance',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Number of positions where bits differ.`,
        examples: [{ input: '1, 4', output: '2' }],
        starterCode: `def hammingDistance(x, y):
    # Write your code here
    pass`,
        functionName: 'hammingDistance',
        testCases: [{ input: '(1, 4)', expected: '2' }],
        hint: 'bin(x ^ y).count("1").'
    },
    // 45. Max Consecutive Ones
    {
        id: 'pdsa-oppe1-max-ones',
        title: 'Max Consecutive Ones',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Max consecutive 1s in binary array.`,
        examples: [{ input: '[1,1,0,1,1,1]', output: '3' }],
        starterCode: `def findMaxConsecutiveOnes(nums):
    # Write your code here
    pass`,
        functionName: 'findMaxConsecutiveOnes',
        testCases: [{ input: '([1,1,0,1,1,1])', expected: '3' }],
        hint: 'Iterate and count.'
    },
    // 46. Next Greater Element I
    {
        id: 'pdsa-oppe1-next-greater',
        title: 'Next Greater Element',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Find next greater element for subset nums1 in nums2.`,
        examples: [{ input: '[4,1,2], [1,3,4,2]', output: '[-1, 3, -1]' }],
        starterCode: `def nextGreaterElement(nums1, nums2):
    # Write your code here
    pass`,
        functionName: 'nextGreaterElement',
        testCases: [{ input: '([4,1,2], [1,3,4,2])', expected: '[-1, 3, -1]' }],
        hint: 'Stack and map.'
    },
    // 47. Keyboard Row
    {
        id: 'pdsa-oppe1-keyboard-row',
        title: 'Keyboard Row',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Return words that can be typed using one row of keyboard.`,
        examples: [{ input: '["Hello", "Alaska", "Dad", "Peace"]', output: '["Alaska", "Dad"]' }],
        starterCode: `def findWords(words):
    # Write your code here
    pass`,
        functionName: 'findWords',
        testCases: [{ input: '(["Hello", "Alaska", "Dad", "Peace"])', expected: '["Alaska", "Dad"]' }],
        hint: 'Set intersection with row sets.'
    },
    // 48. Reverse Words in String III
    {
        id: 'pdsa-oppe1-rev-words-iii',
        title: 'Reverse Words III',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Reverse each word in sentence.`,
        examples: [{ input: '"Let\'s take LeetCode contest"', output: '"s\'teL ekat edoCteeL tsetnoc"' }],
        starterCode: `def reverseWords(s):
    # Write your code here
    pass`,
        functionName: 'reverseWords',
        testCases: [{ input: '("Let\'s take LeetCode contest")', expected: '"s\'teL ekat edoCteeL tsetnoc"' }],
        hint: 'Split, reverse each, join.'
    },
    // 49. Matrix Reshape
    {
        id: 'pdsa-oppe1-reshape',
        title: 'Reshape Matrix',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Reshape m x n matrix to r x c.`,
        examples: [{ input: '[[1,2],[3,4]], 1, 4', output: '[[1, 2, 3, 4]]' }],
        starterCode: `def matrixReshape(mat, r, c):
    # Write your code here
    pass`,
        functionName: 'matrixReshape',
        testCases: [{ input: '([[1,2],[3,4]], 1, 4)', expected: '[[1, 2, 3, 4]]' }],
        hint: 'Flatten and reconstruct.'
    },
    // 50. Distribute Candies
    {
        id: 'pdsa-oppe1-candies',
        title: 'Distribute Candies',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Max types of candies sister can get (n/2).`,
        examples: [{ input: '[1,1,2,2,3,3]', output: '3' }],
        starterCode: `def distributeCandies(candyType):
    # Write your code here
    pass`,
        functionName: 'distributeCandies',
        testCases: [{ input: '([1,1,2,2,3,3])', expected: '3' }],
        hint: 'min(len(set(candyType)), len(candyType)//2).'
    }
];
