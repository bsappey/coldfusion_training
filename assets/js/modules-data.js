/**
 * ColdFusion Training - Comprehensive Module Data
 * Covers CF 2021, 2023, and 2025
 */

function getModulesData() {
    return [
        {
            id: 0,
            title: 'Welcome & Setup',
            subtitle: 'Course Introduction & Development Environment',
            description: 'Get started with ColdFusion training. Learn about the platform, versions, and set up your development environment.',
            icon: 'rocket',
            versions: ['2021', '2023', '2025'],
            estimatedTime: {
                junior: '3 hours',
                mid: '2 hours',
                senior: '1 hour'
            }
        },
        {
            id: 1,
            title: 'Language Fundamentals',
            subtitle: 'Variables, Functions, and Flow Control',
            description: 'Master the core language features including variables, data types, functions, and control structures.',
            icon: 'code',
            versions: ['2021', '2023', '2025'],
            estimatedTime: {
                junior: '6 hours',
                mid: '4 hours',
                senior: '3 hours'
            }
        },
        {
            id: 2,
            title: 'Web & Application Structure',
            subtitle: 'Request/Response, Forms, and Sessions',
            description: 'Understand the web application model, form processing, scopes, and application lifecycle.',
            icon: 'world',
            versions: ['2021', '2023', '2025'],
            estimatedTime: {
                junior: '7 hours',
                mid: '5 hours',
                senior: '3 hours'
            }
        },
        {
            id: 3,
            title: 'Data Connectivity & Manipulation',
            subtitle: 'Databases, Queries, and Data Structures',
            description: 'Connect to databases, execute queries, and work with arrays, structs, and lists.',
            icon: 'database',
            versions: ['2021', '2023', '2025'],
            estimatedTime: {
                junior: '8 hours',
                mid: '6 hours',
                senior: '4 hours'
            }
        },
        {
            id: 4,
            title: 'File & Document Operations',
            subtitle: 'File I/O, PDF, Excel, and Image Processing',
            description: 'Handle file operations, generate and manipulate PDFs, work with spreadsheets, and process images.',
            icon: 'file',
            versions: ['2021', '2023', '2025'],
            estimatedTime: {
                junior: '7 hours',
                mid: '5 hours',
                senior: '3 hours'
            }
        },
        {
            id: 5,
            title: 'Cloud Storage Integration',
            subtitle: 'S3, Azure Blob, and Google Cloud Storage',
            description: 'Integrate with cloud storage providers using ColdFusion\'s native cloud storage features.',
            icon: 'cloud',
            versions: ['2023', '2025'],
            estimatedTime: {
                junior: '5 hours',
                mid: '4 hours',
                senior: '2 hours'
            }
        },
        {
            id: 6,
            title: 'Security Fundamentals',
            subtitle: 'Input Validation, Output Encoding, and Authentication',
            description: 'Implement secure coding practices, prevent common vulnerabilities, and handle authentication.',
            icon: 'shield',
            versions: ['2021', '2023', '2025'],
            estimatedTime: {
                junior: '6 hours',
                mid: '4 hours',
                senior: '3 hours'
            }
        },
        {
            id: 7,
            title: 'Object-Oriented Programming',
            subtitle: 'CFCs, Inheritance, and Modern OOP Features',
            description: 'Build reusable components using CFCs, implement OOP principles, and leverage modern features.',
            icon: 'box',
            versions: ['2021', '2023', '2025'],
            estimatedTime: {
                junior: '8 hours',
                mid: '6 hours',
                senior: '4 hours'
            }
        },
        {
            id: 8,
            title: 'What\'s New: Version Comparison',
            subtitle: 'CF 2023 vs 2021 | CF 2025 vs 2023',
            description: 'Learn what\'s new and different between ColdFusion versions. Compare features from 2021 to 2023 and 2023 to 2025.',
            icon: 'sparkles',
            versions: ['2021', '2023', '2025'],
            estimatedTime: {
                junior: '4 hours',
                mid: '3 hours',
                senior: '2 hours'
            }
        },
        {
            id: 9,
            title: 'Advanced Topics',
            subtitle: 'Caching, REST APIs, Scheduling, and More',
            description: 'Master advanced topics including caching, REST APIs, scheduling, error handling, and async programming.',
            icon: 'settings',
            versions: ['2021', '2023', '2025'],
            estimatedTime: {
                junior: '10 hours',
                mid: '7 hours',
                senior: '5 hours'
            }
        },
        {
            id: 10,
            title: 'Quality Assurance & Debugging',
            subtitle: 'Testing, Debugging, and Monitoring',
            description: 'Learn debugging techniques, error handling, logging, and monitoring best practices.',
            icon: 'bug',
            versions: ['2021', '2023', '2025'],
            estimatedTime: {
                junior: '4 hours',
                mid: '3 hours',
                senior: '2 hours'
            }
        },
        {
            id: 11,
            title: 'Migration & Compatibility',
            subtitle: 'Upgrading and Modernizing Legacy Code',
            description: 'Navigate version upgrades, use migration tools, and refactor legacy code for modern ColdFusion.',
            icon: 'arrow-up',
            versions: ['2021', '2023', '2025'],
            estimatedTime: {
                junior: '5 hours',
                mid: '4 hours',
                senior: '3 hours'
            }
        },
        {
            id: 12,
            title: 'Projects & Labs',
            subtitle: 'Hands-on Exercises and Capstone Project',
            description: 'Apply your knowledge through progressive exercises and build a complete application.',
            icon: 'tools',
            versions: ['2021', '2023', '2025'],
            estimatedTime: {
                junior: '12 hours',
                mid: '8 hours',
                senior: '6 hours'
            }
        },
        {
            id: 13,
            title: 'Introduction to AI in ColdFusion',
            subtitle: 'AI Architecture, Providers, and Core Workflow',
            description: 'ColdFusion\'s AI architecture, vendor-neutral design, supported providers, ChatModel vs AIService vs RAG, and installing AI packages (CFPM).',
            icon: 'brain',
            versions: ['2025'],
            estimatedTime: {
                junior: '2 hours',
                mid: '1.5 hours',
                senior: '1 hour'
            }
        },
        {
            id: 14,
            title: 'Chat Models and Prompting',
            subtitle: 'LLM Interaction with getChatModel() and .chat()',
            description: 'Create ChatModel instances, configure parameters, send prompts, system messages, temperature and token limits, structured output, and logging.',
            icon: 'message-circle',
            versions: ['2025'],
            estimatedTime: {
                junior: '2.5 hours',
                mid: '2 hours',
                senior: '1 hour'
            }
        },
        {
            id: 15,
            title: 'AIService and Conversational Memory',
            subtitle: 'Stateful AI with Memory and Personas',
            description: 'AIService overview, ChatModel vs AIService, chat memory, personas, conversation lifecycle, function tools, Redis/Memcached memory, and conversational agents.',
            icon: 'messages',
            versions: ['2025'],
            estimatedTime: {
                junior: '3 hours',
                mid: '2 hours',
                senior: '1.5 hours'
            }
        },
        {
            id: 16,
            title: 'Function Tools and AI Orchestration',
            subtitle: 'AI Integration with External Systems',
            description: 'Function tools, tool-calling architecture, creating callable functions, tool selection by AI, API integration, security, and orchestration patterns.',
            icon: 'tool',
            versions: ['2025'],
            estimatedTime: {
                junior: '2.5 hours',
                mid: '2 hours',
                senior: '1 hour'
            }
        },
        {
            id: 17,
            title: 'Retrieval Augmented Generation (RAG)',
            subtitle: 'Enterprise Knowledge Assistants',
            description: 'What is RAG, architecture, quick start, document ingestion, loaders and splitters, embedding models, ask() vs chat(), sync vs async, and best practices.',
            icon: 'book',
            versions: ['2025'],
            estimatedTime: {
                junior: '3 hours',
                mid: '2.5 hours',
                senior: '1.5 hours'
            }
        },
        {
            id: 18,
            title: 'Vector Databases and Embeddings',
            subtitle: 'Semantic Search Foundations',
            description: 'Embeddings, vector databases, VectorStore API, providers (Milvus, Pinecone, Qdrant, Chroma), in-memory store, distance metrics, metadata filtering, hybrid search.',
            icon: 'database',
            versions: ['2025'],
            estimatedTime: {
                junior: '2.5 hours',
                mid: '2 hours',
                senior: '1 hour'
            }
        },
        {
            id: 19,
            title: 'Document Processing for AI',
            subtitle: 'Loading, Splitting, and Ingesting Documents',
            description: 'DocumentProcessor overview, loading documents, text chunking, transforming documents, ingesting into vector stores, async processing, and supported formats.',
            icon: 'file-text',
            versions: ['2025'],
            estimatedTime: {
                junior: '2 hours',
                mid: '1.5 hours',
                senior: '1 hour'
            }
        },
        {
            id: 20,
            title: 'Model Context Protocol (MCP)',
            subtitle: 'Enterprise AI Integrations',
            description: 'MCP introduction, client vs server, MCPClient in ColdFusion, HTTP vs STDIO transports, tools and resources, roots and scoping, sampling and elicitation, security.',
            icon: 'plug',
            versions: ['2025'],
            estimatedTime: {
                junior: '3 hours',
                mid: '2 hours',
                senior: '1.5 hours'
            }
        },
        {
            id: 21,
            title: 'Building AI Agents in ColdFusion',
            subtitle: 'Combining AIService, MCP, and RAG',
            description: 'Agent architecture, multi-tool orchestration, knowledge assistants with RAG, API-integrated agents, event-driven workflows, observability, and scaling.',
            icon: 'robot',
            versions: ['2025'],
            estimatedTime: {
                junior: '3 hours',
                mid: '2.5 hours',
                senior: '1.5 hours'
            }
        },
        {
            id: 22,
            title: 'Performance, Monitoring and AI Operations',
            subtitle: 'Operational Excellence for AI Apps',
            description: 'Performance for AI calls, token optimization, caching, error handling, monitoring MCP and RAG, secure credentials, governance and compliance.',
            icon: 'chart-line',
            versions: ['2025'],
            estimatedTime: {
                junior: '2 hours',
                mid: '1.5 hours',
                senior: '1 hour'
            }
        },
        {
            id: 23,
            title: 'Enterprise AI Patterns in ColdFusion',
            subtitle: 'Multi-Model, RAG, and Governance',
            description: 'Multi-model routing, local vs cloud, hybrid RAG, structured output pipelines, agent chains, advanced prompt engineering, and AI governance strategies.',
            icon: 'building',
            versions: ['2025'],
            estimatedTime: {
                junior: '2.5 hours',
                mid: '2 hours',
                senior: '1 hour'
            }
        }
    ];
}

/**
 * Get detailed module content
 */
function getModuleData(moduleId) {
    const modules = {
        0: getModule0Data(),
        1: getModule1Data(),
        2: getModule2Data(),
        3: getModule3Data(),
        4: getModule4Data(),
        5: getModule5Data(),
        6: getModule6Data(),
        7: getModule7Data(),
        8: getModule8Data(),
        9: getModule9Data(),
        10: getModule10Data(),
        11: getModule11Data(),
        12: getModule12Data(),
        13: getModule13Data(),
        14: getModule14Data(),
        15: getModule15Data(),
        16: getModule16Data(),
        17: getModule17Data(),
        18: getModule18Data(),
        19: getModule19Data(),
        20: getModule20Data(),
        21: getModule21Data(),
        22: getModule22Data(),
        23: getModule23Data()
    };
    
    return modules[moduleId] || null;
}

/**
 * Module 0: Welcome & Setup
 */
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
                                    '<strong>Development Tools:</strong> IDE/editor, ColdFusion Administrator, and (optionally) CommandBox for local workflows',
                                    '<strong>Best Practices:</strong> Proper setup, version awareness, and development workflow'
                                ]
                            },
                            {
                                title: 'Best Practices & Tips',
                                list: [
                                    '<strong>Choose the right edition/version:</strong> Match the ColdFusion version to your project’s needs and target runtime (2021/2023/2025).',
                                    '<strong>Plan your install approach:</strong> Pick the workflow that matches your goals:<ul class="mb-0"><li><strong>Native install</strong> (full installer or ZIP installer) when you want a “real server” experience and Administrator configuration.</li><li><strong>CommandBox</strong> when you want a quick local workflow (especially for training, prototypes, and isolated projects).</li></ul>',
                                    '<strong>Use a real editor/IDE:</strong> Use syntax highlighting and CFML-aware tooling to reduce mistakes and speed up learning.',
                                    '<strong>Keep projects organized:</strong> Separate components, controllers/handlers, views, and assets; keep app settings in <code>Application.cfc</code>.',
                                    '<strong>Validate in your target version:</strong> Test examples in the ColdFusion version you will deploy to—especially when using version-specific features.'
                                ],
                                tip: 'Tip: If you’re new, start with whichever install path is easiest for you to run consistently. The goal is a stable local environment you can repeat on any machine.'
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
                                            '<strong>Cloud:</strong> Adds integrations such as Google Cloud services (for example, Cloud Storage, Firestore, PubSub)',
                                            '<strong>GraphQL:</strong> Built-in GraphQL support',
                                            '<strong>JWT:</strong> Built-in JSON Web Token support',
                                            '<strong>CCS:</strong> Central Configuration Server for managing instance configuration',
                                            '<strong>PDF:</strong> Enhanced PDF output with PDF 2.0 engine'
                                        ]
                                    },
                                    {
                                        title: 'ColdFusion 2025',
                                        versionBadge: '2025',
                                        list: [
                                            '<strong>Licensing:</strong> New licensing/activation workflows (NUL/FRL options)',
                                            '<strong>CSV + Spreadsheet:</strong> New CSV functions and major spreadsheet enhancements',
                                            '<strong>Charting:</strong> Expanded charting support (including SVG output)',
                                            '<strong>Security/Language:</strong> Additional security and language improvements (see What\'s New / release notes)'
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
                            '<strong>OOP:</strong> Components (CFCs), inheritance, interfaces, and modern OOP patterns',
                            '<strong>Advanced Topics:</strong> REST APIs, caching, scheduling, async programming, and more',
                            '<strong>AI Track (Modules 13–23):</strong> AI features in ColdFusion 2025 feature updates, including RAG workflows, vector databases/embeddings, document processing, MCP, and agent patterns'
                        ]
                    },
                    {
                        title: 'Course Structure',
                        content: 'The training is organized into 24 modules (0–23), each building on previous knowledge.',
                        list: [
                            '<strong>24 Modules:</strong> Core track (0–12) plus AI track (13–23)',
                            '<strong>AI track coverage (13–23):</strong> <ul class="mb-0"><li>Chat models + prompting</li><li>AIService + conversational memory</li><li>Function tools + orchestration</li><li>RAG + document ingestion</li><li>Vector stores + embeddings</li><li>Document processing</li><li>Model Context Protocol (MCP)</li><li>Agents + observability</li><li>AI operations + governance</li></ul>',
                            '<strong>Interactive Quizzes:</strong> Quizzes are available for many modules to reinforce key concepts',
                            '<strong>Code Samples:</strong> Hands-on examples in both tag and script syntax (plus physical sample files where provided)',
                            '<strong>Version Indicators:</strong> Clear badges showing which versions support each feature',
                            '<strong>Best Practices:</strong> Real-world tips and gotchas throughout',
                            '<strong>Self-Paced:</strong> Learn at your own speed with instructor-led session support available'
                        ]
                    }
                ]
            },
            {
                title: 'What is ColdFusion?',
                content: 'ColdFusion is a rapid web application development platform that simplifies complex programming tasks. It combines tag-based and script-based syntax to make building dynamic, data-driven applications faster and easier.',
                sections: [
                    {
                        title: 'History & Ecosystem:',
                        content: 'ColdFusion was first released in 1995 and has evolved into a powerful enterprise platform. It runs on the Java Virtual Machine (JVM) and integrates seamlessly with Java, .NET, and other technologies.'
                    },
                    {
                        title: 'Key Use Cases:',
                        list: [
                            'Enterprise web applications',
                            'Content management systems',
                            'E-commerce platforms',
                            'Data-driven dashboards and reporting',
                            'API development and integration',
                            'Legacy system modernization',
                            'Cloud-native applications'
                        ]
                    },
                    {
                        title: 'Why ColdFusion?',
                        list: [
                            '<strong>Rapid Development:</strong> Built-in tags and functions for common tasks',
                            '<strong>Database Integration:</strong> Native support for all major databases',
                            '<strong>Enterprise Features:</strong> Security, scalability, and reliability built-in',
                            '<strong>Modern Capabilities:</strong> REST APIs, cloud integration, Docker support',
                            '<strong>Developer Productivity:</strong> Less code, faster results'
                        ]
                    }
                ]
            },
            {
                title: 'Version Landscape (2021, 2023, 2025)',
                content: 'Understanding the differences and capabilities across ColdFusion versions is crucial for effective development.',
                sections: [
                    {
                        title: 'ColdFusion 2021:',
                        list: [
                            'Foundation features and core functionality',
                            'Enhanced security features',
                            'Performance improvements',
                            'Modern language features',
                            'Improved error handling'
                        ],
                        versionBadge: '2021'
                    },
                    {
                        title: 'ColdFusion 2023:',
                        list: [
                            'Cloud services integrations (for example, Google Cloud Platform services)',
                            'GraphQL support',
                            'JSON Web Token (JWT) support',
                            'Central Configuration Server (CCS)',
                            'Enhanced PDF (PDF 2.0 rendering engine)'
                        ],
                        versionBadge: '2023'
                    },
                    {
                        title: 'ColdFusion 2025:',
                        list: [
                            'Licensing and activation changes (subscription-based workflows)',
                            'New CSV functions and major spreadsheet enhancements',
                            'Charting enhancements (including SVG support)',
                            'Language and security enhancements (see release notes for details)'
                        ],
                        versionBadge: '2025'
                    },
                    {
                        title: 'Version Indicators in This Course:',
                        content: 'Throughout this training, you will see version badges indicating which ColdFusion versions support specific features. Pay attention to these indicators to ensure compatibility with your target version.'
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
                            '<strong>Full installer (Windows/macOS/Linux):</strong> Best for “production-like” local installs with the built-in web server and Administrator wizard',
                            '<strong>ZIP installer (Windows/macOS/Linux):</strong> Lightweight, manual alternative that uses <code>cfinstall.bat</code>/<code>cfinstall.sh</code> (Adobe guide: <a href="https://helpx.adobe.com/coldfusion/using/install-coldfusion-zip.html" target="_blank">Install ColdFusion using zip installer</a>)',
                            '<strong>CommandBox (optional local workflow):</strong> Run <code>box server start</code> in this repo (uses <code>server.json</code> to pull the configured engine)'
                        ],
                        code: {
                            tag: '<!--- Check ColdFusion Version and Environment --->\n<cfset javaVersion = createObject("java","java.lang.System").getProperty("java.version")>\n\n<cfoutput>\n    <h3>ColdFusion Environment Information</h3>\n    <p><strong>Product:</strong> #Server.ColdFusion.ProductName#</p>\n    <p><strong>Version:</strong> #Server.ColdFusion.ProductVersion#</p>\n    <p><strong>Update level:</strong> #Server.ColdFusion.UpdateLevel#</p>\n    <p><strong>Edition:</strong> #Server.ColdFusion.ProductLevel#</p>\n    <p><strong>Java Version:</strong> #javaVersion#</p>\n    <p><strong>OS:</strong> #Server.OS.Name# (#Server.OS.Arch#)</p>\n    <p><strong>Server Name:</strong> #CGI.SERVER_NAME#</p>\n    <p><strong>Server Port:</strong> #CGI.SERVER_PORT#</p>\n</cfoutput>',
                            script: '<!--- Check ColdFusion Version and Environment --->\n<cfscript>\n    javaVersion = createObject("java","java.lang.System").getProperty("java.version");\n\n    writeOutput("<h3>ColdFusion Environment Information</h3>");\n    writeOutput("<p><strong>Product:</strong> " & Server.ColdFusion.ProductName & "</p>");\n    writeOutput("<p><strong>Version:</strong> " & Server.ColdFusion.ProductVersion & "</p>");\n    writeOutput("<p><strong>Update level:</strong> " & Server.ColdFusion.UpdateLevel & "</p>");\n    writeOutput("<p><strong>Edition:</strong> " & Server.ColdFusion.ProductLevel & "</p>");\n    writeOutput("<p><strong>Java Version:</strong> " & javaVersion & "</p>");\n    writeOutput("<p><strong>OS:</strong> " & Server.OS.Name & " (" & Server.OS.Arch & ")</p>");\n    writeOutput("<p><strong>Server Name:</strong> " & CGI.SERVER_NAME & "</p>");\n    writeOutput("<p><strong>Server Port:</strong> " & CGI.SERVER_PORT & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Checking Your ColdFusion Environment (CF 2021+)',
                        tip: 'Adobe documents built-in server variables (Server.ColdFusion, Server.OS) and the ZIP installer workflow; see the linked ZIP installer guide for the step-by-step install prompts and silent install properties.'
                    },
                    {
                        title: 'ZIP Installer (Clean Setup Steps)',
                        content: 'If you want a lightweight install that is repeatable across machines (and easier to script), Adobe provides a ZIP installer driven by <code>cfinstall</code>.',
                        list: [
                            '<strong>Windows prerequisite:</strong> Install VC 2012 Runtime (required for the connector and the htmltopdf package).',
                            '<strong>Run as Administrator:</strong> Sign in as an Administrator before running <code>cfinstall.bat</code>.',
                            '<strong>Run the installer:</strong> Execute <code>cfinstall.bat</code> (Windows) or <code>./cfinstall.sh</code> (macOS/Linux) and follow the prompts.',
                            '<strong>Help:</strong> Run <code>cfinstall.bat help</code> / <code>cfinstall.sh help</code> to see supported options.',
                            '<strong>EULA:</strong> Accept the EULA (required to start the ColdFusion server).',
                            '<strong>Verify:</strong> After install, open ColdFusion Administrator and confirm version/edition on System Information.'
                        ],
                        tip: 'Verified against Adobe “Install ColdFusion using zip installer”.'
                    },
                    {
                        title: 'ColdFusion Administrator',
                        content: 'The Administrator is your control center for ColdFusion configuration.',
                        list: [
                            '<strong>Access URL:</strong> <code>http://127.0.0.1:8500/CFIDE/administrator/</code> (default port)',
                            '<strong>Default Credentials:</strong> admin / (password set during installation)',
                            '<strong>Key sections:</strong><ul class="mb-0"><li><strong>Data Sources:</strong> Configure database connections</li><li><strong>Mappings:</strong> Set up path mappings for includes and components</li><li><strong>Settings:</strong> Configure error handling, caching, and performance</li><li><strong>Security:</strong> Configure security-related settings</li><li><strong>Extensions:</strong> Install and manage extensions</li></ul>',
                            '<strong>Version Differences:</strong> Some features appear in different locations across versions - check version-specific documentation'
                        ],
                        tip: 'Bookmark the Administrator URL and change the default password immediately after installation.'
                    },
                    {
                        title: 'IDE and Editor Setup',
                        content: 'Choose an editor with good ColdFusion support for the best development experience.',
                        list: [
                            '<strong>VS Code:</strong><ul class="mb-0"><li>Install Adobe’s “ColdFusion Builder” extension</li><li>Syntax highlighting, code completion, and debugging support</li><li>Free and cross-platform</li></ul>',
                            '<strong>IntelliJ IDEA:</strong><ul class="mb-0"><li>Install a ColdFusion/CFML plugin</li><li>Strong refactoring and code analysis</li></ul>',
                            '<strong>Eclipse:</strong><ul class="mb-0"><li>Use a ColdFusion/CFML plugin</li><li>Works well for teams already standardized on Eclipse</li></ul>',
                            '<strong>Any editor:</strong><ul class="mb-0"><li>Ensure syntax highlighting for <code>.cfm</code> and <code>.cfc</code></li><li>Use a repeatable run workflow (native server or CommandBox) to test frequently</li></ul>'
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
                        content: 'CommandBox is an optional workflow that can make local development quick and repeatable. It’s especially handy for training, demos, and keeping projects isolated.',
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
                        tip: 'If you prefer a native install, that’s great too—use the full or ZIP installer and rely on the Administrator for configuration. The important thing is having a consistent way to run and test your code.'
                    }
                ],
                tip: 'Pick one setup path (native install or CommandBox) and stick with it while you learn—switching environments too often slows progress.'
            }
        ]
    };
}

