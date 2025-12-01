import { Problem } from '../types';

export const SYSTEM_COMMANDS_OPPE2_PROBLEMS: Problem[] = [
    {
        id: 'bash2-if-else',
        title: 'If Else',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a script that checks if the input string is "A". If yes, print "Yes", else print "No".`,
        examples: [{ input: 'A', output: 'Yes' }],
        starterCode: `# Write your script here
read s
if [ "$s" = "A" ]; then
    echo "Yes"
else
    echo "No"
fi
`,
        functionName: 'bash',
        testCases: [{ input: 'A', expected: 'Yes' }, { input: 'B', expected: 'No' }],
        hint: 'if [ "$s" = "A" ]'
    },
    {
        id: 'bash2-for-loop',
        title: 'For Loop',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a script to print numbers 1 to the input number using a for loop.`,
        examples: [{ input: '3', output: '1\n2\n3' }],
        starterCode: `# Write your script here
read n
for ((i=1; i<=n; i++)); do
    echo $i
done
`,
        functionName: 'bash',
        testCases: [{ input: '3', expected: '1\n2\n3' }, { input: '2', expected: '1\n2' }],
        hint: 'for ((i=1; i<=n; i++))'
    },
    {
        id: 'bash2-while-loop',
        title: 'While Loop',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a script to print numbers 1 to the input number using a while loop.`,
        examples: [{ input: '3', output: '1\n2\n3' }],
        starterCode: `# Write your script here
read n
i=1
while [ $i -le $n ]; do
    echo $i
    ((i++))
done
`,
        functionName: 'bash',
        testCases: [{ input: '3', expected: '1\n2\n3' }, { input: '2', expected: '1\n2' }],
        hint: 'while [ $i -le $n ]'
    },
    {
        id: 'bash2-function',
        title: 'Function',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Define a function 'greet' that prints the argument passed to it. Call it with input.`,
        examples: [{ input: 'Hello', output: 'Hello' }],
        starterCode: `# Write your script here
greet() {
    echo $1
}
read name
greet $name
`,
        functionName: 'bash',
        testCases: [{ input: 'Hello', expected: 'Hello' }, { input: 'World', expected: 'World' }],
        hint: 'func() { echo $1; }'
    },
    {
        id: 'bash2-args',
        title: 'Script Arguments',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a script that prints the first argument passed to it.`,
        examples: [{ input: 'Arg1', output: 'Arg1' }],
        starterCode: `# Write your script here
echo $1
`,
        functionName: 'bash',
        testCases: [{ input: 'Arg1', expected: 'Arg1' }, { input: 'Test', expected: 'Test' }],
        hint: 'Use $1.'
    },
    {
        id: 'bash2-case',
        title: 'Case Statement',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a script that reads a fruit name. If "apple", print "Red". If "banana", print "Yellow".`,
        examples: [{ input: 'apple', output: 'Red' }],
        starterCode: `# Write your script here
read fruit
case $fruit in
    "apple") echo "Red" ;;
    "banana") echo "Yellow" ;;
esac
`,
        functionName: 'bash',
        testCases: [{ input: 'apple', expected: 'Red' }, { input: 'banana', expected: 'Yellow' }],
        hint: 'case $var in ... esac'
    },
    {
        id: 'bash2-read',
        title: 'Read Input',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read a line from stdin and print it.`,
        examples: [{ input: 'Hello', output: 'Hello' }],
        starterCode: `# Write your script here
read line
echo $line
`,
        functionName: 'bash',
        testCases: [{ input: 'Hello', expected: 'Hello' }, { input: 'World', expected: 'World' }],
        hint: 'read var'
    },
    {
        id: 'bash2-arithmetic',
        title: 'Arithmetic Expansion',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read two numbers and print their sum using arithmetic expansion.`,
        examples: [{ input: '5 3', output: '8' }],
        starterCode: `# Write your script here
read a b
echo $((a + b))
`,
        functionName: 'bash',
        testCases: [{ input: '5 3', expected: '8' }, { input: '10 20', expected: '30' }],
        hint: '$((...))'
    },
    {
        id: 'bash2-string-len',
        title: 'String Length',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read a string and print its length.`,
        examples: [{ input: 'Hello', output: '5' }],
        starterCode: `# Write your script here
read s
echo \${#s}
`,
        functionName: 'bash',
        testCases: [{ input: 'Hello', expected: '5' }, { input: 'Hi', expected: '2' }],
        hint: '${#var}'
    },
    {
        id: 'bash2-substring',
        title: 'Substring',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Read a string and print substring starting at index 1 with length 3.`,
        examples: [{ input: 'Hello', output: 'ell' }],
        starterCode: `# Write your script here
read s
echo \${s:1:3}
`,
        functionName: 'bash',
        testCases: [{ input: 'Hello', expected: 'ell' }, { input: 'World', expected: 'orl' }],
        hint: '${var:start:len}'
    },
    {
        id: 'bash2-array',
        title: 'Array Basics',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Read two words into an array and print the second element.`,
        examples: [{ input: 'A B', output: 'B' }],
        starterCode: `# Write your script here
read -a arr
echo \${arr[1]}
`,
        functionName: 'bash',
        testCases: [{ input: 'A B', expected: 'B' }, { input: 'X Y', expected: 'Y' }],
        hint: '${arr[index]}'
    },
    {
        id: 'bash2-array-len',
        title: 'Array Length',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Read words into an array and print the number of elements.`,
        examples: [{ input: 'A B', output: '2' }],
        starterCode: `# Write your script here
read -a arr
echo \${#arr[@]}
`,
        functionName: 'bash',
        testCases: [{ input: 'A B', expected: '2' }, { input: 'A B C', expected: '3' }],
        hint: '${#arr[@]}'
    },
    {
        id: 'bash2-loop-array',
        title: 'Loop Array',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Read words into an array and loop through to print each element.`,
        examples: [{ input: 'A B', output: 'A\nB' }],
        starterCode: `# Write your script here
read -a arr
for i in "\${arr[@]}"; do
    echo $i
done
`,
        functionName: 'bash',
        testCases: [{ input: 'A B', expected: 'A\nB' }, { input: '1 2', expected: '1\n2' }],
        hint: 'for i in "${arr[@]}"'
    },
    {
        id: 'bash2-command-sub',
        title: 'Command Substitution',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read a string, store it in a variable using command substitution (echo), and print it.`,
        examples: [{ input: 'Hi', output: 'Hi' }],
        starterCode: `# Write your script here
read s
v=$(echo $s)
echo $v
`,
        functionName: 'bash',
        testCases: [{ input: 'Hi', expected: 'Hi' }, { input: 'Test', expected: 'Test' }],
        hint: '$(...)'
    },
    {
        id: 'bash2-exit-status',
        title: 'Exit Status',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Run 'true' or 'false' based on input (0 or 1) and print exit status. (Input 0 -> true, 1 -> false).`,
        examples: [{ input: '0', output: '0' }],
        starterCode: `# Write your script here
read n
if [ "$n" -eq 0 ]; then true; else false; fi
echo $?
`,
        functionName: 'bash',
        testCases: [{ input: '0', expected: '0' }, { input: '1', expected: '1' }],
        hint: '$?'
    },
    {
        id: 'bash2-file-test',
        title: 'File Test',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Check if 'd' is a directory. Print "Dir" or "No". Assume 'd' exists.`,
        examples: [{ input: '', output: 'Dir' }],
        starterCode: `# Write your script here
if [ -d d ]; then echo "Dir"; else echo "No"; fi
`,
        setupCode: `mkdir d`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Dir' }],
        hint: '-d flag'
    },
    {
        id: 'bash2-string-compare',
        title: 'String Compare',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read two strings and check if they are equal. Print "Yes" or "No".`,
        examples: [{ input: 'a a', output: 'Yes' }],
        starterCode: `# Write your script here
read a b
if [ "$a" = "$b" ]; then echo "Yes"; else echo "No"; fi
`,
        functionName: 'bash',
        testCases: [{ input: 'a a', expected: 'Yes' }, { input: 'a b', expected: 'No' }],
        hint: '[ "$a" = "$b" ]'
    },
    {
        id: 'bash2-num-compare',
        title: 'Number Compare',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read two numbers and check if first is greater than second. Print "Yes" or "No".`,
        examples: [{ input: '10 5', output: 'Yes' }],
        starterCode: `# Write your script here
read a b
if [ $a -gt $b ]; then echo "Yes"; else echo "No"; fi
`,
        functionName: 'bash',
        testCases: [{ input: '10 5', expected: 'Yes' }, { input: '5 10', expected: 'No' }],
        hint: '-gt'
    },
    {
        id: 'bash2-logical-and',
        title: 'Logical AND',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Read two numbers. Check if both are positive (>0). Print "Yes" or "No".`,
        examples: [{ input: '1 1', output: 'Yes' }],
        starterCode: `# Write your script here
read a b
if [ $a -gt 0 ] && [ $b -gt 0 ]; then echo "Yes"; else echo "No"; fi
`,
        functionName: 'bash',
        testCases: [{ input: '1 1', expected: 'Yes' }, { input: '1 0', expected: 'No' }],
        hint: '&& operator'
    },
    {
        id: 'bash2-logical-or',
        title: 'Logical OR',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Read two numbers. Check if at least one is positive (>0). Print "Yes" or "No".`,
        examples: [{ input: '1 0', output: 'Yes' }],
        starterCode: `# Write your script here
read a b
if [ $a -gt 0 ] || [ $b -gt 0 ]; then echo "Yes"; else echo "No"; fi
`,
        functionName: 'bash',
        testCases: [{ input: '1 0', expected: 'Yes' }, { input: '0 0', expected: 'No' }],
        hint: '|| operator'
    },
    {
        id: 'bash2-regex',
        title: 'Regex Match',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Read a string. Check if it starts with "a". Print "Match" or "No".`,
        examples: [{ input: 'abc', output: 'Match' }],
        starterCode: `# Write your script here
read s
if [[ "$s" =~ ^a.* ]]; then echo "Match"; else echo "No"; fi
`,
        functionName: 'bash',
        testCases: [{ input: 'abc', expected: 'Match' }, { input: 'bca', expected: 'No' }],
        hint: '[[ str =~ regex ]]'
    },
    {
        id: 'bash2-default-val',
        title: 'Default Value',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Read a value. Print it. If empty, print "Def".`,
        examples: [{ input: '', output: 'Def' }],
        starterCode: `# Write your script here
read v
echo \${v:-Def}
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Def' }, { input: 'Val', expected: 'Val' }],
        hint: '${var:-default}'
    },
    {
        id: 'bash2-heredoc',
        title: 'Here Document',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Read two lines and print them using heredoc.`,
        examples: [{ input: 'L1\nL2', output: 'L1\nL2' }],
        starterCode: `# Write your script here
read l1
read l2
cat <<EOF
$l1
$l2
EOF
`,
        functionName: 'bash',
        testCases: [{ input: 'L1\nL2', expected: 'L1\nL2' }, { input: 'A\nB', expected: 'A\nB' }],
        hint: '<<EOF ... EOF'
    },
    {
        id: 'bash2-redirect-stderr',
        title: 'Redirect Stderr',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Redirect stderr of 'ls nonexist' to stdout. (Output contains "No such file").`,
        examples: [{ input: '', output: 'ls: cannot access \'nonexist\': No such file or directory' }],
        starterCode: `# Write your script here
ls nonexist 2>&1
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'ls: cannot access \'nonexist\': No such file or directory' }],
        hint: '2>&1'
    },
    {
        id: 'bash2-discard-output',
        title: 'Discard Output',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read input, echo it, but discard output (print nothing).`,
        examples: [{ input: 'Hi', output: '' }],
        starterCode: `# Write your script here
read s
echo $s > /dev/null
`,
        functionName: 'bash',
        testCases: [{ input: 'Hi', expected: '' }, { input: 'Test', expected: '' }],
        hint: '> /dev/null'
    },
    {
        id: 'bash2-brace-expansion',
        title: 'Brace Expansion',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read a string and print it with suffixes 1 and 2 using brace expansion.`,
        examples: [{ input: 'A', output: 'A1 A2' }],
        starterCode: `# Write your script here
read s
echo $s{1,2}
`,
        functionName: 'bash',
        testCases: [{ input: 'A', expected: 'A1 A2' }, { input: 'B', expected: 'B1 B2' }],
        hint: 'A{1,2}'
    },
    {
        id: 'bash2-process-sub',
        title: 'Process Substitution',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Read two strings and compare them using diff and process substitution.`,
        examples: [{ input: 'A B', output: '1c1\n< A\n---\n> B' }],
        starterCode: `# Write your script here
read a b
diff <(echo $a) <(echo $b)
`,
        functionName: 'bash',
        testCases: [{ input: 'A B', expected: '1c1\n< A\n---\n> B' }, { input: 'X Y', expected: '1c1\n< X\n---\n> Y' }],
        hint: '<(cmd)'
    },
    {
        id: 'bash2-readonly',
        title: 'Readonly Variable',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Declare readonly var r="A". Try to change it to input. Print r. (Should print A, error suppressed).`,
        examples: [{ input: 'B', output: 'A' }],
        starterCode: `# Write your script here
read val
r="$val" 2>/dev/null
echo $r
`,
        setupCode: `readonly r="A"`,
        functionName: 'bash',
        testCases: [{ input: 'B', expected: 'A' }, { input: 'C', expected: 'A' }],
        hint: 'readonly var'
    },
    {
        id: 'bash2-unset',
        title: 'Unset Variable',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read input into 'v', then unset it. Print 'v' (should be empty).`,
        examples: [{ input: 'A', output: '' }],
        starterCode: `# Write your script here
read v
unset v
echo $v
`,
        setupCode: ``,
        functionName: 'bash',
        testCases: [{ input: 'A', expected: '' }, { input: 'B', expected: '' }],
        hint: 'unset var'
    },
    {
        id: 'bash2-env-var',
        title: 'Environment Variable',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read input, export it as variable E, and print it.`,
        examples: [{ input: 'Exp', output: 'Exp' }],
        starterCode: `# Write your script here
read val
export E="$val"
echo $E
`,
        functionName: 'bash',
        testCases: [{ input: 'Exp', expected: 'Exp' }, { input: 'Test', expected: 'Test' }],
        hint: 'export var'
    },
    {
        id: 'bash2-basename-suffix',
        title: 'Basename Suffix',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Read a filename and remove the .txt suffix.`,
        examples: [{ input: 'file.txt', output: 'file' }],
        starterCode: `# Write your script here
read f
basename $f .txt
`,
        functionName: 'bash',
        testCases: [{ input: 'file.txt', expected: 'file' }, { input: 'data.txt', expected: 'data' }],
        hint: 'basename name suffix'
    },
    {
        id: 'bash2-dirname-path',
        title: 'Dirname Path',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read a path and print its directory name.`,
        examples: [{ input: '/a/b/c', output: '/a/b' }],
        starterCode: `# Write your script here
read p
dirname $p
`,
        functionName: 'bash',
        testCases: [{ input: '/a/b/c', expected: '/a/b' }, { input: '/x/y/z', expected: '/x/y' }],
        hint: 'dirname'
    },
    {
        id: 'bash2-tr-squeeze',
        title: 'Tr Squeeze',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Read input and squeeze repeated spaces to single space.`,
        examples: [{ input: 'A  B', output: 'A B' }],
        starterCode: `# Write your script here
tr -s " "
`,
        functionName: 'bash',
        testCases: [{ input: 'A  B', expected: 'A B' }, { input: 'X   Y', expected: 'X Y' }],
        hint: 'tr -s'
    },
    {
        id: 'bash2-grep-count',
        title: 'Grep Count',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Count lines containing "a" in input.`,
        examples: [{ input: 'a\nb\na', output: '2' }],
        starterCode: `# Write your script here
grep -c "a"
`,
        functionName: 'bash',
        testCases: [{ input: 'a\nb\na', expected: '2' }, { input: 'a\na\na', expected: '3' }],
        hint: 'grep -c'
    },
    {
        id: 'bash2-grep-invert',
        title: 'Grep Invert',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Print lines NOT containing "a" in input.`,
        examples: [{ input: 'a\nb', output: 'b' }],
        starterCode: `# Write your script here
grep -v "a"
`,
        functionName: 'bash',
        testCases: [{ input: 'a\nb', expected: 'b' }, { input: 'x\ny\na', expected: 'x\ny' }],
        hint: 'grep -v'
    },
    {
        id: 'bash2-head-tail-pipe',
        title: 'Head Tail Pipe',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Print the 2nd line of input using head and tail.`,
        examples: [{ input: '1\n2\n3', output: '2' }],
        starterCode: `# Write your script here
head -n 2 | tail -n 1
`,
        functionName: 'bash',
        testCases: [{ input: '1\n2\n3', expected: '2' }, { input: 'A\nB\nC', expected: 'B' }],
        hint: 'head | tail'
    },
    {
        id: 'bash2-sort-numeric',
        title: 'Sort Numeric',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Sort input numerically.`,
        examples: [{ input: '10\n2', output: '2\n10' }],
        starterCode: `# Write your script here
sort -n
`,
        functionName: 'bash',
        testCases: [{ input: '10\n2', expected: '2\n10' }, { input: '5\n1', expected: '1\n5' }],
        hint: 'sort -n'
    },
    {
        id: 'bash2-sort-unique',
        title: 'Sort Unique',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Sort input and remove duplicates.`,
        examples: [{ input: 'A\nA', output: 'A' }],
        starterCode: `# Write your script here
sort -u
`,
        functionName: 'bash',
        testCases: [{ input: 'A\nA', expected: 'A' }, { input: 'B\nB\nC', expected: 'B\nC' }],
        hint: 'sort -u'
    },
    {
        id: 'bash2-wc-words',
        title: 'Count Words',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Count words in input.`,
        examples: [{ input: 'A B', output: '2' }],
        starterCode: `# Write your script here
wc -w
`,
        functionName: 'bash',
        testCases: [{ input: 'A B', expected: '2' }, { input: '1 2 3', expected: '3' }],
        hint: 'wc -w'
    },
    {
        id: 'bash2-wc-chars',
        title: 'Count Chars',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Count chars in input (including newline).`,
        examples: [{ input: 'A', output: '2' }],
        starterCode: `# Write your script here
wc -m
`,
        functionName: 'bash',
        testCases: [{ input: 'A', expected: '2' }, { input: 'AB', expected: '3' }],
        hint: 'wc -m'
    },
    {
        id: 'bash2-tee-append',
        title: 'Tee Append',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Append input to file 'f' (content "A") using tee. Print 'f'.`,
        examples: [{ input: 'B', output: 'A\nB' }],
        starterCode: `# Write your script here
tee -a f > /dev/null
cat f
`,
        setupCode: `echo "A" > f`,
        functionName: 'bash',
        testCases: [{ input: 'B', expected: 'A\nB' }, { input: 'C', expected: 'A\nC' }],
        hint: 'tee -a'
    },
    {
        id: 'bash2-paste-delim',
        title: 'Paste Delimiter',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Paste 'f1' ("A") and 'f2' ("B") with comma delimiter.`,
        examples: [{ input: '', output: 'A,B' }],
        starterCode: `paste -d "," f1 f2
`,
        setupCode: `echo "A" > f1
echo "B" > f2`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'A,B' }],
        hint: 'paste -d'
    },
    {
        id: 'bash2-cut-range',
        title: 'Cut Range',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Cut bytes 1-2 from input.`,
        examples: [{ input: 'ABC', output: 'AB' }],
        starterCode: `# Write your script here
cut -b 1-2
`,
        functionName: 'bash',
        testCases: [{ input: 'ABC', expected: 'AB' }, { input: '1234', expected: '12' }],
        hint: 'cut -b 1-2'
    },
    {
        id: 'bash2-awk-condition',
        title: 'Awk Condition',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Print line if first column > 1.`,
        examples: [{ input: '1\n2', output: '2' }],
        starterCode: `# Write your script here
awk '$1 > 1'
`,
        functionName: 'bash',
        testCases: [{ input: '1\n2', expected: '2' }, { input: '0\n5', expected: '5' }],
        hint: 'awk \'$1 > 1\''
    },
    {
        id: 'bash2-sed-delete',
        title: 'Sed Delete',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Delete 1st line of input.`,
        examples: [{ input: 'A\nB', output: 'B' }],
        starterCode: `# Write your script here
sed '1d'
`,
        functionName: 'bash',
        testCases: [{ input: 'A\nB', expected: 'B' }, { input: '1\n2\n3', expected: '2\n3' }],
        hint: 'sed \'1d\''
    },
    {
        id: 'bash2-find-exec',
        title: 'Find Exec',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Find 'f' and cat it. Content "A".`,
        examples: [{ input: '', output: 'A' }],
        starterCode: `find . -name f -exec cat {} \\;
`,
        setupCode: `echo "A" > f`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'A' }],
        hint: '-exec ... {} \;'
    },
    {
        id: 'bash2-xargs-n',
        title: 'Xargs Max Args',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Pass 1 arg at a time to echo from input.`,
        examples: [{ input: 'A B', output: 'A\nB' }],
        starterCode: `# Write your script here
xargs -n 1 echo
`,
        functionName: 'bash',
        testCases: [{ input: 'A B', expected: 'A\nB' }, { input: '1 2', expected: '1\n2' }],
        hint: 'xargs -n 1'
    },
    {
        id: 'bash2-seq-step',
        title: 'Seq Step',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Print sequence from 1 to input end with step 2.`,
        examples: [{ input: '5', output: '1\n3\n5' }],
        starterCode: `# Write your script here
read n
seq 1 2 $n
`,
        functionName: 'bash',
        testCases: [{ input: '5', expected: '1\n3\n5' }, { input: '6', expected: '1\n3\n5' }],
        hint: 'seq start step end'
    },
    {
        id: 'bash2-shuf-n',
        title: 'Shuf Count',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Pick 1 random line from input.`,
        examples: [{ input: 'A', output: 'A' }],
        starterCode: `# Write your script here
shuf -n 1
`,
        functionName: 'bash',
        testCases: [{ input: 'A', expected: 'A' }],
        hint: 'shuf -n'
    },
    {
        id: 'bash2-rev-line',
        title: 'Rev Line',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Reverse characters of input line.`,
        examples: [{ input: 'AB', output: 'BA' }],
        starterCode: `# Write your script here
rev
`,
        functionName: 'bash',
        testCases: [{ input: 'AB', expected: 'BA' }, { input: '123', expected: '321' }],
        hint: 'rev'
    },
];
