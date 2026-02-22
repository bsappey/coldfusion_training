# Module 0: Welcome & Setup - Complete Example

This document shows you the complete structure for Module 0. Use this as a template for creating other modules.

## File Location
The module data goes in: `assets/js/modules-data.js` in the `getModule0Data()` function.

## Complete Structure

```javascript
function getModule0Data() {
    return {
        title: 'Welcome & Setup',
        description: 'Course Introduction & Development Environment',
        versions: ['2021', '2023', '2025'],
        lessons: [
            {
                title: 'Course Introduction',
                content: 'Welcome to the comprehensive Adobe ColdFusion training program. This course is designed to take you from beginner to advanced ColdFusion developer, covering versions 2021, 2023, and 2025.',
                sections: [
                    {
                        title: 'Introduction',
                        content: 'This module provides an overview of ColdFusion, the training program structure, and how to set up your development environment. Understanding these fundamentals will help you get the most out of this training.',
                        sections: [
                            {
                                title: 'Key Concepts',
                                list: [
                                    '<strong>ColdFusion Platform:</strong> Rapid web application development platform running on JVM',
                                    '<strong>Dual Syntax:</strong> Tag-based (CFML) and script-based (CFScript) syntax options',
                                    '<strong>Version Coverage:</strong> Training covers CF 2021, 2023, and 2025 features',
                                    '<strong>Development Tools:</strong> IDEs, CommandBox, and ColdFusion Administrator',
                                    '<strong>Best Practices:</strong> Proper setup, version awareness, and development workflow'
                                ]
                            },
                            {
                                title: 'Best Practices & Tips',
                                list: [
                                    '<strong>Version Selection:</strong> Choose the ColdFusion version that matches your project requirements. CF 2021 for stability, CF 2023 for cloud features, CF 2025 for latest features.',
                                    '<strong>Development Environment:</strong> Use CommandBox for local development - it\'s lightweight and portable. Use full ColdFusion server for production-like testing.',
                                    '<strong>IDE Setup:</strong> Install ColdFusion Builder extension in VS Code for syntax highlighting, code completion, and debugging support.',
                                    '<strong>Project Structure:</strong> Organize code into logical folders (components, controllers, models, views). Use Application.cfc for application-level settings.',
                                    '<strong>Version Testing:</strong> Test code samples in your target ColdFusion version to ensure compatibility.'
                                ],
                                tip: 'Start with CommandBox for quick setup. It provides a complete ColdFusion environment without complex installation.'
                            },
                            {
                                title: 'Version-Specific Notes & Gotchas',
                                sections: [
                                    {
                                        title: 'ColdFusion 2021',
                                        versionBadge: '2021',
                                        list: [
                                            '<strong>Installation:</strong> Standard installer available for Windows, macOS, and Linux',
                                            '<strong>CommandBox:</strong> Full support for CommandBox-based development',
                                            '<strong>Docker:</strong> Docker images available but less refined than later versions',
                                            '<strong>Gotcha:</strong> Some newer features from 2023/2025 won\'t be available - check version badges in training materials'
                                        ]
                                    },
                                    {
                                        title: 'ColdFusion 2023',
                                        versionBadge: '2023',
                                        list: [
                                            '<strong>Cloud Storage:</strong> Native integration with S3, Azure Blob, and Google Cloud Storage',
                                            '<strong>Property Visibility:</strong> New public/private/package modifiers for CFC properties',
                                            '<strong>Performance:</strong> Enhanced JIT compilation and performance improvements',
                                            '<strong>Gotcha:</strong> Cloud storage features require proper credentials and configuration',
                                            '<strong>Best Practice:</strong> Use property visibility modifiers for better encapsulation'
                                        ]
                                    },
                                    {
                                        title: 'ColdFusion 2025',
                                        versionBadge: '2025',
                                        list: [
                                            '<strong>Interface Support:</strong> CFCs can now implement interfaces for better OOP design',
                                            '<strong>Enhanced JIT:</strong> Further performance improvements in JIT compilation',
                                            '<strong>Deployment:</strong> Improved deployment tooling and containerization support',
                                            '<strong>Gotcha:</strong> Interface syntax is new - existing code won\'t use it, but new code should consider it',
                                            '<strong>Tip:</strong> Use interfaces for better code organization and testability'
                                        ]
                                    },
                                    {
                                        title: 'Common Gotchas Across All Versions',
                                        list: [
                                            '<strong>Port Conflicts:</strong> Default port 8500 may conflict with other services - change in server settings',
                                            '<strong>Path Mappings:</strong> Administrator path mappings are case-sensitive on Linux/Mac',
                                            '<strong>Java Version:</strong> Ensure compatible Java version is installed (check ColdFusion documentation)',
                                            '<strong>File Permissions:</strong> Web root directory needs proper read/write permissions',
                                            '<strong>Encoding:</strong> Default encoding is UTF-8 - ensure your editor uses UTF-8 to avoid character issues'
                                        ]
                                    }
                                ],
                                tip: 'Always check the ColdFusion Administrator after installation to verify your setup. The version information page shows your exact build number and Java version.'
                            },
                            {
                                title: 'Documentation References',
                                list: [
                                    '<a href="https://helpx.adobe.com/coldfusion/getting-started.html" target="_blank">Adobe ColdFusion - Getting Started</a>',
                                    '<a href="https://helpx.adobe.com/coldfusion/installing-coldfusion.html" target="_blank">ColdFusion Installation Guide</a>',
                                    '<a href="https://commandbox.ortusbooks.com/" target="_blank">CommandBox Documentation</a>',
                                    '<a href="https://cfdocs.org/" target="_blank">CFDocs.org - ColdFusion Function Reference</a>',
                                    '<a href="https://helpx.adobe.com/coldfusion/cfml-reference/coldfusion-tags/tags-by-category.html" target="_blank">CFML Tag Reference</a>'
                                ]
                            }
                        ]
                    },
                    {
                        title: 'What You Will Learn',
                        content: 'This comprehensive training program covers all aspects of ColdFusion development.',
                        list: [
                            '<strong>Core Language:</strong> Variables, data types, functions, and control structures',
                            '<strong>Web Development:</strong> Request/response handling, forms, sessions, and application structure',
                            '<strong>Data Access:</strong> Database connectivity, queries, arrays, structs, and lists',
                            '<strong>File Operations:</strong> File I/O, PDF generation, Excel manipulation, and image processing',
                            '<strong>Cloud Integration:</strong> S3, Azure Blob, and Google Cloud Storage (CF 2023+)',
                            '<strong>Security:</strong> Input validation, output encoding, authentication, and secure coding practices',
                            '<strong>OOP:</strong> Components (CFCs), inheritance, interfaces (CF 2025), and modern OOP patterns',
                            '<strong>Advanced Topics:</strong> REST APIs, caching, scheduling, async programming, and more'
                        ]
                    },
                    {
                        title: 'Course Structure',
                        content: 'The training is organized into 13 comprehensive modules, each building on previous knowledge.',
                        list: [
                            '<strong>13 Modules:</strong> Progressive learning from basics to advanced topics',
                            '<strong>Interactive Quizzes:</strong> Test your knowledge after each module',
                            '<strong>Code Samples:</strong> Hands-on examples in both tag and script syntax',
                            '<strong>Version Indicators:</strong> Clear badges showing which versions support each feature',
                            '<strong>Best Practices:</strong> Real-world tips and gotchas throughout',
                            '<strong>Self-Paced:</strong> Learn at your own speed with instructor-led session support available'
                        ]
                    }
                ]
            },
            {
                title: 'What is ColdFusion?',
                content: 'ColdFusion is a rapid web application development platform that simplifies complex programming tasks.',
                sections: [
                    {
                        title: 'Platform Overview',
                        content: 'ColdFusion combines tag-based and script-based syntax to make building dynamic, data-driven applications faster and easier. It runs on the Java Virtual Machine (JVM) and integrates seamlessly with Java, .NET, and other technologies.',
                        list: [
                            '<strong>First Released:</strong> 1995 by Allaire Corporation (now Adobe)',
                            '<strong>Current Versions:</strong> ColdFusion 2021, 2023, and 2025',
                            '<strong>Platform:</strong> Runs on JVM, compatible with Java libraries and frameworks',
                            '<strong>Syntax Options:</strong> Tag-based (CFML) and script-based (CFScript)',
                            '<strong>Deployment:</strong> Traditional server, cloud, or containerized (Docker)'
                        ]
                    },
                    {
                        title: 'Key Use Cases',
                        list: [
                            '<strong>Enterprise Web Applications:</strong> Large-scale business applications with complex requirements',
                            '<strong>Content Management Systems:</strong> Dynamic content delivery and management',
                            '<strong>E-commerce Platforms:</strong> Online stores with payment processing and inventory management',
                            '<strong>Data Dashboards:</strong> Real-time reporting and data visualization',
                            '<strong>API Development:</strong> RESTful APIs for mobile and web applications',
                            '<strong>Legacy Modernization:</strong> Upgrading older systems to modern architectures',
                            '<strong>Cloud Applications:</strong> Cloud-native applications with storage integration'
                        ]
                    },
                    {
                        title: 'Why Choose ColdFusion?',
                        list: [
                            '<strong>Rapid Development:</strong> Built-in tags and functions reduce code significantly',
                            '<strong>Database Integration:</strong> Native support for all major databases with minimal configuration',
                            '<strong>Enterprise Features:</strong> Security, scalability, and reliability built into the platform',
                            '<strong>Modern Capabilities:</strong> REST APIs, cloud integration, Docker support, and more',
                            '<strong>Developer Productivity:</strong> Less boilerplate code means faster development cycles',
                            '<strong>Strong Community:</strong> Active community, extensive documentation, and third-party tools'
                        ]
                    }
                ]
            },
            {
                title: 'Setting Up Your Development Environment',
                content: 'Proper setup is essential for a productive development experience. This lesson covers installation, configuration, and tool recommendations.',
                sections: [
                    {
                        title: 'ColdFusion Installation Options',
                        content: 'Choose the installation method that best fits your development needs.',
                        list: [
                            '<strong>Windows:</strong> Download installer from Adobe website, run setup wizard, configure server settings',
                            '<strong>macOS:</strong> Use installer package or CommandBox for easier setup',
                            '<strong>Linux:</strong> Use installer or Docker container for containerized deployment',
                            '<strong>CommandBox (Recommended):</strong> Cross-platform option - run <code>box install coldbox</code> or <code>box server start</code>'
                        ],
                        code: {
                            tag: '<!--- Check ColdFusion Version and Environment --->\n<cfoutput>\n    <h3>ColdFusion Environment Information</h3>\n    <p><strong>Version:</strong> #Server.ColdFusion.ProductVersion#</p>\n    <p><strong>Edition:</strong> #Server.ColdFusion.ProductLevel#</p>\n    <p><strong>Java Version:</strong> #Server.ColdFusion.SupportedLanguages#</p>\n    <p><strong>Server Name:</strong> #CGI.SERVER_NAME#</p>\n    <p><strong>Server Port:</strong> #CGI.SERVER_PORT#</p>\n</cfoutput>',
                            script: '<!--- Check ColdFusion Version and Environment --->\n<cfscript>\n    writeOutput("<h3>ColdFusion Environment Information</h3>");\n    writeOutput("<p><strong>Version:</strong> " & Server.ColdFusion.ProductVersion & "</p>");\n    writeOutput("<p><strong>Edition:</strong> " & Server.ColdFusion.ProductLevel & "</p>");\n    writeOutput("<p><strong>Java Version:</strong> " & Server.ColdFusion.SupportedLanguages & "</p>");\n    writeOutput("<p><strong>Server Name:</strong> " & CGI.SERVER_NAME & "</p>");\n    writeOutput("<p><strong>Server Port:</strong> " & CGI.SERVER_PORT & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Checking Your ColdFusion Environment (CF 2021+)'
                    },
                    {
                        title: 'ColdFusion Administrator',
                        content: 'The Administrator is your control center for ColdFusion configuration.',
                        list: [
                            '<strong>Access URL:</strong> <code>http://127.0.0.1:8500/CFIDE/administrator/</code> (default port)',
                            '<strong>Default Credentials:</strong> admin / (password set during installation)',
                            '<strong>Key Sections:</strong>',
                            '  - <strong>Data Sources:</strong> Configure database connections',
                            '  - <strong>Mappings:</strong> Set up path mappings for includes and components',
                            '  - <strong>Settings:</strong> Configure error handling, caching, and performance',
                            '  - <strong>Security:</strong> Set up authentication, sandbox security, and API access',
                            '  - <strong>Extensions:</strong> Install and manage ColdFusion extensions',
                            '<strong>Version Differences:</strong> Some features appear in different locations across versions - check version-specific documentation'
                        ],
                        tip: 'Bookmark the Administrator URL and change the default password immediately after installation.'
                    },
                    {
                        title: 'IDE and Editor Setup',
                        content: 'Choose an editor with good ColdFusion support for the best development experience.',
                        list: [
                            '<strong>VS Code (Recommended):</strong>',
                            '  - Install "ColdFusion Builder" extension by Adobe',
                            '  - Provides syntax highlighting, code completion, and debugging',
                            '  - Free and cross-platform',
                            '<strong>IntelliJ IDEA:</strong>',
                            '  - Install ColdFusion plugin',
                            '  - Excellent refactoring and code analysis',
                            '  - Paid (free community edition available)',
                            '<strong>Eclipse:</strong>',
                            '  - Use ColdFusion Builder plugin',
                            '  - Full-featured IDE with ColdFusion support',
                            '  - Free and open source',
                            '<strong>Any Text Editor:</strong>',
                            '  - Ensure syntax highlighting for .cfm and .cfc files',
                            '  - Use CommandBox CLI for testing and validation'
                        ]
                    },
                    {
                        title: 'Project Structure Best Practices',
                        content: 'Organize your ColdFusion projects with a clear, maintainable structure.',
                        code: {
                            tag: '<!--- Recommended Project Structure --->\n/\n  /application\n    /components\n      UserService.cfc\n      ProductService.cfc\n    /controllers\n      UserController.cfc\n      ProductController.cfc\n    /models\n      User.cfc\n      Product.cfc\n    /views\n      /user\n        index.cfm\n        profile.cfm\n      /product\n        list.cfm\n        detail.cfm\n    /includes\n      header.cfm\n      footer.cfm\n  Application.cfc\n  index.cfm\n  /assets\n    /css\n      style.css\n    /js\n      app.js\n    /images',
                            script: '<!--- Recommended Project Structure (same for script syntax) --->\n// This is a directory structure, not code\n// Use the same organization regardless of tag or script syntax'
                        },
                        codeTitle: 'Recommended Project Structure',
                        list: [
                            '<strong>Separation of Concerns:</strong> Keep components, controllers, models, and views in separate folders',
                            '<strong>Application.cfc:</strong> Place at root level for application-wide settings',
                            '<strong>Assets Folder:</strong> Organize CSS, JavaScript, and images in dedicated folders',
                            '<strong>Naming Conventions:</strong> Use descriptive names and follow consistent patterns',
                            '<strong>Version Control:</strong> Use .gitignore to exclude server-specific files'
                        ]
                    },
                    {
                        title: 'CommandBox Quick Start',
                        content: 'CommandBox is the fastest way to get started with ColdFusion development.',
                        list: [
                            '<strong>Installation:</strong> Download from <a href="https://www.ortussolutions.com/products/commandbox" target="_blank">ortussolutions.com</a>',
                            '<strong>Start Server:</strong> <code>box server start</code> in your project directory',
                            '<strong>Default Port:</strong> 8080 (different from standard CF installation)',
                            '<strong>Stop Server:</strong> <code>box server stop</code>',
                            '<strong>Install Packages:</strong> <code>box install packageName</code>',
                            '<strong>REPL:</strong> <code>box</code> to enter interactive ColdFusion REPL'
                        ],
                        code: {
                            tag: '<!--- CommandBox Server Info --->\n<cfoutput>\n    <p>Server: #CGI.SERVER_NAME#</p>\n    <p>Port: #CGI.SERVER_PORT#</p>\n    <p>ColdFusion Version: #Server.ColdFusion.ProductVersion#</p>\n</cfoutput>',
                            script: '<!--- CommandBox Server Info --->\n<cfscript>\n    writeOutput("<p>Server: " & CGI.SERVER_NAME & "</p>");\n    writeOutput("<p>Port: " & CGI.SERVER_PORT & "</p>");\n    writeOutput("<p>ColdFusion Version: " & Server.ColdFusion.ProductVersion & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Displaying Server Information (CF 2021+)',
                        tip: 'CommandBox is perfect for training and development. It starts quickly and doesn\'t require complex configuration.'
                    }
                ],
                tip: 'Start with CommandBox for the easiest setup. You can always move to a full ColdFusion server installation later for production-like testing.'
            }
        ]
    };
}
```

