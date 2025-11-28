import { Problem } from '../types';

export const MLP_OPPE1_PROBLEMS: Problem[] = [
    // --- EXISTING PROBLEMS ---
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

    // --- NEW PROBLEMS (50) ---

    // 1. Numpy: Create Array
    {
        id: 'mlp-oppe1-np-create',
        title: 'Create Numpy Array',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Create a numpy array from a list. (Simulated return list).`,
        examples: [{ input: '[1, 2, 3]', output: '[1, 2, 3]' }],
        starterCode: `import numpy as np
    def create_array(L):
    # Write your code here
    pass`,
        functionName: 'create_array',
        testCases: [{ input: '([1, 2, 3])', expected: '[1, 2, 3]' }],
        hint: 'np.array(L).'
    },
    // 2. Numpy: Array Shape
    {
        id: 'mlp-oppe1-np-shape',
        title: 'Array Shape',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Return shape of 2D array (list of lists).`,
        examples: [{ input: '[[1,2],[3,4]]', output: '(2, 2)' }],
        starterCode: `import numpy as np
    def get_shape(L):
    # Write your code here
    pass`,
        functionName: 'get_shape',
        testCases: [{ input: '([[1,2],[3,4]])', expected: '(2, 2)' }],
        hint: 'np.array(L).shape.'
    },
    // 3. Numpy: Zeros
    {
        id: 'mlp-oppe1-np-zeros',
        title: 'Zeros Array',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Create array of zeros of size n.`,
        examples: [{ input: '3', output: '[0.0, 0.0, 0.0]' }],
        starterCode: `import numpy as np
    def create_zeros(n):
    # Write your code here
    pass`,
        functionName: 'create_zeros',
        testCases: [{ input: '(3)', expected: '[0.0, 0.0, 0.0]' }],
        hint: 'np.zeros(n).'
    },
    // 4. Numpy: Ones
    {
        id: 'mlp-oppe1-np-ones',
        title: 'Ones Array',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Create array of ones of shape (r, c).`,
        examples: [{ input: '2, 2', output: '[[1.0, 1.0], [1.0, 1.0]]' }],
        starterCode: `import numpy as np
    def create_ones(r, c):
    # Write your code here
    pass`,
        functionName: 'create_ones',
        testCases: [{ input: '(2, 2)', expected: '[[1.0, 1.0], [1.0, 1.0]]' }],
        hint: 'np.ones((r, c)).'
    },
    // 5. Numpy: Reshape
    {
        id: 'mlp-oppe1-np-reshape',
        title: 'Reshape Array',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Reshape 1D array to (r, c).`,
        examples: [{ input: '[1,2,3,4], 2, 2', output: '[[1, 2], [3, 4]]' }],
        starterCode: `import numpy as np
    def reshape_array(L, r, c):
    # Write your code here
    pass`,
        functionName: 'reshape_array',
        testCases: [{ input: '([1,2,3,4], 2, 2)', expected: '[[1, 2], [3, 4]]' }],
        hint: 'np.array(L).reshape(r, c).'
    },
    // 6. Numpy: Mean
    {
        id: 'mlp-oppe1-np-mean',
        title: 'Array Mean',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Calculate mean of array.`,
        examples: [{ input: '[1, 2, 3]', output: '2.0' }],
        starterCode: `import numpy as np
    def calc_mean(L):
    # Write your code here
    pass`,
        functionName: 'calc_mean',
        testCases: [{ input: '([1, 2, 3])', expected: '2.0' }],
        hint: 'np.mean(L).'
    },
    // 7. Numpy: Median
    {
        id: 'mlp-oppe1-np-median',
        title: 'Array Median',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Calculate median of array.`,
        examples: [{ input: '[1, 3, 2]', output: '2.0' }],
        starterCode: `import numpy as np
    def calc_median(L):
    # Write your code here
    pass`,
        functionName: 'calc_median',
        testCases: [{ input: '([1, 3, 2])', expected: '2.0' }],
        hint: 'np.median(L).'
    },
    // 8. Numpy: Std Dev
    {
        id: 'mlp-oppe1-np-std',
        title: 'Standard Deviation',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Calculate standard deviation (round to 2 decimals).`,
        examples: [{ input: '[1, 2, 3]', output: '0.82' }],
        starterCode: `import numpy as np
    def calc_std(L):
    # Write your code here
    pass`,
        functionName: 'calc_std',
        testCases: [{ input: '([1, 2, 3])', expected: '0.82' }],
        hint: 'np.std(L).'
    },
    // 9. Numpy: Matrix Multiply
    {
        id: 'mlp-oppe1-np-matmul',
        title: 'Matrix Multiplication',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Multiply two matrices using numpy.`,
        examples: [{ input: '[[1,2],[3,4]], [[1,0],[0,1]]', output: '[[1, 2], [3, 4]]' }],
        starterCode: `import numpy as np
    def np_matmul(A, B):
    # Write your code here
    pass`,
        functionName: 'np_matmul',
        testCases: [{ input: '([[1,2],[3,4]], [[1,0],[0,1]])', expected: '[[1, 2], [3, 4]]' }],
        hint: 'np.dot(A, B) or A @ B.'
    },
    // 10. Numpy: Transpose
    {
        id: 'mlp-oppe1-np-transpose',
        title: 'Matrix Transpose',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Transpose matrix using numpy.`,
        examples: [{ input: '[[1,2],[3,4]]', output: '[[1, 3], [2, 4]]' }],
        starterCode: `import numpy as np
    def np_transpose(A):
    # Write your code here
    pass`,
        functionName: 'np_transpose',
        testCases: [{ input: '([[1,2],[3,4]])', expected: '[[1, 3], [2, 4]]' }],
        hint: 'np.array(A).T.'
    },
    // 11. Pandas: Create DataFrame
    {
        id: 'mlp-oppe1-pd-create',
        title: 'Create DataFrame',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Create DataFrame from dict. Return column names list.`,
        examples: [{ input: '{"a": [1], "b": [2]}', output: '["a", "b"]' }],
        starterCode: `import pandas as pd
    def create_df(data):
    # Write your code here
    pass`,
        functionName: 'create_df',
        testCases: [{ input: '({"a": [1], "b": [2]})', expected: '["a", "b"]' }],
        hint: 'pd.DataFrame(data).columns.tolist().'
    },
    // 12. Pandas: Select Column
    {
        id: 'mlp-oppe1-pd-select',
        title: 'Select Column',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Return values of column 'col' as list.`,
        examples: [{ input: '{"a": [1, 2]}, "a"', output: '[1, 2]' }],
        starterCode: `import pandas as pd
    def select_col(data, col):
    df = pd.DataFrame(data)
    # Write your code here
    pass`,
        functionName: 'select_col',
        testCases: [{ input: '({"a": [1, 2]}, "a")', expected: '[1, 2]' }],
        hint: 'df[col].tolist().'
    },
    // 13. Pandas: Filter Rows
    {
        id: 'mlp-oppe1-pd-filter',
        title: 'Filter Rows',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Return rows where col > val (as list of dicts).`,
        examples: [{ input: '{"a": [1, 5]}, "a", 2', output: '[{"a": 5}]' }],
        starterCode: `import pandas as pd
    def filter_rows(data, col, val):
    df = pd.DataFrame(data)
    # Write your code here
    pass`,
        functionName: 'filter_rows',
        testCases: [{ input: '({"a": [1, 5]}, "a", 2)', expected: '[{"a": 5}]' }],
        hint: 'df[df[col] > val].to_dict("records").'
    },
    // 14. Pandas: Head
    {
        id: 'mlp-oppe1-pd-head',
        title: 'DataFrame Head',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Return first n rows as list of dicts.`,
        examples: [{ input: '{"a": [1, 2, 3]}, 2', output: '[{"a": 1}, {"a": 2}]' }],
        starterCode: `import pandas as pd
    def get_head(data, n):
    df = pd.DataFrame(data)
    # Write your code here
    pass`,
        functionName: 'get_head',
        testCases: [{ input: '({"a": [1, 2, 3]}, 2)', expected: '[{"a": 1}, {"a": 2}]' }],
        hint: 'df.head(n).'
    },
    // 15. Pandas: Describe
    {
        id: 'mlp-oppe1-pd-describe',
        title: 'DataFrame Describe',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Return mean of column 'a'.`,
        examples: [{ input: '{"a": [1, 2, 3]}', output: '2.0' }],
        starterCode: `import pandas as pd
    def get_col_mean(data):
    df = pd.DataFrame(data)
    # Write your code here
    pass`,
        functionName: 'get_col_mean',
        testCases: [{ input: '({"a": [1, 2, 3]})', expected: '2.0' }],
        hint: 'df["a"].mean().'
    },
    // 16. Sklearn: MinMaxScaler
    {
        id: 'mlp-oppe1-minmax',
        title: 'MinMax Scaler',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Scale list to [0, 1]. (Simulate logic: (x-min)/(max-min)).`,
        examples: [{ input: '[0, 5, 10]', output: '[0.0, 0.5, 1.0]' }],
        starterCode: `def minmax_scale(L):
    # Write your code here
    pass`,
        functionName: 'minmax_scale',
        testCases: [{ input: '([0, 5, 10])', expected: '[0.0, 0.5, 1.0]' }],
        hint: 'Compute min, max then apply formula.'
    },
    // 17. Sklearn: StandardScaler
    {
        id: 'mlp-oppe1-standard',
        title: 'Standard Scaler',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Standardize: (x - mean) / std.`,
        examples: [{ input: '[1, 2, 3]', output: '[-1.22, 0.0, 1.22]' }],
        starterCode: `import numpy as np
    def standard_scale(L):
    # Write your code here
    pass`,
        functionName: 'standard_scale',
        testCases: [{ input: '([1, 2, 3])', expected: '[-1.22, 0.0, 1.22]' }],
        hint: 'Use np.mean and np.std.'
    },
    // 18. Sklearn: LabelEncoder
    {
        id: 'mlp-oppe1-label-enc',
        title: 'Label Encoder',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Encode labels to integers 0..n-1 sorted.`,
        examples: [{ input: '["b", "a", "b"]', output: '[1, 0, 1]' }],
        starterCode: `def label_encode(labels):
    # Write your code here
    pass`,
        functionName: 'label_encode',
        testCases: [{ input: '(["b", "a", "b"])', expected: '[1, 0, 1]' }],
        hint: 'Map sorted unique labels to index.'
    },
    // 19. Sklearn: OneHotEncoder
    {
        id: 'mlp-oppe1-onehot',
        title: 'One Hot Encoder',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `One hot encode list of categories. Return list of lists.`,
        examples: [{ input: '["a", "b"]', output: '[[1, 0], [0, 1]]' }],
        starterCode: `def one_hot_encode(labels):
    # Write your code here
    pass`,
        functionName: 'one_hot_encode',
        testCases: [{ input: '(["a", "b"])', expected: '[[1, 0], [0, 1]]' }],
        hint: 'Create identity matrix based on unique sorted labels.'
    },
    // 20. Sklearn: Train Test Split
    {
        id: 'mlp-oppe1-tt-split',
        title: 'Train Test Split',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Split list into train (first k) and test (rest). k = int(len * train_size).`,
        examples: [{ input: '[1, 2, 3, 4], 0.75', output: '([1, 2, 3], [4])' }],
        starterCode: `def train_test_split_sim(data, train_size):
    # Write your code here
    pass`,
        functionName: 'train_test_split_sim',
        testCases: [{ input: '([1, 2, 3, 4], 0.75)', expected: '([1, 2, 3], [4])' }],
        hint: 'Slice list.'
    },
    // 21. Linear Algebra: Vector Magnitude
    {
        id: 'mlp-oppe1-vec-mag',
        title: 'Vector Magnitude',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Calculate L2 norm of vector.`,
        examples: [{ input: '[3, 4]', output: '5.0' }],
        starterCode: `import numpy as np
    def vec_magnitude(v):
    # Write your code here
    pass`,
        functionName: 'vec_magnitude',
        testCases: [{ input: '([3, 4])', expected: '5.0' }],
        hint: 'np.linalg.norm(v).'
    },
    // 22. Linear Algebra: Cosine Similarity
    {
        id: 'mlp-oppe1-cosine',
        title: 'Cosine Similarity',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Calculate cosine similarity: dot(a,b) / (|a|*|b|).`,
        examples: [{ input: '[1, 0], [0, 1]', output: '0.0' }],
        starterCode: `import numpy as np
    def cosine_sim(a, b):
    # Write your code here
    pass`,
        functionName: 'cosine_sim',
        testCases: [{ input: '([1, 0], [0, 1])', expected: '0.0' }, { input: '([1, 1], [1, 1])', expected: '1.0' }],
        hint: 'Use dot and norm.'
    },
    // 23. Numpy: Argmax
    {
        id: 'mlp-oppe1-np-argmax',
        title: 'Argmax',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Return index of max element.`,
        examples: [{ input: '[1, 3, 2]', output: '1' }],
        starterCode: `import numpy as np
    def np_argmax(L):
    # Write your code here
    pass`,
        functionName: 'np_argmax',
        testCases: [{ input: '([1, 3, 2])', expected: '1' }],
        hint: 'np.argmax(L).'
    },
    // 24. Numpy: Argmin
    {
        id: 'mlp-oppe1-np-argmin',
        title: 'Argmin',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Return index of min element.`,
        examples: [{ input: '[1, 3, 2]', output: '0' }],
        starterCode: `import numpy as np
    def np_argmin(L):
    # Write your code here
    pass`,
        functionName: 'np_argmin',
        testCases: [{ input: '([1, 3, 2])', expected: '0' }],
        hint: 'np.argmin(L).'
    },
    // 25. Numpy: Flatten
    {
        id: 'mlp-oppe1-np-flatten',
        title: 'Flatten Array',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Flatten 2D array to 1D.`,
        examples: [{ input: '[[1, 2], [3, 4]]', output: '[1, 2, 3, 4]' }],
        starterCode: `import numpy as np
    def np_flatten(M):
    # Write your code here
    pass`,
        functionName: 'np_flatten',
        testCases: [{ input: '([[1, 2], [3, 4]])', expected: '[1, 2, 3, 4]' }],
        hint: 'np.array(M).flatten().'
    },
    // 26. Pandas: Sort Values
    {
        id: 'mlp-oppe1-pd-sort',
        title: 'Sort DataFrame',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Sort by column 'a'. Return 'a' values.`,
        examples: [{ input: '{"a": [2, 1, 3]}', output: '[1, 2, 3]' }],
        starterCode: `import pandas as pd
    def sort_df(data):
    df = pd.DataFrame(data)
    # Write your code here
    pass`,
        functionName: 'sort_df',
        testCases: [{ input: '({"a": [2, 1, 3]})', expected: '[1, 2, 3]' }],
        hint: 'df.sort_values("a")["a"].tolist().'
    },
    // 27. Pandas: Drop Column
    {
        id: 'mlp-oppe1-pd-drop',
        title: 'Drop Column',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Drop column 'b'. Return columns list.`,
        examples: [{ input: '{"a": [1], "b": [2]}', output: '["a"]' }],
        starterCode: `import pandas as pd
    def drop_col(data):
    df = pd.DataFrame(data)
    # Write your code here
    pass`,
        functionName: 'drop_col',
        testCases: [{ input: '({"a": [1], "b": [2]})', expected: '["a"]' }],
        hint: 'df.drop(columns=["b"]).'
    },
    // 28. Pandas: Fill NA
    {
        id: 'mlp-oppe1-pd-fillna',
        title: 'Fill NA',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Fill None with 0. Return 'a' values.`,
        examples: [{ input: '{"a": [1, None, 2]}', output: '[1.0, 0.0, 2.0]' }],
        starterCode: `import pandas as pd
    def fill_na_vals(data):
    df = pd.DataFrame(data)
    # Write your code here
    pass`,
        functionName: 'fill_na_vals',
        testCases: [{ input: '({"a": [1, None, 2]})', expected: '[1.0, 0.0, 2.0]' }],
        hint: 'df.fillna(0).'
    },
    // 29. Pandas: Rename Column
    {
        id: 'mlp-oppe1-pd-rename',
        title: 'Rename Column',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Rename 'a' to 'A'. Return columns.`,
        examples: [{ input: '{"a": [1]}', output: '["A"]' }],
        starterCode: `import pandas as pd
    def rename_col(data):
    df = pd.DataFrame(data)
    # Write your code here
    pass`,
        functionName: 'rename_col',
        testCases: [{ input: '({"a": [1]})', expected: '["A"]' }],
        hint: 'df.rename(columns={"a": "A"}).'
    },
    // 30. Numpy: Linspace
    {
        id: 'mlp-oppe1-np-linspace',
        title: 'Linspace',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Generate 5 points between 0 and 1.`,
        examples: [{ input: '0, 1, 5', output: '[0.0, 0.25, 0.5, 0.75, 1.0]' }],
        starterCode: `import numpy as np
    def gen_linspace(start, stop, num):
    # Write your code here
    pass`,
        functionName: 'gen_linspace',
        testCases: [{ input: '(0, 1, 5)', expected: '[0.0, 0.25, 0.5, 0.75, 1.0]' }],
        hint: 'np.linspace(start, stop, num).'
    },
    // 31. Numpy: Arange
    {
        id: 'mlp-oppe1-np-arange',
        title: 'Arange',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Generate numbers from 0 to n-1.`,
        examples: [{ input: '3', output: '[0, 1, 2]' }],
        starterCode: `import numpy as np
    def gen_arange(n):
    # Write your code here
    pass`,
        functionName: 'gen_arange',
        testCases: [{ input: '(3)', expected: '[0, 1, 2]' }],
        hint: 'np.arange(n).'
    },
    // 32. Numpy: Concatenate
    {
        id: 'mlp-oppe1-np-concat',
        title: 'Concatenate Arrays',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Concatenate two 1D arrays.`,
        examples: [{ input: '[1, 2], [3, 4]', output: '[1, 2, 3, 4]' }],
        starterCode: `import numpy as np
    def np_concat(a, b):
    # Write your code here
    pass`,
        functionName: 'np_concat',
        testCases: [{ input: '([1, 2], [3, 4])', expected: '[1, 2, 3, 4]' }],
        hint: 'np.concatenate([a, b]).'
    },
    // 33. Numpy: Vstack
    {
        id: 'mlp-oppe1-np-vstack',
        title: 'Vertical Stack',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Stack arrays vertically.`,
        examples: [{ input: '[1, 2], [3, 4]', output: '[[1, 2], [3, 4]]' }],
        starterCode: `import numpy as np
    def np_vstack(a, b):
    # Write your code here
    pass`,
        functionName: 'np_vstack',
        testCases: [{ input: '([1, 2], [3, 4])', expected: '[[1, 2], [3, 4]]' }],
        hint: 'np.vstack([a, b]).'
    },
    // 34. Numpy: Hstack
    {
        id: 'mlp-oppe1-np-hstack',
        title: 'Horizontal Stack',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Stack arrays horizontally.`,
        examples: [{ input: '[1], [2]', output: '[1, 2]' }],
        starterCode: `import numpy as np
    def np_hstack(a, b):
    # Write your code here
    pass`,
        functionName: 'np_hstack',
        testCases: [{ input: '([1], [2])', expected: '[1, 2]' }],
        hint: 'np.hstack([a, b]).'
    },
    // 35. Numpy: Sum
    {
        id: 'mlp-oppe1-np-sum',
        title: 'Array Sum',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Sum of all elements.`,
        examples: [{ input: '[1, 2, 3]', output: '6' }],
        starterCode: `import numpy as np
    def np_sum(L):
    # Write your code here
    pass`,
        functionName: 'np_sum',
        testCases: [{ input: '([1, 2, 3])', expected: '6' }],
        hint: 'np.sum(L).'
    },
    // 36. Numpy: Max
    {
        id: 'mlp-oppe1-np-max',
        title: 'Array Max',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Max element.`,
        examples: [{ input: '[1, 3, 2]', output: '3' }],
        starterCode: `import numpy as np
    def np_max(L):
    # Write your code here
    pass`,
        functionName: 'np_max',
        testCases: [{ input: '([1, 3, 2])', expected: '3' }],
        hint: 'np.max(L).'
    },
    // 37. Numpy: Min
    {
        id: 'mlp-oppe1-np-min',
        title: 'Array Min',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Min element.`,
        examples: [{ input: '[1, 3, 2]', output: '1' }],
        starterCode: `import numpy as np
    def np_min(L):
    # Write your code here
    pass`,
        functionName: 'np_min',
        testCases: [{ input: '([1, 3, 2])', expected: '1' }],
        hint: 'np.min(L).'
    },
    // 38. Numpy: Unique
    {
        id: 'mlp-oppe1-np-unique',
        title: 'Unique Elements',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Return sorted unique elements.`,
        examples: [{ input: '[2, 1, 2]', output: '[1, 2]' }],
        starterCode: `import numpy as np
    def np_unique(L):
    # Write your code here
    pass`,
        functionName: 'np_unique',
        testCases: [{ input: '([2, 1, 2])', expected: '[1, 2]' }],
        hint: 'np.unique(L).'
    },
    // 39. Pandas: Value Counts
    {
        id: 'mlp-oppe1-pd-value-counts',
        title: 'Value Counts',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Return dict of value counts for col 'a'.`,
        examples: [{ input: '{"a": [1, 1, 2]}', output: '{1: 2, 2: 1}' }],
        starterCode: `import pandas as pd
    def get_value_counts(data):
    df = pd.DataFrame(data)
    # Write your code here
    pass`,
        functionName: 'get_value_counts',
        testCases: [{ input: '({"a": [1, 1, 2]})', expected: '{1: 2, 2: 1}' }],
        hint: 'df["a"].value_counts().to_dict().'
    },
    // 40. Pandas: GroupBy Mean
    {
        id: 'mlp-oppe1-pd-groupby',
        title: 'GroupBy Mean',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Group by 'g' and calc mean of 'v'. Return dict.`,
        examples: [{ input: '{"g": ["A", "A", "B"], "v": [1, 3, 2]}', output: '{"A": 2.0, "B": 2.0}' }],
        starterCode: `import pandas as pd
    def groupby_mean(data):
    df = pd.DataFrame(data)
    # Write your code here
    pass`,
        functionName: 'groupby_mean',
        testCases: [{ input: '({"g": ["A", "A", "B"], "v": [1, 3, 2]})', expected: '{"A": 2.0, "B": 2.0}' }],
        hint: 'df.groupby("g")["v"].mean().to_dict().'
    },
    // 41. Sklearn: SimpleImputer (Mean)
    {
        id: 'mlp-oppe1-imputer',
        title: 'Simple Imputer',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Impute missing values with mean. (Simulate logic).`,
        examples: [{ input: '[1, None, 3]', output: '[1.0, 2.0, 3.0]' }],
        starterCode: `def simple_imputer(L):
    # Write your code here
    pass`,
        functionName: 'simple_imputer',
        testCases: [{ input: '([1, None, 3])', expected: '[1.0, 2.0, 3.0]' }],
        hint: 'Calc mean of non-None, fill None.'
    },
    // 42. Sklearn: Polynomial Features
    {
        id: 'mlp-oppe1-poly',
        title: 'Polynomial Features (Deg 2)',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Generate [1, x, x^2] for scalar x.`,
        examples: [{ input: '2', output: '[1, 2, 4]' }],
        starterCode: `def poly_features(x):
    # Write your code here
    pass`,
        functionName: 'poly_features',
        testCases: [{ input: '(2)', expected: '[1, 2, 4]' }],
        hint: '[1, x, x**2].'
    },
    // 43. Linear Algebra: Matrix Determinant
    {
        id: 'mlp-oppe1-det',
        title: 'Matrix Determinant',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Calculate determinant of 2x2 matrix.`,
        examples: [{ input: '[[1, 2], [3, 4]]', output: '-2.0' }],
        starterCode: `import numpy as np
    def calc_det(M):
    # Write your code here
    pass`,
        functionName: 'calc_det',
        testCases: [{ input: '([[1, 2], [3, 4]])', expected: '-2.0' }],
        hint: 'np.linalg.det(M) or ad-bc.'
    },
    // 44. Linear Algebra: Matrix Inverse
    {
        id: 'mlp-oppe1-inv',
        title: 'Matrix Inverse',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Calculate inverse of 2x2 matrix.`,
        examples: [{ input: '[[4, 7], [2, 6]]', output: '[[0.6, -0.7], [-0.2, 0.4]]' }],
        starterCode: `import numpy as np
    def calc_inv(M):
    # Write your code here
    pass`,
        functionName: 'calc_inv',
        testCases: [{ input: '([[4, 7], [2, 6]])', expected: '[[0.6, -0.7], [-0.2, 0.4]]' }],
        hint: 'np.linalg.inv(M).'
    },
    // 45. Numpy: Clip
    {
        id: 'mlp-oppe1-np-clip',
        title: 'Clip Values',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Clip values between min and max.`,
        examples: [{ input: '[1, 5, 10], 2, 8', output: '[2, 5, 8]' }],
        starterCode: `import numpy as np
    def np_clip(L, min_val, max_val):
    # Write your code here
    pass`,
        functionName: 'np_clip',
        testCases: [{ input: '([1, 5, 10], 2, 8)', expected: '[2, 5, 8]' }],
        hint: 'np.clip(L, min_val, max_val).'
    },
    // 46. Numpy: Where
    {
        id: 'mlp-oppe1-np-where',
        title: 'Where Condition',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Return 1 if x > 0 else 0.`,
        examples: [{ input: '[-1, 1, 0]', output: '[0, 1, 0]' }],
        starterCode: `import numpy as np
    def np_where_demo(L):
    # Write your code here
    pass`,
        functionName: 'np_where_demo',
        testCases: [{ input: '([-1, 1, 0])', expected: '[0, 1, 0]' }],
        hint: 'np.where(np.array(L) > 0, 1, 0).'
    },
    // 47. Pandas: Apply
    {
        id: 'mlp-oppe1-pd-apply',
        title: 'Apply Function',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Apply square function to col 'a'.`,
        examples: [{ input: '{"a": [2, 3]}', output: '[4, 9]' }],
        starterCode: `import pandas as pd
    def apply_square(data):
    df = pd.DataFrame(data)
    # Write your code here
    pass`,
        functionName: 'apply_square',
        testCases: [{ input: '({"a": [2, 3]})', expected: '[4, 9]' }],
        hint: 'df["a"].apply(lambda x: x**2).'
    },
    // 48. Pandas: Merge
    {
        id: 'mlp-oppe1-pd-merge',
        title: 'Merge DataFrames',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Merge on 'id'. Return 'val_x' list.`,
        examples: [{ input: '{"id": [1], "val": [10]}, {"id": [1], "val": [20]}', output: '[10]' }],
        starterCode: `import pandas as pd
    def merge_dfs(d1, d2):
    df1 = pd.DataFrame(d1)
    df2 = pd.DataFrame(d2)
    # Write your code here
    pass`,
        functionName: 'merge_dfs',
        testCases: [{ input: '({"id": [1], "val": [10]}, {"id": [1], "val": [20]})', expected: '[10]' }],
        hint: 'pd.merge(df1, df2, on="id")["val_x"].tolist().'
    },
    // 49. Numpy: Random (Seed)
    {
        id: 'mlp-oppe1-np-random',
        title: 'Random Seed',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Set seed 42 and generate 1 random float.`,
        examples: [{ input: '', output: '0.3745' }],
        starterCode: `import numpy as np
    def gen_random():
    # Write your code here
    pass`,
        functionName: 'gen_random',
        testCases: [{ input: '()', expected: '0.3745' }],
        hint: 'np.random.seed(42); return round(np.random.rand(), 4).'
    },
    // 50. Sklearn: Binarizer
    {
        id: 'mlp-oppe1-binarizer',
        title: 'Binarizer',
        subject: 'ML_Practice',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Threshold at 0.5 (1 if > 0.5 else 0).`,
        examples: [{ input: '[0.1, 0.6]', output: '[0, 1]' }],
        starterCode: `def binarize(L):
    # Write your code here
    pass`,
        functionName: 'binarize',
        testCases: [{ input: '([0.1, 0.6])', expected: '[0, 1]' }],
        hint: '1 if x > 0.5 else 0.'
    }
];
