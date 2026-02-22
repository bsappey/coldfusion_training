# Code Samples System Guide

## Overview

The training platform uses **pre-existing files** in the `code-samples/` directory. Each code sample in the training materials has a matching `.cfm` file that can be run directly.

## How It Works

### 1. File Structure

Files are organized by module and lesson:
```
code-samples/
  module-0/
    lesson-0/
      basic-variable-assignment.cfm
      understanding-variable-scopes.cfm
    lesson-1/
      ...
  module-1/
    lesson-0/
      ...
```

### 2. Code Sample Features

Each code sample has simple, clean buttons:

- **Run Button**: Opens the file in a new tab
  - Direct link to the `.cfm` file
  - Executes on your ColdFusion server
  - View results immediately

- **Copy Button**: Copies code to clipboard
  - Quick copy for pasting into your IDE
  - Edit and save in your own environment

- **Tag/Script Syntax Toggle** (when both syntaxes available):
  - Switch between tag and script syntax views
  - Both versions shown inline

## Creating Code Sample Files

### Step 1: Create Directory Structure

```bash
mkdir -p code-samples/module-X/lesson-Y
```

### Step 2: Create the .cfm File

Name the file based on the code sample title:
- "Basic Variable Assignment" → `basic-variable-assignment.cfm`
- "Understanding Variable Scopes" → `understanding-variable-scopes.cfm`

### Step 3: Add the Code

Put the code in the file (tag syntax version):

```coldfusion
<!--- Basic Variable Assignment --->
<cfset name = "John Doe">
<cfset age = 30>

<cfoutput>
    <p>Name: #name#</p>
    <p>Age: #age#</p>
</cfoutput>
```

### Step 4: Link in Module Data

The training platform automatically links to files based on:
- Module ID
- Lesson Index  
- Code Sample Title (converted to filename)

## File Naming Convention

The system converts code sample titles to filenames:
1. Convert to lowercase
2. Replace spaces with hyphens
3. Remove special characters
4. Add `.cfm` extension

Example: `"Setting Variables:"` → `setting-variables.cfm`

## Benefits

✅ **Simple & Clean** - No complex editors, just view and run  
✅ **Direct Execution** - Run button opens file directly  
✅ **Organized Structure** - Easy to find and manage files  
✅ **IDE Integration** - Open files directly in your IDE  
✅ **Copy & Edit** - Copy code to edit in your preferred editor  

## Workflow

1. **View Code**: See code inline in the lesson
2. **Run Code**: Click "Run" to see results in browser
3. **Edit in IDE**: Copy code, open file in IDE, make changes
4. **Test Changes**: Click "Run" again to see updated results

## Example

**File**: `code-samples/module-1/lesson-0/setting-variables.cfm`

**In Training**: 
- Shows code inline with syntax highlighting
- "Run" button opens: `http://127.0.0.1:8080/code-samples/module-1/lesson-0/setting-variables.cfm`
- "Copy" button copies code to clipboard
- Tag/Script toggle switches between syntax views (if both available)

---

**Last Updated**: 2025

