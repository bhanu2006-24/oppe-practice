import { Problem } from '../types';

export const SYSTEM_COMMANDS_OPPE1_PROBLEMS: Problem[] = [
    {
        id: 'bash1-echo',
        title: 'Echo Hello',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to print "Hello World" to the standard output.`,
        examples: [{ input: '', output: 'Hello World' }],
        starterCode: `# Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Hello World' }],
        hint: 'Use echo command.'
    },
    {
        id: 'bash1-cat-create',
        title: 'Create File',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to create a file named 'file.txt' containing the text "Hello". Then display its content.`,
        examples: [{ input: '', output: 'Hello' }],
        starterCode: `# Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Hello' }],
        hint: 'Use echo "..." > file.txt and cat file.txt.'
    },
    {
        id: 'bash1-wc-lines',
        title: 'Count Lines',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to count the number of lines in a file named 'data.txt'. Assume 'data.txt' exists and has 3 lines.`,
        examples: [{ input: '', output: '3' }],
        starterCode: `printf "1\\n2\\n3" > data.txt
# Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '3' }],
        hint: 'Use wc -l < data.txt to avoid filename in output.'
    },
    {
        id: 'bash1-head',
        title: 'First N Lines',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to display the first 2 lines of 'file.txt'.`,
        examples: [{ input: '', output: '1\n2' }],
        starterCode: `printf "1\\n2\\n3\\n4" > file.txt
# Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '1\n2' }],
        hint: 'Use head -n 2.'
    },
    {
        id: 'bash1-tail',
        title: 'Last N Lines',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to display the last 2 lines of 'file.txt'.`,
        examples: [{ input: '', output: '3\n4' }],
        starterCode: `printf "1\\n2\\n3\\n4" > file.txt
# Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '3\n4' }],
        hint: 'Use tail -n 2.'
    },
    {
        id: 'bash1-sort',
        title: 'Sort Lines',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to sort the lines of 'file.txt' in ascending order.`,
        examples: [{ input: '', output: '1\n2\n3' }],
        starterCode: `printf "3\\n1\\n2" > file.txt
# Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '1\n2\n3' }],
        hint: 'Use sort command.'
    },
    {
        id: 'bash1-sort-reverse',
        title: 'Sort Reverse',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to sort the lines of 'file.txt' in descending order.`,
        examples: [{ input: '', output: '3\n2\n1' }],
        starterCode: `printf "1\\n3\\n2" > file.txt
# Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '3\n2\n1' }],
        hint: 'Use sort -r.'
    },
    {
        id: 'bash1-uniq',
        title: 'Remove Duplicates',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a command to remove adjacent duplicate lines from 'file.txt'.`,
        examples: [{ input: '', output: 'A\nB' }],
        starterCode: `printf "A\\nA\\nB" > file.txt
# Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'A\nB' }],
        hint: 'Use uniq command.'
    },
    {
        id: 'bash1-grep',
        title: 'Find String',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to find lines containing "apple" in 'file.txt'.`,
        examples: [{ input: '', output: 'apple pie' }],
        starterCode: `printf "apple pie\\nbanana" > file.txt
# Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'apple pie' }],
        hint: 'Use grep "apple" file.txt.'
    },
    {
        id: 'bash1-grep-case',
        title: 'Case Insensitive Search',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to find lines containing "Apple" in 'file.txt', ignoring case.`,
        examples: [{ input: '', output: 'apple' }],
        starterCode: `printf "apple\\nbanana" > file.txt
# Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'apple' }],
        hint: 'Use grep -i.'
    },
    {
        id: 'bash1-cut-bytes',
        title: 'Cut Bytes',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to extract the first byte from the input string "ABC".`,
        examples: [{ input: '', output: 'A' }],
        starterCode: `echo "ABC" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'A' }],
        hint: 'Use cut -b 1.'
    },
    {
        id: 'bash1-cut-fields',
        title: 'Cut Fields',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to extract the second field from "A,B,C" delimited by comma.`,
        examples: [{ input: '', output: 'B' }],
        starterCode: `echo "A,B,C" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'B' }],
        hint: 'Use cut -d "," -f 2.'
    },
    {
        id: 'bash1-tr',
        title: 'Translate Characters',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to replace all 'a's with 'b's in "aba".`,
        examples: [{ input: '', output: 'bbb' }],
        starterCode: `echo "aba" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'bbb' }],
        hint: 'Use tr "a" "b".'
    },
    {
        id: 'bash1-tr-delete',
        title: 'Delete Characters',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to delete all digits from "a1b2".`,
        examples: [{ input: '', output: 'ab' }],
        starterCode: `echo "a1b2" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'ab' }],
        hint: 'Use tr -d "0-9".'
    },
    {
        id: 'bash1-rev',
        title: 'Reverse String',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to reverse the characters in "abc".`,
        examples: [{ input: '', output: 'cba' }],
        starterCode: `echo "abc" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'cba' }],
        hint: 'Use rev command.'
    },
    {
        id: 'bash1-tee',
        title: 'Tee Command',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a command to write "Hi" to 'f.txt' and also display it to stdout.`,
        examples: [{ input: '', output: 'Hi' }],
        starterCode: `echo "Hi" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Hi' }],
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
        starterCode: `echo "1" > f1.txt
echo "A" > f2.txt
# Write your command here
`,
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
        starterCode: `echo "1 A" > f1.txt
echo "1 X" > f2.txt
# Write your command here
`,
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
        description: `Use sed to replace the first occurrence of "a" with "b" in "aba".`,
        examples: [{ input: '', output: 'bba' }],
        starterCode: `echo "aba" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'bba' }],
        hint: 'Use sed "s/a/b/".'
    },
    {
        id: 'bash1-sed-global',
        title: 'Sed Global Replace',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Use sed to replace all occurrences of "a" with "b" in "aba".`,
        examples: [{ input: '', output: 'bbb' }],
        starterCode: `echo "aba" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'bbb' }],
        hint: 'Use sed "s/a/b/g".'
    },
    {
        id: 'bash1-awk-print',
        title: 'Awk Print Column',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Use awk to print the second column of "A B C".`,
        examples: [{ input: '', output: 'B' }],
        starterCode: `echo "A B C" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'B' }],
        hint: 'Use awk \'{print $2}\'.'
    },
    {
        id: 'bash1-awk-sum',
        title: 'Awk Sum',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Use awk to sum the numbers in the first column of input "1\\n2\\n3".`,
        examples: [{ input: '', output: '6' }],
        starterCode: `printf "1\\n2\\n3" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '6' }],
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
        starterCode: `touch a.txt b.log
# Write your command here
`,
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
        description: `Use xargs to pass "1 2" as arguments to echo.`,
        examples: [{ input: '', output: '1 2' }],
        starterCode: `printf "1\\n2" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '1 2' }],
        hint: 'xargs echo.'
    },
    {
        id: 'bash1-seq',
        title: 'Sequence',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Print a sequence of numbers from 1 to 3.`,
        examples: [{ input: '', output: '1\n2\n3' }],
        starterCode: `# Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '1\n2\n3' }],
        hint: 'Use seq 1 3.'
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
        starterCode: `mkdir d
# Write your command here
ls
`,
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
        starterCode: `echo "Hi" > a
# Write your command here
cat b
`,
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
        starterCode: `echo "Hi" > a
# Write your command here
cat b
`,
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
        starterCode: `touch a
# Write your command here
ls
`,
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
        starterCode: `touch a
# Write your command here
`,
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
        starterCode: `echo "A" > a
echo "B" > b
# Write your command here
`,
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
        starterCode: `echo "A" > a
echo "A" > b
# Write your command here
`,
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
        starterCode: `printf "1\\n2\\n3" > a
printf "1\\n2" > b
# Write your command here
`,
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
        description: `Print the filename from path '/path/to/file.txt'.`,
        examples: [{ input: '', output: 'file.txt' }],
        starterCode: `# Write your command here
basename /path/to/file.txt
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'file.txt' }],
        hint: 'Use basename.'
    },
    {
        id: 'bash1-dirname',
        title: 'Dirname',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Print the directory path from '/path/to/file.txt'.`,
        examples: [{ input: '', output: '/path/to' }],
        starterCode: `# Write your command here
dirname /path/to/file.txt
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '/path/to' }],
        hint: 'Use dirname.'
    },
    {
        id: 'bash1-head-bytes',
        title: 'Head Bytes',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Print the first 2 bytes of "HiThere".`,
        examples: [{ input: '', output: 'Hi' }],
        starterCode: `echo "HiThere" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Hi' }],
        hint: 'Use head -c 2.'
    },
    {
        id: 'bash1-tail-bytes',
        title: 'Tail Bytes',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Print the last 2 bytes of "HiThere".`,
        examples: [{ input: '', output: 're' }],
        starterCode: `printf "HiThere" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 're' }],
        hint: 'Use tail -c 2.'
    },
    {
        id: 'bash1-fold',
        title: 'Fold Lines',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Wrap "1234" to width 2.`,
        examples: [{ input: '', output: '12\n34' }],
        starterCode: `echo "1234" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '12\n34' }],
        hint: 'Use fold -w 2.'
    },
    {
        id: 'bash1-nl',
        title: 'Number Lines',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Number the lines of input "A".`,
        examples: [{ input: '', output: '     1\tA' }],
        starterCode: `echo "A" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '     1\tA' }],
        hint: 'Use nl.'
    },
    {
        id: 'bash1-od',
        title: 'Octal Dump',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Dump "AB" in octal. (Mocked output).`,
        examples: [{ input: '', output: '0000000 040501 000012\n0000003' }],
        starterCode: `echo "AB" | od
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '0000000 040501 000012\n0000003' }],
        hint: 'Use od.'
    },
    {
        id: 'bash1-strings',
        title: 'Strings Command',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Print printable characters from "Hi".`,
        examples: [{ input: '', output: 'Hi' }],
        starterCode: `echo "Hi" | # Write your command here
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'Hi' }],
        hint: 'Use strings.'
    },
    {
        id: 'bash1-shuf',
        title: 'Shuffle',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Shuffle "1". (Mocked).`,
        examples: [{ input: '', output: '1' }],
        starterCode: `echo "1" | shuf
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '1' }],
        hint: 'Use shuf.'
    },
    {
        id: 'bash1-factor',
        title: 'Factor Numbers',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Print prime factors of 10.`,
        examples: [{ input: '', output: '10: 2 5' }],
        starterCode: `# Write your command here
factor 10
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: '10: 2 5' }],
        hint: 'Use factor.'
    },
    {
        id: 'bash1-yes',
        title: 'Yes Command',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Print "y" twice using yes command.`,
        examples: [{ input: '', output: 'y\ny' }],
        starterCode: `# Write your command here
yes | head -n 2
`,
        functionName: 'bash',
        testCases: [{ input: '', expected: 'y\ny' }],
        hint: 'Use yes | head -n 2.'
    }
];
