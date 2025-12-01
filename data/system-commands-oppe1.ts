import { Problem } from '../types';

export const SYSTEM_COMMANDS_OPPE1_PROBLEMS: Problem[] = [
        {
                id: 'bash1-echo',
                title: 'Echo Hello',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to read a line from standard input and print it to standard output.`,
                examples: [{ input: 'Hello World', output: 'Hello World' }, { input: 'Bash', output: 'Bash' }],
                starterCode: `# Write your command here
cat
`,
                functionName: 'bash',
                testCases: [{ input: 'Hello World', expected: 'Hello World' }, { input: 'Testing', expected: 'Testing' }, { input: '123', expected: '123' }],
                hint: 'Use cat or echo "$input".'
        },
        {
                id: 'bash1-cat-create',
                title: 'Create File',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to create a file named 'file.txt' containing the content read from standard input. Then display the file's content.`,
                examples: [{ input: 'Hello', output: 'Hello' }],
                starterCode: `# Write your command here
cat > file.txt
cat file.txt
`,
                functionName: 'bash',
                testCases: [{ input: 'Hello', expected: 'Hello' }, { input: 'World', expected: 'World' }],
                hint: 'Use cat > file.txt and then cat file.txt.'
        },
        {
                id: 'bash1-wc-lines',
                title: 'Count Lines',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to count the number of lines from standard input.`,
                examples: [{ input: '1\n2\n3', output: '3' }],
                starterCode: `# Write your command here
wc -l
`,
                setupCode: ``,
                functionName: 'bash',
                testCases: [{ input: '1\n2\n3', expected: '3' }, { input: 'A\nB', expected: '2' }, { input: '', expected: '0' }],
                hint: 'Use wc -l.'
        },
        {
                id: 'bash1-head',
                title: 'First N Lines',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to display the first 2 lines from standard input.`,
                examples: [{ input: '1\n2\n3\n4', output: '1\n2' }],
                starterCode: `# Write your command here
head -n 2
`,
                setupCode: ``,
                functionName: 'bash',
                testCases: [{ input: '1\n2\n3\n4', expected: '1\n2' }, { input: 'A\nB\nC', expected: 'A\nB' }],
                hint: 'Use head -n 2.'
        },
        {
                id: 'bash1-tail',
                title: 'Last N Lines',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to display the last 2 lines from standard input.`,
                examples: [{ input: '1\n2\n3\n4', output: '3\n4' }],
                starterCode: `# Write your command here
tail -n 2
`,
                setupCode: ``,
                functionName: 'bash',
                testCases: [{ input: '1\n2\n3\n4', expected: '3\n4' }, { input: 'A\nB\nC', expected: 'B\nC' }],
                hint: 'Use tail -n 2.'
        },
        {
                id: 'bash1-sort',
                title: 'Sort Lines',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to sort the lines from standard input in ascending order.`,
                examples: [{ input: '3\n1\n2', output: '1\n2\n3' }],
                starterCode: `# Write your command here
sort
`,
                setupCode: ``,
                functionName: 'bash',
                testCases: [{ input: '3\n1\n2', expected: '1\n2\n3' }, { input: 'C\nA\nB', expected: 'A\nB\nC' }],
                hint: 'Use sort command.'
        },
        {
                id: 'bash1-sort-reverse',
                title: 'Sort Reverse',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to sort the lines from standard input in descending order.`,
                examples: [{ input: '1\n3\n2', output: '3\n2\n1' }],
                starterCode: `# Write your command here
sort -r
`,
                setupCode: ``,
                functionName: 'bash',
                testCases: [{ input: '1\n3\n2', expected: '3\n2\n1' }, { input: 'A\nC\nB', expected: 'C\nB\nA' }],
                hint: 'Use sort -r.'
        },
        {
                id: 'bash1-uniq',
                title: 'Remove Duplicates',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Write a command to remove adjacent duplicate lines from standard input.`,
                examples: [{ input: 'A\nA\nB', output: 'A\nB' }],
                starterCode: `# Write your command here
uniq
`,
                setupCode: ``,
                functionName: 'bash',
                testCases: [{ input: 'A\nA\nB', expected: 'A\nB' }, { input: '1\n1\n2\n2', expected: '1\n2' }],
                hint: 'Use uniq command.'
        },
        {
                id: 'bash1-grep',
                title: 'Find String',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to find lines containing "apple" from standard input.`,
                examples: [{ input: 'apple pie\nbanana', output: 'apple pie' }],
                starterCode: `# Write your command here
grep "apple"
`,
                setupCode: ``,
                functionName: 'bash',
                testCases: [{ input: 'apple pie\nbanana', expected: 'apple pie' }, { input: 'pineapple\ngrape', expected: 'pineapple' }],
                hint: 'Use grep "apple".'
        },
        {
                id: 'bash1-grep-case',
                title: 'Case Insensitive Search',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to find lines containing "Apple" from standard input, ignoring case.`,
                examples: [{ input: 'apple\nbanana', output: 'apple' }],
                starterCode: `# Write your command here
grep -i "Apple"
`,
                setupCode: ``,
                functionName: 'bash',
                testCases: [{ input: 'apple\nbanana', expected: 'apple' }, { input: 'APPLE\nOrange', expected: 'APPLE' }],
                hint: 'Use grep -i.'
        },
        {
                id: 'bash1-cut-bytes',
                title: 'Cut Bytes',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to extract the first byte from the input.`,
                examples: [{ input: 'ABC', output: 'A' }],
                starterCode: `# Write your command here
cut -b 1
`,
                functionName: 'bash',
                testCases: [{ input: 'ABC', expected: 'A' }, { input: '123', expected: '1' }],
                hint: 'Use cut -b 1.'
        },
        {
                id: 'bash1-cut-fields',
                title: 'Cut Fields',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to extract the second field from input delimited by comma.`,
                examples: [{ input: 'A,B,C', output: 'B' }],
                starterCode: `# Write your command here
cut -d "," -f 2
`,
                functionName: 'bash',
                testCases: [{ input: 'A,B,C', expected: 'B' }, { input: '1,2,3', expected: '2' }],
                hint: 'Use cut -d "," -f 2.'
        },
        {
                id: 'bash1-tr',
                title: 'Translate Characters',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to replace all 'a's with 'b's from input.`,
                examples: [{ input: 'aba', output: 'bbb' }],
                starterCode: `# Write your command here
tr "a" "b"
`,
                functionName: 'bash',
                testCases: [{ input: 'aba', expected: 'bbb' }, { input: 'apple', expected: 'bpple' }],
                hint: 'Use tr "a" "b".'
        },
        {
                id: 'bash1-tr-delete',
                title: 'Delete Characters',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to delete all digits from input.`,
                examples: [{ input: 'a1b2', output: 'ab' }],
                starterCode: `# Write your command here
tr -d "0-9"
`,
                functionName: 'bash',
                testCases: [{ input: 'a1b2', expected: 'ab' }, { input: '123', expected: '' }, { input: 'A1B2', expected: 'AB' }],
                hint: 'Use tr -d "0-9".'
        },
        {
                id: 'bash1-rev',
                title: 'Reverse String',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to reverse the characters of each line of input.`,
                examples: [{ input: 'abc', output: 'cba' }],
                starterCode: `# Write your command here
rev
`,
                functionName: 'bash',
                testCases: [{ input: 'abc', expected: 'cba' }, { input: '123', expected: '321' }],
                hint: 'Use rev command.'
        },
        {
                id: 'bash1-tee',
                title: 'Tee Command',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to write input to 'f.txt' and also display it to stdout.`,
                examples: [{ input: 'Hi', output: 'Hi' }],
                starterCode: `# Write your command here
tee f.txt
`,
                functionName: 'bash',
                testCases: [{ input: 'Hi', expected: 'Hi' }, { input: 'Hello', expected: 'Hello' }],
                hint: 'Use tee f.txt.'
        },
        {
                id: 'bash1-paste',
                title: 'Paste Files',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Merge lines of 'f1.txt' (content "1") and 'f2.txt' (content "A") side by side.`,
                examples: [{ input: '', output: '1\tA' }],
                starterCode: `# Write your command here
`,
                setupCode: `echo "1" > f1.txt
echo "A" > f2.txt`,
                functionName: 'bash',
                testCases: [{ input: '', expected: '1\tA' }],
                hint: 'Use paste f1.txt f2.txt.'
        },
        {
                id: 'bash1-join',
                title: 'Join Files',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Hard',
                description: `Join 'f1.txt' ("1 A") and 'f2.txt' ("1 X") on the first field.`,
                examples: [{ input: '', output: '1 A X' }],
                starterCode: `# Write your command here
`,
                setupCode: `echo "1 A" > f1.txt
echo "1 X" > f2.txt`,
                functionName: 'bash',
                testCases: [{ input: '', expected: '1 A X' }],
                hint: 'Use join f1.txt f2.txt.'
        },
        {
                id: 'bash1-sed-replace',
                title: 'Sed Replace',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Use sed to replace the first occurrence of "a" with "b" in each line of input.`,
                examples: [{ input: 'aba', output: 'bba' }],
                starterCode: `# Write your command here
sed "s/a/b/"
`,
                functionName: 'bash',
                testCases: [{ input: 'aba', expected: 'bba' }, { input: 'apple', expected: 'bpple' }],
                hint: 'Use sed "s/a/b/".'
        },
        {
                id: 'bash1-sed-global',
                title: 'Sed Global Replace',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Use sed to replace all occurrences of "a" with "b" in each line of input.`,
                examples: [{ input: 'aba', output: 'bbb' }],
                starterCode: `# Write your command here
sed "s/a/b/g"
`,
                functionName: 'bash',
                testCases: [{ input: 'aba', expected: 'bbb' }, { input: 'banana', expected: 'bbnbnb' }],
                hint: 'Use sed "s/a/b/g".'
        },
        {
                id: 'bash1-awk-print',
                title: 'Awk Print Column',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Use awk to print the second column of input.`,
                examples: [{ input: 'A B C', output: 'B' }],
                starterCode: `# Write your command here
awk '{print $2}'
`,
                functionName: 'bash',
                testCases: [{ input: 'A B C', expected: 'B' }, { input: '1 2 3', expected: '2' }],
                hint: 'Use awk \'{print $2}\'.'
        },
        {
                id: 'bash1-awk-sum',
                title: 'Awk Sum',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Hard',
                description: `Use awk to sum the numbers in the first column of input.`,
                examples: [{ input: '1\n2\n3', output: '6' }],
                starterCode: `# Write your command here
awk '{s+=$1} END {print s}'
`,
                functionName: 'bash',
                testCases: [{ input: '1\n2\n3', expected: '6' }, { input: '10\n20', expected: '30' }],
                hint: 'awk \'{s+=$1} END {print s}\'.'
        },
        {
                id: 'bash1-find',
                title: 'Find Files',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Find all files ending with ".txt" in the current directory.`,
                examples: [{ input: '', output: './a.txt' }],
                starterCode: `# Write your command here
`,
                setupCode: `touch a.txt b.log`,
                functionName: 'bash',
                testCases: [{ input: '', expected: './a.txt' }],
                hint: 'Use find . -name "*.txt".'
        },
        {
                id: 'bash1-xargs',
                title: 'Xargs Usage',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Use xargs to pass input as arguments to echo.`,
                examples: [{ input: '1\n2', output: '1 2' }],
                starterCode: `# Write your command here
xargs echo
`,
                functionName: 'bash',
                testCases: [{ input: '1\n2', expected: '1 2' }, { input: 'A\nB', expected: 'A B' }],
                hint: 'xargs echo.'
        },
        {
                id: 'bash1-seq',
                title: 'Sequence',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to print a sequence of numbers from 1 to the input number.`,
                examples: [{ input: '3', output: '1\n2\n3' }],
                starterCode: `# Write your command here
xargs seq 1
`,
                functionName: 'bash',
                testCases: [{ input: '3', expected: '1\n2\n3' }, { input: '2', expected: '1\n2' }],
                hint: 'Use seq 1 N.'
        },
        {
                id: 'bash1-date',
                title: 'Date Command',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Print the current date. (Mocked for test).`,
                examples: [{ input: '', output: 'Fri' }],
                starterCode: `echo "Fri" # Mocked
`,
                functionName: 'bash',
                testCases: [{ input: '', expected: 'Fri' }],
                hint: 'Use date command.'
        },
        {
                id: 'bash1-uname',
                title: 'Kernel Name',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Print the kernel name. (Mocked as Linux).`,
                examples: [{ input: '', output: 'Linux' }],
                starterCode: `echo "Linux" # Mocked
`,
                functionName: 'bash',
                testCases: [{ input: '', expected: 'Linux' }],
                hint: 'Use uname.'
        },
        {
                id: 'bash1-whoami',
                title: 'Current User',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Print the current user. (Mocked as runner).`,
                examples: [{ input: '', output: 'runner' }],
                starterCode: `echo "runner" # Mocked
`,
                functionName: 'bash',
                testCases: [{ input: '', expected: 'runner' }],
                hint: 'Use whoami.'
        },
        {
                id: 'bash1-pwd',
                title: 'Working Directory',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Print the current working directory. (Mocked as /app).`,
                examples: [{ input: '', output: '/app' }],
                starterCode: `echo "/app" # Mocked
`,
                functionName: 'bash',
                testCases: [{ input: '', expected: '/app' }],
                hint: 'Use pwd.'
        },
        {
                id: 'bash1-mkdir',
                title: 'Make Directory',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Create a directory named 'd' and list it.`,
                examples: [{ input: '', output: 'd' }],
                starterCode: `# Write your command here
ls -d d
`,
                functionName: 'bash',
                testCases: [{ input: '', expected: 'd' }],
                hint: 'Use mkdir d.'
        },
        {
                id: 'bash1-rmdir',
                title: 'Remove Directory',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Remove an empty directory 'd'.`,
                examples: [{ input: '', output: '' }],
                starterCode: `# Write your command here
ls
`,
                setupCode: `mkdir d`,
                functionName: 'bash',
                testCases: [{ input: '', expected: '' }],
                hint: 'Use rmdir d.'
        },
        {
                id: 'bash1-touch',
                title: 'Touch File',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Create an empty file named 'f'.`,
                examples: [{ input: '', output: 'f' }],
                starterCode: `# Write your command here
ls f
`,
                functionName: 'bash',
                testCases: [{ input: '', expected: 'f' }],
                hint: 'Use touch f.'
        },
        {
                id: 'bash1-cp',
                title: 'Copy File',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Copy 'a' to 'b'. 'a' contains "Hi". Print 'b'.`,
                examples: [{ input: '', output: 'Hi' }],
                starterCode: `# Write your command here
cat b
`,
                setupCode: `echo "Hi" > a`,
                functionName: 'bash',
                testCases: [{ input: '', expected: 'Hi' }],
                hint: 'Use cp a b.'
        },
        {
                id: 'bash1-mv',
                title: 'Move File',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Rename 'a' to 'b'. 'a' contains "Hi". Print 'b'.`,
                examples: [{ input: '', output: 'Hi' }],
                starterCode: `# Write your command here
cat b
`,
                setupCode: `echo "Hi" > a`,
                functionName: 'bash',
                testCases: [{ input: '', expected: 'Hi' }],
                hint: 'Use mv a b.'
        },
        {
                id: 'bash1-rm',
                title: 'Remove File',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Remove file 'a'.`,
                examples: [{ input: '', output: '' }],
                starterCode: `# Write your command here
ls
`,
                setupCode: `touch a`,
                functionName: 'bash',
                testCases: [{ input: '', expected: '' }],
                hint: 'Use rm a.'
        },
        {
                id: 'bash1-chmod',
                title: 'Change Permissions',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Change permissions of 'a' to 777. (Mocked).`,
                examples: [{ input: '', output: '' }],
                starterCode: `# Write your command here
`,
                setupCode: `touch a`,
                functionName: 'bash',
                testCases: [{ input: '', expected: '' }],
                hint: 'Use chmod 777 a.'
        },
        {
                id: 'bash1-diff',
                title: 'Diff Files',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Compare 'a' ("A") and 'b' ("B").`,
                examples: [{ input: '', output: '1c1\n< A\n---\n> B' }],
                starterCode: `# Write your command here
`,
                setupCode: `echo "A" > a
echo "B" > b`,
                functionName: 'bash',
                testCases: [{ input: '', expected: '1c1\n< A\n---\n> B' }],
                hint: 'Use diff a b.'
        },
        {
                id: 'bash1-cmp',
                title: 'Compare Bytes',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Compare 'a' ("A") and 'b' ("A") byte by byte. No output if identical.`,
                examples: [{ input: '', output: '' }],
                starterCode: `# Write your command here
`,
                setupCode: `echo "A" > a
echo "A" > b`,
                functionName: 'bash',
                testCases: [{ input: '', expected: '' }],
                hint: 'Use cmp a b.'
        },
        {
                id: 'bash1-comm',
                title: 'Common Lines',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Hard',
                description: `Compare sorted files 'a' ("1\n2\n3") and 'b' ("1\n2"). Suppress column 1 and 2 (show only unique to b? No, show unique to a? comm -3 suppresses both unique, shows common. Wait. comm -3 suppresses common? No. comm -12 shows common. comm -3 shows unique to both. Let's use -3 to show diff).`,
                examples: [{ input: '', output: '\t\t3' }],
                starterCode: `# Write your command here
`,
                setupCode: `printf "1\\n2\\n3" > a
printf "1\\n2" > b`,
                functionName: 'bash',
                testCases: [{ input: '', expected: '\t\t3' }],
                hint: 'Use comm -3 a b. (Actually comm output depends on flags. -3 suppresses col 3 (common). Wait. -1 suppresses unique to a. -2 suppresses unique to b. -3 suppresses common. So unique to a and unique to b are shown. 3 is unique to a. So it shows in col 1. 1 and 2 are common. So suppressed. Result: 3 in col 1. Tab indentation matters.)'
        },
        {
                id: 'bash1-basename',
                title: 'Basename',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to print the filename from the input path.`,
                examples: [{ input: '/path/to/file.txt', output: 'file.txt' }],
                starterCode: `# Write your command here
xargs basename
`,
                functionName: 'bash',
                testCases: [{ input: '/path/to/file.txt', expected: 'file.txt' }, { input: '/a/b/c.txt', expected: 'c.txt' }],
                hint: 'Use basename.'
        },
        {
                id: 'bash1-dirname',
                title: 'Dirname',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to print the directory path from the input path.`,
                examples: [{ input: '/path/to/file.txt', output: '/path/to' }],
                starterCode: `# Write your command here
xargs dirname
`,
                functionName: 'bash',
                testCases: [{ input: '/path/to/file.txt', expected: '/path/to' }, { input: '/a/b/c.txt', expected: '/a/b' }],
                hint: 'Use dirname.'
        },
        {
                id: 'bash1-head-bytes',
                title: 'Head Bytes',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to print the first 2 bytes of input.`,
                examples: [{ input: 'HiThere', output: 'Hi' }],
                starterCode: `# Write your command here
head -c 2
`,
                functionName: 'bash',
                testCases: [{ input: 'HiThere', expected: 'Hi' }, { input: 'ABCD', expected: 'AB' }],
                hint: 'Use head -c 2.'
        },
        {
                id: 'bash1-tail-bytes',
                title: 'Tail Bytes',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to print the last 2 bytes of input.`,
                examples: [{ input: 'HiThere', output: 're' }],
                starterCode: `# Write your command here
tail -c 2
`,
                functionName: 'bash',
                testCases: [{ input: 'HiThere', expected: 're' }, { input: 'ABCD', expected: 'CD' }],
                hint: 'Use tail -c 2.'
        },
        {
                id: 'bash1-fold',
                title: 'Fold Lines',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to wrap input lines to width 2.`,
                examples: [{ input: '1234', output: '12\n34' }],
                starterCode: `# Write your command here
fold -w 2
`,
                functionName: 'bash',
                testCases: [{ input: '1234', expected: '12\n34' }, { input: 'ABCD', expected: 'AB\nCD' }],
                hint: 'Use fold -w 2.'
        },
        {
                id: 'bash1-nl',
                title: 'Number Lines',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to number the lines of input.`,
                examples: [{ input: 'A', output: '     1\tA' }],
                starterCode: `# Write your command here
nl
`,
                functionName: 'bash',
                testCases: [{ input: 'A', expected: '     1\tA' }, { input: 'B', expected: '     1\tB' }],
                hint: 'Use nl.'
        },
        {
                id: 'bash1-od',
                title: 'Octal Dump',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Hard',
                description: `Write a command to dump input in octal.`,
                examples: [{ input: 'AB', output: '0000000 040501 000012\n0000003' }],
                starterCode: `# Write your command here
od
`,
                functionName: 'bash',
                testCases: [{ input: 'AB', expected: '0000000 040501 000012\n0000003' }],
                hint: 'Use od.'
        },
        {
                id: 'bash1-strings',
                title: 'Strings Command',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Write a command to print printable characters from input.`,
                examples: [{ input: 'Hi', output: 'Hi' }],
                starterCode: `# Write your command here
strings
`,
                functionName: 'bash',
                testCases: [{ input: 'Hi', expected: 'Hi' }, { input: 'Test', expected: 'Test' }],
                hint: 'Use strings.'
        },
        {
                id: 'bash1-shuf',
                title: 'Shuffle',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Write a command to shuffle input lines.`,
                examples: [{ input: '1', output: '1' }],
                starterCode: `# Write your command here
shuf
`,
                functionName: 'bash',
                testCases: [{ input: '1', expected: '1' }],
                hint: 'Use shuf.'
        },
        {
                id: 'bash1-factor',
                title: 'Factor Numbers',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Medium',
                description: `Write a command to print prime factors of the input number.`,
                examples: [{ input: '10', output: '10: 2 5' }],
                starterCode: `# Write your command here
xargs factor
`,
                functionName: 'bash',
                testCases: [{ input: '10', expected: '10: 2 5' }, { input: '6', expected: '6: 2 3' }],
                hint: 'Use factor.'
        },
        {
                id: 'bash1-yes',
                title: 'Yes Command',
                subject: 'System_Commands',
                examLevel: 'OPPE 1',
                difficulty: 'Easy',
                description: `Write a command to print the input string twice using yes command.`,
                examples: [{ input: 'y', output: 'y\ny' }],
                starterCode: `# Write your command here
xargs yes | head -n 2
`,
                functionName: 'bash',
                testCases: [{ input: 'y', expected: 'y\ny' }, { input: 'no', expected: 'no\nno' }],
                hint: 'Use yes | head -n 2.'
        }
];
