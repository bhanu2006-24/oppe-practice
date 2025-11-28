import { Problem } from '../types';

export const SYSTEM_COMMANDS_OPPE2_PROBLEMS: Problem[] = [
    {
        id: 'bash2-if-else',
        title: 'If Else',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a script that checks if a file 'f' exists. If yes, print "Exists", else print "Missing".`,
        examples: [{ input: '', output: 'Missing' }],
        starterCode: `# Write your script here
if [ -f f ]; then
    echo "Exists"
else
    echo "Missing"
fi
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Missing' }],
        hint: 'Use [ -f file ].'
    },
    {
        id: 'bash2-for-loop',
        title: 'For Loop',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a script to print numbers 1 to 5 using a for loop.`,
        examples: [{ input: '', output: '1\n2\n3\n4\n5' }],
        starterCode: `# Write your script here
for i in {1..5}; do
    echo $i
done
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '1\n2\n3\n4\n5' }],
        hint: 'for i in {1..5}'
    },
    {
        id: 'bash2-while-loop',
        title: 'While Loop',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Write a script to print numbers 1 to 3 using a while loop.`,
        examples: [{ input: '', output: '1\n2\n3' }],
        starterCode: `# Write your script here
i=1
while [ $i -le 3 ]; do
    echo $i
    ((i++))
done
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '1\n2\n3' }],
        hint: 'while [ $i -le 3 ]'
    },
    {
        id: 'bash2-function',
        title: 'Function',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Define a function 'greet' that prints "Hello". Call it.`,
        examples: [{ input: '', output: 'Hello' }],
        starterCode: `# Write your script here
greet() {
    echo "Hello"
}
greet
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Hello' }],
        hint: 'func() { ... }'
    },
    {
        id: 'bash2-args',
        title: 'Script Arguments',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a script that prints the first argument passed to it. (Simulate passing "Arg1").`,
        examples: [{ input: '', output: 'Arg1' }],
        starterCode: `set -- "Arg1"
# Write your script here
echo $1
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Arg1' }],
        hint: 'Use $1.'
    },
    {
        id: 'bash2-case',
        title: 'Case Statement',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a script that checks variable 'fruit'. If "apple", print "Red". If "banana", print "Yellow". Set fruit="apple".`,
        examples: [{ input: '', output: 'Red' }],
        starterCode: `fruit="apple"
# Write your script here
case $fruit in
    "apple") echo "Red" ;;
    "banana") echo "Yellow" ;;
