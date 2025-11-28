import { Problem } from '../types';

export const JAVA_OPPE2_PROBLEMS: Problem[] = [
    {
        id: 'java2-class-person',
        title: 'Person Class',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Create a class 'Person' with a String attribute 'name'. Add a constructor to initialize it and a method 'sayHello' that prints "Hello [name]". In main, read a name, create a Person, and call sayHello.`,
        examples: [{ input: 'Alice', output: 'Hello Alice' }],
        starterCode: `import java.util.Scanner;
class Person {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'Alice', expected: 'Hello Alice' }],
        hint: 'Define class Person inside or outside Main (but standard practice is separate, here put inside or make static).'
    },
    {
        id: 'java2-rect-area',
        title: 'Rectangle Area',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Create a class 'Rectangle' with length and width. Method 'area' returns the area. Read l and w, print area.`,
        examples: [{ input: '5 10', output: '50' }],
        starterCode: `import java.util.Scanner;
class Rectangle {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '5 10', expected: '50' }],
        hint: 'Area = length * width.'
    },
    {
        id: 'java2-inheritance',
        title: 'Basic Inheritance',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create class A with method show() printing "A". Class B extends A. In main, create B and call show().`,
        examples: [{ input: '', output: 'A' }],
        starterCode: `class A {
    // Write your code here
}
class B extends A {
}
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'A' }],
        hint: 'Use extends keyword.'
    },
    {
        id: 'java2-overriding',
        title: 'Method Overriding',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Class A has method say() printing "A". Class B extends A and overrides say() to print "B". Call say() on an instance of B.`,
        examples: [{ input: '', output: 'B' }],
        starterCode: `class A {
    // Write your code here
}
class B extends A {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'B' }],
        hint: 'Same method signature in subclass.'
    },
    {
        id: 'java2-super',
        title: 'Super Keyword',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Class A construtor prints "A". Class B extends A, its constructor calls super() then prints "B". Create B.`,
        examples: [{ input: '', output: 'A\nB' }],
        starterCode: `class A {
    // Write your code here
}
class B extends A {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'A\nB' }],
        hint: 'super() must be first statement.'
    },
    {
        id: 'java2-interface',
        title: 'Interface Implementation',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Interface I has method m(). Class C implements I and prints "Impl". Create C and call m().`,
        examples: [{ input: '', output: 'Impl' }],
        starterCode: `interface I {
    void m();
}
class C implements I {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'Impl' }],
        hint: 'public void m().'
    },
    {
        id: 'java2-abstract',
        title: 'Abstract Class',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Abstract class Abs has abstract method run(). Class Impl extends Abs and prints "Run". Create Impl and call run().`,
        examples: [{ input: '', output: 'Run' }],
        starterCode: `abstract class Abs {
    abstract void run();
}
class Impl extends Abs {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'Run' }],
        hint: 'Implement abstract method.'
    },
    {
        id: 'java2-polymorphism',
        title: 'Polymorphism',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `A ref = new B(). A has method m() printing "A", B overrides printing "B". Call ref.m().`,
        examples: [{ input: '', output: 'B' }],
        starterCode: `class A {
    void m() { System.out.println("A"); }
}
class B extends A {
    void m() { System.out.println("B"); }
}
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'B' }],
        hint: 'Runtime polymorphism.'
    },
    {
        id: 'java2-static-method',
        title: 'Static Method',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Create class Util with static method add(a,b). Call it from main without creating instance.`,
        examples: [{ input: '2 3', output: '5' }],
        starterCode: `import java.util.Scanner;
class Util {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '2 3', expected: '5' }],
        hint: 'Util.add().'
    },
    {
        id: 'java2-encapsulation',
        title: 'Encapsulation',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Class Encap has private variable x. Provide setX and getX. Set x to input and print getX.`,
        examples: [{ input: '5', output: '5' }],
        starterCode: `import java.util.Scanner;
class Encap {
    private int x;
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '5', expected: '5' }],
        hint: 'Public getters and setters.'
    },
    {
        id: 'java2-tostring',
        title: 'ToString Override',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Override toString() in class P to return its name attribute. Print object directly.`,
        examples: [{ input: 'Alice', output: 'Alice' }],
        starterCode: `import java.util.Scanner;
class P {
    String name;
    P(String n) { name = n; }
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(new P(sc.next()));
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'Alice', expected: 'Alice' }],
        hint: 'public String toString().'
    },
    {
        id: 'java2-equals',
        title: 'Equals Override',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Override equals() in class Num to compare integer value 'v'. Check if two Nums with same value are equal.`,
        examples: [{ input: '10 10', output: 'true' }],
        starterCode: `import java.util.Scanner;
class Num {
    int v;
    Num(int x) { v = x; }
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(new Num(sc.nextInt()).equals(new Num(sc.nextInt())));
    }
}`,
        functionName: 'main',
        testCases: [{ input: '10 10', expected: 'true' }, { input: '10 20', expected: 'false' }],
        hint: 'Check instance and cast.'
    },
    {
        id: 'java2-try-catch',
        title: 'Exception Handling',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Handle ArithmeticException when dividing by zero. Print "Error" if exception occurs.`,
        examples: [{ input: '10 0', output: 'Error' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            // Write your code here
        } catch (Exception e) {
            // Write your code here
        }
    }
}`,
        functionName: 'main',
        testCases: [{ input: '10 0', expected: 'Error' }, { input: '10 2', expected: '5' }],
        hint: 'catch(ArithmeticException e).'
    },
    {
        id: 'java2-custom-exception',
        title: 'Custom Exception',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Throw custom exception MyEx if input is negative. Catch and print "Caught".`,
        examples: [{ input: '-1', output: 'Caught' }],
        starterCode: `import java.util.Scanner;
class MyEx extends Exception {}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '-1', expected: 'Caught' }, { input: '1', expected: '' }],
        hint: 'throw new MyEx().'
    },
    {
        id: 'java2-arraylist',
        title: 'ArrayList Basics',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Add two integers to an ArrayList and print its size.`,
        examples: [{ input: '1 2', output: '2' }],
        starterCode: `import java.util.Scanner;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '1 2', expected: '2' }],
        hint: 'list.add().'
    },
    {
        id: 'java2-hashmap',
        title: 'HashMap Basics',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Store a key-value pair (String, String) in HashMap and retrieve the value by key.`,
        examples: [{ input: 'Key Val', output: 'Val' }],
        starterCode: `import java.util.Scanner;
import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'Key Val', expected: 'Val' }],
        hint: 'map.put(), map.get().'
    },
    {
        id: 'java2-hashset',
        title: 'HashSet Basics',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Add two identical integers to a HashSet and print its size (should be 1).`,
        examples: [{ input: '1 1', output: '1' }],
        starterCode: `import java.util.Scanner;
import java.util.HashSet;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '1 1', expected: '1' }],
        hint: 'Set stores unique elements.'
    },
    {
        id: 'java2-iterator',
        title: 'Iterator Usage',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Use an Iterator to print elements of an ArrayList separated by space.`,
        examples: [{ input: '1 2', output: '1 2' }],
        starterCode: `import java.util.Scanner;
import java.util.ArrayList;
import java.util.Iterator;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '1 2', expected: '1 2' }],
        hint: 'while(it.hasNext())'
    },
    {
        id: 'java2-comparable',
        title: 'Comparable Interface',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Implement Comparable in class N to sort by value 'v'. Sort list of 2 N objects.`,
        examples: [{ input: '2 1', output: '1 2' }],
        starterCode: `import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;
class N implements Comparable<N> {
    int v;
    N(int x) { v = x; }
    // Write your code here
    public String toString() { return String.valueOf(v); }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '2 1', expected: '1 2' }],
        hint: 'compareTo method.'
    },
    {
        id: 'java2-comparator',
        title: 'Comparator Interface',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Sort an ArrayList of integers in descending order using a Comparator.`,
        examples: [{ input: '1 2', output: '2 1' }],
        starterCode: `import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '1 2', expected: '2 1' }],
        hint: 'Comparator.reverseOrder().'
    },
    {
        id: 'java2-generics',
        title: 'Generic Class',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create a generic class Box<T> that holds a value. Set value and get it.`,
        examples: [{ input: '10', output: '10' }],
        starterCode: `import java.util.Scanner;
class Box<T> {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '10', expected: '10' }],
        hint: 'T value;'
    },
    {
        id: 'java2-enum',
        title: 'Enum Basics',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Define Enum Color {RED, GREEN}. Print Color.RED.`,
        examples: [{ input: '', output: 'RED' }],
        starterCode: `enum Color {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'RED' }],
        hint: 'System.out.println(Color.RED);'
    },
    {
        id: 'java2-inner-class',
        title: 'Inner Class',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create inner class In inside Out. Instantiate In and call a method.`,
        examples: [{ input: '', output: 'Inner' }],
        starterCode: `class Out {
    class In {
        void msg() { System.out.println("Inner"); }
    }
}
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'Inner' }],
        hint: 'new Out().new In().'
    },
    {
        id: 'java2-anon-class',
        title: 'Anonymous Class',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create anonymous implementation of interface I with method m() printing "Anon".`,
        examples: [{ input: '', output: 'Anon' }],
        starterCode: `interface I {
    void m();
}
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'Anon' }],
        hint: 'new I() { ... }'
    },
    {
        id: 'java2-lambda',
        title: 'Lambda Expression',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Use lambda to implement Runnable that prints "Run".`,
        examples: [{ input: '', output: 'Run' }],
        starterCode: `public class Main {
    public static void main(String[] args) {
        Runnable r = // Write your code here
        r.run();
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'Run' }],
        hint: '() -> System.out.println("Run")'
    },
    {
        id: 'java2-stream-filter',
        title: 'Stream Filter',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Read 4 integers into list. Use Stream API to print even numbers separated by space.`,
        examples: [{ input: '1 2 3 4', output: '2 4' }],
        starterCode: `import java.util.Scanner;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '1 2 3 4', expected: '2 4' }],
        hint: 'list.stream().filter().forEach().'
    },
    {
        id: 'java2-stream-map',
        title: 'Stream Map',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Read 2 integers. Use Stream API to print their squares separated by space.`,
        examples: [{ input: '2 3', output: '4 9' }],
        starterCode: `import java.util.Scanner;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '2 3', expected: '4 9' }],
        hint: 'map(x -> x*x).'
    },
    {
        id: 'java2-thread',
        title: 'Thread Class',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create class T extending Thread. Run it to print "Thread".`,
        examples: [{ input: '', output: 'Thread' }],
        starterCode: `class T extends Thread {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'Thread' }],
        hint: 'start().'
    },
    {
        id: 'java2-runnable',
        title: 'Runnable Interface',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Implement Runnable in class R. Run it to print "Run".`,
        examples: [{ input: '', output: 'Run' }],
        starterCode: `class R implements Runnable {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'Run' }],
        hint: 'new Thread(new R()).start().'
    },
    {
        id: 'java2-synchronized',
        title: 'Synchronization',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Create a synchronized method 'm' that prints "Sync". Call it.`,
        examples: [{ input: '', output: 'Sync' }],
        starterCode: `class C {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'Sync' }],
        hint: 'synchronized keyword.'
    },
    {
        id: 'java2-varargs',
        title: 'Variable Arguments',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Create method sum(int... a) that returns sum. Call with 1, 2.`,
        examples: [{ input: '', output: '3' }],
        starterCode: `public class Main {
    static int sum(int... a) {
        // Write your code here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(sum(1, 2));
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: '3' }],
        hint: 'Iterate over a.'
    },
    {
        id: 'java2-recursion',
        title: 'Recursion Factorial',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Implement recursive factorial function.`,
        examples: [{ input: '5', output: '120' }],
        starterCode: `import java.util.Scanner;
public class Main {
    static int fact(int n) {
        // Write your code here
        return 1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(fact(sc.nextInt()));
    }
}`,
        functionName: 'main',
        testCases: [{ input: '5', expected: '120' }],
        hint: 'n * fact(n-1).'
    },
    {
        id: 'java2-instanceof',
        title: 'Instanceof Operator',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Check if string "s" is instance of String. Print "True" or "False".`,
        examples: [{ input: '', output: 'True' }],
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'True' }],
        hint: 'instanceof.'
    },
    {
        id: 'java2-casting',
        title: 'Type Casting',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read a double. Cast it to int and print.`,
        examples: [{ input: '10.5', output: '10' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '10.5', expected: '10' }],
        hint: '(int) variable.'
    },
    {
        id: 'java2-2d-array',
        title: '2D Array Access',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Create a 1x1 2D array with input value. Print it.`,
        examples: [{ input: '5', output: '5' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '5', expected: '5' }],
        hint: 'arr[0][0].'
    },
    {
        id: 'java2-break',
        title: 'Break Statement',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Loop 1 to 5. Break when i is 3. Print numbers separated by space.`,
        examples: [{ input: '', output: '1 2' }],
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: '1 2' }],
        hint: 'if(i==3) break;'
    },
    {
        id: 'java2-switch',
        title: 'Switch Case',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Read int. Case 1: print "One". Default: print "Other".`,
        examples: [{ input: '1', output: 'One' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '1', expected: 'One' }, { input: '2', expected: 'Other' }],
        hint: 'switch(n) { ... }'
    },
    {
        id: 'java2-do-while',
        title: 'Do While Loop',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Use do-while to print 1 once (condition false).`,
        examples: [{ input: '', output: '1' }],
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: '1' }],
        hint: 'do { ... } while(false);'
    },
    {
        id: 'java2-math-pow',
        title: 'Math.pow',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Calculate 2 to power 3 using Math.pow. Print result.`,
        examples: [{ input: '', output: '8.0' }],
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: '8.0' }],
        hint: 'Math.pow(2, 3).'
    },
    {
        id: 'java2-stringbuilder-append',
        title: 'StringBuilder Append',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Append "B" to "A" using StringBuilder. Print result.`,
        examples: [{ input: '', output: 'AB' }],
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'AB' }],
        hint: 'sb.append().'
    },
    {
        id: 'java2-wrapper-parse',
        title: 'Wrapper ParseInt',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Parse "123" to int and print.`,
        examples: [{ input: '', output: '123' }],
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: '123' }],
        hint: 'Integer.parseInt().'
    },
    {
        id: 'java2-final-var',
        title: 'Final Variable',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Declare final int x = 10. Print x.`,
        examples: [{ input: '', output: '10' }],
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: '10' }],
        hint: 'final keyword.'
    },
    {
        id: 'java2-static-block',
        title: 'Static Block',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Use static block to initialize static variable x to 5. Print x.`,
        examples: [{ input: '', output: '5' }],
        starterCode: `public class Main {
    static int x;
    static {
        // Write your code here
    }
    public static void main(String[] args) {
        System.out.println(x);
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: '5' }],
        hint: 'static { ... }'
    },
    {
        id: 'java2-constructor',
        title: 'Constructor',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Create class C with constructor printing "C". Instantiate it.`,
        examples: [{ input: '', output: 'C' }],
        starterCode: `class C {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'C' }],
        hint: 'C() { ... }'
    },
    {
        id: 'java2-this',
        title: 'This Keyword',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Use 'this' to distinguish field x from parameter x. Set field to 5 and print.`,
        examples: [{ input: '', output: '5' }],
        starterCode: `class C {
    int x;
    void set(int x) {
        // Write your code here
    }
}
public class Main {
    public static void main(String[] args) {
        C c = new C();
        c.set(5);
        System.out.println(c.x);
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: '5' }],
        hint: 'this.x = x.'
    },
    {
        id: 'java2-method-overload',
        title: 'Method Overloading',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Overload method m(). m(int) prints "Int", m(String) prints "Str". Call both.`,
        examples: [{ input: '', output: 'Int\nStr' }],
        starterCode: `class C {
    // Write your code here
}
public class Main {
    public static void main(String[] args) {
        C c = new C();
        c.m(1);
        c.m("s");
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'Int\nStr' }],
        hint: 'Different parameter types.'
    },
    {
        id: 'java2-array-objects',
        title: 'Array of Objects',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create array of 2 Strings. Set them to "A" and "B". Print them.`,
        examples: [{ input: '', output: 'A B' }],
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'A B' }],
        hint: 'String[] arr = new String[2];'
    },
    {
        id: 'java2-foreach',
        title: 'For-Each Loop',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Use for-each loop to print array elements 1, 2.`,
        examples: [{ input: '', output: '1 2' }],
        starterCode: `public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2};
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: '1 2' }],
        hint: 'for(int x : arr)'
    },
    {
        id: 'java2-ternary',
        title: 'Ternary Operator',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Use ternary operator to print "Yes" if 1==1 else "No".`,
        examples: [{ input: '', output: 'Yes' }],
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'Yes' }],
        hint: 'cond ? true : false.'
    },
    {
        id: 'java2-null-check',
        title: 'Null Check',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Check if String s = null is null. Print "Null".`,
        examples: [{ input: '', output: 'Null' }],
        starterCode: `public class Main {
    public static void main(String[] args) {
        String s = null;
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '', expected: 'Null' }],
        hint: 'if(s == null)'
    }
];
