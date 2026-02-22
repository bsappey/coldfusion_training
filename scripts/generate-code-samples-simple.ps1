# Generate Code Sample Files - Simple Version
# Creates placeholder CFM files that can be populated later

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$baseDir = Join-Path $scriptDir ".."
$codeSamplesDir = Join-Path $baseDir "code-samples"

# Ensure code-samples directory exists
if (-not (Test-Path $codeSamplesDir)) {
    New-Item -Path $codeSamplesDir -ItemType Directory | Out-Null
    Write-Host "Created code-samples directory" -ForegroundColor Green
}

Write-Host "`nGenerating code sample directory structure..." -ForegroundColor Cyan

# Create directories for modules 0-12, lessons 0-9
for ($moduleId = 0; $moduleId -le 12; $moduleId++) {
    $moduleDir = Join-Path $codeSamplesDir "module-$moduleId"
    if (-not (Test-Path $moduleDir)) {
        New-Item -Path $moduleDir -ItemType Directory | Out-Null
    }
    
    # Create lesson directories (0-9 should cover most cases)
    for ($lessonId = 0; $lessonId -le 9; $lessonId++) {
        $lessonDir = Join-Path $moduleDir "lesson-$lessonId"
        if (-not (Test-Path $lessonDir)) {
            New-Item -Path $lessonDir -ItemType Directory | Out-Null
        }
    }
}

Write-Host "`n✓ Directory structure created!" -ForegroundColor Green
Write-Host "`nNote: Code sample files will be created dynamically when needed." -ForegroundColor Yellow
Write-Host "The Run button will work once code samples are generated." -ForegroundColor Yellow


