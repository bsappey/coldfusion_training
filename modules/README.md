# Module Files Structure

This directory contains individual module pages for the ColdFusion Training application.

## File Structure

```
modules/
├── _module-base.cfm          # Base template (do not edit directly)
├── module-0.cfm             # Welcome & Setup
├── module-1.cfm             # Language Fundamentals
├── module-2.cfm             # Web & Application Structure
├── module-3.cfm             # Data Connectivity & Manipulation
├── module-4.cfm             # File & Document Operations
├── module-5.cfm             # Cloud Storage Integration
├── module-6.cfm             # Security Fundamentals
├── module-7.cfm             # Object-Oriented Programming
├── module-8.cfm             # What's New: Version Comparison
├── module-9.cfm             # Advanced Topics
├── module-10.cfm            # Quality Assurance & Debugging
├── module-11.cfm            # Migration & Compatibility
└── module-12.cfm            # Projects & Labs
```

## How It Works

1. **Module ID Detection**: The JavaScript automatically extracts the module ID from the filename (e.g., `module-1.cfm` → module ID 1)

2. **Base Template**: All module files use `_module-base.cfm` as the base template. The base template contains all the HTML structure and includes.

3. **Content Loading**: Module content is loaded from `modules-data.js` based on the detected module ID.

## Generating Files

To generate all module files from the base template, run:

**Using Node.js:**
```bash
node scripts/generate-modules.js
```

**Using ColdFusion:**
Open `scripts/generate-modules.cfm` in your browser or run via CommandBox:
```bash
box run scripts/generate-modules.cfm
```

## Customizing Individual Modules

If you need to customize a specific module:

1. Copy `_module-base.cfm` to `module-X.cfm` (where X is the module ID)
2. Make your customizations to that specific file
3. The base template will not be used for that module

## URL Structure

- Module 1: `/modules/module-1.cfm`
- Module 2: `/modules/module-2.cfm`
- etc.

This provides clean, bookmarkable URLs without query parameters.


