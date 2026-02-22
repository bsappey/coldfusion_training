# Code Samples Index

This directory contains executable code samples for all examples in the ColdFusion Training Platform.

## Overview

Every code example shown in the training materials has a corresponding physical `.cfm` file that you can:
- Open directly in your IDE
- Modify and experiment with
- Run in your ColdFusion server
- Use as reference in your own projects

## Directory Structure

```
code-samples/
  module-0/
    lesson-0/
      checking-coldfusion-environment.cfm
      displaying-server-information.cfm
    lesson-1/
      ...
  module-1/
    lesson-0/
      basic-variable-assignment-tag.cfm
      basic-variable-assignment-script.cfm
      variable-naming-conventions.cfm
      ...
  ...
  module-13/
    ...
```

## File Naming Convention

- **Kebab-case**: All filenames use lowercase with hyphens
- **Descriptive names**: `basic-variable-assignment.cfm` not `example1.cfm`
- **Dual syntax**: When both tag and script versions exist:
  - `sample-name-tag.cfm` (tag syntax)
  - `sample-name-script.cfm` (script syntax)

## File Format

Each `.cfm` file includes:

1. **File Header Comment Block**:
   - Module and lesson information
   - Learning objectives
   - Related concepts
   - Usage instructions
   - Best practices

2. **Well-Commented Code**:
   - Step-by-step explanations
   - Key concepts highlighted
   - Best practices noted
   - Common gotchas warned

3. **Runnable Output**:
   - HTML wrapper for easy viewing
   - Code displayed with syntax highlighting
   - Output shown below code
   - Standalone execution

## Usage

### Opening in IDE

1. Copy the file path from the "Path" button in the training
2. Open in VS Code, IntelliJ, or your preferred IDE
3. Edit and save
4. Run in your ColdFusion server

### Running Code Samples

**CommandBox:**
```bash
box server start
# Then access: http://127.0.0.1:8080/code-samples/module-X/lesson-Y/sample.cfm
```

**ColdFusion Server:**
```
http://127.0.0.1:8500/code-samples/module-X/lesson-Y/sample.cfm
```

### Modifying Samples

1. Open the file in your IDE
2. Make changes
3. Save the file
4. Refresh browser to see updated output
5. Experiment and learn!

## Module Index

- [Module 0: Welcome & Setup](module-0/README.md)
- [Module 1: Language Fundamentals](module-1/README.md)
- [Module 2: Web & Application Structure](module-2/README.md)
- [Module 3: Data Connectivity & Manipulation](module-3/README.md)
- [Module 4: File & Document Operations](module-4/README.md)
- [Module 5: Cloud Storage Integration](module-5/README.md)
- [Module 6: Security Fundamentals](module-6/README.md)
- [Module 7: Object-Oriented Programming](module-7/README.md)
- [Module 8: Version Comparison](module-8/README.md)
- [Module 9: Advanced Topics](module-9/README.md)
- [Module 10: Quality Assurance & Debugging](module-10/README.md)
- [Module 11: Migration & Compatibility](module-11/README.md)
- [Module 12: Projects & Labs](module-12/README.md)
- [Module 13: AI & Intelligent Features](module-13/README.md)

## Best Practices

1. **Always test in your target ColdFusion version**
2. **Modify and experiment** - that's how you learn!
3. **Use as templates** for your own projects
4. **Follow the comments** - they explain important concepts
5. **Check version badges** - ensure compatibility

## Contributing

If you find issues or want to improve code samples:
1. Check the file structure matches the lesson
2. Ensure code is valid and runnable
3. Verify comments are accurate
4. Test in multiple ColdFusion versions

---

**Last Updated**: 2025
