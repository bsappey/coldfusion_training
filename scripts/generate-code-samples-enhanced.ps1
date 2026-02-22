# ============================================
# Enhanced Code Sample Generation Script
# Generates .cfm files from modules-data.js with proper headers, comments, and both syntax versions
# ============================================

param(
    [string]$ProjectRoot = $PSScriptRoot + "\..",
    [int[]]$ModuleIds = @(),  # Empty = all modules
    [switch]$Overwrite = $false,
    [switch]$Verbose = $false
)

$ErrorActionPreference = "Continue"
$ProjectRoot = Resolve-Path $ProjectRoot

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Enhanced Code Sample Generation Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Project Root: $ProjectRoot" -ForegroundColor Gray
Write-Host ""

# Ensure code-samples directory exists
$codeSamplesRoot = Join-Path $ProjectRoot "code-samples"
if (-not (Test-Path $codeSamplesRoot)) {
    New-Item -Path $codeSamplesRoot -ItemType Directory | Out-Null
    Write-Host "Created code-samples directory" -ForegroundColor Green
}

# Load modules-data.js
$modulesDataPath = Join-Path $ProjectRoot "assets\js\modules-data.js"
if (-not (Test-Path $modulesDataPath)) {
    Write-Host "ERROR: modules-data.js not found at $modulesDataPath" -ForegroundColor Red
    exit 1
}

Write-Host "Loading modules-data.js..." -ForegroundColor Yellow
$modulesDataContent = Get-Content $modulesDataPath -Raw

# Function to sanitize filename
function Get-SanitizedFileName {
    param([string]$codeTitle, [string]$syntax = "")
    
    # Remove version badges and special characters
    $name = $codeTitle -replace '\(CF\s+\d+[^)]*\)', ''
    $name = $name -replace '[^\w\s-]', ''
    $name = $name -replace '\s+', '-'
    $name = $name.ToLower().Trim()
    
    if ($syntax -eq "script") {
        $name = $name + "-script"
    } elseif ($syntax -eq "tag") {
        $name = $name + "-tag"
    }
    
    return "$name.cfm"
}

# Function to generate file header
function Get-FileHeader {
    param(
        [string]$moduleTitle,
        [int]$moduleId,
        [string]$lessonTitle,
        [int]$lessonIndex,
        [string]$codeTitle,
        [string]$syntax,
        [string[]]$versions = @("2021", "2023", "2025"),
        [string]$complexity = "beginner",
        [string[]]$relatedFunctions = @(),
        [string[]]$securityNotes = @()
    )
    
    $header = @"
<!---
================================================================================
Code Sample: $codeTitle
================================================================================
Module: $moduleTitle (Module $moduleId)
Lesson: $lessonTitle (Lesson $lessonIndex)
Syntax: $syntax
Versions: $($versions -join ', ')
Complexity: $complexity

LEARNING OBJECTIVES:
- Understand the concepts demonstrated in this code sample
- Learn how to implement similar functionality in your own applications
- Recognize best practices and common patterns

RELATED FUNCTIONS:
$($relatedFunctions | ForEach-Object { "- $_" } | Out-String)

SECURITY CONSIDERATIONS:
$($securityNotes | ForEach-Object { "- $_" } | Out-String)

USAGE:
1. Copy this file to your ColdFusion server
2. Access via browser: http://yourserver/path/to/$codeTitle
3. Modify and experiment with the code
4. Refer to the training module for detailed explanations

FILE PATH:
code-samples/module-$moduleId/$codeTitle

================================================================================
--->

"@
    return $header
}

# Function to add inline comments to code
function Add-InlineComments {
    param([string]$code, [string]$syntax)
    
    # Add basic comments for key concepts
    # This is a simplified version - could be enhanced with AST parsing
    
    if ($syntax -eq "tag") {
        # Add comments before key tags
        $code = $code -replace '(<cfcomponent[^>]*>)', '$1`n<!--- Component definition: This creates a ColdFusion component --->'
        $code = $code -replace '(<cffunction[^>]*>)', '$1`n    <!--- Function definition --->'
        $code = $code -replace '(<cfquery[^>]*>)', '$1`n        <!--- Database query --->'
        $code = $code -replace '(<cfif[^>]*>)', '$1`n        <!--- Conditional logic --->'
    } else {
        # Add comments for script syntax
        $code = $code -replace '(component\s*\{)', '$1`n    // Component definition: This creates a ColdFusion component'
        $code = $code -replace '(function\s+\w+\s*\([^)]*\)\s*\{)', '$1`n        // Function definition'
        $code = $code -replace '(queryExecute\s*\()', '$1`n        // Database query'
        $code = $code -replace '(if\s*\()', '$1`n        // Conditional logic'
    }
    
    return $code
}