esac
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Red' }],
        hint: 'case $var in ... esac'
    },
    {
        id: 'bash2-read',
        title: 'Read Input',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read a line from stdin and print it. Input is "Hello".`,
        examples: [{ input: '', output: 'Hello' }],
        starterCode: `echo "Hello" | {
    read line
    echo $line
}
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Hello' }],
        hint: 'read var'
    },
    {
        id: 'bash2-arithmetic',
        title: 'Arithmetic Expansion',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Calculate 5 + 3 using arithmetic expansion and print result.`,
        examples: [{ input: '', output: '8' }],
        starterCode: `# Write your script here
echo $((5 + 3))
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '8' }],
        hint: '$((...))'
    },
    {
        id: 'bash2-string-len',
        title: 'String Length',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Print the length of string "Hello".`,
        examples: [{ input: '', output: '5' }],
        starterCode: `s="Hello"
# Write your script here
echo \${#s}
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '5' }],
        hint: '${#var}'
    },
    {
        id: 'bash2-substring',
        title: 'Substring',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Extract "ell" from "Hello". (Start index 1, length 3).`,
        examples: [{ input: '', output: 'ell' }],
        starterCode: `s="Hello"
# Write your script here
echo \${s:1:3}
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'ell' }],
        hint: '${var:start:len}'
    },
    {
        id: 'bash2-array',
        title: 'Array Basics',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create an array with "A" and "B". Print the second element.`,
        examples: [{ input: '', output: 'B' }],
        starterCode: `# Write your script here
arr=("A" "B")
echo \${arr[1]}
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'B' }],
        hint: '${arr[index]}'
    },
    {
        id: 'bash2-array-len',
        title: 'Array Length',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Print the number of elements in array ("A" "B").`,
        examples: [{ input: '', output: '2' }],
        starterCode: `arr=("A" "B")
# Write your script here
echo \${#arr[@]}
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '2' }],
        hint: '${#arr[@]}'
    },
    {
        id: 'bash2-loop-array',
        title: 'Loop Array',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Loop through array ("A" "B") and print each element.`,
        examples: [{ input: '', output: 'A\nB' }],
        starterCode: `arr=("A" "B")
# Write your script here
for i in "\${arr[@]}"; do
    echo $i
done
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'A\nB' }],
        hint: 'for i in "${arr[@]}"'
    },
    {
        id: 'bash2-command-sub',
        title: 'Command Substitution',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Store output of 'echo Hi' in variable and print it.`,
        examples: [{ input: '', output: 'Hi' }],
        starterCode: `# Write your script here
v=$(echo Hi)
echo $v
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Hi' }],
        hint: '$(...)'
    },
    {
        id: 'bash2-exit-status',
        title: 'Exit Status',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Run 'true' command and print its exit status.`,
        examples: [{ input: '', output: '0' }],
        starterCode: `true
# Write your script here
echo $?
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '0' }],
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
        starterCode: `mkdir d
# Write your script here
if [ -d d ]; then echo "Dir"; else echo "No"; fi
`,
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
        description: `Check if "a" equals "a". Print "Yes".`,
        examples: [{ input: '', output: 'Yes' }],
        starterCode: `# Write your script here
if [ "a" = "a" ]; then echo "Yes"; fi
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Yes' }],
        hint: '[ "$a" = "$b" ]'
    },
    {
        id: 'bash2-num-compare',
        title: 'Number Compare',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Check if 10 is greater than 5. Print "Yes".`,
        examples: [{ input: '', output: 'Yes' }],
        starterCode: `# Write your script here
if [ 10 -gt 5 ]; then echo "Yes"; fi
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Yes' }],
        hint: '-gt'
    },
    {
        id: 'bash2-logical-and',
        title: 'Logical AND',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Check if 1=1 AND 2=2. Print "Yes".`,
        examples: [{ input: '', output: 'Yes' }],
        starterCode: `# Write your script here
if [ 1 -eq 1 ] && [ 2 -eq 2 ]; then echo "Yes"; fi
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Yes' }],
        hint: '&& operator'
    },
    {
        id: 'bash2-logical-or',
        title: 'Logical OR',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Check if 1=1 OR 1=2. Print "Yes".`,
        examples: [{ input: '', output: 'Yes' }],
        starterCode: `# Write your script here
if [ 1 -eq 1 ] || [ 1 -eq 2 ]; then echo "Yes"; fi
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Yes' }],
        hint: '|| operator'
    },
    {
        id: 'bash2-regex',
        title: 'Regex Match',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Check if "abc" matches regex "a.*". Print "Match".`,
        examples: [{ input: '', output: 'Match' }],
        starterCode: `# Write your script here
if [[ "abc" =~ a.* ]]; then echo "Match"; fi
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Match' }],
        hint: '[[ str =~ regex ]]'
    },
    {
        id: 'bash2-default-val',
        title: 'Default Value',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Print value of 'v'. If unset, print "Def".`,
        examples: [{ input: '', output: 'Def' }],
        starterCode: `# Write your script here
echo \${v:-Def}
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Def' }],
        hint: '${var:-default}'
    },
    {
        id: 'bash2-heredoc',
        title: 'Here Document',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Use cat and heredoc to print "Line1\nLine2".`,
        examples: [{ input: '', output: 'Line1\nLine2' }],
        starterCode: `# Write your script here
cat <<EOF
Line1
Line2
EOF
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Line1\nLine2' }],
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
        description: `Run 'echo Hi' but discard output (print nothing).`,
        examples: [{ input: '', output: '' }],
        starterCode: `# Write your script here
