# ============================================
# Code Samples Validation Script
# Validates that all code examples in modules-data.js have corresponding .cfm files
# ============================================

param(
    [string]$ProjectRoot = $PSScriptRoot + "\..",
    [switch]$FixMissing = $false,
    [switch]$Verbose = $false
)

$ErrorActionPreference = "Continue"
$ProjectRoot = Resolve-Path $ProjectRoot

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Code Samples Validation Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Project Root: $ProjectRoot" -ForegroundColor Gray
Write-Host ""

# Load modules-data.js to extract code examples
$modulesDataPath = Join-Path $ProjectRoot "assets\js\modules-data.js"
if (-not (Test-Path $modulesDataPath)) {
    Write-Host "ERROR: modules-data.js not found at $modulesDataPath" -ForegroundColor Red
    exit 1
}

Write-Host "Loading modules-data.js..." -ForegroundColor Yellow
$modulesDataContent = Get-Content $modulesDataPath -Raw

# Extract code examples using regex
# Look for code: { tag: '...', script: '...' } patterns
$codePattern = '(?s)code:\s*\{[^}]*tag:\s*[''"]((?:[^''"]|\\[''"]|\\\\)*)[''"]'
$scriptPattern = '(?s)code:\s*\{[^}]*script:\s*[''"]((?:[^''"]|\\[''"]|\\\\)*)[''"]'

$codeMatches = [regex]::Matches($modulesDataContent, $codePattern)
$scriptMatches = [regex]::Matches($modulesDataContent, $scriptPattern)

Write-Host "Found $($codeMatches.Count) tag code examples" -ForegroundColor Gray
Write-Host "Found $($scriptMatches.Count) script code examples" -ForegroundColor Gray
Write-Host ""

# Track validation results
$validationResults = @{
    TotalExamples = 0
    MissingFiles = @()
    ExistingFiles = @()
    Errors = @()
}