## Structure Breakdown

### Module Object Structure:
```javascript
{
    title: 'Module Title',           // Main module title
    description: 'Short description', // Brief overview
    versions: ['2021', '2023', '2025'], // Supported versions
    lessons: [ /* array of lessons */ ]
}
```

### Lesson Structure:
```javascript
{
    title: 'Lesson Title',           // Lesson heading
    content: 'Introduction text',   // Brief description
    sections: [ /* array of sections */ ]
}
```

### Section Types:

#### 1. Simple Section with Content:
```javascript
{
    title: 'Section Title',
    content: 'Paragraph of text explaining the concept.'
}
```

#### 2. Section with List:
```javascript
{
    title: 'Section Title',
    content: 'Introduction text',
    list: [
        'First bullet point',
        'Second bullet point',
        '<strong>Bold text</strong> for emphasis'
    ]
}
```

#### 3. Section with Code:
```javascript
{
    title: 'Section Title',
    content: 'Explanation of the code',
    code: {
        tag: '<!--- Tag syntax code here --->',
        script: '<!--- Script syntax code here --->'
    },
    codeTitle: 'Code Example Title (CF 2021+)'
}
```

#### 4. Section with Single Code Block:
```javascript
{
    title: 'Section Title',
    content: 'Explanation',
    code: '<!--- Single code block (no syntax switching) --->',
    codeTitle: 'Code Title'
}
```

