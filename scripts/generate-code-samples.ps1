# Generate Code Sample Files from modules-data.js
# This script extracts code samples and creates executable CFM files

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$baseDir = Join-Path $scriptDir ".."
$modulesDataPath = Join-Path $baseDir "assets\js\modules-data.js"
$codeSamplesDir = Join-Path $baseDir "code-samples"

# Ensure code-samples directory exists
if (-not (Test-Path $codeSamplesDir)) {
    New-Item -Path $codeSamplesDir -ItemType Directory | Out-Null
    Write-Host "Created code-samples directory" -ForegroundColor Green
}

# Read modules-data.js
$modulesDataContent = Get-Content $modulesDataPath -Raw

# Function to extract code from a section recursively
function ExtractCodeSamples($sections, $moduleId, $lessonIndex, $sectionPath = "") {
    $samples = @()
    
    if (-not $sections) { return $samples }
    
    foreach ($section in $sections) {
        $currentPath = if ($sectionPath) { "$sectionPath > $($section.title)" } else { $section.title }
        
        # Check if this section has code
        if ($section.code) {
            $code = $section.code
            $title = $section.codeTitle -replace '[^\w\s-]', '' -replace '\s+', '-'
            if (-not $title) { $title = $section.title -replace '[^\w\s-]', '' -replace '\s+', '-' }
            if (-not $title) { $title = "sample" }
            
            $samples += @{
                ModuleId = $moduleId
                LessonIndex = $lessonIndex
                Title = $title
                Code = $code
                SectionPath = $currentPath
            }
        }
        
        # Recursively check nested sections
        if ($section.sections) {
            $nestedSamples = ExtractCodeSamples -sections $section.sections -moduleId $moduleId -lessonIndex $lessonIndex -sectionPath $currentPath
            $samples += $nestedSamples
        }
    }
    
    return $samples
}

# Parse modules data (simplified - this is a basic parser)
# We'll use regex to find code blocks
Write-Host "`nExtracting code samples from modules-data.js..." -ForegroundColor Cyan

# Find all modules
$moduleMatches = [regex]::Matches($modulesDataContent, 'id:\s*(\d+),[\s\S]*?lessons:\s*\[([\s\S]*?)\](?=,\s*\}|\s*\})', [System.Text.RegularExpressions.RegexOptions]::Singleline)

$allSamples = @()
$sampleIndex = 0

foreach ($moduleMatch in $moduleMatches) {
    $moduleId = [int]$moduleMatch.Groups[1].Value
    $lessonsContent = $moduleMatch.Groups[2].Value
    
    Write-Host "`nProcessing Module $moduleId..." -ForegroundColor Yellow
    
    # Find lessons within this module
    $lessonMatches = [regex]::Matches($lessonsContent, 'title:\s*[''"]([^''"]+)[''"],[\s\S]*?sections:\s*\[([\s\S]*?)\](?=,\s*\}|\s*\})', [System.Text.RegularExpressions.RegexOptions]::Singleline)
    
    $lessonIndex = 0
    foreach ($lessonMatch in $lessonMatches) {
        $lessonTitle = $lessonMatch.Groups[1].Value
        $sectionsContent = $lessonMatch.Groups[2].Value
        
        Write-Host "  Lesson $lessonIndex : $lessonTitle" -ForegroundColor Gray
        
        # Find code blocks in sections
        # Look for code: or codeTitle: patterns
        $codeMatches = [regex]::Matches($sectionsContent, 'code(?:Title)?:\s*([''"]([^''"]+)[''"]|`([^`]+)`|\{[\s\S]*?tag:[\s\S]*?[''"]([^''"]+)[''"]|script:[\s\S]*?[''"]([^''"]+)[''"]\s*\})', [System.Text.RegularExpressions.RegexOptions]::Singleline)
        
        # More sophisticated: find code: followed by codeTitle:
        $codeBlockPattern = 'code:\s*(?:(?<tagCode>`[^`]+`|[''"][^''"]+[''"]|\{[\s\S]*?\})),[\s\S]*?codeTitle:\s*[''"](?<title>[^''"]+)[''"]'
        $codeBlocks = [regex]::Matches($sectionsContent, $codeBlockPattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)
        
        foreach ($codeBlock in $codeBlocks) {
            $codeTitle = $codeBlock.Groups['title'].Value
            $codeContent = $codeBlock.Groups['tagCode'].Value
            
            # Clean up the code content
            if ($codeContent -match '^`(.+)`$') {
                $codeContent = $matches[1] -replace '\\n', "`n"
            } elseif ($codeContent -match "^['""](.+)['""]$") {
                $codeContent = $matches[1] -replace '\\n', "`n"
            }
            
            # Generate safe filename
            $safeFileName = $codeTitle.ToLower() -replace '[^\w\s-]', '' -replace '\s+', '-' -replace '^-+|-+$', ''
            if ([string]::IsNullOrWhiteSpace($safeFileName)) {
                $safeFileName = "sample-$sampleIndex"
            }
            $safeFileName = $safeFileName.Substring(0, [Math]::Min(30, $safeFileName.Length))
            
            # Create directory structure
            $moduleDir = Join-Path $codeSamplesDir "module-$moduleId"
            $lessonDir = Join-Path $moduleDir "lesson-$lessonIndex"
            
            if (-not (Test-Path $moduleDir)) {
                New-Item -Path $moduleDir -ItemType Directory | Out-Null
            }
            if (-not (Test-Path $lessonDir)) {
                New-Item -Path $lessonDir -ItemType Directory | Out-Null
            }
            
            # Create CFM file
            $cfmFile = Join-Path $lessonDir "$safeFileName.cfm"
            
            # If code is an object with tag/script, use tag syntax
            if ($codeContent -match '^\s*\{') {
                # Extract tag code from object
                if ($codeContent -match 'tag:\s*[''"]([^''"]+)[''"]') {
                    $codeContent = $matches[1] -replace '\\n', "`n"
                } elseif ($codeContent -match 'tag:\s*`([^`]+)`') {
                    $codeContent = $matches[1] -replace '\\n', "`n"
                }
            }
            
            # Write CFM file with basic HTML wrapper
            $cfmContent = @"
<!--- 
    Code Sample: $codeTitle
    Module: $moduleId, Lesson: $lessonIndex
    Generated automatically from modules-data.js
--->
<!DOCTYPE html>
<html>
<head>
    <title>$codeTitle</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }
        .output { background: white; padding: 15px; border-radius: 5px; margin-top: 20px; }
        pre { background: #1e1e1e; color: #e8e8e8; padding: 15px; border-radius: 5px; overflow-x: auto; }
    </style>
</head>
<body>
    <h2>$codeTitle</h2>
    <p><strong>Module:</strong> $moduleId | <strong>Lesson:</strong> $lessonIndex</p>
    
    <h3>Code:</h3>
    <pre><code>$codeContent</code></pre>
    
    <div class="output">
        <h3>Output:</h3>
        $codeContent
    </div>
    
    <p style="margin-top: 20px;"><a href="javascript:history.back()">← Back</a></p>
</body>
</html>
"@
            
            Set-Content -Path $cfmFile -Value $cfmContent -NoNewline
            Write-Host "    ✓ Created: $safeFileName.cfm" -ForegroundColor Green
            $sampleIndex++
        }
        
        $lessonIndex++
    }
}

Write-Host "`n✓ Code sample generation complete!" -ForegroundColor Green
Write-Host "`nGenerated $sampleIndex code sample files in: $codeSamplesDir" -ForegroundColor Cyan