# Function to sanitize filename
function Get-SanitizedFileName {
    param([string]$codeTitle, [string]$syntax = "tag")
    
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

# Function to find module and lesson from context
function Get-ModuleLessonContext {
    param([int]$matchIndex, [string]$content)
    
    # Try to find module and lesson context before the match
    $beforeMatch = $content.Substring(0, $matchIndex)
    
    # Look for module ID
    $moduleMatch = [regex]::Match($beforeMatch, 'id:\s*(\d+)', [System.Text.RegularExpressions.RegexOptions]::RightToLeft)
    $moduleId = if ($moduleMatch.Success) { $moduleMatch.Groups[1].Value } else { "unknown" }
    
    # Look for lesson index (approximate)
    $lessonMatches = [regex]::Matches($beforeMatch, 'title:\s*[''"]')
    $lessonIndex = $lessonMatches.Count - 1
    
    return @{
        ModuleId = $moduleId
        LessonIndex = [Math]::Max(0, $lessonIndex)
    }
}

# Validate tag code examples
Write-Host "Validating tag code examples..." -ForegroundColor Yellow
foreach ($match in $codeMatches) {
    $validationResults.TotalExamples++
    
    $codeContent = $match.Groups[1].Value
    $matchIndex = $match.Index
    
    # Try to extract codeTitle from nearby context
    $context = $modulesDataContent.Substring([Math]::Max(0, $matchIndex - 500), [Math]::Min(1000, $modulesDataContent.Length - $matchIndex))
    $titleMatch = [regex]::Match($context, 'codeTitle:\s*[''"]((?:[^''"]|\\[''"]|\\\\)*)[''"]')
    
    $codeTitle = if ($titleMatch.Success) { $titleMatch.Groups[1].Value } else { "example-$($validationResults.TotalExamples)" }
    $context = Get-ModuleLessonContext -matchIndex $matchIndex -content $modulesDataContent
    
    $fileName = Get-SanitizedFileName -codeTitle $codeTitle -syntax "tag"
    $moduleDir = Join-Path $ProjectRoot "code-samples\module-$($context.ModuleId)"
    $filePath = Join-Path $moduleDir $fileName
    
    if (Test-Path $filePath) {
        $validationResults.ExistingFiles += $filePath
        if ($Verbose) {
            Write-Host "  ✓ Found: $filePath" -ForegroundColor Green
        }
    } else {
        $validationResults.MissingFiles += @{
            FilePath = $filePath
            ModuleId = $context.ModuleId
            LessonIndex = $context.LessonIndex
            CodeTitle = $codeTitle
            Syntax = "tag"
        }
        Write-Host "  ✗ Missing: $filePath" -ForegroundColor Red
        Write-Host "    Title: $codeTitle" -ForegroundColor Gray
    }
}

# Validate script code examples
Write-Host ""
Write-Host "Validating script code examples..." -ForegroundColor Yellow
foreach ($match in $scriptMatches) {
    $validationResults.TotalExamples++
    
    $codeContent = $match.Groups[1].Value
    $matchIndex = $match.Index
    
    # Try to extract codeTitle from nearby context
    $context = $modulesDataContent.Substring([Math]::Max(0, $matchIndex - 500), [Math]::Min(1000, $modulesDataContent.Length - $matchIndex))
    $titleMatch = [regex]::Match($context, 'codeTitle:\s*[''"]((?:[^''"]|\\[''"]|\\\\)*)[''"]')
    
    $codeTitle = if ($titleMatch.Success) { $titleMatch.Groups[1].Value } else { "example-$($validationResults.TotalExamples)" }
    $context = Get-ModuleLessonContext -matchIndex $matchIndex -content $modulesDataContent
    
    $fileName = Get-SanitizedFileName -codeTitle $codeTitle -syntax "script"
    $moduleDir = Join-Path $ProjectRoot "code-samples\module-$($context.ModuleId)"
    $filePath = Join-Path $moduleDir $fileName
    
    if (Test-Path $filePath) {
        $validationResults.ExistingFiles += $filePath
        if ($Verbose) {
            Write-Host "  ✓ Found: $filePath" -ForegroundColor Green
        }
    } else {
        $validationResults.MissingFiles += @{
            FilePath = $filePath
            ModuleId = $context.ModuleId
            LessonIndex = $context.LessonIndex
            CodeTitle = $codeTitle
            Syntax = "script"
        }
        Write-Host "  ✗ Missing: $filePath" -ForegroundColor Red
        Write-Host "    Title: $codeTitle" -ForegroundColor Gray
    }
}

# Summary
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Validation Summary" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Total Examples: $($validationResults.TotalExamples)" -ForegroundColor White
Write-Host "Existing Files: $($validationResults.ExistingFiles.Count)" -ForegroundColor Green
Write-Host "Missing Files: $($validationResults.MissingFiles.Count)" -ForegroundColor $(if ($validationResults.MissingFiles.Count -eq 0) { "Green" } else { "Red" })
Write-Host ""

if ($validationResults.MissingFiles.Count -gt 0) {
    Write-Host "Missing Files:" -ForegroundColor Yellow
    foreach ($missing in $validationResults.MissingFiles) {
        Write-Host "  - $($missing.FilePath)" -ForegroundColor Gray
        Write-Host "    Module: $($missing.ModuleId), Lesson: $($missing.LessonIndex), Title: $($missing.CodeTitle)" -ForegroundColor DarkGray
    }
    Write-Host ""
    
    if ($FixMissing) {
        Write-Host "FixMissing flag is set. Use generate-code-samples-enhanced.ps1 to create missing files." -ForegroundColor Yellow
    } else {
        Write-Host "Run with -FixMissing to generate missing files, or use:" -ForegroundColor Yellow
        Write-Host "  .\scripts\generate-code-samples-enhanced.ps1" -ForegroundColor Cyan
    }
}

# Exit with error code if files are missing
if ($validationResults.MissingFiles.Count -gt 0) {
    exit 1
} else {
    Write-Host "✓ All code samples validated successfully!" -ForegroundColor Green
    exit 0
}