# Function to extract code examples from modules-data.js
# This is a simplified parser - in production, you'd want a proper JavaScript parser
function Extract-CodeExamples {
    param([string]$content)
    
    $examples = @()
    
    # Pattern to match code blocks with metadata
    $pattern = '(?s)code:\s*\{[^}]*?(?:metadata:\s*\{[^}]*?\})?[^}]*?tag:\s*[''"]((?:[^''"]|\\[''"]|\\\\)*)[''"]'
    $matches = [regex]::Matches($content, $pattern)
    
    foreach ($match in $matches) {
        $codeBlock = $match.Value
        $tagCode = $match.Groups[1].Value
        
        # Extract metadata if present
        $metadataMatch = [regex]::Match($codeBlock, 'metadata:\s*\{([^}]+)\}')
        $metadata = @{}
        if ($metadataMatch.Success) {
            $metadataContent = $metadataMatch.Groups[1].Value
            # Parse metadata (simplified)
            if ($metadataContent -match 'complexity:\s*[''"](\w+)[''"]') {
                $metadata['complexity'] = $matches[1]
            }
            if ($metadataContent -match 'version:\s*[''"](\d+)[''"]') {
                $metadata['version'] = $matches[1]
            }
        }
        
        # Extract codeTitle
        $titleMatch = [regex]::Match($codeBlock, 'codeTitle:\s*[''"]((?:[^''"]|\\[''"]|\\\\)*)[''"]')
        $codeTitle = if ($titleMatch.Success) { $titleMatch.Groups[1].Value } else { "example" }
        
        # Try to find script version
        $scriptMatch = [regex]::Match($codeBlock, 'script:\s*[''"]((?:[^''"]|\\[''"]|\\\\)*)[''"]')
        $scriptCode = if ($scriptMatch.Success) { $scriptMatch.Groups[1].Value } else { $null }
        
        $examples += @{
            CodeTitle = $codeTitle
            TagCode = $tagCode
            ScriptCode = $scriptCode
            Metadata = $metadata
        }
    }
    
    return $examples
}

