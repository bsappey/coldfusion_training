# Adobe ColdFusion Training Platform

A comprehensive, modern training platform for Adobe ColdFusion covering versions 2021, 2023, and 2025. Built with modern web standards, ES6+ JavaScript, and Bootstrap 5.3.3. Designed for both human learners and AI agent consumption.

---

## Cursor AI / Resume context (read this first)

**Use this README when resuming work:** e.g. open it or reference `@README.md` in Cursor so the AI has project context and you use fewer tokens.

- **What this is:** ColdFusion training site. **24 modules (0–23).** Modules 0–12 = core CF; **13–23 = AI track** (Adobe 2025.07 Alpha Refresh, chapters 22–32). Each module has lessons; content is in JS, rendered by CF pages.
- **Single source of truth for content:** `assets/js/modules-data.js`  
  - `getModulesData()` → array of `{ id, title, subtitle, description, icon, versions, estimatedTime }`. **Order in this array = display order.**  
  - `getModuleData(id)` → full module (title, description, versions, lessons). Implemented as `getModule0Data()` … `getModule23Data()`.
- **Module pages:** `modules/module-N.cfm` (N = 0..23). Each is a thin wrapper: `<cfinclude template="_module-base.cfm">`. Module ID comes from the filename; `module.js` reads it from the URL.
- **Conventions:** Module number = `id` (0–23). No separate “order” field. To add a module: add entry to `getModulesData()`, add `getModuleXData()` and wire it in `getModuleData()`, add `modules/module-X.cfm`. See **HOW-TO-CREATE-MODULES.md** for lesson/section structure.
- **AI track details:** Module ↔ Adobe topic mapping (22_01–32_07) and lesson titles: **AI_OUTLINE_MAPPING.md**. Expand AI lesson content from “CF 2025.07 Alpha Refresh” docs when available.
- **Don’t:** Change module order without updating the array in `getModulesData()`. Don’t duplicate module content outside `modules-data.js`.
- **Legacy training:** Do not use the old training repo (e.g. bsappey/cf-training) as source for code or content; it had errors and CF 2021–only material. This repo + Adobe + CFDocs are authoritative. See **LEGACY_SOURCES.md**.
- **ColdFusion code:** Primary = [Adobe User Guide](https://helpx.adobe.com/coldfusion/user-guide.html); secondary = [CFDocs](https://cfdocs.org/). Cross-check both and flag disagreements. Enforced in `.cursor/rules/coldfusion-code-standards.mdc`.
- **Tip:** In Cursor, start a chat with `@README.md` to attach this file for context, or add a project rule: “When working in this repo, read README.md for project context first.”

---

## Features

- ✅ **24 Modules (0–23)** - Full curriculum from basics through **11 AI modules** (13–23) aligned with Adobe ColdFusion 2025.07 Alpha Refresh
- ✅ **Version-Specific Indicators** - Clear badges showing CF 2021, 2023, and 2025 compatibility
- ✅ **Time Estimates by Experience Level** - Junior, mid-level, and senior developer time estimates for each module
- ✅ **Interactive Quizzes** - Test knowledge with multiple choice and multi-select questions
- ✅ **Code Examples** - Syntax-highlighted ColdFusion code samples with copy functionality and IDE integration
- ✅ **Progress Tracking** - Track completion and quiz scores with localStorage persistence
- ✅ **Module Summaries** - Quick reference summaries for each module
- ✅ **Instructor-Led Support** - Designed for both self-paced and instructor-led sessions
- ✅ **Modern Design** - Professional Bootstrap 5.3.3 design matching Adobe branding
- ✅ **Responsive** - Mobile-first design that works seamlessly on all devices
- ✅ **AI-Agent Friendly** - Structured data for AI consumption with function references and patterns library
- ✅ **Code Sample Files** - Physical .cfm files for all code examples, ready to open in IDE
- ✅ **Modern Frontend** - ES6+ JavaScript, modern CSS (Grid, Flexbox, custom properties, clamp())

## Project state (what’s done)

- **24 modules (0–23):** Core 0–12 plus **AI track 13–23** aligned with Adobe ColdFusion 2025.07 Alpha Refresh (chapters 22–32). See **AI_OUTLINE_MAPPING.md**.
- **Module 13** refocused to Ch 22 only (Introduction to AI — 7 lessons). Old combined AI content removed.
- **Modules 14–23** added with lesson outlines; content can be expanded from CF 2025.07 Alpha Refresh docs when available.
- **Module numbers:** Each module has an `id` (0–23). Display order = order in `getModulesData()`. Home page shows a **"Module N"** badge on each card; module pages show **"Module N: Title"**.
- **Single source of truth:** `assets/js/modules-data.js` — `getModulesData()` (list) and `getModuleData(id)` / `getModule0Data()` … `getModule23Data()` (content).
- **Module pages:** `modules/module-0.cfm` … `modules/module-23.cfm`; each includes `_module-base.cfm`.

## Project structure (master reference)

```
coldfusion_training/
├── index.cfm                 # Main landing page (lists all modules 0–23)
├── module.cfm                # Legacy module page (pre-modules folder)
├── README.md                 # This file — master project doc
├── AI_OUTLINE_MAPPING.md     # AI modules 13–23 ↔ Adobe topic codes (22_01–32_07)
├── HOW-TO-CREATE-MODULES.md  # How to add/edit module content
├── modules/
│   ├── _module-base.cfm      # Shared layout for all module pages
│   ├── module-0.cfm … module-23.cfm   # One file per module (ID from filename)
│   └── module-template.cfm   # Template for new modules
├── assets/
│   ├── css/style.css         # Custom styles, Adobe branding
│   └── js/
│       ├── modules-data.js   # Single source of truth: getModulesData(), getModuleData(id), getModule0Data()…getModule23Data()
│       ├── app.js            # Home page: render module cards (with "Module N" badge), progress
│       ├── module.js         # Module page: load by ID from URL (module-N.cfm), lessons, nav
│       ├── quiz.js           # Quiz per module (uses getModulesData())
│       └── scorm-integration.js
├── quizzes/                  # quiz-0.cfm … quiz-N.cfm (optional per module)
└── code-samples/             # Physical .cfm code samples (e.g. module-13/)
```

**Module order and numbers:** Order is the **array order** in `getModulesData()` in `assets/js/modules-data.js`. Each module has a numeric **id** (0–23). The home page shows a "Module N" badge on each card; module pages use "Module N: Title" in the header. No separate order field — id and array order define sequence.

## Getting Started

### Option 1: ColdFusion Server

1. **Copy files** to the root of your ColdFusion web server (e.g., `C:\ColdFusion2021\cfusion\wwwroot\` — so `index.cfm` is at the web root)
2. **Access** via browser: `http://127.0.0.1:8500/index.cfm`
3. **Start learning!**

### Option 2: CommandBox

1. **Install CommandBox** (if not already installed)
2. **Navigate** to project directory
3. **Start server**: `box server start`
4. **Access** via browser: `http://127.0.0.1:8080/index.cfm`

## Module Structure

The training is organized into **24 modules (0–23)**. Display order is the order in `getModulesData()` in `assets/js/modules-data.js`. Each module has a numeric **id** (0–23) used in URLs (`modules/module-N.cfm`) and in the UI ("Module N").

### Core modules (0–12)

0. **Welcome & Setup** - Course introduction and environment setup (3h junior / 2h mid / 1h senior)
1. **Language Fundamentals** - Variables, functions, and flow control (6h / 4h / 3h)
2. **Web & Application Structure** - Request/response, forms, sessions (7h / 5h / 3h)
3. **Data Connectivity & Manipulation** - Databases, queries, data structures (8h / 6h / 4h)
4. **File & Document Operations** - File I/O, PDF, Excel, images (7h / 5h / 3h)
5. **Cloud Storage Integration** - S3, Azure Blob, Google Cloud (CF 2023+) (5h / 4h / 2h)
6. **Security Fundamentals** - Input validation, output encoding, authentication (6h / 4h / 3h)
7. **Object-Oriented Programming** - CFCs, inheritance, modern OOP (8h / 6h / 4h)
8. **Version Comparison** - What's new in CF 2023 and 2025 (4h / 3h / 2h)
9. **Advanced Topics** - Caching, REST APIs, scheduling, async programming (10h / 7h / 5h)
10. **Quality Assurance & Debugging** - Testing, debugging, monitoring (4h / 3h / 2h)
11. **Migration & Compatibility** - Upgrading and modernizing code (5h / 4h / 3h)
12. **Projects & Labs** - Hands-on exercises and capstone project (12h / 8h / 6h)

### AI track (13–23) — ColdFusion 2025.07 Alpha Refresh

Aligned with Adobe’s AI outline (chapters 22–32). See **AI_OUTLINE_MAPPING.md** for topic codes (22_01–32_07).

13. **Introduction to AI in ColdFusion** - Architecture, providers, CFPM, core workflow (2h / 1.5h / 1h)
14. **Chat Models and Prompting** - getChatModel(), .chat(), prompts, logging (2.5h / 2h / 1h)
15. **AIService and Conversational Memory** - Stateful AI, memory, personas, Redis/Memcached (3h / 2h / 1.5h)
16. **Function Tools and AI Orchestration** - Callable functions, tool selection, APIs, security (2.5h / 2h / 1h)
17. **Retrieval Augmented Generation (RAG)** - Document ingestion, ask() vs chat(), best practices (3h / 2.5h / 1.5h)
18. **Vector Databases and Embeddings** - VectorStore API, providers, metrics, hybrid search (2.5h / 2h / 1h)
19. **Document Processing for AI** - DocumentProcessor, loaders, splitters, async (2h / 1.5h / 1h)
20. **Model Context Protocol (MCP)** - MCPClient, HTTP/STDIO, tools, resources, security (3h / 2h / 1.5h)
21. **Building AI Agents** - Multi-tool, RAG agents, API agents, observability (3h / 2.5h / 1.5h)
22. **Performance, Monitoring and AI Operations** - Token optimization, caching, credentials, governance (2h / 1.5h / 1h)
23. **Enterprise AI Patterns** - Multi-model routing, hybrid RAG, structured output, governance (2.5h / 2h / 1h)

## Version Indicators

Throughout the training, you'll see version badges indicating compatibility:

- **CF 2021** - Foundation features available in ColdFusion 2021
- **CF 2023** - Features introduced in ColdFusion 2023
- **CF 2025** - Latest features in ColdFusion 2025 (including AI features via feature update)

## Adding Content

### Adding Module Content

Edit `assets/js/modules-data.js`:

1. **Find the module function** (e.g., `getModule1Data()`)
2. **Add lessons** to the `lessons` array
3. **Structure lessons** with:
   - `title`: Lesson title
   - `content`: Main content text
   - `sections`: Array of content sections
   - `tip`: Optional tip box
   - `success`: Optional success/action item

Example:
```javascript
{
    title: 'Lesson Title',
    content: 'Main lesson content here...',
    sections: [
        {
            title: 'Section Title',
            content: 'Section content...',
            code: '<cfset x = 1>',
            codeTitle: 'Example Code',
            versionBadge: '2021' // Optional version indicator
        }
    ],
    tip: 'Helpful tip here'
}
```

### Adding Quiz Questions

Edit `assets/js/quiz.js` in the `getQuizData()` function:

```javascript
{
    question: 'Your question here?',
    type: 'single', // or 'multiple'
    answers: [
        { text: 'Answer 1', value: 'a' },
        { text: 'Answer 2', value: 'b' }
    ],
    correct: 'a', // or ['a', 'b'] for multiple
    explanation: 'Explanation of the answer'
}
```

## Code Validation

All ColdFusion code (samples, examples, .cfm/.cfc) must follow these references. Cursor rules enforce this; see `.cursor/rules/coldfusion-code-standards.mdc`.

- **Primary:** [Adobe ColdFusion User Guide](https://helpx.adobe.com/coldfusion/user-guide.html) — use for tags, functions, and syntax. Prefer Adobe when it has the topic.
- **Secondary:** [CFDocs](https://cfdocs.org/) — use when Adobe does not have the tag, function, or example. Third-party; use as fallback.
- **When both apply:** If Adobe and CFDocs disagree on syntax or behavior, flag it and prefer Adobe unless you specify otherwise.
- **How you know the rule was followed:** After writing CF code, the AI must state in its reply either “Verified against Adobe [and CFDocs]”, “**FLAG — Adobe vs CFDocs:** [difference]”, or “Used CFDocs only (Adobe has no doc)”. If you don’t see one of these, ask.
- Both tag and script syntax provided where applicable.
- Use ColdFusion Administrator Code Analyzer or test in CommandBox when possible.
- See `CODE_VALIDATION.md` for detailed validation guide

## Customization

### Styling

Edit `assets/css/style.css` to customize:
- Colors and themes
- Layout and spacing
- Animations and transitions
- Responsive breakpoints

### Adding Code Samples

Code samples can be single syntax or dual syntax:

**Single Syntax:**
```javascript
{
    code: '<cfset x = 1>',
    codeTitle: 'Example'
}
```

**Dual Syntax (Tag + Script):**
```javascript
{
    code: {
        tag: '<cfset x = 1>',
        script: '<cfscript>var x = 1;</cfscript>'
    },
    codeTitle: 'Example'
}
```

### Branding

The design uses Adobe ColdFusion brand colors:
- Primary: `#1473E6` (Adobe Blue)
- Dark: `#2C2C2C`
- Light: `#F5F5F5`

### Code Highlighting

ColdFusion syntax highlighting is provided via Prism.js with a custom language definition. The language definition is included in each .cfm file.

## Features in Detail

### Progress Tracking

- Automatically tracks lesson progress
- Saves quiz scores and completion status
- Displays overall progress on the main page
- Uses browser localStorage for persistence

### Interactive Quizzes

- Multiple choice questions
- Multi-select questions
- Real-time progress tracking
- Immediate feedback with explanations
- Pass/fail scoring (70% threshold)

### Code Samples

- **Dual Syntax Support**: Toggle between tag and script syntax for most examples
- Syntax highlighting for ColdFusion
- Copy-to-clipboard functionality
- Responsive code blocks
- Dark theme for better readability
- Version-specific indicators
- **Verified Accuracy**: All code verified against CFDocs.org and Adobe documentation

### Module Summaries

- Click "Summary" button on the last lesson
- Quick reference of key concepts
- Version compatibility information
- Lesson overview

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **Bootstrap 5.3.3** - Latest CSS framework
- **Tabler Icons** - Icon library
- **Prism.js** - Syntax highlighting for code samples
- **ES6+ JavaScript** - Modern JavaScript (arrow functions, const/let, template literals, optional chaining)
- **Modern CSS** - CSS Grid, Flexbox, custom properties, logical properties, clamp()
- **ColdFusion** - Server-side processing (.cfm pages)
- **Semantic HTML5** - Accessible, semantic markup

## Instructor-Led Sessions

The platform is designed to support instructor-led training:

1. **Module Structure** - Clear lesson progression
2. **Code Examples** - Ready-to-use code samples
3. **Quizzes** - Assessment tools for each module
4. **Summaries** - Quick reference for review
5. **Version Indicators** - Help explain version differences

## Best Practices

1. **Version Compatibility** - Always check version badges before using features
2. **Code Examples** - Test all code examples in your target ColdFusion version
3. **Progress Tracking** - Progress is stored locally; clear browser data to reset
4. **Quizzes** - Review explanations for incorrect answers to reinforce learning

## Troubleshooting

### Code Not Highlighting

- Ensure Prism.js is loaded
- Ensure Prism dependencies are loaded in order: `prism-core` → `prism-markup` → `prism-clike` → `prism-javascript`
- Check that code blocks use `class="language-coldfusion"`
- Verify the ColdFusion language definition is included

### Progress Not Saving

- Check browser localStorage is enabled
- Clear browser cache and try again
- Ensure JavaScript is enabled

### Module Not Loading

- Check browser console for errors
- Verify `modules-data.js` is loaded before `module.js`
- Ensure module ID exists in the data structure

### Error loading modules / `getModulesData()` is not defined

- **Most common cause**: `assets/js/modules-data.js` didn’t load (404/path mismatch). Try opening `assets/js/modules-data.js` directly in your browser.
- **Next most common cause**: `modules-data.js` loaded but **failed to parse** due to a JavaScript syntax error. The browser console will show the line/column.

### Inline JavaScript breaks on `.cfm` pages

- Avoid including the literal CFML comment markers `<!---` / `--->` inside inline JavaScript in `.cfm` templates (for example inside regex literals). ColdFusion may treat them as comments and strip them, corrupting the script.

## AI Agent Usage

This training platform is structured for AI agent consumption:

### Function Reference
- **File**: `assets/js/functions-reference.js`
- Structured ColdFusion function documentation
- Includes syntax, parameters, return types, examples
- Version compatibility information
- Related functions and security notes

### Patterns Library
- **File**: `assets/js/patterns-library.js`
- Common code patterns for validation, queries, error handling, security, APIs
- Both tag and script syntax provided
- Best practices and common mistakes included
- Security considerations documented

### Data Structure
- **File**: `assets/js/modules-data.js`
- All training content in structured JavaScript format
- Hierarchical lesson and section structure
- Code examples with metadata
- Version badges and compatibility information

### Usage Example
```javascript
// Get function reference
const func = getFunctionByName('Len');
console.log(func.description, func.syntax);

// Get code pattern
const pattern = getPattern('validation', 'formValidation');
console.log(pattern.tag, pattern.script);

// Get module data
const module = getModuleData(1);
console.log(module.lessons);
```

## Code Samples

All code examples have corresponding physical `.cfm` files in the `code-samples/` directory:

- **Structure**: `code-samples/module-{id}/lesson-{index}/{sample-name}.cfm`
- **Dual Syntax**: Tag and script versions where applicable
- **IDE Integration**: Copy file path button for easy IDE access
- **Well-Commented**: Each file includes header comments with lesson context
- **Runnable**: All files are standalone and executable

See `code-samples/INDEX.md` for complete index of all samples.

## Contributing

To expand the training content:

1. **Add module data** in `assets/js/modules-data.js`
2. **Add quiz questions** in `assets/js/quiz.js`
3. **Create code sample files** in `code-samples/` directory
4. **Test thoroughly** in your target ColdFusion version
5. **Add version indicators** where appropriate
6. **Update function reference** in `assets/js/functions-reference.js` if adding new functions
7. **Update patterns library** in `assets/js/patterns-library.js` if adding new patterns
8. **Update this README** with new features

### Code Sample Guidelines

When adding code samples:
- Create both tag and script versions when applicable
- Include comprehensive header comments
- Add inline comments explaining key concepts
- Follow naming convention: `kebab-case-description.cfm`
- Place in appropriate `module-{id}/lesson-{index}/` directory

## License

This training platform is provided for educational purposes. Feel free to use and modify as needed.

## Support

For questions or issues:
- Review code comments in JavaScript files
- Check ColdFusion documentation: https://helpx.adobe.com/coldfusion/user-guide.html (primary) and https://cfdocs.org/ (secondary)
- **This repository is the source of truth.** An older training repo (e.g. bsappey/cf-training) was used to bootstrap some content; do not treat it as authoritative. Some legacy examples were incorrect or CF 2021–only. All new or updated code here must be verified against Adobe + CFDocs (see Code Validation and `.cursor/rules/coldfusion-code-standards.mdc`).

---

## LMS Integration (Adobe Learning Manager)

This training platform can be integrated with **Adobe Learning Manager** and other SCORM-compliant LMS platforms:

- ✅ **SCORM 1.2 & 2004 Support** - Full SCORM API integration
- ✅ **Progress Tracking** - Automatic progress and completion reporting
- ✅ **Quiz Score Reporting** - Quiz results sent to LMS
- ✅ **Embeddable Content** - Can be embedded via iframe
- ✅ **xAPI Ready** - Structure supports xAPI integration

See [LMS-INTEGRATION.md](LMS-INTEGRATION.md) for detailed integration instructions.

**Quick Integration Options:**
1. **SCORM Package** - Package as SCORM ZIP for upload to ALM
2. **Embedded Iframe** - Embed directly in ALM learning programs
3. **External Catalog** - Use ALM Premium Training Data Access API

## Modernization Features

This platform has been modernized with:

- ✅ **ES6+ JavaScript** - Arrow functions, const/let, template literals, optional chaining
- ✅ **Modern CSS** - CSS Grid, Flexbox, custom properties, logical properties, clamp() for responsive typography
- ✅ **Bootstrap 5.3.3** - Latest version consistently across all files
- ✅ **Semantic HTML5** - Proper ARIA labels and accessibility attributes
- ✅ **Time Estimates** - Junior/mid/senior developer time estimates
- ✅ **Removed Percentage Grids** - Cleaner UI without percentage displays
- ✅ **IDE Integration** - File path copying for code samples
- ✅ **Code Sample Infrastructure** - Physical .cfm files for all examples
- ✅ **AI-Agent Friendly** - Structured data for AI consumption
- ✅ **LMS Integration** - SCORM support for Adobe Learning Manager

## Module 13: AI Features (CF 2025 Feature Update)

Module 13 covers ColdFusion 2025 AI features (via feature update). Content includes:
- Model Context Protocol (MCP) integration
- AI Services framework
- Embeddings and vector databases
- RAG (Retrieval Augmented Generation) workflows
- AI security considerations

**Built with ❤️ for learning ColdFusion**

*Last Updated: January 2025*
