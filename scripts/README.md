# Scripts Directory

This directory contains utility scripts for managing and validating the ColdFusion Training Platform code samples.

## Available Scripts

### validate-code-samples.ps1

Validates that all code examples in `modules-data.js` have corresponding physical `.cfm` files in the `code-samples` directory.

**Usage:**
```powershell
# Basic validation
.\scripts\validate-code-samples.ps1

# Verbose output (shows all found files)
.\scripts\validate-code-samples.ps1 -Verbose

# With fix suggestion
.\scripts\validate-code-samples.ps1 -FixMissing
```

**Output:**
- Lists all code examples found in modules-data.js
- Reports missing .cfm files
- Provides summary statistics
- Exits with error code 1 if files are missing

**Example Output:**
```
========================================
Code Samples Validation Script
========================================
Project Root: C:\path\to\coldfusion_training

Loading modules-data.js...
Found 45 tag code examples
Found 38 script code examples

Validating tag code examples...
  ✗ Missing: code-samples\module-0\basic-variable-assignment-tag.cfm
    Title: Basic Variable Assignment (CF 2021+)
  ✓ Found: code-samples\module-1\application-cfc-structure-tag.cfm

========================================
Validation Summary
========================================
Total Examples: 83
Existing Files: 65
Missing Files: 18
```

### generate-code-samples-enhanced.ps1

Generates `.cfm` files from code examples in `modules-data.js` with proper headers, comments, and both syntax versions.

**Usage:**
```powershell
# Generate all missing files
.\scripts\generate-code-samples-enhanced.ps1

# Generate for specific modules
.\scripts\generate-code-samples-enhanced.ps1 -ModuleIds @(0,1,2)

# Overwrite existing files
.\scripts\generate-code-samples-enhanced.ps1 -Overwrite

# Verbose output
.\scripts\generate-code-samples-enhanced.ps1 -Verbose
```

**Features:**
- Creates standardized file headers with metadata
- Generates both tag and script versions when available
- Adds inline comments for key concepts
- Organizes files by module and lesson
- Uses kebab-case naming convention

**File Structure Generated:**
```
code-samples/
  module-0/
    lesson-0/
      example-name-tag.cfm
      example-name-script.cfm
  module-1/
    lesson-0/
      ...
```

**File Header Format:**
Each generated file includes:
- Module and lesson information
- Learning objectives
- Related functions
- Security considerations
- Usage instructions
- File path reference

## Workflow

### Initial Setup
1. Run validation to see what's missing:
   ```powershell
   .\scripts\validate-code-samples.ps1 -Verbose
   ```

2. Generate missing files:
   ```powershell
   .\scripts\generate-code-samples-enhanced.ps1
   ```

3. Verify all files exist:
   ```powershell
   .\scripts\validate-code-samples.ps1
   ```

### Adding New Code Examples
1. Add code example to `modules-data.js`
2. Run validation to check if file needs to be created
3. Generate the file using the generation script
4. Review and enhance the generated file with additional comments if needed

### Maintenance
- Run validation periodically to ensure all examples have files
- Use `-Overwrite` flag carefully when regenerating files
- Review generated files for accuracy and completeness

## Notes

- The generation script uses simplified parsing. For full functionality, consider integrating with a JavaScript parser or Node.js.
- File names are automatically sanitized (kebab-case, lowercase, special characters removed).
- Both tag and script versions are generated when both are available in the code example.
- Generated files include comprehensive headers for AI agent consumption and IDE integration.

## Troubleshooting

**Issue: Script can't find modules-data.js**
- Ensure you're running from the project root
- Check that `assets/js/modules-data.js` exists

**Issue: Generated files have incorrect content**
- The parsing is simplified - manually review and correct if needed
- Consider enhancing the script with proper JavaScript parsing

**Issue: Files generated in wrong location**
- Check that `code-samples` directory exists
- Verify module IDs match between modules-data.js and directory structure

## Future Enhancements

- [ ] Integrate with JavaScript parser for accurate code extraction
- [ ] Add syntax validation for generated CFML code
- [ ] Support for extracting metadata from code examples
- [ ] Automatic code formatting (prettier/cfmlformatter)
- [ ] Integration with CI/CD for automated validation
