<div align="center">

# 🎯 OPPE Practice Platform

### *Master Your IITM BS Degree OPPE Exams with Confidence*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-oppe--practice.pages.dev-blue?style=for-the-badge)](https://oppe-practice.pages.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**The ultimate practice companion for IITM BS Degree students** — featuring an in-browser Python IDE, curated problems, instant feedback, and progress tracking.

[**🚀 Try it Live**](https://oppe-practice.pages.dev/) · [**📝 Report Bug**](https://github.com/yourusername/oppe-practice/issues) · [**✨ Request Feature**](https://github.com/yourusername/oppe-practice/issues)

</div>

---

## 🌐 Live Website

<div align="center">

### **✨ [oppe-practice.pages.dev](https://oppe-practice.pages.dev/) ✨**

The platform is **live and ready to use**! No installation required—just click the link above and start practicing immediately.

**🔥 Features on the Live Site:**
- ⚡ **Instant Access** — No signup, no downloads, just pure learning
- 🚀 **Lightning Fast** — Hosted on Cloudflare Pages for maximum speed
- 📱 **Mobile Friendly** — Practice on any device, anywhere
- 💾 **Auto-Save Progress** — Your solutions persist in your browser
- 🌍 **Global CDN** — Fast access from anywhere in the world

**Perfect for:**
- 📚 Last-minute OPPE exam prep
- 🧪 Testing your Python skills
- 💡 Learning new algorithms
- 🎯 Building problem-solving confidence

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎓 **Comprehensive Coverage**
- **Python Programming** — Fundamentals to Advanced
- **Data Structures & Algorithms** — Trees, Graphs, Dynamic Programming
- **Machine Learning** — Classification, Regression, Neural Networks
- **OPPE1 & OPPE2 Levels** — Tailored problem sets for each exam

</td>
<td width="50%">

### 🔧 **Powerful IDE**
- **In-Browser Python Execution** — Powered by Pyodide
- **Real-time Test Cases** — Instant feedback on your solutions
- **Code Editor** — Syntax highlighting & auto-completion
- **Progress Tracking** — See your solved problems at a glance

</td>
</tr>
<tr>
<td width="50%">

### 🎨 **Modern Interface**
- **Dark/Light Theme** — Easy on the eyes, day or night
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Confetti Celebrations** — Celebrate when you solve problems! 🎉
- **Timer** — Track how long you spend on each problem

</td>
<td width="50%">

### 🚀 **Developer Experience**
- **Fast Build Tool** — Powered by Vite for instant HMR
- **TypeScript** — Type-safe codebase
- **Component Architecture** — Clean, modular, maintainable
- **Local Storage** — Your progress persists across sessions

</td>
</tr>
</table>

---

## 📸 Platform Showcase

> **A picture is worth a thousand lines of code** 🎨

### 🏠 Home Dashboard
![Landing Page - Choose Your Subject](public/home.png)
*Clean, intuitive landing page — Choose your subject and exam level to begin your journey*

---

### 📊 Progress Tracking
![Dashboard with Stats](public/home2.png)
*Track your learning progress with real-time statistics and solved problem counts*

---

### 💻 Powerful IDE Interface
![Code Editor in Action](public/ide.png)
*Feature-rich code editor with syntax highlighting, live execution, and instant feedback*

---

### 🎯 Problem Solving View
![Problem Practice Interface](public/practice.png)
*Split-pane view: problem description on the left, your code on the right — just like LeetCode!*

---

### ℹ️ About & Information
![About Page](public/about.png)
*Learn about the platform, its features, and how to make the most of your practice sessions*

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/oppe-practice.git

# Navigate to the project directory
cd oppe-practice

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` 🎉

### Build for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | UI Framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | Type Safety |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | Build Tool & Dev Server |
| ![Pyodide](https://img.shields.io/badge/Pyodide-3776AB?style=flat&logo=python&logoColor=white) | In-Browser Python Runtime |
| ![Lucide](https://img.shields.io/badge/Lucide-000000?style=flat&logo=lucide&logoColor=white) | Icon Library |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Styling (via inline classes) |

---

## 📂 Project Structure

```
oppe-practice/
├── components/          # React components
│   ├── About.tsx       # About page
│   ├── CodeEditor.tsx  # Monaco-like code editor
│   ├── Console.tsx     # Test results & output
│   ├── Contribute.tsx  # Contribution guide
│   ├── Home.tsx        # Landing page
│   ├── Playground.tsx  # Free-form coding playground
│   ├── ProblemDetail.tsx # Problem description viewer
│   └── Sidebar.tsx     # Problem navigation
├── data/
│   └── problems.ts     # Problem bank (curated questions)
├── services/
│   └── pythonRuntime.ts # Pyodide initialization & execution
├── public/             # Static assets (screenshots, etc.)
├── App.tsx             # Main application component
├── index.tsx           # Entry point
├── types.ts            # TypeScript type definitions
└── vite.config.ts      # Vite configuration
```

---

## 🎯 How It Works

### 1️⃣ **Choose Your Path**
Select a subject (Python, DSA, ML) and exam level (OPPE1 or OPPE2) from the home page.

### 2️⃣ **Solve Problems**
Work through curated problems in the in-browser IDE with:
- Pre-written starter code
- Detailed problem descriptions
- Sample inputs/outputs
- Real-time test case validation

### 3️⃣ **Track Progress**
- ✅ Solved problems are marked with a checkmark
- ⏱️ Timer tracks how long you spend on each problem
- 💾 Progress is saved locally to your browser
- 🎉 Celebrate your wins with confetti animations!

### 4️⃣ **Download & Save**
Export your solutions as `.py` files to review later or submit.

---

## 🤝 Contributing

<div align="center">

### **We ❤️ Contributions!**

Whether you're fixing bugs, adding features, or contributing new problems, **your help makes this platform better for everyone**.

[![Contributors](https://img.shields.io/github/contributors/yourusername/oppe-practice?style=for-the-badge)](https://github.com/yourusername/oppe-practice/graphs/contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/yourusername/oppe-practice/pulls)
[![First Timers](https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=for-the-badge)](https://www.firsttimersonly.com/)

</div>

---

### 🎯 Ways to Contribute

<table>
<tr>
<td width="33%">

#### 📝 **Add Problems**
Contribute new coding problems across Python, DSA, and ML topics

</td>
<td width="33%">

#### 🐛 **Report Bugs**
Found an issue? Report it on our [Issues page](https://github.com/yourusername/oppe-practice/issues)

</td>
<td width="33%">

#### ✨ **Suggest Features**
Have an idea? We'd love to hear it!

</td>
</tr>
<tr>
<td width="33%">

#### 🎨 **Improve UI/UX**
Help make the interface even better

</td>
<td width="33%">

#### 📚 **Write Documentation**
Improve guides, tutorials, and examples

</td>
<td width="33%">

#### 🧪 **Add Test Cases**
Strengthen existing problems with more edge cases

</td>
</tr>
</table>

---

### 🚀 Quick Contribution Guide

#### **Step 1: Fork & Clone**
```bash
# Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR-USERNAME/oppe-practice.git
cd oppe-practice
```

#### **Step 2: Create a Branch**
```bash
# Create a descriptive branch name
git checkout -b feature/add-python-recursion-problems
# or
git checkout -b fix/editor-syntax-highlighting
```

#### **Step 3: Make Your Changes**
- Follow the existing code style
- Test your changes locally (`npm run dev`)
- Ensure the build passes (`npm run build`)

#### **Step 4: Commit & Push**
```bash
git add .
git commit -m "Add 5 new recursion problems for OPPE1"
git push origin feature/add-python-recursion-problems
```

#### **Step 5: Open a Pull Request**
- Go to the original repository on GitHub
- Click **"New Pull Request"**
- Select your branch and describe your changes
- Wait for review! 🎉

---

### 📝 Adding New Problems

Problems are stored in [`data/problems.ts`](data/problems.ts). Follow this structure:

```typescript
{
  id: 'unique-problem-id',           // Use kebab-case, e.g., 'factorial-recursion'
  title: 'Calculate Factorial',      // Clear, descriptive title
  subject: Subject.PYTHON,           // PYTHON, DSA, or ML
  examLevel: ExamLevel.OPPE1,        // OPPE1 or OPPE2
  difficulty: 'Easy',                // Easy, Medium, or Hard
  
  description: `
# Factorial Calculator

Write a function that calculates the factorial of a number using recursion.

## Constraints
- 0 ≤ n ≤ 20
- Return 1 for n = 0
  `,
  
  examples: [
    { input: '5', output: '120' },
    { input: '0', output: '1' },
    { input: '3', output: '6' }
  ],
  
  starterCode: `def factorial(n):
    # Write your code here
    pass`,
  
  functionName: 'factorial',
  
  testCases: [
    { input: [0], expected: 1 },
    { input: [1], expected: 1 },
    { input: [5], expected: 120 },
    { input: [10], expected: 3628800 },
  ]
}
```

#### **Problem Guidelines:**
- ✅ **Clear descriptions** with constraints and examples
- ✅ **At least 5-7 test cases** covering edge cases
- ✅ **Helpful starter code** to guide students
- ✅ **Realistic difficulty** matching OPPE exam standards
- ✅ **Proper categorization** (subject + exam level)

---

### 🎨 Code Style Guidelines

- Use **TypeScript** for type safety
- Follow **React best practices** (functional components, hooks)
- Use **meaningful variable names**
- Add **comments** for complex logic
- Keep **components small and focused**
- Write **clean, readable code**

---

### 🧪 Testing Your Contributions

Before submitting a PR, please:

1. ✅ Run the dev server and test your changes
   ```bash
   npm run dev
   ```

2. ✅ Ensure the production build works
   ```bash
   npm run build
   npm run preview
   ```

3. ✅ Test new problems thoroughly
   - Verify all test cases pass
   - Check edge cases
   - Ensure the problem description is clear

4. ✅ Check for console errors or warnings

---

### 💡 Need Help?

- 📖 Check our [existing issues](https://github.com/yourusername/oppe-practice/issues)
- 💬 Start a [discussion](https://github.com/yourusername/oppe-practice/discussions)
- 📧 Reach out to the maintainers

---

### 🏆 Contributors Hall of Fame

A huge **THANK YOU** to everyone who has contributed! 🙌

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- This section is auto-generated. Do not edit manually. -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

Want to see your name here? [Make your first contribution!](https://github.com/yourusername/oppe-practice/contribute)

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

**TL;DR:** You're free to use, modify, and distribute this project. Just give credit where it's due! ✨

---

## 🌟 Acknowledgments

- **IITM BS Degree Community** — For inspiring this project and providing valuable feedback
- **Pyodide Team** — For the incredible work making Python run seamlessly in browsers
- **React & Vite Teams** — For exceptional developer tools that make building fast
- **All Contributors** — Every PR, issue, and suggestion makes this better
- **You!** — For using this platform and being awesome 🎉

---

## 💬 Support & Community

<div align="center">

### **Love this project? Show your support!** ⭐

[![GitHub stars](https://img.shields.io/github/stars/yourusername/oppe-practice?style=social)](https://github.com/yourusername/oppe-practice)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/oppe-practice?style=social)](https://github.com/yourusername/oppe-practice/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/yourusername/oppe-practice?style=social)](https://github.com/yourusername/oppe-practice)

**Get Involved:**
- 🌟 [Star the repo](https://github.com/yourusername/oppe-practice) to show support
- 🐛 [Report bugs](https://github.com/yourusername/oppe-practice/issues/new?labels=bug) or suggest features
- 💬 [Join discussions](https://github.com/yourusername/oppe-practice/discussions) with other learners
- 🔄 [Share with friends](https://oppe-practice.pages.dev/) preparing for OPPE exams

</div>

---

<div align="center">

**Made with ❤️ by IITM students, for IITM students**

*Happy Coding! May your test cases always pass.* ✨

[![Powered by React](https://img.shields.io/badge/Powered%20by-React-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Built with TypeScript](https://img.shields.io/badge/Built%20with-TypeScript-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Hosted on Cloudflare](https://img.shields.io/badge/Hosted%20on-Cloudflare%20Pages-F38020?style=flat&logo=cloudflare)](https://pages.cloudflare.com/)

</div>
