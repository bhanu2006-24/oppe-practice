import { Problem } from '../types';

export const JAVA_OPPE1_PROBLEMS: Problem[] = [
    {
        id: 'java1-hello',
        title: 'Hello World',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a program that prints "Hello, World!" to the console.`,
        examples: [{ input: '', output: 'Hello, World!' }, { input: 'ignore', output: 'Hello, World!' }],
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'Hello, World!' }, { input: 'test', expected: 'Hello, World!' }],
        hint: 'Use System.out.println("Hello, World!");'
    },
    {
        id: 'java1-sum',
        title: 'Sum of Two Numbers',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a program that reads two integers from standard input and prints their sum.`,
        examples: [{ input: '5 10', output: '15' }, { input: '-5 5', output: '0' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '5 10', expected: '15' }, { input: '-5 5', expected: '0' }, { input: '100 200', expected: '300' }],
        hint: 'Use sc.nextInt() to read integers.'
    },
    {
        id: 'java1-even-odd',
        title: 'Even or Odd',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a program that reads an integer and prints "Even" if it is even, and "Odd" if it is odd.`,
        examples: [{ input: '4', output: 'Even' }, { input: '7', output: 'Odd' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '4', expected: 'Even' }, { input: '7', expected: 'Odd' }, { input: '0', expected: 'Even' }],
        hint: 'Use the modulo operator %.'
    },
    {
        id: 'java1-max2',
        title: 'Maximum of Two',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a program to find the maximum of two integers input by the user.`,
        examples: [{ input: '10 20', output: '20' }, { input: '50 30', output: '50' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '10 20', expected: '20' }, { input: '50 30', expected: '50' }, { input: '5 5', expected: '5' }],
        hint: 'Use Math.max() or if-else.'
    },
    {
        id: 'java1-factorial',
        title: 'Factorial',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a program to calculate the factorial of a given non-negative integer.`,
        examples: [{ input: '5', output: '120' }, { input: '3', output: '6' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '5', expected: '120' }, { input: '0', expected: '1' }, { input: '1', expected: '1' }],
        hint: 'Use a loop or recursion.'
    },
    {
        id: 'java1-fibonacci',
        title: 'Fibonacci Series',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a program to print the first N terms of the Fibonacci series separated by space. Start with 0 and 1.`,
        examples: [{ input: '5', output: '0 1 1 2 3' }, { input: '1', output: '0' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '5', expected: '0 1 1 2 3' }, { input: '1', expected: '0' }, { input: '2', expected: '0 1' }],
        hint: 'Update two variables in a loop.'
    },
    {
        id: 'java1-prime',
        title: 'Prime Check',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a program to check if a given number is Prime. Print "Prime" or "Not Prime".`,
        examples: [{ input: '7', output: 'Prime' }, { input: '10', output: 'Not Prime' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '7', expected: 'Prime' }, { input: '10', expected: 'Not Prime' }, { input: '1', expected: 'Not Prime' }],
        hint: 'Check divisibility from 2 to sqrt(N).'
    },
    {
        id: 'java1-reverse-num',
        title: 'Reverse Number',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a program to reverse a given integer.`,
        examples: [{ input: '123', output: '321' }, { input: '100', output: '001' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '123', expected: '321' }, { input: '100', expected: '001' }, { input: '0', expected: '0' }],
        hint: 'Extract digits using % 10.'
    },
    {
        id: 'java1-palindrome-num',
        title: 'Palindrome Number',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Write a program to check if a number is a palindrome. Print "Yes" or "No".`,
        examples: [{ input: '121', output: 'Yes' }, { input: '123', output: 'No' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '121', expected: 'Yes' }, { input: '123', expected: 'No' }, { input: '10', expected: 'No' }],
        hint: 'Compare number with its reverse.'
    },
    {
        id: 'java1-sum-digits',
        title: 'Sum of Digits',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a program to find the sum of digits of a number.`,
        examples: [{ input: '123', output: '6' }, { input: '99', output: '18' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '123', expected: '6' }, { input: '99', expected: '18' }, { input: '0', expected: '0' }],
        hint: 'Loop with % 10 and / 10.'
    },
    {
        id: 'java1-leap-year',
        title: 'Leap Year',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a program to check if a year is a leap year. Print "Leap" or "Not Leap".`,
        examples: [{ input: '2000', output: 'Leap' }, { input: '2001', output: 'Not Leap' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '2000', expected: 'Leap' }, { input: '2001', expected: 'Not Leap' }, { input: '1900', expected: 'Not Leap' }],
        hint: 'Divisible by 4 but not 100, unless divisible by 400.'
    },
    {
        id: 'java1-table',
        title: 'Multiplication Table',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a program to print the multiplication table of N up to 10, separated by spaces.`,
        examples: [{ input: '2', output: '2 4 6 8 10 12 14 16 18 20' }, { input: '3', output: '3 6 9 12 15 18 21 24 27 30' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '2', expected: '2 4 6 8 10 12 14 16 18 20' }, { input: '3', expected: '3 6 9 12 15 18 21 24 27 30' }, { input: '5', expected: '5 10 15 20 25 30 35 40 45 50' }],
        hint: 'Loop from 1 to 10.'
    },
    {
        id: 'java1-array-sum',
        title: 'Sum of Array',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a program to read N, then N integers, and print their sum.`,
        examples: [{ input: '3 1 2 3', output: '6' }, { input: '2 10 20', output: '30' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '3 1 2 3', expected: '6' }, { input: '2 10 20', expected: '30' }, { input: '1 5', expected: '5' }],
        hint: 'Use an array or accumulate in loop.'
    },
    {
        id: 'java1-array-max',
        title: 'Max in Array',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Write a program to find the maximum element in an array of N integers.`,
        examples: [{ input: '3 1 5 2', output: '5' }, { input: '3 -1 -5 -2', output: '-1' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '3 1 5 2', expected: '5' }, { input: '3 -1 -5 -2', expected: '-1' }, { input: '1 100', expected: '100' }],
        hint: 'Initialize max with Integer.MIN_VALUE.'
    },
    {
        id: 'java1-linear-search',
        title: 'Linear Search',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read N, then N integers, then a target X. Print the index of X (0-based) or -1 if not found.`,
        examples: [{ input: '3 10 20 30 20', output: '1' }, { input: '3 1 2 3 4', output: '-1' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '3 10 20 30 20', expected: '1' }, { input: '3 1 2 3 4', expected: '-1' }, { input: '1 5 5', expected: '0' }],
        hint: 'Iterate and compare.'
    },
    {
        id: 'java1-array-reverse',
        title: 'Reverse Array',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Read N, then N integers. Print them in reverse order separated by space.`,
        examples: [{ input: '3 1 2 3', output: '3 2 1' }, { input: '2 10 20', output: '20 10' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '3 1 2 3', expected: '3 2 1' }, { input: '2 10 20', expected: '20 10' }, { input: '1 5', expected: '5' }],
        hint: 'Loop from N-1 down to 0.'
    },
    {
        id: 'java1-string-len',
        title: 'String Length',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read a string and print its length.`,
        examples: [{ input: 'Hello', output: '5' }, { input: 'Hi', output: '2' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'Hello', expected: '5' }, { input: 'Java', expected: '4' }, { input: 'A', expected: '1' }],
        hint: 'Use .length() method.'
    },
    {
        id: 'java1-char-at',
        title: 'Character at Index',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read a string and an integer N. Print the character at index N.`,
        examples: [{ input: 'Hello 1', output: 'e' }, { input: 'Java 0', output: 'J' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'Hello 1', expected: 'e' }, { input: 'Java 0', expected: 'J' }, { input: 'Test 3', expected: 't' }],
        hint: 'Use .charAt(N).'
    },
    {
        id: 'java1-count-vowels',
        title: 'Count Vowels',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Read a string and print the count of vowels (a, e, i, o, u) in it. Case insensitive.`,
        examples: [{ input: 'Hello', output: '2' }, { input: 'Sky', output: '0' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'Hello', expected: '2' }, { input: 'Sky', expected: '0' }, { input: 'AeIoU', expected: '5' }],
        hint: 'Iterate and check against "aeiouAEIOU".'
    },
    {
        id: 'java1-string-reverse',
        title: 'Reverse String',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Read a string and print it reversed.`,
        examples: [{ input: 'abc', output: 'cba' }, { input: 'Java', output: 'avaJ' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'abc', expected: 'cba' }, { input: 'Java', expected: 'avaJ' }, { input: 'A', expected: 'A' }],
        hint: 'Use StringBuilder reverse().'
    },
    {
        id: 'java1-palindrome-str',
        title: 'Palindrome String',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Check if a string is a palindrome. Print "Yes" or "No".`,
        examples: [{ input: 'madam', output: 'Yes' }, { input: 'hello', output: 'No' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'madam', expected: 'Yes' }, { input: 'hello', expected: 'No' }, { input: 'racecar', expected: 'Yes' }],
        hint: 'Compare string with its reverse.'
    },
    {
        id: 'java1-upper-lower',
        title: 'To Uppercase',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read a string and print it in uppercase.`,
        examples: [{ input: 'hello', output: 'HELLO' }, { input: 'Java', output: 'JAVA' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'hello', expected: 'HELLO' }, { input: 'Java', expected: 'JAVA' }, { input: 'abc', expected: 'ABC' }],
        hint: 'Use .toUpperCase().'
    },
    {
        id: 'java1-gcd',
        title: 'GCD of Two Numbers',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Read two integers and print their Greatest Common Divisor (GCD).`,
        examples: [{ input: '12 18', output: '6' }, { input: '7 13', output: '1' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '12 18', expected: '6' }, { input: '7 13', expected: '1' }, { input: '10 5', expected: '5' }],
        hint: 'Use Euclidean algorithm.'
    },
    {
        id: 'java1-lcm',
        title: 'LCM of Two Numbers',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Read two integers and print their Least Common Multiple (LCM).`,
        examples: [{ input: '4 6', output: '12' }, { input: '5 7', output: '35' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '4 6', expected: '12' }, { input: '5 7', expected: '35' }, { input: '2 3', expected: '6' }],
        hint: 'LCM = (a*b)/GCD(a,b).'
    },
    {
        id: 'java1-armstrong',
        title: 'Armstrong Number',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Check if a number is an Armstrong number (sum of cubes of digits equals the number). Print "Yes" or "No".`,
        examples: [{ input: '153', output: 'Yes' }, { input: '123', output: 'No' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '153', expected: 'Yes' }, { input: '123', expected: 'No' }, { input: '370', expected: 'Yes' }],
        hint: 'Sum of digits cubed.'
    },
    {
        id: 'java1-sort-array',
        title: 'Sort Array',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Read N, then N integers. Print them sorted in ascending order.`,
        examples: [{ input: '3 3 1 2', output: '1 2 3' }, { input: '2 5 4', output: '4 5' }],
        starterCode: `import java.util.Scanner;
import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '3 3 1 2', expected: '1 2 3' }, { input: '2 5 4', expected: '4 5' }, { input: '1 10', expected: '10' }],
        hint: 'Use Arrays.sort().'
    },
    {
        id: 'java1-second-largest',
        title: 'Second Largest',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Read N, then N integers. Print the second largest element.`,
        examples: [{ input: '3 10 20 30', output: '20' }, { input: '3 5 1 2', output: '2' }],
        starterCode: `import java.util.Scanner;
import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '3 10 20 30', expected: '20' }, { input: '3 5 1 2', expected: '2' }, { input: '4 10 20 30 40', expected: '30' }],
        hint: 'Sort and pick N-2 index.'
    },
    {
        id: 'java1-remove-duplicates',
        title: 'Remove Duplicates',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Read N, then N sorted integers. Print unique elements separated by space.`,
        examples: [{ input: '4 1 1 2 3', output: '1 2 3' }, { input: '3 1 1 1', output: '1' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '4 1 1 2 3', expected: '1 2 3' }, { input: '3 1 1 1', expected: '1' }, { input: '3 1 2 3', expected: '1 2 3' }],
        hint: 'Skip if current == previous.'
    },
    {
        id: 'java1-matrix-add',
        title: 'Matrix Addition',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Read N (rows) and M (cols). Then read two NxM matrices. Print their sum matrix.`,
        examples: [{ input: '2 2 1 2 3 4 1 1 1 1', output: '2 3 4 5' }, { input: '1 1 1 2', output: '3' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '2 2 1 2 3 4 1 1 1 1', expected: '2 3 4 5' }, { input: '1 1 1 2', expected: '3' }, { input: '1 2 1 2 3 4', expected: '4 6' }],
        hint: 'Nested loops.'
    },
    {
        id: 'java1-pattern',
        title: 'Print Number Pattern',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Read N. Print N lines. Line i has i 1s. Example N=3: 1 then 1 1 then 1 1 1.`,
        examples: [{ input: '2', output: '1 1 1' }, { input: '1', output: '1' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '2', expected: '1 1 1' }, { input: '1', expected: '1' }, { input: '3', expected: '1 1 1 1 1 1' }],
        hint: 'Nested loops.'
    },
    {
        id: 'java1-swap',
        title: 'Swap Variables',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read two integers A and B. Swap them and print them.`,
        examples: [{ input: '1 2', output: '2 1' }, { input: '10 20', output: '20 10' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '1 2', expected: '2 1' }, { input: '10 20', expected: '20 10' }, { input: '5 5', expected: '5 5' }],
        hint: 'Use temp variable.'
    },
    {
        id: 'java1-ascii',
        title: 'ASCII Value',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read a character and print its ASCII value.`,
        examples: [{ input: 'A', output: '65' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'A', expected: '65' }, { input: 'a', expected: '97' }, { input: '0', expected: '48' }],
        hint: 'Cast char to int.'
    },
    {
        id: 'java1-power',
        title: 'Power Calculation',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Read base and exponent (integers). Print base^exponent.`,
        examples: [{ input: '2 3', output: '8' }, { input: '5 2', output: '25' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '2 3', expected: '8' }, { input: '5 2', expected: '25' }, { input: '10 0', expected: '1' }],
        hint: 'Use Math.pow() or loop.'
    },
    {
        id: 'java1-count-digits',
        title: 'Count Digits',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read an integer and print the number of digits.`,
        examples: [{ input: '12345', output: '5' }, { input: '0', output: '1' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '12345', expected: '5' }, { input: '0', expected: '1' }, { input: '100', expected: '3' }],
        hint: 'Convert to string length.'
    },
    {
        id: 'java1-anagram',
        title: 'Anagram Check',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Read two strings. Check if they are anagrams. Print "Yes" or "No".`,
        examples: [{ input: 'listen silent', output: 'Yes' }, { input: 'hello world', output: 'No' }],
        starterCode: `import java.util.Scanner;
import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'listen silent', expected: 'Yes' }, { input: 'abc def', expected: 'No' }, { input: 'a a', expected: 'Yes' }],
        hint: 'Sort char arrays and compare.'
    },
    {
        id: 'java1-pangram',
        title: 'Pangram Check',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Read a string. Check if it contains all letters a-z. Print "Yes" or "No".`,
        examples: [{ input: 'thequickbrownfoxjumpsoverthelazydog', output: 'Yes' }, { input: 'hello world', output: 'No' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'thequickbrownfoxjumpsoverthelazydog', expected: 'Yes' }, { input: 'hello world', expected: 'No' }, { input: 'abcdefghijklmnopqrstuvwxyz', expected: 'Yes' }],
        hint: 'Use a boolean array or Set.'
    },
    {
        id: 'java1-avg',
        title: 'Average of Numbers',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read N, then N numbers. Print their average (integer part).`,
        examples: [{ input: '3 10 20 30', output: '20' }, { input: '2 5 5', output: '5' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '3 10 20 30', expected: '20' }, { input: '2 5 5', expected: '5' }, { input: '1 100', expected: '100' }],
        hint: 'Sum / N.'
    },
    {
        id: 'java1-c-to-f',
        title: 'Celsius to Fahrenheit',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read Celsius (double). Print Fahrenheit (F = C * 9/5 + 32). Print integer part.`,
        examples: [{ input: '0', output: '32' }, { input: '100', output: '212' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '0', expected: '32' }, { input: '100', expected: '212' }, { input: '-40', expected: '-40' }],
        hint: 'Formula.'
    },
    {
        id: 'java1-simple-interest',
        title: 'Simple Interest',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read P, R, T. Calculate SI = (P*R*T)/100. Print integer part.`,
        examples: [{ input: '1000 5 2', output: '100' }, { input: '500 10 1', output: '50' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '1000 5 2', expected: '100' }, { input: '500 10 1', expected: '50' }, { input: '100 10 1', expected: '10' }],
        hint: 'Formula.'
    },
    {
        id: 'java1-perfect-num',
        title: 'Perfect Number',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Check if N is a perfect number (sum of divisors = N). Print "Yes" or "No".`,
        examples: [{ input: '6', output: 'Yes' }, { input: '28', output: 'Yes' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '6', expected: 'Yes' }, { input: '28', expected: 'Yes' }, { input: '10', expected: 'No' }],
        hint: 'Sum factors up to N/2.'
    },
    {
        id: 'java1-harshad',
        title: 'Harshad Number',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Check if N is divisible by sum of its digits. Print "Yes" or "No".`,
        examples: [{ input: '18', output: 'Yes' }, { input: '19', output: 'No' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '18', expected: 'Yes' }, { input: '19', expected: 'No' }, { input: '20', expected: 'Yes' }],
        hint: 'Sum digits and check modulo.'
    },
    {
        id: 'java1-binary-decimal',
        title: 'Binary to Decimal',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Read a binary string. Print its decimal value.`,
        examples: [{ input: '101', output: '5' }, { input: '111', output: '7' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '101', expected: '5' }, { input: '111', expected: '7' }, { input: '0', expected: '0' }],
        hint: 'Integer.parseInt(s, 2).'
    },
    {
        id: 'java1-decimal-binary',
        title: 'Decimal to Binary',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Read a decimal integer. Print its binary string.`,
        examples: [{ input: '5', output: '101' }, { input: '7', output: '111' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '5', expected: '101' }, { input: '7', expected: '111' }, { input: '0', expected: '0' }],
        hint: 'Integer.toBinaryString().'
    },
    {
        id: 'java1-ncr',
        title: 'nCr Calculation',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Hard',
        description: `Read n and r. Calculate nCr = n! / (r! * (n-r)!).`,
        examples: [{ input: '5 2', output: '10' }, { input: '4 2', output: '6' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '5 2', expected: '10' }, { input: '4 2', expected: '6' }, { input: '5 5', expected: '1' }],
        hint: 'Use factorial function.'
    },
    {
        id: 'java1-distance',
        title: 'Distance Between Points',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Read x1 y1 x2 y2. Calculate distance. Print integer part.`,
        examples: [{ input: '0 0 3 4', output: '5' }, { input: '0 0 6 8', output: '10' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '0 0 3 4', expected: '5' }, { input: '0 0 6 8', expected: '10' }, { input: '1 1 4 5', expected: '5' }],
        hint: 'Sqrt((x2-x1)^2 + (y2-y1)^2).'
    },
    {
        id: 'java1-triangle-area',
        title: 'Area of Triangle',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Medium',
        description: `Read base and height. Print area (integer part).`,
        examples: [{ input: '10 5', output: '25' }, { input: '4 3', output: '6' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '10 5', expected: '25' }, { input: '4 3', expected: '6' }, { input: '2 2', expected: '2' }],
        hint: '0.5 * b * h.'
    },
    {
        id: 'java1-string-contains',
        title: 'String Contains',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read S and T. Print "Yes" if S contains T, else "No".`,
        examples: [{ input: 'Hello ell', output: 'Yes' }, { input: 'Hello world', output: 'No' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'Hello ell', expected: 'Yes' }, { input: 'Hello world', expected: 'No' }, { input: 'Java av', expected: 'Yes' }],
        hint: 'Use .contains().'
    },
    {
        id: 'java1-string-concat',
        title: 'String Concatenation',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read two strings. Print them concatenated.`,
        examples: [{ input: 'Hi There', output: 'HiThere' }, { input: 'A B', output: 'AB' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'Hi There', expected: 'HiThere' }, { input: 'A B', expected: 'AB' }, { input: '1 2', expected: '12' }],
        hint: 'Use + operator.'
    },
    {
        id: 'java1-min-array',
        title: 'Min in Array',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read N, then N integers. Print the minimum element.`,
        examples: [{ input: '3 1 2 3', output: '1' }, { input: '2 10 5', output: '5' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '3 1 2 3', expected: '1' }, { input: '2 10 5', expected: '5' }, { input: '1 100', expected: '100' }],
        hint: 'Track min.'
    },
    {
        id: 'java1-count-even',
        title: 'Count Even Numbers',
        subject: 'Java',
        examLevel: 'OPPE 1',
        difficulty: 'Easy',
        description: `Read N, then N integers. Print count of even numbers.`,
        examples: [{ input: '3 1 2 3', output: '1' }, { input: '3 2 4 6', output: '3' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '3 1 2 3', expected: '1' }, { input: '3 2 4 6', expected: '3' }, { input: '3 1 3 5', expected: '0' }],
        hint: 'Check % 2 == 0.'
    }
];
