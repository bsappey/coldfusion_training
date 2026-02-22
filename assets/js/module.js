/**
 * ColdFusion Training - Module Page JavaScript
 * Modernized to ES6+ standards
 */

let currentLessonIndex = 0;
let lessons = [];
let isManualNavigation = false; // Flag to prevent scroll spy during manual navigation
let currentActiveNavItem = null; // Track the currently active nav item for scroll spy

// Initialize module page with performance optimization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initModulePage();
    }, { passive: true });
} else {
    initModulePage();
}

const initModulePage = () => {
    // Extract module ID from URL path (e.g., /modules/module-1.cfm)
    let moduleId = 1;
    const pathMatch = window.location.pathname.match(/module-(\d+)\.cfm$/);
    if (pathMatch) {
        moduleId = parseInt(pathMatch[1], 10);
    } else {
        // Fallback to URL parameter for backward compatibility
        const urlParams = new URLSearchParams(window.location.search);
        moduleId = parseInt(urlParams.get('module'), 10) || 1;
    }
    
    AppState.currentModule = moduleId;
    loadModule(moduleId);
};

/**
 * Load module content
 */
const loadModule = (moduleId) => {
    const moduleData = getModuleData(moduleId);
    
    if (!moduleData) {
        window.location.href = 'index.cfm';
        return;
    }

    // Update page title
    document.getElementById('pageTitle').textContent = `${moduleData.title} - ColdFusion Training`;
    document.getElementById('moduleTitle').textContent = `Module ${moduleId}: ${moduleData.title}`;
    document.getElementById('moduleDescription').textContent = moduleData.description;
    document.getElementById('breadcrumbModule').textContent = `Module ${moduleId}`;
    
    // Update quiz link
    const quizLink = document.getElementById('quizLink');
    if (quizLink) {
        quizLink.href = `../quizzes/quiz-${moduleId}.cfm`;
    }

    // Update version badges
    const moduleVersions = document.getElementById('moduleVersions');
    if (moduleVersions && moduleData.versions) {
        moduleVersions.innerHTML = moduleData.versions.map(v => 
            `<span class="badge bg-light text-dark me-1">CF ${v}</span>`
        ).join('');
    }

    // Load lessons
    lessons = moduleData.lessons;
    renderLessons();
    renderLessonNav();
    
    // Load first lesson
    showLesson(0);
    
    // Update progress
    updateModuleProgress();
    
    // Initialize scroll spy for navigation
    initScrollSpy();
};

/**
 * Generate hierarchical section number (e.g., 1.1.1.1)
 */
const getSectionNumber = (parentNumber, index) => {
    if (parentNumber === null || parentNumber === undefined) {
        return `${index + 1}.0`; // Main lesson: 1.0, 2.0, 3.0
    }
    // If parent ends with ".0", replace ".0" with "." + (index + 1)
    // Otherwise, append "." + (index + 1)
    if (parentNumber.endsWith('.0')) {
        return parentNumber.replace('.0', `.${index + 1}`);
    }
    return `${parentNumber}.${index + 1}`;
};

/**
 * Render nested sections recursively for navigation
 */
const renderSectionNav = (sections, lessonIndex, parentNumber, level = 0) => {
    if (!sections || sections.length === 0) return '';
    
    return sections.map((section, sectionIndex) => {
        const sectionNumber = getSectionNumber(parentNumber, sectionIndex);
        const hasNestedSections = section.sections && section.sections.length > 0;
        // Better indentation: level 0 (1.1, 1.2, etc.) gets moderate indent, deeper levels get more
        const indentClass = level === 0 ? 'ps-4' : level === 1 ? 'ps-5' : 'ps-6';
        const fontSize = level === 0 ? '0.9rem' : '0.85rem';
        
        let nestedHtml = '';
        if (hasNestedSections) {
            nestedHtml = renderSectionNav(section.sections, lessonIndex, sectionNumber, level + 1);
        }
        
        // Build path for section ID
        const sectionPath = `${lessonIndex}-${sectionNumber.replace(/\./g, '-')}`;
        
        return `
            <a href="#lesson${lessonIndex + 1}-section-${sectionPath}" 
               class="list-group-item list-group-item-action sub-section ${indentClass}" 
               data-lesson="${lessonIndex}"
               data-section-number="${sectionNumber}"
               onclick="event.preventDefault(); showLessonSection(${lessonIndex}, '${sectionNumber}')">
                <div class="d-flex align-items-center">
                    <span class="badge bg-secondary rounded-pill me-2" style="font-size: 0.7rem;">${sectionNumber}</span>
                    <span style="font-size: ${fontSize};">${section.title || 'Untitled Section'}</span>
                </div>
            </a>
            ${nestedHtml}
        `;
    }).join('');
}

/**
 * Render lesson navigation with expandable sub-sections
 */
