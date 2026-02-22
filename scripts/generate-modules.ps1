# Generate Module and Quiz Files
# Run with: .\scripts\generate-modules.ps1

$projectRoot = Split-Path -Parent $PSScriptRoot
$modulesDir = Join-Path $projectRoot "modules"
$quizzesDir = Join-Path $projectRoot "quizzes"
$baseModuleTemplate = Join-Path $modulesDir "_module-base.cfm"
$baseQuizTemplate = Join-Path $quizzesDir "_quiz-base.cfm"

# Module data
$modules = @(
    @{id=0; title="Welcome & Setup"},
    @{id=1; title="Language Fundamentals"},
    @{id=2; title="Web & Application Structure"},
    @{id=3; title="Data Connectivity & Manipulation"},
    @{id=4; title="File & Document Operations"},
    @{id=5; title="Cloud Storage Integration"},
    @{id=6; title="Security Fundamentals"},
    @{id=7; title="Object-Oriented Programming"},
    @{id=8; title="What's New: Version Comparison"},
    @{id=9; title="Advanced Topics"},
    @{id=10; title="Quality Assurance & Debugging"},
    @{id=11; title="Migration & Compatibility"},
    @{id=12; title="Projects & Labs"}
)

# Ensure directories exist
if (-not (Test-Path $modulesDir)) {
    New-Item -ItemType Directory -Path $modulesDir -Force | Out-Null
    Write-Host "Created modules directory" -ForegroundColor Green
}

if (-not (Test-Path $quizzesDir)) {
    New-Item -ItemType Directory -Path $quizzesDir -Force | Out-Null
    Write-Host "Created quizzes directory" -ForegroundColor Green
}

# Read base templates
if (Test-Path $baseModuleTemplate) {
    $moduleTemplate = Get-Content $baseModuleTemplate -Raw
    Write-Host "✓ Read module base template" -ForegroundColor Green
} else {
    Write-Host "ERROR: Module template not found at: $baseModuleTemplate" -ForegroundColor Red
    exit 1
}

if (Test-Path $baseQuizTemplate) {
    $quizTemplate = Get-Content $baseQuizTemplate -Raw
    Write-Host "✓ Read quiz base template" -ForegroundColor Green
} else {
    Write-Host "ERROR: Quiz template not found at: $baseQuizTemplate" -ForegroundColor Red
    exit 1
}

# Generate module files
Write-Host "`nGenerating module files..." -ForegroundColor Cyan
foreach ($module in $modules) {
    $fileName = "module-$($module.id).cfm"
    $filePath = Join-Path $modulesDir $fileName
    Set-Content -Path $filePath -Value $moduleTemplate -NoNewline
    Write-Host "  ✓ Created $fileName" -ForegroundColor Gray
}

# Generate quiz files
Write-Host "`nGenerating quiz files..." -ForegroundColor Cyan
foreach ($module in $modules) {
    $fileName = "quiz-$($module.id).cfm"
    $filePath = Join-Path $quizzesDir $fileName
    Set-Content -Path $filePath -Value $quizTemplate -NoNewline
    Write-Host "  ✓ Created $fileName" -ForegroundColor Gray
}

Write-Host "`n✅ Successfully generated all module and quiz files!" -ForegroundColor Green
Write-Host "`nGenerated $($modules.Count) module files in: $modulesDir" -ForegroundColor Yellow
Write-Host "Generated $($modules.Count) quiz files in: $quizzesDir" -ForegroundColor Yellow


