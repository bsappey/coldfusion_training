# File Structure Documentation

## Overview

The ColdFusion Training application now uses **physical file paths** instead of URL parameters for better organization and maintainability.

## Directory Structure

```
coldfusion_training/
├── modules/                    # Individual module pages
│   ├── _module-base.cfm       # Base template (do not edit)
│   ├── module-0.cfm           # Welcome & Setup
│   ├── module-1.cfm           # Language Fundamentals
│   ├── module-2.cfm           # Web & Application Structure
│   └── ... (module-3.cfm through module-12.cfm)
│
├── quizzes/                    # Individual quiz pages
│   ├── _quiz-base.cfm         # Base template (do not edit)
│   ├── quiz-0.cfm             # Welcome & Setup Quiz
│   ├── quiz-1.cfm             # Language Fundamentals Quiz
│   └── ... (quiz-2.cfm through quiz-12.cfm)
│
├── assets/
│   ├── js/
│   │   ├── modules-data.js    # Module content data
│   │   ├── app.js             # Main application logic
│   │   ├── module.js          # Module page logic (updated)
│   │   └── quiz.js            # Quiz page logic (updated)
│   └── css/
│       └── style.css          # Custom styles
│
├── scripts/
│   ├── generate-modules.js    # Node.js generation script
│   ├── generate-modules.cfm    # ColdFusion generation script
│   └── generate-modules.ps1   # PowerShell generation script
│
└── index.cfm                   # Home page
```

## URL Structure

### Old Structure (URL Parameters)
- ❌ `/module.cfm?module=1`
- ❌ `/module.cfm?module=2`
- ❌ `/quiz.cfm?module=1`

### New Structure (Physical Files)
- ✅ `/modules/module-1.cfm`
- ✅ `/modules/module-2.cfm`
- ✅ `/quizzes/quiz-1.cfm`

## How Module ID Detection Works

The JavaScript automatically extracts the module ID from the filename:

**Module Files:**
- `module-1.cfm` → Module ID: 1
- `module-2.cfm` → Module ID: 2
- Pattern: `/module-(\d+)\.cfm$/`

**Quiz Files:**
- `quiz-1.cfm` → Module ID: 1
- `quiz-2.cfm` → Module ID: 2
- Pattern: `/quiz-(\d+)\.cfm$/`

## Generating Files

### Option 1: PowerShell (Windows)
```powershell
.\scripts\generate-modules.ps1
```

### Option 2: ColdFusion
Open in browser or run via CommandBox:
```bash
box run scripts/generate-modules.cfm
```

### Option 3: Node.js
```bash
node scripts/generate-modules.js
```

## Customizing Individual Files

If you need to customize a specific module or quiz:

1. **Copy the base template:**
   - From `modules/_module-base.cfm` to `modules/module-X.cfm`
   - From `quizzes/_quiz-base.cfm` to `quizzes/quiz-X.cfm`

2. **Make your customizations** to that specific file

3. The base template will not be used for that file

## Benefits of This Structure

1. ✅ **Better Organization**: Each module is a separate, findable file
2. ✅ **Clean URLs**: `/modules/module-1.cfm` vs `/module.cfm?module=1`
3. ✅ **Easier Maintenance**: See exactly which module files changed in git
4. ✅ **Flexibility**: Can customize individual modules if needed
5. ✅ **Scalability**: Easy to add module-specific features
6. ✅ **SEO Friendly**: Each module has its own URL

## JavaScript Updates

All JavaScript files have been updated to:
- Extract module ID from filename (not URL parameters)
- Use physical file paths for links
- Maintain backward compatibility with URL parameters as fallback

## Files Updated

- ✅ `assets/js/app.js` - Module links now use physical paths
- ✅ `assets/js/module.js` - Extracts ID from filename, uses physical paths
- ✅ `assets/js/quiz.js` - Extracts ID from filename, uses physical paths

## Next Steps

1. ✅ Base templates created
2. ✅ Generation scripts created
3. ✅ All module and quiz files generated
4. ✅ JavaScript updated to use physical paths
5. ⏭️ Test the application to ensure everything works
6. ⏭️ Adjust CSS paths if needed based on your server structure


