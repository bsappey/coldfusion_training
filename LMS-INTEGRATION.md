# Adobe Learning Manager Integration Guide

This document explains how to integrate the ColdFusion Training Platform with Adobe Learning Manager (ALM) and other Learning Management Systems.

## Overview

The training platform can be integrated into Adobe Learning Manager and other LMS platforms through several methods:

1. **SCORM Package** - Standard SCORM 1.2 or 2004 package
2. **xAPI (Tin Can API)** - Modern learning analytics standard
3. **Embedded Content** - Direct HTML/iframe embedding
4. **External Catalog** - Headless integration via ALM APIs

## Integration Methods

### Method 1: SCORM Package (Recommended)

**Advantages:**
- Widely supported by all major LMS platforms
- Built-in progress tracking and completion reporting
- Standardized communication with LMS

**Requirements:**
- SCORM packaging tool (e.g., SCORM Cloud, Articulate, or custom wrapper)
- SCORM API wrapper JavaScript
- Progress/completion tracking integration

**Implementation Steps:**

1. **Create SCORM Wrapper**
   - Wrap the training content in SCORM-compliant structure
   - Implement SCORM API communication
   - Map progress tracking to SCORM data model

2. **Package Content**
   - Create ZIP package with manifest (imsmanifest.xml)
   - Include all assets (HTML, CSS, JS, images)
   - Define SCOs (Sharable Content Objects) for each module

3. **Upload to ALM**
   - Upload SCORM package to Adobe Learning Manager
   - Configure completion criteria
   - Set up reporting

**SCORM Data Model Mapping:**
```javascript
// Map our progress tracking to SCORM
const scormData = {
    'cmi.core.lesson_status': getCompletionStatus(), // 'completed', 'incomplete', 'passed', 'failed'
    'cmi.core.score.raw': getQuizScore(), // 0-100
    'cmi.core.score.max': 100,
    'cmi.core.score.min': 0,
    'cmi.core.total_time': getTotalTimeSpent(), // Time format: PT1H30M15S
    'cmi.suspend_data': JSON.stringify(AppState.progress) // Save progress
};
```

### Method 2: xAPI (Experience API)

**Advantages:**
- More flexible than SCORM
- Better analytics and reporting
- Supports modern learning experiences

**Requirements:**
- xAPI Learning Record Store (LRS)
- xAPI JavaScript library
- Statement generation for learning activities

**Implementation:**

```javascript
// xAPI statement example
const xapiStatement = {
    actor: {
        mbox: 'mailto:learner@example.com',
        name: 'John Doe'
    },
    verb: {
        id: 'http://adlnet.gov/expapi/verbs/completed',
        display: { 'en-US': 'completed' }
    },
    object: {
        id: 'https://training.example.com/module-1',
        definition: {
            name: { 'en-US': 'Module 1: Language Fundamentals' },
            type: 'http://adlnet.gov/expapi/activities/module'
        }
    },
    result: {
        score: {
            raw: 85,
            max: 100,
            min: 0
        },
        success: true,
        completion: true
    },
    context: {
        extensions: {
            'https://training.example.com/extensions/time-spent': 'PT2H30M',
            'https://training.example.com/extensions/experience-level': 'mid'
        }
    }
};
```

### Method 3: Embedded Content (Iframe)

**Advantages:**
- Quickest to implement
- No packaging required
- Direct access to training

**Requirements:**
- Publicly accessible URL
- Cross-origin communication (postMessage API)
- Progress tracking via API or postMessage

**Implementation:**

```html
<!-- In Adobe Learning Manager -->
<iframe 
    src="https://training.example.com/index.cfm" 
    width="100%" 
    height="800px"
    id="trainingFrame">
</iframe>

<script>
// Listen for progress updates
window.addEventListener('message', function(event) {
    if (event.origin === 'https://training.example.com') {
        const progress = event.data;
        // Send to ALM via API
        updateALMProgress(progress);
    }
});
</script>
```

**Progress Communication:**
```javascript
// In training platform (app.js)
function sendProgressToLMS() {
    if (window.parent !== window) {
        // We're in an iframe
        window.parent.postMessage({
            type: 'progress',
            moduleId: currentModule,
            progress: AppState.progress,
            quizScore: AppState.quizResults[currentModule]?.score
        }, '*'); // In production, specify exact origin
    }
}
```

### Method 4: External Catalog (ALM Premium)

**Advantages:**
- Headless integration
- Non-logged-in access
- Custom branding and UI

**Requirements:**
- Adobe Learning Manager Premium
- Training Data Access API
- Custom frontend implementation

**API Integration:**