/**
 * Module 1: Language Fundamentals
 */
function getModule1Data() {
    return {
        title: 'Language Fundamentals',
        description: 'Variables, Data Types, Functions, and Flow Control',
        versions: ['2021', '2023', '2025'],
        lessons: [
            {
                title: '1. Variables, Data Types, and Scopes',
                content: 'Variables are the foundation of any programming language. ColdFusion provides dynamic typing and multiple variable scopes. Understanding how to declare, assign, and scope variables is essential for effective ColdFusion development.',
                sections: [
                    {
                        title: 'Introduction',
                        content: 'Variables are the foundation of any programming language. In this lesson, you will learn how to work with variables in ColdFusion, including declaration, assignment, scoping, and type handling. This lesson covers everything you need to know about working with variables in ColdFusion 2021, 2023, and 2025.',
                        list: [
                            '<strong>What You\'ll Learn:</strong> How to declare and assign variables, understand variable scopes, work with different data types, and implement best practices for variable naming and type checking',
                            '<strong>Key Topics:</strong> Dynamic typing, variable scopes (Variables, Request, Session, Application, etc.), type coercion, scope resolution, and type checking',
                            '<strong>Best Practices:</strong> Proper naming conventions, explicit scoping, type validation, and null handling',
                            '<strong>Version Considerations:</strong> Understanding differences and gotchas between ColdFusion 2021, 2023, and 2025'
                        ],
                        tip: 'Reference: <a href="https://helpx.adobe.com/coldfusion/developing-applications/the-cfml-programming-language/using-variables-and-data-types.html" target="_blank">Adobe ColdFusion - Variables and Data Types</a> | <a href="https://helpx.adobe.com/coldfusion/cfml-reference/coldfusion-tags/tags-v-w/cfset.html" target="_blank">cfset Tag Reference</a>'
                    },
                    {
                        title: 'Basic Variable Assignment',
                        content: 'Learn how to declare and assign values to variables in both tag and script syntax.',
                        code: {
                            tag: '<!--- Tag Syntax: Basic Variable Assignment --->\n<cfset name = "John Doe">\n<cfset age = 30>\n<cfset salary = 50000.50>\n<cfset isActive = true>\n<cfset hireDate = Now()>\n\n<cfoutput>\n    <p>Name: #name#</p>\n    <p>Age: #age#</p>\n    <p>Salary: #DollarFormat(salary)#</p>\n    <p>Active: #isActive#</p>\n    <p>Hired: #DateFormat(hireDate, "full")#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Basic Variable Assignment --->\n<cfscript>\n    name = "John Doe";\n    age = 30;\n    salary = 50000.50;\n    isActive = true;\n    hireDate = Now();\n    \n    writeOutput("<p>Name: " & name & "</p>");\n    writeOutput("<p>Age: " & age & "</p>");\n    writeOutput("<p>Salary: " & DollarFormat(salary) & "</p>");\n    writeOutput("<p>Active: " & isActive & "</p>");\n    writeOutput("<p>Hired: " & DateFormat(hireDate, "full") & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Basic Variable Assignment (CF 2021+)'
                    },
                    {
                        title: 'Variable Naming Conventions',
                        content: 'Follow best practices for naming variables to improve code readability and maintainability.',
                        list: [
                            '<strong>Use descriptive names:</strong> <code>userName</code> instead of <code>u</code>',
                            '<strong>Use camelCase:</strong> <code>firstName</code>, <code>lastName</code>',
                            '<strong>Boolean variables:</strong> Prefix with <code>is</code>, <code>has</code>, or <code>can</code> (e.g., <code>isActive</code>, <code>hasPermission</code>)',
                            '<strong>Avoid reserved words:</strong> Don\'t use CFML keywords as variable names',
                            '<strong>Be consistent:</strong> Use the same naming style throughout your application'
                        ],
                        code: {
                            tag: '<!--- Good Variable Names --->\n<cfset firstName = "John">\n<cfset lastName = "Doe">\n<cfset isActive = true>\n<cfset hasPermission = false>\n<cfset userCount = 150>\n\n<!--- Bad Variable Names (avoid these) --->\n<cfset x = "John">\n<cfset temp = 150>\n<cfset data = "something">',
                            script: '<!--- Good Variable Names --->\n<cfscript>\n    firstName = "John";\n    lastName = "Doe";\n    isActive = true;\n    hasPermission = false;\n    userCount = 150;\n    \n    // Bad Variable Names (avoid these)\n    // x = "John";\n    // temp = 150;\n    // data = "something";\n</cfscript>'
                        },
                        codeTitle: 'Variable Naming Best Practices (CF 2021+)'
                    },
                    {
                        title: 'Understanding Data Types',
                        content: 'ColdFusion is dynamically typed, but understanding data types helps you write better code.',
                        code: {
                            tag: '<!--- Tag Syntax: Working with Different Data Types --->\n<!--- String --->\n<cfset text = "Hello World">\n<cfset textLength = Len(text)>\n\n<!--- Numeric (Integer) --->\n<cfset count = 42>\n<cfset doubled = count * 2>\n\n<!--- Numeric (Decimal) --->\n<cfset price = 19.99>\n<cfset tax = price * 0.08>\n\n<!--- Boolean --->\n<cfset isLoggedIn = true>\n<cfset canEdit = false>\n\n<!--- Date/Time --->\n<cfset today = Now()>\n<cfset tomorrow = DateAdd("d", 1, today)>\n\n<!--- Array --->\n<cfset colors = ["Red", "Green", "Blue"]>\n<cfset firstColor = colors[1]>\n\n<!--- Struct --->\n<cfset person = {name: "John", age: 30, city: "NYC"}>\n<cfset personName = person.name>\n\n<cfoutput>\n    <p>Text: #text# (Length: #textLength#)</p>\n    <p>Count: #count# (Doubled: #doubled#)</p>\n    <p>Price: #DollarFormat(price)# (Tax: #DollarFormat(tax)#)</p>\n    <p>Logged In: #isLoggedIn#</p>\n    <p>Today: #DateFormat(today, "full")#</p>\n    <p>First Color: #firstColor#</p>\n    <p>Person: #personName#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Working with Different Data Types --->\n<cfscript>\n    // String\n    text = "Hello World";\n    textLength = Len(text);\n    \n    // Numeric (Integer)\n    count = 42;\n    doubled = count * 2;\n    \n    // Numeric (Decimal)\n    price = 19.99;\n    tax = price * 0.08;\n    \n    // Boolean\n    isLoggedIn = true;\n    canEdit = false;\n    \n    // Date/Time\n    today = Now();\n    tomorrow = DateAdd("d", 1, today);\n    \n    // Array\n    colors = ["Red", "Green", "Blue"];\n    firstColor = colors[1];\n    \n    // Struct\n    person = {name: "John", age: 30, city: "NYC"};\n    personName = person.name;\n    \n    writeOutput("<p>Text: " & text & " (Length: " & textLength & ")</p>");\n    writeOutput("<p>Count: " & count & " (Doubled: " & doubled & ")</p>");\n    writeOutput("<p>Price: " & DollarFormat(price) & " (Tax: " & DollarFormat(tax) & ")</p>");\n    writeOutput("<p>Logged In: " & isLoggedIn & "</p>");\n    writeOutput("<p>Today: " & DateFormat(today, "full") & "</p>");\n    writeOutput("<p>First Color: " & firstColor & "</p>");\n    writeOutput("<p>Person: " & personName & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Working with Data Types (CF 2021+)'
                    },
                    {
                        title: 'Variable Scopes - Comprehensive Guide',
                        content: 'ColdFusion has many variable scopes, each with specific purposes and lifecycles. Understanding scopes is critical for proper data management, security, and application architecture. This section covers all ColdFusion scopes in detail.',
                        sections: [
                            {
                                title: 'Introduction to Scopes',
                                content: 'Variable scopes determine where variables are stored, how long they persist, and who can access them. ColdFusion provides multiple scopes for different use cases.',
                                list: [
                                    '<strong>Scope Resolution:</strong> ColdFusion searches scopes in a specific order when a variable name is used without explicit scope prefix',
                                    '<strong>Explicit Scoping:</strong> Always use explicit scope prefixes (e.g., <code>Variables.name</code> instead of just <code>name</code>) for clarity and to avoid conflicts',
                                    '<strong>Scope Lifecycle:</strong> Each scope has a different lifetime - from a single function call to the entire server lifetime',
                                    '<strong>Security:</strong> Understanding scopes is crucial for security - some scopes are accessible across requests or users',
                                    '<strong>Performance:</strong> Choosing the right scope affects memory usage and application performance'
                                ],
                                tip: 'Best Practice: Always use explicit scope prefixes. It makes code more readable, prevents bugs, and improves performance by avoiding scope searches.'
                            },
                            {
                                title: 'Variables Scope (Default/Request-Level)',
                                content: 'The Variables scope is the default scope for variables created in a request. It persists for the duration of a single HTTP request.',
                                list: [
                                    '<strong>Lifetime:</strong> Single HTTP request - cleared when request completes',
                                    '<strong>Access:</strong> Available throughout the current request, including included files and custom tags',
                                    '<strong>Default Behavior:</strong> When you write <code>&lt;cfset name = "John"&gt;</code>, it goes into Variables scope',
                                    '<strong>Use Cases:</strong> Temporary variables, calculations, request-specific data',
                                    '<strong>Best Practice:</strong> Use for request-level data that doesn\'t need to persist beyond the current request',
                                    '<strong>Gotcha:</strong> Variables scope is shared with included files and custom tags, which can cause naming conflicts'
                                ],
                                code: {
                                    tag: '<!--- Variables Scope Examples --->\n<!--- Explicit Variables scope --->\n<cfset Variables.userName = "John Doe">\n<cfset Variables.cartTotal = 0>\n\n<!--- Implicit Variables scope (default) --->\n<cfset name = "John Doe">\n<cfset cartTotal = 0>\n\n<!--- Both are equivalent --->\n<cfoutput>\n    <p>Explicit: #Variables.userName#</p>\n    <p>Implicit: #name#</p>\n    <p>Same value: #(Variables.userName EQ name)#</p>\n</cfoutput>',
                                    script: '// Variables Scope Examples\n// Explicit Variables scope\nVariables.userName = "John Doe";\nVariables.cartTotal = 0;\n\n// Implicit Variables scope (default)\nname = "John Doe";\ncartTotal = 0;\n\n// Both are equivalent\nwriteOutput("<p>Explicit: " & Variables.userName & "</p>");\nwriteOutput("<p>Implicit: " & name & "</p>");\nwriteOutput("<p>Same value: " & (Variables.userName == name) & "</p>");'
                                },
                                codeTitle: 'Variables Scope (CF 2021+)'
                            },
                            {
                                title: 'Request Scope',
                                content: 'Request scope persists throughout the entire request lifecycle, including all included files, custom tags, and components called during the request.',
                                list: [
                                    '<strong>Lifetime:</strong> Entire HTTP request lifecycle (including includes, custom tags, CFCs)',
                                    '<strong>Access:</strong> Available to all code executed during the request',
                                    '<strong>Use Cases:</strong> Passing data between included files, custom tags, and components',
                                    '<strong>Best Practice:</strong> Use for data that needs to be shared across multiple files/components in a single request',
                                    '<strong>Gotcha:</strong> Request scope persists through includes and custom tags, unlike Variables scope which can be shadowed'
                                ],
                                code: {
                                    tag: '<!--- Request Scope Example --->\n<!--- Set in main page --->\n<cfset Request.requestId = CreateUUID()>\n<cfset Request.startTime = Now()>\n<cfset Request.userContext = {userId: 123, role: "admin"}>\n\n<!--- Access in included file or custom tag --->\n<cfinclude template="includes/header.cfm">\n\n<!--- In header.cfm, you can access: --->\n<!--- #Request.requestId# --->\n<!--- #Request.startTime# --->\n<!--- #Request.userContext.userId# --->',
                                    script: '// Request Scope Example\n// Set in main page\nRequest.requestId = CreateUUID();\nRequest.startTime = Now();\nRequest.userContext = {userId: 123, role: "admin"};\n\n// Access in included file or custom tag\ninclude "includes/header.cfm";\n\n// In header.cfm, you can access:\n// Request.requestId\n// Request.startTime\n// Request.userContext.userId'
                                },
                                codeTitle: 'Request Scope (CF 2021+)'
                            },
                            {
                                title: 'Session Scope',
                                content: 'Session scope stores data for a specific user session. It persists across multiple requests from the same user until the session times out or is invalidated.',
                                list: [
                                    '<strong>Lifetime:</strong> User session (default: 20 minutes of inactivity, configurable)',
                                    '<strong>Access:</strong> Only accessible to requests from the same user session',
                                    '<strong>Requirement:</strong> Session management must be enabled in Application.cfc (<code>this.sessionManagement = true</code>)',
                                    '<strong>Use Cases:</strong> User authentication, shopping carts, user preferences, temporary user data',
                                    '<strong>Best Practice:</strong> Store minimal data in Session scope - only what\'s needed for the user session',
                                    '<strong>Security:</strong> Never store sensitive data like passwords in Session scope',
                                    '<strong>Gotcha:</strong> Session data is stored in server memory - can cause memory issues with many concurrent users'
                                ],
                                code: {
                                    tag: '<!--- Session Scope Example --->\n<!--- Enable sessions in Application.cfc --->\n<!--- this.sessionManagement = true --->\n\n<!--- Set session data --->\n<cfset Session.userId = 123>\n<cfset Session.userName = "john.doe">\n<cfset Session.loginTime = Now()>\n<cfset Session.cart = []>\n\n<!--- Access session data --->\n<cfoutput>\n    <p>Welcome, #Session.userName#!</p>\n    <p>Logged in: #DateFormat(Session.loginTime, "full")#</p>\n    <p>Cart items: #ArrayLen(Session.cart)#</p>\n</cfoutput>\n\n<!--- Clear session on logout (CF 10+) --->\n<cfset sessionInvalidate()>',
                                    script: '// Session Scope Example\n// Enable sessions in Application.cfc\n// this.sessionManagement = true\n\n// Set session data\nSession.userId = 123;\nSession.userName = "john.doe";\nSession.loginTime = Now();\nSession.cart = [];\n\n// Access session data\nwriteOutput("<p>Welcome, " & Session.userName & "!</p>");\nwriteOutput("<p>Logged in: " & DateFormat(Session.loginTime, "full") & "</p>");\nwriteOutput("<p>Cart items: " & ArrayLen(Session.cart) & "</p>");\n\n// Clear session on logout (CF 10+)\nsessionInvalidate();'
                                },
                                codeTitle: 'Session Scope (CF 2021+)'
                            },
                            {
                                title: 'Application Scope',
                                content: 'Application scope stores data shared across all users and requests for the entire application. It persists until the application is restarted or times out.',
                                list: [
                                    '<strong>Lifetime:</strong> Application lifecycle (until restart or timeout)',
                                    '<strong>Access:</strong> Shared across all users and requests',
                                    '<strong>Initialization:</strong> Typically initialized in <code>onApplicationStart()</code> in Application.cfc',
                                    '<strong>Use Cases:</strong> Application configuration, cached data, shared counters, database connection info (if not using datasource)',
                                    '<strong>Best Practice:</strong> Initialize in onApplicationStart(), use locks when writing to prevent race conditions',
                                    '<strong>Gotcha:</strong> Application scope is shared - changes affect all users. Use locks for thread safety when modifying',
                                    '<strong>Security:</strong> Never store user-specific or sensitive data in Application scope'
                                ],
                                code: {
                                    tag: '<!--- Application Scope Example --->\n<!--- In Application.cfc onApplicationStart() --->\n<cffunction name="onApplicationStart" returntype="boolean">\n    <cfset Application.appName = "My Application">\n    <cfset Application.startTime = Now()>\n    <cfset Application.counter = 0>\n    <cfset Application.config = {\n        maxUsers: 1000,\n        maintenanceMode: false\n    }>\n    <cfreturn true>\n</cffunction>\n\n<!--- Access application data (read-only is safe) --->\n<cfoutput>\n    <p>App: #Application.appName#</p>\n    <p>Started: #DateFormat(Application.startTime, "full")#</p>\n</cfoutput>\n\n<!--- Modify with lock (thread-safe) --->\n<cflock scope="Application" timeout="10" type="exclusive">\n    <cfset Application.counter++>\n</cflock>',
                                    script: '// Application Scope Example\n// In Application.cfc onApplicationStart()\nfunction onApplicationStart() {\n    Application.appName = "My Application";\n    Application.startTime = Now();\n    Application.counter = 0;\n    Application.config = {\n        maxUsers: 1000,\n        maintenanceMode: false\n    };\n    return true;\n}\n\n// Access application data (read-only is safe)\nwriteOutput("<p>App: " & Application.appName & "</p>");\nwriteOutput("<p>Started: " & DateFormat(Application.startTime, "full") & "</p>");\n\n// Modify with lock (thread-safe)\nlock scope="Application" timeout="10" type="exclusive" {\n    Application.counter++;\n}'
                                },
                                codeTitle: 'Application Scope (CF 2021+)'
                            },
                            {
                                title: 'Server Scope',
                                content: 'Server scope stores data shared across all applications on the same ColdFusion server instance. It persists until the server is restarted.',
                                list: [
                                    '<strong>Lifetime:</strong> Server instance lifetime (until server restart)',
                                    '<strong>Access:</strong> Shared across all applications on the server',
                                    '<strong>Use Cases:</strong> Server-wide configuration, shared resources, server-level counters',
                                    '<strong>Best Practice:</strong> Use sparingly - only for truly server-wide data',
                                    '<strong>Gotcha:</strong> Server scope is shared across ALL applications - use with extreme caution',
                                    '<strong>Security:</strong> Never store application-specific or user data in Server scope'
                                ],
                                code: {
                                    tag: '<!--- Server Scope Example --->\n<!--- Initialize once (typically in a startup script) --->\n<cfif NOT StructKeyExists(Server, "initialized")>\n    <cfset Server.startTime = Now()>\n    <cfset Server.instanceId = CreateUUID()>\n    <cfset Server.totalRequests = 0>\n    <cfset Server.initialized = true>\n</cfif>\n\n<!--- Access server data --->\n<cfoutput>\n    <p>Server ID: #Server.instanceId#</p>\n    <p>Uptime: #DateDiff("h", Server.startTime, Now())# hours</p>\n</cfoutput>',
                                    script: '// Server Scope Example\n// Initialize once (typically in a startup script)\nif (!StructKeyExists(Server, "initialized")) {\n    Server.startTime = Now();\n    Server.instanceId = CreateUUID();\n    Server.totalRequests = 0;\n    Server.initialized = true;\n}\n\n// Access server data\nwriteOutput("<p>Server ID: " & Server.instanceId & "</p>");\nwriteOutput("<p>Uptime: " & DateDiff("h", Server.startTime, Now()) & " hours</p>");'
                                },
                                codeTitle: 'Server Scope (CF 2021+)'
                            },
                            {
                                title: 'Form Scope',
                                content: 'Form scope contains data submitted via HTTP POST from HTML forms. It\'s read-only and automatically populated by ColdFusion.',
                                list: [
                                    '<strong>Lifetime:</strong> Single request (only when form is submitted via POST)',
                                    '<strong>Access:</strong> Read-only - populated automatically from form submission',
                                    '<strong>Use Cases:</strong> Processing form submissions, user input',
                                    '<strong>Best Practice:</strong> Always validate and sanitize Form data before use',
                                    '<strong>Security:</strong> Never trust Form data - always validate, sanitize, and use parameterized queries',
                                    '<strong>Gotcha:</strong> Form scope only exists for POST requests with <code>application/x-www-form-urlencoded</code> or <code>multipart/form-data</code> content type'
                                ],
                                code: {
                                    tag: '<!--- Form Scope Example --->\n<!--- HTML form submits to this page --->\n<!--- <form method="post" action="process.cfm"> --->\n<!---     <input type="text" name="username"> --->\n<!---     <input type="email" name="email"> --->\n<!---     <input type="submit" name="submit"> --->\n<!--- </form> --->\n\n<!--- Process form data --->\n<cfif StructKeyExists(Form, "submit")>\n    <!--- Validate and sanitize --->\n    <cfparam name="Form.username" type="string" default="">\n    <cfparam name="Form.email" type="string" default="">\n    \n    <!--- Use form data --->\n    <cfset username = Trim(Form.username)>\n    <cfset email = Trim(Form.email)>\n    \n    <!--- Process... --->\n    <cfoutput>\n        <p>Username: #username#</p>\n        <p>Email: #email#</p>\n    </cfoutput>\n</cfif>',
                                    script: '// Form Scope Example\n// HTML form submits to this page\n// <form method="post" action="process.cfm">\n//     <input type="text" name="username">\n//     <input type="email" name="email">\n//     <input type="submit" name="submit">\n// </form>\n\n// Process form data\nif (StructKeyExists(Form, "submit")) {\n    // Validate and sanitize\n    param name="Form.username" type="string" default="";\n    param name="Form.email" type="string" default="";\n    \n    // Use form data\n    username = Trim(Form.username);\n    email = Trim(Form.email);\n    \n    // Process...\n    writeOutput("<p>Username: " & username & "</p>");\n    writeOutput("<p>Email: " & email & "</p>");\n}'
                                },
                                codeTitle: 'Form Scope (CF 2021+)'
                            },
                            {
                                title: 'URL Scope',
                                content: 'URL scope contains query string parameters from the HTTP request. It\'s read-only and automatically populated by ColdFusion.',
                                list: [
                                    '<strong>Lifetime:</strong> Single request',
                                    '<strong>Access:</strong> Read-only - populated automatically from query string',
                                    '<strong>Use Cases:</strong> Page parameters, filters, pagination, REST API parameters',
                                    '<strong>Best Practice:</strong> Always validate and sanitize URL parameters - they can be manipulated by users',
                                    '<strong>Security:</strong> Never trust URL parameters - validate types, ranges, and sanitize before use',
                                    '<strong>Gotcha:</strong> URL parameters are visible in browser address bar and can be bookmarked/shared'
                                ],
                                code: {
                                    tag: '<!--- URL Scope Example --->\n<!--- URL: page.cfm?id=123&page=2&filter=active --->\n\n<!--- Validate and use URL parameters --->\n<cfparam name="URL.id" type="numeric" default="0">\n<cfparam name="URL.page" type="numeric" default="1">\n<cfparam name="URL.filter" type="string" default="">\n\n<!--- Validate ranges --->\n<cfif URL.page LT 1>\n    <cfset URL.page = 1>\n</cfif>\n\n<!--- Use in query (with parameterization) --->\n<cfquery name="qData" datasource="mydb">\n    SELECT * FROM products\n    WHERE id = <cfqueryparam value="#URL.id#" cfsqltype="cf_sql_integer">\n    AND status = <cfqueryparam value="#URL.filter#" cfsqltype="cf_sql_varchar">\n    LIMIT 10 OFFSET <cfqueryparam value="#(URL.page - 1) * 10#" cfsqltype="cf_sql_integer">\n</cfquery>',
                                    script: '// URL Scope Example\n// URL: page.cfm?id=123&page=2&filter=active\n\n// Validate and use URL parameters\nparam name="URL.id" type="numeric" default="0";\nparam name="URL.page" type="numeric" default="1";\nparam name="URL.filter" type="string" default="";\n\n// Validate ranges\nif (URL.page < 1) {\n    URL.page = 1;\n}\n\n// Use in query (with parameterization)\nqData = queryExecute(\n    "SELECT * FROM products WHERE id = :id AND status = :filter LIMIT 10 OFFSET :offset",\n    {\n        id: { value: URL.id, cfsqltype: "cf_sql_integer" },\n        filter: { value: URL.filter, cfsqltype: "cf_sql_varchar" },\n        offset: { value: (URL.page - 1) * 10, cfsqltype: "cf_sql_integer" }\n    },\n    {datasource: "mydb"}\n);'
                                },
                                codeTitle: 'URL Scope (CF 2021+)'
                            },
                            {
                                title: 'CGI Scope',
                                content: 'CGI scope contains server environment variables and HTTP request headers. It\'s read-only and automatically populated by the web server.',
                                list: [
                                    '<strong>Lifetime:</strong> Single request',
                                    '<strong>Access:</strong> Read-only - populated by web server',
                                    '<strong>Use Cases:</strong> Request information, server details, client information, debugging',
                                    '<strong>Common Variables:</strong> <code>CGI.REQUEST_METHOD</code>, <code>CGI.QUERY_STRING</code>, <code>CGI.HTTP_USER_AGENT</code>, <code>CGI.REMOTE_ADDR</code>, <code>CGI.SERVER_NAME</code>',
                                    '<strong>Best Practice:</strong> Use for logging, debugging, and request routing',
                                    '<strong>Security:</strong> Be cautious with <code>CGI.REMOTE_ADDR</code> - can be spoofed via proxies. Don\'t rely on it for security'
                                ],
                                code: {
                                    tag: '<!--- CGI Scope Example --->\n<cfoutput>\n    <h3>Request Information</h3>\n    <p>Method: #CGI.REQUEST_METHOD#</p>\n    <p>URI: #CGI.REQUEST_URI#</p>\n    <p>Query String: #CGI.QUERY_STRING#</p>\n    <p>User Agent: #CGI.HTTP_USER_AGENT#</p>\n    <p>Remote IP: #CGI.REMOTE_ADDR#</p>\n    <p>Server: #CGI.SERVER_NAME#</p>\n    <p>Port: #CGI.SERVER_PORT#</p>\n</cfoutput>\n\n<!--- Use for conditional logic --->\n<cfif CGI.REQUEST_METHOD EQ "POST">\n    <!--- Handle POST request --->\n<cfelseif CGI.REQUEST_METHOD EQ "GET">\n    <!--- Handle GET request --->\n</cfif>',
                                    script: '// CGI Scope Example\nwriteOutput("<h3>Request Information</h3>");\nwriteOutput("<p>Method: " & CGI.REQUEST_METHOD & "</p>");\nwriteOutput("<p>URI: " & CGI.REQUEST_URI & "</p>");\nwriteOutput("<p>Query String: " & CGI.QUERY_STRING & "</p>");\nwriteOutput("<p>User Agent: " & CGI.HTTP_USER_AGENT & "</p>");\nwriteOutput("<p>Remote IP: " & CGI.REMOTE_ADDR & "</p>");\nwriteOutput("<p>Server: " & CGI.SERVER_NAME & "</p>");\nwriteOutput("<p>Port: " & CGI.SERVER_PORT & "</p>");\n\n// Use for conditional logic\nif (CGI.REQUEST_METHOD == "POST") {\n    // Handle POST request\n} else if (CGI.REQUEST_METHOD == "GET") {\n    // Handle GET request\n}'
                                },
                                codeTitle: 'CGI Scope (CF 2021+)'
                            },
                            {
                                title: 'Cookie Scope',
                                content: 'Cookie scope contains HTTP cookies sent by the browser. You can read existing cookies and set new ones.',
                                list: [
                                    '<strong>Lifetime:</strong> Per request (read), browser-controlled (write)',
                                    '<strong>Access:</strong> Read cookies sent by browser, write cookies to send to browser',
                                    '<strong>Use Cases:</strong> User preferences, tracking, authentication tokens',
                                    '<strong>Best Practice:</strong> Use HttpOnly and Secure flags for sensitive cookies, set appropriate expiration',
                                    '<strong>Security:</strong> Never store sensitive data in cookies - they can be read/modified by users',
                                    '<strong>Gotcha:</strong> Cookies are sent with every request - keep them small to reduce bandwidth'
                                ],
                                code: {
                                    tag: '<!--- Cookie Scope Example --->\n<!--- Read existing cookie --->\n<cfif StructKeyExists(Cookie, "userPref")>\n    <cfset userPreference = Cookie.userPref>\n<cfelse>\n    <cfset userPreference = "default">\n</cfif>\n\n<!--- Set new cookie --->\n<cfcookie name="userPref" value="dark" expires="30" httponly="yes" secure="no" samesite="Lax">\n\n<!--- Access cookie --->\n<cfoutput>\n    <p>User Preference: #Cookie.userPref#</p>\n</cfoutput>',
                                    script: '// Cookie Scope Example\n// Read existing cookie\nif (StructKeyExists(Cookie, "userPref")) {\n    userPreference = Cookie.userPref;\n} else {\n    userPreference = "default";\n}\n\n// Set new cookie\ncfcookie name="userPref" value="dark" expires="30" httponly="yes" secure="no" samesite="Lax";\n\n// Access cookie\nwriteOutput("<p>User Preference: " & Cookie.userPref & "</p>");'
                                },
                                codeTitle: 'Cookie Scope (CF 2021+)'
                            },
                            {
                                title: 'Arguments Scope (Function Parameters)',
                                content: 'Arguments scope contains parameters passed to a function. It\'s automatically created for each function call.',
                                list: [
                                    '<strong>Lifetime:</strong> Function execution',
                                    '<strong>Access:</strong> Within the function where arguments are defined',
                                    '<strong>Use Cases:</strong> Function parameters, component method arguments',
                                    '<strong>Best Practice:</strong> Use <code>cfargument</code> or <code>param</code> to define arguments with types and defaults',
                                    '<strong>Gotcha:</strong> Arguments scope is function-local - variables with same name in outer scope are shadowed'
                                ],
                                code: {
                                    tag: '<!--- Arguments Scope Example --->\n<cffunction name="calculateTotal" returntype="numeric">\n    <cfargument name="price" type="numeric" required="true">\n    <cfargument name="quantity" type="numeric" default="1">\n    <cfargument name="discount" type="numeric" default="0">\n    \n    <!--- Access via Arguments scope --->\n    <cfset total = Arguments.price * Arguments.quantity>\n    <cfset total = total - (total * Arguments.discount / 100)>\n    \n    <cfreturn total>\n</cffunction>\n\n<!--- Call function --->\n<cfset result = calculateTotal(price=100, quantity=2, discount=10)>\n<cfoutput>Total: #result#</cfoutput>',
                                    script: '// Arguments Scope Example\nfunction calculateTotal(required numeric price, numeric quantity = 1, numeric discount = 0) {\n    // Access via Arguments scope\n    var total = Arguments.price * Arguments.quantity;\n    total = total - (total * Arguments.discount / 100);\n    \n    return total;\n}\n\n// Call function\nresult = calculateTotal(price=100, quantity=2, discount=10);\nwriteOutput("Total: " & result);'
                                },
                                codeTitle: 'Arguments Scope (CF 2021+)'
                            },
                            {
                                title: 'This Scope (Component Instance)',
                                content: 'This scope refers to the current component instance. It\'s used to access component properties and methods.',
                                list: [
                                    '<strong>Lifetime:</strong> Component instance lifetime',
                                    '<strong>Access:</strong> Within component methods',
                                    '<strong>Use Cases:</strong> Accessing component properties, calling other component methods',
                                    '<strong>Best Practice:</strong> Use <code>this.propertyName</code> for public properties, <code>variables.propertyName</code> for private',
                                    '<strong>Gotcha:</strong> <code>this</code> scope is public and accessible from outside the component'
                                ],
                                code: {
                                    tag: '<!--- This Scope Example --->\n<cfcomponent>\n    <cfset this.name = "UserService">\n    <cfset this.version = "1.0">\n    <cfset variables.privateData = "hidden">\n    \n    <cffunction name="getInfo" returntype="struct">\n        <cfreturn {\n            name: this.name,\n            version: this.version\n        }>\n    </cffunction>\n</cfcomponent>',
                                    script: '// This Scope Example\ncomponent {\n    this.name = "UserService";\n    this.version = "1.0";\n    variables.privateData = "hidden";\n    \n    function getInfo() {\n        return {\n            name: this.name,\n            version: this.version\n        };\n    }\n}'
                                },
                                codeTitle: 'This Scope (CF 2021+)'
                            },
                            {
                                title: 'Local Scope (CFScript Function Variables)',
                                content: 'Local scope is used in CFScript to create function-local variables that don\'t pollute outer scopes.',
                                list: [
                                    '<strong>Lifetime:</strong> Function execution',
                                    '<strong>Access:</strong> Within the function where declared',
                                    '<strong>Use Cases:</strong> Temporary variables in CFScript functions',
                                    '<strong>Best Practice:</strong> Always use <code>var</code> or <code>local.</code> prefix in CFScript functions to avoid scope pollution',
                                    '<strong>Gotcha:</strong> In CFScript, variables without <code>var</code> keyword go to Variables scope, which can cause bugs'
                                ],
                                code: {
                                    tag: '<!--- Local Scope in CFScript --->\n<cfscript>\n    function processData(data) {\n        // Use var for local variables\n        var processed = [];\n        var i = 0;\n        \n        // Or use local. prefix\n        local.temp = "";\n        \n        for (i = 1; i <= ArrayLen(data); i++) {\n            local.temp = data[i] & " processed";\n            ArrayAppend(processed, local.temp);\n        }\n        \n        return processed;\n    }\n</cfscript>',
                                    script: '// Local Scope in CFScript\nfunction processData(data) {\n    // Use var for local variables\n    var processed = [];\n    var i = 0;\n    \n    // Or use local. prefix\n    local.temp = "";\n    \n    for (i = 1; i <= ArrayLen(data); i++) {\n        local.temp = data[i] & " processed";\n        ArrayAppend(processed, local.temp);\n    }\n    \n    return processed;\n}'
                                },
                                codeTitle: 'Local Scope (CF 2021+)'
                            },
                            {
                                title: 'Scope Resolution Order',
                                content: 'When a variable is referenced without an explicit scope prefix, ColdFusion searches scopes in a specific order. Understanding this order is crucial for avoiding bugs.',
                                list: [
                                    '<strong>Important distinction:</strong> <em>Variables</em> is the default scope for variables you create with <code>cfset</code>/<code>cfparam</code> on a page, but it is <em>not</em> the first scope searched when evaluating an unscoped variable reference.',
                                    '<strong>Search Order:</strong> Local (function-local), Arguments, Thread local (threads only), Query (query loops), Thread, Variables, CGI, Cffile, URL, Form, Cookie, Client',
                                    '<strong>Best Practice:</strong> Always use explicit scope prefixes to avoid ambiguity and improve performance',
                                    '<strong>Performance:</strong> Explicit scoping is faster because ColdFusion doesn\'t need to search multiple scopes',
                                    '<strong>Gotcha:</strong> If a variable name exists in multiple scopes, ColdFusion uses the first one found in the search order'
                                ],
                                code: {
                                    tag: '<!--- Scope Resolution Example --->\n<!--- BAD: Ambiguous - which scope? --->\n<cfset name = "John">\n<cfoutput>#name#</cfoutput>\n\n<!--- GOOD: Explicit scope --->\n<cfset Variables.name = "John">\n<cfset Session.name = "Jane">\n<cfoutput>\n    Variables: #Variables.name#<br>\n    Session: #Session.name#\n</cfoutput>',
                                    script: '// Scope Resolution Example\n// BAD: Ambiguous - which scope?\nname = "John";\nwriteOutput(name);\n\n// GOOD: Explicit scope\nVariables.name = "John";\nSession.name = "Jane";\nwriteOutput("Variables: " & Variables.name & "<br>");\nwriteOutput("Session: " & Session.name);'
                                },
                                codeTitle: 'Scope Resolution (CF 2021+)'
                            },
                            {
                                title: 'Best Practices & Common Mistakes',
                                list: [
                                    '<strong>Always Use Explicit Scoping:</strong> Write <code>Variables.name</code> instead of <code>name</code> for clarity and performance',
                                    '<strong>Choose the Right Scope:</strong> Use the narrowest scope possible - Variables for request data, Session for user data, Application for shared data',
                                    '<strong>Lock Shared Scopes:</strong> Always use <code>cflock</code> when writing to Application or Server scope to prevent race conditions',
                                    '<strong>Validate Input Scopes:</strong> Always validate and sanitize Form, URL, and Cookie data before use',
                                    '<strong>Don\'t Store Sensitive Data:</strong> Never store passwords, credit cards, or other sensitive data in Session, Application, or Server scope',
                                    '<strong>Minimize Session Data:</strong> Keep Session scope small - it\'s stored in memory for each user',
                                    '<strong>Use Request for Cross-Component Data:</strong> Use Request scope to pass data between components in the same request',
                                    '<strong>Common Mistake:</strong> ❌ Using Variables scope for data that needs to persist - use Session or Application instead',
                                    '<strong>Common Mistake:</strong> ❌ Not locking Application scope writes - can cause data corruption',
                                    '<strong>Common Mistake:</strong> ❌ Trusting Form/URL data without validation - security risk'
                                ],
                                tip: 'Remember: Explicit scoping is not just a best practice - it\'s essential for maintainable, secure, and performant ColdFusion applications.'
                            }
                        ]
                    },
                    {
                        title: 'Type Checking and Conversion',
                        content: 'Learn how to check variable types and convert between different data types. Understanding type checking and conversion is essential for robust applications, especially when handling user input or data from external sources.',
                        code: {
                            tag: '<!--- Tag Syntax: Type Checking and Conversion --->\n<cfset value1 = "123">\n<cfset value2 = 456>\n<cfset value3 = "45.67">\n\n<!--- Check variable types --->\n<cfset type1 = IsNumeric(value1)>\n<cfset type2 = IsNumeric(value2)>\n<cfset type3 = IsString(value1)>\n<cfset type4 = IsDate(value1)>\n\n<!--- Type conversion --->\n<cfset numFromString = Val(value1)>\n<cfset stringFromNum = ToString(value2)>\n<cfset decimalFromString = Val(value3)>\n\n<!--- Using cfparam for type enforcement --->\n<cfparam name="age" type="numeric" default="0">\n<cfparam name="name" type="string" default="">\n<cfparam name="isActive" type="boolean" default="false">\n\n<cfoutput>\n    <p>Value1 ("123") is numeric: #type1#</p>\n    <p>Value2 (456) is numeric: #type2#</p>\n    <p>Value1 is string: #type3#</p>\n    <p>Converted: #numFromString# (type: #TypeOf(numFromString)#)</p>\n    <p>String from number: #stringFromNum#</p>\n    <p>Decimal: #decimalFromString#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Type Checking and Conversion --->\n<cfscript>\n    value1 = "123";\n    value2 = 456;\n    value3 = "45.67";\n    \n    // Check variable types\n    type1 = IsNumeric(value1);\n    type2 = IsNumeric(value2);\n    type3 = IsString(value1);\n    type4 = IsDate(value1);\n    \n    // Type conversion\n    numFromString = Val(value1);\n    stringFromNum = ToString(value2);\n    decimalFromString = Val(value3);\n    \n    // Using param for type enforcement\n    param name="age" type="numeric" default="0";\n    param name="name" type="string" default="";\n    param name="isActive" type="boolean" default="false";\n    \n    writeOutput("<p>Value1 (\"123\") is numeric: " & type1 & "</p>");\n    writeOutput("<p>Value2 (456) is numeric: " & type2 & "</p>");\n    writeOutput("<p>Value1 is string: " & type3 & "</p>");\n    writeOutput("<p>Converted: " & numFromString & " (type: " & TypeOf(numFromString) & ")</p>");\n    writeOutput("<p>String from number: " & stringFromNum & "</p>");\n    writeOutput("<p>Decimal: " & decimalFromString & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Type Checking and Conversion (CF 2021+)'
                    }
                ]
            },
            {
                title: '2. Expressions and Operators',
                content: 'ColdFusion supports a wide range of operators for mathematical, logical, and string operations. Mastering operators is essential for building complex expressions and logic.',
                sections: [
                    {
                        title: 'Mathematical Operators',
                        content: 'Perform basic and advanced mathematical operations.',
                        code: {
                            tag: '<!--- Tag Syntax: Mathematical Operators --->\n<cfset a = 10>\n<cfset b = 3>\n<cfset c = 2>\n\n<!--- Basic operations --->\n<cfset sum = a + b>\n<cfset difference = a - b>\n<cfset product = a * b>\n<cfset quotient = a / b>\n<cfset remainder = a MOD b>\n<cfset power = a ^ c>\n\n<!--- Compound assignment --->\n<cfset total = 100>\n<cfset total = total + 50>\n<cfset total = total - 25>\n<cfset total = total * 2>\n<cfset total = total / 5>\n\n<!--- Increment and decrement --->\n<cfset counter = 0>\n<cfset counter++>\n<cfset counter++>\n<cfset counter-->\n\n<cfoutput>\n    <h3>Mathematical Operations</h3>\n    <p>a = #a#, b = #b#, c = #c#</p>\n    <p>Sum: #a# + #b# = #sum#</p>\n    <p>Difference: #a# - #b# = #difference#</p>\n    <p>Product: #a# * #b# = #product#</p>\n    <p>Quotient: #a# / #b# = #quotient#</p>\n    <p>Remainder: #a# MOD #b# = #remainder#</p>\n    <p>Power: #a# ^ #c# = #power#</p>\n    <p>Counter: #counter#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Mathematical Operators --->\n<cfscript>\n    a = 10;\n    b = 3;\n    c = 2;\n    \n    // Basic operations\n    sum = a + b;\n    difference = a - b;\n    product = a * b;\n    quotient = a / b;\n    remainder = a MOD b;\n    power = a ^ c;\n    \n    // Compound assignment\n    total = 100;\n    total = total + 50;\n    total = total - 25;\n    total = total * 2;\n    total = total / 5;\n    \n    // Increment and decrement\n    counter = 0;\n    counter++;\n    counter++;\n    counter--;\n    \n    writeOutput("<h3>Mathematical Operations</h3>");\n    writeOutput("<p>a = " & a & ", b = " & b & ", c = " & c & "</p>");\n    writeOutput("<p>Sum: " & a & " + " & b & " = " & sum & "</p>");\n    writeOutput("<p>Difference: " & a & " - " & b & " = " & difference & "</p>");\n    writeOutput("<p>Product: " & a & " * " & b & " = " & product & "</p>");\n    writeOutput("<p>Quotient: " & a & " / " & b & " = " & quotient & "</p>");\n    writeOutput("<p>Remainder: " & a & " MOD " & b & " = " & remainder & "</p>");\n    writeOutput("<p>Power: " & a & " ^ " & c & " = " & power & "</p>");\n    writeOutput("<p>Counter: " & counter & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Mathematical Operations (CF 2021+)'
                    },
                    {
                        title: 'Comparison Operators',
                        content: 'Compare values using various comparison operators.',
                        code: {
                            tag: '<!--- Tag Syntax: Comparison Operators --->\n<cfset x = 10>\n<cfset y = 20>\n<cfset z = 10>\n<cfset name1 = "John">\n<cfset name2 = "Jane">\n\n<!--- Equality operators --->\n<cfif x EQ z>\n    <cfset result1 = "x equals z">\n</cfif>\n\n<cfif x NEQ y>\n    <cfset result2 = "x does not equal y">\n</cfif>\n\n<!--- Comparison operators --->\n<cfif x GT y>\n    <cfset result3 = "x is greater than y">\n<cfelseif x LT y>\n    <cfset result3 = "x is less than y">\n</cfif>\n\n<cfif x GTE z>\n    <cfset result4 = "x is greater than or equal to z">\n</cfif>\n\n<cfif x LTE y>\n    <cfset result5 = "x is less than or equal to y">\n</cfif>\n\n<!--- String comparison --->\n<cfif name1 EQ name2>\n    <cfset result6 = "Names are equal">\n<cfelse>\n    <cfset result6 = "Names are different">\n</cfif>\n\n<cfoutput>\n    <h3>Comparison Results</h3>\n    <p>#result1#</p>\n    <p>#result2#</p>\n    <p>#result3#</p>\n    <p>#result4#</p>\n    <p>#result5#</p>\n    <p>#result6#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Comparison Operators --->\n<cfscript>\n    x = 10;\n    y = 20;\n    z = 10;\n    name1 = "John";\n    name2 = "Jane";\n    \n    // Equality operators\n    if (x == z) {\n        result1 = "x equals z";\n    }\n    \n    if (x != y) {\n        result2 = "x does not equal y";\n    }\n    \n    // Comparison operators\n    if (x > y) {\n        result3 = "x is greater than y";\n    } else if (x < y) {\n        result3 = "x is less than y";\n    }\n    \n    if (x >= z) {\n        result4 = "x is greater than or equal to z";\n    }\n    \n    if (x <= y) {\n        result5 = "x is less than or equal to y";\n    }\n    \n    // String comparison\n    if (name1 == name2) {\n        result6 = "Names are equal";\n    } else {\n        result6 = "Names are different";\n    }\n    \n    writeOutput("<h3>Comparison Results</h3>");\n    writeOutput("<p>" & result1 & "</p>");\n    writeOutput("<p>" & result2 & "</p>");\n    writeOutput("<p>" & result3 & "</p>");\n    writeOutput("<p>" & result4 & "</p>");\n    writeOutput("<p>" & result5 & "</p>");\n    writeOutput("<p>" & result6 & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Comparison Operators (CF 2021+)'
                    },
                    {
                        title: 'Logical Operators',
                        content: 'Combine conditions using logical operators (AND, OR, NOT).',
                        code: {
                            tag: '<!--- Tag Syntax: Logical Operators --->\n<cfset age = 25>\n<cfset hasLicense = true>\n<cfset hasInsurance = false>\n<cfset isWeekend = false>\n\n<!--- AND operator --->\n<cfif age GTE 18 AND hasLicense>\n    <cfset canDrive = true>\n<cfelse>\n    <cfset canDrive = false>\n</cfif>\n\n<!--- OR operator --->\n<cfif hasLicense OR hasInsurance>\n    <cfset canRent = true>\n<cfelse>\n    <cfset canRent = false>\n</cfif>\n\n<!--- NOT operator --->\n<cfif NOT isWeekend>\n    <cfset isWorkday = true>\n<cfelse>\n    <cfset isWorkday = false>\n</cfif>\n\n<!--- Complex logical expressions --->\n<cfif (age GTE 18 AND hasLicense) AND (hasInsurance OR NOT isWeekend)>\n    <cfset canRentCar = true>\n<cfelse>\n    <cfset canRentCar = false>\n</cfif>\n\n<cfoutput>\n    <h3>Logical Operations</h3>\n    <p>Age: #age#, License: #hasLicense#, Insurance: #hasInsurance#</p>\n    <p>Can Drive: #canDrive#</p>\n    <p>Can Rent: #canRent#</p>\n    <p>Is Workday: #isWorkday#</p>\n    <p>Can Rent Car: #canRentCar#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Logical Operators --->\n<cfscript>\n    age = 25;\n    hasLicense = true;\n    hasInsurance = false;\n    isWeekend = false;\n    \n    // AND operator\n    if (age >= 18 && hasLicense) {\n        canDrive = true;\n    } else {\n        canDrive = false;\n    }\n    \n    // OR operator\n    if (hasLicense || hasInsurance) {\n        canRent = true;\n    } else {\n        canRent = false;\n    }\n    \n    // NOT operator\n    if (!isWeekend) {\n        isWorkday = true;\n    } else {\n        isWorkday = false;\n    }\n    \n    // Complex logical expressions\n    if ((age >= 18 && hasLicense) && (hasInsurance || !isWeekend)) {\n        canRentCar = true;\n    } else {\n        canRentCar = false;\n    }\n    \n    writeOutput("<h3>Logical Operations</h3>");\n    writeOutput("<p>Age: " & age & ", License: " & hasLicense & ", Insurance: " & hasInsurance & "</p>");\n    writeOutput("<p>Can Drive: " & canDrive & "</p>");\n    writeOutput("<p>Can Rent: " & canRent & "</p>");\n    writeOutput("<p>Is Workday: " & isWorkday & "</p>");\n    writeOutput("<p>Can Rent Car: " & canRentCar & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Logical Operators (CF 2021+)'
                    },
                    {
                        title: 'String Operators',
                        content: 'Concatenate and manipulate strings using string operators.',
                        code: {
                            tag: '<!--- Tag Syntax: String Operators --->\n<cfset firstName = "John">\n<cfset lastName = "Doe">\n<cfset greeting = "Hello">\n\n<!--- String concatenation --->\n<cfset fullName = firstName & " " & lastName>\n<cfset message = greeting & ", " & fullName & "!">\n\n<!--- String comparison --->\n<cfset text1 = "Hello">\n<cfset text2 = "World">\n<cfset combined = text1 & " " & text2>\n\n<!--- String functions with operators --->\n<cfset upperName = UCase(firstName)>\n<cfset lowerName = LCase(lastName)>\n<cfset nameLength = Len(fullName)>\n\n<!--- String contains check --->\n<cfset searchText = "John Doe is a developer">\n<cfset containsName = FindNoCase(fullName, searchText) GT 0>\n\n<cfoutput>\n    <h3>String Operations</h3>\n    <p>Full Name: #fullName#</p>\n    <p>Message: #message#</p>\n    <p>Combined: #combined#</p>\n    <p>Upper: #upperName#</p>\n    <p>Lower: #lowerName#</p>\n    <p>Length: #nameLength#</p>\n    <p>Contains Name: #containsName#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: String Operators --->\n<cfscript>\n    firstName = "John";\n    lastName = "Doe";\n    greeting = "Hello";\n    \n    // String concatenation\n    fullName = firstName & " " & lastName;\n    message = greeting & ", " & fullName & "!";\n    \n    // String comparison\n    text1 = "Hello";\n    text2 = "World";\n    combined = text1 & " " & text2;\n    \n    // String functions with operators\n    upperName = UCase(firstName);\n    lowerName = LCase(lastName);\n    nameLength = Len(fullName);\n    \n    // String contains check\n    searchText = "John Doe is a developer";\n    containsName = FindNoCase(fullName, searchText) > 0;\n    \n    writeOutput("<h3>String Operations</h3>");\n    writeOutput("<p>Full Name: " & fullName & "</p>");\n    writeOutput("<p>Message: " & message & "</p>");\n    writeOutput("<p>Combined: " & combined & "</p>");\n    writeOutput("<p>Upper: " & upperName & "</p>");\n    writeOutput("<p>Lower: " & lowerName & "</p>");\n    writeOutput("<p>Length: " & nameLength & "</p>");\n    writeOutput("<p>Contains Name: " & containsName & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'String Operators (CF 2021+)'
                    }
                ]
            },
            {
                title: '3. Built-in and User Defined Functions (UDFs)',
                content: 'ColdFusion includes hundreds of built-in functions. You can also create your own User Defined Functions. Functions are reusable blocks of code that perform specific tasks.',
                sections: [
                    {
                        title: 'Built-in Functions',
                        content: 'ColdFusion provides extensive built-in functions for strings, dates, arrays, structs, and more.',
                        code: {
                            tag: '<!--- Tag Syntax: Built-in Functions --->\n<!--- String Functions --->\n<cfset text = "Hello World">\n<cfset upperText = UCase(text)>\n<cfset lowerText = LCase(text)>\n<cfset length = Len(text)>\n<cfset trimmed = Trim("  spaces  ")>\n<cfset replaced = Replace(text, "World", "ColdFusion")>\n\n<!--- Date Functions --->\n<cfset today = Now()>\n<cfset formattedDate = DateFormat(today, "mm/dd/yyyy")>\n<cfset formattedTime = TimeFormat(today, "hh:mm:ss tt")>\n<cfset tomorrow = DateAdd("d", 1, today)>\n<cfset daysDiff = DateDiff("d", today, tomorrow)>\n\n<!--- Array Functions --->\n<cfset myArray = ["Apple", "Banana", "Cherry"]>\n<cfset arrayLength = ArrayLen(myArray)>\n<cfset firstItem = myArray[1]>\n<cfset lastItem = myArray[arrayLength]>\n\n<!--- Struct Functions --->\n<cfset person = {name: "John", age: 30, city: "NYC"}>\n<cfset structKeys = StructKeyList(person)>\n<cfset hasName = StructKeyExists(person, "name")>\n\n<cfoutput>\n    <h3>Built-in Functions</h3>\n    <p>Text: #text# → Upper: #upperText#, Lower: #lowerText#</p>\n    <p>Length: #length#, Trimmed: "#trimmed#", Replaced: #replaced#</p>\n    <p>Today: #formattedDate# #formattedTime#</p>\n    <p>Tomorrow: #DateFormat(tomorrow, "mm/dd/yyyy")#</p>\n    <p>Array: #arrayLength# items, First: #firstItem#, Last: #lastItem#</p>\n    <p>Struct Keys: #structKeys#, Has Name: #hasName#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Built-in Functions --->\n<cfscript>\n    // String Functions\n    text = "Hello World";\n    upperText = UCase(text);\n    lowerText = LCase(text);\n    length = Len(text);\n    trimmed = Trim("  spaces  ");\n    replaced = Replace(text, "World", "ColdFusion");\n    \n    // Date Functions\n    today = Now();\n    formattedDate = DateFormat(today, "mm/dd/yyyy");\n    formattedTime = TimeFormat(today, "hh:mm:ss tt");\n    tomorrow = DateAdd("d", 1, today);\n    daysDiff = DateDiff("d", today, tomorrow);\n    \n    // Array Functions\n    myArray = ["Apple", "Banana", "Cherry"];\n    arrayLength = ArrayLen(myArray);\n    firstItem = myArray[1];\n    lastItem = myArray[arrayLength];\n    \n    // Struct Functions\n    person = {name: "John", age: 30, city: "NYC"};\n    structKeys = StructKeyList(person);\n    hasName = StructKeyExists(person, "name");\n    \n    writeOutput("<h3>Built-in Functions</h3>");\n    writeOutput("<p>Text: " & text & " → Upper: " & upperText & ", Lower: " & lowerText & "</p>");\n    writeOutput("<p>Length: " & length & ", Trimmed: \"" & trimmed & "\", Replaced: " & replaced & "</p>");\n    writeOutput("<p>Today: " & formattedDate & " " & formattedTime & "</p>");\n    writeOutput("<p>Tomorrow: " & DateFormat(tomorrow, "mm/dd/yyyy") & "</p>");\n    writeOutput("<p>Array: " & arrayLength & " items, First: " & firstItem & ", Last: " & lastItem & "</p>");\n    writeOutput("<p>Struct Keys: " & structKeys & ", Has Name: " & hasName & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Using Built-in Functions (CF 2021+)'
                    },
                    {
                        title: 'User Defined Functions (UDFs)',
                        content: 'Create your own reusable functions to encapsulate logic and improve code organization.',
                        code: {
                            tag: '<!--- Tag Syntax: Define a UDF --->\n<cffunction name="calculateTotal" returntype="numeric">\n    <cfargument name="price" type="numeric" required="true">\n    <cfargument name="quantity" type="numeric" required="true" default="1">\n    <cfargument name="discount" type="numeric" required="false" default="0">\n    \n    <cfset var total = (price * quantity) * (1 - discount / 100)>\n    <cfreturn total>\n</cffunction>\n\n<!--- Use the UDF --->\n<cfset result = calculateTotal(100, 2, 10)>\n<cfoutput>Total: #DollarFormat(result)#</cfoutput>',
                            script: '<!--- Script Syntax: Define a UDF --->\n<cfscript>\n    function calculateTotal(numeric price, numeric quantity = 1, numeric discount = 0) {\n        var total = (price * quantity) * (1 - discount / 100);\n        return total;\n    }\n    \n    // Use the UDF\n    result = calculateTotal(100, 2, 10);\n    writeOutput("Total: " & DollarFormat(result));\n</cfscript>'
                        },
                        codeTitle: 'Creating UDFs (CF 2021+)'
                    },
                    {
                        title: 'Function Parameters and Return Values',
                        content: 'Learn how to pass parameters to functions and return values.',
                        code: {
                            tag: '<!--- Tag Syntax: Function Parameters --->\n<cffunction name="greetUser" returntype="string">\n    <cfargument name="name" type="string" required="true">\n    <cfargument name="title" type="string" required="false" default="">\n    <cfargument name="formal" type="boolean" required="false" default="false">\n    \n    <cfif formal>\n        <cfset greeting = "Good day, ">\n    <cfelse>\n        <cfset greeting = "Hi, ">\n    </cfif>\n    \n    <cfif Len(title)>\n        <cfset greeting = greeting & title & " ">\n    </cfif>\n    \n    <cfset greeting = greeting & name>\n    <cfreturn greeting>\n</cffunction>\n\n<!--- Use the function --->\n<cfset message1 = greetUser("John", "Mr.", true)>\n<cfset message2 = greetUser("Jane", "", false)>\n\n<cfoutput>\n    <p>#message1#</p>\n    <p>#message2#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Function Parameters --->\n<cfscript>\n    function greetUser(string name, string title = "", boolean formal = false) {\n        if (formal) {\n            greeting = "Good day, ";\n        } else {\n            greeting = "Hi, ";\n        }\n        \n        if (Len(title)) {\n            greeting = greeting & title & " ";\n        }\n        \n        greeting = greeting & name;\n        return greeting;\n    }\n    \n    // Use the function\n    message1 = greetUser("John", "Mr.", true);\n    message2 = greetUser("Jane", "", false);\n    \n    writeOutput("<p>" & message1 & "</p>");\n    writeOutput("<p>" & message2 & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Function Parameters and Return Values (CF 2021+)'
                    }
                ]
            },
            {
                title: '4. Flow Control: If/Else, Switch, Loops',
                content: 'Control the flow of your application with conditional statements and loops. Understanding flow control is essential for building dynamic, responsive applications.',
                sections: [
                    {
                        title: 'If/Else Statements',
                        content: 'Make decisions in your code using conditional statements.',
                        code: {
                            tag: '<!--- Tag Syntax: If/Else Statements --->\n<cfset score = 85>\n\n<cfif score GTE 90>\n    <cfset grade = "A">\n<cfelseif score GTE 80>\n    <cfset grade = "B">\n<cfelseif score GTE 70>\n    <cfset grade = "C">\n<cfelse>\n    <cfset grade = "F">\n</cfif>\n\n<cfoutput>Grade: #grade#</cfoutput>',
                            script: '<!--- Script Syntax: If/Else Statements --->\n<cfscript>\n    score = 85;\n    \n    if (score >= 90) {\n        grade = "A";\n    } else if (score >= 80) {\n        grade = "B";\n    } else if (score >= 70) {\n        grade = "C";\n    } else {\n        grade = "F";\n    }\n    \n    writeOutput("Grade: " & grade);\n</cfscript>'
                        },
                        codeTitle: 'If/Else Statements (CF 2021+)'
                    },
                    {
                        title: 'Switch Statements',
                        content: 'Use switch statements for multiple conditional branches based on a single value.',
                        code: {
                            tag: '<!--- Tag Syntax: Switch Statements --->\n<cfset dayOfWeek = DayOfWeek(Now())>\n<cfset userRole = "admin">\n\n<!--- Basic switch --->\n<cfswitch expression="#dayOfWeek#">\n    <cfcase value="1">\n        <cfset dayName = "Sunday">\n    </cfcase>\n    <cfcase value="2">\n        <cfset dayName = "Monday">\n    </cfcase>\n    <cfcase value="3,4,5">\n        <cfset dayName = "Weekday">\n    </cfcase>\n    <cfdefaultcase>\n        <cfset dayName = "Other">\n    </cfdefaultcase>\n</cfswitch>\n\n<!--- Switch with multiple values --->\n<cfswitch expression="#userRole#">\n    <cfcase value="admin,superadmin">\n        <cfset accessLevel = "Full Access">\n    </cfcase>\n    <cfcase value="editor">\n        <cfset accessLevel = "Edit Access">\n    </cfcase>\n    <cfcase value="viewer">\n        <cfset accessLevel = "Read Only">\n    </cfcase>\n    <cfdefaultcase>\n        <cfset accessLevel = "No Access">\n    </cfdefaultcase>\n</cfswitch>\n\n<cfoutput>\n    <p>Day: #dayName#</p>\n    <p>Access Level: #accessLevel#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Switch Statements --->\n<cfscript>\n    dayOfWeek = DayOfWeek(Now());\n    userRole = "admin";\n    \n    // Basic switch\n    switch (dayOfWeek) {\n        case 1:\n            dayName = "Sunday";\n            break;\n        case 2:\n            dayName = "Monday";\n            break;\n        case 3:\n        case 4:\n        case 5:\n            dayName = "Weekday";\n            break;\n        default:\n            dayName = "Other";\n    }\n    \n    // Switch with multiple values\n    switch (userRole) {\n        case "admin":\n        case "superadmin":\n            accessLevel = "Full Access";\n            break;\n        case "editor":\n            accessLevel = "Edit Access";\n            break;\n        case "viewer":\n            accessLevel = "Read Only";\n            break;\n        default:\n            accessLevel = "No Access";\n    }\n    \n    writeOutput("<p>Day: " & dayName & "</p>");\n    writeOutput("<p>Access Level: " & accessLevel & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Switch Statements (CF 2021+)'
                    },
                    {
                        title: 'Loops',
                        content: 'Iterate over data structures and repeat code blocks using various loop types.',
                        code: {
                            tag: '<!--- Tag Syntax: Loops --->\n<!--- For Loop --->\n<cfloop from="1" to="10" index="i">\n    <cfoutput>#i# </cfoutput>\n</cfloop>\n\n<!--- For-In Loop (Arrays) --->\n<cfset colors = ["Red", "Green", "Blue"]>\n<cfloop array="#colors#" index="color">\n    <cfoutput>#color#<br></cfoutput>\n</cfloop>\n\n<!--- For-In Loop (Structs) --->\n<cfset person = {name: "John", age: 30, city: "NYC"}>\n<cfloop collection="#person#" item="key">\n    <cfoutput>#key#: #person[key]#<br></cfoutput>\n</cfloop>\n\n<!--- While Loop --->\n<cfset counter = 1>\n<cfloop condition="counter LTE 5">\n    <cfoutput>#counter# </cfoutput>\n    <cfset counter++>\n</cfloop>',
                            script: '<!--- Script Syntax: Loops --->\n<cfscript>\n    // For Loop\n    for (i = 1; i <= 10; i++) {\n        writeOutput(i & " ");\n    }\n    \n    // For-In Loop (Arrays)\n    colors = ["Red", "Green", "Blue"];\n    for (color in colors) {\n        writeOutput(color & "<br>");\n    }\n    \n    // For-In Loop (Structs)\n    person = {name: "John", age: 30, city: "NYC"};\n    for (key in person) {\n        writeOutput(key & ": " & person[key] & "<br>");\n    }\n    \n    // While Loop\n    counter = 1;\n    while (counter <= 5) {\n        writeOutput(counter & " ");\n        counter++;\n    }\n</cfscript>'
                        },
                        codeTitle: 'Loop Examples (CF 2021+)'
                    }
                ]
            },
            {
                title: 'Includes and Custom Tags',
                content: 'Reuse code across multiple pages using includes and custom tags.',
                sections: [
                    {
                        title: 'Using cfinclude:',
                        code: '<!--- header.cfm --->\n<header>\n    <h1>My Application</h1>\n    <nav>...</nav>\n</header>\n\n<!--- footer.cfm --->\n<footer>\n    <p>&copy; 2025 My Company</p>\n</footer>\n\n<!--- index.cfm --->\n<cfinclude template="header.cfm">\n<main>\n    <p>Main content here</p>\n</main>\n<cfinclude template="footer.cfm">',
                        codeTitle: 'Using cfinclude (CF 2021+)'
                    },
                    {
                        title: 'Custom Tags:',
                        code: '<!--- Custom Tag: customButton.cfm --->\n<cfparam name="Attributes.label" default="Click Me">\n<cfparam name="Attributes.class" default="btn-primary">\n\n<button class="#Attributes.class#">\n    <cfoutput>#Attributes.label#</cfoutput>\n</button>\n\n<!--- Using the Custom Tag --->\n<cf_customButton label="Submit" class="btn-success">\n<cf_customButton label="Cancel" class="btn-secondary">',
                        codeTitle: 'Creating Custom Tags (CF 2021+)'
                    }
                ]
            },
            {
                title: 'Modularization Best Practices',
                content: 'Organize your code for maintainability and reusability.',
                sections: [
                    {
                        title: 'Best Practices:',
                        list: [
                            'Use UDFs for reusable logic',
                            'Create custom tags for reusable UI components',
                            'Organize includes in a logical directory structure',
                            'Use CFCs for complex, object-oriented code',
                            'Keep functions focused on a single task',
                            'Document your code with comments',
                            'Follow naming conventions consistently'
                        ]
                    }
                ]
            }
        ]
    };
}

// Continue with other modules... (Due to length, I'll create a separate comprehensive file)
// For now, let me create placeholder functions that can be expanded

function getModule2Data() {
    return {
        title: 'Web & Application Structure',
        description: 'Request/Response Model, Application Events, Forms, and Sessions',
        versions: ['2021', '2023', '2025'],
        lessons: [
            {
                title: 'Request/Response Model',
                content: 'Understanding how ColdFusion fits into the HTTP request/response cycle is fundamental to web development.',
                sections: [
                    {
                        title: 'HTTP Request Lifecycle:',
                        code: '<!--- Accessing Request Data --->\n<cfoutput>\n    <p>Request Method: #CGI.REQUEST_METHOD#</p>\n    <p>Request URI: #CGI.REQUEST_URI#</p>\n    <p>Query String: #CGI.QUERY_STRING#</p>\n    <p>User Agent: #CGI.HTTP_USER_AGENT#</p>\n    <p>Remote Address: #CGI.REMOTE_ADDR#</p>\n</cfoutput>',
                        codeTitle: 'Accessing Request Information (CF 2021+)'
                    }
                ]
            },
            {
                title: 'Application.cfc and Application Events',
                content: 'Application.cfc controls the application lifecycle and provides event handlers for initialization, requests, and shutdown.',
                sections: [
                    {
                        title: 'Basic Application.cfc:',
                        code: '<cfcomponent>\n    <!--- Application Settings --->\n    <cfset this.name = "MyApplication">\n    <cfset this.applicationTimeout = CreateTimeSpan(0, 2, 0, 0)>\n    <cfset this.sessionManagement = true>\n    <cfset this.sessionTimeout = CreateTimeSpan(0, 0, 30, 0)>\n    \n    <!--- Application Start --->\n    <cffunction name="onApplicationStart" returntype="boolean">\n        <cfset Application.initialized = true>\n        <cfset Application.startTime = Now()>\n        <cfreturn true>\n    </cffunction>\n    \n    <!--- Request Start --->\n    <cffunction name="onRequestStart" returntype="boolean">\n        <cfargument name="targetPage" type="string" required="true">\n        <!--- Pre-request logic here --->\n        <cfreturn true>\n    </cffunction>\n    \n    <!--- Request End --->\n    <cffunction name="onRequestEnd" returntype="void">\n        <cfargument name="targetPage" type="string" required="true">\n        <!--- Post-request logic here --->\n    </cffunction>\n</cfcomponent>',
                        codeTitle: 'Application.cfc Structure (CF 2021+)'
                    }
                ]
            },
            {
                title: 'Forms, URL Parameters, and Input Handling',
                content: 'Most web apps depend on user input. In ColdFusion you typically read input from the URL scope (query string) and Form scope (POST body). The most important rule: treat all input as untrusted and validate it before use.',
                sections: [
                    {
                        title: 'Reading URL and Form variables',
                        code: {
                            tag: '<!--- URL example: product.cfm?id=123 --->\n<cfparam name="URL.id" type="numeric" default="0">\n\n<!--- Form example: form submits via POST --->\n<cfif StructKeyExists(Form, "submit")>\n    <cfparam name="Form.email" type="string" default="">\n    <cfset email = Trim(Form.email)>\n\n    <cfoutput>\n        <p>Product ID: #URL.id#</p>\n        <p>Email: #email#</p>\n    </cfoutput>\n</cfif>',
                            script: '<cfscript>\n    // URL example: product.cfm?id=123\n    param name="URL.id" type="numeric" default="0";\n\n    // Form example: form submits via POST\n    if (StructKeyExists(Form, "submit")) {\n        param name="Form.email" type="string" default="";\n        email = Trim(Form.email);\n\n        writeOutput("<p>Product ID: " & URL.id & "</p>");\n        writeOutput("<p>Email: " & email & "</p>");\n    }\n</cfscript>'
                        },
                        codeTitle: 'Reading URL/Form input (CF 2021+)'
                    },
                    {
                        title: 'Two practical tips',
                        list: [
                            '<strong>Prefer cfparam/param early:</strong> Default and type-check as close to the top of the request as possible.',
                            '<strong>Keep GET vs POST clear:</strong> Use URL parameters for filtering/paging and Form POST for writes (create/update actions).'
                        ]
                    }
                ],
                tip: 'Docs: Adobe “About scopes” and Adobe CFML Reference for cfparam.'
            },
            {
                title: 'Sessions and State',
                content: 'Sessions let you keep per-user state (like a logged-in user ID or a cart) across multiple requests. Enable session management in Application.cfc, keep Session data small, and invalidate the session on logout.',
                sections: [
                    {
                        title: 'Enable sessions in Application.cfc',
                        code: '<cfcomponent>\n    <cfset this.name = "MyApplication">\n    <cfset this.sessionManagement = true>\n    <cfset this.sessionTimeout = CreateTimeSpan(0, 0, 30, 0)>\n</cfcomponent>',
                        codeTitle: 'Session settings (CF 2021+)'
                    },
                    {
                        title: 'Set and clear session data',
                        code: {
                            tag: '<!--- Set session values --->\n<cfset Session.userId = 123>\n<cfset Session.userName = \'jdoe\'>\n\n<!--- Logout: clear session (CF 10+) --->\n<cfset sessionInvalidate()>',
                            script: '<cfscript>\n    // Set session values\n    Session.userId = 123;\n    Session.userName = "jdoe";\n\n    // Logout: clear session (CF 10+)\n    sessionInvalidate();\n</cfscript>'
                        },
                        codeTitle: 'Session set + logout (CF 2021+)',
                        tip: 'If you use cflogin/cflogout, always use <code>cflogout</code> to log users out; session invalidation is separate.'
                    }
                ],
                tip: 'Verified against Adobe: “Configuring and using session variables” and `sessionInvalidate()` reference.'
            }
        ]
    };
}

/**
 * Module 3: Data Connectivity & Manipulation
 */
function getModule3Data() {
    return {
        title: 'Data Connectivity & Manipulation',
        description: 'Databases, Queries, and Data Structures',
        versions: ['2021', '2023', '2025'],
        lessons: [
            {
                title: '1. Data Sources and Database Connectivity',
                content: 'ColdFusion connects to databases through configured data sources. This lesson covers how to run SQL via tags and script, and how to use query results.',
                sections: [
                    {
                        title: 'Introduction',
                        content: 'This lesson introduces database connectivity in ColdFusion: data sources, the cfquery tag, and the queryExecute() function. You will run SELECT statements and work with result sets in CF 2021, 2023, and 2025.',
                        sections: [
                            {
                                title: 'Key Concepts',
                                list: [
                                    '<strong>Data source:</strong> A named connection (configured in CF Admin or Application.cfc) used by <code>cfquery</code> and <code>queryExecute</code>',
                                    '<strong>cfquery:</strong> Tag-based SQL execution; use <code>name</code> to store the result set in a variable',
                                    '<strong>queryExecute():</strong> Script equivalent (CF 11+); returns a query object',
                                    '<strong>Query object:</strong> Result set with columns and rows; access via <code>queryName.columnName[row]</code> or <code>queryName.recordCount</code>'
                                ]
                            },
                            {
                                title: 'Best Practices & Tips',
                                list: [
                                    '<strong>Use a datasource:</strong> Configure in Administrator or <code>this.datasource</code> in Application.cfc; never embed credentials in page logic',
                                    '<strong>Prefer script in new code:</strong> Use <code>queryExecute()</code> for consistency with modern CFML',
                                    '<strong>Always parameterize:</strong> Use <code>cfqueryparam</code> or named/positional params in <code>queryExecute</code> to prevent SQL injection'
                                ],
                                tip: 'Reference: CFDocs <a href="https://cfdocs.org/cfquery" target="_blank">cfquery</a>, <a href="https://cfdocs.org/queryexecute" target="_blank">queryExecute</a>. Adobe: Developing Applications > Accessing and Using Data.'
                            },
                            {
                                title: 'Version-Specific Notes & Gotchas',
                                sections: [
                                    {
                                        title: 'ColdFusion 2021',
                                        versionBadge: '2021',
                                        list: [
                                            '<strong>queryExecute:</strong> Fully supported and recommended for modern CFML',
                                            '<strong>Tip:</strong> Prefer named parameters for clarity and consistent SQL injection protection'
                                        ]
                                    },
                                    {
                                        title: 'ColdFusion 2023',
                                        versionBadge: '2023',
                                        list: [
                                            '<strong>Datasource:</strong> Same connectivity model; ensure JDBC drivers match your DB'
                                        ]
                                    },
                                    {
                                        title: 'ColdFusion 2025',
                                        versionBadge: '2025',
                                        list: [
                                            '<strong>Best practice:</strong> Use <code>queryExecute()</code> with parameter structs (same guidance as earlier versions)'
                                        ]
                                    },
                                    {
                                        title: 'Common Gotchas Across All Versions',
                                        list: [
                                            '<strong>Datasource required:</strong> Omit only when using <code>dbtype="query"</code> for Query of Queries',
                                            '<strong>Column names:</strong> Query column names follow the database/SQL alias; case can vary by driver'
                                        ]
                                    }
                                ],
                                tip: 'Verified: CFDocs cfquery, queryExecute; Adobe ColdFusion “Accessing and Using Data” documentation.'
                            },
                            {
                                title: 'Documentation References',
                                list: [
                                    '<a href="https://cfdocs.org/cfquery" target="_blank">CFDocs: cfquery</a>',
                                    '<a href="https://cfdocs.org/queryexecute" target="_blank">CFDocs: queryExecute</a>',
                                    '<a href="https://helpx.adobe.com/coldfusion/developing-applications/accessing-and-using-data.html" target="_blank">Adobe: Accessing and Using Data</a>'
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Running a SELECT with cfquery',
                        content: 'Use the <code>cfquery</code> tag with a <code>datasource</code> and <code>name</code> to run SQL and store the result set. The example below assumes a datasource named <code>mydsn</code>.',
                        code: {
                            tag: '<!--- Tag syntax: run SELECT and store result --->\n<cfquery name="qEmployees" datasource="mydsn">\n    SELECT employeeId, firstName, lastName, hireDate\n    FROM employees\n    ORDER BY lastName, firstName\n</cfquery>\n\n<cfoutput query="qEmployees">\n    <p>#firstName# #lastName# (ID: #employeeId#)</p>\n</cfoutput>\n\n<!--- Or by row index --->\n<cfset rowCount = qEmployees.recordCount>\n<cfoutput>\n    <p>Total rows: #rowCount#</p>\n    <p>First name in row 1: #qEmployees.firstName[1]#</p>\n</cfoutput>',
                            script: '<!--- Script syntax: queryExecute (CF 11+) --->\n<cfscript>\n    qEmployees = queryExecute(\n        "SELECT employeeId, firstName, lastName, hireDate FROM employees ORDER BY lastName, firstName",\n        {},\n        { datasource: "mydsn" }\n    );\n\n    for (row in qEmployees) {\n        writeOutput("<p>" & row.firstName & " " & row.lastName & " (ID: " & row.employeeId & ")</p>");\n    }\n\n    rowCount = qEmployees.recordCount;\n    writeOutput("<p>Total rows: " & rowCount & "</p>");\n    writeOutput("<p>First name in row 1: " & qEmployees.firstName[1] & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'SELECT with cfquery and queryExecute (CF 2021+)',
                        tip: 'Verified: CFDocs cfquery (name, datasource, result), queryExecute(sql, params, options); Adobe Accessing and Using Data.'
                    },
                    {
                        title: 'Using a default datasource',
                        content: 'You can set a default datasource in Application.cfc with <code>this.datasource</code>. Then omit the <code>datasource</code> attribute or option when it matches.',
                        code: {
                            tag: '<!--- In Application.cfc: this.datasource = "mydsn"; --->\n\n<cfquery name="qProducts" datasource="mydsn">\n    SELECT productId, productName, unitPrice FROM products\n</cfquery>',
                            script: '<!--- In Application.cfc: this.datasource = "mydsn"; --->\n\nqProducts = queryExecute(\n    "SELECT productId, productName, unitPrice FROM products",\n    {},\n    {}  // options; datasource optional when default set\n);'
                        },
                        codeTitle: 'Default datasource (CF 2021+)',
                        tip: 'Verified: Adobe Application.cfc this.datasource; CFDocs cfquery/queryExecute datasource option.'
                    }
                ]
            },
            {
                title: '2. Parameterized Queries and cfqueryparam',
                content: 'Always pass user input and dynamic values through parameters to avoid SQL injection and ensure correct typing. This lesson covers <code>cfqueryparam</code> and <code>queryExecute</code> parameters.',
                sections: [
                    {
                        title: 'Introduction',
                        content: 'Parameterized queries bind values to placeholders instead of concatenating them into SQL. In ColdFusion you use <code>cfqueryparam</code> (tag) or the params argument of <code>queryExecute</code> (script).',
                        list: [
                            '<strong>Security:</strong> Parameters prevent SQL injection by separating SQL structure from data',
                            '<strong>Types:</strong> Use <code>cfsqltype</code> (e.g. <code>cf_sql_integer</code>, <code>cf_sql_varchar</code>) so the driver handles escaping and formatting',
                            '<strong>CF 11+:</strong> In script, pass a struct or array of params to <code>queryExecute</code>; use <code>:name</code> in SQL for struct keys'
                        ],
                        tip: 'Verified: CFDocs <a href="https://cfdocs.org/cfqueryparam" target="_blank">cfqueryparam</a>, <a href="https://cfdocs.org/queryexecute" target="_blank">queryExecute</a> params and options.'
                    },
                    {
                        title: 'cfqueryparam in tag-based queries',
                        content: 'Wrap every dynamic value in <code>cfqueryparam</code> and set <code>value</code> and <code>cfsqltype</code>. Use <code>list="true"</code> for IN-clause lists.',
                        code: {
                            tag: '<!--- Single value --->\n<cfquery name="qUser" datasource="mydsn">\n    SELECT userId, userName, email\n    FROM users\n    WHERE userId = <cfqueryparam value="#URL.id#" cfsqltype="cf_sql_integer">\n</cfquery>\n\n<!--- IN clause with list --->\n<cfquery name="qOrders" datasource="mydsn">\n    SELECT orderId, customerId, orderDate\n    FROM orders\n    WHERE status IN (<cfqueryparam value="#Form.statusList#" cfsqltype="cf_sql_varchar" list="true">)\n</cfquery>',
                            script: '<!--- queryExecute with named params (struct) --->\n<cfscript>\n    qUser = queryExecute(\n        "SELECT userId, userName, email FROM users WHERE userId = :id",\n        { id: { value: URL.id, cfsqltype: "cf_sql_integer" } },\n        { datasource: "mydsn" }\n    );\n\n    qOrders = queryExecute(\n        "SELECT orderId, customerId, orderDate FROM orders WHERE status IN (:statusList)",\n        { statusList: { value: Form.statusList, cfsqltype: "cf_sql_varchar", list: true } },\n        { datasource: "mydsn" }\n    );\n</cfscript>'
                        },
                        codeTitle: 'Parameterized queries with cfqueryparam and queryExecute (CF 2021+)',
                        tip: 'Verified: CFDocs cfqueryparam (value, cfsqltype, list), queryExecute params struct/array; CFSQLType cheatsheet.'
                    },
                    {
                        title: 'Positional parameters with queryExecute',
                        content: 'You can use <code>?</code> placeholders and pass an array of values. For full control (e.g. null, list), use an array of structs with <code>value</code> and <code>cfsqltype</code>.',
                        code: {
                            tag: '<!--- N/A for tag; use cfqueryparam --->',
                            script: 'q = queryExecute(\n    "SELECT * FROM products WHERE categoryId = ? AND active = ?",\n    [ categoryId, true ],\n    { datasource: "mydsn" }\n);\n\n// With types and null support:\nq2 = queryExecute(\n    "SELECT * FROM products WHERE categoryId = ? AND discontinued = ?",\n    [\n        { value: categoryId, cfsqltype: "cf_sql_integer" },\n        { value: javacast("null", ""), cfsqltype: "cf_sql_bit", null: true }\n    ],\n    { datasource: "mydsn" }\n);'
                        },
                        codeTitle: 'queryExecute with array params (CF 2021+)',
                        tip: 'Verified: CFDocs queryExecute params array with ? placeholders; null and cfsqltype in param struct.'
                    }
                ]
            },
            {
                title: '3. Query Results, queryNew, and Query of Queries',
                content: 'Learn how to loop over query results, build in-memory queries with queryNew(), and run Query of Queries (QoQ) against existing query objects.',
                sections: [
                    {
                        title: 'Looping over query results',
                        content: 'Use <code>cfoutput query="queryName"</code> or a <code>cfloop</code> over the query. In script, use <code>for (row in queryName)</code> or index by row number.',
                        code: {
                            tag: '<cfquery name="qList" datasource="mydsn">\n    SELECT id, title FROM articles ORDER BY created DESC\n</cfquery>\n\n<cfoutput query="qList">\n    <div>#currentRow#. #title#</div>\n</cfoutput>\n\n<!--- cfloop --->\n<cfloop query="qList">\n    <cfoutput>#id#: #title#<br></cfoutput>\n</cfloop>',
                            script: 'qList = queryExecute("SELECT id, title FROM articles ORDER BY created DESC", {}, { datasource: "mydsn" });\n\nfor (row in qList) {\n    writeOutput("<div>" & row.id & ": " & row.title & "</div>");\n}\n\n// By index:\nfor (i = 1; i <= qList.recordCount; i++) {\n    writeOutput(qList.id[i] & ": " & qList.title[i] & "<br>");\n}'
                        },
                        codeTitle: 'Looping over a query (CF 2021+)',
                        tip: 'Verified: CFDocs cfoutput query, cfloop query; for (row in query) and query.columnName[row] in script.'
                    },
                    {
                        title: 'queryNew: in-memory query object',
                        content: 'Use <code>queryNew(columnList, columnTypeList, rowData)</code> to create a query without a database. <code>rowData</code> can be an array of structs (CF 10+). Use <code>queryAddRow</code> and <code>querySetCell</code> to build row-by-row.',
                        code: {
                            tag: '<!--- Empty query then add rows --->\n<cfset q = queryNew("id,title", "integer,varchar")>\n<cfset queryAddRow(q)>\n<cfset querySetCell(q, "id", 1)>\n<cfset querySetCell(q, "title", "First")>\n<cfset queryAddRow(q)>\n<cfset querySetCell(q, "id", 2)>\n<cfset querySetCell(q, "title", "Second")>\n<cfset writeDump(q)>\n\n<!--- Or with row data (CF 10+) --->\n<cfset q2 = queryNew("id,title", "integer,varchar", [\n    { id: 1, title: "First" },\n    { id: 2, title: "Second" }\n])>',
                            script: 'q = queryNew("id,title", "integer,varchar");\nqueryAddRow(q);\nquerySetCell(q, "id", 1);\nquerySetCell(q, "title", "First");\nqueryAddRow(q);\nquerySetCell(q, "id", 2);\nquerySetCell(q, "title", "Second");\n\nq2 = queryNew("id,title", "integer,varchar", [\n    { id: 1, title: "First" },\n    { id: 2, title: "Second" }\n]);'
                        },
                        codeTitle: 'queryNew and populating rows (CF 2021+)',
                        tip: 'Verified: CFDocs queryNew(columnList, columnTypeList, rowData), queryAddRow, querySetCell; CF 10+ rowData array of structs.'
                    },
                    {
                        title: 'Query of Queries (QoQ)',
                        content: 'Run SQL against an existing query variable by setting <code>dbtype="query"</code> and using the query variable name in the FROM clause. Supported SQL is limited (see Adobe Query of Queries User Guide).',
                        code: {
                            tag: '<!--- qProducts is an existing query --->\n<cfquery name="qFiltered" dbtype="query">\n    SELECT productName, unitPrice\n    FROM qProducts\n    WHERE unitPrice > 10\n    ORDER BY unitPrice DESC\n</cfquery>',
                            script: 'qFiltered = queryExecute(\n    "SELECT productName, unitPrice FROM qProducts WHERE unitPrice > 10 ORDER BY unitPrice DESC",\n    {},\n    { dbtype: "query" }\n);'
                        },
                        codeTitle: 'Query of Queries (CF 2021+)',
                        tip: 'Verified: CFDocs cfquery/queryExecute dbtype="query"; Adobe Query of Queries User Guide for supported SQL.'
                    }
                ]
            },
            {
                title: '4. Arrays, Structs, and Lists',
                content: 'ColdFusion\'s core data structures—arrays, structs, and lists—are used for collections, key-value data, and delimited strings. This lesson covers creation and common operations.',
                sections: [
                    {
                        title: 'Introduction',
                        content: 'Arrays are ordered, index-based collections (1-based in CF). Structs are key-value maps. Lists are comma-delimited strings with functions like <code>listLen</code>, <code>listFirst</code>, <code>listToArray</code>.',
                        list: [
                            '<strong>Arrays:</strong> Literal <code>[1, 2, 3]</code> or <code>arrayNew(1)</code>; append with <code>arrayAppend</code>',
                            '<strong>Structs:</strong> Literal <code>{ key: "value" }</code> or <code>structNew()</code>; ordered structs with <code>structNew("ordered")</code> (CF 2016+)',
                            '<strong>Lists:</strong> String with a delimiter (default comma); use list functions or convert with <code>listToArray</code>'
                        ],
                        tip: 'Verified: CFDocs queryNew, structNew, list functions; Adobe Variables and Data Types.'
                    },
                    {
                        title: 'Arrays: create and iterate',
                        content: 'Create with bracket notation or <code>arrayNew(1)</code>. Index from 1. Use <code>arrayLen</code>, <code>arrayAppend</code>, <code>arrayEach</code> (when available), or a for-loop.',
                        code: {
                            tag: '<cfset colors = ["Red", "Green", "Blue"]>\n<cfset arrayAppend(colors, "Yellow")>\n<cfoutput>#arrayLen(colors)#</cfoutput>\n<cfloop array="#colors#" index="c">\n    <cfoutput>#c# </cfoutput>\n</cfloop>',
                            script: 'colors = ["Red", "Green", "Blue"];\narrayAppend(colors, "Yellow");\nwriteOutput(arrayLen(colors) & " ");\nfor (c in colors) {\n    writeOutput(c & " ");\n}'
                        },
                        codeTitle: 'Arrays (CF 2021+)',
                        tip: 'Verified: CFDocs arrayNew, arrayLen, arrayAppend; bracket array literal; cfloop array.'
                    },
                    {
                        title: 'Structs: create and access',
                        content: 'Create with <code>{}</code> or <code>structNew()</code>. Use dot or bracket notation. <code>structKeyExists</code> checks keys; <code>structKeyArray</code> returns keys as an array.',
                        code: {
                            tag: '<cfset user = { id: 1, name: "Jane", role: "admin" }>\n<cfset user.email = "jane@example.com">\n<cfoutput>#user.name# (#user["role"])</cfoutput>\n<cfif structKeyExists(user, "phone")>\n    <cfoutput>#user.phone#</cfoutput>\n</cfif>',
                            script: 'user = { id: 1, name: "Jane", role: "admin" };\nuser.email = "jane@example.com";\nwriteOutput(user.name & " (" & user["role"] & ")");\nif (structKeyExists(user, "phone")) {\n    writeOutput(user.phone);\n}'
                        },
                        codeTitle: 'Structs (CF 2021+)',
                        tip: 'Verified: CFDocs structNew, structKeyExists, structKeyArray; literal {} and dot/bracket access.'
                    },
                    {
                        title: 'Lists: functions and listToArray',
                        content: 'Lists are strings with a delimiter (default comma). Use <code>listLen</code>, <code>listFirst</code>, <code>listLast</code>, <code>listGetAt</code>, <code>listToArray</code> to work with them.',
                        code: {
                            tag: '<cfset ids = "10,20,30,40">\n<cfset len = listLen(ids)>\n<cfset first = listFirst(ids)>\n<cfset arr = listToArray(ids)>\n<cfoutput>\n    Length: #len#, First: #first#<br>\n    Second: #listGetAt(ids, 2)#\n</cfoutput>',
                            script: 'ids = "10,20,30,40";\nlen = listLen(ids);\nfirst = listFirst(ids);\narr = listToArray(ids);\nwriteOutput("Length: " & len & ", First: " & first);\nwriteOutput(" Second: " & listGetAt(ids, 2));'
                        },
                        codeTitle: 'List functions (CF 2021+)',
                        tip: 'Verified: CFDocs listLen, listFirst, listLast, listGetAt, listToArray; Adobe Variables and Data Types.'
                    }
                ]
            }
        ]
    };
}
function getModule4Data() { return { title: 'File & Document Operations', description: 'File I/O, PDF, Excel, and Image Processing', versions: ['2021', '2023', '2025'], lessons: [] }; }
function getModule5Data() { return { title: 'Cloud Storage Integration', description: 'S3, Azure Blob, and Google Cloud Storage', versions: ['2023', '2025'], lessons: [] }; }
function getModule6Data() { return { title: 'Security Fundamentals', description: 'Input validation, output encoding, and authentication', versions: ['2021', '2023', '2025'], lessons: [] }; }
function getModule7Data() { return { title: 'Object-Oriented Programming', description: 'CFCs, Inheritance, and Modern OOP', versions: ['2021', '2023', '2025'], lessons: [] }; }
/**
 * Module 8: What's New - Version Comparison
 */
function getModule8Data() {
    return {
        title: 'What\'s New: Version Comparison',
        description: 'Understanding what\'s new in CF 2023 (from 2021) and CF 2025 (from 2023)',
        versions: ['2021', '2023', '2025'],
        lessons: [
            {
                title: 'Introduction to Version Changes',
                content: 'This module provides a clear comparison of new features and enhancements across ColdFusion versions. Understanding these differences helps you leverage the latest capabilities and plan migrations effectively.',
                sections: [
                    {
                        title: 'How to Use This Module:',
                        list: [
                            '<strong>Compare Versions:</strong> See what changed between 2021→2023 and 2023→2025',
                            '<strong>Feature Categories:</strong> Features are organized by type (Language, Security, Performance, etc.)',
                            '<strong>Version Badges:</strong> Each feature shows which version it was introduced in',
                            '<strong>Migration Planning:</strong> Use this information to plan upgrades and understand compatibility'
                        ]
                    },
                    {
                        title: 'Version Release Timeline:',
                        list: [
                            '<strong>ColdFusion 2021:</strong> Foundation release with core modern features',
                            '<strong>ColdFusion 2023:</strong> Major enhancements including property visibility and cloud storage',
                            '<strong>ColdFusion 2025:</strong> Latest release with interfaces, enhanced JIT, and new licensing model'
                        ]
                    }
                ]
            },
            {
                title: 'What\'s New in ColdFusion 2023 (from 2021)',
                content: 'ColdFusion 2023 introduced significant enhancements in object-oriented programming, cloud integration, and performance.',
                sections: [
                    {
                        title: 'Object-Oriented Programming Enhancements',
                        versionBadge: '2023',
                        list: [
                            '<strong>Property Visibility Modifiers:</strong> Support for public, private, and package-level property visibility in CFCs',
                            '<strong>Enhanced Component Structure:</strong> Better encapsulation and access control for component properties'
                        ],
                        code: '<!--- Property Visibility in CFCs (CF 2023+) --->\n<cfcomponent>\n    <!--- Public property (default) --->\n    <cfproperty name="publicProperty" type="string">\n    \n    <!--- Private property --->\n    <cfproperty name="privateProperty" type="string" access="private">\n    \n    <!--- Package-level property --->\n    <cfproperty name="packageProperty" type="string" access="package">\n    \n    <cffunction name="getPrivateProperty" returntype="string" access="public">\n        <cfreturn variables.privateProperty>\n    </cffunction>\n</cfcomponent>',
                        codeTitle: 'Property Visibility Modifiers (CF 2023+)'
                    },
                    {
                        title: 'Cloud Storage Integration',
                        versionBadge: '2023',
                        list: [
                            '<strong>Native Cloud Storage Support:</strong> Built-in integration with Amazon S3, Azure Blob Storage, and Google Cloud Storage',
                            '<strong>Cloud Resource Mapping:</strong> Map cloud storage as local file system paths',
                            '<strong>Seamless File Operations:</strong> Use standard cffile and cfdirectory tags with cloud storage'
                        ],
                        code: '<!--- Cloud Storage Configuration (CF 2023+) --->\n<!--- Configure in CF Administrator or use cfsetup --->\n<!--- Then use like local files --->\n<cffile action="write" file="s3://mybucket/path/file.txt" output="Hello Cloud!">\n<cffile action="read" file="s3://mybucket/path/file.txt" variable="content">',
                        codeTitle: 'Cloud Storage Usage (CF 2023+)'
                    },
                    {
                        title: 'Performance Enhancements',
                        versionBadge: '2023',
                        list: [
                            '<strong>JIT Compilation Improvements:</strong> Enhanced Just-In-Time compilation for better performance',
                            '<strong>Optimized Query Processing:</strong> Faster database query execution',
                            '<strong>Improved Caching:</strong> Better cache management and invalidation'
                        ]
                    },
                    {
                        title: 'Security Improvements',
                        versionBadge: '2023',
                        list: [
                            '<strong>Enhanced Security Features:</strong> Improved protection against common vulnerabilities',
                            '<strong>Better Input Validation:</strong> Enhanced built-in validation functions',
                            '<strong>Security Headers:</strong> Improved support for security headers'
                        ]
                    },
                    {
                        title: 'Docker & Deployment',
                        versionBadge: '2023',
                        list: [
                            '<strong>Better Docker Support:</strong> Improved containerization capabilities',
                            '<strong>Deployment Tooling:</strong> Enhanced deployment and configuration management'
                        ]
                    }
                ],
                tip: 'ColdFusion 2023 is a significant upgrade from 2021, especially for cloud-native applications and modern OOP development.'
            },
            {
                title: 'What\'s New in ColdFusion 2025 (from 2023)',
                content: 'ColdFusion 2025 introduces interfaces, enhanced language features, new spreadsheet/CSV functions, and a new licensing model. Reference: <a href="https://helpx.adobe.com/coldfusion/using/whats-new.html" target="_blank">Adobe What\'s New Documentation</a>',
                sections: [
                    {
                        title: 'Language & OOP Enhancements',
                        versionBadge: '2025',
                        list: [
                            '<strong>Interface Support:</strong> Define and implement interfaces in CFCs for better abstraction',
                            '<strong>Multiple Exception Handling:</strong> Handle multiple exceptions in a single catch statement using pipes',
                            '<strong>Trailing Commas:</strong> Support for trailing commas in arrays, structs, functions, and parameters',
                            '<strong>Deep Copy Parameter:</strong> New deepCopy parameter in duplicate() function for cloning child elements'
                        ],
                        code: '<!--- Interface Support (CF 2025+) --->\n<!--- Define Interface --->\n<cfinterface>\n    <cffunction name="calculate" returntype="numeric">\n        <cfargument name="value" type="numeric" required="true">\n    </cffunction>\n</cfinterface>\n\n<!--- Implement Interface --->\n<cfcomponent implements="ICalculator">\n    <cffunction name="calculate" returntype="numeric">\n        <cfargument name="value" type="numeric" required="true">\n        <cfreturn value * 2>\n    </cffunction>\n</cfcomponent>',
                        codeTitle: 'Interface Support (CF 2025+)'
                    },
                    {
                        title: 'Multiple Exception Handling',
                        versionBadge: '2025',
                        code: '<!--- Multiple Exception Handling (CF 2025+) --->\n<cftry>\n    <!--- Code that might throw exceptions --->\n    <cfset result = riskyOperation()>\n    \n    <cfcatch type="DatabaseException|FileNotFoundException|CustomException">\n        <!--- Handle multiple exception types --->\n        <cfoutput>Error: #cfcatch.message#</cfoutput>\n    </cfcatch>\n</cftry>',
                        codeTitle: 'Multiple Exception Handling (CF 2025+)'
                    },
                    {
                        title: 'New Spreadsheet & CSV Functions',
                        versionBadge: '2025',
                        list: [
                            '<strong>Streaming Spreadsheets:</strong> Support for streaming large spreadsheets efficiently',
                            '<strong>30+ New Spreadsheet Methods:</strong> Enhanced cell and sheet property management',
                            '<strong>CSV Functions:</strong> CSVRead(), CSVWrite(), CSVProcess() for CSV file operations'
                        ],
                        code: '<!--- New CSV Functions (CF 2025+) --->\n<!--- Read CSV --->\n<cfset csvData = CSVRead("data.csv")>\n\n<!--- Write CSV --->\n<cfset data = [\n    ["Name", "Age", "City"],\n    ["John", "30", "NYC"],\n    ["Jane", "25", "LA"]\n]>\nCSVWrite("output.csv", data)\n\n<!--- Process CSV --->\n<cfset processed = CSVProcess("input.csv", function(row) {\n    return row.map(function(cell) {\n        return UCase(cell);\n    });\n})>',
                        codeTitle: 'CSV Functions (CF 2025+)'
                    },
                    {
                        title: 'Enhanced Spreadsheet Functions',
                        versionBadge: '2025',
                        list: [
                            '<strong>Cell Management:</strong> spreadsheetClearCell(), spreadsheetClearCellRange(), spreadsheetSetCellRangeValue()',
                            '<strong>Sheet Operations:</strong> spreadsheetRenameSheet(), spreadsheetGetLastRowNumber()',
                            '<strong>Print Settings:</strong> spreadsheetSetPrintOrientation(), spreadsheetAddPrintGuidelines()',
                            '<strong>Row/Column Grouping:</strong> spreadsheetGroupRows(), spreadsheetGroupColumns()',
                            '<strong>Hidden Rows/Columns:</strong> spreadsheetSetRowHidden(), spreadsheetSetColumnHidden()',
                            '<strong>Streaming Support:</strong> streamingSpreadsheetNew(), streamingSpreadsheetRead(), streamingSpreadsheetProcess()'
                        ]
                    },
                    {
                        title: 'New Licensing Model',
                        versionBadge: '2025',
                        list: [
                            '<strong>Subscription-Based Licensing:</strong> Transition from serial key-based to subscription licensing',
                            '<strong>Named User Licensing (NUL):</strong> New licensing option for named users',
                            '<strong>Feature Restricted Licensing:</strong> Online/Offline and Isolated deployment options',
                            '<strong>Better Control:</strong> Enhanced license management and activation workflows'
                        ],
                        tip: 'The new licensing model provides better control and security for various deployment scenarios.'
                    },
                    {
                        title: 'Performance & JIT Improvements',
                        versionBadge: '2025',
                        list: [
                            '<strong>Enhanced JIT Compilation:</strong> Further improvements to Just-In-Time compilation',
                            '<strong>Startup Time Improvements:</strong> Faster server startup times',
                            '<strong>Optimized Memory Management:</strong> Better memory handling and garbage collection'
                        ]
                    },
                    {
                        title: 'Docker Enhancements',
                        versionBadge: '2025',
                        list: [
                            '<strong>Docker Secrets Support:</strong> Support for Docker secrets and Docker config',
                            '<strong>CCS Container Image:</strong> New image for Central Config Server container',
                            '<strong>Improved Workflows:</strong> Better support for new licensing and activation in containers'
                        ]
                    },
                    {
                        title: 'Administrator & API Changes',
                        versionBadge: '2025',
                        list: [
                            '<strong>SSL Certificate Management:</strong> Define SSL certificates directly from Administrator',
                            '<strong>Content Security Policy Nonce:</strong> Support for CSP nonce generation',
                            '<strong>New Admin APIs:</strong> activateNow(), deactivateNow(), getChallengeCode() for licensing',
                            '<strong>HTTP/HTTPS on CCS:</strong> Select HTTP or HTTPS on Central Config Server page'
                        ]
                    },
                    {
                        title: 'Microsoft Graph Integration',
                        versionBadge: '2025',
                        list: [
                            '<strong>User Store Integration:</strong> Create and manage user stores on Microsoft Entra ID',
                            '<strong>CRUD Operations:</strong> Full Create, Read, Update, Delete support for user data',
                            '<strong>Microsoft Services:</strong> Integration with Exchange Online, SharePoint, and Teams'
                        ]
                    },
                    {
                        title: 'Function & Tag Enhancements',
                        versionBadge: '2025',
                        list: [
                            '<strong>ListSort with Callback:</strong> Include empty fields parameter when using callback',
                            '<strong>Deserialize JSON to Query:</strong> deserializeJSON() now supports "query" return type',
                            '<strong>createObject/cfobject loadPaths:</strong> New parameter to load external Java libraries',
                            '<strong>cfproperty Default Values:</strong> Default values can now be valid CFML expressions',
                            '<strong>cfoauth Updates:</strong> Support for Microsoft auth type, enhanced workflows'
                        ]
                    },
                    {
                        title: 'Additional Improvements',
                        versionBadge: '2025',
                        list: [
                            '<strong>Whitespace Management:</strong> Available on all deployment types including JEE',
                            '<strong>Enhanced cfdump:</strong> Shows additional Java class details (methods, constructors, exceptions)',
                            '<strong>New JVM Arguments:</strong> Additional JVM configuration options',
                            '<strong>Removed Features:</strong> Mobile features settings, Applet tab, License Scanner page removed'
                        ]
                    }
                ],
                tip: 'ColdFusion 2025 represents a major step forward with interfaces, enhanced language features, and a modern licensing model. Review the <a href="https://helpx.adobe.com/coldfusion/using/whats-new.html" target="_blank">official documentation</a> for complete details.'
            },
            {
                title: 'Version Comparison Summary',
                content: 'Quick reference guide for version differences.',
                sections: [
                    {
                        title: 'Feature Comparison Matrix',
                        content: 'Use this table to quickly identify which version introduced specific features:'
                    },
                    {
                        title: 'CF 2021 → CF 2023 Key Changes:',
                        list: [
                            '✅ Property visibility modifiers (public, private, package)',
                            '✅ Cloud storage integration (S3, Azure, GCS)',
                            '✅ Enhanced JIT compilation',
                            '✅ Improved Docker support',
                            '✅ Better security features'
                        ],
                        versionBadge: '2023'
                    },
                    {
                        title: 'CF 2023 → CF 2025 Key Changes:',
                        list: [
                            '✅ Interface support for CFCs',
                            '✅ Multiple exception handling in catch statements',
                            '✅ Trailing comma support',
                            '✅ New CSV functions (CSVRead, CSVWrite, CSVProcess)',
                            '✅ 30+ new spreadsheet functions',
                            '✅ New subscription-based licensing model',
                            '✅ Microsoft Graph integration',
                            '✅ Enhanced Docker secrets support',
                            '✅ Deep copy parameter in duplicate()',
                            '✅ Deserialize JSON to query support'
                        ],
                        versionBadge: '2025'
                    },
                    {
                        title: 'Migration Considerations:',
                        list: [
                            '<strong>From 2021 to 2023:</strong> Focus on property visibility and cloud storage adoption',
                            '<strong>From 2023 to 2025:</strong> Consider interfaces, new licensing model, and CSV/spreadsheet enhancements',
                            '<strong>Testing:</strong> Always test applications thoroughly when upgrading versions',
                            '<strong>Deprecated Features:</strong> Review deprecated features list for each version',
                            '<strong>Documentation:</strong> Refer to official Adobe migration guides'
                        ]
                    }
                ]
            },
            {
                title: 'Resources & Documentation',
                content: 'Official Adobe resources for version information and migration guides.',
                sections: [
                    {
                        title: 'Official Documentation:',
                        list: [
                            '<a href="https://helpx.adobe.com/coldfusion/using/whats-new.html" target="_blank">What\'s New in ColdFusion 2025</a>',
                            '<a href="https://helpx.adobe.com/coldfusion/using/whats-new-2023.html" target="_blank">What\'s New in ColdFusion 2023</a>',
                            '<a href="https://helpx.adobe.com/coldfusion/user-guide.html" target="_blank">ColdFusion User Guide</a>'
                        ]
                    },
                    {
                        title: 'Key Takeaways:',
                        list: [
                            'Each version builds upon the previous with new features and improvements',
                            'Version badges throughout this training indicate feature availability',
                            'Plan migrations carefully and test thoroughly',
                            'Leverage new features to improve application performance and maintainability',
                            'Stay updated with Adobe\'s official documentation for the latest information'
                        ]
                    }
                ]
            }
        ]
    };
}
/**
 * Module 9: Advanced Topics - Modern Development
 * Covers REST APIs, Microservices, Containerization, CI/CD, Environment Management, and Stateless Design
 */
function getModule9Data() {
    return {
        title: 'Advanced Topics',
        description: 'REST APIs, Microservices, Containerization, CI/CD, and Modern Architecture',
        versions: ['2021', '2023', '2025'],
        lessons: [
            {
                title: 'Introduction to Modern Development',
                content: 'Modern ColdFusion development requires understanding of REST APIs, microservices architecture, containerization, CI/CD pipelines, and stateless design patterns. This module covers these essential topics for professional-grade applications.',
                sections: [
                    {
                        title: 'Introduction',
                        content: 'This module covers modern development practices essential for building scalable, maintainable ColdFusion applications. You\'ll learn about REST APIs, microservices, containerization with Docker, CI/CD pipelines, environment management, and stateless design.',
                        sections: [
                            {
                                title: 'Key Concepts',
                                list: [
                                    '<strong>REST APIs:</strong> Stateless, resource-based API design following REST principles',
                                    '<strong>Microservices:</strong> Architecture pattern breaking applications into independent, deployable services',
                                    '<strong>Containerization:</strong> Packaging applications with Docker for consistent deployment',
                                    '<strong>CI/CD:</strong> Continuous Integration and Continuous Deployment pipelines for automated testing and deployment',
                                    '<strong>Environment Management:</strong> Managing configuration across development, staging, and production',
                                    '<strong>Stateless Design:</strong> Applications that don\'t rely on server-side session state'
                                ]
                            },
                            {
                                title: 'Best Practices & Tips',
                                list: [
                                    '<strong>API Design:</strong> Follow REST conventions - use proper HTTP methods, status codes, and resource naming',
                                    '<strong>Microservices:</strong> Start with a monolith, extract services when needed - avoid premature microservices',
                                    '<strong>Containers:</strong> Keep containers small, use multi-stage builds, and follow security best practices',
                                    '<strong>CI/CD:</strong> Automate everything - tests, builds, deployments. Fail fast on errors',
                                    '<strong>Configuration:</strong> Never hardcode configuration - use environment variables or config files',
                                    '<strong>Stateless:</strong> Store state in databases or caches, not in application memory'
                                ],
                                tip: 'Modern development is about automation, scalability, and maintainability. Start simple and add complexity only when needed.'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'REST APIs with ColdFusion',
                content: 'Learn how to build RESTful APIs using ColdFusion\'s built-in REST support and best practices for API design.',
                sections: [
                    {
                        title: 'Creating REST Endpoints',
                        content: 'ColdFusion provides native support for REST APIs through CFCs with remote access and proper HTTP method handling.',
                        code: {
                            metadata: {
                                tags: ['REST', 'API', 'HTTP', 'JSON', 'CRUD', 'Component'],
                                complexity: 'intermediate',
                                relatedFunctions: ['cfhttp', 'deserializeJSON', 'serializeJSON', 'cfqueryparam', 'cfheader'],
                                security: ['Input validation required', 'SQL injection prevention via cfqueryparam', 'Authentication/authorization should be added', 'Rate limiting recommended'],
                                version: '2021',
                                useCases: ['Building RESTful APIs', 'Microservices endpoints', 'Mobile app backends', 'Third-party integrations']
                            },
                            tag: `<!--- REST API Component (CF 2021+) --->
<cfcomponent rest="true" restpath="/api/users">
    <!--- GET /api/users - List all users --->
    <cffunction name="getUsers" access="remote" httpmethod="GET" returntype="array" produces="application/json">
        <cfargument name="limit" type="numeric" default="10" restargsource="query">
        <cfargument name="offset" type="numeric" default="0" restargsource="query">
        
        <cfquery name="qUsers" datasource="mydb">
            SELECT userID, username, email, createdDate
            FROM users
            ORDER BY createdDate DESC
            LIMIT <cfqueryparam value="#arguments.limit#" cfsqltype="cf_sql_integer">
            OFFSET <cfqueryparam value="#arguments.offset#" cfsqltype="cf_sql_integer">
        </cfquery>
        
        <cfreturn qUsers>
    </cffunction>
    
    <!--- GET /api/users/{id} - Get single user --->
    <cffunction name="getUser" access="remote" httpmethod="GET" returntype="struct" produces="application/json" restpath="{id}">
        <cfargument name="id" type="numeric" required="true" restargsource="path">
        
        <cfquery name="qUser" datasource="mydb">
            SELECT userID, username, email, createdDate
            FROM users
            WHERE userID = <cfqueryparam value="#arguments.id#" cfsqltype="cf_sql_integer">
        </cfquery>
        
        <cfif qUser.recordCount EQ 0>
            <cfheader statuscode="404" statustext="Not Found">
            <cfreturn {error: "User not found"}>
        </cfif>
        
        <cfreturn qUser>
    </cffunction>
    
    <!--- POST /api/users - Create user --->
    <cffunction name="createUser" access="remote" httpmethod="POST" returntype="struct" produces="application/json" consumes="application/json">
        <cfargument name="body" type="struct" required="true" restargsource="body">
        
        <!--- Validate input --->
        <cfif NOT structKeyExists(arguments.body, "username") OR NOT structKeyExists(arguments.body, "email")>
            <cfheader statuscode="400" statustext="Bad Request">
            <cfreturn {error: "Username and email are required"}>
        </cfif>
        
        <cfquery name="qInsert" datasource="mydb" result="result">
            INSERT INTO users (username, email, createdDate)
            VALUES (
                <cfqueryparam value="#arguments.body.username#" cfsqltype="cf_sql_varchar">,
                <cfqueryparam value="#arguments.body.email#" cfsqltype="cf_sql_varchar">,
                <cfqueryparam value="#now()#" cfsqltype="cf_sql_timestamp">
            )
        </cfquery>
        
        <cfheader statuscode="201" statustext="Created">
        <cfreturn {id: result.generatedKey, message: "User created successfully"}>
    </cffunction>
    
    <!--- PUT /api/users/{id} - Update user --->
    <cffunction name="updateUser" access="remote" httpmethod="PUT" returntype="struct" produces="application/json" restpath="{id}" consumes="application/json">
        <cfargument name="id" type="numeric" required="true" restargsource="path">
        <cfargument name="body" type="struct" required="true" restargsource="body">
        
        <cfquery name="qUpdate" datasource="mydb" result="result">
            UPDATE users
            SET email = <cfqueryparam value="#arguments.body.email#" cfsqltype="cf_sql_varchar">
            WHERE userID = <cfqueryparam value="#arguments.id#" cfsqltype="cf_sql_integer">
        </cfquery>
        
        <cfif result.recordCount EQ 0>
            <cfheader statuscode="404" statustext="Not Found">
            <cfreturn {error: "User not found"}>
        </cfif>
        
        <cfreturn {message: "User updated successfully"}>
    </cffunction>
    
    <!--- DELETE /api/users/{id} - Delete user --->
    <cffunction name="deleteUser" access="remote" httpmethod="DELETE" returntype="struct" produces="application/json" restpath="{id}">
        <cfargument name="id" type="numeric" required="true" restargsource="path">
        
        <cfquery name="qDelete" datasource="mydb" result="result">
            DELETE FROM users
            WHERE userID = <cfqueryparam value="#arguments.id#" cfsqltype="cf_sql_integer">
        </cfquery>
        
        <cfif result.recordCount EQ 0>
            <cfheader statuscode="404" statustext="Not Found">
            <cfreturn {error: "User not found"}>
        </cfif>
        
        <cfheader statuscode="204" statustext="No Content">
        <cfreturn {message: "User deleted successfully"}>
    </cffunction>
</cfcomponent>`,
                            script: `// REST API Component (CF 2021+)
component rest="true" restpath="/api/users" {
    
    // GET /api/users - List all users
    remote array function getUsers(
        numeric limit = 10 restargsource="query",
        numeric offset = 0 restargsource="query"
    ) httpmethod="GET" produces="application/json" {
        var qUsers = queryExecute(
            "SELECT userID, username, email, createdDate
             FROM users
             ORDER BY createdDate DESC
             LIMIT :limit OFFSET :offset",
            {
                limit: {value: arguments.limit, sqltype: "integer"},
                offset: {value: arguments.offset, sqltype: "integer"}
            },
            {datasource: "mydb"}
        );
        
        return qUsers;
    }
    
    // GET /api/users/{id} - Get single user
    remote struct function getUser(
        required numeric id restargsource="path"
    ) httpmethod="GET" produces="application/json" restpath="{id}" {
        var qUser = queryExecute(
            "SELECT userID, username, email, createdDate
             FROM users
             WHERE userID = :id",
            {id: {value: arguments.id, sqltype: "integer"}},
            {datasource: "mydb"}
        );
        
        if (qUser.recordCount == 0) {
            getPageContext().getResponse().setStatus(404, "Not Found");
            return {error: "User not found"};
        }
        
        return qUser;
    }
    
    // POST /api/users - Create user
    remote struct function createUser(
        required struct body restargsource="body"
    ) httpmethod="POST" produces="application/json" consumes="application/json" {
        // Validate input
        if (!structKeyExists(arguments.body, "username") || !structKeyExists(arguments.body, "email")) {
            getPageContext().getResponse().setStatus(400, "Bad Request");
            return {error: "Username and email are required"};
        }
        
        var result = queryExecute(
            "INSERT INTO users (username, email, createdDate)
             VALUES (:username, :email, :createdDate)",
            {
                username: {value: arguments.body.username, sqltype: "varchar"},
                email: {value: arguments.body.email, sqltype: "varchar"},
                createdDate: {value: now(), sqltype: "timestamp"}
            },
            {datasource: "mydb", result: "insertResult"}
        );
        
        getPageContext().getResponse().setStatus(201, "Created");
        return {id: insertResult.generatedKey, message: "User created successfully"};
    }
    
    // PUT /api/users/{id} - Update user
    remote struct function updateUser(
        required numeric id restargsource="path",
        required struct body restargsource="body"
    ) httpmethod="PUT" produces="application/json" restpath="{id}" consumes="application/json" {
        var result = queryExecute(
            "UPDATE users SET email = :email WHERE userID = :id",
            {
                email: {value: arguments.body.email, sqltype: "varchar"},
                id: {value: arguments.id, sqltype: "integer"}
            },
            {datasource: "mydb", result: "updateResult"}
        );
        
        if (updateResult.recordCount == 0) {
            getPageContext().getResponse().setStatus(404, "Not Found");
            return {error: "User not found"};
        }
        
        return {message: "User updated successfully"};
    }
    
    // DELETE /api/users/{id} - Delete user
    remote struct function deleteUser(
        required numeric id restargsource="path"
    ) httpmethod="DELETE" produces="application/json" restpath="{id}" {
        var result = queryExecute(
            "DELETE FROM users WHERE userID = :id",
            {id: {value: arguments.id, sqltype: "integer"}},
            {datasource: "mydb", result: "deleteResult"}
        );
        
        if (deleteResult.recordCount == 0) {
            getPageContext().getResponse().setStatus(404, "Not Found");
            return {error: "User not found"};
        }
        
        getPageContext().getResponse().setStatus(204, "No Content");
        return {message: "User deleted successfully"};
    }
}`
                        },
                        codeTitle: 'REST API Component Example (CF 2021+)'
                    },
                    {
                        title: 'REST API Best Practices',
                        list: [
                            '<strong>Use Proper HTTP Methods:</strong> GET for retrieval, POST for creation, PUT for updates, DELETE for deletion',
                            '<strong>Return Appropriate Status Codes:</strong> 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error',
                            '<strong>Consistent Resource Naming:</strong> Use plural nouns (/api/users, /api/products)',
                            '<strong>Version Your APIs:</strong> Include version in path (/api/v1/users) or header',
                            '<strong>Validate All Input:</strong> Never trust client input - validate and sanitize',
                            '<strong>Use Query Parameters for Filtering:</strong> /api/users?limit=10&offset=0',
                            '<strong>Return Consistent JSON Structure:</strong> Use standard response format with data, error, and metadata',
                            '<strong>Implement Rate Limiting:</strong> Prevent abuse with rate limiting middleware',
                            '<strong>Document Your APIs:</strong> Use OpenAPI/Swagger for API documentation',
                            '<strong>Handle Errors Gracefully:</strong> Return meaningful error messages without exposing internals'
                        ],
                        tip: 'Design your REST APIs to be intuitive and consistent. Follow industry standards and document everything.'
                    }
                ]
            },
            {
                title: 'Microservices Architecture',
                content: 'Learn how to design and implement microservices with ColdFusion, including service communication, data management, and deployment strategies.',
                sections: [
                    {
                        title: 'Microservices Fundamentals',
                        content: 'Microservices break applications into small, independent services that communicate over well-defined APIs. Each service owns its data and can be deployed independently.',
                        list: [
                            '<strong>Service Independence:</strong> Each microservice is independently deployable and scalable',
                            '<strong>Data Ownership:</strong> Each service owns its database - avoid shared databases',
                            '<strong>API Communication:</strong> Services communicate via REST APIs or message queues',
                            '<strong>Fault Isolation:</strong> Failures in one service don\'t cascade to others',
                            '<strong>Technology Diversity:</strong> Each service can use different technologies if needed'
                        ]
                    },
                    {
                        title: 'Service Communication Patterns',
                        code: {
                            tag: `<!--- Service Client Component (CF 2021+) --->
<cfcomponent>
    <!--- Synchronous HTTP Communication --->
    <cffunction name="getUserFromUserService" returntype="struct">
        <cfargument name="userID" type="numeric" required="true">
        
        <cfhttp url="http://user-service:8080/api/users/#arguments.userID#" method="GET" result="httpResult">
            <cfhttpparam type="header" name="Content-Type" value="application/json">
            <cfhttpparam type="header" name="Authorization" value="Bearer #getAuthToken()#">
        </cfhttp>
        
        <cfif httpResult.statusCode EQ "200 OK">
            <cfreturn deserializeJSON(httpResult.fileContent)>
        <cfelse>
            <cfthrow message="User service error: #httpResult.statusCode#">
        </cfif>
    </cffunction>
    
    <!--- Async Communication with Message Queue (CF 2023+) --->
    <cffunction name="publishOrderEvent" returntype="void">
        <cfargument name="orderData" type="struct" required="true">
        
        <!--- Publish to message queue for async processing --->
        <cfset messageQueue = createObject("component", "MessageQueueService")>
        <cfset messageQueue.publish("order.created", serializeJSON(arguments.orderData))>
    </cffunction>
</cfcomponent>`,
                            script: `// Service Client Component (CF 2021+)
component {
    
    // Synchronous HTTP Communication
    function getUserFromUserService(required numeric userID) {
        var httpService = new http();
        httpService.setMethod("GET");
        httpService.setUrl("http://user-service:8080/api/users/" & arguments.userID);
        httpService.addParam(type="header", name="Content-Type", value="application/json");
        httpService.addParam(type="header", name="Authorization", value="Bearer " & getAuthToken());
        
        var result = httpService.send().getPrefix();
        
        if (result.statusCode == "200 OK") {
            return deserializeJSON(result.fileContent);
        } else {
            throw("User service error: " & result.statusCode);
        }
    }
    
    // Async Communication with Message Queue (CF 2023+)
    function publishOrderEvent(required struct orderData) {
        var messageQueue = new MessageQueueService();
        messageQueue.publish("order.created", serializeJSON(arguments.orderData));
    }
}`
                        },
                        codeTitle: 'Microservice Communication Patterns'
                    },
                    {
                        title: 'Microservices Best Practices',
                        list: [
                            '<strong>Start with Monolith:</strong> Build a monolith first, extract services when needed',
                            '<strong>Database per Service:</strong> Each service should have its own database',
                            '<strong>API Gateway:</strong> Use an API gateway to route requests to appropriate services',
                            '<strong>Service Discovery:</strong> Implement service discovery for dynamic service location',
                            '<strong>Circuit Breaker Pattern:</strong> Implement circuit breakers to handle service failures gracefully',
                            '<strong>Distributed Tracing:</strong> Use tracing tools to debug distributed systems',
                            '<strong>Health Checks:</strong> Implement health check endpoints for monitoring',
                            '<strong>Configuration Management:</strong> Externalize configuration for each service',
                            '<strong>Logging & Monitoring:</strong> Centralized logging and monitoring for all services',
                            '<strong>Security:</strong> Implement authentication and authorization at API gateway level'
                        ],
                        tip: 'Microservices add complexity. Only use them when you have a clear need for independent scaling or deployment.'
                    }
                ]
            },
            {
                title: 'Containerization with Docker',
                content: 'Learn how to containerize ColdFusion applications using Docker for consistent deployment across environments.',
                sections: [
                    {
                        title: 'Docker Basics for ColdFusion',
                        content: 'Docker allows you to package your ColdFusion application with all its dependencies into a container that runs consistently anywhere.',
                        code: {
                            tag: `<!--- Dockerfile for ColdFusion Application (CF 2023+) --->
# Use Adobe's official ColdFusion image
FROM adobe/coldfusion:2023

# Set working directory
WORKDIR /app

# Copy application files
COPY ./myapp /app/

# Copy configuration
COPY ./config/application.properties /opt/coldfusion/cfusion/bin/

# Expose port
EXPOSE 8500

# Start ColdFusion
CMD ["/opt/coldfusion/cfusion/bin/coldfusion", "start"]`,
                            script: `# Dockerfile for ColdFusion Application (CF 2023+)
# Use Adobe's official ColdFusion image
FROM adobe/coldfusion:2023

# Set working directory
WORKDIR /app

# Copy application files
COPY ./myapp /app/

# Copy configuration
COPY ./config/application.properties /opt/coldfusion/cfusion/bin/

# Expose port
EXPOSE 8500

# Start ColdFusion
CMD ["/opt/coldfusion/cfusion/bin/coldfusion", "start"]`
                        },
                        codeTitle: 'Dockerfile Example for ColdFusion'
                    },
                    {
                        title: 'Docker Compose for Multi-Service Applications',
                        code: {
                            tag: `# docker-compose.yml for Microservices
version: '3.8'

services:
  # ColdFusion API Service
  api-service:
    build: ./api-service
    ports:
      - "8500:8500"
    environment:
      - DB_HOST=db
      - DB_NAME=myapp
      - DB_USER=cfuser
      - DB_PASSWORD=cfpass
    depends_on:
      - db
    networks:
      - app-network

  # Database Service
  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=cfuser
      - POSTGRES_PASSWORD=cfpass
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - app-network

  # Redis Cache
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    networks:
      - app-network

volumes:
  db-data:

networks:
  app-network:
    driver: bridge`,
                            script: `# docker-compose.yml for Microservices
version: '3.8'

services:
  # ColdFusion API Service
  api-service:
    build: ./api-service
    ports:
      - "8500:8500"
    environment:
      - DB_HOST=db
      - DB_NAME=myapp
      - DB_USER=cfuser
      - DB_PASSWORD=cfpass
    depends_on:
      - db
    networks:
      - app-network

  # Database Service
  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=cfuser
      - POSTGRES_PASSWORD=cfpass
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - app-network

  # Redis Cache
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    networks:
      - app-network

volumes:
  db-data:

networks:
  app-network:
    driver: bridge`
                        },
                        codeTitle: 'Docker Compose Configuration'
                    },
                    {
                        title: 'Docker Best Practices',
                        list: [
                            '<strong>Use Multi-Stage Builds:</strong> Reduce image size by using multi-stage builds',
                            '<strong>Layer Caching:</strong> Order Dockerfile commands from least to most frequently changing',
                            '<strong>Security:</strong> Run containers as non-root user, scan images for vulnerabilities',
                            '<strong>Environment Variables:</strong> Use environment variables for configuration, not hardcoded values',
                            '<strong>Health Checks:</strong> Add HEALTHCHECK instruction to Dockerfile',
                            '<strong>Resource Limits:</strong> Set memory and CPU limits for containers',
                            '<strong>Volumes:</strong> Use named volumes for persistent data, not bind mounts in production',
                            '<strong>Networking:</strong> Use Docker networks for service isolation',
                            '<strong>Logging:</strong> Configure proper logging drivers',
                            '<strong>Updates:</strong> Keep base images updated for security patches'
                        ],
                        tip: 'Docker makes deployment consistent, but don\'t forget about security and resource management.'
                    }
                ]
            },
            {
                title: 'CI/CD Pipelines',
                content: 'Learn how to set up Continuous Integration and Continuous Deployment pipelines for ColdFusion applications.',
                sections: [
                    {
                        title: 'CI/CD Fundamentals',
                        content: 'CI/CD automates testing, building, and deployment of your application. This ensures code quality and reduces deployment errors.',
                        list: [
                            '<strong>Continuous Integration (CI):</strong> Automatically test and build code on every commit',
                            '<strong>Continuous Deployment (CD):</strong> Automatically deploy code that passes tests',
                            '<strong>Pipeline Stages:</strong> Build → Test → Deploy → Verify',
                            '<strong>Automation:</strong> Reduces manual errors and speeds up delivery',
                            '<strong>Quality Gates:</strong> Code must pass tests before deployment'
                        ]
                    },
                    {
                        title: 'GitHub Actions Example',
                        code: {
                            tag: '# .github/workflows/coldfusion-ci.yml\nname: ColdFusion CI/CD\n\non:\n  push:\n    branches: [ main, develop ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      \n      - name: Setup Java\n        uses: actions/setup-java@v3\n        with:\n          java-version: \'11\'\n      \n      - name: Run Tests\n        run: |\n          # Run ColdFusion unit tests\n          # This would use TestBox or similar testing framework\n          echo "Running tests..."\n      \n      - name: Build Docker Image\n        run: |\n          docker build -t myapp:${GITHUB_SHA} .\n      \n      - name: Push to Registry\n        if: github.ref == \'refs/heads/main\'\n        run: |\n          docker push myapp:${GITHUB_SHA}\n      \n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    if: github.ref == \'refs/heads/main\'\n    steps:\n      - name: Deploy to Production\n        run: |\n          # Deploy to production server\n          echo "Deploying to production..."',
                            script: '# .github/workflows/coldfusion-ci.yml\nname: ColdFusion CI/CD\n\non:\n  push:\n    branches: [ main, develop ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      \n      - name: Setup Java\n        uses: actions/setup-java@v3\n        with:\n          java-version: \'11\'\n      \n      - name: Run Tests\n        run: |\n          # Run ColdFusion unit tests\n          # This would use TestBox or similar testing framework\n          echo "Running tests..."\n      \n      - name: Build Docker Image\n        run: |\n          docker build -t myapp:${GITHUB_SHA} .\n      \n      - name: Push to Registry\n        if: github.ref == \'refs/heads/main\'\n        run: |\n          docker push myapp:${GITHUB_SHA}\n      \n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    if: github.ref == \'refs/heads/main\'\n    steps:\n      - name: Deploy to Production\n        run: |\n          # Deploy to production server\n          echo "Deploying to production..."'
                        },
                        codeTitle: 'GitHub Actions CI/CD Pipeline'
                    },
                    {
                        title: 'CI/CD Best Practices',
                        list: [
                            '<strong>Automate Everything:</strong> Tests, builds, and deployments should be automated',
                            '<strong>Fail Fast:</strong> Stop pipeline on first failure to save time',
                            '<strong>Parallel Execution:</strong> Run independent tests in parallel',
                            '<strong>Environment Parity:</strong> Keep dev, staging, and production environments similar',
                            '<strong>Version Control:</strong> Store pipeline configuration in version control',
                            '<strong>Secrets Management:</strong> Use secure secret management for credentials',
                            '<strong>Rollback Strategy:</strong> Have a plan to rollback failed deployments',
                            '<strong>Monitoring:</strong> Monitor deployments and alert on failures',
                            '<strong>Documentation:</strong> Document pipeline stages and requirements',
                            '<strong>Incremental Deployment:</strong> Deploy to staging before production'
                        ],
                        tip: 'A good CI/CD pipeline catches errors early and deploys with confidence.'
                    }
                ]
            },
            {
                title: 'Environment Management',
                content: 'Learn how to manage configuration across different environments (development, staging, production) securely and efficiently.',
                sections: [
                    {
                        title: 'Configuration Management',
                        content: 'Never hardcode configuration values. Use environment variables, configuration files, or external configuration services.',
                        code: {
                            tag: `<!--- Environment Configuration Component (CF 2021+) --->
<cfcomponent>
    <!--- Load configuration from environment variables --->
    <cfset variables.config = {
        environment: getEnvironmentVariable("APP_ENV", "development"),
        database: {
            host: getEnvironmentVariable("DB_HOST", "127.0.0.1"),
            name: getEnvironmentVariable("DB_NAME", "myapp"),
            user: getEnvironmentVariable("DB_USER", "cfuser"),
            password: getEnvironmentVariable("DB_PASSWORD", "")
        },
        api: {
            baseUrl: getEnvironmentVariable("API_BASE_URL", "http://127.0.0.1:8500"),
            apiKey: getEnvironmentVariable("API_KEY", "")
        },
        cache: {
            enabled: getEnvironmentVariable("CACHE_ENABLED", "true") EQ "true",
            ttl: val(getEnvironmentVariable("CACHE_TTL", "3600"))
        }
    }>
    
    <cffunction name="getConfig" returntype="struct">
        <cfreturn variables.config>
    </cffunction>
    
    <cffunction name="getDatabaseDSN" returntype="string">
        <cfreturn variables.config.database.name>
    </cffunction>
    
    <cffunction name="isProduction" returntype="boolean">
        <cfreturn variables.config.environment EQ "production">
    </cffunction>
</cfcomponent>`,
                            script: `// Environment Configuration Component (CF 2021+)
component {
    // Load configuration from environment variables
    variables.config = {
        environment: getEnvironmentVariable("APP_ENV", "development"),
        database: {
            host: getEnvironmentVariable("DB_HOST", "127.0.0.1"),
            name: getEnvironmentVariable("DB_NAME", "myapp"),
            user: getEnvironmentVariable("DB_USER", "cfuser"),
            password: getEnvironmentVariable("DB_PASSWORD", "")
        },
        api: {
            baseUrl: getEnvironmentVariable("API_BASE_URL", "http://127.0.0.1:8500"),
            apiKey: getEnvironmentVariable("API_KEY", "")
        },
        cache: {
            enabled: getEnvironmentVariable("CACHE_ENABLED", "true") == "true",
            ttl: val(getEnvironmentVariable("CACHE_TTL", "3600"))
        }
    };
    
    function getConfig() {
        return variables.config;
    }
    
    function getDatabaseDSN() {
        return variables.config.database.name;
    }
    
    function isProduction() {
        return variables.config.environment == "production";
    }
}`
                        },
                        codeTitle: 'Environment Configuration Component'
                    },
                    {
                        title: 'Environment Management Best Practices',
                        list: [
                            '<strong>Never Hardcode:</strong> Never commit secrets or configuration to version control',
                            '<strong>Use Environment Variables:</strong> Store configuration in environment variables',
                            '<strong>Separate Config Files:</strong> Use different config files per environment (config.dev.cfm, config.prod.cfm)',
                            '<strong>Secret Management:</strong> Use secret management services (AWS Secrets Manager, Azure Key Vault)',
                            '<strong>Default Values:</strong> Provide sensible defaults for development',
                            '<strong>Validation:</strong> Validate configuration on application startup',
                            '<strong>Documentation:</strong> Document all required environment variables',
                            '<strong>12-Factor App:</strong> Follow 12-factor app principles for configuration',
                            '<strong>Configuration as Code:</strong> Store configuration in version control (without secrets)',
                            '<strong>Environment Parity:</strong> Keep environments as similar as possible'
                        ],
                        tip: 'Configuration management is critical for security and deployment flexibility. Get it right from the start.'
                    }
                ]
            },
            {
                title: 'Stateless Design',
                content: 'Learn how to design stateless applications that scale horizontally and work well in containerized and cloud environments.',
                sections: [
                    {
                        title: 'Stateless Application Principles',
                        content: 'Stateless applications don\'t store session state in server memory. All state is stored in databases, caches, or client-side.',
                        list: [
                            '<strong>No Server-Side Session State:</strong> Don\'t rely on Application or Session scopes for critical data',
                            '<strong>Database Storage:</strong> Store state in databases for persistence',
                            '<strong>Cache for Performance:</strong> Use Redis or similar for temporary state with TTL',
                            '<strong>Client-Side Tokens:</strong> Use JWT or similar tokens for authentication state',
                            '<strong>Horizontal Scaling:</strong> Any server instance can handle any request',
                            '<strong>Load Balancing:</strong> Requests can be distributed across multiple servers'
                        ]
                    },
                    {
                        title: 'Stateless Session Management',
                        code: {
                            tag: `<!--- Stateless Session with JWT (CF 2021+) --->
<cfcomponent>
    <!--- Generate JWT token for user session --->
    <cffunction name="createSessionToken" returntype="string">
        <cfargument name="userID" type="numeric" required="true">
        <cfargument name="username" type="string" required="true">
        
        <!--- Create JWT payload --->
        <cfset payload = {
            userID: arguments.userID,
            username: arguments.username,
            iat: dateDiff("s", createDate(1970, 1, 1), now()),
            exp: dateDiff("s", createDate(1970, 1, 1), dateAdd("h", 24, now()))
        }>
        
        <!--- Sign and encode JWT (using Java library) --->
        <cfset jwt = createObject("java", "io.jsonwebtoken.Jwts")>
        <cfset secret = getEnvironmentVariable("JWT_SECRET")>
        
        <cfreturn jwt.builder()
            .setClaims(payload)
            .signWith(jwt.secretKeyFor(jwt.SignatureAlgorithm.HS256))
            .compact()>
    </cffunction>
    
    <!--- Verify and decode JWT token --->
    <cffunction name="verifySessionToken" returntype="struct">
        <cfargument name="token" type="string" required="true">
        
        <cfset jwt = createObject("java", "io.jsonwebtoken.Jwts")>
        <cfset secret = getEnvironmentVariable("JWT_SECRET")>
        
        <cftry>
            <cfset claims = jwt.parser()
                .setSigningKey(secret)
                .parseClaimsJws(arguments.token)
                .getBody()>
            
            <cfreturn claims>
            <cfcatch>
                <cfthrow message="Invalid token">
            </cfcatch>
        </cftry>
    </cffunction>
    
    <!--- Store user data in cache (Redis) instead of session --->
    <cffunction name="storeUserData" returntype="void">
        <cfargument name="userID" type="numeric" required="true">
        <cfargument name="userData" type="struct" required="true">
        
        <!--- Store in Redis with TTL --->
        <cfset cacheKey = "user:#arguments.userID#">
        <cfset cachePut(cacheKey, arguments.userData, createTimeSpan(0, 1, 0, 0))>
    </cffunction>
</cfcomponent>`,
                            script: `// Stateless Session with JWT (CF 2021+)
component {
    
    // Generate JWT token for user session
    function createSessionToken(required numeric userID, required string username) {
        // Create JWT payload
        var payload = {
            userID: arguments.userID,
            username: arguments.username,
            iat: dateDiff("s", createDate(1970, 1, 1), now()),
            exp: dateDiff("s", createDate(1970, 1, 1), dateAdd("h", 24, now()))
        };
        
        // Sign and encode JWT (using Java library)
        var jwt = createObject("java", "io.jsonwebtoken.Jwts");
        var secret = getEnvironmentVariable("JWT_SECRET");
        
        return jwt.builder()
            .setClaims(payload)
            .signWith(jwt.secretKeyFor(jwt.SignatureAlgorithm.HS256))
            .compact();
    }
    
    // Verify and decode JWT token
    function verifySessionToken(required string token) {
        var jwt = createObject("java", "io.jsonwebtoken.Jwts");
        var secret = getEnvironmentVariable("JWT_SECRET");
        
        try {
            var claims = jwt.parser()
                .setSigningKey(secret)
                .parseClaimsJws(arguments.token)
                .getBody();
            
            return claims;
        } catch (any e) {
            throw("Invalid token");
        }
    }
    
    // Store user data in cache (Redis) instead of session
    function storeUserData(required numeric userID, required struct userData) {
        // Store in Redis with TTL
        var cacheKey = "user:" & arguments.userID;
        cachePut(cacheKey, arguments.userData, createTimeSpan(0, 1, 0, 0));
    }
}`
                        },
                        codeTitle: 'Stateless Session Management Example'
                    },
                    {
                        title: 'Stateless Design Best Practices',
                        list: [
                            '<strong>Avoid Session Scope:</strong> Don\'t use Session scope for critical application state',
                            '<strong>Use Database:</strong> Store persistent state in databases',
                            '<strong>Use Cache:</strong> Use Redis or similar for temporary state with expiration',
                            '<strong>JWT Tokens:</strong> Use JWT for authentication state instead of server sessions',
                            '<strong>Stateless APIs:</strong> Design REST APIs to be stateless',
                            '<strong>Idempotency:</strong> Make operations idempotent when possible',
                            '<strong>Request Context:</strong> Pass all needed context in request headers or body',
                            '<strong>Load Balancing:</strong> Design for load balancing and horizontal scaling',
                            '<strong>Sticky Sessions:</strong> Avoid sticky sessions - they prevent true horizontal scaling',
                            '<strong>State Machines:</strong> Use state machines for complex workflows stored in database'
                        ],
                        tip: 'Stateless design enables horizontal scaling and works better with containers and cloud platforms.'
                    }
                ]
            }
        ]
    };
}
function getModule10Data() { return { title: 'Quality Assurance & Debugging', description: 'Testing, debugging, and monitoring', versions: ['2021', '2023', '2025'], lessons: [] }; }
function getModule11Data() { return { title: 'Migration & Compatibility', description: 'Upgrading and modernizing code', versions: ['2021', '2023', '2025'], lessons: [] }; }
function getModule12Data() { return { title: 'Projects & Labs', description: 'Hands-on exercises and capstone project', versions: ['2021', '2023', '2025'], lessons: [] }; }

/**
 * Module 13: Introduction to AI in ColdFusion (Ch 22 — Adobe AI outline)
 * Aligned with CF 2025.07 Alpha Refresh. Expand from CF 2025.07 Alpha Refresh docs when available.
 */
function getModule13Data() {
    return {
        title: 'Introduction to AI in ColdFusion',
        description: 'ColdFusion\'s AI architecture, vendor-neutral design, supported providers, ChatModel vs AIService vs RAG, and installing AI packages (CFPM).',
        versions: ['2025'],
        lessons: [
            {
                title: 'What is AI integration in ColdFusion',
                content: 'How generative AI integrates into enterprise CFML applications and ColdFusion\'s role in the AI stack.',
                sections: [
                    {
                        title: 'Introduction',
                        content: 'This module introduces ColdFusion\'s AI architecture and how generative AI fits into enterprise CFML apps. Topics align with Adobe\'s ColdFusion 2025.07 Alpha Refresh documentation.',
                        sections: [
                            {
                                title: 'Key Concepts',
                                list: [
                                    '<strong>Layered architecture:</strong> ChatModel, AIService, MCP, and RAG pipelines',
                                    '<strong>Vendor-neutral design:</strong> Switch providers without rewriting application logic',
                                    '<strong>Enterprise readiness:</strong> Privacy, portability, and orchestration as infrastructure'
                                ]
                            },
                            {
                                title: 'Documentation References',
                                list: [
                                    '<a href="https://helpx.adobe.com/coldfusion/using/ai-features.html" target="_blank">ColdFusion 2025 AI Features</a>',
                                    'CF 2025.07 Alpha Refresh documentation (project root when available)'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Vendor-neutral AI architecture',
                content: 'ColdFusion\'s abstraction over model providers so you can change backends without code changes.',
                sections: [
                    {
                        title: 'Vendor-Neutral Design',
                        content: 'The AI layer is built so that provider-specific details (OpenAI, Mistral, Ollama, etc.) are configured, not hard-coded. You can swap models or move between cloud and local without rewriting your CFML.'
                    }
                ]
            },
            {
                title: 'Supported model providers',
                content: 'OpenAI, Mistral, Ollama, and other supported providers—configuration and capabilities.',
                sections: [
                    {
                        title: 'Supported Providers',
                        content: 'ColdFusion supports multiple model providers including OpenAI, Mistral, Ollama, and others. Each is configured via a common pattern (e.g., provider name, API key, model name) so your app stays provider-agnostic.'
                    }
                ]
            },
            {
                title: 'Chat Model vs AI Service vs RAG architecture',
                content: 'When to use ChatModel (stateless), AIService (stateful + tools), or RAG (retrieval + generation) and how they fit together.',
                sections: [
                    {
                        title: 'Three Main Patterns',
                        list: [
                            '<strong>ChatModel:</strong> Stateless LLM interface; send prompts, get responses.',
                            '<strong>AIService:</strong> Stateful; conversation memory, persona, and function tools.',
                            '<strong>RAG:</strong> Retrieval + generation; reduce hallucinations by grounding answers in your data.'
                        ]
                    }
                ]
            },
            {
                title: 'Why AI as infrastructure',
                content: 'Privacy, portability, and orchestration benefits of treating AI as part of your application infrastructure.',
                sections: [
                    {
                        title: 'Infrastructure Benefits',
                        list: [
                            '<strong>Privacy:</strong> Control where data is sent; use local or private endpoints when required.',
                            '<strong>Portability:</strong> Change providers or models without rewriting business logic.',
                            '<strong>Orchestration:</strong> Combine multiple models, tools, and data sources in one workflow.'
                        ]
                    }
                ]
            },
            {
                title: 'Installing and enabling AI packages (CFPM)',
                content: 'Use ColdFusion Package Manager (CFPM) to install and enable the AI packages required for ChatModel, AIService, and RAG.',
                sections: [
                    {
                        title: 'CFPM and AI',
                        content: 'AI features are delivered as packages. Use CFPM to install and enable them so getChatModel(), getAIService(), and related APIs are available in your ColdFusion 2025 environment.'
                    }
                ]
            },
            {
                title: 'Core AI workflow overview',
                content: 'End-to-end overview of the core AI workflow: from configuration and prompts to responses and tool use.',
                sections: [
                    {
                        title: 'Workflow Overview',
                        content: 'ColdFusion provides a layered architecture: ChatModel for stateless LLM calls, AIService for conversational memory and tools, MCP for standardized tool and resource access, and RAG pipelines for retrieval-augmented generation. Later modules drill into each layer.'
                    }
                ]
            }
        ]
    };
}
function getModule14Data() {
    return {
        title: 'Chat Models and Prompting',
        description: 'Create ChatModel instances, configure parameters, send prompts, system messages, temperature and token limits, structured output, and logging.',
        versions: ['2025'],
        lessons: [
            { title: 'Creating a ChatModel instance', content: 'How to obtain a ChatModel using getChatModel() and configuration.', sections: [{ title: 'Overview', content: 'ChatModel acts as a stateless LLM interface returning generated responses. Create it with provider and model settings.' }] },
            { title: 'Chat model configuration parameters', content: 'Provider, API key, model name, temperature, and other options.', sections: [{ title: 'Parameters', content: 'Configure provider, API key, model name, temperature, token limits, and other provider-specific options.' }] },
            { title: 'Sending prompts using .chat()', content: 'Send user messages and receive model responses.', sections: [{ title: 'chat()', content: 'Pass a string or a structured request (system + user messages) to get a response.' }] },
            { title: 'Prompt types and system messages', content: 'System vs user messages and when to use each.', sections: [{ title: 'Message Types', content: 'System messages set behavior and persona; user messages are the actual prompts.' }] },
            { title: 'Managing temperature and token limits', content: 'Control randomness and context length.', sections: [{ title: 'Temperature and Tokens', content: 'Temperature affects creativity; token limits cap input and output size.' }] },
            { title: 'Response formats and structured output', content: 'Getting structured data from the model when needed.', sections: [{ title: 'Structured Output', content: 'Request JSON or other formats for parsing in your application.' }] },
            { title: 'Model switching without code changes', content: 'Change model or provider via configuration only.', sections: [{ title: 'Switching Models', content: 'Vendor-neutral design allows changing model name or provider in config without code changes.' }] },
            { title: 'Logging requests and responses', content: 'Observability for AI calls.', sections: [{ title: 'Logging', content: 'Log prompts and responses for debugging, auditing, and cost tracking.' }] }
        ]
    };
}
function getModule15Data() {
    return {
        title: 'AIService and Conversational Memory',
        description: 'AIService overview, ChatModel vs AIService, chat memory, personas, conversation lifecycle, function tools, Redis/Memcached memory, and conversational agents.',
        versions: ['2025'],
        lessons: [
            { title: 'AIService overview', content: 'What AIService is and when to use it.', sections: [{ title: 'Overview', content: 'AIService manages conversation state and tool execution on top of a ChatModel.' }] },
            { title: 'Difference between ChatModel and AIService', content: 'Stateless vs stateful; when to use which.', sections: [{ title: 'ChatModel vs AIService', content: 'ChatModel: stateless. AIService: stateful with memory, persona, and tools.' }] },
            { title: 'Chat memory and persistent context', content: 'Keeping conversation history across turns.', sections: [{ title: 'Memory', content: 'Configure max messages and per-user or global memory for context.' }] },
            { title: 'Persona and system prompts', content: 'Setting the assistant\'s behavior and tone.', sections: [{ title: 'Persona', content: 'System message defines the assistant persona and instructions.' }] },
            { title: 'Managing conversation lifecycle', content: 'Starting, continuing, and clearing conversations.', sections: [{ title: 'Lifecycle', content: 'Create, use, and optionally clear or expire conversation state.' }] },
            { title: 'Function tools integration', content: 'Letting the AI call your CFC methods.', sections: [{ title: 'Tools', content: 'Register CFCs and methods as tools; the model decides when to call them.' }] },
            { title: 'Using Redis/Memcached for chat memory', content: 'Persisting memory in Redis or Memcached.', sections: [{ title: 'External Memory', content: 'Use Redis or Memcached for scalable, shared conversation memory.' }] },
            { title: 'Building conversational agents', content: 'End-to-end agents with memory and tools.', sections: [{ title: 'Agents', content: 'Combine AIService with tools and memory to build conversational agents.' }] }
        ]
    };
}
function getModule16Data() {
    return {
        title: 'Function Tools and AI Orchestration',
        description: 'Function tools, tool-calling architecture, creating callable functions, tool selection by AI, API integration, security, and orchestration patterns.',
        versions: ['2025'],
        lessons: [
            { title: 'What are function tools', content: 'Callable CFC methods the AI can invoke.', sections: [{ title: 'Function Tools', content: 'Tools are CFC methods exposed to the model with names and descriptions.' }] },
            { title: 'Tool calling architecture', content: 'How the model requests tool calls and how ColdFusion executes them.', sections: [{ title: 'Architecture', content: 'Model returns tool-call requests; runtime invokes CFCs and returns results.' }] },
            { title: 'Creating callable functions', content: 'Implementing CFC methods for tool use.', sections: [{ title: 'Creating Tools', content: 'Define methods, parameters, and descriptions for the model to use.' }] },
            { title: 'Tool selection by AI models', content: 'How the model chooses which tool to call.', sections: [{ title: 'Selection', content: 'Model uses descriptions and context to decide when and which tool to call.' }] },
            { title: 'Integrating APIs with tools', content: 'Wrapping external APIs as tools.', sections: [{ title: 'APIs as Tools', content: 'Call external APIs from CFC methods and expose them as tools.' }] },
            { title: 'Security considerations', content: 'Validating inputs and protecting sensitive operations.', sections: [{ title: 'Security', content: 'Validate and authorize tool inputs; avoid exposing dangerous operations.' }] },
            { title: 'Real-world orchestration patterns', content: 'Multi-step workflows combining tools and AI.', sections: [{ title: 'Patterns', content: 'Chain tool calls and AI responses for complex workflows.' }] }
        ]
    };
}
function getModule17Data() {
    return {
        title: 'Retrieval Augmented Generation (RAG)',
        description: 'What is RAG, architecture, quick start, document ingestion, loaders and splitters, embedding models, ask() vs chat(), sync vs async, and best practices.',
        versions: ['2025'],
        lessons: [
            { title: 'What is RAG and why use it', content: 'Retrieval + generation to reduce hallucinations.', sections: [{ title: 'RAG Overview', content: 'RAG combines retrieval from your data with generation so answers are grounded in context.' }] },
            { title: 'RAG architecture overview', content: 'Components: documents, embeddings, vector store, and LLM.', sections: [{ title: 'Architecture', content: 'Ingest docs → embed → store; at query time retrieve → augment prompt → generate.' }] },
            { title: 'Simple RAG quick start', content: 'Minimal RAG pipeline in ColdFusion.', sections: [{ title: 'Quick Start', content: 'Load docs, embed, store; query with ask() or chat() using retrieved context.' }] },
            { title: 'Document ingestion pipeline', content: 'Getting documents into the vector store.', sections: [{ title: 'Ingestion', content: 'Load, split, embed, and add to vector store.' }] },
            { title: 'Document loaders and splitters', content: 'Loading and chunking text.', sections: [{ title: 'Loaders and Splitters', content: 'Load from files or URLs; split into chunks for embedding.' }] },
            { title: 'Embedding models', content: 'Choosing and using embedding models for RAG.', sections: [{ title: 'Embeddings', content: 'Use the same or compatible embedding model for ingestion and queries.' }] },
            { title: 'Querying with ask() vs chat()', content: 'One-shot vs conversational RAG.', sections: [{ title: 'ask() vs chat()', content: 'ask() for single Q&A; chat() for multi-turn with context.' }] },
            { title: 'Sync vs async ingestion', content: 'When to ingest synchronously or in the background.', sections: [{ title: 'Sync vs Async', content: 'Sync for small batches; async for large document sets.' }] },
            { title: 'Best practices for enterprise RAG', content: 'Chunking, metadata, and quality.', sections: [{ title: 'Best Practices', content: 'Tune chunk size, add metadata, monitor quality and latency.' }] }
        ]
    };
}
function getModule18Data() {
    return {
        title: 'Vector Databases and Embeddings',
        description: 'Embeddings, vector databases, VectorStore API, providers (Milvus, Pinecone, Qdrant, Chroma), in-memory store, distance metrics, metadata filtering, hybrid search.',
        versions: ['2025'],
        lessons: [
            { title: 'What is an embedding', content: 'Vector representation of text for semantic similarity.', sections: [{ title: 'Embeddings', content: 'Embeddings are numeric vectors that capture meaning; similar text has similar vectors.' }] },
            { title: 'Vector databases explained', content: 'Stores that support similarity search.', sections: [{ title: 'Vector DBs', content: 'Databases optimized for storing and searching high-dimensional vectors.' }] },
            { title: 'VectorStore API overview', content: 'ColdFusion\'s unified VectorStore interface.', sections: [{ title: 'VectorStore API', content: 'Single API to add, search, and manage vectors across providers.' }] },
            { title: 'Supported providers (Milvus, Pinecone, Qdrant, Chroma)', content: 'Configuring different backends.', sections: [{ title: 'Providers', content: 'Milvus, Pinecone, Qdrant, Chroma, and in-memory for development.' }] },
            { title: 'Creating an in-memory vector store', content: 'Quick start without external DB.', sections: [{ title: 'In-Memory', content: 'Use in-memory store for testing and demos.' }] },
            { title: 'Adding and searching vectors', content: 'add(), addAll(), and search().', sections: [{ title: 'Add and Search', content: 'Add documents (with optional auto-embedding) and search by text or vector.' }] },
            { title: 'Distance metrics (Cosine, Euclidean, DotProduct)', content: 'Choosing similarity metric.', sections: [{ title: 'Metrics', content: 'Cosine, Euclidean, and DotProduct; choose per use case.' }] },
            { title: 'Metadata filtering', content: 'Filtering search results by metadata.', sections: [{ title: 'Filtering', content: 'Apply metadata filters to narrow search results.' }] },
            { title: 'Hybrid search concepts', content: 'Combining vector and keyword search.', sections: [{ title: 'Hybrid', content: 'Combine semantic and keyword search for better recall.' }] }
        ]
    };
}
function getModule19Data() {
    return {
        title: 'Document Processing for AI',
        description: 'DocumentProcessor overview, loading documents, text chunking, transforming documents, ingesting into vector stores, async processing, and supported formats.',
        versions: ['2025'],
        lessons: [
            { title: 'DocumentProcessor overview', content: 'ColdFusion\'s document processing pipeline.', sections: [{ title: 'Overview', content: 'DocumentProcessor loads, splits, and optionally transforms documents for AI.' }] },
            { title: 'Loading documents', content: 'From files, URLs, or other sources.', sections: [{ title: 'Loading', content: 'Load from local files, HTTP, or other supported sources.' }] },
            { title: 'Splitting text into chunks', content: 'Chunking strategies for RAG.', sections: [{ title: 'Splitting', content: 'Split by size, sentences, or semantic boundaries.' }] },
            { title: 'Transforming documents', content: 'Optional transforms before embedding.', sections: [{ title: 'Transforms', content: 'Clean, normalize, or enrich text before embedding.' }] },
            { title: 'Ingesting into vector stores', content: 'Pipeline from document to vector store.', sections: [{ title: 'Ingestion', content: 'End-to-end: load → split → embed → add to store.' }] },
            { title: 'Async document processing', content: 'Background ingestion for large corpora.', sections: [{ title: 'Async', content: 'Process documents asynchronously to avoid blocking.' }] },
            { title: 'Supported document formats', content: 'PDF, HTML, text, and more.', sections: [{ title: 'Formats', content: 'Supported formats depend on loaders; common ones include PDF, HTML, plain text.' }] }
        ]
    };
}
function getModule20Data() {
    return {
        title: 'Model Context Protocol (MCP)',
        description: 'MCP introduction, client vs server, MCPClient in ColdFusion, HTTP vs STDIO transports, tools and resources, roots and scoping, sampling and elicitation, security.',
        versions: ['2025'],
        lessons: [
            { title: 'Introduction to MCP', content: 'What MCP is and why it matters for enterprise AI.', sections: [{ title: 'MCP', content: 'MCP standardizes how AI agents interact with tools and external systems.' }] },
            { title: 'MCP Client vs MCP Server', content: 'Client connects to servers that expose tools and resources.', sections: [{ title: 'Client vs Server', content: 'Client: your app. Server: exposes tools, resources, and prompts.' }] },
            { title: 'Creating MCPClient in ColdFusion', content: 'createMCPClient() and configuration.', sections: [{ title: 'MCPClient', content: 'Create client with transport and capabilities; connect to MCP server.' }] },
            { title: 'HTTP vs STDIO transports', content: 'Network vs process-bound MCP.', sections: [{ title: 'Transports', content: 'HTTP for remote servers; STDIO for local processes.' }] },
            { title: 'Tool discovery and invocation', content: 'List tools and call them.', sections: [{ title: 'Tools', content: 'listTools() and callTool() to discover and invoke server tools.' }] },
            { title: 'Working with resources and prompts', content: 'Read-only resources and prompt templates.', sections: [{ title: 'Resources and Prompts', content: 'Resources: read-only data. Prompts: server-side prompt templates.' }] },
            { title: 'Roots and scoping', content: 'Scoping access to resources and tools.', sections: [{ title: 'Roots', content: 'Roots limit what the client can see; scope by environment or tenant.' }] },
            { title: 'Sampling and elicitation flows', content: 'Advanced MCP capabilities.', sections: [{ title: 'Sampling and Elicitation', content: 'Support for sampling and elicitation in MCP flows.' }] },
            { title: 'Security best practices', content: 'Securing MCP connections and tool use.', sections: [{ title: 'Security', content: 'Authenticate and authorize; validate inputs and outputs.' }] }
        ]
    };
}
function getModule21Data() {
    return {
        title: 'Building AI Agents in ColdFusion',
        description: 'Agent architecture, multi-tool orchestration, knowledge assistants with RAG, API-integrated agents, event-driven workflows, observability, and scaling.',
        versions: ['2025'],
        lessons: [
            { title: 'Agent architecture overview', content: 'Combining AIService, MCP, and RAG.', sections: [{ title: 'Architecture', content: 'Agents combine chat model, memory, tools (CFC or MCP), and optionally RAG.' }] },
            { title: 'Multi-tool orchestration', content: 'Using many tools in one agent.', sections: [{ title: 'Multi-Tool', content: 'Register multiple tools; model chooses which to call and in what order.' }] },
            { title: 'Knowledge assistants with RAG', content: 'Agents that answer from your data.', sections: [{ title: 'RAG Agents', content: 'Retrieve context from vector store and pass to model for grounded answers.' }] },
            { title: 'API-integrated agents', content: 'Agents that call external APIs via tools.', sections: [{ title: 'API Agents', content: 'Wrap APIs as tools so the agent can fetch data and take action.' }] },
            { title: 'Event-driven workflows', content: 'Triggering agents from events.', sections: [{ title: 'Event-Driven', content: 'Invoke agents from queue messages, webhooks, or scheduled jobs.' }] },
            { title: 'Observability and logging', content: 'Monitoring agent behavior and cost.', sections: [{ title: 'Observability', content: 'Log tool calls, token usage, and errors for debugging and cost control.' }] },
            { title: 'Scaling AI workloads', content: 'Handling concurrency and load.', sections: [{ title: 'Scaling', content: 'Use async, connection pooling, and rate limits to scale AI workloads.' }] }
        ]
    };
}
function getModule22Data() {
    return {
        title: 'Performance, Monitoring and AI Operations',
        description: 'Performance for AI calls, token optimization, caching, error handling, monitoring MCP and RAG, secure credentials, governance and compliance.',
        versions: ['2025'],
        lessons: [
            { title: 'Performance considerations for AI calls', content: 'Latency and throughput of LLM and embedding calls.', sections: [{ title: 'Performance', content: 'AI calls add latency; use async, batching, and timeouts where appropriate.' }] },
            { title: 'Token optimization strategies', content: 'Reducing prompt and response size.', sections: [{ title: 'Tokens', content: 'Shorten prompts, limit output length, and use efficient models to control cost and latency.' }] },
            { title: 'Caching AI responses', content: 'Caching repeated or similar queries.', sections: [{ title: 'Caching', content: 'Cache responses for identical or semantically similar prompts when safe.' }] },
            { title: 'Error handling for AI workflows', content: 'Retries, fallbacks, and user-facing errors.', sections: [{ title: 'Errors', content: 'Handle timeouts, rate limits, and model errors with retries and fallbacks.' }] },
            { title: 'Monitoring MCP and RAG pipelines', content: 'Observability for MCP and RAG.', sections: [{ title: 'Monitoring', content: 'Monitor latency, success rate, and token usage for MCP and RAG.' }] },
            { title: 'Secure credential management', content: 'Storing and using API keys safely.', sections: [{ title: 'Credentials', content: 'Use environment variables or secure vaults; never hardcode keys.' }] },
            { title: 'Governance and compliance', content: 'Policies and audit for AI use.', sections: [{ title: 'Governance', content: 'Define policies for data use, logging, and compliance; audit AI usage.' }] }
        ]
    };
}
function getModule23Data() {
    return {
        title: 'Enterprise AI Patterns in ColdFusion',
        description: 'Multi-model routing, local vs cloud, hybrid RAG, structured output pipelines, agent chains, advanced prompt engineering, and AI governance strategies.',
        versions: ['2025'],
        lessons: [
            { title: 'Multi-model routing', content: 'Routing requests to different models by task or cost.', sections: [{ title: 'Routing', content: 'Route by complexity, cost, or latency to the right model.' }] },
            { title: 'Local vs cloud models', content: 'When to use local (Ollama) vs cloud (OpenAI, etc.).', sections: [{ title: 'Local vs Cloud', content: 'Local for privacy and cost; cloud for capability and scale.' }] },
            { title: 'Hybrid RAG architectures', content: 'Combining vector and keyword or multiple retrievers.', sections: [{ title: 'Hybrid RAG', content: 'Combine vector search with keyword or SQL for better coverage.' }] },
            { title: 'Structured output pipelines', content: 'Reliable structured data from LLMs.', sections: [{ title: 'Structured Output', content: 'Use schemas and parsing to get consistent JSON or records from the model.' }] },
            { title: 'Agent chains and workflows', content: 'Multi-step agent workflows.', sections: [{ title: 'Chains', content: 'Chain multiple agent steps or tools for complex workflows.' }] },
            { title: 'Advanced prompt engineering', content: 'Techniques for better prompts.', sections: [{ title: 'Prompting', content: 'Few-shot, chain-of-thought, and structured prompts for quality and consistency.' }] },
            { title: 'AI governance strategies', content: 'Policies, review, and risk management.', sections: [{ title: 'Governance', content: 'Define ownership, review processes, and risk controls for AI in production.' }] }
        ]
    };
}