#### 5. Introduction Section (with nested sections):
```javascript
{
    title: 'Introduction',
    content: 'Overview text',
    sections: [
        {
            title: 'Key Concepts',
            list: [ /* concepts */ ]
        },
        {
            title: 'Best Practices & Tips',
            list: [ /* practices */ ],
            tip: 'Additional tip text'
        },
        {
            title: 'Version-Specific Notes & Gotchas',
            sections: [
                {
                    title: 'ColdFusion 2021',
                    versionBadge: '2021',
                    list: [ /* version-specific items */ ]
                },
                // ... more versions
            ]
        },
        {
            title: 'Documentation References',
            list: [ /* links */ ]
        }
    ]
}
```

## Key Patterns to Remember:

1. **Always start lessons with an Introduction section** that includes:
   - Key Concepts
   - Best Practices & Tips
   - Version-Specific Notes & Gotchas
   - Documentation References

2. **Use `versionBadge`** to highlight version-specific content

3. **Provide both tag and script syntax** in code examples when possible

4. **Use `tip` property** for additional helpful information

5. **Escape single quotes** in strings: `'Don\'t forget'`

6. **Use HTML in list items** for formatting: `<strong>text</strong>`, `<code>code</code>`

7. **Nested sections** are supported - use them for detailed breakdowns

## Next Steps:

1. Copy the structure above into `getModule0Data()` function
2. Customize the content for your needs
3. Test by navigating to `/modules/module-0.cfm`
4. Use this as a template for other modules


