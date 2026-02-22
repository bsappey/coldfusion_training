# AI Agent Guide - ColdFusion Training Platform

This document explains how AI agents can consume and utilize the ColdFusion Training Platform data structure for code generation, learning, and reference.

## Overview

The training platform is structured to be AI-agent friendly, with:
- Structured JavaScript data files
- Function reference library
- Code patterns library
- Well-documented code examples
- Metadata for all code samples

## Data Structure

### Module Data (`assets/js/modules-data.js`)

The main training content is stored in `modules-data.js`:

```javascript
// Get all modules
const modules = getModulesData();
// Returns array of module metadata

// Get specific module content
const module = getModuleData(moduleId);
// Returns detailed lesson content with sections, code examples, etc.
```

**Module Structure:**
```javascript
{
    id: 0,
    title: 'Module Title',
    subtitle: 'Subtitle',
    description: 'Description',
    icon: 'icon-name',
    versions: ['2021', '2023', '2025'],
    estimatedTime: {
        junior: '3 hours',
        mid: '2 hours',
        senior: '1 hour'
    }
}
```

**Lesson Structure:**
```javascript
{
    title: 'Lesson Title',
    content: 'Main content',
    sections: [
        {
            title: 'Section Title',
            content: 'Section content',
            code: {
                tag: '<cfset x = 1>',
                script: 'x = 1;'
            },
            codeTitle: 'Example Code',
            versionBadge: '2021',
            list: ['Item 1', 'Item 2'],
            // Nested sections supported
            sections: [...]
        }
    ]
}
```

### Function Reference (`assets/js/functions-reference.js`)

Structured ColdFusion function documentation:

```javascript
// Get all functions
const functions = getFunctionsReference();

// Get specific function
const func = getFunctionByName('Len');

// Get functions by version
const cf2025Functions = getFunctionsByVersion('2025');
```

**Function Structure:**
```javascript
{
    description: 'Function description',
    syntax: {
        tag: '<cfset result = Len(string)>',
        script: 'result = Len(string);'
    },
    parameters: [
        {
            name: 'string',
            type: 'string',
            required: true,
            description: 'Parameter description'
        }
    ],
    returnType: 'numeric',
    versions: ['2021', '2023', '2025'],
    examples: [...],
    relatedFunctions: ['Left', 'Right', 'Mid'],
    complexity: 'basic',
    security: 'none'
}
```

### Patterns Library (`assets/js/patterns-library.js`)

Common code patterns for reuse:

```javascript
// Get all patterns
const patterns = getPatternsLibrary();

// Get specific pattern
const pattern = getPattern('validation', 'formValidation');

// Get patterns by complexity
const basicPatterns = getPatternsByComplexity('basic');
```

**Pattern Structure:**
```javascript
{
    name: 'Pattern Name',
    description: 'Pattern description',
    complexity: 'intermediate',
    security: 'high',
    versions: ['2021', '2023', '2025'],
    tag: '<!--- Tag syntax code --->',
    script: '// Script syntax code',
    bestPractices: [...],
    commonMistakes: [...],
    securityNotes: [...]
}
```

## Usage Examples

### Example 1: Generate Code Using Function Reference

```javascript
// AI Agent can use function reference to generate code
const lenFunc = getFunctionByName('Len');
const example = lenFunc.examples[0];

// Generate code:
const code = `<!--- ${lenFunc.description} --->
${example.code.tag}`;
```

### Example 2: Use Code Patterns

```javascript
// Get validation pattern
const validationPattern = getPattern('validation', 'formValidation');

// Use pattern as template
const customCode = validationPattern.tag.replace(
    'Form.email',
    'Form.userEmail'
);
```

### Example 3: Extract Code Examples from Modules

```javascript
// Get module data
const module = getModuleData(1);

// Extract all code examples
const codeExamples = [];
module.lessons.forEach(lesson => {
    extractCodeFromSections(lesson.sections, codeExamples);
});

function extractCodeFromSections(sections, output) {
    sections.forEach(section => {
        if (section.code) {
            output.push({
                title: section.codeTitle || section.title,
                tag: section.code.tag || section.code,
                script: section.code.script,
                version: section.versionBadge
            });
        }
        if (section.sections) {
            extractCodeFromSections(section.sections, output);
        }
    });
}
```

