# Quiz Files Structure

This directory contains individual quiz pages for the ColdFusion Training application.

## File Structure

```
quizzes/
├── _quiz-base.cfm           # Base template (do not edit directly)
├── quiz-0.cfm               # Welcome & Setup Quiz
├── quiz-1.cfm               # Language Fundamentals Quiz
├── quiz-2.cfm               # Web & Application Structure Quiz
├── quiz-3.cfm               # Data Connectivity & Manipulation Quiz
├── quiz-4.cfm               # File & Document Operations Quiz
├── quiz-5.cfm               # Cloud Storage Integration Quiz
├── quiz-6.cfm               # Security Fundamentals Quiz
├── quiz-7.cfm               # Object-Oriented Programming Quiz
├── quiz-8.cfm               # What's New: Version Comparison Quiz
├── quiz-9.cfm               # Advanced Topics Quiz
├── quiz-10.cfm              # Quality Assurance & Debugging Quiz
├── quiz-11.cfm              # Migration & Compatibility Quiz
└── quiz-12.cfm              # Projects & Labs Quiz
```

## How It Works

1. **Module ID Detection**: The JavaScript automatically extracts the module ID from the filename (e.g., `quiz-1.cfm` → module ID 1)

2. **Base Template**: All quiz files use `_quiz-base.cfm` as the base template. The base template contains all the HTML structure and includes.

3. **Quiz Data Loading**: Quiz content is loaded from `quiz.js` based on the detected module ID.

## Generating Files

To generate all quiz files from the base template, run:

**Using Node.js:**
```bash
node scripts/generate-modules.js
```

**Using ColdFusion:**
Open `scripts/generate-modules.cfm` in your browser or run via CommandBox:
```bash
box run scripts/generate-modules.cfm
```

## Customizing Individual Quizzes

If you need to customize a specific quiz:

1. Copy `_quiz-base.cfm` to `quiz-X.cfm` (where X is the module ID)
2. Make your customizations to that specific file
3. The base template will not be used for that quiz

## URL Structure

- Quiz 1: `/quizzes/quiz-1.cfm`
- Quiz 2: `/quizzes/quiz-2.cfm`
- etc.

This provides clean, bookmarkable URLs without query parameters.