```javascript
// Fetch courses from ALM
async function fetchALMCourses() {
    const response = await fetch('https://alm-instance.adobe.com/api/v1/courses', {
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

// Report completion to ALM
async function reportCompletion(courseId, userId, score) {
    await fetch(`https://alm-instance.adobe.com/api/v1/courses/${courseId}/completions`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: userId,
            score: score,
            status: 'completed',
            completedAt: new Date().toISOString()
        })
    });
}
```

## Adobe Learning Manager Specific Integration

### Supported Content Types

Adobe Learning Manager supports:
- ✅ SCORM 1.2 and 2004
- ✅ xAPI (Tin Can API)
- ✅ AICC
- ✅ Video content
- ✅ PDF documents
- ✅ PowerPoint presentations
- ✅ HTML5 content
- ✅ Embedded iframes

### Recommended Approach for This Training

**Option A: SCORM Package (Best for Standard LMS Integration)**

1. Package each module as a separate SCORM SCO
2. Create a master SCORM package with all modules
3. Track progress per module
4. Report quiz scores and completion

**Option B: Hybrid Approach**

1. Use SCORM for overall course structure
2. Embed individual modules as iframes
3. Use postMessage for progress communication
4. Report to SCORM API for LMS tracking

### Implementation Checklist

- [ ] Create SCORM wrapper JavaScript
- [ ] Map progress tracking to SCORM data model
- [ ] Package content as SCORM ZIP
- [ ] Test in SCORM Cloud or similar
- [ ] Upload to Adobe Learning Manager
- [ ] Configure completion criteria
- [ ] Set up reporting and analytics
- [ ] Test user enrollment and progress
- [ ] Document integration process

## Progress Tracking Integration

### Current Progress Structure

```javascript
AppState = {
    progress: {
        0: 100,  // Module 0: 100% complete
        1: 75,   // Module 1: 75% complete
        // ...
    },
    quizResults: {
        0: { score: 85, passed: true },
        1: { score: 90, passed: true },
        // ...
    }
};
```

### SCORM Integration Points

```javascript
// Initialize SCORM connection
function initSCORM() {
    const API = getSCORMAPI();
    if (API) {
        // Load saved progress
        const suspendData = API.LMSGetValue('cmi.suspend_data');
        if (suspendData) {
            AppState.progress = JSON.parse(suspendData);
        }
        
        // Set initial status
        API.LMSSetValue('cmi.core.lesson_status', 'incomplete');
        API.LMSCommit('');
    }
}

// Update progress to SCORM
function updateSCORMProgress() {
    const API = getSCORMAPI();
    if (API) {
        // Calculate overall completion
        const modules = getModulesData();
        const totalModules = modules.length;
        let completed = 0;
        
        modules.forEach(module => {
            if (AppState.progress[module.id] >= 100) {
                completed++;
            }
        });
        
        const completionPercent = (completed / totalModules) * 100;
        
        // Update SCORM
        API.LMSSetValue('cmi.core.lesson_status', 
            completionPercent === 100 ? 'completed' : 'incomplete');
        API.LMSSetValue('cmi.suspend_data', JSON.stringify(AppState.progress));
        API.LMSCommit('');
    }
}

// Report quiz completion
function reportQuizToSCORM(moduleId, score, passed) {
    const API = getSCORMAPI();
    if (API) {
        API.LMSSetValue('cmi.core.score.raw', score);
        API.LMSSetValue('cmi.core.score.max', 100);
        API.LMSSetValue('cmi.core.lesson_status', passed ? 'passed' : 'failed');
        API.LMSCommit('');
    }
}
```

## Content Packaging

### SCORM Package Structure

```
coldfusion-training-scorm.zip
├── imsmanifest.xml          # SCORM manifest
├── index.html               # Entry point
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── modules/
│   ├── module-0.cfm
│   └── ...
└── quizzes/
    ├── quiz-0.cfm
    └── ...
```

### Manifest Example (imsmanifest.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="coldfusion-training" version="1.0"
    xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
    xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    
    <metadata>
        <schema>ADL SCORM</schema>
        <schemaversion>1.2</schemaversion>
        <title>ColdFusion Training Platform</title>
        <description>Comprehensive ColdFusion training covering CF 2021, 2023, and 2025</description>
    </metadata>
    
    <organizations default="TOC1">
        <organization identifier="TOC1">
            <title>ColdFusion Training</title>
            <item identifier="ITEM1" identifierref="RES1">
                <title>Module 0: Welcome & Setup</title>
            </item>
            <item identifier="ITEM2" identifierref="RES2">
                <title>Module 1: Language Fundamentals</title>
            </item>
            <!-- More items -->
        </organization>
    </organizations>
    
    <resources>
        <resource identifier="RES1" type="webcontent" adlcp:scormtype="sco" href="index.html">
            <file href="index.html"/>
            <file href="modules/module-0.cfm"/>
        </resource>
        <!-- More resources -->
    </resources>
</manifest>
```

## Testing Integration

### SCORM Cloud Testing

1. Create account at https://cloud.scorm.com
2. Upload SCORM package
3. Test launch and progress tracking
4. Verify completion reporting
5. Check data model values

### Adobe Learning Manager Testing

1. Upload SCORM package to ALM
2. Create learning program
3. Enroll test users
4. Complete modules and quizzes
5. Verify progress and completion in ALM reports

## Best Practices

1. **Modular Packaging** - Package modules separately for flexibility
2. **Progress Persistence** - Use SCORM suspend_data for progress
3. **Error Handling** - Handle SCORM API failures gracefully
4. **Testing** - Test in multiple LMS platforms
5. **Documentation** - Document integration steps for administrators

## Resources

- [Adobe Learning Manager Documentation](https://experienceleague.adobe.com/docs/learning-manager/using/home.html)
- [SCORM Specification](https://scorm.com/scorm-explained/)
- [xAPI Specification](https://xapi.com/overview/)
- [SCORM Cloud](https://cloud.scorm.com/) - Testing platform

---

**Note**: For ColdFusion-specific content, ensure the LMS can serve .cfm files or convert to static HTML/JavaScript for broader compatibility.
