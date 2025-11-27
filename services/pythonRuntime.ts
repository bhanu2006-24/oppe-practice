import { TestResult } from "../types";

// Type definition for Pyodide global
declare global {
  interface Window {
    loadPyodide: (config: { indexURL: string }) => Promise<any>;
  }
}

let pyodideInstance: any = null;
let isInitializing = false;

export const initializePyodide = async () => {
  if (pyodideInstance) return pyodideInstance;
  if (isInitializing) {
    // Wait for initialization
    while (!pyodideInstance) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    return pyodideInstance;
  }

  isInitializing = true;
  try {
    if (!window.loadPyodide) {
      throw new Error("Pyodide script not loaded in HTML");
    }
    pyodideInstance = await window.loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",
    });
    return pyodideInstance;
  } catch (error) {
    console.error("Failed to load Pyodide:", error);
    isInitializing = false;
    throw error;
  }
};

export const runPythonCode = async (
  userCode: string,
  functionName: string,
  testCases: { input: string; expected: string }[]
): Promise<{ results: TestResult[]; output: string }> => {
  const pyodide = await initializePyodide();

  // Reset stdout to capture print output
  pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
  `);

  let capturedOutput = "";
  const results: TestResult[] = [];

  try {
    // 1. Run User Code
    // We use loadPackagesFromImports if needed, but for standard library it's fine.
    // We wrap in a try-except block in Python to catch syntax errors immediately
    // or just let runPythonAsync throw.
    await pyodide.runPythonAsync(userCode);

    // 2. Run Test Cases
    for (const test of testCases) {
      // Wrapper to safely execute a single test case
      const testRunnerScript = `
def _run_test_safe():
    try:
        # Check if function defined
        if '${functionName}' not in globals():
            return (False, "Function '${functionName}' not defined", "${test.expected}")
            
        # Construct the function call
        # test.input is expected to be a valid python argument string like "(1, 2)" or "([1])"
        expression = f"${functionName}{test.input}"
        
        # Execute and capture result
        # We evaluate the expression in the global scope
        result = eval(expression, globals())
        
        expected_str = '${test.expected}'
        
        # Comparison Logic
        # 1. Compare 'None' specifically
        if expected_str == 'None':
            passed = result is None
        else:
            # 2. Try to evaluate expected string as a Python object (e.g. list, tuple, int)
            try:
                expected_val = eval(expected_str, {})
                passed = (result == expected_val)
            except:
                # 3. Fallback to string comparison
                passed = (str(result) == expected_str)
        
        return (passed, str(result), expected_str)
    except Exception as e:
        return (False, f"{type(e).__name__}: {str(e)}", "${test.expected}")

_run_test_safe()
`;
      
      // Use synchronous runPython for the test runner checks
      // This returns a PyProxy which we must convert to JS
      const proxy = pyodide.runPython(testRunnerScript);
      
      if (proxy && typeof proxy.toJs === 'function') {
        const [passed, actual, expected] = proxy.toJs();
        proxy.destroy(); // Important: prevent memory leaks
        
        results.push({
          passed,
          input: test.input,
          expected,
          actual
        });
      } else {
        // Fallback if something returned generic (shouldn't happen with our wrapper)
        results.push({
          passed: false,
          input: test.input,
          expected: test.expected,
          actual: "Unknown Error",
          error: "Test runner returned unexpected type"
        });
      }
    }

    // 3. Capture Stdout
    capturedOutput = pyodide.runPython("sys.stdout.getvalue()");

  } catch (error: any) {
    // Get stdout even if it crashed
    try {
        capturedOutput = pyodide.runPython("sys.stdout.getvalue()");
    } catch (e) {}

    // If no results yet, it means it crashed during compilation or execution
    if (results.length === 0) {
        results.push({
          passed: false,
          input: "Global Execution",
          expected: "-",
          actual: "Error",
          error: error.message
        });
    } else {
        // If it crashed during tests, append error to output
        capturedOutput += `\n\nRuntime Error: ${error.message}`;
    }
  }

  return { results, output: capturedOutput };
};