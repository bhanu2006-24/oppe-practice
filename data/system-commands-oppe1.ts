import { Problem } from '../types';

export const SYSTEM_COMMANDS_OPPE1_PROBLEMS: Problem[] = [
    {
        id: 'bash-oppe1-echo',
        title: 'Echo Hello',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a bash script that prints "Hello, Bash!" to the console.`,
        examples: [
            { input: '', output: 'Hello, Bash!' }
        ],
        starterCode: `# Write your script here
`,
        functionName: 'bash', // Special marker for bash execution
        testCases: [
            { input: '', expected: 'Hello, Bash!' }
        ],
        hint: 'Use echo'
    },
    {
        id: 'bash-oppe1-cat',
        title: 'Cat File',
        subject: 'System_Commands',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a bash script that creates a file named 'test.txt' with content 'Hello', and then prints its content using cat.`,
        examples: [
            { input: '', output: 'Hello' }
        ],
        starterCode: `# Write your script here
`,
        functionName: 'bash',
        testCases: [
            { input: '', expected: 'Hello' }
        ],
        hint: 'echo "Hello" > test.txt && cat test.txt'
    },
    // Adding 48 more placeholder questions
    ...Array.from({ length: 48 }, (_, i) => ({
        id: `bash-oppe1-q${i + 3}`,
        title: `Bash OPPE 1 Practice Q${i + 3}`,
        subject: 'System_Commands' as const,
        examLevel: 'OPPE 1' as const,
        difficulty: 'Medium' as const,
        description: `This is a practice question for Bash OPPE 1. Problem #${i + 3}.
        
        Write a script that prints the number ${i + 3}.`,
        examples: [
            { input: '', output: `${i + 3}` }
        ],
        starterCode: `# Write your script here
echo ${i + 3}`,
        functionName: 'bash',
        testCases: [
            { input: '', expected: `${i + 3}` }
        ]
    }))
];
