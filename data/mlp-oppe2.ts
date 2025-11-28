import { Problem } from '../types';

export const MLP_OPPE2_PROBLEMS: Problem[] = [
    // --- EXISTING PROBLEMS ---
    {
        id: 'mlp-oppe2-lin-reg',
        title: 'Linear Regression (Simple)',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Implement simple linear regression: y = mx + c. Given x and y lists, return [m, c] rounded to 2 decimals.`,
        examples: [
            { input: '[1,2,3], [2,4,6]', output: '[2.0, 0.0]' }
        ],
        starterCode: `import numpy as np
    def simple_lin_reg(x, y):
    # Write your code here
    pass`,
        functionName: 'simple_lin_reg',
        testCases: [
            { input: '([1,2,3], [2,4,6])', expected: '[2.0, 0.0]' }
        ],
        hint: 'Use least squares formula or np.polyfit(x, y, 1).'
    },
    {
        id: 'mlp-oppe2-mse',
        title: 'Mean Squared Error',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Calculate MSE between y_true and y_pred.`,
        examples: [
            { input: '[1,2], [1,2]', output: '0.0' }
        ],
        starterCode: `import numpy as np
    def calc_mse(y_true, y_pred):
    # Write your code here
    pass`,
        functionName: 'calc_mse',
        testCases: [
            { input: '([1,2], [1,2])', expected: '0.0' },
            { input: '([1,2], [2,3])', expected: '1.0' }
        ],
        hint: 'mean((y_true - y_pred)**2).'
    },
    {
        id: 'mlp-oppe2-accuracy',
        title: 'Accuracy Score',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Calculate accuracy score.`,
        examples: [
            { input: '[1,0,1], [1,0,0]', output: '0.6667' }
        ],
        starterCode: `def accuracy_score_sim(y_true, y_pred):
    # Write your code here
    pass`,
        functionName: 'accuracy_score_sim',
        testCases: [
            { input: '([1,0,1], [1,0,0])', expected: '0.6667' }
        ],
        hint: 'sum(t==p)/len.'
    },

    // --- NEW PROBLEMS (50) ---

    // 1. R2 Score
    {
        id: 'mlp-oppe2-r2-score',
        title: 'R2 Score',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Calculate R2 score.`,
        examples: [{ input: '[1, 2, 3], [1, 2, 3]', output: '1.0' }],
        starterCode: `import numpy as np
    def r2_score_sim(y_true, y_pred):
    # Write your code here
    pass`,
        functionName: 'r2_score_sim',
        testCases: [{ input: '([1, 2, 3], [1, 2, 3])', expected: '1.0' }],
        hint: '1 - (SS_res / SS_tot).'
    },
    // 2. Precision Score
    {
        id: 'mlp-oppe2-precision',
        title: 'Precision Score',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Calculate precision (TP / (TP + FP)).`,
        examples: [{ input: '[1, 0, 1], [1, 1, 0]', output: '0.5' }],
        starterCode: `def precision_sim(y_true, y_pred):
    # Write your code here
    pass`,
        functionName: 'precision_sim',
        testCases: [{ input: '([1, 0, 1], [1, 1, 0])', expected: '0.5' }],
        hint: 'Count TP and FP.'
    },
    // 3. Recall Score
    {
        id: 'mlp-oppe2-recall',
        title: 'Recall Score',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Calculate recall (TP / (TP + FN)).`,
        examples: [{ input: '[1, 0, 1], [1, 1, 0]', output: '0.5' }],
        starterCode: `def recall_sim(y_true, y_pred):
    # Write your code here
    pass`,
        functionName: 'recall_sim',
        testCases: [{ input: '([1, 0, 1], [1, 1, 0])', expected: '0.5' }],
        hint: 'Count TP and FN.'
    },
    // 4. F1 Score
    {
        id: 'mlp-oppe2-f1',
        title: 'F1 Score',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Calculate F1 score (2 * P * R / (P + R)).`,
        examples: [{ input: '[1, 0, 1], [1, 1, 0]', output: '0.5' }],
        starterCode: `def f1_score_sim(y_true, y_pred):
    # Write your code here
    pass`,
        functionName: 'f1_score_sim',
        testCases: [{ input: '([1, 0, 1], [1, 1, 0])', expected: '0.5' }],
        hint: 'Calculate Precision and Recall first.'
    },
    // 5. Confusion Matrix
    {
        id: 'mlp-oppe2-conf-matrix',
        title: 'Confusion Matrix',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Return [[TN, FP], [FN, TP]].`,
        examples: [{ input: '[0, 1, 0, 1], [0, 0, 1, 1]', output: '[[1, 1], [1, 1]]' }],
        starterCode: `def conf_matrix_sim(y_true, y_pred):
    # Write your code here
    pass`,
        functionName: 'conf_matrix_sim',
        testCases: [{ input: '([0, 1, 0, 1], [0, 0, 1, 1])', expected: '[[1, 1], [1, 1]]' }],
        hint: 'Count TN, FP, FN, TP.'
    },
    // 6. Log Loss (Binary)
    {
        id: 'mlp-oppe2-log-loss',
        title: 'Log Loss',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Calculate binary log loss.`,
        examples: [{ input: '[1, 0], [0.9, 0.1]', output: '0.1054' }],
        starterCode: `import numpy as np
    def log_loss_sim(y_true, y_prob):
    # Write your code here
    pass`,
        functionName: 'log_loss_sim',
        testCases: [{ input: '([1, 0], [0.9, 0.1])', expected: '0.1054' }],
        hint: '-mean(y*log(p) + (1-y)*log(1-p)).'
    },
    // 7. MAE
    {
        id: 'mlp-oppe2-mae',
        title: 'Mean Absolute Error',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Calculate MAE.`,
        examples: [{ input: '[1, 2], [2, 3]', output: '1.0' }],
        starterCode: `import numpy as np
    def calc_mae(y_true, y_pred):
    # Write your code here
    pass`,
        functionName: 'calc_mae',
        testCases: [{ input: '([1, 2], [2, 3])', expected: '1.0' }],
        hint: 'mean(abs(y_true - y_pred)).'
    },
    // 8. RMSE
    {
        id: 'mlp-oppe2-rmse',
        title: 'Root Mean Squared Error',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Calculate RMSE.`,
        examples: [{ input: '[1, 2], [2, 3]', output: '1.0' }],
        starterCode: `import numpy as np
    def calc_rmse(y_true, y_pred):
    # Write your code here
    pass`,
        functionName: 'calc_rmse',
        testCases: [{ input: '([1, 2], [2, 3])', expected: '1.0' }],
        hint: 'sqrt(MSE).'
    },
    // 9. KNN Predict (Simulated)
    {
        id: 'mlp-oppe2-knn',
        title: 'KNN Predict',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Predict class for x_query using k=1 NN.`,
        examples: [{ input: '[[1], [3]], [0, 1], [2]', output: '1' }],
        starterCode: `import numpy as np
    def knn_predict(X_train, y_train, x_query):
    # Write your code here
    pass`,
        functionName: 'knn_predict',
        testCases: [{ input: '([[1], [3]], [0, 1], [2])', expected: '1' }],
        hint: 'Find nearest neighbor in X_train.'
    },
    // 10. K-Means Step (Simulated)
    {
        id: 'mlp-oppe2-kmeans',
        title: 'K-Means Step',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Assign points to nearest centroid. Return labels.`,
        examples: [{ input: '[[1], [10]], [[0], [11]]', output: '[0, 1]' }],
        starterCode: `import numpy as np
    def assign_clusters(X, centroids):
    # Write your code here
    pass`,
        functionName: 'assign_clusters',
        testCases: [{ input: '([[1], [10]], [[0], [11]])', expected: '[0, 1]' }],
        hint: 'Calc dist to each centroid.'
    },
    // 11. Perceptron Update
    {
        id: 'mlp-oppe2-perceptron',
        title: 'Perceptron Update',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Update weights w += eta * (y - y_hat) * x.`,
        examples: [{ input: '[0.1, 0.1], 0.1, 1, 0, [1, 1]', output: '[0.2, 0.2]' }],
        starterCode: `import numpy as np
    def perceptron_step(w, eta, y, y_hat, x):
    # Write your code here
    pass`,
        functionName: 'perceptron_step',
        testCases: [{ input: '([0.1, 0.1], 0.1, 1, 0, [1, 1])', expected: '[0.2, 0.2]' }],
        hint: 'w + eta * (y - y_hat) * x.'
    },
    // 12. Sigmoid Function
    {
        id: 'mlp-oppe2-sigmoid',
        title: 'Sigmoid Function',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Calculate sigmoid(z).`,
        examples: [{ input: '0', output: '0.5' }],
        starterCode: `import numpy as np
    def sigmoid(z):
    # Write your code here
    pass`,
        functionName: 'sigmoid',
        testCases: [{ input: '(0)', expected: '0.5' }],
        hint: '1 / (1 + exp(-z)).'
    },
    // 13. Softmax Function
    {
        id: 'mlp-oppe2-softmax',
        title: 'Softmax Function',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Calculate softmax of list.`,
        examples: [{ input: '[1, 1]', output: '[0.5, 0.5]' }],
        starterCode: `import numpy as np
    def softmax(z):
    # Write your code here
    pass`,
        functionName: 'softmax',
        testCases: [{ input: '([1, 1])', expected: '[0.5, 0.5]' }],
        hint: 'exp(z) / sum(exp(z)).'
    },
    // 14. Gradient Descent Step (Linear Reg)
    {
        id: 'mlp-oppe2-gd-step',
        title: 'Gradient Descent Step',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Update m, c for one step.`,
        examples: [{ input: '1, 0, 0.1, [1], [3]', output: '(1.4, 0.4)' }],
        starterCode: `def gd_step(m, c, lr, X, y):
    # Write your code here
    pass`,
        functionName: 'gd_step',
        testCases: [{ input: '(1, 0, 0.1, [1], [3])', expected: '(1.4, 0.4)' }],
        hint: 'Calc gradients dm, dc.'
    },
    // 15. Ridge Regression Cost
    {
        id: 'mlp-oppe2-ridge-cost',
        title: 'Ridge Cost',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `MSE + lambda * sum(w^2).`,
        examples: [{ input: '[1], [1], [1], 0.1', output: '0.1' }],
        starterCode: `import numpy as np
    def ridge_cost(y_true, y_pred, w, alpha):
    # Write your code here
    pass`,
        functionName: 'ridge_cost',
        testCases: [{ input: '([1], [1], [1], 0.1)', expected: '0.1' }],
        hint: 'MSE + alpha * sum(w**2).'
    },
    // 16. Lasso Regression Cost
    {
        id: 'mlp-oppe2-lasso-cost',
        title: 'Lasso Cost',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `MSE + lambda * sum(|w|).`,
        examples: [{ input: '[1], [1], [1], 0.1', output: '0.1' }],
        starterCode: `import numpy as np
    def lasso_cost(y_true, y_pred, w, alpha):
    # Write your code here
    pass`,
        functionName: 'lasso_cost',
        testCases: [{ input: '([1], [1], [1], 0.1)', expected: '0.1' }],
        hint: 'MSE + alpha * sum(abs(w)).'
    },
    // 17. Decision Tree Entropy
    {
        id: 'mlp-oppe2-entropy',
        title: 'Calculate Entropy',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Calculate entropy of labels.`,
        examples: [{ input: '[0, 0, 1, 1]', output: '1.0' }],
        starterCode: `import numpy as np
    def calc_entropy(labels):
    # Write your code here
    pass`,
        functionName: 'calc_entropy',
        testCases: [{ input: '([0, 0, 1, 1])', expected: '1.0' }],
        hint: '-sum(p * log2(p)).'
    },
    // 18. Gini Impurity
    {
        id: 'mlp-oppe2-gini',
        title: 'Gini Impurity',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Calculate Gini impurity.`,
        examples: [{ input: '[0, 0, 1, 1]', output: '0.5' }],
        starterCode: `def calc_gini(labels):
    # Write your code here
    pass`,
        functionName: 'calc_gini',
        testCases: [{ input: '([0, 0, 1, 1])', expected: '0.5' }],
        hint: '1 - sum(p**2).'
    },
    // 19. Bagging Prediction (Majority Vote)
    {
        id: 'mlp-oppe2-bagging',
        title: 'Bagging Vote',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Return majority vote from predictions.`,
        examples: [{ input: '[0, 1, 1]', output: '1' }],
        starterCode: `def majority_vote(preds):
    # Write your code here
    pass`,
        functionName: 'majority_vote',
        testCases: [{ input: '([0, 1, 1])', expected: '1' }],
        hint: 'Mode of preds.'
    },
    // 20. Adaboost Weight Update
    {
        id: 'mlp-oppe2-adaboost',
        title: 'Adaboost Weight Update',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Update sample weights.`,
        examples: [{ input: '[0.5, 0.5], 0.5, [1, -1], [1, 1]', output: '[0.3033, 0.8244]' }],
        starterCode: `import numpy as np
    def update_weights(w, alpha, y, y_pred):
    # Write your code here
    pass`,
        functionName: 'update_weights',
        testCases: [{ input: '([0.5, 0.5], 0.5, [1, -1], [1, 1])', expected: '[0.3033, 0.8244]' }],
        hint: 'w * exp(-alpha * y * y_pred) / Z.'
    },
    // 21. Correlation Matrix
    {
        id: 'mlp-oppe2-corr',
        title: 'Correlation Matrix',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Return correlation matrix of DataFrame.`,
        examples: [{ input: '{"a": [1, 2], "b": [2, 4]}', output: '[[1.0, 1.0], [1.0, 1.0]]' }],
        starterCode: `import pandas as pd
    def calc_corr(data):
    df = pd.DataFrame(data)
    # Write your code here
    pass`,
        functionName: 'calc_corr',
        testCases: [{ input: '({"a": [1, 2], "b": [2, 4]})', expected: '[[1.0, 1.0], [1.0, 1.0]]' }],
        hint: 'df.corr().values.tolist().'
    },
    // 22. Covariance Matrix
    {
        id: 'mlp-oppe2-cov',
        title: 'Covariance Matrix',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Return covariance matrix.`,
        examples: [{ input: '[[1, 2], [3, 4]]', output: '[[0.5, 0.5], [0.5, 0.5]]' }],
        starterCode: `import numpy as np
    def calc_cov(M):
    # Write your code here
    pass`,
        functionName: 'calc_cov',
        testCases: [{ input: '([[1, 2], [3, 4]])', expected: '[[0.5, 0.5], [0.5, 0.5]]' }],
        hint: 'np.cov(M).'
    },
    // 23. PCA Transform (Simulated)
    {
        id: 'mlp-oppe2-pca',
        title: 'PCA Project',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Project X onto components.`,
        examples: [{ input: '[[1, 2]], [[1, 0]]', output: '[[1]]' }],
        starterCode: `import numpy as np
    def pca_project(X, components):
    # Write your code here
    pass`,
        functionName: 'pca_project',
        testCases: [{ input: '([[1, 2]], [[1, 0]])', expected: '[[1]]' }],
        hint: 'dot(X, components.T).'
    },
    // 24. Silhouette Score (Simulated)
    {
        id: 'mlp-oppe2-silhouette',
        title: 'Silhouette Score',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Calculate (b-a)/max(a,b).`,
        examples: [{ input: '1, 2', output: '0.5' }],
        starterCode: `def calc_silhouette(a, b):
    # Write your code here
    pass`,
        functionName: 'calc_silhouette',
        testCases: [{ input: '(1, 2)', expected: '0.5' }],
        hint: '(b-a)/max(a,b).'
    },
    // 25. Train Validation Split
    {
        id: 'mlp-oppe2-train-val',
        title: 'Train Val Split',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Split data into train, val.`,
        examples: [{ input: '[1, 2, 3, 4], 0.5', output: '([1, 2], [3, 4])' }],
        starterCode: `def train_val_split(data, ratio):
    # Write your code here
    pass`,
        functionName: 'train_val_split',
        testCases: [{ input: '([1, 2, 3, 4], 0.5)', expected: '([1, 2], [3, 4])' }],
        hint: 'Index slicing.'
    },
    // 26. Cross Validation (K-Fold Indices)
    {
        id: 'mlp-oppe2-kfold',
        title: 'K-Fold Indices',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Return indices for 2-fold on n=4.`,
        examples: [{ input: '4, 2', output: '[[[2, 3], [0, 1]], [[0, 1], [2, 3]]]' }],
        starterCode: `def kfold_indices(n, k):
    # Write your code here
    pass`,
        functionName: 'kfold_indices',
        testCases: [{ input: '(4, 2)', expected: '[[[2, 3], [0, 1]], [[0, 1], [2, 3]]]' }],
        hint: 'Generate train/test indices.'
    },
    // 27. Stratified Split (Simulated)
    {
        id: 'mlp-oppe2-stratified',
        title: 'Stratified Split',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Split preserving class ratios.`,
        examples: [{ input: '[0, 1, 0, 1], 0.5', output: '([0, 1], [0, 1])' }],
        starterCode: `def stratified_split(y, ratio):
    # Write your code here
    pass`,
        functionName: 'stratified_split',
        testCases: [{ input: '([0, 1, 0, 1], 0.5)', expected: '([0, 1], [0, 1])' }],
        hint: 'Split each class separately.'
    },
    // 28. Bootstrap Sample
    {
        id: 'mlp-oppe2-bootstrap',
        title: 'Bootstrap Sample',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Sample n items with replacement. (Simulate with fixed seed logic or just return logic).`,
        examples: [{ input: '[1, 2, 3], 3', output: '[1, 1, 3]' }],
        starterCode: `import numpy as np
    def bootstrap_sample(data, n):
    np.random.seed(42)
    # Write your code here
    pass`,
        functionName: 'bootstrap_sample',
        testCases: [{ input: '([1, 2, 3], 3)', expected: '[3, 1, 3]' }],
        hint: 'np.random.choice(data, n, replace=True).'
    },
    // 29. Feature Scaling (Standardization)
    {
        id: 'mlp-oppe2-feature-scale',
        title: 'Feature Scaling',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Standardize column.`,
        examples: [{ input: '[1, 2, 3]', output: '[-1.22, 0.0, 1.22]' }],
        starterCode: `import numpy as np
    def scale_feature(col):
    # Write your code here
    pass`,
        functionName: 'scale_feature',
        testCases: [{ input: '([1, 2, 3])', expected: '[-1.22, 0.0, 1.22]' }],
        hint: '(col - mean) / std.'
    },
    // 30. Feature Normalization
    {
        id: 'mlp-oppe2-normalize',
        title: 'Feature Normalization',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Normalize to unit norm.`,
        examples: [{ input: '[3, 4]', output: '[0.6, 0.8]' }],
        starterCode: `import numpy as np
    def normalize_feature(col):
    # Write your code here
    pass`,
        functionName: 'normalize_feature',
        testCases: [{ input: '([3, 4])', expected: '[0.6, 0.8]' }],
        hint: 'col / norm(col).'
    },
    // 31. One-vs-Rest (Simulated)
    {
        id: 'mlp-oppe2-ovr',
        title: 'One-vs-Rest',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Return predicted class with max score.`,
        examples: [{ input: '[0.1, 0.5, 0.4]', output: '1' }],
        starterCode: `import numpy as np
    def predict_ovr(scores):
    # Write your code here
    pass`,
        functionName: 'predict_ovr',
        testCases: [{ input: '([0.1, 0.5, 0.4])', expected: '1' }],
        hint: 'argmax(scores).'
    },
    // 32. Multi-label Indicator
    {
        id: 'mlp-oppe2-multilabel',
        title: 'Multi-label Indicator',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Convert list of lists [[0,1], [2]] to indicator matrix (n_samples, n_classes).`,
        examples: [{ input: '[[0, 1], [2]], 3', output: '[[1, 1, 0], [0, 0, 1]]' }],
        starterCode: `import numpy as np
    def multilabel_indicator(y, n_classes):
    # Write your code here
    pass`,
        functionName: 'multilabel_indicator',
        testCases: [{ input: '([[0, 1], [2]], 3)', expected: '[[1, 1, 0], [0, 0, 1]]' }],
        hint: 'Fill zeros matrix.'
    },
    // 33. Time Series: Moving Average
    {
        id: 'mlp-oppe2-moving-avg',
        title: 'Moving Average',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Calculate moving average window k.`,
        examples: [{ input: '[1, 2, 3, 4], 2', output: '[1.5, 2.5, 3.5]' }],
        starterCode: `import numpy as np
    def moving_average(data, k):
    # Write your code here
    pass`,
        functionName: 'moving_average',
        testCases: [{ input: '([1, 2, 3, 4], 2)', expected: '[1.5, 2.5, 3.5]' }],
        hint: 'Convolve or loop.'
    },
    // 34. Time Series: Lag Features
    {
        id: 'mlp-oppe2-lag-features',
        title: 'Lag Features',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create lag 1 feature.`,
        examples: [{ input: '[1, 2, 3]', output: '[NaN, 1.0, 2.0]' }],
        starterCode: `import pandas as pd
    def create_lag(data):
    s = pd.Series(data)
    # Write your code here
    pass`,
        functionName: 'create_lag',
        testCases: [{ input: '([1, 2, 3])', expected: '[nan, 1.0, 2.0]' }],
        hint: 's.shift(1).tolist().'
    },
    // 35. Text: Bag of Words
    {
        id: 'mlp-oppe2-bow',
        title: 'Bag of Words',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Convert sentence to count vector given vocab.`,
        examples: [{ input: '"a b a", ["a", "b"]', output: '[2, 1]' }],
        starterCode: `def bow_vector(text, vocab):
    # Write your code here
    pass`,
        functionName: 'bow_vector',
        testCases: [{ input: '("a b a", ["a", "b"])', expected: '[2, 1]' }],
        hint: 'Count occurrences.'
    },
    // 36. Text: TF-IDF (Term Freq)
    {
        id: 'mlp-oppe2-tf',
        title: 'Term Frequency',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Calculate TF: count / total_words.`,
        examples: [{ input: '"a b a", "a"', output: '0.6667' }],
        starterCode: `def calc_tf(text, term):
    # Write your code here
    pass`,
        functionName: 'calc_tf',
        testCases: [{ input: '("a b a", "a")', expected: '0.6667' }],
        hint: 'count(term) / len(text.split()).'
    },
    // 37. Image: Flatten
    {
        id: 'mlp-oppe2-img-flatten',
        title: 'Flatten Image',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Flatten (h, w, c) image to 1D.`,
        examples: [{ input: '[[[1],[2]],[[3],[4]]]', output: '[1, 2, 3, 4]' }],
        starterCode: `import numpy as np
    def flatten_img(img):
    # Write your code here
    pass`,
        functionName: 'flatten_img',
        testCases: [{ input: '([[[1],[2]],[[3],[4]]])', expected: '[1, 2, 3, 4]' }],
        hint: 'np.array(img).flatten().'
    },
    // 38. Image: Grayscale
    {
        id: 'mlp-oppe2-grayscale',
        title: 'RGB to Grayscale',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Convert RGB to Gray: 0.299R + 0.587G + 0.114B.`,
        examples: [{ input: '[100, 100, 100]', output: '100.0' }],
        starterCode: `def rgb2gray(pixel):
    # Write your code here
    pass`,
        functionName: 'rgb2gray',
        testCases: [{ input: '([100, 100, 100])', expected: '100.0' }],
        hint: 'Apply formula.'
    },
    // 39. Pipeline: Scale then Predict
    {
        id: 'mlp-oppe2-pipeline',
        title: 'Simple Pipeline',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Scale x then predict y=x.`,
        examples: [{ input: '10, 0, 20', output: '0.5' }],
        starterCode: `def pipeline_predict(x, min_val, max_val):
    # Write your code here
    pass`,
        functionName: 'pipeline_predict',
        testCases: [{ input: '(10, 0, 20)', expected: '0.5' }],
        hint: 'Scale then return.'
    },
    // 40. Hyperparameter Grid
    {
        id: 'mlp-oppe2-grid-search',
        title: 'Grid Search',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Generate all combinations of params.`,
        examples: [{ input: '{"a": [1, 2], "b": [3]}', output: '[{"a": 1, "b": 3}, {"a": 2, "b": 3}]' }],
        starterCode: `import itertools
    def grid_search(param_grid):
    # Write your code here
    pass`,
        functionName: 'grid_search',
        testCases: [{ input: '({"a": [1, 2], "b": [3]})', expected: '[{"a": 1, "b": 3}, {"a": 2, "b": 3}]' }],
        hint: 'itertools.product.'
    },
    // 41. File: Read CSV to Dict
    {
        id: 'mlp-oppe2-read-csv',
        title: 'Read CSV String',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Parse CSV string to list of dicts.`,
        examples: [{ input: '"a,b\\n1,2"', output: '[{"a": "1", "b": "2"}]' }],
        starterCode: `import csv
    import io
    def read_csv_str(content):
    # Write your code here
    pass`,
        functionName: 'read_csv_str',
        testCases: [{ input: '("a,b\\n1,2")', expected: '[{"a": "1", "b": "2"}]' }],
        hint: 'csv.DictReader(io.StringIO(content)).'
    },
    // 42. File: Write CSV
    {
        id: 'mlp-oppe2-write-csv',
        title: 'Write CSV String',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write list of dicts to CSV string.`,
        examples: [{ input: '[{"a": 1}]', output: '"a\\r\\n1\\r\\n"' }],
        starterCode: `import csv
    import io
    def write_csv_str(data):
    # Write your code here
    pass`,
        functionName: 'write_csv_str',
        testCases: [{ input: '([{"a": 1}])', expected: '"a\\r\\n1\\r\\n"' }],
        hint: 'csv.DictWriter.'
    },
    // 43. JSON: Parse
    {
        id: 'mlp-oppe2-json-parse',
        title: 'Parse JSON',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Parse JSON string.`,
        examples: [{ input: '"{\\"a\\": 1}"', output: '{"a": 1}' }],
        starterCode: `import json
    def parse_json(s):
    # Write your code here
    pass`,
        functionName: 'parse_json',
        testCases: [{ input: '("{\\"a\\": 1}")', expected: '{"a": 1}' }],
        hint: 'json.loads(s).'
    },
    // 44. JSON: Dump
    {
        id: 'mlp-oppe2-json-dump',
        title: 'Dump JSON',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Dump dict to JSON string (no spaces).`,
        examples: [{ input: '{"a": 1}', output: '"{\\"a\\": 1}"' }],
        starterCode: `import json
    def dump_json(d):
    # Write your code here
    pass`,
        functionName: 'dump_json',
        testCases: [{ input: '({"a": 1})', expected: '"{\\"a\\": 1}"' }],
        hint: 'json.dumps(d, separators=(",", ":")).'
    },
    // 45. Date: Parse
    {
        id: 'mlp-oppe2-date-parse',
        title: 'Parse Date',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Parse "YYYY-MM-DD" to year integer.`,
        examples: [{ input: '"2023-01-01"', output: '2023' }],
        starterCode: `def parse_year(date_str):
    # Write your code here
    pass`,
        functionName: 'parse_year',
        testCases: [{ input: '("2023-01-01")', expected: '2023' }],
        hint: 'int(date_str.split("-")[0]).'
    },
    // 46. Date: Diff
    {
        id: 'mlp-oppe2-date-diff',
        title: 'Date Difference',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Days between two dates "YYYY-MM-DD".`,
        examples: [{ input: '"2023-01-02", "2023-01-01"', output: '1' }],
        starterCode: `from datetime import datetime
    def date_diff(d1, d2):
    # Write your code here
    pass`,
        functionName: 'date_diff',
        testCases: [{ input: '("2023-01-02", "2023-01-01")', expected: '1' }],
        hint: '(dt1 - dt2).days.'
    },
    // 47. Math: Distance Matrix
    {
        id: 'mlp-oppe2-dist-matrix',
        title: 'Distance Matrix',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Pairwise euclidean distances.`,
        examples: [{ input: '[[0], [1]]', output: '[[0.0, 1.0], [1.0, 0.0]]' }],
        starterCode: `import numpy as np
    from scipy.spatial.distance import cdist
    def dist_matrix(X):
    # Write your code here
    pass`,
        functionName: 'dist_matrix',
        testCases: [{ input: '([[0], [1]])', expected: '[[0.0, 1.0], [1.0, 0.0]]' }],
        hint: 'cdist(X, X).'
    },
    // 48. Stats: Z-Score
    {
        id: 'mlp-oppe2-zscore',
        title: 'Z-Score',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Calculate z-score of x given mean, std.`,
        examples: [{ input: '10, 5, 2', output: '2.5' }],
        starterCode: `def calc_zscore(x, mean, std):
    # Write your code here
    pass`,
        functionName: 'calc_zscore',
        testCases: [{ input: '(10, 5, 2)', expected: '2.5' }],
        hint: '(x - mean) / std.'
    },
    // 49. Stats: Variance
    {
        id: 'mlp-oppe2-variance',
        title: 'Variance',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Calculate variance.`,
        examples: [{ input: '[1, 2, 3]', output: '0.6667' }],
        starterCode: `import numpy as np
    def calc_variance(L):
    # Write your code here
    pass`,
        functionName: 'calc_variance',
        testCases: [{ input: '([1, 2, 3])', expected: '0.6667' }],
        hint: 'np.var(L).'
    },
    // 50. Stats: Percentile
    {
        id: 'mlp-oppe2-percentile',
        title: 'Percentile',
        subject: 'ML_Practice',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Calculate 50th percentile (median).`,
        examples: [{ input: '[1, 2, 3], 50', output: '2.0' }],
        starterCode: `import numpy as np
    def calc_percentile(L, p):
    # Write your code here
    pass`,
        functionName: 'calc_percentile',
        testCases: [{ input: '([1, 2, 3], 50)', expected: '2.0' }],
        hint: 'np.percentile(L, p).'
    }
];