## Code Sample Files

All code examples have corresponding physical `.cfm` files in `code-samples/`:

- **Path Structure**: `code-samples/module-{id}/lesson-{index}/{sample-name}.cfm`
- **Dual Syntax**: Tag and script versions where applicable
- **Well-Commented**: Header comments with lesson context
- **Runnable**: Standalone, executable files

### Accessing Code Samples

```javascript
// From module data, construct file path
const moduleId = 1;
const lessonIndex = 0;
const sampleName = 'basic-variable-assignment';
const filePath = `code-samples/module-${moduleId}/lesson-${lessonIndex}/${sampleName}.cfm`;

// Read file content for AI processing
// (Implementation depends on AI agent's file access capabilities)
```

## Metadata for AI Consumption

### Code Example Metadata (Future Enhancement)

Code examples can include metadata for better AI understanding:

```javascript
{
    code: {
        tag: '<cfset x = 1>',
        script: 'x = 1;'
    },
    metadata: {
        tags: ['variables', 'data-types', 'beginner'],
        complexity: 'basic',
        relatedFunctions: ['Len', 'IsNumeric'],
        security: 'none',
        version: '2021'
    }
}
```

## Best Practices for AI Agents

1. **Always Check Version Compatibility**
   - Use `versions` array to ensure code works in target CF version
   - Check `versionBadge` on code examples

2. **Use Function Reference for Syntax**
   - Get correct syntax from `functions-reference.js`
   - Use both tag and script examples when available

3. **Leverage Patterns Library**
   - Use established patterns for common tasks
   - Adapt patterns rather than creating from scratch
   - Follow best practices documented in patterns

4. **Respect Security Guidelines**
   - Check `security` level in function/pattern metadata
   - Always use parameterized queries
   - Validate and sanitize input

5. **Consider Complexity**
   - Match code complexity to user's experience level
   - Use `complexity` field to select appropriate examples

## Data File Locations

- **Module Data**: `assets/js/modules-data.js`
- **Function Reference**: `assets/js/functions-reference.js`
- **Patterns Library**: `assets/js/patterns-library.js`
- **Code Samples**: `code-samples/module-{id}/lesson-{index}/`

## Version Information

- **CF 2021**: Foundation features
- **CF 2023**: Property visibility, cloud storage
- **CF 2025**: Interfaces, CSV functions, enhanced spreadsheet functions, AI features (via feature update)

## Module 13: AI Features

Module 13 covers ColdFusion 2025 AI features (via feature update). Content includes:
- Model Context Protocol (MCP) integration
- AI Services framework
- Embeddings and vector databases
- RAG workflows
- AI security

## Contributing

When adding content for AI consumption:

1. **Structure Data Properly** - Follow existing patterns in data files
2. **Include Metadata** - Add version, complexity, security information
3. **Provide Both Syntaxes** - Tag and script versions when applicable
4. **Document Patterns** - Add to patterns library for reuse
5. **Update Function Reference** - Add new functions as they're used

## Example: Complete AI Agent Workflow

```javascript
// 1. User asks: "How do I validate an email in ColdFusion?"

// 2. AI Agent searches function reference
const emailValidation = getFunctionByName('IsValid');
if (emailValidation) {
    // Found IsValid function
    const example = emailValidation.examples.find(e => 
        e.code.tag.includes('email')
    );
    return example.code.tag;
}

// 3. Or use validation pattern
const validationPattern = getPattern('validation', 'formValidation');
// Extract email validation portion
return extractEmailValidation(validationPattern.tag);

// 4. Check version compatibility
if (emailValidation.versions.includes(userTargetVersion)) {
    // Code is compatible
    return generateCode(emailValidation);
}
```

---

**Last Updated**: January 2025

**Note**: This guide covers the current structure including CF 2025 AI features (feature update).
