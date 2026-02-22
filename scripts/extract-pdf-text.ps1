# ============================================
# PDF Text Extraction Script
# Attempts to extract text from PDF files
# ============================================

param(
    [string]$PdfPath,
    [string]$OutputPath = "",
    [switch]$Verbose = $false
)

$ErrorActionPreference = "Continue"

# Try method 1: Check if Adobe Acrobat Reader is available
function Extract-WithAcrobat {
    param([string]$pdfPath)
    
    $acrobatPath = "C:\Program Files\Adobe\Acrobat DC\Acrobat\Acrobat.exe"
    if (-not (Test-Path $acrobatPath)) {
        $acrobatPath = "C:\Program Files (x86)\Adobe\Acrobat Reader DC\Reader\AcroRd32.exe"
    }
    
    if (Test-Path $acrobatPath) {
        Write-Host "Found Adobe Acrobat at: $acrobatPath" -ForegroundColor Green
        # Adobe Acrobat can export to text via command line
        # This would require additional setup
        return $false
    }
    
    return $false
}

# Try method 2: Use .NET PDF libraries if available
function Extract-WithDotNet {
    param([string]$pdfPath)
    
    try {
        # Try to load iTextSharp if available
        $itextPath = Join-Path $PSScriptRoot "itextsharp.dll"
        if (Test-Path $itextPath) {
            Add-Type -Path $itextPath
            $pdf = New-Object iTextSharp.text.pdf.pdfreader -ArgumentList $pdfPath
            $text = ""
            for ($page = 1; $page -le $pdf.NumberOfPages; $page++) {
                $pageText = [iTextSharp.text.pdf.parser.PdfTextExtractor]::GetTextFromPage($pdf, $page)
                $text += $pageText + "`n"
            }
            $pdf.Close()
            return $text
        }
    } catch {
        if ($Verbose) {
            Write-Host "iTextSharp not available: $_" -ForegroundColor Yellow
        }
    }
    
    return $null
}

# Method 3: Try to extract readable text from PDF binary
function Extract-ReadableText {
    param([string]$pdfPath)
    
    try {
        $bytes = [System.IO.File]::ReadAllBytes($pdfPath)
        $text = [System.Text.Encoding]::UTF8.GetString($bytes)
        
        # Look for function names and code patterns
        $patterns = @(
            '(?i)(function|tag|script|syntax)[\s:]+([A-Za-z0-9_]+)',
            '(?i)(<cf[A-Za-z]+)',
            '(?i)([A-Za-z]+\([^)]*\))',
            '(?i)(CF\s+\d{4})',
            '(?i)(ColdFusion\s+\d{4})'
        )
        
        $foundText = ""
        foreach ($pattern in $patterns) {
            $matches = [regex]::Matches($text, $pattern)
            foreach ($match in $matches) {
                $foundText += $match.Value + "`n"
            }
        }
        
        if ($foundText.Length -gt 100) {
            return $foundText
        }
    } catch {
        Write-Host "Error reading PDF: $_" -ForegroundColor Red
    }
    
    return $null
}

# Main execution
if (-not $PdfPath -or -not (Test-Path $PdfPath)) {
    Write-Host "ERROR: PDF file not found: $PdfPath" -ForegroundColor Red
    Write-Host ""
    Write-Host "Usage: .\extract-pdf-text.ps1 -PdfPath 'path\to\file.pdf' [-OutputPath 'output.txt']" -ForegroundColor Yellow
    exit 1
}

Write-Host "Attempting to extract text from: $PdfPath" -ForegroundColor Cyan
Write-Host ""

# Try different methods
$extractedText = $null

# Method 1: .NET libraries
Write-Host "Trying .NET PDF libraries..." -ForegroundColor Yellow
$extractedText = Extract-WithDotNet -pdfPath $PdfPath

# Method 2: Readable text extraction
if (-not $extractedText) {
    Write-Host "Trying readable text extraction..." -ForegroundColor Yellow
    $extractedText = Extract-ReadableText -pdfPath $PdfPath
}

if ($extractedText) {
    if ($OutputPath) {
        Set-Content -Path $OutputPath -Value $extractedText -Encoding UTF8
        Write-Host "Extracted text saved to: $OutputPath" -ForegroundColor Green
    } else {
        Write-Host "Extracted text:" -ForegroundColor Green
        Write-Host $extractedText
    }
} else {
    Write-Host ""
    Write-Host "Unable to extract text automatically." -ForegroundColor Red
    Write-Host ""
    Write-Host "Alternative options:" -ForegroundColor Yellow
    Write-Host "1. Use Adobe Acrobat to export PDF to text file" -ForegroundColor White
    Write-Host "2. Use online PDF to text converter" -ForegroundColor White
    Write-Host "3. Copy/paste key sections manually" -ForegroundColor White
    Write-Host "4. Install iTextSharp.dll in the scripts folder and try again" -ForegroundColor White
    Write-Host ""
    Write-Host "For iTextSharp:" -ForegroundColor Cyan
    Write-Host "  Download from: https://github.com/itext/itextsharp/releases" -ForegroundColor White
    Write-Host "  Place itextsharp.dll in: $PSScriptRoot" -ForegroundColor White
}
