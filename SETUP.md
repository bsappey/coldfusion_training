# Setup Guide - ColdFusion Training Platform

## Quick Start

### Using ColdFusion Server

1. Copy all files to the **root** of your ColdFusion web server (so the app runs at the web root, not in a subfolder):
   ```
   C:\ColdFusion2021\cfusion\wwwroot\
   ```
   Place the project files here so `index.cfm` is directly under wwwroot. For CommandBox, the project folder itself is the web root when you run `box server start` from that folder.

2. Access the training:
   - ColdFusion Server: `http://127.0.0.1:8500/index.cfm`
   - CommandBox: `http://127.0.0.1:8080/index.cfm`

### Using CommandBox (Recommended for Training)

1. **Install CommandBox** (if needed):
   ```bash
   # Download from: https://www.ortussolutions.com/products/commandbox
   ```

2. **Navigate to project**:
   ```bash
   cd C:\Users\admin\Documents\gitkraken\coldfusion_training
   ```

3. **Start server**:
   ```bash
   box server start
   ```

4. **Access training**:
   ```
   http://127.0.0.1:8080/index.cfm
   ```

## File Structure

```
coldfusion_training/
├── index.cfm                    # Main landing page
├── module.cfm                   # Module/lesson viewer
├── quiz.cfm                     # Quiz interface
├── README.md                    # Documentation
├── SETUP.md                     # This file
└── assets/
    ├── css/
    │   └── style.css           # Custom styles
    └── js/
        ├── modules-data.js     # All module content
        ├── app.js              # Main app logic
        ├── module.js           # Module page logic
        └── quiz.js             # Quiz logic
```

## Configuration

### No Configuration Required!

The platform works out of the box with:
- ✅ No database required (uses localStorage)
- ✅ No server configuration needed
- ✅ No dependencies to install
- ✅ Works with any ColdFusion version (2021, 2023, 2025)

## Adding Content

### 1. Add Module Lessons

Edit `assets/js/modules-data.js`:

```javascript
function getModule1Data() {
    return {
        title: 'Your Module Title',
        description: 'Module description',
        versions: ['2021', '2023', '2025'],
        lessons: [
            {
                title: 'Lesson 1',
                content: 'Lesson content...',
                sections: [
                    {
                        title: 'Section Title',
                        content: 'Section content',
                        code: '<cfset x = 1>',
                        codeTitle: 'Example',
                        versionBadge: '2021' // Optional
                    }
                ]
            }
        ]
    };
}
```

### 2. Add Quiz Questions

Edit `assets/js/quiz.js` in `getQuizData()`:

```javascript
const quizzes = {
    0: {
        questions: [
            {
                question: 'Your question?',
                type: 'single', // or 'multiple'
                answers: [
                    { text: 'Answer 1', value: 'a' },
                    { text: 'Answer 2', value: 'b' }
                ],
                correct: 'a',
                explanation: 'Why this is correct'
            }
        ]
    }
};
```

## Version Testing

### Test in Different Versions

1. **CF 2021**: Use ColdFusion 2021 server
2. **CF 2023**: Use ColdFusion 2023 server  
3. **CF 2025**: Use ColdFusion 2025 server

Or use CommandBox with different CF versions:
```bash
box install coldbox@be
box server start cfengine=adobe@2021
```

## Troubleshooting

### Pages Not Loading

- Check ColdFusion server is running
- Verify file paths are correct
- Check browser console for JavaScript errors

### Code Not Highlighting

- Ensure Prism.js loads (check Network tab)
- Verify `language-coldfusion` class on code blocks
- Check ColdFusion language definition is included

### Progress Not Saving

- Check browser allows localStorage
- Clear browser cache
- Try different browser

### Module Data Not Loading

- Verify `modules-data.js` loads before other scripts
- Check browser console for errors
- Ensure module ID exists in data structure

## Next Steps

1. **Review Module 0** - Welcome & Setup content
2. **Test Quiz System** - Take a quiz to verify functionality
3. **Add Your Content** - Expand modules with your training materials
4. **Customize Styling** - Adjust colors/branding in `style.css`
5. **Deploy** - Move to production server when ready

## Support

- **ColdFusion Docs**: https://helpx.adobe.com/coldfusion/user-guide.html
- **CommandBox Docs**: https://commandbox.ortusbooks.com/
- **Bootstrap Docs**: https://getbootstrap.com/docs/5.3/

---

**Ready to start training!** 🚀