const renderLessonNav = () => {
    const navContainer = document.getElementById('lessonNav');
    if (!navContainer) return;

    navContainer.innerHTML = lessons.map((lesson, index) => {
        const isActive = index === currentLessonIndex ? 'active' : '';
        const isExpanded = index === currentLessonIndex ? 'show' : '';
        const hasSections = lesson.sections && lesson.sections.length > 0;
        const lessonNumber = `${index + 1}.0`;
        
        // Generate sub-sections HTML with hierarchical numbering
        let subSectionsHtml = '';
        if (hasSections) {
            subSectionsHtml = renderSectionNav(lesson.sections, index, null, 0);
        }
        
        return `
            <div class="lesson-nav-item">
                <a href="#lesson${index + 1}" 
                   class="list-group-item list-group-item-action ${isActive}" 
                   data-lesson="${index}"
                   onclick="event.preventDefault(); toggleLessonNav(${index}); showLesson(${index})">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <span>${lesson.title}</span>
                        </div>
                        ${hasSections ? `<i class="ti ti-chevron-${isExpanded ? 'down' : 'right'} ms-auto"></i>` : ''}
                    </div>
                </a>
                ${hasSections ? `<div class="sub-sections collapse ${isExpanded}" id="subSections${index}">${subSectionsHtml}</div>` : ''}
            </div>
        `;
    }).join('');
};

/**
 * Render lessons
 */
