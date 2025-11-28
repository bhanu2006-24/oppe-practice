import { Problem } from '../types';

export const PDSA_OPPE2_PROBLEMS: Problem[] = [
    // --- EXISTING PROBLEMS ---
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

    // --- NEW PROBLEMS (50) ---

    // 1. BST Insertion
    {
        id: 'pdsa-oppe2-bst-insert',
        title: 'BST Insertion',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Simulate BST insertion. Given list of values, return Inorder traversal after inserting all.`,
        examples: [{ input: '[2, 1, 3]', output: '[1, 2, 3]' }],
        starterCode: `def bst_insert_traversal(values):
    # Write your code here
    pass`,
        functionName: 'bst_insert_traversal',
        testCases: [{ input: '([2, 1, 3])', expected: '[1, 2, 3]' }],
        hint: 'Sort the list (property of BST inorder).'
    },
    // 2. BST Search
    {
        id: 'pdsa-oppe2-bst-search',
        title: 'BST Search',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Search in BST. Return True if val exists. (Simulate with sorted list binary search).`,
        examples: [{ input: '[1, 2, 3], 2', output: 'True' }],
        starterCode: `def bst_search(inorder, val):
    # Write your code here
    pass`,
        functionName: 'bst_search',
        testCases: [{ input: '([1, 2, 3], 2)', expected: 'True' }],
        hint: 'Binary search.'
    },
    // 3. Level Order Traversal (Simulated)
    {
        id: 'pdsa-oppe2-level-order',
        title: 'Level Order Traversal',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given root [3,9,20,null,null,15,7], return level order [[3],[9,20],[15,7]].`,
        examples: [{ input: '[3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' }],
        starterCode: `def levelOrder(root):
    # Write your code here
    pass`,
        functionName: 'levelOrder',
        testCases: [{ input: '([3,9,20,None,None,15,7])', expected: '[[3], [9, 20], [15, 7]]' }],
        hint: 'Use queue.'
    },
    // 4. Max Depth of Binary Tree
    {
        id: 'pdsa-oppe2-max-depth',
        title: 'Max Depth Binary Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Find max depth. Input is list representation.`,
        examples: [{ input: '[3,9,20,null,null,15,7]', output: '3' }],
        starterCode: `def maxDepth(root):
    # Write your code here
    pass`,
        functionName: 'maxDepth',
        testCases: [{ input: '([3,9,20,None,None,15,7])', expected: '3' }],
        hint: 'Recursion.'
    },
    // 5. Symmetric Tree
    {
        id: 'pdsa-oppe2-symmetric-tree',
        title: 'Symmetric Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Check if tree is mirror of itself.`,
        examples: [{ input: '[1,2,2,3,4,4,3]', output: 'True' }],
        starterCode: `def isSymmetric(root):
    # Write your code here
    pass`,
        functionName: 'isSymmetric',
        testCases: [{ input: '([1,2,2,3,4,4,3])', expected: 'True' }],
        hint: 'Recursive check left.left==right.right.'
    },
    // 6. Invert Binary Tree
    {
        id: 'pdsa-oppe2-invert-tree',
        title: 'Invert Binary Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Invert a binary tree.`,
        examples: [{ input: '[4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' }],
        starterCode: `def invertTree(root):
    # Write your code here
    pass`,
        functionName: 'invertTree',
        testCases: [{ input: '([4,2,7,1,3,6,9])', expected: '[4, 7, 2, 9, 6, 3, 1]' }],
        hint: 'Swap left and right children recursively.'
    },
    // 7. Path Sum
    {
        id: 'pdsa-oppe2-path-sum',
        title: 'Path Sum',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Check if root-to-leaf path sums to targetSum.`,
        examples: [{ input: '[5,4,8,11,null,13,4,7,2,null,null,null,1], 22', output: 'True' }],
        starterCode: `def hasPathSum(root, targetSum):
    # Write your code here
    pass`,
        functionName: 'hasPathSum',
        testCases: [{ input: '([5,4,8,11,None,13,4,7,2,None,None,None,1], 22)', expected: 'True' }],
        hint: 'Subtract val from sum, check leaf.'
    },
    // 8. Lowest Common Ancestor BST
    {
        id: 'pdsa-oppe2-lca-bst',
        title: 'LCA of BST',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Find LCA of two nodes in BST.`,
        examples: [{ input: '[6,2,8,0,4,7,9], 2, 8', output: '6' }],
        starterCode: `def lowestCommonAncestor(root, p, q):
    # Write your code here
    pass`,
        functionName: 'lowestCommonAncestor',
        testCases: [{ input: '([6,2,8,0,4,7,9], 2, 8)', expected: '6' }],
        hint: 'If both < root, go left. If both > root, go right.'
    },
    // 9. Kth Smallest Element in BST
    {
        id: 'pdsa-oppe2-kth-smallest',
        title: 'Kth Smallest in BST',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Return kth smallest value in BST.`,
        examples: [{ input: '[3,1,4,null,2], 1', output: '1' }],
        starterCode: `def kthSmallest(root, k):
    # Write your code here
    pass`,
        functionName: 'kthSmallest',
        testCases: [{ input: '([3,1,4,None,2], 1)', expected: '1' }],
        hint: 'Inorder traversal gives sorted list.'
    },
    // 10. Binary Tree Inorder Traversal
    {
        id: 'pdsa-oppe2-inorder',
        title: 'Inorder Traversal',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Return inorder traversal list.`,
        examples: [{ input: '[1,null,2,3]', output: '[1, 3, 2]' }],
        starterCode: `def inorderTraversal(root):
    # Write your code here
    pass`,
        functionName: 'inorderTraversal',
        testCases: [{ input: '([1,None,2,3])', expected: '[1, 3, 2]' }],
        hint: 'Left, Root, Right.'
    },
    // 11. Binary Tree Preorder Traversal
    {
        id: 'pdsa-oppe2-preorder',
        title: 'Preorder Traversal',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Return preorder traversal list.`,
        examples: [{ input: '[1,null,2,3]', output: '[1, 2, 3]' }],
        starterCode: `def preorderTraversal(root):
    # Write your code here
    pass`,
        functionName: 'preorderTraversal',
        testCases: [{ input: '([1,None,2,3])', expected: '[1, 2, 3]' }],
        hint: 'Root, Left, Right.'
    },
    // 12. Binary Tree Postorder Traversal
    {
        id: 'pdsa-oppe2-postorder',
        title: 'Postorder Traversal',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Return postorder traversal list.`,
        examples: [{ input: '[1,null,2,3]', output: '[3, 2, 1]' }],
        starterCode: `def postorderTraversal(root):
    # Write your code here
    pass`,
        functionName: 'postorderTraversal',
        testCases: [{ input: '([1,None,2,3])', expected: '[3, 2, 1]' }],
        hint: 'Left, Right, Root.'
    },
    // 13. Subtree of Another Tree
    {
        id: 'pdsa-oppe2-subtree',
        title: 'Subtree Check',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Check if subRoot is subtree of root.`,
        examples: [{ input: '[3,4,5,1,2], [4,1,2]', output: 'True' }],
        starterCode: `def isSubtree(root, subRoot):
    # Write your code here
    pass`,
        functionName: 'isSubtree',
        testCases: [{ input: '([3,4,5,1,2], [4,1,2])', expected: 'True' }],
        hint: 'Check identical at each node.'
    },
    // 14. Diameter of Binary Tree
    {
        id: 'pdsa-oppe2-diameter',
        title: 'Diameter of Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Length of longest path between any two nodes.`,
        examples: [{ input: '[1,2,3,4,5]', output: '3' }],
        starterCode: `def diameterOfBinaryTree(root):
    # Write your code here
    pass`,
        functionName: 'diameterOfBinaryTree',
        testCases: [{ input: '([1,2,3,4,5])', expected: '3' }],
        hint: 'Max(left_depth + right_depth).'
    },
    // 15. Balanced Binary Tree
    {
        id: 'pdsa-oppe2-balanced',
        title: 'Balanced Binary Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Check if height-balanced (depth diff <= 1).`,
        examples: [{ input: '[3,9,20,null,null,15,7]', output: 'True' }],
        starterCode: `def isBalanced(root):
    # Write your code here
    pass`,
        functionName: 'isBalanced',
        testCases: [{ input: '([3,9,20,None,None,15,7])', expected: 'True' }],
        hint: 'Check height diff at each node.'
    },
    // 16. Merge Two Binary Trees
    {
        id: 'pdsa-oppe2-merge-trees',
        title: 'Merge Trees',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Merge by summing overlapping nodes.`,
        examples: [{ input: '[1,3,2,5], [2,1,3,null,4,null,7]', output: '[3,4,5,5,4,null,7]' }],
        starterCode: `def mergeTrees(root1, root2):
    # Write your code here
    pass`,
        functionName: 'mergeTrees',
        testCases: [{ input: '([1,3,2,5], [2,1,3,None,4,None,7])', expected: '[3, 4, 5, 5, 4, None, 7]' }],
        hint: 'New node val = r1.val + r2.val.'
    },
    // 17. Convert Sorted Array to BST
    {
        id: 'pdsa-oppe2-sorted-to-bst',
        title: 'Sorted Array to BST',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Convert sorted array to height-balanced BST.`,
        examples: [{ input: '[-10,-3,0,5,9]', output: '[0,-3,9,-10,null,5]' }],
        starterCode: `def sortedArrayToBST(nums):
    # Write your code here
    pass`,
        functionName: 'sortedArrayToBST',
        testCases: [{ input: '([-10,-3,0,5,9])', expected: '[0, -3, 9, -10, None, 5]' }],
        hint: 'Mid element is root.'
    },
    // 18. Path Sum II
    {
        id: 'pdsa-oppe2-path-sum-ii',
        title: 'Path Sum II',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Return all root-to-leaf paths summing to targetSum.`,
        examples: [{ input: '[5,4,8,11,null,13,4,7,2,5,1], 22', output: '[[5,4,11,2],[5,8,4,5]]' }],
        starterCode: `def pathSum(root, targetSum):
    # Write your code here
    pass`,
        functionName: 'pathSum',
        testCases: [{ input: '([5,4,8,11,None,13,4,7,2,5,1], 22)', expected: '[[5, 4, 11, 2], [5, 8, 4, 5]]' }],
        hint: 'DFS with path list.'
    },
    // 19. Flatten Binary Tree to Linked List
    {
        id: 'pdsa-oppe2-flatten-tree',
        title: 'Flatten Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Flatten tree to right-skewed list in-place (preorder).`,
        examples: [{ input: '[1,2,5,3,4,null,6]', output: '[1,null,2,null,3,null,4,null,5,null,6]' }],
        starterCode: `def flatten(root):
    # Write your code here
    pass`,
        functionName: 'flatten',
        testCases: [{ input: '([1,2,5,3,4,None,6])', expected: '[1, None, 2, None, 3, None, 4, None, 5, None, 6]' }],
        hint: 'Move left subtree to right.'
    },
    // 20. Construct Binary Tree from Preorder and Inorder
    {
        id: 'pdsa-oppe2-build-tree',
        title: 'Build Tree',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Build tree from preorder and inorder lists.`,
        examples: [{ input: '[3,9,20,15,7], [9,3,15,20,7]', output: '[3,9,20,null,null,15,7]' }],
        starterCode: `def buildTree(preorder, inorder):
    # Write your code here
    pass`,
        functionName: 'buildTree',
        testCases: [{ input: '([3,9,20,15,7], [9,3,15,20,7])', expected: '[3, 9, 20, None, None, 15, 7]' }],
        hint: 'Preorder[0] is root.'
    },
    // 21. Number of Islands
    {
        id: 'pdsa-oppe2-num-islands',
        title: 'Number of Islands',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Count islands in grid ('1' is land, '0' water).`,
        examples: [{ input: '[["1","1","0"],["1","0","0"],["0","0","1"]]', output: '2' }],
        starterCode: `def numIslands(grid):
    # Write your code here
    pass`,
        functionName: 'numIslands',
        testCases: [{ input: '([["1","1","0"],["1","0","0"],["0","0","1"]])', expected: '2' }],
        hint: 'DFS/BFS to mark visited.'
    },
    // 22. Max Area of Island
    {
        id: 'pdsa-oppe2-max-area-island',
        title: 'Max Area of Island',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Find max area of island.`,
        examples: [{ input: '[[0,1],[1,1]]', output: '3' }],
        starterCode: `def maxAreaOfIsland(grid):
    # Write your code here
    pass`,
        functionName: 'maxAreaOfIsland',
        testCases: [{ input: '([[0,1],[1,1]])', expected: '3' }],
        hint: 'DFS count.'
    },
    // 23. Flood Fill
    {
        id: 'pdsa-oppe2-flood-fill',
        title: 'Flood Fill',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Perform flood fill on image.`,
        examples: [{ input: '[[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2', output: '[[2,2,2],[2,2,0],[2,0,1]]' }],
        starterCode: `def floodFill(image, sr, sc, newColor):
    # Write your code here
    pass`,
        functionName: 'floodFill',
        testCases: [{ input: '([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)', expected: '[[2, 2, 2], [2, 2, 0], [2, 0, 1]]' }],
        hint: 'DFS from (sr, sc).'
    },
    // 24. 01 Matrix
    {
        id: 'pdsa-oppe2-01-matrix',
        title: '01 Matrix',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Distance of nearest 0 for each cell.`,
        examples: [{ input: '[[0,0,0],[0,1,0],[0,0,0]]', output: '[[0,0,0],[0,1,0],[0,0,0]]' }],
        starterCode: `def updateMatrix(mat):
    # Write your code here
    pass`,
        functionName: 'updateMatrix',
        testCases: [{ input: '([[0,0,0],[0,1,0],[0,0,0]])', expected: '[[0, 0, 0], [0, 1, 0], [0, 0, 0]]' }],
        hint: 'BFS from all 0s.'
    },
    // 25. Rotting Oranges
    {
        id: 'pdsa-oppe2-rotting-oranges',
        title: 'Rotting Oranges',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Min minutes until all oranges rot.`,
        examples: [{ input: '[[2,1,1],[1,1,0],[0,1,1]]', output: '4' }],
        starterCode: `def orangesRotting(grid):
    # Write your code here
    pass`,
        functionName: 'orangesRotting',
        testCases: [{ input: '([[2,1,1],[1,1,0],[0,1,1]])', expected: '4' }],
        hint: 'BFS level count.'
    },
    // 26. Course Schedule
    {
        id: 'pdsa-oppe2-course-schedule',
        title: 'Course Schedule',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Can finish courses given prerequisites? (Cycle detection).`,
        examples: [{ input: '2, [[1,0]]', output: 'True' }],
        starterCode: `def canFinish(numCourses, prerequisites):
    # Write your code here
    pass`,
        functionName: 'canFinish',
        testCases: [{ input: '(2, [[1,0]])', expected: 'True' }, { input: '(2, [[1,0],[0,1]])', expected: 'False' }],
        hint: 'Topological sort or DFS cycle.'
    },
    // 27. Course Schedule II
    {
        id: 'pdsa-oppe2-course-schedule-ii',
        title: 'Course Schedule II',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Return order of courses.`,
        examples: [{ input: '2, [[1,0]]', output: '[0, 1]' }],
        starterCode: `def findOrder(numCourses, prerequisites):
    # Write your code here
    pass`,
        functionName: 'findOrder',
        testCases: [{ input: '(2, [[1,0]])', expected: '[0, 1]' }],
        hint: 'Topological sort.'
    },
    // 28. Network Delay Time
    {
        id: 'pdsa-oppe2-network-delay',
        title: 'Network Delay Time',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Time for signal to reach all nodes (Dijkstra).`,
        examples: [{ input: '[[2,1,1],[2,3,1],[3,4,1]], 4, 2', output: '2' }],
        starterCode: `def networkDelayTime(times, n, k):
    # Write your code here
    pass`,
        functionName: 'networkDelayTime',
        testCases: [{ input: '([[2,1,1],[2,3,1],[3,4,1]], 4, 2)', expected: '2' }],
        hint: 'Dijkstra\'s algorithm.'
    },
    // 29. Find the Town Judge
    {
        id: 'pdsa-oppe2-town-judge',
        title: 'Find Town Judge',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Find person trusted by all, trusts no one.`,
        examples: [{ input: '2, [[1,2]]', output: '2' }],
        starterCode: `def findJudge(n, trust):
    # Write your code here
    pass`,
        functionName: 'findJudge',
        testCases: [{ input: '(2, [[1,2]])', expected: '2' }],
        hint: 'Indegree - Outdegree = n-1.'
    },
    // 30. Keys and Rooms
    {
        id: 'pdsa-oppe2-keys-rooms',
        title: 'Keys and Rooms',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Can you visit all rooms?`,
        examples: [{ input: '[[1],[2],[3],[]]', output: 'True' }],
        starterCode: `def canVisitAllRooms(rooms):
    # Write your code here
    pass`,
        functionName: 'canVisitAllRooms',
        testCases: [{ input: '([[1],[2],[3],[]])', expected: 'True' }],
        hint: 'BFS/DFS from room 0.'
    },
    // 31. Min Cost Climbing Stairs
    {
        id: 'pdsa-oppe2-min-cost-stairs',
        title: 'Min Cost Climbing Stairs',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Min cost to reach top.`,
        examples: [{ input: '[10, 15, 20]', output: '15' }],
        starterCode: `def minCostClimbingStairs(cost):
    # Write your code here
    pass`,
        functionName: 'minCostClimbingStairs',
        testCases: [{ input: '([10, 15, 20])', expected: '15' }],
        hint: 'DP: dp[i] = cost[i] + min(dp[i-1], dp[i-2]).'
    },
    // 32. House Robber
    {
        id: 'pdsa-oppe2-house-robber',
        title: 'House Robber',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Max money without alerting police (no adjacent houses).`,
        examples: [{ input: '[1,2,3,1]', output: '4' }],
        starterCode: `def rob(nums):
    # Write your code here
    pass`,
        functionName: 'rob',
        testCases: [{ input: '([1,2,3,1])', expected: '4' }],
        hint: 'DP: max(dp[i-1], dp[i-2] + nums[i]).'
    },
    // 33. Coin Change
    {
        id: 'pdsa-oppe2-coin-change',
        title: 'Coin Change',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Fewest coins to make amount.`,
        examples: [{ input: '[1, 2, 5], 11', output: '3' }],
        starterCode: `def coinChange(coins, amount):
    # Write your code here
    pass`,
        functionName: 'coinChange',
        testCases: [{ input: '([1, 2, 5], 11)', expected: '3' }],
        hint: 'DP: dp[i] = min(dp[i], dp[i-coin] + 1).'
    },
    // 34. Longest Increasing Subsequence
    {
        id: 'pdsa-oppe2-lis',
        title: 'Longest Increasing Subsequence',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Length of LIS.`,
        examples: [{ input: '[10,9,2,5,3,7,101,18]', output: '4' }],
        starterCode: `def lengthOfLIS(nums):
    # Write your code here
    pass`,
        functionName: 'lengthOfLIS',
        testCases: [{ input: '([10,9,2,5,3,7,101,18])', expected: '4' }],
        hint: 'DP O(n^2) or Binary Search O(n log n).'
    },
    // 35. Maximum Subarray (DP)
    {
        id: 'pdsa-oppe2-max-sub-dp',
        title: 'Max Subarray (DP)',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Max sum contiguous subarray.`,
        examples: [{ input: '[-2,1,-3,4,-1,2,1,-5,4]', output: '6' }],
        starterCode: `def maxSubArray(nums):
    # Write your code here
    pass`,
        functionName: 'maxSubArray',
        testCases: [{ input: '([-2,1,-3,4,-1,2,1,-5,4])', expected: '6' }],
        hint: 'Kadane is DP.'
    },
    // 36. Unique Paths
    {
        id: 'pdsa-oppe2-unique-paths',
        title: 'Unique Paths',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Paths from top-left to bottom-right in m x n grid.`,
        examples: [{ input: '3, 7', output: '28' }],
        starterCode: `def uniquePaths(m, n):
    # Write your code here
    pass`,
        functionName: 'uniquePaths',
        testCases: [{ input: '(3, 7)', expected: '28' }],
        hint: 'DP: dp[i][j] = dp[i-1][j] + dp[i][j-1].'
    },
    // 37. Longest Common Subsequence
    {
        id: 'pdsa-oppe2-lcs',
        title: 'Longest Common Subsequence',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Length of LCS.`,
        examples: [{ input: '"abcde", "ace"', output: '3' }],
        starterCode: `def longestCommonSubsequence(text1, text2):
    # Write your code here
    pass`,
        functionName: 'longestCommonSubsequence',
        testCases: [{ input: '("abcde", "ace")', expected: '3' }],
        hint: 'DP 2D array.'
    },
    // 38. Edit Distance
    {
        id: 'pdsa-oppe2-edit-distance',
        title: 'Edit Distance',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Min ops to convert word1 to word2.`,
        examples: [{ input: '"horse", "ros"', output: '3' }],
        starterCode: `def minDistance(word1, word2):
    # Write your code here
    pass`,
        functionName: 'minDistance',
        testCases: [{ input: '("horse", "ros")', expected: '3' }],
        hint: 'DP 2D array.'
    },
    // 39. Kth Largest Element in Stream
    {
        id: 'pdsa-oppe2-kth-stream',
        title: 'Kth Largest in Stream',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Design class to find kth largest. (Simulate function that takes stream and returns kth).`,
        examples: [{ input: '[4, 5, 8, 2], 3, [3, 5, 10, 9, 4]', output: '[4, 5, 5, 8, 8]' }],
        starterCode: `def kthLargestStream(nums, k, adds):
    # Write your code here
    pass`,
        functionName: 'kthLargestStream',
        testCases: [{ input: '([4, 5, 8, 2], 3, [3, 5, 10, 9, 4])', expected: '[4, 5, 5, 8, 8]' }],
        hint: 'Min-heap of size k.'
    },
    // 40. Top K Frequent Elements
    {
        id: 'pdsa-oppe2-top-k-freq',
        title: 'Top K Frequent',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Return k most frequent elements.`,
        examples: [{ input: '[1,1,1,2,2,3], 2', output: '[1, 2]' }],
        starterCode: `def topKFrequent(nums, k):
    # Write your code here
    pass`,
        functionName: 'topKFrequent',
        testCases: [{ input: '([1,1,1,2,2,3], 2)', expected: '[1, 2]' }],
        hint: 'Heap or Bucket Sort.'
    },
    // 41. Find K Pairs with Smallest Sums
    {
        id: 'pdsa-oppe2-k-smallest-pairs',
        title: 'K Smallest Pairs',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Find k pairs (u,v) with smallest sums.`,
        examples: [{ input: '[1,7,11], [2,4,6], 3', output: '[[1,2],[1,4],[1,6]]' }],
        starterCode: `def kSmallestPairs(nums1, nums2, k):
    # Write your code here
    pass`,
        functionName: 'kSmallestPairs',
        testCases: [{ input: '([1,7,11], [2,4,6], 3)', expected: '[[1, 2], [1, 4], [1, 6]]' }],
        hint: 'Min-heap.'
    },
    // 42. Merge K Sorted Lists
    {
        id: 'pdsa-oppe2-merge-k-lists',
        title: 'Merge K Sorted Lists',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Merge k sorted linked lists. (Simulated with lists).`,
        examples: [{ input: '[[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]' }],
        starterCode: `def mergeKLists(lists):
    # Write your code here
    pass`,
        functionName: 'mergeKLists',
        testCases: [{ input: '([[1,4,5],[1,3,4],[2,6]])', expected: '[1, 1, 2, 3, 4, 4, 5, 6]' }],
        hint: 'Min-heap.'
    },
    // 43. Sort Characters By Frequency
    {
        id: 'pdsa-oppe2-sort-char-freq',
        title: 'Sort Chars Frequency',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Sort string by char frequency.`,
        examples: [{ input: '"tree"', output: '"eert"' }],
        starterCode: `def frequencySort(s):
    # Write your code here
    pass`,
        functionName: 'frequencySort',
        testCases: [{ input: '("tree")', expected: '"eert"' }],
        hint: 'Counter and sort.'
    },
    // 44. K Closest Points to Origin
    {
        id: 'pdsa-oppe2-k-closest',
        title: 'K Closest Points',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Find k closest points to (0,0).`,
        examples: [{ input: '[[1,3],[-2,2]], 1', output: '[[-2, 2]]' }],
        starterCode: `def kClosest(points, k):
    # Write your code here
    pass`,
        functionName: 'kClosest',
        testCases: [{ input: '([[1,3],[-2,2]], 1)', expected: '[[-2, 2]]' }],
        hint: 'Sort by distance or Heap.'
    },
    // 45. Task Scheduler
    {
        id: 'pdsa-oppe2-task-scheduler',
        title: 'Task Scheduler',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Min intervals to complete tasks with cooling time n.`,
        examples: [{ input: '["A","A","A","B","B","B"], 2', output: '8' }],
        starterCode: `def leastInterval(tasks, n):
    # Write your code here
    pass`,
        functionName: 'leastInterval',
        testCases: [{ input: '(["A","A","A","B","B","B"], 2)', expected: '8' }],
        hint: 'Greedy with frequency.'
    },
    // 46. Reorganize String
    {
        id: 'pdsa-oppe2-reorganize',
        title: 'Reorganize String',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Rearrange so no two adjacent chars are same.`,
        examples: [{ input: '"aab"', output: '"aba"' }],
        starterCode: `def reorganizeString(s):
    # Write your code here
    pass`,
        functionName: 'reorganizeString',
        testCases: [{ input: '("aab")', expected: '"aba"' }],
        hint: 'Heap with counts.'
    },
    // 47. Minimum Spanning Tree (Simulated)
    {
        id: 'pdsa-oppe2-mst',
        title: 'MST Cost',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Calculate cost of MST. Input: n, edges [[u,v,w]].`,
        examples: [{ input: '3, [[0,1,1],[1,2,2],[0,2,3]]', output: '3' }],
        starterCode: `def mstCost(n, edges):
    # Write your code here
    pass`,
        functionName: 'mstCost',
        testCases: [{ input: '(3, [[0,1,1],[1,2,2],[0,2,3]])', expected: '3' }],
        hint: 'Kruskal\'s or Prim\'s.'
    },
    // 48. Shortest Path in Binary Matrix
    {
        id: 'pdsa-oppe2-shortest-path-matrix',
        title: 'Shortest Path Matrix',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Shortest clear path from top-left to bottom-right (8-directional).`,
        examples: [{ input: '[[0,1],[1,0]]', output: '2' }],
        starterCode: `def shortestPathBinaryMatrix(grid):
    # Write your code here
    pass`,
        functionName: 'shortestPathBinaryMatrix',
        testCases: [{ input: '([[0,1],[1,0]])', expected: '2' }],
        hint: 'BFS.'
    },
    // 49. Word Ladder
    {
        id: 'pdsa-oppe2-word-ladder',
        title: 'Word Ladder',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Length of shortest transformation sequence.`,
        examples: [{ input: '"hit", "cog", ["hot","dot","dog","lot","log","cog"]', output: '5' }],
        starterCode: `def ladderLength(beginWord, endWord, wordList):
    # Write your code here
    pass`,
        functionName: 'ladderLength',
        testCases: [{ input: '("hit", "cog", ["hot","dot","dog","lot","log","cog"])', expected: '5' }],
        hint: 'BFS.'
    },
    // 50. File: Read Graph (Simulated)
    {
        id: 'pdsa-oppe2-read-graph',
        title: 'Read Graph from String',
        subject: 'PDSA',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Parse string "u v w\\n..." to adjacency list.`,
        examples: [{ input: '"0 1 10\\n1 2 5"', output: '{0: [(1, 10)], 1: [(2, 5)]}' }],
        starterCode: `def read_graph(content):
    # Write your code here
    pass`,
        functionName: 'read_graph',
        testCases: [{ input: '("0 1 10\\n1 2 5")', expected: '{0: [(1, 10)], 1: [(2, 5)]}' }],
        hint: 'Split lines, parse ints.'
    }
];
