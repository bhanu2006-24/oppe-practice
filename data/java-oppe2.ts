import { Problem } from '../types';

export const JAVA_OPPE2_PROBLEMS: Problem[] = [
    {
        id: 'java-oppe2-class',
        title: 'Simple Class',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Create a class 'Person' with a name and age. Add a method 'introduce' that prints "Hi, I am [name] and I am [age] years old.".
        
        The Main class should read name and age from input, create a Person, and call introduce.`,
        examples: [
            { input: 'Alice 25', output: 'Hi, I am Alice and I am 25 years old.' }
        ],
        starterCode: `import java.util.Scanner;

class Person {
    // Define fields and methods
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [
            { input: 'Alice 25', expected: 'Hi, I am Alice and I am 25 years old.' }
        ],
        hint: 'Define class Person outside Main'
    },
    // Adding 49 more placeholder questions
    ...Array.from({ length: 49 }, (_, i) => ({
        id: `java-oppe2-q${i + 2}`,
        title: `Java OPPE 2 Practice Q${i + 2}`,
        subject: 'Java' as const,
        examLevel: 'OPPE 2' as const,
        difficulty: 'Medium' as const,
        description: `This is a practice question for Java OPPE 2. Problem #${i + 2}.
        
        Write a program that demonstrates OOP concepts.`,
        examples: [
            { input: '0', output: '0' }
        ],
        starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("0");
    }
}`,
        functionName: 'main',
        testCases: [
            { input: '0', expected: '0' }
        ]
    }))
];