const renderLessons = () => {
    const container = document.getElementById('lessonsContainer');
    if (!container) return;

    container.innerHTML = lessons.map((lesson, index) => {
        return `
            <div class="card mb-4 lesson-content shadow-sm" id="lesson${index + 1}" data-lesson="${index}">
                <div class="card-header">
                    <h5 class="mb-0">
                        <span class="badge bg-primary me-2">${index + 1}.0</span>
                        ${lesson.title}
                    </h5>
                </div>
                <div class="card-body">
                    ${renderLessonContent(lesson, index)}
                </div>
            </div>
        `;
    }).join('');

    // Re-initialize Prism for syntax highlighting
    setTimeout(() => {
        if (window.Prism) {
            // Check if language is registered, if not try to register it
            if (!Prism.languages.coldfusion && Prism.languages.markup) {
                console.log('Registering ColdFusion language...');
                Prism.languages.coldfusion = Prism.languages.extend('markup', {
                    'comment': [
                        { pattern: /<!---[\s\S]*?--->/, greedy: true },
                        { pattern: /\/\/.*/, greedy: true },
                        { pattern: /\/\*[\s\S]*?\*\//, greedy: true }
                    ],
                    'tag-keyword': {
                        pattern: /\b(?:cfif|cfelse|cfelseif|cfset|cfoutput|cfloop|cfquery|cfcomponent|cffunction|cfreturn|cfargument|cfparam|cfinclude|cfabort|cfthrow|cfcatch|cftry|cfswitch|cfcase|cfdefaultcase|cfbreak|cfcontinue|cfmodule|cfimport|cfapplication|cfcookie|cffile|cfdirectory|cfhttp|cfmail|cfdocument|cfpdf|cfimage|cfspreadsheet|cfthread|cfexecute)\b/i,
                        alias: 'keyword'
                    },
                    'script-keyword': {
                        pattern: /\b(?:var|if|else|elseif|for|while|do|switch|case|default|break|continue|return|function|component|interface|abstract|public|private|package|remote|static|final|override|try|catch|finally|throw|new|this|super|import|include|abort|param|argument|output|query|transaction|lock|thread|execute|http|mail|file|directory|document|pdf|image|spreadsheet|writeOutput|ArrayLen|StructKeyExists|Trim|Val|ToString|TypeOf|IsNumeric|IsString|IsDate|CreateUUID|Now|DateFormat|DateDiff|DateAdd|DollarFormat)\b/i,
                        alias: 'keyword'
                    },
                    'function': { pattern: /\b[A-Z][a-zA-Z0-9_]+\s*\(/, alias: 'function' },
                    'number': { pattern: /\b\d+(\.\d+)?\b/, alias: 'number' },
                    'boolean': { pattern: /\b(?:true|false)\b/i, alias: 'boolean' },
                    'variable': { pattern: /#[\w.]+#/, alias: 'variable' },
                    'scope': { pattern: /\b(?:Variables|Request|Session|Application|Server|Form|URL|CGI|Cookie|Arguments|This|Local|Client|Attributes|Caller|Super|Thread)\b/i, alias: 'constant' },
                    'property': { pattern: /\.\w+/, alias: 'property' }
                });
            }
            
            if (Prism.languages.coldfusion) {
                // Find all code blocks and highlight them (both tag and script)
                const codeBlocks = document.querySelectorAll('code.language-coldfusion');
                console.log('Highlighting', codeBlocks.length, 'ColdFusion code blocks');
                
                codeBlocks.forEach((block, index) => {
                    try {
                        const originalText = block.textContent;
                        Prism.highlightElement(block);
                        // Verify highlighting worked
                        const hasTokens = block.querySelector('.token') || block.innerHTML !== originalText;
                        if (!hasTokens && originalText.trim()) {
                            console.warn('Block', index, 'may not have been highlighted');
                        }
                    } catch (e) {
                        console.warn('Prism highlighting error for block', index, ':', e);
                    }
                });
                
                // Also highlight any script syntax blocks that might be hidden
                document.querySelectorAll('.syntax-script code.language-coldfusion').forEach(block => {
                    try {
                        Prism.highlightElement(block);
                    } catch (e) {
                        console.warn('Prism highlighting error for script block:', e);
                    }
                });
                
                // Also try highlightAll as fallback
                try {
                    Prism.highlightAll();
                } catch (e) {
                    console.warn('Prism highlightAll error:', e);
                }
            } else {
                console.error('ColdFusion language not available. Prism.languages.markup:', !!Prism.languages.markup);
            }
        } else {
            console.error('Prism is not available');
        }
    }, 300);
}

/**
 * Render nested sections recursively for content
 */
const renderNestedSections = (sections, lessonIndex, parentNumber, level = 0) => {
    if (!sections || sections.length === 0) return '';
    
    let html = '';
    sections.forEach((section, sectionIndex) => {
        const sectionNumber = getSectionNumber(parentNumber, sectionIndex);
        const sectionPath = `${lessonIndex}-${sectionNumber.replace(/\./g, '-')}`;
        const headingLevel = level === 0 ? 'h6' : level === 1 ? 'h6' : 'h6';
        const headingClass = level === 0 ? 'mt-4 mb-3' : level === 1 ? 'mt-3 mb-2' : 'mt-2 mb-2';
        const badgeSize = level === 0 ? '' : level === 1 ? 'style="font-size: 0.8rem;"' : 'style="font-size: 0.75rem;"';
        
        if (section.title) {
            let versionBadge = '';
            if (section.versionBadge) {
                versionBadge = `<span class="badge bg-primary ms-2">CF ${section.versionBadge}</span>`;
            }
            html += `<${headingLevel} class="${headingClass}" id="lesson${lessonIndex + 1}-section-${sectionPath}">
                <span class="badge bg-secondary me-2" ${badgeSize}>${sectionNumber}</span>
                ${section.title}${versionBadge}
            </${headingLevel}>`;
        }
        
        if (section.content) {
            html += `<p>${section.content}</p>`;
        }
        
        if (section.list) {
            html += '<ul class="mb-3">';
            section.list.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += '</ul>';
        }
        
        if (section.code) {
            const codeToRender = typeof section.code === 'object' ? section.code : section.code;
            html += renderCodeSample(codeToRender, section.codeTitle || 'Example', section.versionBadge, AppState.currentModule, lessonIndex, sectionIndex);
        }
        
        if (section.tip) {
            html += `
                <div class="alert alert-info mt-3">
                    <i class="ti ti-info-circle me-2"></i>
                    <strong>Tip:</strong> ${section.tip}
                </div>
            `;
        }
        
        // Recursively render nested sections
        if (section.sections && section.sections.length > 0) {
            html += renderNestedSections(section.sections, lessonIndex, sectionNumber, level + 1);
        }
    });
    
    return html;
};

/**
 * Render lesson content
 */
const renderLessonContent = (lesson, lessonIndex) => {
    let html = '';
    
    if (lesson.content) {
        html += `<p>${lesson.content}</p>`;
    }
    
    if (lesson.sections) {
        html += renderNestedSections(lesson.sections, lessonIndex, null, 0);
    }
    
    if (lesson.tip) {
        html += `
            <div class="alert alert-info mt-4">
                <i class="ti ti-info-circle me-2"></i>
                <strong>Tip:</strong> ${lesson.tip}
            </div>
        `;
    }
    
    if (lesson.success) {
        html += `
            <div class="alert alert-success mt-4">
                <i class="ti ti-check-circle me-2"></i>
                <strong>Try it yourself:</strong> ${lesson.success}
            </div>
        `;
    }
    
    return html;
};

/**
 * Render code sample with support for both tag and script syntax and inline editing
 */
const renderCodeSample = (code, title, version, moduleId, lessonIndex, sampleIndex) => {
    let versionBadge = '';
    if (version) {
        versionBadge = `<span class="badge bg-primary ms-2">CF ${version}</span>`;
    }
    
    // Check if code is an object with tag and script properties
    let tagCode = '';
    let scriptCode = '';
    let hasBothSyntaxes = false;
    
    if (typeof code === 'object' && code !== null) {
        if (code.tag && code.script) {
            hasBothSyntaxes = true;
            tagCode = code.tag;
            scriptCode = code.script;
        } else {
            // Fallback to single code if object structure is different
            tagCode = code.tag || code.script || JSON.stringify(code);
        }
    } else {
        tagCode = code;
    }
    
    // Generate a safe filename from title
    const safeFileName = title.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .substring(0, 30) || 'sample';
    
    // Create unique ID for this code sample
    const codeId = 'code-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    
    // Store module and lesson info for file operations
    const moduleNum = moduleId !== undefined ? moduleId : 0;
    const lessonNum = lessonIndex !== undefined ? lessonIndex : 0;
    const sampleNum = sampleIndex !== undefined ? sampleIndex : 0;
    
    // Build file path (assuming files exist in code-samples directory)
    // Since we're in modules/ subdirectory, need to go up one level
    const filePath = `code-samples/module-${moduleNum}/lesson-${lessonNum}/${safeFileName}.cfm`;
    // Determine if we're in a module or quiz page to set correct relative path
    const isModulePage = window.location.pathname.includes('/modules/');
    const isQuizPage = window.location.pathname.includes('/quizzes/');
    const runURL = (isModulePage || isQuizPage) ? `../${filePath}` : filePath;
    
    if (hasBothSyntaxes) {
        // Render with tabs for tag/script switching
        return `
            <div class="code-sample mb-4" data-code-id="${codeId}" data-file-path="${filePath}">
                <div class="code-header d-flex justify-content-between align-items-center">
                    <div>
                        <span class="text-white small">${title}</span>
                        ${versionBadge}
                    </div>
                    <div class="btn-group btn-group-sm" role="group">
                        <button type="button" class="btn btn-outline-secondary active" onclick="switchCodeSyntax(this, 'tag')">
                            Tag Syntax
                        </button>
                        <button type="button" class="btn btn-outline-secondary" onclick="switchCodeSyntax(this, 'script')">
                            Script Syntax
                        </button>
                        <a href="${runURL}" target="_blank" class="btn btn-outline-secondary" title="Run in browser">
                            <i class="ti ti-player-play"></i> Run
                        </a>
                        <button class="btn btn-outline-secondary" onclick="copyCode(this)" title="Copy to clipboard">
                            <i class="ti ti-copy"></i> Copy
                        </button>
                        <button class="btn btn-outline-secondary" onclick="copyFilePath(this)" title="Copy file path for IDE">
                            <i class="ti ti-file-code"></i> Path
                        </button>
                    </div>
                    <div class="file-path-display mt-2 small text-muted" style="display: none;">
                        <code>${filePath}</code>
                    </div>
                </div>
                <div class="code-content">
                    <pre class="syntax-tag"><code class="language-coldfusion">${escapeHtml(tagCode)}</code></pre>
                    <pre class="syntax-script" style="display: none;"><code class="language-coldfusion">${escapeHtml(scriptCode)}</code></pre>
                </div>
            </div>
        `;
    } else {
        // Single code block
        return `
            <div class="code-sample mb-4" data-code-id="${codeId}" data-file-path="${filePath}">
                <div class="code-header d-flex justify-content-between align-items-center">
                    <div>
                        <span class="text-white small">${title}</span>
                        ${versionBadge}
                    </div>
                    <div class="btn-group btn-group-sm" role="group">
                        <a href="${runURL}" target="_blank" class="btn btn-outline-secondary" title="Run in browser">
                            <i class="ti ti-player-play"></i> Run
                        </a>
                        <button class="btn btn-outline-secondary" onclick="copyCode(this)" title="Copy to clipboard">
                            <i class="ti ti-copy"></i> Copy
                        </button>
                        <button class="btn btn-outline-secondary" onclick="copyFilePath(this)" title="Copy file path for IDE">
                            <i class="ti ti-file-code"></i> Path
                        </button>
                    </div>
                    <div class="file-path-display mt-2 small text-muted" style="display: none;">
                        <code>${filePath}</code>
                    </div>
                </div>
                <pre><code class="language-coldfusion">${escapeHtml(tagCode)}</code></pre>
            </div>
        `;
    }
}

/**
 * Switch between tag and script syntax
 */
const switchCodeSyntax = (button, syntax) => {
    const codeSample = button.closest('.code-sample');
    const buttons = codeSample.querySelectorAll('.btn-group button');
    const tagPre = codeSample.querySelector('.syntax-tag');
    const scriptPre = codeSample.querySelector('.syntax-script');
    
    // Update button states
    buttons.forEach(btn => {
        if (btn.textContent.includes('Tag') || btn.textContent.includes('Script')) {
            btn.classList.remove('active');
        }
    });
    button.classList.add('active');
    
    // Show/hide code blocks
    if (syntax === 'tag') {
        if (tagPre) tagPre.style.display = 'block';
        if (scriptPre) scriptPre.style.display = 'none';
    } else {
        if (tagPre) tagPre.style.display = 'none';
        if (scriptPre) scriptPre.style.display = 'block';
    }
    
    // Re-highlight syntax when switching between tag/script
    setTimeout(() => {
        if (window.Prism) {
            // Find all code blocks and highlight them (including the newly visible one)
            const codeSample = button.closest('.code-sample');
            if (codeSample) {
                const visibleCode = codeSample.querySelector('pre[style*="block"] code.language-coldfusion');
                if (visibleCode) {
                    Prism.highlightElement(visibleCode);
                }
                // Also highlight hidden blocks to ensure they're ready when shown
                const allBlocks = codeSample.querySelectorAll('code.language-coldfusion');
                allBlocks.forEach(block => {
                    Prism.highlightElement(block);
                });
            }
            // Fallback: highlight all blocks
            document.querySelectorAll('code.language-coldfusion').forEach(block => {
                Prism.highlightElement(block);
            });
            Prism.highlightAll();
        }
    }, 100);
}

/**
 * Escape HTML
 */
const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};

/**
 * Toggle lesson navigation expansion
 */
const toggleLessonNav = (index) => {
    const subSections = document.getElementById(`subSections${index}`);
    if (subSections) {
        const isExpanded = subSections.classList.contains('show');
        const chevron = document.querySelector(`[data-lesson="${index}"] .ti-chevron-right, [data-lesson="${index}"] .ti-chevron-down`);
        
        if (isExpanded) {
            subSections.classList.remove('show');
            if (chevron) chevron.classList.replace('ti-chevron-down', 'ti-chevron-right');
        } else {
            // Collapse all other expanded sections
            document.querySelectorAll('.sub-sections.show').forEach(el => {
                el.classList.remove('show');
            });
            document.querySelectorAll('.ti-chevron-down').forEach(icon => {
                icon.classList.replace('ti-chevron-down', 'ti-chevron-right');
            });
            
            subSections.classList.add('show');
            if (chevron) chevron.classList.replace('ti-chevron-right', 'ti-chevron-down');
        }
    }
}

/**
 * Show specific lesson
 */
const showLesson = (index) => {
    if (index < 0 || index >= lessons.length) return;
    
    currentLessonIndex = index;
    isManualNavigation = true; // Prevent scroll spy during manual navigation
    
    // Hide all lessons
    document.querySelectorAll('.lesson-content').forEach(lesson => {
        lesson.classList.remove('active');
        lesson.style.display = 'none';
    });
    
    // Show selected lesson
    const lessonEl = document.getElementById(`lesson${index + 1}`);
    if (lessonEl) {
        lessonEl.style.display = 'block';
        lessonEl.classList.add('active');
        
        // Scroll to lesson
        setTimeout(() => {
            lessonEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Re-enable scroll spy after navigation completes
            setTimeout(() => {
                isManualNavigation = false;
            }, 1500);
        }, 100);
    }
    
    // Update navigation - expand the selected lesson
    document.querySelectorAll('#lessonNav .list-group-item').forEach((item, i) => {
        if (i === index && !item.classList.contains('sub-section')) {
            item.classList.add('active');
            currentActiveNavItem = item; // Update global reference
            // Auto-expand if it has sub-sections
            const subSections = document.getElementById(`subSections${index}`);
            if (subSections && !subSections.classList.contains('show')) {
                toggleLessonNav(index);
            }
        } else if (!item.classList.contains('sub-section')) {
            item.classList.remove('active');
        }
    });
    
    // Clear active state from all sub-sections when main lesson is clicked
    document.querySelectorAll('#lessonNav .sub-section').forEach(item => {
        item.classList.remove('active');
    });
    
    // Update navigation buttons
    updateNavButtons();
    
    // Update progress
    updateModuleProgress();
    
    // Show summary button on last lesson
    const showSummaryBtn = document.getElementById('showSummary');
    if (showSummaryBtn && currentLessonIndex === lessons.length - 1) {
        showSummaryBtn.style.display = 'inline-block';
    } else if (showSummaryBtn) {
        showSummaryBtn.style.display = 'none';
    }
}

/**
 * Show specific lesson section (scroll to section within lesson)
 */
const showLessonSection = (lessonIndex, sectionNumber) => {
    isManualNavigation = true; // Prevent scroll spy during manual navigation
    
    // First show the lesson
    showLesson(lessonIndex);
    
    // Remove active class from main lesson nav item when sub-section is clicked
    setTimeout(() => {
        const mainLessonNav = document.querySelector(`#lessonNav [data-lesson="${lessonIndex}"].list-group-item:not(.sub-section)`);
        if (mainLessonNav) {
            mainLessonNav.classList.remove('active');
        }
    }, 50);
    
    // Then scroll to the specific section with offset for fixed header
    setTimeout(() => {
        const sectionPath = `${lessonIndex}-${sectionNumber.replace(/\./g, '-')}`;
        const sectionEl = document.getElementById(`lesson${lessonIndex + 1}-section-${sectionPath}`);
        if (sectionEl) {
            // Calculate offset for fixed header - detect header height dynamically
            const header = document.querySelector('header, .navbar, .page-header');
            const headerHeight = header ? header.offsetHeight : 80; // Default to 80px if no header found
            const additionalOffset = 20; // Extra spacing for readability
            const totalOffset = headerHeight + additionalOffset;
            
            const elementPosition = sectionEl.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - totalOffset;
            
            window.scrollTo({
                top: Math.max(0, offsetPosition),
                behavior: 'smooth'
            });
            
            // Highlight the section briefly
            sectionEl.style.transition = 'background-color 0.3s';
            sectionEl.style.backgroundColor = 'rgba(13, 110, 253, 0.1)';
            setTimeout(() => {
                sectionEl.style.backgroundColor = '';
            }, 2000);
        }
        
        // Update sub-section navigation - remove active from all, then add to selected
        document.querySelectorAll('#lessonNav .list-group-item').forEach(item => {
            item.classList.remove('active');
        });
        const subSectionNav = document.querySelector(`[data-lesson="${lessonIndex}"][data-section-number="${sectionNumber}"]`);
        if (subSectionNav) {
            subSectionNav.classList.add('active');
            currentActiveNavItem = subSectionNav; // Update global reference
        }
        
        // Re-enable scroll spy after navigation completes
        setTimeout(() => {
            isManualNavigation = false;
        }, 1500);
    }, 200);
}

/**
 * Toggle module summary
 */
const toggleSummary = () => {
    const summaryCard = document.getElementById('moduleSummary');
    const summaryContent = document.getElementById('summaryContent');
    
    if (summaryCard.style.display === 'none') {
        // Generate summary
        const moduleData = getModuleData(AppState.currentModule);
        if (moduleData && moduleData.lessons) {
            let summaryHtml = '<h6 class="mb-3">Key Concepts Covered:</h6><ul class="mb-3">';
            moduleData.lessons.forEach((lesson, index) => {
                summaryHtml += `<li><strong>Lesson ${index + 1}:</strong> ${lesson.title}</li>`;
            });
            summaryHtml += '</ul>';
            
            if (moduleData.versions) {
                summaryHtml += `<p class="mb-2"><strong>Versions:</strong> `;
                summaryHtml += moduleData.versions.map(v => `<span class="badge bg-primary me-1">CF ${v}</span>`).join('');
                summaryHtml += `</p>`;
            }
            
            summaryContent.innerHTML = summaryHtml;
        }
        summaryCard.style.display = 'block';
        summaryCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        summaryCard.style.display = 'none';
    }
}

/**
 * Navigate to next/previous lesson
 */
const navigateLesson = (direction) => {
    const newIndex = currentLessonIndex + direction;
    if (newIndex >= 0 && newIndex < lessons.length) {
        showLesson(newIndex);
    }
}

/**
 * Update navigation buttons
 */
const updateNavButtons = () => {
    const prevBtn = document.getElementById('prevLesson');
    const nextBtn = document.getElementById('nextLesson');
    
    if (prevBtn) {
        prevBtn.disabled = currentLessonIndex === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentLessonIndex === lessons.length - 1;
        if (currentLessonIndex === lessons.length - 1) {
            nextBtn.innerHTML = 'Take Quiz <i class="ti ti-arrow-right ms-1"></i>';
            nextBtn.onclick = () => {
                window.location.href = `../quizzes/quiz-${AppState.currentModule}.cfm`;
            };
        } else {
            nextBtn.innerHTML = 'Next <i class="ti ti-arrow-right ms-1"></i>';
            nextBtn.onclick = () => navigateLesson(1);
        }
    }
}

/**
 * Update module progress (tracking only, no percentage display)
 */
const updateModuleProgress = () => {
    // Calculate progress for tracking purposes only
    const progress = Math.round(((currentLessonIndex + 1) / lessons.length) * 100);
    
    // Save to state (for completion tracking, not percentage display)
    if (AppState.currentModule !== null) {
        AppState.progress[AppState.currentModule] = progress;
        saveProgress();
    }
};

// getModuleData() is now defined in modules-data.js

/**
 * Download code sample as a file
 */
const downloadCodeSample = (button, filename, syntax) => {
    const codeSample = button.closest('.code-sample');
    let codeToDownload = '';
    
    if (syntax === 'tag') {
        const tagPre = codeSample.querySelector('.syntax-tag');
        if (tagPre) {
            const codeEl = tagPre.querySelector('code');
            codeToDownload = codeEl ? codeEl.textContent : tagPre.textContent;
        }
    } else if (syntax === 'script') {
        const scriptPre = codeSample.querySelector('.syntax-script');
        if (scriptPre) {
            const codeEl = scriptPre.querySelector('code');
            codeToDownload = codeEl ? codeEl.textContent : scriptPre.textContent;
        }
    } else {
        // Single syntax
        const pre = codeSample.querySelector('pre:not(.syntax-tag):not(.syntax-script)');
        if (pre) {
            const codeEl = pre.querySelector('code');
            codeToDownload = codeEl ? codeEl.textContent : pre.textContent;
        }
    }
    
    if (!codeToDownload) {
        alert('Unable to extract code. Please use Copy instead.');
        return;
    }
    
    // Create blob and download
    const blob = new Blob([codeToDownload], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Show feedback
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="ti ti-check"></i> Downloaded!';
    button.classList.add('btn-success');
    button.classList.remove('btn-outline-secondary');
    
    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove('btn-success');
        button.classList.add('btn-outline-secondary');
    }, 2000);
}

// Removed saveCodeToProject and runCodeSample - using direct file links instead

/**
 * Initialize scroll spy to highlight active section in navigation
 * Uses Intersection Observer for better performance
 */
const initScrollSpy = () => {
    // Wait for content to be rendered using requestAnimationFrame for better performance
    requestAnimationFrame(() => {
        const sections = document.querySelectorAll('[id^="lesson"][id*="-section-"]');
        const lessonCards = document.querySelectorAll('.lesson-content[id^="lesson"]');
        
        if (sections.length === 0 && lessonCards.length === 0) return;
        
        // Use IntersectionObserver for better scroll performance
        
        // Create IntersectionObserver for sections
        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -50% 0px', // Trigger when section is in upper portion of viewport
            threshold: 0
        };
        
        let currentActiveSection = null;
        let isScrolling = false;
        
        // Use IntersectionObserver as a secondary method (less aggressive)
        const observer = new IntersectionObserver((entries) => {
            // Don't update during programmatic scrolling or manual navigation
            if (isScrolling || isManualNavigation) return;
            
            // Find the section that's most visible in the viewport
            // Prioritize subsections over main lesson cards
            let mostVisibleSubsection = null;
            let mostVisibleLesson = null;
            let maxSubsectionVisibility = 0;
            let maxLessonVisibility = 0;
            const headerOffset = 120;
            const isCurrentlyOnSubsection = currentActiveNavItem && currentActiveNavItem.classList.contains('sub-section');
            
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const rect = entry.boundingClientRect;
                    // Only consider sections that are near the top of the viewport
                    if (rect.top <= headerOffset + 300 && rect.top >= headerOffset - 100) {
                        // Calculate visibility based on how close to the header offset
                        const distanceFromHeader = Math.abs(rect.top - headerOffset);
                        const visibility = 1 / (1 + distanceFromHeader / 100); // Inverse distance
                        
                        // Check if this is a subsection or main lesson
                        const isSubsection = entry.target.id.includes('-section-');
                        
                        if (isSubsection) {
                            if (visibility > maxSubsectionVisibility) {
                                maxSubsectionVisibility = visibility;
                                mostVisibleSubsection = entry.target;
                            }
                        } else {
                            // Only consider main lesson if we're not currently on a subsection
                            if (!isCurrentlyOnSubsection && visibility > maxLessonVisibility) {
                                maxLessonVisibility = visibility;
                                mostVisibleLesson = entry.target;
                            }
                        }
                    }
                }
            });
            
            // Prioritize subsections - only use main lesson if no subsection found
            const mostVisible = mostVisibleSubsection || (isCurrentlyOnSubsection ? null : mostVisibleLesson);
            
            // Only update if we found a visible section AND it's different from current
            // This ensures we don't remove active state unnecessarily
            if (mostVisible && mostVisible !== currentActiveSection) {
                currentActiveSection = mostVisible;
                updateActiveNavFromSection(mostVisible);
            }
        }, observerOptions);
        
        // Observe all sections
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Also observe lesson cards for main lesson highlighting
        lessonCards.forEach(lessonCard => {
            observer.observe(lessonCard);
        });
        
        // Track programmatic scrolling
        let scrollTimeout;
        const originalScrollTo = window.scrollTo;
        window.scrollTo = function(...args) {
            isScrolling = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 1000);
            return originalScrollTo.apply(this, args);
        };
        
        // Also check on manual scroll - this is the primary method
        let scrollCheckTimeout;
        window.addEventListener('scroll', () => {
            if (isScrolling || isManualNavigation) return;
            
            clearTimeout(scrollCheckTimeout);
            scrollCheckTimeout = setTimeout(() => {
                // Find the section closest to the top of the viewport
                let closestSection = null;
                let closestDistance = Infinity;
                const headerOffset = 120; // Account for fixed header
                
                // First, prioritize subsections - check all sections
                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    // Section is in view if it's above the middle of the viewport or just below the header
                    if (rect.top <= headerOffset + 200 && rect.bottom >= headerOffset) {
                        // Prefer sections that are closer to the header offset
                        const distance = Math.abs(rect.top - headerOffset);
                        if (distance < closestDistance) {
                            closestDistance = distance;
                            closestSection = section;
                        }
                    }
                });
                
                // Only check lesson cards if:
                // 1. No subsection was found AND
                // 2. We're not currently on a subsection (to avoid jumping to main lesson between subsections)
                const isCurrentlyOnSubsection = currentActiveNavItem && currentActiveNavItem.classList.contains('sub-section');
                
                if (!closestSection && !isCurrentlyOnSubsection) {
                    // Only then check lesson cards for main lesson highlighting
                    lessonCards.forEach(lessonCard => {
                        const rect = lessonCard.getBoundingClientRect();
                        if (rect.top <= headerOffset + 200 && rect.bottom >= headerOffset) {
                            const distance = Math.abs(rect.top - headerOffset);
                            if (distance < closestDistance) {
                                closestDistance = distance;
                                closestSection = lessonCard;
                            }
                        }
                    });
                }
                
                // Only update if we found a different section
                // If we're on a subsection and no new section found, keep the current one active
                if (closestSection && closestSection !== currentActiveSection) {
                    currentActiveSection = closestSection;
                    updateActiveNavFromSection(closestSection);
                } else if (!closestSection && currentActiveSection && isCurrentlyOnSubsection) {
                    // If we're on a subsection and it's not in view but no new section found,
                    // check if we should keep it active or if we've scrolled past it
                    const rect = currentActiveSection.getBoundingClientRect();
                    // Only remove active if we've scrolled well past it (more than 300px)
                    if (rect.bottom < -300) {
                        // We've scrolled past, but don't switch to main lesson yet
                        // Wait for next subsection to come into view
                    }
                }
            }, 150);
        }, { passive: true });
    }, 500);
}

