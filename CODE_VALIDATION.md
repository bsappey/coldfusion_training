# Code Validation & Accuracy Guide

This document outlines how we ensure code accuracy in the ColdFusion training platform and the tools available for validation.

## Code Accuracy Standards

All code samples in this training are verified against:
- **[CFDocs.org](https://cfdocs.org/)** - Community-maintained CFML documentation
- **[Adobe Official Documentation](https://helpx.adobe.com/coldfusion/user-guide.html)** - Official Adobe ColdFusion documentation
- **Syntax Verification** - Both tag and script syntax are provided where applicable

## Dual Syntax Support

All code examples that can be written in both syntaxes include:
- **Tag Syntax** - Traditional CFML tag-based syntax (e.g., `<cfset>`, `<cfif>`)
- **Script Syntax** - CFScript syntax (e.g., `var x = 1;`, `if (condition) {}`)

Users can toggle between syntaxes using the "Tag Syntax" / "Script Syntax" buttons in code samples.

## Validation Tools

### 1. ColdFusion Administrator Code Analyzer

**Built-in Tool** - Available in ColdFusion Administrator

- **Location**: Debugging & Logging → Code Analyzer
- **Features**:
  - Syntax validation (compiles code without executing)
  - Compatibility checks for deprecated features
  - Version-specific feature detection
- **Usage**: Upload or paste code to analyze

**Reference**: [Adobe Code Analyzer Documentation](https://helpx.adobe.com/coldfusion/developing-applications/developing-cfml-applications/debugging-and-troubleshooting-applications/using-the-code-analyzer.html)

### 2. Online Validation Methods

While there isn't a single comprehensive online CFML linter, you can:

1. **Test in CommandBox**:
   ```bash
   box server start
   # Create test file and access via browser
   ```

2. **Use ColdFusion Administrator**:
   - Access Code Analyzer
   - Test code snippets in a test page

3. **Local ColdFusion Server**:
   - Create test `.cfm` files
   - Access via browser to see syntax errors

### 3. Third-Party Tools

#### CodeChecker
- **Purpose**: Scans CFML code for vulnerabilities
- **Features**: 
  - Missing `cfqueryparam` detection
  - Unscoped variables
  - Security issues
- **Link**: [CodeChecker on Adobe ColdFusion Blog](https://coldfusion.adobe.com/2019/05/clean-legacy-code-codechecker/)

#### Fixinator
- **Purpose**: Continuous security scanning
- **Features**:
  - Vulnerability detection
  - Third-party component scanning
  - Automated fixes
- **Link**: [Fixinator on Adobe ColdFusion Blog](https://coldfusion.adobe.com/2019/05/continuous-security-cfml-code-fixinator/)

#### FusionDebug
- **Purpose**: Interactive step debugger
- **Features**: Line-by-line debugging, breakpoints, variable inspection
- **Link**: [FusionDebug.com](https://www.fusion-debug.com/)

## Verification Checklist

When adding or updating code samples:

- [ ] **Syntax Check**: Code compiles without errors
- [ ] **Tag Syntax**: Tag-based version is provided
- [ ] **Script Syntax**: Script-based version is provided (where applicable)
- [ ] **CFDocs Verification**: Matches patterns from cfdocs.org
- [ ] **Adobe Docs Verification**: Aligns with official Adobe documentation
- [ ] **Version Compatibility**: Correct version badges applied
- [ ] **Best Practices**: Follows ColdFusion best practices
- [ ] **Security**: Uses secure coding practices (e.g., `cfqueryparam`)

## Code Sample Format

### Single Syntax (Tag-only or Script-only)
```javascript
{
    code: '<cfset x = 1>',
    codeTitle: 'Example'
}
```

### Dual Syntax (Tag + Script)
```javascript
{
    code: {
        tag: '<cfset x = 1>',
        script: '<cfscript>var x = 1;</cfscript>'
    },
    codeTitle: 'Example'
}
```

## Testing Code Samples

### Quick Test Method

1. **Create test file**: `test.cfm`
2. **Paste code sample**
3. **Access via browser**: `http://127.0.0.1:8080/test.cfm`
4. **Check for errors**: Review browser output or ColdFusion error logs

### CommandBox Testing

```bash
# Start server
box server start

# Create test file
echo '<cfset x = 1>' > test.cfm

# Access in browser
# http://127.0.0.1:8080/test.cfm
```

## Common Syntax Issues to Watch For

1. **Tag Syntax**:
   - Proper tag closing (`</cfif>`, `</cfloop>`)
   - Attribute quoting
   - Case sensitivity (tags are case-insensitive, but best practice is lowercase)

2. **Script Syntax**:
   - Semicolons (optional but recommended)
   - Curly braces for blocks
   - Proper variable scoping (`var` keyword)

3. **Both Syntaxes**:
   - Variable scoping (Variables, Request, Session, etc.)
   - Function parameter syntax
   - Return type declarations

## Resources

- **CFDocs.org**: https://cfdocs.org/ - Quick reference for tags and functions
- **Adobe Documentation**: https://helpx.adobe.com/coldfusion/user-guide.html
- **CFML Syntax Guide**: https://cfdocs.org/guides/cfscript-syntax-guide
- **ColdFusion Community**: https://coldfusion.adobe.com/

## Reporting Issues

If you find code samples that:
- Don't compile
- Have syntax errors
- Don't match documentation
- Are missing script/tag versions

Please note the module, lesson, and code sample title for correction.

---

**Last Updated**: 2025
**Maintained By**: Training Platform Team

