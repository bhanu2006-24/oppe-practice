import { Problem } from '../types';

export const PDSA_OPPE1_PROBLEMS: Problem[] = [
    // --- EXISTING PROBLEMS ---
    {
        id: 'pdsa-oppe1-binary-search',
        title: 'Recursive Binary Search',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Implement a recursive binary search function 'binary_search' that takes a sorted list 'L', a target value 'x', and optional 'low' and 'high' indices. Return the index of 'x' in 'L' if found, otherwise return -1.`,
        examples: [
            { input: 'L=[1, 3, 5, 7], x=3', output: '1' },
            { input: 'L=[1, 3, 5, 7], x=2', output: '-1' }
        ],
        starterCode: `def binary_search(L, x, low=0, high=None):
    if high is None: high = len(L) - 1
    # Write your code here
    pass`,
        functionName: 'binary_search',
        testCases: [
            { input: '([1, 3, 5, 7], 3)', expected: '1' },
            { input: '([1, 3, 5, 7], 2)', expected: '-1' },
            { input: '([5], 5)', expected: '0' },
            { input: '([1, 2, 3], 4)', expected: '-1' }
        ],
        hint: 'Base case: if low > high return -1. Else compare mid.'
    },
    {
        id: 'pdsa-oppe1-valid-parens',
        title: 'Valid Parentheses',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.`,
        examples: [
            { input: '"()[]{}"', output: 'True' },
            { input: '"(]"', output: 'False' }
        ],
        starterCode: `def is_valid(s):
    # Write your code here
    pass`,
        functionName: 'is_valid',
        testCases: [
            { input: '("()")', expected: 'True' },
            { input: '("([)]")', expected: 'False' },
            { input: '("{[]}")', expected: 'True' },
            { input: '("]")', expected: 'False' }
        ],
        hint: 'Push opening brackets to stack. For closing brackets, check if stack top matches.'
    },
    {
        id: 'pdsa-oppe1-find-peak',
        title: 'Find Peak Element',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks. You may imagine that nums[-1] = nums[n] = -∞.`,
        examples: [
            { input: '[1,2,3,1]', output: '2' },
            { input: '[1,2,1,3,5,6,4]', output: '5' }
        ],
        starterCode: `def find_peak(nums):
    # Write your code here
    pass`,
        functionName: 'find_peak',
        testCases: [
            { input: '([1,2,3,1])', expected: '2' },
            { input: '([1,2,1,3,5,6,4])', expected: '5' }, // Could be 1 or 5, but usually test cases expect specific if deterministic or any valid
            { input: '([1])', expected: '0' }
        ],
        hint: 'You can do this in O(log n) using binary search logic.'
    },
    {
        id: 'pdsa-oppe1-merge-sorted',
        title: 'Merge Sorted Arrays',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'merge_arrays' that takes two sorted lists nums1 and nums2 and returns a single sorted list containing all elements from both lists.`,
        examples: [
            { input: 'n1=[1,2,3], n2=[2,5,6]', output: '[1,2,2,3,5,6]' },
            { input: 'n1=[], n2=[1]', output: '[1]' }
        ],
        starterCode: `def merge_arrays(nums1, nums2):
    # Write your code here
    pass`,
        functionName: 'merge_arrays',
        testCases: [
            { input: '([1,2,3], [2,5,6])', expected: '[1, 2, 2, 3, 5, 6]' },
            { input: '([], [1])', expected: '[1]' },
            { input: '([1], [])', expected: '[1]' },
            { input: '([1, 5], [2, 4])', expected: '[1, 2, 4, 5]' }
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
        description: `Write a function 'linear_search' that takes a list L and a target x. Return the index of x in L if it exists, otherwise return -1.`,
        examples: [
            { input: '[1, 2, 3], 2', output: '1' },
            { input: '[1, 2, 3], 4', output: '-1' }
        ],
        starterCode: `def linear_search(L, x):
    # Write your code here
    pass`,
        functionName: 'linear_search',
        testCases: [
            { input: '([1, 2, 3], 2)', expected: '1' },
            { input: '([1, 2], 3)', expected: '-1' },
            { input: '([5, 1, 2], 5)', expected: '0' }
        ],
        hint: 'Iterate through the list.'
    },
    // 2. Binary Search Iterative
    {
        id: 'pdsa-oppe1-bin-search-iter',
        title: 'Iterative Binary Search',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'binary_search_iter' that implements binary search iteratively on a sorted list L to find target x. Return index if found, else -1.`,
        examples: [
            { input: '[1, 3, 5], 3', output: '1' },
            { input: '[1, 3, 5], 2', output: '-1' }
        ],
        starterCode: `def binary_search_iter(L, x):
    # Write your code here
    pass`,
        functionName: 'binary_search_iter',
        testCases: [
            { input: '([1, 3, 5], 3)', expected: '1' },
            { input: '([1, 3, 5], 2)', expected: '-1' },
            { input: '([10], 10)', expected: '0' }
        ],
        hint: 'While low <= high.'
    },
    // 3. Bubble Sort
    {
        id: 'pdsa-oppe1-bubble-sort',
        title: 'Bubble Sort',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Implement Bubble Sort to sort a list of numbers in ascending order. The function should return the sorted list.`,
        examples: [
            { input: '[3, 2, 1]', output: '[1, 2, 3]' },
            { input: '[1, 2, 3]', output: '[1, 2, 3]' }
        ],
        starterCode: `def bubble_sort(L):
    # Write your code here
    return L`,
        functionName: 'bubble_sort',
        testCases: [
            { input: '([3, 2, 1])', expected: '[1, 2, 3]' },
            { input: '([5, 1, 4, 2, 8])', expected: '[1, 2, 4, 5, 8]' },
            { input: '([])', expected: '[]' }
        ],
        hint: 'Nested loops, swap if L[j] > L[j+1].'
    },
    // 4. Selection Sort
    {
        id: 'pdsa-oppe1-selection-sort',
        title: 'Selection Sort',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Implement Selection Sort to sort a list of numbers in ascending order. Return the sorted list.`,
        examples: [
            { input: '[3, 1, 2]', output: '[1, 2, 3]' },
            { input: '[5, 4, 3, 2, 1]', output: '[1, 2, 3, 4, 5]' }
        ],
        starterCode: `def selection_sort(L):
    # Write your code here
    return L`,
        functionName: 'selection_sort',
        testCases: [
            { input: '([3, 1, 2])', expected: '[1, 2, 3]' },
            { input: '([10, 5, 2])', expected: '[2, 5, 10]' },
            { input: '([1])', expected: '[1]' }
        ],
        hint: 'Find min in unsorted part and swap.'
    },
    // 5. Insertion Sort
    {
        id: 'pdsa-oppe1-insertion-sort',
        title: 'Insertion Sort',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Implement Insertion Sort to sort a list of numbers in ascending order. Return the sorted list.`,
        examples: [
            { input: '[3, 1, 2]', output: '[1, 2, 3]' },
            { input: '[4, 3, 2, 10, 12, 1, 5, 6]', output: '[1, 2, 3, 4, 5, 6, 10, 12]' }
        ],
        starterCode: `def insertion_sort(L):
    # Write your code here
    return L`,
        functionName: 'insertion_sort',
        testCases: [
            { input: '([3, 1, 2])', expected: '[1, 2, 3]' },
            { input: '([2, 1])', expected: '[1, 2]' },
            { input: '([1, 2, 3])', expected: '[1, 2, 3]' }
        ],
        hint: 'Insert element into sorted sublist.'
    },
    // 6. Check Sorted Recursively
    {
        id: 'pdsa-oppe1-is-sorted-rec',
        title: 'Recursive Check Sorted',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a recursive function 'is_sorted_rec' that takes a list L and returns True if the list is sorted in ascending order, False otherwise.`,
        examples: [
            { input: '[1, 2, 3]', output: 'True' },
            { input: '[1, 3, 2]', output: 'False' }
        ],
        starterCode: `def is_sorted_rec(L):
    # Write your code here
    pass`,
        functionName: 'is_sorted_rec',
        testCases: [
            { input: '([1, 2, 3])', expected: 'True' },
            { input: '([1, 3, 2])', expected: 'False' },
            { input: '([1])', expected: 'True' },
            { input: '([])', expected: 'True' }
        ],
        hint: 'L[0] <= L[1] and f(L[1:]).'
    },
    // 7. Stack Implementation (List)
    {
        id: 'pdsa-oppe1-stack-ops',
        title: 'Stack Operations',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Simulate a stack using a list. Given a list of operations, perform them and return the final state of the stack.
Operations:
- "push x": Push x onto the stack.
- "pop": Pop the top element from the stack.`,
        examples: [
            { input: '["push 1", "push 2", "pop"]', output: '[1]' },
            { input: '["push 5", "push 10"]', output: '[5, 10]' }
        ],
        starterCode: `def stack_ops(ops):
    stack = []
    # Write your code here
    return stack`,
        functionName: 'stack_ops',
        testCases: [
            { input: '(["push 1", "push 2", "pop"])', expected: '[1]' },
            { input: '(["push 5", "push 10"])', expected: '[5, 10]' },
            { input: '(["pop"])', expected: '[]' }
        ],
        hint: 'Use append and pop.'
    },
    // 8. Queue Implementation (List)
    {
        id: 'pdsa-oppe1-queue-ops',
        title: 'Queue Operations',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Simulate a queue using a list. Given a list of operations, perform them and return the final state of the queue.
Operations:
- "enqueue x": Add x to the end of the queue.
- "dequeue": Remove the element from the front of the queue.`,
        examples: [
            { input: '["enqueue 1", "enqueue 2", "dequeue"]', output: '[2]' },
            { input: '["enqueue 1", "dequeue", "enqueue 2"]', output: '[2]' }
        ],
        starterCode: `def queue_ops(ops):
    queue = []
    # Write your code here
    return queue`,
        functionName: 'queue_ops',
        testCases: [
            { input: '(["enqueue 1", "enqueue 2", "dequeue"])', expected: '[2]' },
            { input: '(["enqueue 1", "dequeue", "enqueue 2"])', expected: '[2]' },
            { input: '(["dequeue"])', expected: '[]' }
        ],
        hint: 'Use append and pop(0).'
    },
    // 9. Reverse List Recursive
    {
        id: 'pdsa-oppe1-rev-list-rec',
        title: 'Recursive List Reverse',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a recursive function 'reverse_list' that takes a list L and returns a new list with the elements in reverse order.`,
        examples: [
            { input: '[1, 2, 3]', output: '[3, 2, 1]' },
            { input: '[5]', output: '[5]' }
        ],
        starterCode: `def reverse_list(L):
    # Write your code here
    pass`,
        functionName: 'reverse_list',
        testCases: [
            { input: '([1, 2, 3])', expected: '[3, 2, 1]' },
            { input: '([5])', expected: '[5]' },
            { input: '([])', expected: '[]' }
        ],
        hint: 'f(L[1:]) + [L[0]].'
    },
    // 10. Factorial Recursive
    {
        id: 'pdsa-oppe1-fact-rec',
        title: 'Recursive Factorial',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a recursive function 'factorial' that takes a non-negative integer n and returns its factorial.`,
        examples: [
            { input: '5', output: '120' },
            { input: '0', output: '1' }
        ],
        starterCode: `def factorial(n):
    # Write your code here
    pass`,
        functionName: 'factorial',
        testCases: [
            { input: '(5)', expected: '120' },
            { input: '(0)', expected: '1' },
            { input: '(3)', expected: '6' }
        ],
        hint: 'n * f(n-1).'
    },
    // 11. Fibonacci Recursive
    {
        id: 'pdsa-oppe1-fib-rec',
        title: 'Recursive Fibonacci',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a recursive function 'fib' that takes an integer n and returns the nth Fibonacci number. Assume fib(0)=0, fib(1)=1.`,
        examples: [
            { input: '5', output: '5' },
            { input: '6', output: '8' }
        ],
        starterCode: `def fib(n):
    # Write your code here
    pass`,
        functionName: 'fib',
        testCases: [
            { input: '(5)', expected: '5' },
            { input: '(6)', expected: '8' },
            { input: '(0)', expected: '0' },
            { input: '(1)', expected: '1' }
        ],
        hint: 'f(n-1) + f(n-2).'
    },
    // 12. GCD Recursive
    {
        id: 'pdsa-oppe1-gcd-rec',
        title: 'Recursive GCD',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a recursive function 'gcd' that takes two integers a and b and returns their Greatest Common Divisor.`,
        examples: [
            { input: '12, 18', output: '6' },
            { input: '10, 5', output: '5' }
        ],
        starterCode: `def gcd(a, b):
    # Write your code here
    pass`,
        functionName: 'gcd',
        testCases: [
            { input: '(12, 18)', expected: '6' },
            { input: '(10, 5)', expected: '5' },
            { input: '(7, 3)', expected: '1' }
        ],
        hint: 'gcd(b, a%b).'
    },
    // 13. Tower of Hanoi
    {
        id: 'pdsa-oppe1-hanoi',
        title: 'Tower of Hanoi Moves',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Write a function 'hanoi_moves' that takes an integer n (number of disks) and returns the minimum number of moves required to solve the Tower of Hanoi puzzle.`,
        examples: [
            { input: '3', output: '7' },
            { input: '2', output: '3' }
        ],
        starterCode: `def hanoi_moves(n):
    # Write your code here
    pass`,
        functionName: 'hanoi_moves',
        testCases: [
            { input: '(3)', expected: '7' },
            { input: '(1)', expected: '1' },
            { input: '(4)', expected: '15' }
        ],
        hint: '2^n - 1 or 2*f(n-1) + 1.'
    },
    // 14. Linked List: Count Nodes
    {
        id: 'pdsa-oppe1-ll-count',
        title: 'Linked List Count',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a recursive function 'count_rec' that takes a list L (simulating a linked list) and a value x. Return the number of occurrences of x in L.`,
        examples: [
            { input: '[1, 2, 1], 1', output: '2' },
            { input: '[1, 2, 3], 4', output: '0' }
        ],
        starterCode: `def count_rec(L, x):
    # Write your code here
    pass`,
        functionName: 'count_rec',
        testCases: [
            { input: '([1, 2, 1], 1)', expected: '2' },
            { input: '([1, 2, 3], 4)', expected: '0' },
            { input: '([], 1)', expected: '0' }
        ],
        hint: '(1 if L[0]==x else 0) + f(L[1:]).'
    },
    // 15. Search in Rotated Sorted Array
    {
        id: 'pdsa-oppe1-search-rotated',
        title: 'Search Rotated Array',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Write a function 'search_rotated' that searches for a target value in a rotated sorted array. Return the index if found, else -1.`,
        examples: [
            { input: '[4,5,6,7,0,1,2], 0', output: '4' },
            { input: '[4,5,6,7,0,1,2], 3', output: '-1' }
        ],
        starterCode: `def search_rotated(nums, target):
    # Write your code here
    pass`,
        functionName: 'search_rotated',
        testCases: [
            { input: '([4,5,6,7,0,1,2], 0)', expected: '4' },
            { input: '([4,5,6,7,0,1,2], 3)', expected: '-1' },
            { input: '([1], 0)', expected: '-1' }
        ],
        hint: 'Modified binary search.'
    },
    // 16. First Bad Version
    {
        id: 'pdsa-oppe1-first-bad',
        title: 'First Bad Version',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
        
Given a list of booleans versions where versions[i] is True if version i is bad, find the first bad version. Return its index.`,
        examples: [
            { input: '[False, False, True]', output: '2' },
            { input: '[True, True]', output: '0' }
        ],
        starterCode: `def first_bad_version(versions):
    # Write your code here
    pass`,
        functionName: 'first_bad_version',
        testCases: [
            { input: '([False, False, True])', expected: '2' },
            { input: '([True, True])', expected: '0' },
            { input: '([False, True])', expected: '1' }
        ],
        hint: 'Binary search for first True.'
    },
    // 17. Two Sum (Sorted)
    {
        id: 'pdsa-oppe1-two-sum-sorted',
        title: 'Two Sum (Sorted)',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return the indices of the two numbers (0-indexed for this problem context).`,
        examples: [
            { input: '[2, 7, 11, 15], 9', output: '[0, 1]' },
            { input: '[2, 3, 4], 6', output: '[0, 2]' }
        ],
        starterCode: `def two_sum_sorted(numbers, target):
    # Write your code here
    pass`,
        functionName: 'two_sum_sorted',
        testCases: [
            { input: '([2, 7, 11, 15], 9)', expected: '[0, 1]' },
            { input: '([2, 3, 4], 6)', expected: '[0, 2]' },
            { input: '([-1, 0], -1)', expected: '[0, 1]' }
        ],
        hint: 'Two pointers.'
    },
    // 18. Remove Element
    {
        id: 'pdsa-oppe1-remove-elem',
        title: 'Remove Element',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function 'remove_element' that takes a list nums and a value val. Remove all occurrences of val in nums in-place. Return the new list.`,
        examples: [
            { input: '[3, 2, 2, 3], 3', output: '[2, 2]' },
            { input: '[1, 2, 3], 4', output: '[1, 2, 3]' }
        ],
        starterCode: `def remove_element(nums, val):
    # Write your code here
    return [x for x in nums if x != val]`,
        functionName: 'remove_element',
        testCases: [
            { input: '([3, 2, 2, 3], 3)', expected: '[2, 2]' },
            { input: '([1, 2, 3], 4)', expected: '[1, 2, 3]' },
            { input: '([], 1)', expected: '[]' }
        ],
        hint: 'List comprehension.'
    },
    // 19. Search Insert Position
    {
        id: 'pdsa-oppe1-search-insert',
        title: 'Search Insert Position',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.`,
        examples: [
            { input: '[1, 3, 5, 6], 5', output: '2' },
            { input: '[1, 3, 5, 6], 2', output: '1' }
        ],
        starterCode: `def search_insert(nums, target):
    # Write your code here
    pass`,
        functionName: 'search_insert',
        testCases: [
            { input: '([1, 3, 5, 6], 5)', expected: '2' },
            { input: '([1, 3, 5, 6], 2)', expected: '1' },
            { input: '([1, 3, 5, 6], 7)', expected: '4' },
            { input: '([1, 3, 5, 6], 0)', expected: '0' }
        ],
        hint: 'Binary search.'
    },
    // 20. Max Subarray Sum
    {
        id: 'pdsa-oppe1-max-subarray',
        title: 'Max Subarray Sum',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.`,
        examples: [
            { input: '[-2, 1, -3, 4, -1, 2, 1, -5, 4]', output: '6' },
            { input: '[1]', output: '1' }
        ],
        starterCode: `def max_sub_array(nums):
    # Write your code here
    pass`,
        functionName: 'max_sub_array',
        testCases: [
            { input: '([-2, 1, -3, 4, -1, 2, 1, -5, 4])', expected: '6' },
            { input: '([1])', expected: '1' },
            { input: '([5, 4, -1, 7, 8])', expected: '23' }
        ],
        hint: 'Kadane\'s Algorithm.'
    },
    // 21. Merge Intervals
    {
        id: 'pdsa-oppe1-merge-intervals',
        title: 'Merge Intervals',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
        examples: [
            { input: '[[1,3],[2,6],[8,10],[15,18]]', output: '[[1, 6], [8, 10], [15, 18]]' },
            { input: '[[1,4],[4,5]]', output: '[[1, 5]]' }
        ],
        starterCode: `def merge(intervals):
    # Write your code here
    pass`,
        functionName: 'merge',
        testCases: [
            { input: '([[1,3],[2,6],[8,10],[15,18]])', expected: '[[1, 6], [8, 10], [15, 18]]' },
            { input: '([[1,4],[4,5]])', expected: '[[1, 5]]' }
        ],
        hint: 'Sort and merge.'
    },
    // 22. Climbing Stairs
    {
        id: 'pdsa-oppe1-climbing-stairs',
        title: 'Climbing Stairs',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
        examples: [
            { input: '2', output: '2' },
            { input: '3', output: '3' }
        ],
        starterCode: `def climb_stairs(n):
    # Write your code here
    pass`,
        functionName: 'climb_stairs',
        testCases: [
            { input: '(2)', expected: '2' },
            { input: '(3)', expected: '3' },
            { input: '(4)', expected: '5' }
        ],
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
        description: `Given a list of indices representing next pointers of a linked list (where index i points to next_ptrs[i]), determine if the linked list has a cycle. Start traversal from index 0. Return True if a cycle exists, False otherwise. Use -1 to indicate null (end of list).`,
        examples: [
            { input: '[1, 2, 0]', output: 'True' },
            { input: '[1, -1]', output: 'False' }
        ],
        starterCode: `def has_cycle(next_ptrs):
    # Write your code here
    pass`,
        functionName: 'has_cycle',
        testCases: [
            { input: '([1, 2, 0])', expected: 'True' },
            { input: '([1, -1])', expected: 'False' },
            { input: '([1, 2, 3, 1])', expected: 'True' },
            { input: '([-1])', expected: 'False' }
        ],
        hint: 'Visited set or Floyd\'s cycle finding.'
    },
    // 27. Min Stack (Simulated)
    {
        id: 'pdsa-oppe1-min-stack',
        title: 'Min Stack',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Simulate a MinStack that supports push, pop, top, and retrieving the minimum element in constant time.
Operations:
- "push x": Push element x onto stack.
- "pop": Removes the element on top of the stack.
- "top": Get the top element.
- "getMin": Retrieve the minimum element in the stack.
Return the result of the last operation (or None if it's a void operation like push/pop, but for testing return the stack state or min value as requested). For this problem, return the result of "getMin" calls as a list, or the final return of the function. Let's simplify: Return the result of the *last* "getMin" operation in the list of ops.`,
        examples: [
            { input: '["push -2", "push 0", "push -3", "getMin"]', output: '-3' },
            { input: '["push 1", "push 2", "getMin"]', output: '1' }
        ],
        starterCode: `def min_stack_ops(ops):
    stack = []
    # Write your code here
    pass`,
        functionName: 'min_stack_ops',
        testCases: [
            { input: '(["push -2", "push 0", "push -3", "getMin"])', expected: '-3' },
            { input: '(["push 1", "push 2", "getMin"])', expected: '1' },
            { input: '(["push 10", "pop", "push 5", "getMin"])', expected: '5' }
        ],
        hint: 'Use auxiliary stack for mins.'
    },
    // 28. Intersection of Two Linked Lists (Simulated)
    {
        id: 'pdsa-oppe1-ll-intersect',
        title: 'LL Intersection (Simulated)',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Given two lists listA and listB representing linked lists (where elements are nodes, and common suffix implies intersection), find the node at which the two lists intersect. Return the intersecting node value (or list of common suffix starting from intersection). If no intersection, return None/empty.
        
Simplified: Given two lists, return the longest common suffix.`,
        examples: [
            { input: '[1, 2, 3], [4, 3]', output: '[3]' },
            { input: '[1, 2], [3, 4]', output: '[]' }
        ],
        starterCode: `def get_intersection_node(listA, listB):
    # Write your code here
    pass`,
        functionName: 'get_intersection_node',
        testCases: [
            { input: '([1, 2, 3], [4, 3])', expected: '[3]' },
            { input: '([1, 2], [3, 4])', expected: '[]' },
            { input: '([1, 2, 3, 4, 5], [9, 4, 5])', expected: '[4, 5]' }
        ],
        hint: 'Align lengths or use set.'
    },
    // 29. Majority Element (Boyer-Moore)
    {
        id: 'pdsa-oppe1-majority',
        title: 'Majority Element',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.`,
        examples: [
            { input: '[3, 2, 3]', output: '3' },
            { input: '[2, 2, 1, 1, 1, 2, 2]', output: '2' }
        ],
        starterCode: `def majority_element(nums):
    # Write your code here
    pass`,
        functionName: 'majority_element',
        testCases: [
            { input: '([3, 2, 3])', expected: '3' },
            { input: '([2, 2, 1, 1, 1, 2, 2])', expected: '2' },
            { input: '([1])', expected: '1' }
        ],
        hint: 'Boyer-Moore Voting.'
    },
    // 30. Reverse Bits
    {
        id: 'pdsa-oppe1-reverse-bits',
        title: 'Reverse Bits',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Reverse bits of a given 32-bit unsigned integer.`,
        examples: [
            { input: '43261596', output: '964176192' },
            { input: '0', output: '0' }
        ],
        starterCode: `def reverse_bits(n):
    # Write your code here
    pass`,
        functionName: 'reverse_bits',
        testCases: [
            { input: '(43261596)', expected: '964176192' },
            { input: '(0)', expected: '0' },
            { input: '(1)', expected: '2147483648' } // 1 followed by 31 zeros reversed is 1 at MSB (if 32 bit)
        ],
        hint: 'Bit manipulation.'
    },
    // 31. Number of 1 Bits
    {
        id: 'pdsa-oppe1-hamming-weight',
        title: 'Number of 1 Bits',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).`,
        examples: [
            { input: '11', output: '3' },
            { input: '128', output: '1' }
        ],
        starterCode: `def hammingWeight(n):
    # Write your code here
    pass`,
        functionName: 'hammingWeight',
        testCases: [
            { input: '(11)', expected: '3' },
            { input: '(128)', expected: '1' },
            { input: '(0)', expected: '0' }
        ],
        hint: 'bin(n).count("1").'
    },
    // 32. Power of Two
    {
        id: 'pdsa-oppe1-power-two',
        title: 'Power of Two',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Given an integer n, return True if it is a power of two. Otherwise, return False.`,
        examples: [
            { input: '1', output: 'True' },
            { input: '16', output: 'True' },
            { input: '3', output: 'False' }
        ],
        starterCode: `def isPowerOfTwo(n):
    # Write your code here
    pass`,
        functionName: 'isPowerOfTwo',
        testCases: [
            { input: '(1)', expected: 'True' },
            { input: '(16)', expected: 'True' },
            { input: '(3)', expected: 'False' },
            { input: '(0)', expected: 'False' }
        ],
        hint: 'n > 0 and (n & (n-1)) == 0.'
    },
    // 33. Palindrome Linked List (Simulated)
    {
        id: 'pdsa-oppe1-ll-palindrome',
        title: 'Palindrome List',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Given a list (simulating a linked list), determine if it is a palindrome.`,
        examples: [
            { input: '[1, 2, 2, 1]', output: 'True' },
            { input: '[1, 2]', output: 'False' }
        ],
        starterCode: `def isPalindrome(head):
    # Write your code here
    pass`,
        functionName: 'isPalindrome',
        testCases: [
            { input: '([1, 2, 2, 1])', expected: 'True' },
            { input: '([1, 2])', expected: 'False' },
            { input: '([1])', expected: 'True' }
        ],
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
        description: `Given a binary array nums, return the maximum number of consecutive 1's in the array.`,
        examples: [
            { input: '[1,1,0,1,1,1]', output: '3' },
            { input: '[1,0,1,1,0,1]', output: '2' }
        ],
        starterCode: `def findMaxConsecutiveOnes(nums):
    # Write your code here
    pass`,
        functionName: 'findMaxConsecutiveOnes',
        testCases: [
            { input: '([1,1,0,1,1,1])', expected: '3' },
            { input: '([1,0,1,1,0,1])', expected: '2' },
            { input: '([0,0,0])', expected: '0' }
        ],
        hint: 'Iterate and count.'
    },
    // 46. Next Greater Element I
    {
        id: 'pdsa-oppe1-next-greater',
        title: 'Next Greater Element',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
        
You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.`,
        examples: [
            { input: '[4,1,2], [1,3,4,2]', output: '[-1, 3, -1]' },
            { input: '[2,4], [1,2,3,4]', output: '[3, -1]' }
        ],
        starterCode: `def nextGreaterElement(nums1, nums2):
    # Write your code here
    pass`,
        functionName: 'nextGreaterElement',
        testCases: [
            { input: '([4,1,2], [1,3,4,2])', expected: '[-1, 3, -1]' },
            { input: '([2,4], [1,2,3,4])', expected: '[3, -1]' },
            { input: '([1], [1])', expected: '[-1]' }
        ],
        hint: 'Stack and map.'
    },
    // 47. Keyboard Row
    {
        id: 'pdsa-oppe1-keyboard-row',
        title: 'Keyboard Row',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:
- the first row consists of the characters "qwertyuiop",
- the second row consists of the characters "asdfghjkl", and
- the third row consists of the characters "zxcvbnm".`,
        examples: [
            { input: '["Hello", "Alaska", "Dad", "Peace"]', output: '["Alaska", "Dad"]' },
            { input: '["omk"]', output: '[]' }
        ],
        starterCode: `def findWords(words):
    # Write your code here
    pass`,
        functionName: 'findWords',
        testCases: [
            { input: '(["Hello", "Alaska", "Dad", "Peace"])', expected: '["Alaska", "Dad"]' },
            { input: '(["omk"])', expected: '[]' },
            { input: '(["adsdf", "sfd"])', expected: '["adsdf", "sfd"]' }
        ],
        hint: 'Set intersection with row sets.'
    },
    // 48. Reverse Words in String III
    {
        id: 'pdsa-oppe1-rev-words-iii',
        title: 'Reverse Words III',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.`,
        examples: [
            { input: '"Let\'s take LeetCode contest"', output: '"s\'teL ekat edoCteeL tsetnoc"' },
            { input: '"God Ding"', output: '"doG gniD"' }
        ],
        starterCode: `def reverseWords(s):
    # Write your code here
    pass`,
        functionName: 'reverseWords',
        testCases: [
            { input: '("Let\'s take LeetCode contest")', expected: '"s\'teL ekat edoCteeL tsetnoc"' },
            { input: '("God Ding")', expected: '"doG gniD"' },
            { input: '("a")', expected: '"a"' }
        ],
        hint: 'Split, reverse each, join.'
    },
    // 49. Matrix Reshape
    {
        id: 'pdsa-oppe1-reshape',
        title: 'Reshape Matrix',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.`,
        examples: [
            { input: '[[1,2],[3,4]], 1, 4', output: '[[1, 2, 3, 4]]' },
            { input: '[[1,2],[3,4]], 2, 4', output: '[[1, 2], [3, 4]]' }
        ],
        starterCode: `def matrixReshape(mat, r, c):
    # Write your code here
    pass`,
        functionName: 'matrixReshape',
        testCases: [
            { input: '([[1,2],[3,4]], 1, 4)', expected: '[[1, 2, 3, 4]]' },
            { input: '([[1,2],[3,4]], 2, 4)', expected: '[[1, 2], [3, 4]]' }, // Invalid reshape returns original
            { input: '([[1,2]], 1, 1)', expected: '[[1, 2]]' } // Invalid
        ],
        hint: 'Flatten and reconstruct.'
    },
    // 50. Distribute Candies
    {
        id: 'pdsa-oppe1-candies',
        title: 'Distribute Candies',
        subject: 'PDSA',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.`,
        examples: [
            { input: '[1,1,2,2,3,3]', output: '3' },
            { input: '[1,1,2,3]', output: '2' }
        ],
        starterCode: `def distributeCandies(candyType):
    # Write your code here
    pass`,
        functionName: 'distributeCandies',
        testCases: [
            { input: '([1,1,2,2,3,3])', expected: '3' },
            { input: '([1,1,2,3])', expected: '2' },
            { input: '([6,6,6,6])', expected: '1' }
        ],
        hint: 'min(len(set(candyType)), len(candyType)//2).'
    }
];