# Generate files for a specific module
function Generate-ModuleSamples {
    param(
        [int]$moduleId,
        [string]$moduleTitle,
        [object[]]$lessons
    )
    
    $moduleDir = Join-Path $codeSamplesRoot "module-$moduleId"
    if (-not (Test-Path $moduleDir)) {
        New-Item -Path $moduleDir -ItemType Directory | Out-Null
    }
    
    Write-Host "Processing Module $moduleId : $moduleTitle" -ForegroundColor Cyan
    
    $lessonIndex = 0
    foreach ($lesson in $lessons) {
        $lessonDir = Join-Path $moduleDir "lesson-$lessonIndex"
        if (-not (Test-Path $lessonDir)) {
            New-Item -Path $lessonDir -ItemType Directory | Out-Null
        }
        
        # Extract code examples from lesson sections
        $lessonJson = $lesson | ConvertTo-Json -Depth 10
        $examples = Extract-CodeExamples -content $lessonJson
        
        foreach ($example in $examples) {
            # Generate tag version
            if ($example.TagCode) {
                $fileName = Get-SanitizedFileName -codeTitle $example.CodeTitle -syntax "tag"
                $filePath = Join-Path $lessonDir $fileName
                
                if (-not (Test-Path $filePath) -or $Overwrite) {
                    $header = Get-FileHeader `
                        -moduleTitle $moduleTitle `
                        -moduleId $moduleId `
                        -lessonTitle $lesson.title `
                        -lessonIndex $lessonIndex `
                        -codeTitle $example.CodeTitle `
                        -syntax "tag" `
                        -complexity $example.Metadata['complexity'] `
                        -versions @($example.Metadata['version'])
                    
                    $code = $example.TagCode -replace '\\n', "`n" -replace '\\"', '"' -replace "\\'", "'"
                    $code = Add-InlineComments -code $code -syntax "tag"
                    
                    $fullContent = $header + $code
                    Set-Content -Path $filePath -Value $fullContent -Encoding UTF8
                    
                    if ($Verbose) {
                        Write-Host "  Generated: $filePath" -ForegroundColor Green
                    }
                } else {
                    Write-Host "  Skipped (exists): $filePath" -ForegroundColor Yellow
                }
            }
            
            # Generate script version
            if ($example.ScriptCode) {
                $fileName = Get-SanitizedFileName -codeTitle $example.CodeTitle -syntax "script"
                $filePath = Join-Path $lessonDir $fileName
                
                if (-not (Test-Path $filePath) -or $Overwrite) {
                    $header = Get-FileHeader `
                        -moduleTitle $moduleTitle `
                        -moduleId $moduleId `
                        -lessonTitle $lesson.title `
                        -lessonIndex $lessonIndex `
                        -codeTitle $example.CodeTitle `
                        -syntax "script" `
                        -complexity $example.Metadata['complexity'] `
                        -versions @($example.Metadata['version'])
                    
                    $code = $example.ScriptCode -replace '\\n', "`n" -replace '\\"', '"' -replace "\\'", "'"
                    $code = Add-InlineComments -code $code -syntax "script"
                    
                    $fullContent = $header + $code
                    Set-Content -Path $filePath -Value $fullContent -Encoding UTF8
                    
                    if ($Verbose) {
                        Write-Host "  Generated: $filePath" -ForegroundColor Green
                    }
                } else {
                    Write-Host "  Skipped (exists): $filePath" -ForegroundColor Yellow
                }
            }
        }
        
        $lessonIndex++
    }
}

# Main execution
Write-Host "Note: This script requires manual parsing of modules-data.js" -ForegroundColor Yellow
Write-Host "For full functionality, consider using a JavaScript parser or Node.js script" -ForegroundColor Yellow
Write-Host ""
Write-Host "To use this script effectively:" -ForegroundColor Cyan
Write-Host "1. Run validation script first: .\scripts\validate-code-samples.ps1" -ForegroundColor White
Write-Host "2. Review missing files" -ForegroundColor White
Write-Host "3. Manually create code samples or enhance this script with proper parsing" -ForegroundColor White
Write-Host ""

# For now, create a template/example file
$exampleModuleDir = Join-Path $codeSamplesRoot "module-0\lesson-0"
if (-not (Test-Path $exampleModuleDir)) {
    New-Item -Path $exampleModuleDir -ItemType Directory -Force | Out-Null
}

$exampleFile = Join-Path $exampleModuleDir "example-template-tag.cfm"
$exampleContent = @"
<!---
================================================================================
Code Sample Template
================================================================================
Module: Welcome & Setup (Module 0)
Lesson: Course Introduction (Lesson 0)
Syntax: tag
Versions: 2021, 2023, 2025
Complexity: beginner

LEARNING OBJECTIVES:
- Understand the structure of code sample files
- Learn how to use code samples in your training

USAGE:
1. Copy this file to your ColdFusion server
2. Access via browser
3. Modify and experiment with the code

================================================================================
--->

<!--- Example Code Sample --->
<cfoutput>
    <h1>Code Sample Template</h1>
    <p>This is a template for code samples.</p>
    <p>Server: #CGI.SERVER_NAME#</p>
    <p>Time: #Now()#</p>
</cfoutput>
"@

if (-not (Test-Path $exampleFile)) {
    Set-Content -Path $exampleFile -Value $exampleContent -Encoding UTF8
    Write-Host "Created example template: $exampleFile" -ForegroundColor Green
}

Write-Host ""
Write-Host "✓ Code sample generation script ready" -ForegroundColor Green
Write-Host "Note: Full parsing requires JavaScript/Node.js integration" -ForegroundColor Yellow