/**
 * Update active navigation item based on visible section
 */
const updateActiveNavFromSection = (sectionElement) => {
    const sectionId = sectionElement.id;
    
    // Extract lesson index and section number from ID
    // Format: lesson{lessonIndex+1}-section-{lessonIndex}-{sectionNumberWithDashes}
    // Example: lesson1-section-0-1-1 (for section 1.1 in lesson 0)
    const match = sectionId.match(/lesson(\d+)-section-(\d+)-(.+)/);
    
    if (match) {
        const lessonIndex = parseInt(match[2]); // Already 0-based from the ID
        const sectionNumber = match[3].replace(/-/g, '.'); // Convert dashes back to dots
        
        // Find the corresponding nav item
        const navItem = document.querySelector(
            `#lessonNav [data-lesson="${lessonIndex}"][data-section-number="${sectionNumber}"]`
        );
        
        // Only update if this is a different nav item
        if (navItem && navItem !== currentActiveNavItem) {
            // Remove active from all nav items first
            document.querySelectorAll('#lessonNav .list-group-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Set new active item
            navItem.classList.add('active');
            currentActiveNavItem = navItem;
            
            // Ensure parent lesson is expanded
            const parentLesson = document.querySelector(`#lessonNav [data-lesson="${lessonIndex}"]:not(.sub-section)`);
            if (parentLesson) {
                const subSections = document.getElementById(`subSections${lessonIndex}`);
                if (subSections && !subSections.classList.contains('show')) {
                    subSections.classList.add('show');
                    const chevron = parentLesson.querySelector('.ti-chevron-right, .ti-chevron-down');
                    if (chevron) {
                        chevron.classList.remove('ti-chevron-right');
                        chevron.classList.add('ti-chevron-down');
                    }
                }
            }
            
            // Scroll nav item into view if needed
            const navContainer = document.getElementById('lessonNav');
            if (navContainer) {
                const navRect = navContainer.getBoundingClientRect();
                const itemRect = navItem.getBoundingClientRect();
                
                if (itemRect.top < navRect.top || itemRect.bottom > navRect.bottom) {
                    navItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        }
    } else {
        // Check if it's a main lesson card (format: lesson{lessonIndex})
        const lessonMatch = sectionId.match(/^lesson(\d+)$/);
        if (lessonMatch) {
            const lessonIndex = parseInt(lessonMatch[1]) - 1;
            
            // Only activate main lesson if we're not currently on a subsection
            // This prevents jumping to main lesson when scrolling between subsections
            const isCurrentlyOnSubsection = currentActiveNavItem && currentActiveNavItem.classList.contains('sub-section');
            
            if (!isCurrentlyOnSubsection) {
                // Activate main lesson nav item
                const mainNavItem = document.querySelector(
                    `#lessonNav [data-lesson="${lessonIndex}"]:not(.sub-section)`
                );
                if (mainNavItem && mainNavItem !== currentActiveNavItem) {
                    // Remove active from all nav items first
                    document.querySelectorAll('#lessonNav .list-group-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    mainNavItem.classList.add('active');
                    currentActiveNavItem = mainNavItem;
                }
            }
        }
    }
};

/**
 * Copy file path to clipboard for IDE usage
 */
const copyFilePath = (button) => {
    const codeSample = button.closest('.code-sample');
    const filePath = codeSample?.dataset?.filePath;
    if (!filePath) return;
    
    navigator.clipboard.writeText(filePath).then(() => {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="ti ti-check"></i> Copied!';
        button.classList.add('btn-success');
        button.classList.remove('btn-outline-secondary');
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove('btn-success');
            button.classList.add('btn-outline-secondary');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy file path:', err);
        alert(`File path: ${filePath}\n\nPlease copy manually.`);
    });
};

// Make functions available globally
window.navigateLesson = navigateLesson;
window.toggleSummary = toggleSummary;
window.switchCodeSyntax = switchCodeSyntax;
window.downloadCodeSample = downloadCodeSample;
window.toggleLessonNav = toggleLessonNav;
window.showLessonSection = showLessonSection;
window.copyFilePath = copyFilePath;