echo Hi > /dev/null
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '' }],
        hint: '> /dev/null'
    },
    {
        id: 'bash2-brace-expansion',
        title: 'Brace Expansion',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Print "A1 A2" using brace expansion.`,
        examples: [{ input: '', output: 'A1 A2' }],
        starterCode: `# Write your script here
echo A{1,2}
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'A1 A2' }],
        hint: 'A{1,2}'
    },
    {
        id: 'bash2-process-sub',
        title: 'Process Substitution',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Compare output of 'echo A' and 'echo B' using diff and process substitution.`,
        examples: [{ input: '', output: '1c1\n< A\n---\n> B' }],
        starterCode: `# Write your script here
diff <(echo A) <(echo B)
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '1c1\n< A\n---\n> B' }],
        hint: '<(cmd)'
    },
    {
        id: 'bash2-readonly',
        title: 'Readonly Variable',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Declare readonly var r="A". Try to change it to "B". Print r. (Should print A, error suppressed).`,
        examples: [{ input: '', output: 'A' }],
        starterCode: `readonly r="A"
# Write your script here
r="B" 2>/dev/null
echo $r
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'A' }],
        hint: 'readonly var'
    },
    {
        id: 'bash2-unset',
        title: 'Unset Variable',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Set v="A", then unset it. Print v (should be empty).`,
        examples: [{ input: '', output: '' }],
        starterCode: `v="A"
# Write your script here
unset v
echo $v
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '' }],
        hint: 'unset var'
    },
    {
        id: 'bash2-env-var',
        title: 'Environment Variable',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Export var E="Exp". Print it.`,
        examples: [{ input: '', output: 'Exp' }],
        starterCode: `# Write your script here
export E="Exp"
echo $E
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Exp' }],
        hint: 'export var'
    },
    {
        id: 'bash2-basename-suffix',
        title: 'Basename Suffix',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Remove suffix .txt from "file.txt".`,
        examples: [{ input: '', output: 'file' }],
        starterCode: `# Write your script here
basename file.txt .txt
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'file' }],
        hint: 'basename name suffix'
    },
    {
        id: 'bash2-dirname-path',
        title: 'Dirname Path',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Get directory of "/a/b/c".`,
        examples: [{ input: '', output: '/a/b' }],
        starterCode: `# Write your script here
dirname /a/b/c
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '/a/b' }],
        hint: 'dirname'
    },
    {
        id: 'bash2-tr-squeeze',
        title: 'Tr Squeeze',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Squeeze repeated spaces in "A  B" to single space.`,
        examples: [{ input: '', output: 'A B' }],
        starterCode: `echo "A  B" | # Write your script here
tr -s " "
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'A B' }],
        hint: 'tr -s'
    },
    {
        id: 'bash2-grep-count',
        title: 'Grep Count',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Count lines containing "a" in "a\nb\na".`,
        examples: [{ input: '', output: '2' }],
        starterCode: `printf "a\\nb\\na" | # Write your script here
grep -c "a"
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '2' }],
        hint: 'grep -c'
    },
    {
        id: 'bash2-grep-invert',
        title: 'Grep Invert',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Print lines NOT containing "a" in "a\nb".`,
        examples: [{ input: '', output: 'b' }],
        starterCode: `printf "a\\nb" | # Write your script here
grep -v "a"
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'b' }],
        hint: 'grep -v'
    },
    {
        id: 'bash2-head-tail-pipe',
        title: 'Head Tail Pipe',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Print 2nd line of "1\n2\n3" using head and tail.`,
        examples: [{ input: '', output: '2' }],
        starterCode: `printf "1\\n2\\n3" | # Write your script here
head -n 2 | tail -n 1
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '2' }],
        hint: 'head | tail'
    },
    {
        id: 'bash2-sort-numeric',
        title: 'Sort Numeric',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Sort "10\n2" numerically.`,
        examples: [{ input: '', output: '2\n10' }],
        starterCode: `printf "10\\n2" | # Write your script here
sort -n
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '2\n10' }],
        hint: 'sort -n'
    },
    {
        id: 'bash2-sort-unique',
        title: 'Sort Unique',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Sort "A\nA" and remove duplicates.`,
        examples: [{ input: '', output: 'A' }],
        starterCode: `printf "A\\nA" | # Write your script here
sort -u
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'A' }],
        hint: 'sort -u'
    },
    {
        id: 'bash2-wc-words',
        title: 'Count Words',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Count words in "A B".`,
        examples: [{ input: '', output: '2' }],
        starterCode: `echo "A B" | # Write your script here
wc -w
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '2' }],
        hint: 'wc -w'
    },
    {
        id: 'bash2-wc-chars',
        title: 'Count Chars',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Count chars in "A". (Includes newline).`,
        examples: [{ input: '', output: '2' }],
        starterCode: `echo "A" | # Write your script here
wc -m
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '2' }],
        hint: 'wc -m'
    },
    {
        id: 'bash2-tee-append',
        title: 'Tee Append',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Append "B" to file 'f' (content "A") using tee. Print 'f'.`,
        examples: [{ input: '', output: 'A\nB' }],
        starterCode: `echo "A" > f
echo "B" | tee -a f > /dev/null
cat f
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'A\nB' }],
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
        starterCode: `echo "A" > f1
echo "B" > f2
paste -d "," f1 f2
`,
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
        description: `Cut bytes 1-2 from "ABC".`,
        examples: [{ input: '', output: 'AB' }],
        starterCode: `echo "ABC" | cut -b 1-2
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'AB' }],
        hint: 'cut -b 1-2'
    },
    {
        id: 'bash2-awk-condition',
        title: 'Awk Condition',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Print line if first column > 1. Input "1\n2".`,
        examples: [{ input: '', output: '2' }],
        starterCode: `printf "1\\n2" | awk '$1 > 1'
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '2' }],
        hint: 'awk \'$1 > 1\''
    },
    {
        id: 'bash2-sed-delete',
        title: 'Sed Delete',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Delete 1st line of "A\nB".`,
        examples: [{ input: '', output: 'B' }],
        starterCode: `printf "A\\nB" | sed '1d'
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'B' }],
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
        starterCode: `echo "A" > f
find . -name f -exec cat {} \\;
`,
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
        description: `Pass 1 arg at a time to echo. Input "A B".`,
        examples: [{ input: '', output: 'A\nB' }],
        starterCode: `echo "A B" | xargs -n 1 echo
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'A\nB' }],
        hint: 'xargs -n 1'
    },
    {
        id: 'bash2-seq-step',
        title: 'Seq Step',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Print 1, 3, 5 (step 2).`,
        examples: [{ input: '', output: '1\n3\n5' }],
        starterCode: `seq 1 2 5
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '1\n3\n5' }],
        hint: 'seq start step end'
    },
    {
        id: 'bash2-shuf-n',
        title: 'Shuf Count',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Pick 1 random line from "A".`,
        examples: [{ input: '', output: 'A' }],
        starterCode: `echo "A" | shuf -n 1
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'A' }],
        hint: 'shuf -n'
    },
    {
        id: 'bash2-rev-line',
        title: 'Rev Line',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Reverse "AB".`,
        examples: [{ input: '', output: 'BA' }],
        starterCode: `echo "AB" | rev
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'BA' }],
        hint: 'rev'
    }
];
