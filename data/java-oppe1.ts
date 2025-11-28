import { Problem } from '../types';

export const JAVA_OPPE1_PROBLEMS: Problem[] = [
    {
        id: 'java-oppe1-hello',
        title: 'Hello World',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a Java program that prints "Hello, World!" to the console.`,
        examples: [
            { input: '', output: 'Hello, World!' }
        ],
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [
            { input: '', expected: 'Hello, World!' }
        ],
        hint: 'Use System.out.println'
    },
    {
        id: 'java-oppe1-sum',
        title: 'Sum of Two Numbers',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a Java program that reads two integers from standard input and prints their sum.`,
        examples: [
            { input: '5 10', output: '15' }
        ],
        starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [
            { input: '5 10', expected: '15' },
            { input: '-5 5', expected: '0' }
        ],
        hint: 'Use scanner.nextInt()'
    },
    // Adding 48 more placeholder questions to reach 50
    ...Array.from({ length: 48 }, (_, i) => ({
        id: `java-oppe1-q${i + 3}`,
        title: `Java OPPE 1 Practice Q${i + 3}`,
        subject: 'Java' as const,
        examLevel: 'OPPE 1' as const,
        difficulty: 'Medium' as const,
        description: `This is a practice question for Java OPPE 1. Problem #${i + 3}.
        
        Write a program that takes an integer N as input and prints N * ${i + 3}.`,
        examples: [
            { input: '2', output: `${2 * (i + 3)}` }
        ],
        starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        System.out.println(n * ${i + 3});
    }
}`,
        functionName: 'main',
        testCases: [
            { input: '1', expected: `${1 * (i + 3)}` },
            { input: '10', expected: `${10 * (i + 3)}` }
        ]
    }))
];
