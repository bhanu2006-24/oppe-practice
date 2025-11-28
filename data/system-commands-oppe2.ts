import { Problem } from '../types';

export const SYSTEM_COMMANDS_OPPE2_PROBLEMS: Problem[] = [
    {
        id: 'bash-oppe2-grep',
        title: 'Grep Search',
        subject: 'System_Commands',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Write a bash script that creates a file 'data.txt' with lines:
        apple
        banana
        apricot
        cherry
        
        Then use grep to find lines starting with 'a'.`,
        examples: [
            { input: '', output: 'apple\napricot' }
        ],
        starterCode: `# Write your script here
`,
        functionName: 'bash',
        testCases: [
            { input: '', expected: 'apple\napricot' }
        ],
        hint: 'grep "^a"'
    },
    // Adding 49 more placeholder questions
    ...Array.from({ length: 49 }, (_, i) => ({
        id: `bash-oppe2-q${i + 2}`,
        title: `Bash OPPE 2 Practice Q${i + 2}`,
        subject: 'System_Commands' as const,
        examLevel: 'OPPE 2' as const,
        difficulty: 'Medium' as const,
        description: `This is a practice question for Bash OPPE 2. Problem #${i + 2}.
        
        Write a script that prints "OPPE2-${i + 2}".`,
        examples: [
            { input: '', output: `OPPE2-${i + 2}` }
        ],
        starterCode: `echo "OPPE2-${i + 2}"`,
        functionName: 'bash',
        testCases: [
            { input: '', expected: `OPPE2-${i + 2}` }
        ]
    }))
];
