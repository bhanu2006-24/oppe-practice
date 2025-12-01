import { Problem } from '../types';

export const JAVA_OPPE2_PROBLEMS: Problem[] = [
    // --- END TERM DEC 2024 PYQ ---
    {
        "id": "java-endterm-dec2024-q247",
        "title": "GUI Event Handling",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Medium",
        "description": "Complete the 'actionPerformed' method in a Swing/AWT application. You have two buttons, 'Play' and 'Pause'. You need to identify which button triggered the event using the 'ActionEvent e'. If 'Play' is clicked, set the boolean variable 'play' to true. If 'Pause' is clicked, set it to false.",
        "examples": [
            {
                "input": "Click 'Play'",
                "output": "play = true"
            },
            {
                "input": "Click 'Pause'",
                "output": "play = false"
            }
        ],
        "starterCode": "public void actionPerformed(ActionEvent e) {\n    // Write logic to check if e.getSource() is btnPlay or btnPause\n    // Alternatively, check e.getActionCommand()\n}",
        "functionName": "actionPerformed",
        "testCases": [
            {
                "input": "Click 'Play'",
                "expected": "play = true"
            },
            {
                "input": "Click 'Pause'",
                "expected": "play = false"
            },
            {
                "input": "Click 'Stop'",
                "expected": "play = false"
            }
        ],
        "hint": "Use 'e.getSource() == btnPlay' or 'e.getActionCommand().equals(\"Play\")'."
    },
    {
        "id": "java-endterm-dec2024-q230",
        "title": "Shallow Cloning Trap",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Hard",
        "description": "Analyze the cloning behavior of the 'LocoPilot' class. The class contains a primitive array 'int[] trips'. The default 'super.clone()' performs a shallow copy. If the cloned object modifies an index in the 'trips' array, determine if the original object's array is also affected. Predict the output of the code.",
        "examples": [
            {
                "input": "Run Code",
                "output": "40"
            },
            {
                "input": "Run Code (Modified)",
                "output": "50"
            }
        ],
        "starterCode": "class LocoPilot implements Cloneable {\n    String name;\n    int[] trips;\n    public LocoPilot(String name, int[] trips) { this.name = name; this.trips = trips; }\n    public Object clone() throws CloneNotSupportedException { return super.clone(); }\n}\n\npublic class Main {\n    public static void main(String[] args) throws CloneNotSupportedException {\n        LocoPilot lp1 = new LocoPilot(\"Arjun\", new int[]{20, 25, 30});\n        LocoPilot lp2 = (LocoPilot) lp1.clone();\n        lp2.trips[1] = 40;\n        System.out.println(lp1.trips[1]);\n    }\n}",
        "functionName": "main",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "40"
            },
            {
                "input": "Run Code (Modified)",
                "expected": "50"
            }
        ],
        "hint": "Arrays are mutable objects. 'super.clone()' does not create a new copy of the array found inside the object; it copies the reference."
    },
    {
        "id": "java-endterm-dec2024-q231",
        "title": "Serialization with Transient",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Medium",
        "description": "Predict the state of a 'StockPurchase' object after it is serialized and then deserialized. The class implements 'Serializable' but marks certain fields as 'transient'. \n1. 'stPrice' is a normal double.\n2. 'stSymbol' is a 'transient' String.\n3. 'stPin' is a 'transient' int, but the class has a custom 'writeObject' method that manually writes 'stPin'.",
        "examples": [
            {
                "input": "Run Code",
                "output": "Price=500.75, Symbol=null, Pin=123"
            }
        ],
        "starterCode": "class StockPurchase implements Serializable {\n    double stPrice;\n    transient String stSymbol;\n    private transient int stPin;\n    \n    // Custom writeObject method handles stPin manually\n    private void writeObject(ObjectOutputStream out) throws IOException {\n        out.defaultWriteObject();\n        out.writeInt(stPin * 1000); // Obfuscation logic\n    }\n}",
        "functionName": "writeObject",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "Price=500.75, Symbol=null, Pin=123"
            },
            {
                "input": "Run Code (Variant)",
                "expected": "Price=100.0, Symbol=null, Pin=999"
            }
        ],
        "hint": "Transient fields are skipped by default serialization. However, 'writeObject' can manually save them. Strings that are transient and not manually saved will become null."
    },
    {
        "id": "java-endterm-dec2024-q227",
        "title": "Inheritance & Method Visibility",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Easy",
        "description": "Identify the compilation error in a hierarchy of Beverage classes. \n1. 'Beverage' class has methods 'ingredient()' and 'price()'.\n2. 'Coffee' extends 'Beverage'.\n3. 'Latte' extends 'Coffee' and adds a new method 'maker()'.\n\nCode: 'Coffee drink = new Latte(); drink.maker();'",
        "examples": [
            {
                "input": "Compile Code",
                "output": "Compilation Error"
            }
        ],
        "starterCode": "class Coffee extends Beverage { ... }\nclass Latte extends Coffee {\n    void maker() { System.out.println(\"Making Latte\"); }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Coffee drink = new Latte();\n        drink.maker(); // Fix this line\n    }\n}",
        "functionName": "main",
        "testCases": [
            {
                "input": "Compile Code",
                "expected": "Compilation Error"
            },
            {
                "input": "Fix: ((Latte)drink).maker()",
                "expected": "Making Latte"
            }
        ],
        "hint": "You cannot call a method that exists only in the child class (Latte) if the reference variable is of the parent type (Coffee), unless you cast it."
    },
    {
        "id": "java-endterm-dec2024-q236",
        "title": "Access Modifiers Logic",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Medium",
        "description": "Determine which lines cause a compilation error based on access modifiers. \n- 'speed()' is public.\n- 'fuel()' is protected.\n- 'capacity()' is private.\nCode attempts to access all three from a 'Test' class in a different package (inheriting from Vehicle).",
        "examples": [
            {
                "input": "Compile Code",
                "output": "Error: capacity() has private access"
            }
        ],
        "starterCode": "class Vehicle {\n    public void speed() {}\n    protected void fuel() {}\n    private void capacity() {}\n}\n\nclass Car extends Vehicle {\n    void testAccess() {\n        // Which calls are valid?\n    }\n}",
        "functionName": "testAccess",
        "testCases": [
            {
                "input": "Compile Code",
                "expected": "Error: capacity() has private access"
            },
            {
                "input": "Remove capacity() call",
                "expected": "Success"
            }
        ],
        "hint": "Private members are never accessible outside their own class file."
    },
    {
        "id": "java-endterm-dec2024-q228",
        "title": "Chained Exceptions Logic",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Medium",
        "description": "Analyze a Chained Exception scenario. A 'FileProcessingException' is thrown, but it was caused by an 'InvalidFileFormatException'. The catch block prints the message of the top-level exception and the cause of the exception. Determine the order of messages printed.",
        "examples": [
            {
                "input": "Run Code",
                "output": "File format not supported\nError processing"
            }
        ],
        "starterCode": "try {\n    processFile();\n} catch (FileProcessingException e) {\n    System.out.println(e.getMessage());\n    System.out.println(e.getCause().getMessage());\n}\n\n// processFile() catches InvalidFileFormatException \n// and throws new FileProcessingException(msg, cause);",
        "functionName": "main",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "File format not supported\nError processing"
            },
            {
                "input": "Run Code (Different Msg)",
                "expected": "New Error\nOriginal Cause"
            }
        ],
        "hint": "The 'getCause()' method retrieves the original exception that triggered the current one. Execution flow goes deep into the stack and bubbles up."
    },
    {
        "id": "java-endterm-dec2024-q241",
        "title": "Infinite Stream Processing",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Hard",
        "description": "Predict the output of a Stream pipeline that starts with an infinite iterator. \nPipeline: \n1. Start with 1. Iterate by multiplying by 2 (1, 2, 4, 8...).\n2. Map: Add 1 to each number (2, 3, 5, 9...).\n3. Filter: Keep numbers divisible by 3.\n4. Limit: First 3 numbers.",
        "examples": [
            {
                "input": "Run Code",
                "output": "3\n9\n33"
            }
        ],
        "starterCode": "Stream.iterate(1, n -> n * 2)\n      .map(n -> n + 1)\n      .filter(n -> n % 3 == 0)\n      .limit(3)\n      .forEach(System.out::println);",
        "functionName": "streamPipeline",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "3\n9\n33"
            },
            {
                "input": "Limit 1",
                "expected": "3"
            }
        ],
        "hint": "Trace the math carefully: (1*2)+1 = 3 (Pass). (2*2)+1 = 5 (Fail). (4*2)+1 = 9 (Pass)."
    },
    {
        "id": "java-endterm-dec2024-q237",
        "title": "Thread Join & Synchronization",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Medium",
        "description": "Determine the output of a multi-threaded program using 'Thread.join()'. \n1. Main thread inserts 'Apple', 'Banana', 'Carrot' into a map.\n2. A new thread 't' starts, sleeps/waits, and inserts 'Egg'.\n3. Main thread calls 't.join()'.\n4. Main thread iterates and prints the map.",
        "examples": [
            {
                "input": "Run Code",
                "output": "Apple, Banana, Carrot, Egg"
            }
        ],
        "starterCode": "Thread t = new Thread(new Example());\nt.start();\nt.join(); // Key line\n// Print Map content",
        "functionName": "main",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "Apple, Banana, Carrot, Egg"
            },
            {
                "input": "Without join",
                "expected": "Apple, Banana, Carrot"
            }
        ],
        "hint": "The 'join()' method forces the calling thread (Main) to wait until the referenced thread (t) terminates."
    },
    {
        "id": "java-endterm-dec2024-q234",
        "title": "Generic Wildcards",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Medium",
        "description": "Implement a method 'printLargestMammal' that accepts a list of Animal objects. The method needs to iterate through the list and find the largest mammal. Use Upper Bounded Wildcards correctly to ensure the list can contain Animals or any subclass of Animal.",
        "examples": [
            {
                "input": "Run Code",
                "output": "Largest Mammal Found"
            }
        ],
        "starterCode": "import java.util.*;\nclass Animal { int size; }\nclass Mammal extends Animal { Mammal(int s) { size = s; } }\n\npublic class Main {\n    // Implement printLargestMammal here using wildcard\n    public static void printLargestMammal(List<? extends Animal> list) {\n        // Logic to find max size\n    }\n\n    public static void main(String[] args) {\n        List<Mammal> mammals = new ArrayList<>();\n        mammals.add(new Mammal(10));\n        printLargestMammal(mammals);\n    }\n}",
        "functionName": "main",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "Largest Mammal Found"
            }
        ],
        "hint": "Use 'List<? extends Animal>' (Upper Bounded Wildcard) to accept a list of Animal OR any of its subclasses like Mammal or Bird."
    },
    {
        "id": "java-endterm-dec2024-q229",
        "title": "Assertion Logic",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Easy",
        "description": "Analyze an assertion statement. The program asserts `p * t * r < 100` and `p > 0`. You are given inputs where `t` is negative. Determine which assertion causes the program to terminate with an `AssertionError`.",
        "examples": [
            {
                "input": "Run Code",
                "output": "Time Error"
            }
        ],
        "starterCode": "public class Main {\n    public static void calculate(double p, double t, double r) {\n        assert p * t * r < 100 : \"Calculation Error\";\n        assert p > 0 : \"Principal Error\";\n        assert t > 0 : \"Time Error\"; // This fails if t is negative\n    }\n    public static void main(String[] args) {\n        try {\n            calculate(10, -5, 5);\n        } catch (AssertionError e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",
        "functionName": "main",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "Time Error"
            }
        ],
        "hint": "Assertions are enabled via '-ea'. If the condition is false, the program stops immediately."
    },
    {
        "id": "java-endterm-dec2024-q233",
        "title": "ReentrantLock & Concurrency",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Hard",
        "description": "Two threads (Ram and Ravi) attempt to buy items from a shared stock using a `ReentrantLock`. Analyze the race condition. If Ram buys first and depletes the stock, Ravi's condition `stock > quantity` might fail. Determine the output based on locking order.",
        "examples": [
            {
                "input": "Run Code",
                "output": "Ram bought 3\nRavi failed"
            }
        ],
        "starterCode": "import java.util.concurrent.locks.*;\npublic class Main {\n    static int stock = 5;\n    static ReentrantLock lock = new ReentrantLock();\n    public static void buy(String name, int qty) {\n        lock.lock();\n        try {\n            if (stock >= qty) { \n                stock -= qty;\n                System.out.println(name + \" bought \" + qty);\n            } else { \n                System.out.println(name + \" failed\");\n            }\n        } finally { lock.unlock(); }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Thread t1 = new Thread(() -> buy(\"Ram\", 3));\n        Thread t2 = new Thread(() -> buy(\"Ravi\", 4));\n        t1.start(); t1.join();\n        t2.start(); t2.join();\n    }\n}",
        "functionName": "main",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "Ram bought 3\nRavi failed"
            }
        ],
        "hint": "With a Lock, only one thread enters the critical section. If Stock=5, Ram takes 3 (Stock=2). Ravi needs 4. Ravi fails."
    },
    {
        "id": "java-endterm-dec2024-q238",
        "title": "Method Overloading & Erasure",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Medium",
        "description": "Identify the compilation error when overloading methods with Generic Lists. You have `display(List<Integer>)` and `display(List<String>)`. Due to Type Erasure, both look like `display(List)` to the JVM.",
        "examples": [
            {
                "input": "Compile Code",
                "output": "Compilation Error"
            }
        ],
        "starterCode": "import java.util.*;\nclass Test {\n    public void display(List<Integer> list) { }\n    public void display(List<String> list) { } // Compilation Error\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Compilation Error\");\n    }\n}",
        "functionName": "main",
        "testCases": [
            {
                "input": "Compile Code",
                "expected": "Compilation Error"
            }
        ],
        "hint": "In Java, generic type parameters are erased at runtime. You cannot overload methods where the only difference is the generic type parameter."
    },
    {
        "id": "java-endterm-dec2024-q239",
        "title": "Copy Constructor & Mutation",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Medium",
        "description": "A 'Director' class has a copy constructor. Object D2 is created as a copy of D1. D2 changes its name. Check if D1's name also changes (Deep vs Shallow copy logic in manual constructors).",
        "examples": [
            {
                "input": "Run Code",
                "output": "D1: Alice\nD2: Bob"
            }
        ],
        "starterCode": "class Director {\n    String name;\n    int projectCount;\n    public Director(String name, int count) { this.name = name; this.projectCount = count; }\n    public Director(Director other) {\n        this.name = other.name; // String is immutable, so this is safe\n        this.projectCount = other.projectCount;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Director d1 = new Director(\"Alice\", 5);\n        Director d2 = new Director(d1);\n        d2.name = \"Bob\";\n        System.out.println(\"D1: \" + d1.name);\n        System.out.println(\"D2: \" + d2.name);\n    }\n}",
        "functionName": "main",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "D1: Alice\nD2: Bob"
            }
        ],
        "hint": "Strings are immutable. Changing D2.name assigns a new String reference to D2, leaving D1 unaffected."
    },
    {
        "id": "java-endterm-dec2024-q243",
        "title": "Optional Class Handling",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Medium",
        "description": "Use `Optional.ofNullable` to handle potential null values in a list of Vehicle objects without throwing a `NullPointerException`. Iterate through a list where some vehicles are null.",
        "examples": [
            {
                "input": "Run Code",
                "output": "Petrol\n\nDiesel"
            }
        ],
        "starterCode": "import java.util.*;\nclass Vehicle { String fuelType; Vehicle(String f) { fuelType = f; } }\npublic class Main {\n    public static void main(String[] args) {\n        List<Vehicle> vList = Arrays.asList(new Vehicle(\"Petrol\"), null, new Vehicle(\"Diesel\"));\n        for (Vehicle v : vList) {\n            Optional<String> op = Optional.ofNullable(v).map(val -> val.fuelType);\n            System.out.println(op.orElse(\"\"));\n        }\n    }\n}",
        "functionName": "main",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "Petrol\n\nDiesel"
            }
        ],
        "hint": "If `v` is null, `ofNullable` returns an empty Optional. `map` is skipped. `orElse` prints the default."
    },
    {
        "id": "java-endterm-dec2024-q244",
        "title": "Stream Collectors Statistics",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Medium",
        "description": "Use `Collectors.summarizingInt` on a Stream of integers (2, 4, 6... 20). The code prints `getAverage()`, `getSum()`, and `getMax()`. Calculate the correct statistics.",
        "examples": [
            {
                "input": "Run Code",
                "output": "11.0"
            }
        ],
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> list = Arrays.asList(2, 4, 6, 8, 10, 12, 14, 16, 18, 20);\n        IntSummaryStatistics stats = list.stream()\n            .collect(Collectors.summarizingInt(x -> x));\n        System.out.println(stats.getAverage());\n    }\n}",
        "functionName": "main",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "11.0"
            }
        ],
        "hint": "SummarizingInt returns an object containing count, sum, min, average, and max all at once."
    },
    {
        "id": "java-endterm-dec2024-q245",
        "title": "LinkedList & ArrayList Interaction",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Easy",
        "description": "An ArrayList `AL` contains [1, 2]. A LinkedList `LL` is assigned the reference of `AL` (polymorphism via List interface). `AL` removes index 1. What does `LL` print?",
        "examples": [
            {
                "input": "Run Code",
                "output": "[1]"
            }
        ],
        "starterCode": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> AL = new ArrayList<>();\n        AL.add(\"1\"); AL.add(\"2\");\n        List<String> LL = AL; // Reference copy\n        AL.remove(1);\n        System.out.println(LL);\n    }\n}",
        "functionName": "main",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "[1]"
            }
        ],
        "hint": "Since LL and AL point to the same object in heap memory, changes in AL reflect in LL."
    },
    {
        "id": "java-endterm-dec2024-q246",
        "title": "Final Keyword Errors",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Easy",
        "description": "Identify compilation errors involves the `final` keyword. 1) A method is marked final but a subclass tries to override it. 2) A class tries to extend multiple classes (Java doesn't support multiple inheritance of state).",
        "examples": [
            {
                "input": "Compile Code",
                "output": "Compilation Error"
            }
        ],
        "starterCode": "class Engine {\n    final void start() { }\n}\nclass Car extends Engine {\n    void start() { } // Error: Cannot override final method\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Compilation Error\");\n    }\n}",
        "functionName": "main",
        "testCases": [
            {
                "input": "Compile Code",
                "expected": "Compilation Error"
            }
        ],
        "hint": "Final methods cannot be overridden. Classes cannot extend more than one parent class."
    },
    {
        "id": "java-endterm-dec2024-q248",
        "title": "Comparable & Type Erasure",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Medium",
        "description": "Analyze generic method signatures after Type Erasure. A method `<T extends Comparable<T>> void sort(T[] a)` converts to `void sort(Comparable[] a)` after compilation, not `void sort(Object[] a)`.",
        "examples": [
            {
                "input": "Run Code",
                "output": "sort(java.lang.Comparable[])"
            }
        ],
        "starterCode": "import java.lang.reflect.*;\nimport java.util.*;\nclass Sorter {\n    public <T extends Comparable<T>> void sort(T[] list) {}\n}\npublic class Main {\n    public static void main(String[] args) {\n        for (Method m : Sorter.class.getDeclaredMethods()) {\n            if (m.getName().equals(\"sort\")) {\n                System.out.println(m.toString().split(\"Sorter.\")[1]);\n            }\n        }\n    }\n}",
        "functionName": "main",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "sort(java.lang.Comparable[])"
            }
        ],
        "hint": "Bounded generics erase to their bound (Comparable), not to Object."
    },

    // --- JAN 2025 PYQ ---
    {
        "id": "java-oppe2-jan2025-q1",
        "title": "Filter Research Articles",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Medium",
        "description": "Write a Java program to filter a list of ResearchArticle objects. You need to define the 'articleProcessor' method that takes an ArrayList of ResearchArticle and returns a Stream of ResearchArticle. The filtering criteria are: 1) The article should be published recently, specifically the gap between 2023 and the publication year should be less than 3 years (2023 - year < 3). 2) The article must have more than 100 citations.",
        "examples": [
            {
                "input": "AI 2021 202\nML 2018 90\nDL 2022 200",
                "output": "(AI, 2021, 202)\n(DL, 2022, 200)"
            },
            {
                "input": "A 2023 150\nB 2010 500",
                "output": "(A, 2023, 150)"
            }
        ],
        "starterCode": "import java.util.*;\nimport java.util.stream.*;\n\nclass ResearchArticle {\n    String name;\n    int year;\n    int citations;\n    \n    public ResearchArticle(String name, int year, int citations) {\n        this.name = name;\n        this.year = year;\n        this.citations = citations;\n    }\n    \n    public String toString() {\n        return \"(\" + name + \", \" + year + \", \" + citations + \")\";\n    }\n}\n\npublic class Main {\n    public static Stream<ResearchArticle> articleProcessor(ArrayList<ResearchArticle> articles) {\n        // Write your code here\n        return Stream.empty();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        ArrayList<ResearchArticle> articles = new ArrayList<>();\n        while (sc.hasNext()) {\n            String line = sc.nextLine();\n            if (line.trim().isEmpty()) continue;\n            String[] parts = line.split(\" \");\n            if (parts.length >= 3) {\n                String name = parts[0];\n                int year = Integer.parseInt(parts[1]);\n                int citations = Integer.parseInt(parts[2]);\n                articles.add(new ResearchArticle(name, year, citations));\n            }\n        }\n        \n        Stream<ResearchArticle> result = articleProcessor(articles);\n        result.forEach(System.out::println);\n    }\n}",
        "functionName": "articleProcessor",
        "testCases": [
            {
                "input": "AI 2021 202\nML 2018 90\nDL 2022 200",
                "expected": "(AI, 2021, 202)\n(DL, 2022, 200)"
            },
            {
                "input": "A 2023 150\nB 2010 500\nC 2022 50",
                "expected": "(A, 2023, 150)"
            },
            {
                "input": "X 2020 200\nY 2021 90",
                "expected": ""
            }
        ],
        "hint": "Use the .stream() method on the list and apply .filter() with the two conditions."
    },
    {
        "id": "java-oppe2-jan2025-q2",
        "title": "Deep Clone Movie",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Hard",
        "description": "Implement the 'clone' method in the 'Director' and 'Movie' classes to achieve a deep copy. The Movie class contains a Director object. When a Movie is cloned, the Director object inside it must also be cloned so that changes to the cloned Movie's Director do not affect the original Movie's Director.",
        "examples": [
            {
                "input": "Run Code",
                "output": "Original: Movie('Inception', Director('Christopher Nolan', 20))\nClone: Movie('Inception', Director('Jonathan Nolan', 15))"
            }
        ],
        "starterCode": "import java.util.*;\n\nclass Director implements Cloneable {\n    String name;\n    int age;\n    \n    public Director(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    public Object clone() throws CloneNotSupportedException {\n        // Implement deep clone\n        return super.clone();\n    }\n    \n    public String toString() { return name + \" (\" + age + \")\"; }\n}\n\nclass Movie implements Cloneable {\n    String title;\n    Director director;\n    \n    public Movie(String title, Director director) {\n        this.title = title;\n        this.director = director;\n    }\n    \n    public Object clone() throws CloneNotSupportedException {\n        // Implement deep clone\n        return super.clone();\n    }\n    \n    public String toString() { return \"Movie('\" + title + \"', Director('\" + director.name + \"', \" + director.age + \"))\"; }\n}\n\npublic class Main {\n    public static void main(String[] args) throws CloneNotSupportedException {\n        Director d = new Director(\"Christopher Nolan\", 20);\n        Movie m1 = new Movie(\"Inception\", d);\n        Movie m2 = (Movie) m1.clone();\n        \n        // Modify clone\n        m2.director.name = \"Jonathan Nolan\";\n        m2.director.age = 15;\n        \n        System.out.println(\"Original: \" + m1);\n        System.out.println(\"Clone: \" + m2);\n    }\n}",
        "functionName": "clone",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "Original: Movie('Inception', Director('Christopher Nolan', 20))\nClone: Movie('Inception', Director('Jonathan Nolan', 15))"
            }
        ],
        "hint": "In the Movie.clone() method, after calling super.clone(), manually clone the director object and assign it to the new Movie instance."
    },
    {
        "id": "java-oppe2-jan2025-q3",
        "title": "Odd Number Exception",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Easy",
        "description": "Write a Java program that takes an integer array as input. Iterating through the array, if any element is an odd number, throw a user-defined exception named 'OddNumberException' with the message 'Odd number found'. If all numbers are even, print 'No odd number found'. You must implement the OddNumberException class.",
        "examples": [
            {
                "input": "2 4 5 6 7",
                "output": "Exception: Odd number found"
            },
            {
                "input": "2 4 6 8",
                "output": "No odd number found"
            }
        ],
        "starterCode": "import java.util.*;\n\nclass OddNumberException extends Exception {\n    public OddNumberException(String message) {\n        super(message);\n    }\n}\n\nclass ArrayChecker {\n    public void checkForOddNumbers(int[] numArr) throws OddNumberException {\n        // Write logic to check for odd numbers\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Read space separated integers\n        if (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            String[] parts = line.split(\" \");\n            int[] nums = new int[parts.length];\n            for (int i = 0; i < parts.length; i++) {\n                nums[i] = Integer.parseInt(parts[i]);\n            }\n            \n            ArrayChecker checker = new ArrayChecker();\n            try {\n                checker.checkForOddNumbers(nums);\n                System.out.println(\"No odd number found\");\n            } catch (OddNumberException e) {\n                System.out.println(\"Exception: \" + e.getMessage());\n            }\n        }\n    }\n}",
        "functionName": "checkForOddNumbers",
        "testCases": [
            {
                "input": "2 4 5 6 7",
                "expected": "Exception: Odd number found"
            },
            {
                "input": "2 4 6 8",
                "expected": "No odd number found"
            },
            {
                "input": "1 2 3",
                "expected": "Exception: Odd number found"
            }
        ],
        "hint": "Extend the Exception class. In the checker loop, use 'num % 2 != 0' to detect odd numbers and throw the new exception."
    },
    {
        "id": "java-oppe2-jan2025-q4",
        "title": "Highest Tax Generic Method",
        "subject": "Java",
        "examLevel": "OPPE 2",
        "difficulty": "Medium",
        "description": "Create a program to find the object with the highest tax from a list of products. 1) Define an interface 'Taxable' with a method 'calculateTax()'. 2) Create classes 'Electronics' and 'Book' that implement 'Taxable'. Tax is 10% of the price (0.1 * price). 3) Implement a generic method 'findMax' that accepts a list of objects extending Taxable and returns the highest tax value found.",
        "examples": [
            {
                "input": "Run Code",
                "output": "3000.0"
            }
        ],
        "starterCode": "import java.util.*;\n\ninterface Taxable {\n    double calculateTax();\n}\n\nclass Electronics implements Taxable {\n    double price;\n    public Electronics(double price) { this.price = price; }\n    public double calculateTax() { return 0.1 * price; }\n}\n\nclass Book implements Taxable {\n    double price;\n    public Book(double price) { this.price = price; }\n    public double calculateTax() { return 0.1 * price; }\n}\n\npublic class Main {\n    public static <T extends Taxable> double findMax(List<T> list) {\n        // Implement generic logic to find max tax\n        return 0.0;\n    }\n\n    public static void main(String[] args) {\n        List<Electronics> eList = new ArrayList<>();\n        eList.add(new Electronics(5000));\n        eList.add(new Electronics(30000));\n        \n        List<Book> bList = new ArrayList<>();\n        bList.add(new Book(1000));\n        \n        // We need to test findMax with these.\n        // But findMax takes a List<T>.\n        // Let's combine or test separately.\n        // For simplicity of this test case, we just print max of eList\n        System.out.println(findMax(eList));\n    }\n}",
        "functionName": "findMax",
        "testCases": [
            {
                "input": "Run Code",
                "expected": "3000.0"
            }
        ],
        "hint": "Use a bounded type parameter <T extends Taxable> for the list. Iterate through the list, call calculateTax() on each item, and track the maximum."
    },

    {
        id: 'java2-class-person',
        title: 'Person Class',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Create a class 'Person' with a String attribute 'name'. Add a constructor to initialize it and a method 'sayHello' that prints "Hello [name]". In main, read a name, create a Person, and call sayHello.`,
        examples: [{ input: 'Alice', output: 'Hello Alice' }, { input: 'Bob', output: 'Hello Bob' }],
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
        testCases: [{ input: 'Alice', expected: 'Hello Alice' }, { input: 'Bob', expected: 'Hello Bob' }, { input: 'Java', expected: 'Hello Java' }],
        hint: 'Define class Person inside or outside Main (but standard practice is separate, here put inside or make static).'
    },
    {
        id: 'java2-rect-area',
        title: 'Rectangle Area',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Create a class 'Rectangle' with length and width. Method 'area' returns the area. Read l and w, print area.`,
        examples: [{ input: '5 10', output: '50' }, { input: '2 3', output: '6' }],
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
        testCases: [{ input: '5 10', expected: '50' }, { input: '2 3', expected: '6' }, { input: '0 5', expected: '0' }],
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
        examples: [{ input: '2 3', output: '5' }, { input: '10 20', output: '30' }],
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
        testCases: [{ input: '2 3', expected: '5' }, { input: '10 20', expected: '30' }, { input: '0 0', expected: '0' }],
        hint: 'Util.add().'
    },
    {
        id: 'java2-encapsulation',
        title: 'Encapsulation',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Class Encap has private variable x. Provide setX and getX. Set x to input and print getX.`,
        examples: [{ input: '5', output: '5' }, { input: '10', output: '10' }],
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
        testCases: [{ input: '5', expected: '5' }, { input: '10', expected: '10' }, { input: '-1', expected: '-1' }],
        hint: 'Public getters and setters.'
    },
    {
        id: 'java2-tostring',
        title: 'ToString Override',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Override toString() in class P to return its name attribute. Print object directly.`,
        examples: [{ input: 'Alice', output: 'Alice' }, { input: 'Bob', output: 'Bob' }],
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
        testCases: [{ input: 'Alice', expected: 'Alice' }, { input: 'Bob', expected: 'Bob' }, { input: 'Java', expected: 'Java' }],
        hint: 'public String toString().'
    },
    {
        id: 'java2-equals',
        title: 'Equals Override',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Override equals() in class Num to compare integer value 'v'. Check if two Nums with same value are equal.`,
        examples: [{ input: '10 10', output: 'true' }, { input: '10 20', output: 'false' }],
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
        testCases: [{ input: '10 10', expected: 'true' }, { input: '10 20', expected: 'false' }, { input: '5 5', expected: 'true' }],
        hint: 'Check instance and cast.'
    },
    {
        id: 'java2-try-catch',
        title: 'Exception Handling',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Handle ArithmeticException when dividing by zero. Print "Error" if exception occurs.`,
        examples: [{ input: '10 0', output: 'Error' }, { input: '10 2', output: '5' }],
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
        testCases: [{ input: '10 0', expected: 'Error' }, { input: '10 2', expected: '5' }, { input: '20 4', expected: '5' }],
        hint: 'catch(ArithmeticException e).'
    },
    {
        id: 'java2-custom-exception',
        title: 'Custom Exception',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Throw custom exception MyEx if input is negative. Catch and print "Caught".`,
        examples: [{ input: '-1', output: 'Caught' }, { input: '1', output: '' }],
        starterCode: `import java.util.Scanner;
class MyEx extends Exception {}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '-1', expected: 'Caught' }, { input: '1', expected: '' }, { input: '-10', expected: 'Caught' }],
        hint: 'throw new MyEx().'
    },
    {
        id: 'java2-arraylist',
        title: 'ArrayList Basics',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Add two integers to an ArrayList and print its size.`,
        examples: [{ input: '1 2', output: '2' }, { input: '10 20 30', output: '3' }],
        starterCode: `import java.util.Scanner;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '1 2', expected: '2' }, { input: '10 20 30', expected: '3' }, { input: '5', expected: '1' }],
        hint: 'list.add().'
    },
    {
        id: 'java2-hashmap',
        title: 'HashMap Basics',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Store a key-value pair (String, String) in HashMap and retrieve the value by key.`,
        examples: [{ input: 'Key Val', output: 'Val' }, { input: 'A B', output: 'B' }],
        starterCode: `import java.util.Scanner;
import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: 'Key Val', expected: 'Val' }, { input: 'A B', expected: 'B' }, { input: '1 2', expected: '2' }],
        hint: 'map.put(), map.get().'
    },
    {
        id: 'java2-hashset',
        title: 'HashSet Basics',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Add two identical integers to a HashSet and print its size (should be 1).`,
        examples: [{ input: '1 1', output: '1' }, { input: '2 2', output: '1' }],
        starterCode: `import java.util.Scanner;
import java.util.HashSet;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '1 1', expected: '1' }, { input: '2 2', expected: '1' }, { input: '1 2', expected: '2' }],
        hint: 'Set stores unique elements.'
    },
    {
        id: 'java2-iterator',
        title: 'Iterator Usage',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Use an Iterator to print elements of an ArrayList separated by space.`,
        examples: [{ input: '1 2', output: '1 2' }, { input: '3 4', output: '3 4' }],
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
        testCases: [{ input: '1 2', expected: '1 2' }, { input: '3 4', expected: '3 4' }, { input: '5 6', expected: '5 6' }],
        hint: 'while(it.hasNext())'
    },
    {
        id: 'java2-comparable',
        title: 'Comparable Interface',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Implement Comparable in class N to sort by value 'v'. Sort list of 2 N objects.`,
        examples: [{ input: '2 1', output: '1 2' }, { input: '10 5', output: '5 10' }],
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
        testCases: [{ input: '2 1', expected: '1 2' }, { input: '10 5', expected: '5 10' }, { input: '3 3', expected: '3 3' }],
        hint: 'compareTo method.'
    },
    {
        id: 'java2-comparator',
        title: 'Comparator Interface',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Sort an ArrayList of integers in descending order using a Comparator.`,
        examples: [{ input: '1 2', output: '2 1' }, { input: '5 10', output: '10 5' }],
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
        testCases: [{ input: '1 2', expected: '2 1' }, { input: '5 10', expected: '10 5' }, { input: '3 3', expected: '3 3' }],
        hint: 'Comparator.reverseOrder().'
    },
    {
        id: 'java2-generics',
        title: 'Generic Class',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Medium',
        description: `Create a generic class Box<T> that holds a value. Set value and get it.`,
        examples: [{ input: '10', output: '10' }, { input: 'Hello', output: 'Hello' }],
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
        testCases: [{ input: '10', expected: '10' }, { input: 'Hello', expected: 'Hello' }, { input: 'World', expected: 'World' }],
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
        examples: [{ input: '1 2 3 4', output: '2 4' }, { input: '5 6 7 8', output: '6 8' }],
        starterCode: `import java.util.Scanner;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '1 2 3 4', expected: '2 4' }, { input: '5 6 7 8', expected: '6 8' }, { input: '1 3 5 7', expected: '' }],
        hint: 'list.stream().filter().forEach().'
    },
    {
        id: 'java2-stream-map',
        title: 'Stream Map',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Hard',
        description: `Read 2 integers. Use Stream API to print their squares separated by space.`,
        examples: [{ input: '2 3', output: '4 9' }, { input: '4 5', output: '16 25' }],
        starterCode: `import java.util.Scanner;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '2 3', expected: '4 9' }, { input: '4 5', expected: '16 25' }, { input: '1 1', expected: '1 1' }],
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
        examples: [{ input: '5', output: '120' }, { input: '3', output: '6' }],
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
        testCases: [{ input: '5', expected: '120' }, { input: '3', expected: '6' }, { input: '0', expected: '1' }],
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
        examples: [{ input: '10.5', output: '10' }, { input: '5.9', output: '5' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '10.5', expected: '10' }, { input: '5.9', expected: '5' }, { input: '0.0', expected: '0' }],
        hint: '(int) variable.'
    },
    {
        id: 'java2-2d-array',
        title: '2D Array Access',
        subject: 'Java',
        examLevel: 'OPPE 2',
        difficulty: 'Easy',
        description: `Create a 1x1 2D array with input value. Print it.`,
        examples: [{ input: '5', output: '5' }, { input: '10', output: '10' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '5', expected: '5' }, { input: '10', expected: '10' }, { input: '0', expected: '0' }],
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
        examples: [{ input: '1', output: 'One' }, { input: '2', output: 'Other' }],
        starterCode: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Write your code here
    }
}`,
        functionName: 'main',
        testCases: [{ input: '1', expected: 'One' }, { input: '2', expected: 'Other' }, { input: '3', expected: 'Other' }],
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
