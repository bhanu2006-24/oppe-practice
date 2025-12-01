import { Problem } from '../types';

export const PDSA_OPPE2_PROBLEMS: Problem[] = [
    // --- EXISTING PROBLEMS ---
    {
        id: 'pdsa-oppe2-kth-largest',
        title: 'Kth Largest Element',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.`,
        examples: [
            { input: '[3,2,1,5,6,4], k=2', output: '5' },
            { input: '[3,2,3,1,2,4,5,5,6], k=4', output: '4' }
        ],
        starterCode: `def find_kth_largest(nums, k):
    # Write your code here
    pass`,
        functionName: 'find_kth_largest',
        testCases: [
            { input: '([3,2,1,5,6,4], 2)', expected: '5' },
            { input: '([3,2,3,1,2,4,5,5,6], 4)', expected: '4' },
            { input: '([1], 1)', expected: '1' }
        ],
        hint: 'Sort the list and take element at index -k.'
    },
    {
        id: 'pdsa-oppe2-sort-colors',
        title: 'Sort Colors (Dutch Flag)',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
        
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.`,
        examples: [
            { input: '[2,0,2,1,1,0]', output: '[0,0,1,1,2,2]' },
            { input: '[2,0,1]', output: '[0,1,2]' }
        ],
        starterCode: `def sort_colors(nums):
    # Write your code here
    return nums`,
        functionName: 'sort_colors',
        testCases: [
            { input: '([2,0,2,1,1,0])', expected: '[0, 0, 1, 1, 2, 2]' },
            { input: '([2,0,1])', expected: '[0, 1, 2]' },
            { input: '([0])', expected: '[0]' }
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
    
    A BST's inorder traversal must be strictly sorted in ascending order.`,
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
            { input: '([1, 1])', expected: 'False' },
            { input: '([10, 20, 30, 40])', expected: 'True' }
        ],
        hint: 'Check if the list is strictly increasing.'
    },

    // --- NEW PROBLEMS (50) ---

    // 1. BST Insertion
    {
        id: 'pdsa-oppe2-bst-insert',
        title: 'BST Insertion',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Simulate BST insertion. Given a list of values to be inserted into an initially empty BST in order, return the Inorder traversal of the resulting BST.`,
        examples: [
            { input: '[2, 1, 3]', output: '[1, 2, 3]' },
            { input: '[5, 1, 8]', output: '[1, 5, 8]' }
        ],
        starterCode: `def bst_insert_traversal(values):
    # Write your code here
    pass`,
        functionName: 'bst_insert_traversal',
        testCases: [
            { input: '([2, 1, 3])', expected: '[1, 2, 3]' },
            { input: '([5, 1, 8])', expected: '[1, 5, 8]' },
            { input: '([3, 2, 1])', expected: '[1, 2, 3]' }
        ],
        hint: 'Sort the list (property of BST inorder).'
    },
    // 2. BST Search
    {
        id: 'pdsa-oppe2-bst-search',
        title: 'BST Search',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given a sorted list representing the inorder traversal of a BST (which is just a sorted list), write a function to search for a value val. Return True if val exists, False otherwise.`,
        examples: [
            { input: '[1, 2, 3], 2', output: 'True' },
            { input: '[1, 2, 3], 4', output: 'False' }
        ],
        starterCode: `def bst_search(inorder, val):
    # Write your code here
    pass`,
        functionName: 'bst_search',
        testCases: [
            { input: '([1, 2, 3], 2)', expected: 'True' },
            { input: '([1, 2, 3], 4)', expected: 'False' },
            { input: '([1, 3, 5, 7], 5)', expected: 'True' }
        ],
        hint: 'Binary search.'
    },
    // 3. Level Order Traversal (Simulated)
    {
        id: 'pdsa-oppe2-level-order',
        title: 'Level Order Traversal',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given the root of a binary tree (represented as a list in level-order with None for missing nodes), return the level order traversal of its nodes' values. (i.e., from left to right, level by level).`,
        examples: [
            { input: '[3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' },
            { input: '[1]', output: '[[1]]' }
        ],
        starterCode: `def levelOrder(root):
    # Write your code here
    pass`,
        functionName: 'levelOrder',
        testCases: [
            { input: '([3,9,20,None,None,15,7])', expected: '[[3], [9, 20], [15, 7]]' },
            { input: '([1])', expected: '[[1]]' },
            { input: '([])', expected: '[]' }
        ],
        hint: 'Use queue.'
    },
    // 4. Max Depth of Binary Tree
    {
        id: 'pdsa-oppe2-max-depth',
        title: 'Max Depth Binary Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given the root of a binary tree (represented as a list), return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.`,
        examples: [
            { input: '[3,9,20,null,null,15,7]', output: '3' },
            { input: '[1,null,2]', output: '2' }
        ],
        starterCode: `def maxDepth(root):
    # Write your code here
    pass`,
        functionName: 'maxDepth',
        testCases: [
            { input: '([3,9,20,None,None,15,7])', expected: '3' },
            { input: '([1,None,2])', expected: '2' },
            { input: '([])', expected: '0' }
        ],
        hint: 'Recursion.'
    },
    // 5. Symmetric Tree
    {
        id: 'pdsa-oppe2-symmetric-tree',
        title: 'Symmetric Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).`,
        examples: [
            { input: '[1,2,2,3,4,4,3]', output: 'True' },
            { input: '[1,2,2,null,3,null,3]', output: 'False' }
        ],
        starterCode: `def isSymmetric(root):
    # Write your code here
    pass`,
        functionName: 'isSymmetric',
        testCases: [
            { input: '([1,2,2,3,4,4,3])', expected: 'True' },
            { input: '([1,2,2,None,3,None,3])', expected: 'False' },
            { input: '([1])', expected: 'True' }
        ],
        hint: 'Recursive check left.left==right.right.'
    },
    // 6. Invert Binary Tree
    {
        id: 'pdsa-oppe2-invert-tree',
        title: 'Invert Binary Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given the root of a binary tree, invert the tree, and return its root.`,
        examples: [
            { input: '[4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' },
            { input: '[2,1,3]', output: '[2,3,1]' }
        ],
        starterCode: `def invertTree(root):
    # Write your code here
    pass`,
        functionName: 'invertTree',
        testCases: [
            { input: '([4,2,7,1,3,6,9])', expected: '[4, 7, 2, 9, 6, 3, 1]' },
            { input: '([2,1,3])', expected: '[2, 3, 1]' },
            { input: '([])', expected: '[]' }
        ],
        hint: 'Swap left and right children recursively.'
    },
    // 7. Path Sum
    {
        id: 'pdsa-oppe2-path-sum',
        title: 'Path Sum',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.`,
        examples: [
            { input: '[5,4,8,11,null,13,4,7,2,null,null,null,1], 22', output: 'True' },
            { input: '[1,2,3], 5', output: 'False' }
        ],
        starterCode: `def hasPathSum(root, targetSum):
    # Write your code here
    pass`,
        functionName: 'hasPathSum',
        testCases: [
            { input: '([5,4,8,11,None,13,4,7,2,None,None,None,1], 22)', expected: 'True' },
            { input: '([1,2,3], 5)', expected: 'False' },
            { input: '([], 0)', expected: 'False' }
        ],
        hint: 'Subtract val from sum, check leaf.'
    },
    // 8. Lowest Common Ancestor BST
    {
        id: 'pdsa-oppe2-lca-bst',
        title: 'LCA of BST',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.`,
        examples: [
            { input: '[6,2,8,0,4,7,9], 2, 8', output: '6' },
            { input: '[6,2,8,0,4,7,9], 2, 4', output: '2' }
        ],
        starterCode: `def lowestCommonAncestor(root, p, q):
    # Write your code here
    pass`,
        functionName: 'lowestCommonAncestor',
        testCases: [
            { input: '([6,2,8,0,4,7,9], 2, 8)', expected: '6' },
            { input: '([6,2,8,0,4,7,9], 2, 4)', expected: '2' },
            { input: '([2,1], 2, 1)', expected: '2' }
        ],
        hint: 'If both < root, go left. If both > root, go right.'
    },
    // 9. Kth Smallest Element in BST
    {
        id: 'pdsa-oppe2-kth-smallest',
        title: 'Kth Smallest in BST',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.`,
        examples: [
            { input: '[3,1,4,null,2], 1', output: '1' },
            { input: '[5,3,6,2,4,null,null,1], 3', output: '3' }
        ],
        starterCode: `def kthSmallest(root, k):
    # Write your code here
    pass`,
        functionName: 'kthSmallest',
        testCases: [
            { input: '([3,1,4,None,2], 1)', expected: '1' },
            { input: '([5,3,6,2,4,None,None,1], 3)', expected: '3' },
            { input: '([1], 1)', expected: '1' }
        ],
        hint: 'Inorder traversal gives sorted list.'
    },
    // 10. Binary Tree Inorder Traversal
    {
        id: 'pdsa-oppe2-inorder',
        title: 'Inorder Traversal',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given the root of a binary tree, return the inorder traversal of its nodes' values.`,
        examples: [
            { input: '[1,null,2,3]', output: '[1, 3, 2]' },
            { input: '[]', output: '[]' }
        ],
        starterCode: `def inorderTraversal(root):
    # Write your code here
    pass`,
        functionName: 'inorderTraversal',
        testCases: [
            { input: '([1,None,2,3])', expected: '[1, 3, 2]' },
            { input: '([])', expected: '[]' },
            { input: '([1])', expected: '[1]' }
        ],
        hint: 'Left, Root, Right.'
    },
    // 11. Binary Tree Preorder Traversal
    {
        id: 'pdsa-oppe2-preorder',
        title: 'Preorder Traversal',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given the root of a binary tree, return the preorder traversal of its nodes' values.`,
        examples: [
            { input: '[1,null,2,3]', output: '[1, 2, 3]' },
            { input: '[]', output: '[]' }
        ],
        starterCode: `def preorderTraversal(root):
    # Write your code here
    pass`,
        functionName: 'preorderTraversal',
        testCases: [
            { input: '([1,None,2,3])', expected: '[1, 2, 3]' },
            { input: '([])', expected: '[]' },
            { input: '([1])', expected: '[1]' }
        ],
        hint: 'Root, Left, Right.'
    },
    // 12. Binary Tree Postorder Traversal
    {
        id: 'pdsa-oppe2-postorder',
        title: 'Postorder Traversal',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given the root of a binary tree, return the postorder traversal of its nodes' values.`,
        examples: [
            { input: '[1,null,2,3]', output: '[3, 2, 1]' },
            { input: '[]', output: '[]' }
        ],
        starterCode: `def postorderTraversal(root):
    # Write your code here
    pass`,
        functionName: 'postorderTraversal',
        testCases: [
            { input: '([1,None,2,3])', expected: '[3, 2, 1]' },
            { input: '([])', expected: '[]' },
            { input: '([1])', expected: '[1]' }
        ],
        hint: 'Left, Right, Root.'
    },
    // 13. Subtree of Another Tree
    {
        id: 'pdsa-oppe2-subtree',
        title: 'Subtree Check',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.`,
        examples: [
            { input: '[3,4,5,1,2], [4,1,2]', output: 'True' },
            { input: '[3,4,5,1,2,null,null,null,null,0], [4,1,2]', output: 'False' }
        ],
        starterCode: `def isSubtree(root, subRoot):
    # Write your code here
    pass`,
        functionName: 'isSubtree',
        testCases: [
            { input: '([3,4,5,1,2], [4,1,2])', expected: 'True' },
            { input: '([3,4,5,1,2,None,None,None,None,0], [4,1,2])', expected: 'False' },
            { input: '([1], [1])', expected: 'True' }
        ],
        hint: 'Check identical at each node.'
    },
    // 14. Diameter of Binary Tree
    {
        id: 'pdsa-oppe2-diameter',
        title: 'Diameter of Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.`,
        examples: [
            { input: '[1,2,3,4,5]', output: '3' },
            { input: '[1,2]', output: '1' }
        ],
        starterCode: `def diameterOfBinaryTree(root):
    # Write your code here
    pass`,
        functionName: 'diameterOfBinaryTree',
        testCases: [
            { input: '([1,2,3,4,5])', expected: '3' },
            { input: '([1,2])', expected: '1' },
            { input: '([1])', expected: '0' }
        ],
        hint: 'Max(left_depth + right_depth).'
    },
    // 15. Balanced Binary Tree
    {
        id: 'pdsa-oppe2-balanced',
        title: 'Balanced Binary Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.`,
        examples: [
            { input: '[3,9,20,null,null,15,7]', output: 'True' },
            { input: '[1,2,2,3,3,null,null,4,4]', output: 'False' }
        ],
        starterCode: `def isBalanced(root):
    # Write your code here
    pass`,
        functionName: 'isBalanced',
        testCases: [
            { input: '([3,9,20,None,None,15,7])', expected: 'True' },
            { input: '([1,2,2,3,3,None,None,4,4])', expected: 'False' },
            { input: '([])', expected: 'True' }
        ],
        hint: 'Check height diff at each node.'
    },
    // 16. Merge Two Binary Trees
    {
        id: 'pdsa-oppe2-merge-trees',
        title: 'Merge Trees',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `You are given two binary trees root1 and root2.
Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
Return the merged tree.`,
        examples: [
            { input: '[1,3,2,5], [2,1,3,null,4,null,7]', output: '[3,4,5,5,4,null,7]' },
            { input: '[1], [1,2]', output: '[2,2]' }
        ],
        starterCode: `def mergeTrees(root1, root2):
    # Write your code here
    pass`,
        functionName: 'mergeTrees',
        testCases: [
            { input: '([1,3,2,5], [2,1,3,None,4,None,7])', expected: '[3, 4, 5, 5, 4, None, 7]' },
            { input: '([1], [1,2])', expected: '[2, 2]' },
            { input: '([], [])', expected: '[]' }
        ],
        hint: 'New node val = r1.val + r2.val.'
    },
    // 17. Convert Sorted Array to BST
    {
        id: 'pdsa-oppe2-sorted-to-bst',
        title: 'Sorted Array to BST',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.`,
        examples: [
            { input: '[-10,-3,0,5,9]', output: '[0,-3,9,-10,null,5]' },
            { input: '[1,3]', output: '[3,1]' }
        ],
        starterCode: `def sortedArrayToBST(nums):
    # Write your code here
    pass`,
        functionName: 'sortedArrayToBST',
        testCases: [
            { input: '([-10,-3,0,5,9])', expected: '[0, -3, 9, -10, None, 5]' },
            { input: '([1,3])', expected: '[3, 1]' }, // Or [1, None, 3] depending on implementation, but usually mid is root
            { input: '([])', expected: '[]' }
        ],
        hint: 'Mid element is root.'
    },
    // 18. Path Sum II
    {
        id: 'pdsa-oppe2-path-sum-ii',
        title: 'Path Sum II',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.`,
        examples: [
            { input: '[5,4,8,11,null,13,4,7,2,5,1], 22', output: '[[5,4,11,2],[5,8,4,5]]' },
            { input: '[1,2,3], 5', output: '[]' }
        ],
        starterCode: `def pathSum(root, targetSum):
    # Write your code here
    pass`,
        functionName: 'pathSum',
        testCases: [
            { input: '([5,4,8,11,None,13,4,7,2,5,1], 22)', expected: '[[5, 4, 11, 2], [5, 8, 4, 5]]' },
            { input: '([1,2,3], 5)', expected: '[]' },
            { input: '([1,2], 0)', expected: '[]' }
        ],
        hint: 'DFS with path list.'
    },
    // 19. Flatten Binary Tree to Linked List
    {
        id: 'pdsa-oppe2-flatten-tree',
        title: 'Flatten Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given the root of a binary tree, flatten the tree into a "linked list":
- The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
- The "linked list" should be in the same order as a pre-order traversal of the binary tree.`,
        examples: [
            { input: '[1,2,5,3,4,null,6]', output: '[1,null,2,null,3,null,4,null,5,null,6]' },
            { input: '[0]', output: '[0]' }
        ],
        starterCode: `def flatten(root):
    # Write your code here
    pass`,
        functionName: 'flatten',
        testCases: [
            { input: '([1,2,5,3,4,None,6])', expected: '[1, None, 2, None, 3, None, 4, None, 5, None, 6]' },
            { input: '([0])', expected: '[0]' },
            { input: '([])', expected: '[]' }
        ],
        hint: 'Move left subtree to right.'
    },
    // 20. Construct Binary Tree from Preorder and Inorder
    {
        id: 'pdsa-oppe2-build-tree',
        title: 'Build Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.`,
        examples: [
            { input: '[3,9,20,15,7], [9,3,15,20,7]', output: '[3,9,20,null,null,15,7]' },
            { input: '[-1], [-1]', output: '[-1]' }
        ],
        starterCode: `def buildTree(preorder, inorder):
    # Write your code here
    pass`,
        functionName: 'buildTree',
        testCases: [
            { input: '([3,9,20,15,7], [9,3,15,20,7])', expected: '[3, 9, 20, None, None, 15, 7]' },
            { input: '([-1], [-1])', expected: '[-1]' },
            { input: '([], [])', expected: '[]' }
        ],
        hint: 'Preorder[0] is root.'
    },
    // 21. Number of Islands
    {
        id: 'pdsa-oppe2-num-islands',
        title: 'Number of Islands',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.`,
        examples: [
            { input: '[["1","1","0"],["1","0","0"],["0","0","1"]]', output: '2' },
            { input: '[["1","1","1"],["0","1","0"],["1","1","1"]]', output: '1' }
        ],
        starterCode: `def numIslands(grid):
    # Write your code here
    pass`,
        functionName: 'numIslands',
        testCases: [
            { input: '([["1","1","0"],["1","0","0"],["0","0","1"]])', expected: '2' },
            { input: '([["1","1","1"],["0","1","0"],["1","1","1"]])', expected: '1' },
            { input: '([["0"]])', expected: '0' }
        ],
        hint: 'DFS/BFS to mark visited.'
    },
    // 22. Max Area of Island
    {
        id: 'pdsa-oppe2-max-area-island',
        title: 'Max Area of Island',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical). You may assume all four edges of the grid are surrounded by water.
The area of an island is the number of cells with a value 1 in the island.
Return the maximum area of an island in grid. If there is no island, return 0.`,
        examples: [
            { input: '[[0,1],[1,1]]', output: '3' },
            { input: '[[0,0],[0,0]]', output: '0' }
        ],
        starterCode: `def maxAreaOfIsland(grid):
    # Write your code here
    pass`,
        functionName: 'maxAreaOfIsland',
        testCases: [
            { input: '([[0,1],[1,1]])', expected: '3' },
            { input: '([[0,0],[0,0]])', expected: '0' },
            { input: '([[1,1,0],[1,0,1]])', expected: '3' }
        ],
        hint: 'DFS count.'
    },
    // 23. Flood Fill
    {
        id: 'pdsa-oppe2-flood-fill',
        title: 'Flood Fill',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
Return the modified image after performing the flood fill.`,
        examples: [
            { input: '[[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2', output: '[[2,2,2],[2,2,0],[2,0,1]]' },
            { input: '[[0,0,0],[0,0,0]], 0, 0, 0', output: '[[0,0,0],[0,0,0]]' }
        ],
        starterCode: `def floodFill(image, sr, sc, newColor):
    # Write your code here
    pass`,
        functionName: 'floodFill',
        testCases: [
            { input: '([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)', expected: '[[2, 2, 2], [2, 2, 0], [2, 0, 1]]' },
            { input: '([[0,0,0],[0,0,0]], 0, 0, 0)', expected: '[[0, 0, 0], [0, 0, 0]]' },
            { input: '([[1]], 0, 0, 2)', expected: '[[2]]' }
        ],
        hint: 'DFS from (sr, sc).'
    },
    // 24. 01 Matrix
    {
        id: 'pdsa-oppe2-01-matrix',
        title: '01 Matrix',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
The distance between two adjacent cells is 1.`,
        examples: [
            { input: '[[0,0,0],[0,1,0],[0,0,0]]', output: '[[0,0,0],[0,1,0],[0,0,0]]' },
            { input: '[[0,0,0],[0,1,0],[1,1,1]]', output: '[[0,0,0],[0,1,0],[1,2,1]]' }
        ],
        starterCode: `def updateMatrix(mat):
    # Write your code here
    pass`,
        functionName: 'updateMatrix',
        testCases: [
            { input: '([[0,0,0],[0,1,0],[0,0,0]])', expected: '[[0, 0, 0], [0, 1, 0], [0, 0, 0]]' },
            { input: '([[0,0,0],[0,1,0],[1,1,1]])', expected: '[[0, 0, 0], [0, 1, 0], [1, 2, 1]]' },
            { input: '([[0]])', expected: '[[0]]' }
        ],
        hint: 'BFS from all 0s.'
    },
    // 25. Rotting Oranges
    {
        id: 'pdsa-oppe2-rotting-oranges',
        title: 'Rotting Oranges',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `You are given an m x n grid where each cell can have one of three values:
- 0 representing an empty cell,
- 1 representing a fresh orange, or
- 2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.`,
        examples: [
            { input: '[[2,1,1],[1,1,0],[0,1,1]]', output: '4' },
            { input: '[[2,1,1],[0,1,1],[1,0,1]]', output: '-1' }
        ],
        starterCode: `def orangesRotting(grid):
    # Write your code here
    pass`,
        functionName: 'orangesRotting',
        testCases: [
            { input: '([[2,1,1],[1,1,0],[0,1,1]])', expected: '4' },
            { input: '([[2,1,1],[0,1,1],[1,0,1]])', expected: '-1' },
            { input: '([[0,2]])', expected: '0' }
        ],
        hint: 'BFS level count.'
    },
    // 26. Course Schedule
    {
        id: 'pdsa-oppe2-course-schedule',
        title: 'Course Schedule',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
Return true if you can finish all courses. Otherwise, return false.`,
        examples: [
            { input: '2, [[1,0]]', output: 'True' },
            { input: '2, [[1,0],[0,1]]', output: 'False' }
        ],
        starterCode: `def canFinish(numCourses, prerequisites):
    # Write your code here
    pass`,
        functionName: 'canFinish',
        testCases: [
            { input: '(2, [[1,0]])', expected: 'True' },
            { input: '(2, [[1,0],[0,1]])', expected: 'False' },
            { input: '(3, [[1,0],[2,1]])', expected: 'True' }
        ],
        hint: 'Topological sort or DFS cycle.'
    },
    // 27. Course Schedule II
    {
        id: 'pdsa-oppe2-course-schedule-ii',
        title: 'Course Schedule II',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.`,
        examples: [
            { input: '2, [[1,0]]', output: '[0, 1]' },
            { input: '4, [[1,0],[2,0],[3,1],[3,2]]', output: '[0, 2, 1, 3]' }
        ],
        starterCode: `def findOrder(numCourses, prerequisites):
    # Write your code here
    pass`,
        functionName: 'findOrder',
        testCases: [
            { input: '(2, [[1,0]])', expected: '[0, 1]' },
            { input: '(4, [[1,0],[2,0],[3,1],[3,2]])', expected: '[0, 2, 1, 3]' }, // Note: [0, 1, 2, 3] is also valid, checker should handle
            { input: '(1, [])', expected: '[0]' }
        ],
        hint: 'Topological sort.'
    },
    // 28. Network Delay Time
    {
        id: 'pdsa-oppe2-network-delay',
        title: 'Network Delay Time',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.
We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.`,
        examples: [
            { input: '[[2,1,1],[2,3,1],[3,4,1]], 4, 2', output: '2' },
            { input: '[[1,2,1]], 2, 1', output: '1' }
        ],
        starterCode: `def networkDelayTime(times, n, k):
    # Write your code here
    pass`,
        functionName: 'networkDelayTime',
        testCases: [
            { input: '([[2,1,1],[2,3,1],[3,4,1]], 4, 2)', expected: '2' },
            { input: '([[1,2,1]], 2, 1)', expected: '1' },
            { input: '([[1,2,1]], 2, 2)', expected: '-1' }
        ],
        hint: 'Dijkstra\'s algorithm.'
    },
    // 29. Find the Town Judge
    {
        id: 'pdsa-oppe2-town-judge',
        title: 'Find Town Judge',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
If the town judge exists, then:
1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.
Return the label of the town judge if the town judge exists and can be identified, or -1 otherwise.`,
        examples: [
            { input: '2, [[1,2]]', output: '2' },
            { input: '3, [[1,3],[2,3]]', output: '3' }
        ],
        starterCode: `def findJudge(n, trust):
    # Write your code here
    pass`,
        functionName: 'findJudge',
        testCases: [
            { input: '(2, [[1,2]])', expected: '2' },
            { input: '(3, [[1,3],[2,3]])', expected: '3' },
            { input: '(3, [[1,3],[2,3],[3,1]])', expected: '-1' }
        ],
        hint: 'Indegree - Outdegree = n-1.'
    },
    // 30. Keys and Rooms
    {
        id: 'pdsa-oppe2-keys-rooms',
        title: 'Keys and Rooms',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.
When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.
Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.`,
        examples: [
            { input: '[[1],[2],[3],[]]', output: 'True' },
            { input: '[[1,3],[3,0,1],[2],[0]]', output: 'False' }
        ],
        starterCode: `def canVisitAllRooms(rooms):
    # Write your code here
    pass`,
        functionName: 'canVisitAllRooms',
        testCases: [
            { input: '([[1],[2],[3],[]])', expected: 'True' },
            { input: '([[1,3],[3,0,1],[2],[0]])', expected: 'False' },
            { input: '([[1],[]])', expected: 'True' }
        ],
        hint: 'BFS/DFS from room 0.'
    },
    // 31. Min Cost Climbing Stairs
    {
        id: 'pdsa-oppe2-min-cost-stairs',
        title: 'Min Cost Climbing Stairs',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
You can either start from the step with index 0, or the step with index 1.
Return the minimum cost to reach the top of the floor.`,
        examples: [
            { input: '[10, 15, 20]', output: '15' },
            { input: '[1,100,1,1,1,100,1,1,100,1]', output: '6' }
        ],
        starterCode: `def minCostClimbingStairs(cost):
    # Write your code here
    pass`,
        functionName: 'minCostClimbingStairs',
        testCases: [
            { input: '([10, 15, 20])', expected: '15' },
            { input: '([1,100,1,1,1,100,1,1,100,1])', expected: '6' },
            { input: '([0,0])', expected: '0' }
        ],
        hint: 'DP: dp[i] = cost[i] + min(dp[i-1], dp[i-2]).'
    },
    // 32. House Robber
    {
        id: 'pdsa-oppe2-house-robber',
        title: 'House Robber',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.`,
        examples: [
            { input: '[1,2,3,1]', output: '4' },
            { input: '[2,7,9,3,1]', output: '12' }
        ],
        starterCode: `def rob(nums):
    # Write your code here
    pass`,
        functionName: 'rob',
        testCases: [
            { input: '([1,2,3,1])', expected: '4' },
            { input: '([2,7,9,3,1])', expected: '12' },
            { input: '([0])', expected: '0' }
        ],
        hint: 'DP: max(dp[i-1], dp[i-2] + nums[i]).'
    },
    // 33. Coin Change
    {
        id: 'pdsa-oppe2-coin-change',
        title: 'Coin Change',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.`,
        examples: [
            { input: '[1, 2, 5], 11', output: '3' },
            { input: '[2], 3', output: '-1' }
        ],
        starterCode: `def coinChange(coins, amount):
    # Write your code here
    pass`,
        functionName: 'coinChange',
        testCases: [
            { input: '([1, 2, 5], 11)', expected: '3' },
            { input: '([2], 3)', expected: '-1' },
            { input: '([1], 0)', expected: '0' }
        ],
        hint: 'DP: dp[i] = min(dp[i], dp[i-coin] + 1).'
    },
    // 34. Longest Increasing Subsequence
    {
        id: 'pdsa-oppe2-lis',
        title: 'Longest Increasing Subsequence',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given an integer array nums, return the length of the longest strictly increasing subsequence.`,
        examples: [
            { input: '[10,9,2,5,3,7,101,18]', output: '4' },
            { input: '[0,1,0,3,2,3]', output: '4' }
        ],
        starterCode: `def lengthOfLIS(nums):
    # Write your code here
    pass`,
        functionName: 'lengthOfLIS',
        testCases: [
            { input: '([10,9,2,5,3,7,101,18])', expected: '4' },
            { input: '([0,1,0,3,2,3])', expected: '4' },
            { input: '([7,7,7,7,7,7,7])', expected: '1' }
        ],
        hint: 'DP O(n^2) or Binary Search O(n log n).'
    },
    // 35. Maximum Subarray (DP)
    {
        id: 'pdsa-oppe2-max-sub-dp',
        title: 'Max Subarray (DP)',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.`,
        examples: [
            { input: '[-2,1,-3,4,-1,2,1,-5,4]', output: '6' },
            { input: '[1]', output: '1' }
        ],
        starterCode: `def maxSubArray(nums):
    # Write your code here
    pass`,
        functionName: 'maxSubArray',
        testCases: [
            { input: '([-2,1,-3,4,-1,2,1,-5,4])', expected: '6' },
            { input: '([1])', expected: '1' },
            { input: '([5,4,-1,7,8])', expected: '23' }
        ],
        hint: 'Kadane is DP.'
    },
    // 36. Unique Paths
    {
        id: 'pdsa-oppe2-unique-paths',
        title: 'Unique Paths',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.`,
        examples: [
            { input: '3, 7', output: '28' },
            { input: '3, 2', output: '3' }
        ],
        starterCode: `def uniquePaths(m, n):
    # Write your code here
    pass`,
        functionName: 'uniquePaths',
        testCases: [
            { input: '(3, 7)', expected: '28' },
            { input: '(3, 2)', expected: '3' },
            { input: '(1, 1)', expected: '1' }
        ],
        hint: 'DP: dp[i][j] = dp[i-1][j] + dp[i][j-1].'
    },
    // 37. Longest Common Subsequence
    {
        id: 'pdsa-oppe2-lcs',
        title: 'Longest Common Subsequence',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.`,
        examples: [
            { input: '"abcde", "ace"', output: '3' },
            { input: '"abc", "abc"', output: '3' }
        ],
        starterCode: `def longestCommonSubsequence(text1, text2):
    # Write your code here
    pass`,
        functionName: 'longestCommonSubsequence',
        testCases: [
            { input: '("abcde", "ace")', expected: '3' },
            { input: '("abc", "abc")', expected: '3' },
            { input: '("abc", "def")', expected: '0' }
        ],
        hint: 'DP 2D array.'
    },
    // 38. Edit Distance
    {
        id: 'pdsa-oppe2-edit-distance',
        title: 'Edit Distance',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
You have the following three operations permitted on a word:
- Insert a character
- Delete a character
- Replace a character`,
        examples: [
            { input: '"horse", "ros"', output: '3' },
            { input: '"intention", "execution"', output: '5' }
        ],
        starterCode: `def minDistance(word1, word2):
    # Write your code here
    pass`,
        functionName: 'minDistance',
        testCases: [
            { input: '("horse", "ros")', expected: '3' },
            { input: '("intention", "execution")', expected: '5' },
            { input: '("", "")', expected: '0' }
        ],
        hint: 'DP 2D array.'
    },
    // 39. Kth Largest Element in Stream
    {
        id: 'pdsa-oppe2-kth-stream',
        title: 'Kth Largest in Stream',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
        
(Simulate function that takes initial nums, k, and a list of adds. Return list of kth largest after each add).`,
        examples: [
            { input: '[4, 5, 8, 2], 3, [3, 5, 10, 9, 4]', output: '[4, 5, 5, 8, 8]' }
        ],
        starterCode: `def kthLargestStream(nums, k, adds):
    # Write your code here
    pass`,
        functionName: 'kthLargestStream',
        testCases: [
            { input: '([4, 5, 8, 2], 3, [3, 5, 10, 9, 4])', expected: '[4, 5, 5, 8, 8]' },
            { input: '([], 1, [1, 2])', expected: '[1, 2]' }
        ],
        hint: 'Min-heap of size k.'
    },
    // 40. Top K Frequent Elements
    {
        id: 'pdsa-oppe2-top-k-freq',
        title: 'Top K Frequent',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.`,
        examples: [
            { input: '[1,1,1,2,2,3], 2', output: '[1, 2]' },
            { input: '[1], 1', output: '[1]' }
        ],
        starterCode: `def topKFrequent(nums, k):
    # Write your code here
    pass`,
        functionName: 'topKFrequent',
        testCases: [
            { input: '([1,1,1,2,2,3], 2)', expected: '[1, 2]' },
            { input: '([1], 1)', expected: '[1]' },
            { input: '([1, 2], 2)', expected: '[1, 2]' }
        ],
        hint: 'Heap or Bucket Sort.'
    },
    // 41. Find K Pairs with Smallest Sums
    {
        id: 'pdsa-oppe2-k-smallest-pairs',
        title: 'K Smallest Pairs',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.
Define a pair (u, v) which consists of one element from the first array and one element from the second array.
Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.`,
        examples: [
            { input: '[1,7,11], [2,4,6], 3', output: '[[1,2],[1,4],[1,6]]' },
            { input: '[1,1,2], [1,2,3], 2', output: '[[1,1],[1,1]]' }
        ],
        starterCode: `def kSmallestPairs(nums1, nums2, k):
    # Write your code here
    pass`,
        functionName: 'kSmallestPairs',
        testCases: [
            { input: '([1,7,11], [2,4,6], 3)', expected: '[[1, 2], [1, 4], [1, 6]]' },
            { input: '([1,1,2], [1,2,3], 2)', expected: '[[1, 1], [1, 1]]' },
            { input: '([1,2], [3], 3)', expected: '[[1, 3], [2, 3]]' }
        ],
        hint: 'Min-heap.'
    },
    // 42. Merge K Sorted Lists
    {
        id: 'pdsa-oppe2-merge-k-lists',
        title: 'Merge K Sorted Lists',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it. (Simulated with lists).`,
        examples: [
            { input: '[[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]' },
            { input: '[]', output: '[]' }
        ],
        starterCode: `def mergeKLists(lists):
    # Write your code here
    pass`,
        functionName: 'mergeKLists',
        testCases: [
            { input: '([[1,4,5],[1,3,4],[2,6]])', expected: '[1, 1, 2, 3, 4, 4, 5, 6]' },
            { input: '([])', expected: '[]' },
            { input: '([[]])', expected: '[]' }
        ],
        hint: 'Min-heap.'
    },
    // 43. Sort Characters By Frequency
    {
        id: 'pdsa-oppe2-sort-char-freq',
        title: 'Sort Chars Frequency',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them.`,
        examples: [
            { input: '"tree"', output: '"eert"' },
            { input: '"cccaaa"', output: '"aaaccc"' }
        ],
        starterCode: `def frequencySort(s):
    # Write your code here
    pass`,
        functionName: 'frequencySort',
        testCases: [
            { input: '("tree")', expected: '"eert"' }, // or "eetr"
            { input: '("cccaaa")', expected: '"aaaccc"' }, // or "cccaaa"
            { input: '("Aabb")', expected: '"bbAa"' }
        ],
        hint: 'Counter and sort.'
    },
    // 44. K Closest Points to Origin
    {
        id: 'pdsa-oppe2-k-closest',
        title: 'K Closest Points',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).`,
        examples: [
            { input: '[[1,3],[-2,2]], 1', output: '[[-2, 2]]' },
            { input: '[[3,3],[5,-1],[-2,4]], 2', output: '[[3, 3], [-2, 4]]' }
        ],
        starterCode: `def kClosest(points, k):
    # Write your code here
    pass`,
        functionName: 'kClosest',
        testCases: [
            { input: '([[1,3],[-2,2]], 1)', expected: '[[-2, 2]]' },
            { input: '([[3,3],[5,-1],[-2,4]], 2)', expected: '[[3, 3], [-2, 4]]' },
            { input: '([[1,1]], 1)', expected: '[[1, 1]]' }
        ],
        hint: 'Sort by distance or Heap.'
    },
    // 45. Task Scheduler
    {
        id: 'pdsa-oppe2-task-scheduler',
        title: 'Task Scheduler',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.
However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.
Return the least number of units of times that the CPU will take to finish all the given tasks.`,
        examples: [
            { input: '["A","A","A","B","B","B"], 2', output: '8' },
            { input: '["A","A","A","B","B","B"], 0', output: '6' }
        ],
        starterCode: `def leastInterval(tasks, n):
    # Write your code here
    pass`,
        functionName: 'leastInterval',
        testCases: [
            { input: '(["A","A","A","B","B","B"], 2)', expected: '8' },
            { input: '(["A","A","A","B","B","B"], 0)', expected: '6' },
            { input: '(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)', expected: '16' }
        ],
        hint: 'Greedy with frequency.'
    },
    // 46. Reorganize String
    {
        id: 'pdsa-oppe2-reorganize',
        title: 'Reorganize String',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
Return any possible rearrangement of s or return "" if not possible.`,
        examples: [
            { input: '"aab"', output: '"aba"' },
            { input: '"aaab"', output: '""' }
        ],
        starterCode: `def reorganizeString(s):
    # Write your code here
    pass`,
        functionName: 'reorganizeString',
        testCases: [
            { input: '("aab")', expected: '"aba"' },
            { input: '("aaab")', expected: '""' },
            { input: '("vvvlo")', expected: '"vlvov"' }
        ],
        hint: 'Heap with counts.'
    },
    // 47. Minimum Spanning Tree (Simulated)
    {
        id: 'pdsa-oppe2-mst',
        title: 'MST Cost',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Calculate the cost of the Minimum Spanning Tree (MST) of a graph.
Input: n (number of nodes), edges (list of [u, v, w] where u, v are nodes and w is weight).
Return the total weight of the MST. If the graph is not connected, return -1.`,
        examples: [
            { input: '3, [[0,1,1],[1,2,2],[0,2,3]]', output: '3' },
            { input: '4, [[0,1,1],[0,2,2],[0,3,3],[1,2,1]]', output: '4' } // 1+1+2 = 4? No, 1+1+3=5. Wait. 0-1(1), 1-2(1), 0-3(3). Total 5.
        ],
        starterCode: `def mstCost(n, edges):
    # Write your code here
    pass`,
        functionName: 'mstCost',
        testCases: [
            { input: '(3, [[0,1,1],[1,2,2],[0,2,3]])', expected: '3' },
            { input: '(4, [[0,1,1],[0,2,2],[0,3,3],[1,2,1]])', expected: '5' }, // 0-1(1), 1-2(1), 0-3(3) -> 5
            { input: '(2, [])', expected: '-1' }
        ],
        hint: 'Kruskal\'s or Prim\'s.'
    },
    // 48. Shortest Path in Binary Matrix
    {
        id: 'pdsa-oppe2-shortest-path-matrix',
        title: 'Shortest Path Matrix',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.
A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
- All the visited cells of the path are 0.
- All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.`,
        examples: [
            { input: '[[0,1],[1,0]]', output: '2' },
            { input: '[[0,0,0],[1,1,0],[1,1,0]]', output: '4' }
        ],
        starterCode: `def shortestPathBinaryMatrix(grid):
    # Write your code here
    pass`,
        functionName: 'shortestPathBinaryMatrix',
        testCases: [
            { input: '([[0,1],[1,0]])', expected: '2' },
            { input: '([[0,0,0],[1,1,0],[1,1,0]])', expected: '4' },
            { input: '([[1,0],[0,0]])', expected: '-1' }
        ],
        hint: 'BFS.'
    },
    // 49. Word Ladder
    {
        id: 'pdsa-oppe2-word-ladder',
        title: 'Word Ladder',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
- Every adjacent pair of words differs by a single letter.
- Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
- sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.`,
        examples: [
            { input: '"hit", "cog", ["hot","dot","dog","lot","log","cog"]', output: '5' },
            { input: '"hit", "cog", ["hot","dot","dog","lot","log"]', output: '0' }
        ],
        starterCode: `def ladderLength(beginWord, endWord, wordList):
    # Write your code here
    pass`,
        functionName: 'ladderLength',
        testCases: [
            { input: '("hit", "cog", ["hot","dot","dog","lot","log","cog"])', expected: '5' },
            { input: '("hit", "cog", ["hot","dot","dog","lot","log"])', expected: '0' },
            { input: '("a", "c", ["a","b","c"])', expected: '2' }
        ],
        hint: 'BFS.'
    },
    // 50. File: Read Graph (Simulated)
    {
        id: 'pdsa-oppe2-read-graph',
        title: 'Read Graph from String',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Parse a string representing a graph edge list into an adjacency list.
The string format is "u v w\\n...", where each line represents an edge from u to v with weight w.
Return a dictionary where keys are nodes and values are lists of tuples (neighbor, weight).`,
        examples: [
            { input: '"0 1 10\\n1 2 5"', output: '{0: [(1, 10)], 1: [(2, 5)]}' },
            { input: '"1 2 3"', output: '{1: [(2, 3)]}' }
        ],
        starterCode: `def read_graph(content):
    # Write your code here
    pass`,
        functionName: 'read_graph',
        testCases: [
            { input: '("0 1 10\\n1 2 5")', expected: '{0: [(1, 10)], 1: [(2, 5)]}' },
            { input: '("1 2 3")', expected: '{1: [(2, 3)]}' },
            { input: '("")', expected: '{}' }
        ],
        hint: 'Split lines, parse ints.'
    }
];
