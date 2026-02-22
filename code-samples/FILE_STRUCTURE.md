# Code Samples File Structure

This directory contains all code samples organized by module and lesson. Files are pre-created so they can be run directly in the browser.

## Structure

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
      setting-variables.cfm
      ...
```

## File Naming Convention

Files are named based on the code sample title:
- Converted to lowercase
- Spaces replaced with hyphens
- Special characters removed
- Example: "Basic Variable Assignment" → `basic-variable-assignment.cfm`

## Usage

1. **Run in Browser**: Click "Run" button - opens file directly
2. **Edit Inline**: Click "Edit" button - edit code directly in the training platform
3. **Open in IDE**: Use the file path shown to open in your IDE
4. **Download**: Click "Download" to save a copy

## Creating Files

When adding new code samples to the training:
1. Create the appropriate directory structure
2. Add the `.cfm` file with the code
3. The training platform will automatically link to it

## Example File

**File**: `code-samples/module-1/lesson-0/setting-variables.cfm`

```coldfusion
<!--- Tag Syntax: Basic Variable Assignment --->
<cfset name = "John Doe">
<cfset age = 30>
<cfset salary = 50000.50>
<cfset isActive = true>
<cfset hireDate = Now()>

<cfoutput>
    <p>Name: #name#</p>
    <p>Age: #age#</p>
    <p>Salary: #DollarFormat(salary)#</p>
    <p>Active: #isActive#</p>
    <p>Hired: #DateFormat(hireDate, "full")#</p>
</cfoutput>
```

