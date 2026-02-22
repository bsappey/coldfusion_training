/**
 * Generate Module and Quiz Files
 * 
 * This script generates individual module and quiz files from the base templates.
 * Run with: node scripts/generate-modules.js
 * 
 * Requires: Node.js and fs module
 */

const fs = require('fs');
const path = require('path');

// Module data - matches the structure in modules-data.js
const modules = [
    { id: 0, title: 'Welcome & Setup' },
    { id: 1, title: 'Language Fundamentals' },
    { id: 2, title: 'Web & Application Structure' },
    { id: 3, title: 'Data Connectivity & Manipulation' },
    { id: 4, title: 'File & Document Operations' },
    { id: 5, title: 'Cloud Storage Integration' },
    { id: 6, title: 'Security Fundamentals' },
    { id: 7, title: 'Object-Oriented Programming' },
    { id: 8, title: 'What\'s New: Version Comparison' },
    { id: 9, title: 'Advanced Topics' },
    { id: 10, title: 'Quality Assurance & Debugging' },
    { id: 11, title: 'Migration & Compatibility' },
    { id: 12, title: 'Projects & Labs' }
];

// Get the project root directory
const projectRoot = path.resolve(__dirname, '..');
const modulesDir = path.join(projectRoot, 'modules');
const quizzesDir = path.join(projectRoot, 'quizzes');
const baseModuleTemplate = path.join(modulesDir, '_module-base.cfm');
const baseQuizTemplate = path.join(quizzesDir, '_quiz-base.cfm');

// Ensure directories exist
if (!fs.existsSync(modulesDir)) {
    fs.mkdirSync(modulesDir, { recursive: true });
    console.log('Created modules directory');
}

if (!fs.existsSync(quizzesDir)) {
    fs.mkdirSync(quizzesDir, { recursive: true });
    console.log('Created quizzes directory');
}

// Read base templates
let moduleTemplate = '';
let quizTemplate = '';

try {
    moduleTemplate = fs.readFileSync(baseModuleTemplate, 'utf8');
    console.log('✓ Read module base template');
} catch (error) {
    console.error('Error reading module template:', error.message);
    process.exit(1);
}

try {
    quizTemplate = fs.readFileSync(baseQuizTemplate, 'utf8');
    console.log('✓ Read quiz base template');
} catch (error) {
    console.error('Error reading quiz template:', error.message);
    process.exit(1);
}

// Generate module files
console.log('\nGenerating module files...');
modules.forEach(module => {
    const fileName = `module-${module.id}.cfm`;
    const filePath = path.join(modulesDir, fileName);
    
    // The template is already complete - just copy it
    // The JavaScript will automatically detect the module ID from the filename
    fs.writeFileSync(filePath, moduleTemplate, 'utf8');
    console.log(`  ✓ Created ${fileName}`);
});

// Generate quiz files
console.log('\nGenerating quiz files...');
modules.forEach(module => {
    const fileName = `quiz-${module.id}.cfm`;
    const filePath = path.join(quizzesDir, fileName);
    
    // The template is already complete - just copy it
    // The JavaScript will automatically detect the module ID from the filename
    fs.writeFileSync(filePath, quizTemplate, 'utf8');
    console.log(`  ✓ Created ${fileName}`);
});

console.log('\n✅ Successfully generated all module and quiz files!');
console.log(`\nGenerated ${modules.length} module files in: ${modulesDir}`);
console.log(`Generated ${modules.length} quiz files in: ${quizzesDir}`);


