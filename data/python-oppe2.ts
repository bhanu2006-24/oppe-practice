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
        description: `Write a function 'is_ten_digit_even' that takes an integer n and returns True if the number is a 10-digit number and is even. Otherwise, return False.`,
        examples: [
            { input: '8769473839', output: 'False' },
            { input: '9289479278', output: 'True' }
        ],
        starterCode: `def is_ten_digit_even(n):
    # Write your code here
    pass`,
        functionName: 'is_ten_digit_even',
        testCases: [
            { input: '(8769473839)', expected: 'False' },
            { input: '(9289479278)', expected: 'True' },
            { input: '(1234567890)', expected: 'True' },
            { input: '(123)', expected: 'False' }
        ],
        hint: 'Check len(str(n)) == 10 and n % 2 == 0'
    },
    {
        id: 'py-oppe2-set1-p2',
        title: 'Percentage Increase',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'percentage_increase' that takes two numbers: original and new. Calculate and return the percentage increase from the original value to the new value.`,
        examples: [
            { input: 'original=50, new=75', output: '50.0' },
            { input: 'original=80, new=100', output: '25.0' }
        ],
        starterCode: `def percentage_increase(original, new):
    # Write your code here
    pass`,
        functionName: 'percentage_increase',
        testCases: [
            { input: '(50, 75)', expected: '50.0' },
            { input: '(80, 100)', expected: '25.0' },
            { input: '(100, 150)', expected: '50.0' },
            { input: '(100, 50)', expected: '-50.0' }
        ],
        hint: '((new - original) / original) * 100'
    },
    {
        id: 'py-oppe2-set1-p3',
        title: 'Find Indices',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'find_indices_of_element' that takes a list l and an element elem. Return a list of all indices where elem appears in l. Indices should be in ascending order.`,
        examples: [
            { input: 'l=[1, 2, 3, 2, 4], elem=2', output: '[1, 3]' },
            { input: 'l=[1, 2, 3], elem=5', output: '[]' }
        ],
        starterCode: `def find_indices_of_element(l, elem):
    # Write your code here
    pass`,
        functionName: 'find_indices_of_element',
        testCases: [
            { input: '([1, 2, 3, 2, 4], 2)', expected: '[1, 3]' },
            { input: '([1, 2, 3], 5)', expected: '[]' },
            { input: '([1, 1, 1], 1)', expected: '[0, 1, 2]' }
        ],
        hint: 'Enumerate and collect indices.'
    },
    {
        id: 'py-oppe2-set1-p4',
        title: 'Swap Adjacent',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'swap_adjacent_elements' that takes a tuple t. Return a new tuple where every pair of adjacent elements is swapped. If the tuple has an odd length, the last element remains in its position.`,
        examples: [
            { input: '(1, 2, 3, 4, 5, 6)', output: '(2, 1, 4, 3, 6, 5)' },
            { input: '(1, 2, 3)', output: '(2, 1, 3)' }
        ],
        starterCode: `def swap_adjacent_elements(t):
    # Write your code here
    pass`,
        functionName: 'swap_adjacent_elements',
        testCases: [
            { input: '((1, 2, 3, 4, 5, 6))', expected: '(2, 1, 4, 3, 6, 5)' },
            { input: '((1, 2, 3))', expected: '(2, 1, 3)' },
            { input: '((10, 20))', expected: '(20, 10)' }
        ],
        hint: 'Iterate with step 2.'
    },
    {
        id: 'py-oppe2-set1-p5',
        title: 'Common Chars',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'common_chars' that takes two strings word1 and word2. Find all the unique common characters present in both words and return them as a string sorted in ascending order.`,
        examples: [
            { input: '"apple", "ball"', output: '"al"' },
            { input: '"abc", "def"', output: '""' }
        ],
        starterCode: `def common_chars(word1, word2):
    # Write your code here
    pass`,
        functionName: 'common_chars',
        testCases: [
            { input: '("apple", "ball")', expected: '"al"' },
            { input: '("abc", "def")', expected: '""' },
            { input: '("hello", "world")', expected: '"lo"' }
        ],
        hint: 'sorted(set(word1) & set(word2))'
    },
    {
        id: 'py-oppe2-set1-p6',
        title: 'Count Values',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'count_values_occurrences' that takes a dictionary d. Count the number of occurrences of each value in the dictionary. Return a new dictionary where keys are the values from the input dictionary, and values are their counts.`,
        examples: [
            { input: '{"a": 1, "b": 2, "c": 1}', output: '{1: 2, 2: 1}' },
            { input: '{"x": 10}', output: '{10: 1}' }
        ],
        starterCode: `def count_values_occurrences(d):
    # Write your code here
    pass`,
        functionName: 'count_values_occurrences',
        testCases: [
            { input: '({"a": 1, "b": 2, "c": 1})', expected: '{1: 2, 2: 1}' },
            { input: '({"x": 10})', expected: '{10: 1}' },
            { input: '({})', expected: '{}' }
        ],
        hint: 'Count values using a loop or Counter.'
    },
    {
        id: 'py-oppe2-set1-p7',
        title: 'Longest Common Prefix',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'longest_common_prefix' that takes a list of strings (sentence split into words) and returns the longest common prefix shared by all strings. If there is no common prefix, return an empty string.`,
        examples: [
            { input: '["flower", "flow", "flight"]', output: '"fl"' },
            { input: '["dog", "racecar", "car"]', output: '""' }
        ],
        starterCode: `def longest_common_prefix(words):
    # Write your code here
    pass`,
        functionName: 'longest_common_prefix',
        testCases: [
            { input: '(["flower", "flow", "flight"])', expected: '"fl"' },
            { input: '(["dog", "racecar", "car"])', expected: '""' },
            { input: '(["interspecies", "interstellar", "interstate"])', expected: '"inters"' }
        ],
        hint: 'Sort list, compare first and last strings.'
    },
    {
        id: 'py-oppe2-set1-p8',
        title: 'Get Leaderboard',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given a list of dictionaries where each dictionary represents a match with keys 'team1', 'team2', 'score1', 'score2'. Generate a leaderboard.
        
Points: Win=2, Draw=1, Loss=0.
Ranking criteria: Points (descending), then Goal Difference (descending), then Goals Scored (descending).
Return a list of team names in ranked order.`,
        examples: [
            { input: 'matches=[{"team1": "A", "team2": "B", "score1": 2, "score2": 1}]', output: "['A', 'B']" },
            { input: 'matches=[{"team1": "X", "team2": "Y", "score1": 0, "score2": 0}]', output: "['X', 'Y']" }
        ],
        starterCode: `def get_leaderboard(matches):
    # Write your code here
    pass`,
        functionName: 'get_leaderboard',
        testCases: [
            { input: '([{"team1": "A", "team2": "B", "score1": 2, "score2": 1}])', expected: "['A', 'B']" },
            { input: '([{"team1": "A", "team2": "B", "score1": 1, "score2": 1}])', expected: "['A', 'B']" }, // Tie breaking might need specific rules, assuming alphabetical if all else equal or just order of appearance if not specified
            { input: '([{"team1": "X", "team2": "Y", "score1": 0, "score2": 0}])', expected: "['X', 'Y']" }
        ],
        hint: 'Calculate points per team, sort by points then goals.'
    },
    {
        id: 'py-oppe2-set1-p9',
        title: 'Consistent Sales',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        setupCode: `with open("sales.csv", "w") as f:
    f.write("Region,Rep,Q1,Q2,Q3,Q4\\nNorth,A,100,150,200,250\\nSouth,B,100,200,150,300")
with open("sales2.csv", "w") as f:
    f.write("Region,Rep,Q1,Q2,Q3,Q4\\nNorth,A,100,150,200,190\\nSouth,B,100,120,140,160")
with open("sales3.csv", "w") as f:
    f.write("Region,Rep,Q1,Q2,Q3,Q4\\nNorth,A,100,150,200,190\\nSouth,B,100,120,140,130\\nEast,C,100,110,120,130")`,
        description: `Find the region that has the highest number of representatives who have shown consistent sales growth (Q1 < Q2 < Q3 < Q4). Return the name of that region.`,
        examples: [
            { input: 'filename="sales.csv"', output: '"North"' },
            { input: 'filename="sales2.csv"', output: '"South"' }
        ],
        starterCode: `def consistent_sales_increase(filename):
    # Write your code here
    pass`,
        functionName: 'consistent_sales_increase',
        testCases: [
            { input: '("sales.csv")', expected: '"North"' }, // Mocking required in backend or description
            { input: '("sales2.csv")', expected: '"South"' },
            { input: '("sales3.csv")', expected: '"East"' }
        ],
        hint: 'Read CSV, parse rows, check condition, count by region.'
    },

    // --- Set 2 ---
    {
        id: 'py-oppe2-set2-p1',
        title: 'Digit Product',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'digit_product' that takes a non-negative integer n and returns the product of its digits. If n is 0, return 0.`,
        examples: [
            { input: '123', output: '6' },
            { input: '405', output: '0' }
        ],
        starterCode: `def digit_product(n):
    # Write your code here
    pass`,
        functionName: 'digit_product',
        testCases: [
            { input: '(123)', expected: '6' },
            { input: '(101)', expected: '0' },
            { input: '(5)', expected: '5' },
            { input: '(99)', expected: '81' }
        ],
        hint: 'Multiply digits.'
    },
    {
        id: 'py-oppe2-set2-p2',
        title: 'Capitalize First Last',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'capitalize_first_and_last' that takes a sentence (string) and returns a new sentence where the first and last characters of each word are capitalized.`,
        examples: [
            { input: '"hello world"', output: '"HellO WorlD"' },
            { input: '"a"', output: '"A"' }
        ],
        starterCode: `def capitalize_first_and_last(sentence):
    # Write your code here
    pass`,
        functionName: 'capitalize_first_and_last',
        testCases: [
            { input: '("hello world")', expected: '"HellO WorlD"' },
            { input: '("python is fun")', expected: '"PythoN IS FuN"' },
            { input: '("a b c")', expected: '"A B C"' }
        ],
        hint: 'Split, modify each word, join.'
    },
    {
        id: 'py-oppe2-set2-p3',
        title: 'Unflatten Tuple',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'unflatten' that takes a flat tuple t of length m*n, and two integers m and n. Return a tuple of tuples (matrix) with dimensions m x n.`,
        examples: [
            { input: 't=(1, 2, 3, 4), m=2, n=2', output: '((1, 2), (3, 4))' },
            { input: 't=(1, 2, 3, 4, 5, 6), m=2, n=3', output: '((1, 2, 3), (4, 5, 6))' }
        ],
        starterCode: `def unflatten(t, m, n):
    # Write your code here
    pass`,
        functionName: 'unflatten',
        testCases: [
            { input: '((1, 2, 3, 4), 2, 2)', expected: '((1, 2), (3, 4))' },
            { input: '((1, 2, 3, 4, 5, 6), 2, 3)', expected: '((1, 2, 3), (4, 5, 6))' },
            { input: '((1, 2, 3, 4, 5, 6), 3, 2)', expected: '((1, 2), (3, 4), (5, 6))' }
        ],
        hint: 'Slice tuple in loop.'
    },
    {
        id: 'py-oppe2-set2-p4',
        title: 'Kth Longest Word',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'kth_longest_word' that takes a list of words and an integer k. Return the k-th longest word in the list. Assume all words have unique lengths.`,
        examples: [
            { input: 'words=["apple", "banana"], k=1', output: '"banana"' },
            { input: 'words=["a", "bb", "ccc"], k=2', output: '"bb"' }
        ],
        starterCode: `def kth_longest_word(words, k):
    # Write your code here
    pass`,
        functionName: 'kth_longest_word',
        testCases: [
            { input: '(["apple", "banana"], 1)', expected: '"banana"' },
            { input: '(["apple", "banana"], 2)', expected: '"apple"' },
            { input: '(["a", "bb", "ccc"], 1)', expected: '"ccc"' }
        ],
        hint: 'Sort by length desc, take index k-1.'
    },
    {
        id: 'py-oppe2-set2-p5',
        title: 'Is Heterogram',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'is_heterogram' that checks if a given sentence is a heterogram. A heterogram is a string where no letter of the alphabet occurs more than once. Ignore spaces and case.`,
        examples: [
            { input: '"Blue bat"', output: 'False' },
            { input: '"The big dwarf only jumps"', output: 'True' }
        ],
        starterCode: `def is_heterogram(sentence):
    # Write your code here
    pass`,
        functionName: 'is_heterogram',
        testCases: [
            { input: '("Blue bat")', expected: 'False' },
            { input: '("The big dwarf only jumps")', expected: 'True' },
            { input: '("abc")', expected: 'True' },
            { input: '("aba")', expected: 'False' }
        ],
        hint: 'Check duplicates in letters.'
    },
    {
        id: 'py-oppe2-set2-p6',
        title: 'Filter Keys',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'filter_keys_by_value' that takes a dictionary d and a threshold. Remove all keys from the dictionary where the value is less than or equal to the threshold. The function should modify the dictionary in-place and return None.`,
        examples: [
            { input: 'd={"a": 10, "b": 5}, threshold=5', output: 'd={"a": 10}' },
            { input: 'd={"x": 1, "y": 2}, threshold=0', output: 'd={"x": 1, "y": 2}' }
        ],
        starterCode: `def filter_keys_by_value(d, threshold):
    # Write your code here
    pass`,
        functionName: 'filter_keys_by_value',
        testCases: [
            { input: '({"a": 10, "b": 5}, 5)', expected: 'None' }, // Side effect check
            { input: '({"a": 1, "b": 2}, 0)', expected: 'None' },
            { input: '({"a": 1}, 10)', expected: 'None' }
        ],
        hint: 'Iterate copy of keys, del if value <= threshold.'
    },
    {
        id: 'py-oppe2-set2-p7',
        title: 'Happy Numbers',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'n_happy_numbers' that takes a list of integers. Return the count of happy numbers in the list.
        
A happy number is a number which eventually reaches 1 when replaced by the sum of the square of each digit.`,
        examples: [
            { input: '[19, 20]', output: '1' }, // 19 is happy, 20 is not
            { input: '[1, 7]', output: '2' }
        ],
        starterCode: `def n_happy_numbers(numbers):
    # Write your code here
    pass`,
        functionName: 'n_happy_numbers',
        testCases: [
            { input: '([19, 20])', expected: '1' },
            { input: '([1, 7, 10])', expected: '3' },
            { input: '([2, 4])', expected: '0' }
        ],
        hint: 'Helper function for is_happy.'
    },
    {
        id: 'py-oppe2-set2-p8',
        title: 'Best Performers',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Given a list of dictionaries representing overs bowled by bowlers (keys: 'bowler', 'runs', 'wickets'), generate a ranking of bowlers.
        
Criteria:
1. Most wickets (descending)
2. Best economy rate (runs/overs) (ascending)
3. Alphabetical order of name (ascending)

Return a list of bowler names in ranked order.`,
        examples: [
            { input: 'overs=[{"bowler": "A", "runs": 10, "wickets": 1}, {"bowler": "B", "runs": 20, "wickets": 2}]', output: "['B', 'A']" },
            { input: 'overs=[{"bowler": "X", "runs": 5, "wickets": 1}, {"bowler": "Y", "runs": 10, "wickets": 1}]', output: "['X', 'Y']" }
        ],
        starterCode: `def best_performers(overs):
    # Write your code here
    pass`,
        functionName: 'best_performers',
        testCases: [
            { input: '([{"bowler": "A", "runs": 10, "wickets": 1}, {"bowler": "B", "runs": 20, "wickets": 2}])', expected: "['B', 'A']" },
            { input: '([{"bowler": "A", "runs": 10, "wickets": 1}, {"bowler": "B", "runs": 5, "wickets": 1}])', expected: "['B', 'A']" },
            { input: '([{"bowler": "X", "runs": 5, "wickets": 1}, {"bowler": "Y", "runs": 10, "wickets": 1}])', expected: "['X', 'Y']" }
        ],
        hint: 'Calculate stats per bowler.'
    },
    {
        id: 'py-oppe2-set2-p9',
        title: 'Total Price',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'calculate_total_price' that takes two filenames: prices_file and shopping_file.
        
prices_file: CSV with Product, Price.
shopping_file: CSV with Product, Quantity.`,
        setupCode: `with open("prices.csv", "w") as f:
    f.write("Product,Price\\nApple,10\\nBanana,5")
with open("shopping.csv", "w") as f:
    f.write("Product,Quantity\\nApple,5\\nBanana,10")
with open("p.csv", "w") as f:
    f.write("Product,Price\\nApple,10\\nBanana,5")
with open("s.csv", "w") as f:
    f.write("Product,Quantity\\nApple,5\\nBanana,10")`,
        examples: [
            { input: 'prices_file="prices.csv", shopping_file="shopping.csv"', output: '100.0' }
        ],
        starterCode: `def calculate_total_price(prices_file, shopping_file):
    # Write your code here
    pass`,
        functionName: 'calculate_total_price',
        testCases: [
            { input: '("prices.csv", "shopping.csv")', expected: '100.0' },
            { input: '("p.csv", "s.csv")', expected: '50.0' }
        ], // File I/O
        hint: 'Read both CSVs, join on Product ID/Name.'
    },

    // --- Set 3 ---
    {
        id: 'py-oppe2-set3-p1',
        title: 'Arithmetic Operations',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'arithmetic_operations' that takes a tuple t = (a, b). Return a tuple containing (sum, difference, product, integer quotient) of a and b.`,
        examples: [
            { input: '(1, 2)', output: '(3, -1, 2, 0)' },
            { input: '(10, 5)', output: '(15, 5, 50, 2)' }
        ],
        starterCode: `def arithmetic_operations(t):
    # Write your code here
    pass`,
        functionName: 'arithmetic_operations',
        testCases: [
            { input: '((1, 2))', expected: '(3, -1, 2, 0)' },
            { input: '((10, 5))', expected: '(15, 5, 50, 2)' },
            { input: '((5, 10))', expected: '(15, -5, 50, 0)' }
        ],
        hint: 'Return (a+b, a-b, a*b, a//b)'
    },
    {
        id: 'py-oppe2-set3-p2',
        title: 'Second Largest',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'second_largest' that takes a list of distinct integers and returns the second largest number in the list.`,
        examples: [
            { input: '[1, 2, 3, 4, 5]', output: '4' },
            { input: '[10, 20]', output: '10' }
        ],
        starterCode: `def second_largest(lst):
    # Write your code here
    pass`,
        functionName: 'second_largest',
        testCases: [
            { input: '([1, 2, 3, 4, 5])', expected: '4' },
            { input: '([10, 20])', expected: '10' },
            { input: '([5, 1, 10, 2])', expected: '5' }
        ],
        hint: 'Sort and pick second last.'
    },
    {
        id: 'py-oppe2-set3-p3',
        title: 'Not Present in Both',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a function 'not_present_in_both' that takes two lists lst1 and lst2. Return a list of items that are present in either lst1 or lst2, but NOT in both (symmetric difference). The result should be sorted.`,
        examples: [
            { input: 'lst1=[1, 2, 3], lst2=[3, 4, 5]', output: '[1, 2, 4, 5]' }
        ],
        starterCode: `def not_present_in_both(lst1, lst2):
    # Write your code here
    pass`,
        functionName: 'not_present_in_both',
        testCases: [
            { input: '([1, 2, 3], [3, 4, 5])', expected: '[1, 2, 4, 5]' },
            { input: '([1, 2], [1, 2])', expected: '[]' },
            { input: '([1], [2])', expected: '[1, 2]' }
        ],
        hint: 'sorted(list(set(lst1) ^ set(lst2)))'
    },
    {
        id: 'py-oppe2-set3-p4',
        title: 'String to Dict',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'string_to_dict' that takes a string of comma-separated key-value pairs (e.g., "a=1,b=2"). Return a dictionary where keys are strings and values are integers.`,
        examples: [
            { input: '"a=1,b=2"', output: "{'a': 1, 'b': 2}" }
        ],
        starterCode: `def string_to_dict(s):
    # Write your code here
    pass`,
        functionName: 'string_to_dict',
        testCases: [
            { input: '("a=1,b=2")', expected: "{'a': 1, 'b': 2}" },
            { input: '("x=10,y=20,z=30")', expected: "{'x': 10, 'y': 20, 'z': 30}" },
            { input: '("key=0")', expected: "{'key': 0}" }
        ],
        hint: 'Split by comma, then by equals.'
    },
    {
        id: 'py-oppe2-set3-p5',
        title: 'Modify String',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'modify_string_1' that takes a string s. Separate the characters at even indices and odd indices. Return a new string formed by concatenating the characters at even indices followed by the characters at odd indices in reverse order.`,
        examples: [
            { input: '"abcde"', output: '"acedb"' },
            { input: '"1234"', output: '"1342"' }
        ],
        starterCode: `def modify_string_1(s):
    # Write your code here
    pass`,
        functionName: 'modify_string_1',
        testCases: [
            { input: '("abcde")', expected: '"acedb"' },
            { input: '("1234")', expected: '"1342"' },
            { input: '("a")', expected: '"a"' }
        ],
        hint: 's[::2] + s[1:][::-1]'
    },
    {
        id: 'py-oppe2-set3-p6',
        title: 'Invert Dictionary',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'invert_dict' that takes a dictionary d. Return a new dictionary where keys are the values from d and values are lists of keys from d that mapped to that value. The lists should be sorted.`,
        examples: [
            { input: '{"a": 1, "b": 1, "c": 2}', output: '{1: ["a", "b"], 2: ["c"]}' }
        ],
        starterCode: `def invert_dict(d):
    # Write your code here
    pass`,
        functionName: 'invert_dict',
        testCases: [
            { input: '({"a": 1, "b": 1, "c": 2})', expected: '{1: ["a", "b"], 2: ["c"]}' },
            { input: '({"x": 10})', expected: '{10: ["x"]}' },
            { input: '({})', expected: '{}' }
        ],
        hint: 'Iterate items, append to list in new dict.'
    },
    {
        id: 'py-oppe2-set3-p7',
        title: 'Average of Numbers',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a function 'average_of_numbers' that takes a list containing various types of elements. Calculate the average of all integers and floats in the list. Return the average rounded to 2 decimal places. If there are no numbers, return -1.`,
        examples: [
            { input: '[1, "a", 2.5, 3]', output: '2.17' },
            { input: '["a", "b"]', output: '-1' }
        ],
        starterCode: `def average_of_numbers(lst):
    # Write your code here
    pass`,
        functionName: 'average_of_numbers',
        testCases: [
            { input: '([1, "a", 2.5, 3])', expected: '2.17' },
            { input: '(["a", "b"])', expected: '-1' },
            { input: '([10, 20])', expected: '15.0' }
        ],
        hint: 'Filter numbers, sum/count.'
    },
    {
        id: 'py-oppe2-set3-p8',
        title: 'Sort by Age',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Given a list of tuples (name, age), write a function 'sort_by_age' that sorts the list by age in ascending order. If ages are same, sort by name alphabetically.`,
        examples: [
            { input: '[("A", 25), ("B", 20)]', output: '[("B", 20), ("A", 25)]' },
            { input: '[("X", 30), ("Y", 30)]', output: '[("X", 30), ("Y", 30)]' }
        ],
        starterCode: `def sort_by_age(people):
    # Write your code here
    pass`,
        functionName: 'sort_by_age',
        testCases: [
            { input: '([("A", 25), ("B", 20)])', expected: '[("B", 20), ("A", 25)]' },
            { input: '([("A", 20), ("B", 20)])', expected: '[("A", 20), ("B", 20)]' },
            { input: '([("Z", 30), ("A", 20)])', expected: '[("A", 20), ("Z", 30)]' }
        ],
        hint: 'Sort with key lambda x: (x[1], x[0]).'
    },
    {
        id: 'py-oppe2-set3-p9',
        title: 'Most Frequent Alpha',
        subject: 'Python',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Write a function 'most_frequent_alpha_character' that takes a filename. Read the file and find the alphabetic character (case-sensitive) that appears most frequently. Return the character. If there are ties, return the one that appears first alphabetically.`,
        setupCode: `with open("test.txt", "w") as f:
    f.write("apple")
with open("test2.txt", "w") as f:
    f.write("banana")`,
        examples: [
            { input: 'filename="test.txt" (content: "apple")', output: '"p"' },
            { input: 'filename="test2.txt" (content: "banana")', output: '"a"' }
        ],
        starterCode: `def most_frequent_alpha_character(filename):
    # Write your code here
    pass`,
        functionName: 'most_frequent_alpha_character',
        testCases: [
            { input: '("test.txt")', expected: '"p"' } // Mocking required
        ],
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
            { input: 'A=[[1,2],[3,4]], B=[[1,0],[0,1]]', output: '[[1, 2], [3, 4]]' },
            { input: 'A=[[1,2]], B=[[3],[4]]', output: '[[11]]' }
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
            { input: '{ "a": 1, "b": 1, "c": 2 }', output: '{ 1: ["a", "b"], 2: ["c"] }' },
            { input: '{"x": 10}', output: '{10: ["x"]}' }
        ],
        starterCode: `def invert_dict(d):
    # Write your code here
    pass`,
        functionName: 'invert_dict',
        testCases: [
            { input: '({"a": 1, "b": 1, "c": 2})', expected: '{1: ["a", "b"], 2: ["c"]}' },
            { input: '({"x": 10, "y": 20})', expected: '{10: ["x"], 20: ["y"]}' },
            { input: '({})', expected: '{}' }
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
            { input: '["flower","flow","flight"]', output: '"fl"' },
            { input: '["a", "b"]', output: '""' }
        ],
        starterCode: `def longest_common_prefix(strs):
    # Write your code here
    pass`,
        functionName: 'longest_common_prefix',
        testCases: [
            { input: '(["flower","flow","flight"])', expected: '"fl"' },
            { input: '(["dog","racecar","car"])', expected: '""' },
            { input: '(["a", "b"])', expected: '""' }
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
            { input: '[1, [2, [3, 4], 5], 6]', output: '[1, 2, 3, 4, 5, 6]' },
            { input: '[[1], 2]', output: '[1, 2]' }
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
            { input: '[[1,2,3],[4,5,6],[7,8,9]]', output: '[1,2,3,6,9,8,7,4,5]' },
            { input: '[[1, 2], [3, 4]]', output: '[1, 2, 4, 3]' }
        ],
        starterCode: `def spiral_order(matrix):
    # Write your code here
    pass`,
        functionName: 'spiral_order',
        testCases: [
            { input: '([[1,2,3],[4,5,6],[7,8,9]])', expected: '[1, 2, 3, 6, 9, 8, 7, 4, 5]' },
            { input: '([[1,2,3,4],[5,6,7,8],[9,10,11,12]])', expected: '[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]' },
            { input: '([[1, 2], [3, 4]])', expected: '[1, 2, 4, 3]' }
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
        examples: [{ input: '5', output: '120' }, { input: '3', output: '6' }],
        starterCode: `def factorial_rec(n):
    # Write your code here
    pass`,
        functionName: 'factorial_rec',
        testCases: [{ input: '(5)', expected: '120' }, { input: '(0)', expected: '1' }, { input: '(3)', expected: '6' }],
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
        examples: [{ input: '5', output: '5' }, { input: '1', output: '1' }],
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
        examples: [{ input: '12, 18', output: '6' }, { input: '10, 5', output: '5' }],
        starterCode: `def gcd_rec(a, b):
    # Write your code here
    pass`,
        functionName: 'gcd_rec',
        testCases: [{ input: '(12, 18)', expected: '6' }, { input: '(7, 13)', expected: '1' }, { input: '(10, 5)', expected: '5' }],
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
        examples: [{ input: '[1, 2, 3]', output: '6' }, { input: '[]', output: '0' }],
        starterCode: `def sum_list_rec(L):
    # Write your code here
    pass`,
        functionName: 'sum_list_rec',
        testCases: [{ input: '([1, 2, 3])', expected: '6' }, { input: '([])', expected: '0' }, { input: '([1])', expected: '1' }],
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
        examples: [{ input: '"hello"', output: '"olleh"' }, { input: '"a"', output: '"a"' }],
        starterCode: `def reverse_str_rec(s):
    # Write your code here
    pass`,
        functionName: 'reverse_str_rec',
        testCases: [{ input: '("hello")', expected: '"olleh"' }, { input: '("a")', expected: '"a"' }, { input: '("")', expected: '""' }],
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
        examples: [{ input: '2, 3', output: '8' }, { input: '10, 2', output: '100' }],
        starterCode: `def power_rec(x, n):
    # Write your code here
    pass`,
        functionName: 'power_rec',
        testCases: [{ input: '(2, 3)', expected: '8' }, { input: '(5, 0)', expected: '1' }, { input: '(10, 2)', expected: '100' }],
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
        examples: [{ input: '"racecar"', output: 'True' }, { input: '"aba"', output: 'True' }],
        starterCode: `def is_palindrome_rec(s):
    # Write your code here
    pass`,
        functionName: 'is_palindrome_rec',
        testCases: [{ input: '("racecar")', expected: 'True' }, { input: '("hello")', expected: 'False' }, { input: '("aba")', expected: 'True' }],
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
        examples: [{ input: '[1, 3, 5], 3', output: '1' }, { input: '[1], 1', output: '0' }],
        starterCode: `def binary_search_rec(L, x, low=0, high=None):
    if high is None: high = len(L) - 1
    # Write your code here
    pass`,
        functionName: 'binary_search_rec',
        testCases: [{ input: '([1, 3, 5], 3)', expected: '1' }, { input: '([1, 3, 5], 2)', expected: '-1' }, { input: '([1], 1)', expected: '0' }],
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
        examples: [{ input: '"hello"', output: '2' }, { input: '"xyz"', output: '0' }],
        starterCode: `def count_vowels_rec(s):
    # Write your code here
    pass`,
        functionName: 'count_vowels_rec',
        testCases: [{ input: '("hello")', expected: '2' }, { input: '("xyz")', expected: '0' }, { input: '("aeiou")', expected: '5' }],
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
        examples: [{ input: '[[1,2],[3,4]], [[1,1],[1,1]]', output: '[[2, 3], [4, 5]]' }, { input: '[[1]], [[2]]', output: '[[3]]' }],
        starterCode: `def matrix_add(A, B):
    # Write your code here
    pass`,
        functionName: 'matrix_add',
        testCases: [{ input: '([[1,2],[3,4]], [[1,1],[1,1]])', expected: '[[2, 3], [4, 5]]' }, { input: '([[1]], [[2]])', expected: '[[3]]' }, { input: '([[1, 2]], [[3, 4]])', expected: '[[4, 6]]' }],
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
        examples: [{ input: '[[1,2],[3,4]]', output: '[[1, 3], [2, 4]]' }, { input: '[[1]]', output: '[[1]]' }],
        starterCode: `def transpose_matrix(M):
    # Write your code here
    pass`,
        functionName: 'transpose_matrix',
        testCases: [{ input: '([[1,2],[3,4]])', expected: '[[1, 3], [2, 4]]' }, { input: '([[1]])', expected: '[[1]]' }, { input: '([[1, 2, 3]])', expected: '[[1], [2], [3]]' }],
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
        examples: [{ input: '[[1,2],[3,4]]', output: '5' }, { input: '[[1]]', output: '1' }],
        starterCode: `def diagonal_sum(M):
    # Write your code here
    pass`,
        functionName: 'diagonal_sum',
        testCases: [{ input: '([[1,2],[3,4]])', expected: '5' }, { input: '([[1]])', expected: '1' }, { input: '([[1,2,3],[4,5,6],[7,8,9]])', expected: '15' }],
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
        examples: [{ input: '[[1,2],[2,1]]', output: 'True' }, { input: '[[1,2],[3,4]]', output: 'False' }],
        starterCode: `def is_symmetric(M):
    # Write your code here
    pass`,
        functionName: 'is_symmetric',
        testCases: [{ input: '([[1,2],[2,1]])', expected: 'True' }, { input: '([[1,2],[3,4]])', expected: 'False' }, { input: '([[1]])', expected: 'True' }],
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
        examples: [{ input: '[[1,2],[3,4]]', output: '[3, 7]' }, { input: '[[1, 2, 3]]', output: '[6]' }],
        starterCode: `def row_sums(M):
    # Write your code here
    pass`,
        functionName: 'row_sums',
        testCases: [{ input: '([[1,2],[3,4]])', expected: '[3, 7]' }, { input: '([[1, 2, 3]])', expected: '[6]' }, { input: '([[1], [2], [3]])', expected: '[1, 2, 3]' }],
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
        examples: [{ input: '[[1,2],[3,4]]', output: '[4, 6]' }, { input: '[[1, 2], [3, 4], [5, 6]]', output: '[9, 12]' }],
        starterCode: `def col_sums(M):
    # Write your code here
    pass`,
        functionName: 'col_sums',
        testCases: [{ input: '([[1,2],[3,4]])', expected: '[4, 6]' }, { input: '([[1, 2], [3, 4], [5, 6]])', expected: '[9, 12]' }, { input: '([[1]])', expected: '[1]' }],
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
        examples: [{ input: '[[1,2],[3,4]]', output: '(1, 0)' }, { input: '[[3, 7, 8], [9, 11, 13], [15, 16, 17]]', output: '(2, 0)' }],
        starterCode: `def find_saddle_point(M):
    # Write your code here
    pass`,
        functionName: 'find_saddle_point',
        testCases: [{ input: '([[1,2],[3,4]])', expected: '(1, 0)' }, { input: '([[3,8],[4,6]])', expected: '(1, 0)' }, { input: '([[3, 7, 8], [9, 11, 13], [15, 16, 17]])', expected: '(2, 0)' }],
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
        examples: [{ input: '[[1,2],[3,4]]', output: '[[3, 1], [4, 2]]' }, { input: '[[1]]', output: '[[1]]' }],
        starterCode: `def rotate_matrix_90(M):
    # Write your code here
    return M`,
        functionName: 'rotate_matrix_90',
        testCases: [{ input: '([[1,2],[3,4]])', expected: '[[3, 1], [4, 2]]' }, { input: '([[1]])', expected: '[[1]]' }, { input: '([[1,2,3],[4,5,6],[7,8,9]])', expected: '[[7, 4, 1], [8, 5, 2], [9, 6, 3]]' }],
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
        examples: [{ input: '"babad"', output: '"bab"' }, { input: '"cbbd"', output: '"bb"' }],
        starterCode: `def longest_palindrome_sub(s):
    # Write your code here
    pass`,
        functionName: 'longest_palindrome_sub',
        testCases: [{ input: '("babad")', expected: '"bab"' }, { input: '("cbbd")', expected: '"bb"' }, { input: '("a")', expected: '"a"' }],
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
        examples: [{ input: '["eat", "tea", "tan", "ate", "nat", "bat"]', output: '[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]' }, { input: '[""]', output: '[[""]]' }],
        starterCode: `def group_anagrams(strs):
    # Write your code here
    pass`,
        functionName: 'group_anagrams',
        testCases: [{ input: '(["eat", "tea", "tan", "ate", "nat", "bat"])', expected: '[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]' }, { input: '([""])', expected: '[[""]]' }, { input: '(["a"])', expected: '[["a"]]' }],
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
        examples: [{ input: '"()[]{}"', output: 'True' }, { input: '"(]"', output: 'False' }],
        starterCode: `def is_valid_parens(s):
    # Write your code here
    pass`,
        functionName: 'is_valid_parens',
        testCases: [{ input: '("()[]{}" )', expected: 'True' }, { input: '("(]")', expected: 'False' }, { input: '("([)]")', expected: 'False' }],
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
        examples: [{ input: '"aabcccccaaa"', output: '"a2b1c5a3"' }, { input: '"abc"', output: '"abc"' }],
        starterCode: `def compress_string(s):
    # Write your code here
    pass`,
        functionName: 'compress_string',
        testCases: [{ input: '("aabcccccaaa")', expected: '"a2b1c5a3"' }, { input: '("abc")', expected: '"abc"' }, { input: '("aabb")', expected: '"aabb"' }],
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
        examples: [{ input: '[1, 2, 3]', output: '[[1, 2, 3], [1, 3, 2], ...]' }, { input: '[1]', output: '[[1]]' }],
        starterCode: `import itertools
    def get_permutations(L):
    # Write your code here
    pass`,
        functionName: 'get_permutations',
        testCases: [{ input: '([1, 2])', expected: '[[1, 2], [2, 1]]' }, { input: '([1])', expected: '[[1]]' }, { input: '([])', expected: '[[]]' }],
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
        examples: [{ input: '[1, 2]', output: '[[], [1], [2], [1, 2]]' }, { input: '[1]', output: '[[], [1]]' }],
        starterCode: `def get_subsets(nums):
    # Write your code here
    pass`,
        functionName: 'get_subsets',
        testCases: [{ input: '([1, 2])', expected: '[[], [1], [2], [1, 2]]' }, { input: '([1])', expected: '[[], [1]]' }, { input: '([])', expected: '[[]]' }],
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
        examples: [{ input: '[[1,3],[2,6],[8,10]]', output: '[[1, 6], [8, 10]]' }, { input: '[[1,4],[4,5]]', output: '[[1, 5]]' }],
        starterCode: `def merge_intervals(intervals):
    # Write your code here
    pass`,
        functionName: 'merge_intervals',
        testCases: [{ input: '([[1,3],[2,6],[8,10]])', expected: '[[1, 6], [8, 10]]' }, { input: '([[1,4],[4,5]])', expected: '[[1, 5]]' }, { input: '([[1,4],[2,3]])', expected: '[[1, 4]]' }],
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
        examples: [{ input: '[1, 2, 3, 4]', output: '[24, 12, 8, 6]' }, { input: '[-1, 1, 0, -3, 3]', output: '[0, 0, 9, 0, 0]' }],
        starterCode: `def product_except_self(nums):
    # Write your code here
    pass`,
        functionName: 'product_except_self',
        testCases: [{ input: '([1, 2, 3, 4])', expected: '[24, 12, 8, 6]' }, { input: '([-1, 1, 0, -3, 3])', expected: '[0, 0, 9, 0, 0]' }, { input: '([5, 2])', expected: '[2, 5]' }],
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
        setupCode: `with open("lines.txt", "w") as f:
    f.write("Line 1\\nLine 2\\nLine 3")`,
        examples: [{ input: '"line1\\nline2"', output: '2' }, { input: '"line1"', output: '1' }],
        starterCode: `def count_file_lines(content):
    # Write your code here
    pass`,
        functionName: 'count_file_lines',
        testCases: [{ input: '("line1\\nline2")', expected: '2' }, { input: '("line1")', expected: '1' }, { input: '("")', expected: '0' }],
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
        setupCode: `with open("words.txt", "w") as f:
    f.write("Hello world this is a test")`,
        examples: [{ input: '"hello world\\nhi"', output: '3' }, { input: '"hello"', output: '1' }],
        starterCode: `def count_file_words(content):
    # Write your code here
    pass`,
        functionName: 'count_file_words',
        testCases: [{ input: '("hello world\\nhi")', expected: '3' }, { input: '("hello")', expected: '1' }, { input: '("")', expected: '0' }],
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
        examples: [{ input: '"short\\nlonger line"', output: '"longer line"' }, { input: '"a\\nb\\nc"', output: '"a"' }],
        starterCode: `def longest_line(content):
    # Write your code here
    pass`,
        functionName: 'longest_line',
        testCases: [{ input: '("short\\nlonger line")', expected: '"longer line"' }, { input: '("a\\nb\\nc")', expected: '"a"' }, { input: '("")', expected: '""' }],
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
        setupCode: `with open("search.txt", "w") as f:
    f.write("The quick brown fox jumps over the lazy dog")`,
        examples: [{ input: '"hello world", "world"', output: 'True' }, { input: '"hello world", "python"', output: 'False' }],
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
        setupCode: `with open("nums.txt", "w") as f:
    f.write("10 20 30")`,
        examples: [{ input: '"10 20\\n30"', output: '20.0' }, { input: '"1 2 3"', output: '2.0' }],
        starterCode: `def avg_nums_in_file(content):
    # Write your code here
    pass`,
        functionName: 'avg_nums_in_file',
        testCases: [{ input: '("10 20\\n30")', expected: '20.0' }, { input: '("1 2 3")', expected: '2.0' }, { input: '("5")', expected: '5.0' }],
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
        examples: [{ input: '[{"k":"a", "v":1}, {"k":"a", "v":2}]', output: '{"a": [{"k":"a", "v":1}, {"k":"a", "v":2}]}' }, { input: '[{"k":"b", "v":3}]', output: '{"b": [{"k":"b", "v":3}]}' }],
        starterCode: `def group_by_key(data, key):
    # Write your code here
    pass`,
        functionName: 'group_by_key',
        testCases: [{ input: '([{"k":"a", "v":1}, {"k":"a", "v":2}], "k")', expected: '{"a": [{"k": "a", "v": 1}, {"k": "a", "v": 2}]}' }, { input: '([{"k":"b", "v":3}], "k")', expected: '{"b": [{"k": "b", "v": 3}]}' }, { input: '([], "k")', expected: '{}' }],
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
        examples: [{ input: '{"a": {"x": 1}}, {"a": {"y": 2}}', output: '{"a": {"x": 1, "y": 2}}' }, { input: '{"a": 1}, {"b": 2}', output: '{"a": 1, "b": 2}' }],
        starterCode: `def deep_merge(d1, d2):
    # Write your code here
    pass`,
        functionName: 'deep_merge',
        testCases: [{ input: '({"a": {"x": 1}}, {"a": {"y": 2}})', expected: '{"a": {"x": 1, "y": 2}}' }, { input: '({"a": 1}, {"b": 2})', expected: '{"a": 1, "b": 2}' }, { input: '({}, {"a": 1})', expected: '{"a": 1}' }],
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
        examples: [{ input: '[1, 2], [2, 3]', output: '0.3333' }, { input: '[1], [1]', output: '1.0' }],
        starterCode: `def jaccard_similarity(L1, L2):
    # Write your code here
    pass`,
        functionName: 'jaccard_similarity',
        testCases: [{ input: '([1, 2], [2, 3])', expected: '0.3333' }, { input: '([1], [1])', expected: '1.0' }, { input: '([1], [2])', expected: '0.0' }],
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
        examples: [{ input: '[1, 2], [2, 3]', output: '[1, 3]' }, { input: '[1], [1]', output: '[]' }],
        starterCode: `def sym_diff(L1, L2):
    # Write your code here
    pass`,
        functionName: 'sym_diff',
        testCases: [{ input: '([1, 2], [2, 3])', expected: '[1, 3]' }, { input: '([1], [1])', expected: '[]' }, { input: '([1], [2])', expected: '[1, 2]' }],
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
        examples: [{ input: '[(1, 3), (2, 2)]', output: '[(2, 2), (1, 3)]' }, { input: '[(1, 1)]', output: '[(1, 1)]' }],
        starterCode: `def sort_tuples(L):
    # Write your code here
    pass`,
        functionName: 'sort_tuples',
        testCases: [{ input: '([(1, 3), (2, 2)])', expected: '[(2, 2), (1, 3)]' }, { input: '([(1, 1)])', expected: '[(1, 1)]' }, { input: '([])', expected: '[]' }],
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
        examples: [{ input: '[1, [2, [3]]]', output: '[1, 2, 3]' }, { input: '[[1], 2]', output: '[1, 2]' }],
        starterCode: `def flatten_deep(L):
    # Write your code here
    pass`,
        functionName: 'flatten_deep',
        testCases: [{ input: '([1, [2, [3]]])', expected: '[1, 2, 3]' }, { input: '([[1], 2])', expected: '[1, 2]' }, { input: '([])', expected: '[]' }],
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
        examples: [{ input: '[[1,1],[1,0]]', output: '[[1, 0], [0, 0]]' }, { input: '[[0]]', output: '[[0]]' }],
        starterCode: `def zero_matrix(M):
    # Write your code here
    pass`,
        functionName: 'zero_matrix',
        testCases: [{ input: '([[1,1],[1,0]])', expected: '[[1, 0], [0, 0]]' }, { input: '([[0]])', expected: '[[0]]' }, { input: '([[1, 2], [3, 4]])', expected: '[[1, 2], [3, 4]]' }],
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
        examples: [{ input: '"abc", "ahbgdc"', output: 'True' }, { input: '"axc", "ahbgdc"', output: 'False' }],
        starterCode: `def is_subsequence(s, t):
    # Write your code here
    pass`,
        functionName: 'is_subsequence',
        testCases: [{ input: '("abc", "ahbgdc")', expected: 'True' }, { input: '("axc", "ahbgdc")', expected: 'False' }, { input: '("", "ahbgdc")', expected: 'True' }],
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
        examples: [{ input: '[0, 1, 0, 3, 12]', output: '[1, 3, 12, 0, 0]' }, { input: '[0]', output: '[0]' }],
        starterCode: `def move_zeroes(nums):
    # Write your code here
    pass`,
        functionName: 'move_zeroes',
        testCases: [{ input: '([0, 1, 0, 3, 12])', expected: '[1, 3, 12, 0, 0]' }, { input: '([0])', expected: '[0]' }, { input: '([1, 2])', expected: '[1, 2]' }],
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
        examples: [{ input: '[1, 2, 3]', output: '[1, 2, 4]' }, { input: '[9]', output: '[1, 0]' }],
        starterCode: `def plus_one(digits):
    # Write your code here
    pass`,
        functionName: 'plus_one',
        testCases: [{ input: '([1, 2, 3])', expected: '[1, 2, 4]' }, { input: '([9])', expected: '[1, 0]' }, { input: '([4, 3, 2, 1])', expected: '[4, 3, 2, 2]' }],
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
        examples: [{ input: '"11", "1"', output: '"100"' }, { input: '"1010", "1011"', output: '"10101"' }],
        starterCode: `def add_binary(a, b):
    # Write your code here
    pass`,
        functionName: 'add_binary',
        testCases: [{ input: '("11", "1")', expected: '"100"' }, { input: '("1010", "1011")', expected: '"10101"' }, { input: '("0", "0")', expected: '"0"' }],
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
        examples: [{ input: '8', output: '2' }, { input: '4', output: '2' }],
        starterCode: `def my_sqrt(x):
    # Write your code here
    pass`,
        functionName: 'my_sqrt',
        testCases: [{ input: '(8)', expected: '2' }, { input: '(4)', expected: '2' }, { input: '(1)', expected: '1' }],
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
        examples: [{ input: '[3, 2, 3]', output: '3' }, { input: '[2, 2, 1, 1, 1, 2, 2]', output: '2' }],
        starterCode: `def majority_element(nums):
    # Write your code here
    pass`,
        functionName: 'majority_element',
        testCases: [{ input: '([3, 2, 3])', expected: '3' }, { input: '([2, 2, 1, 1, 1, 2, 2])', expected: '2' }, { input: '([1])', expected: '1' }],
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
        examples: [{ input: '"egg", "add"', output: 'True' }, { input: '"foo", "bar"', output: 'False' }],
        starterCode: `def is_isomorphic(s, t):
    # Write your code here
    pass`,
        functionName: 'is_isomorphic',
        testCases: [{ input: '("egg", "add")', expected: 'True' }, { input: '("foo", "bar")', expected: 'False' }, { input: '("paper", "title")', expected: 'True' }],
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
        examples: [{ input: '[1, 2, 3, 1]', output: 'True' }, { input: '[1, 2, 3, 4]', output: 'False' }],
        starterCode: `def contains_duplicate(nums):
    # Write your code here
    pass`,
        functionName: 'contains_duplicate',
        testCases: [{ input: '([1, 2, 3, 1])', expected: 'True' }, { input: '([1, 2, 3, 4])', expected: 'False' }, { input: '([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])', expected: 'True' }],
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
        examples: [{ input: '[3, 0, 1]', output: '2' }, { input: '[0, 1]', output: '2' }],
        starterCode: `def missing_number(nums):
    # Write your code here
    pass`,
        functionName: 'missing_number',
        testCases: [{ input: '([3, 0, 1])', expected: '2' }, { input: '([0, 1])', expected: '2' }, { input: '([9,6,4,2,3,5,7,0,1])', expected: '8' }],
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
        examples: [{ input: '"hello"', output: '"holle"' }, { input: '"leetcode"', output: '"leotcede"' }],
        starterCode: `def reverse_vowels(s):
    # Write your code here
    pass`,
        functionName: 'reverse_vowels',
        testCases: [{ input: '("hello")', expected: '"holle"' }, { input: '("leetcode")', expected: '"leotcede"' }, { input: '("aA")', expected: '"Aa"' }],
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
        examples: [{ input: '[1, 2, 2, 1], [2, 2]', output: '[2, 2]' }, { input: '[4, 9, 5], [9, 4, 9, 8, 4]', output: '[4, 9]' }],
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
        examples: [{ input: '"leetcode"', output: '0' }, { input: '"loveleetcode"', output: '2' }],
        starterCode: `def first_uniq_char(s):
    # Write your code here
    pass`,
        functionName: 'first_uniq_char',
        testCases: [{ input: '("leetcode")', expected: '0' }, { input: '("loveleetcode")', expected: '2' }, { input: '("aabb")', expected: '-1' }],
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
        examples: [{ input: '"a", "b"', output: 'False' }, { input: '"aa", "aab"', output: 'True' }],
        starterCode: `def can_construct(ransomNote, magazine):
    # Write your code here
    pass`,
        functionName: 'can_construct',
        testCases: [{ input: '("a", "b")', expected: 'False' }, { input: '("aa", "aab")', expected: 'True' }, { input: '("aa", "ab")', expected: 'False' }],
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
        examples: [{ input: '\'{"name": "John", "age": 30}\'', output: '{"name": "John", "age": 30}' }, { input: '\'invalid\'', output: 'None' }],
        starterCode: `import json
def parse_json_content(content):
    # Write your code here
    pass`,
        functionName: 'parse_json_content',
        testCases: [
            { input: '(\'{"name": "John", "age": 30}\')', expected: '{"name": "John", "age": 30}' },
            { input: '(\'invalid json\')', expected: 'None' },
            { input: '(\'{"x": [1, 2]}\')', expected: '{"x": [1, 2]}' }
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
        setupCode: `with open("file1.txt", "w") as f:
    f.write("Content")
with open("file2.txt", "w") as f:
    f.write("Content")`,
        examples: [{ input: '"content1", "content1"', output: 'True' }, { input: '"a", "b"', output: 'False' }],
        starterCode: `def compare_files(content1, content2):
    # Write your code here
    pass`,
        functionName: 'compare_files',
        testCases: [
            { input: '("content1", "content1")', expected: 'True' },
            { input: '("content1", "content2")', expected: 'False' },
            { input: '("", "")', expected: 'True' }
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
        examples: [{ input: '"INFO: started\\nERROR: failed\\nINFO: ok"', output: '["ERROR: failed"]' }, { input: '"ERROR: 1\\nERROR: 2"', output: '["ERROR: 1", "ERROR: 2"]' }],
        starterCode: `def parse_logs(content):
    # Write your code here
    pass`,
        functionName: 'parse_logs',
        testCases: [
            { input: '("INFO: started\\nERROR: failed\\nINFO: ok")', expected: '["ERROR: failed"]' },
            { input: '("INFO: all good")', expected: '[]' },
            { input: '("ERROR: 1\\nERROR: 2")', expected: '["ERROR: 1", "ERROR: 2"]' }
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
        examples: [{ input: '"abc"', output: '294' }, { input: '"A"', output: '65' }],
        starterCode: `def simple_checksum(content):
    # Write your code here
    pass`,
        functionName: 'simple_checksum',
        testCases: [
            { input: '("abc")', expected: '294' },
            { input: '("a")', expected: '97' },
            { input: '("")', expected: '0' }
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
        examples: [{ input: '"contact: john@example.com or jane@test.org"', output: '["john@example.com", "jane@test.org"]' }, { input: '"no email"', output: '[]' }],
        starterCode: `def extract_emails(content):
    # Write your code here
    pass`,
        functionName: 'extract_emails',
        testCases: [
            { input: '("contact: john@example.com or jane@test.org")', expected: '["john@example.com", "jane@test.org"]' },
            { input: '("no emails here")', expected: '[]' },
            { input: '("test@test.com")', expected: '["test@test.com"]' }
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
        examples: [{ input: '"a,b,c\\n1,2,3"', output: 'True' }, { input: '"a,b\\n1,2,3"', output: 'False' }],
        starterCode: `def validate_csv(content):
    # Write your code here
    pass`,
        functionName: 'validate_csv',
        testCases: [
            { input: '("a,b,c\\n1,2,3")', expected: 'True' },
            { input: '("a,b\\n1,2,3")', expected: 'False' },
            { input: '("a,b,c\\n1,2")', expected: 'False' }
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
        setupCode: `with open("freq.txt", "w") as f:
    f.write("Hello hello world")`,
        examples: [{ input: '"Hello world\\nHello"', output: '{"hello": 2, "world": 1}' }, { input: '"a"', output: '{"a": 1}' }],
        starterCode: `def file_word_frequency(content):
    # Write your code here
    pass`,
        functionName: 'file_word_frequency',
        testCases: [
            { input: '("Hello world\\nHello")', expected: '{"hello": 2, "world": 1}' },
            { input: '("a b a")', expected: '{"a": 2, "b": 1}' },
            { input: '("")', expected: '{}' }
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
        examples: [{ input: '"apple banana apple orange banana apple", 2', output: '[("apple", 3), ("banana", 2)]' }, { input: '"a b", 1', output: '[("a", 1)]' }],
        starterCode: `def top_n_words(content, n):
    # Write your code here
    pass`,
        functionName: 'top_n_words',
        testCases: [
            { input: '("apple banana apple orange banana apple", 2)', expected: '[("apple", 3), ("banana", 2)]' },
            { input: '("a b c", 1)', expected: '[("a", 1)]' },
            { input: '("a a b", 2)', expected: '[("a", 2), ("b", 1)]' }
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
        examples: [{ input: '"name,age\\nJohn,25\\nJane,30"', output: '"name age\\nJohn 25 \\nJane 30 "' }, { input: '"a\\n1"', output: '"a\\n1"' }],
        starterCode: `def format_table(csv_content):
    # Write your code here
    pass`,
        functionName: 'format_table',
        testCases: [
            { input: '("name,age\\nJohn,25")', expected: '"name age\\nJohn 25 "' },
            { input: '("a,b\\n1,2")', expected: '"a b\\n1 2"' }
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
        setupCode: `with open("files.txt", "w") as f:
    f.write("file1.txt\\nfile2.py\\nfile3.txt")`,
        examples: [{ input: '"file1.txt\\nfile2.txt\\nfile3.py"', output: '{".txt": 2, ".py": 1}' }, { input: '"a.c"', output: '{".c": 1}' }],
        starterCode: `def count_file_types(content):
    # Write your code here
    pass`,
        functionName: 'count_file_types',
        testCases: [
            { input: '("file1.txt\\nfile2.txt\\nfile3.py")', expected: '{".txt": 2, ".py": 1}' },
            { input: '("test.js")', expected: '{".js": 1}' },
            { input: '("no_ext")', expected: '{}' }
        ],
        hint: 'Extract extensions and count.'
    }
];

