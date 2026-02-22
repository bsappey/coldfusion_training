# How to Create Training Modules

This guide shows you step-by-step how to create and structure training modules.

## Overview

Training content is stored in `assets/js/modules-data.js`. Each module has its own function like `getModule0Data()`, `getModule1Data()`, etc.

## Step-by-Step Process

### Step 1: Find the Module Function

Open `assets/js/modules-data.js` and find the function for your module:

```javascript
function getModule0Data() {
    return {
        // Module content here
    };
}
```

### Step 2: Module Structure

Each module has this basic structure:

```javascript
{
    title: 'Module Title',                    // Displayed in module header
    description: 'Brief description',         // Shown below title
    versions: ['2021', '2023', '2025'],      // Which CF versions this covers
    lessons: [ /* array of lessons */ ]       // All lessons in this module
}
```

### Step 3: Create Lessons

Each lesson follows this pattern:

```javascript
{
    title: 'Lesson Title',                    // Main lesson heading
    content: 'Brief introduction',           // Short description
    sections: [ /* array of sections */ ]    // Content sections
}
```

### Step 4: Add Sections

Sections can be simple or complex. Here are the common patterns:

#### Pattern A: Simple Content Section
```javascript
{
    title: 'Section Title',
    content: 'Paragraph explaining the concept.'
}
```

#### Pattern B: Section with Bullet List
```javascript
{
    title: 'Section Title',
    content: 'Introduction text',
    list: [
        'First point',
        'Second point',
        '<strong>Bold text</strong> for emphasis',
        '<code>code</code> for code references'
    ]
}
```

#### Pattern C: Section with Code Example
```javascript
{
    title: 'Section Title',
    content: 'Explanation of what the code does',
    code: {
        tag: '<!--- Tag syntax code --->\n<cfset x = 5>',
        script: '<!--- Script syntax code --->\n<cfscript>\n    x = 5;\n</cfscript>'
    },
    codeTitle: 'Code Example Title (CF 2021+)'
}
```

#### Pattern D: Section with Single Code Block
```javascript
{
    title: 'Section Title',
    content: 'Explanation',
    code: '<!--- Single code block --->\n<cfset x = 5>',
    codeTitle: 'Code Title'
}
```

### Step 5: Introduction Section Pattern

**IMPORTANT:** The first lesson should start with an "Introduction" section that includes:

```javascript
{
    title: 'Introduction',
    content: 'Overview of what this lesson covers',
    sections: [
        {
            title: 'Key Concepts',
            list: [
                '<strong>Concept 1:</strong> Description',
                '<strong>Concept 2:</strong> Description'
            ]
        },
        {
            title: 'Best Practices & Tips',
            list: [
                '<strong>Practice 1:</strong> Description',
                '<strong>Practice 2:</strong> Description'
            ],
            tip: 'Additional helpful tip'
        },
        {
            title: 'Version-Specific Notes & Gotchas',
            sections: [
                {
                    title: 'ColdFusion 2021',
                    versionBadge: '2021',
                    list: [
                        '<strong>Feature:</strong> Description',
                        '<strong>Gotcha:</strong> Important warning'
                    ]
                },
                {
                    title: 'ColdFusion 2023',
                    versionBadge: '2023',
                    list: [ /* ... */ ]
                },
                {
                    title: 'ColdFusion 2025',
                    versionBadge: '2025',
                    list: [ /* ... */ ]
                },
                {
                    title: 'Common Gotchas Across All Versions',
                    list: [ /* ... */ ]
                }
            ],
            tip: 'Version migration tip'
        },
        {
            title: 'Documentation References',
            list: [
                '<a href="url" target="_blank">Link Text</a>',
                '<a href="url" target="_blank">Another Link</a>'
            ]
        }
    ]
}
```

## Complete Example: Simple Lesson

```javascript
{
    title: 'Understanding Variables',
    content: 'Variables are the foundation of programming in ColdFusion.',
    sections: [
        {
            title: 'Introduction',
            content: 'This lesson covers variable basics.',
            sections: [
                {
                    title: 'Key Concepts',
                    list: [
                        '<strong>Dynamic Typing:</strong> No type declarations needed',
                        '<strong>Scopes:</strong> Variables, Request, Session, etc.'
                    ]
                },
                {
                    title: 'Best Practices & Tips',
                    list: [
                        '<strong>Naming:</strong> Use descriptive camelCase names',
                        '<strong>Scoping:</strong> Always use explicit scope prefixes'
                    ],
                    tip: 'Use Variables scope for request-level data.'
                },
                {
                    title: 'Version-Specific Notes & Gotchas',
                    sections: [
                        {
                            title: 'ColdFusion 2021',
                            versionBadge: '2021',
                            list: [
                                '<strong>Feature:</strong> Standard variable handling'
                            ]
                        }
                    ]
                },
                {
                    title: 'Documentation References',
                    list: [
                        '<a href="https://helpx.adobe.com/coldfusion/..." target="_blank">Variables Guide</a>'
                    ]
                }
            ]
        },
        {
            title: 'Basic Variable Assignment',
            content: 'Learn how to assign values to variables.',
            code: {
                tag: '<!--- Tag Syntax --->\n<cfset name = "John">',
                script: '<!--- Script Syntax --->\n<cfscript>\n    name = "John";\n</cfscript>'
            },
            codeTitle: 'Basic Assignment (CF 2021+)'
        }
    ]
}
```

## Important Notes

1. **Escape Single Quotes:** Use `\'` in strings: `'Don\'t forget'`
2. **Use HTML in Lists:** Format with `<strong>`, `<code>`, etc.
3. **Version Badges:** Use `versionBadge: '2021'` for version-specific content
4. **Tips:** Add `tip: 'text'` for helpful hints
5. **Code Titles:** Always include version: `'Title (CF 2021+)'`
6. **Both Syntaxes:** Provide both `tag` and `script` when possible

## Testing Your Module

1. Save `modules-data.js`
2. Navigate to `/modules/module-X.cfm` (where X is your module ID)
3. Check that:
   - Content displays correctly
   - Code examples show both syntaxes
   - Navigation works
   - Version badges appear

## See Also

- `MODULE-0-EXAMPLE.md` - Complete working example
- Module 1 in `modules-data.js` - Another reference example


