# Generate Placeholder CFM Files for Code Samples
# Creates basic template files that can be populated with actual code later

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$baseDir = Join-Path $scriptDir ".."
$codeSamplesDir = Join-Path $baseDir "code-samples"

Write-Host "`nGenerating placeholder CFM files..." -ForegroundColor Cyan

$fileCount = 0

# Common code sample filenames based on typical patterns
$commonSamples = @(
    "basic-variable-assignment",
    "variable-naming-best-practices",
    "working-with-data-types",
    "understanding-variable-scopes",
    "type-checking-and-conversion",
    "using-built-in-functions",
    "checking-your-coldfusion-version",
    "recommended-project-structure"
)

# Generate files for each module/lesson directory
for ($moduleId = 0; $moduleId -le 12; $moduleId++) {
    $moduleDir = Join-Path $codeSamplesDir "module-$moduleId"
    
    if (Test-Path $moduleDir) {
        for ($lessonId = 0; $lessonId -le 9; $lessonId++) {
            $lessonDir = Join-Path $moduleDir "lesson-$lessonId"
            
            if (Test-Path $lessonDir) {
                # Create a few placeholder files per lesson
                for ($sampleNum = 0; $sampleNum -lt 5; $sampleNum++) {
                    $sampleName = if ($sampleNum -lt $commonSamples.Length) {
                        $commonSamples[$sampleNum]
                    } else {
                        "sample-$sampleNum"
                    }
                    
                    $cfmFile = Join-Path $lessonDir "$sampleName.cfm"
                    
                    # Only create if it doesn't exist
                    if (-not (Test-Path $cfmFile)) {
                        $cfmContent = @"
<!--- 
    Code Sample: $sampleName
    Module: $moduleId, Lesson: $lessonId
    Placeholder file - Replace with actual code sample
--->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Sample - $sampleName</title>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            padding: 20px; 
            background: #f5f5f5; 
            max-width: 1200px;
            margin: 0 auto;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #1473E6;
            margin-top: 0;
        }
        .info {
            background: #e3f2fd;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            border-left: 4px solid #1473E6;
        }
        .code-block {
            background: #1e1e1e;
            color: #e8e8e8;
            padding: 20px;
            border-radius: 5px;
            overflow-x: auto;
            margin: 20px 0;
            font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
            font-size: 14px;
            line-height: 1.6;
        }
        .output {
            background: #fff3cd;
            padding: 20px;
            border-radius: 5px;
            margin-top: 20px;
            border-left: 4px solid #ffc107;
        }
        .output h3 {
            margin-top: 0;
            color: #856404;
        }
        .back-link {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background: #1473E6;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
        .back-link:hover {
            background: #0D5BB8;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Code Sample: $sampleName</h1>
        
        <div class="info">
            <strong>Module:</strong> $moduleId | <strong>Lesson:</strong> $lessonId<br>
            <strong>Note:</strong> This is a placeholder file. Replace with actual code sample content.
        </div>
        
        <h2>Code:</h2>
        <div class="code-block">
            <!--- Add your ColdFusion code here --->
            <cfoutput>
                <p>Placeholder code sample for Module $moduleId, Lesson $lessonId</p>
                <p>Current Date/Time: #Now()#</p>
            </cfoutput>
        </div>
        
        <div class="output">
            <h3>Output:</h3>
            <cfoutput>
                <p>Placeholder code sample for Module $moduleId, Lesson $lessonId</p>
                <p>Current Date/Time: #Now()#</p>
            </cfoutput>
        </div>
        
        <a href="javascript:history.back()" class="back-link">← Back to Lesson</a>
    </div>
</body>
</html>
"@
                        
                        Set-Content -Path $cfmFile -Value $cfmContent -NoNewline
                        $fileCount++
                    }
                }
            }
        }
    }
}

Write-Host "Generated $fileCount placeholder CFM files!" -ForegroundColor Green
Write-Host "Files are ready. The Run button should now work." -ForegroundColor Cyan

