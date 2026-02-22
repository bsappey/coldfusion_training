/**
 * ColdFusion Training - Main Application JavaScript
 * Modernized to ES6+ standards
 */

// Application State
const AppState = {
    currentModule: null,
    currentLesson: 1,
    progress: JSON.parse(localStorage.getItem('trainingProgress')) || {},
    quizResults: JSON.parse(localStorage.getItem('quizResults')) || {},
    experienceLevel: localStorage.getItem('experienceLevel') || 'mid' // junior, mid, senior
};

/**
 * Initialize the application
 */
const initializeApp = () => {
    const modulesContainer = document.getElementById('modulesContainer');
    if (modulesContainer) {
        loadModules();
        updateProgress();
    }
    
    // Smooth scroll for anchor links with event delegation for performance
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (anchor) {
            const href = anchor.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        }
    }, { passive: false });
};

/**
 * Load and display training modules
 */
const loadModules = () => {
    const container = document.getElementById('modulesContainer');
    if (!container) {
        console.warn('modulesContainer not found');
        return;
    }

    // Ensure getModulesData is available
    if (typeof getModulesData !== 'function') {
        console.error('getModulesData function not found. Make sure modules-data.js is loaded.');
        container.innerHTML = '<div class="col-12"><div class="alert alert-danger">Error loading modules. Please refresh the page.</div></div>';
        return;
    }

    const modules = getModulesData();
    if (!modules || modules.length === 0) {
        console.error('No modules data found');
        container.innerHTML = '<div class="col-12"><div class="alert alert-warning">No training modules available.</div></div>';
        return;
    }

    const experienceLevel = AppState.experienceLevel;
    
    container.innerHTML = modules.map((module, index) => {
        const progress = AppState.progress[module.id] || 0;
        const isCompleted = progress >= 100;
        const badgeClass = getModuleBadgeClass(index);
        
        // Handle time estimates - support both old string format and new object format
        let timeEstimate = '';
        if (module.estimatedTime) {
            if (typeof module.estimatedTime === 'object') {
                timeEstimate = module.estimatedTime[experienceLevel] || module.estimatedTime.mid || '';
            } else {
                timeEstimate = module.estimatedTime;
            }
        }
        
        const timeDisplay = timeEstimate 
            ? `<p class="text-muted small mb-2"><i class="ti ti-clock me-1"></i>Est. ${timeEstimate} (${experienceLevel} level)</p>` 
            : '';
        
        return `
            <div class="col-md-6 col-lg-4">
                <div class="card training-module-card h-100">
                    <div class="card-body">
                        <div class="d-flex align-items-start mb-3">
                            <span class="avatar avatar-md ${badgeClass} rounded me-3">
                                <i class="ti ti-${module.icon || (index + 1)} ti-24px"></i>
                            </span>
                            <div class="flex-grow-1">
                                <span class="badge bg-secondary mb-1" style="font-size: 0.65rem;">Module ${module.id}</span>
                                <h5 class="card-title mb-1">${module.title}</h5>
                                <p class="text-muted small mb-0">${module.subtitle}</p>
                            </div>
                            ${isCompleted ? '<span class="badge bg-success"><i class="ti ti-check"></i></span>' : ''}
                        </div>
                        <p class="card-text text-muted small">${module.description}</p>
                        ${timeDisplay}
                        <div class="mt-3">
                            <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                <div class="d-flex gap-2 align-items-center flex-wrap">
                                    ${module.versions ? module.versions.map(v => `<span class="badge bg-light text-dark" style="font-size: 0.65rem; padding: 0.15rem 0.4rem;">CF ${v}</span>`).join('') : ''}
                                </div>
                                <a href="modules/module-${module.id}.cfm" class="btn btn-sm btn-primary">
                                    ${progress > 0 ? 'Continue' : 'Start'} <i class="ti ti-arrow-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
};

/**
 * Get module badge class based on index
 */
const getModuleBadgeClass = (index) => {
    const classes = [
        'bg-label-primary',
        'bg-label-info',
        'bg-label-success',
        'bg-label-warning',
        'bg-label-danger',
        'bg-label-secondary'
    ];
    return classes[index % classes.length];
};

/**
 * Update progress display (without percentage grids)
 */
const updateProgress = () => {
    const modules = getModulesData();
    const totalModules = modules.length;
    let completedModules = 0;
    let completedQuizzes = 0;
    let totalScore = 0;
    let quizCount = 0;

    modules.forEach(module => {
        const progress = AppState.progress[module.id] || 0;
        if (progress >= 100) completedModules++;
        
        const quizResult = AppState.quizResults[module.id];
        if (quizResult) {
            completedQuizzes++;
            totalScore += quizResult.score;
            quizCount++;
        }
    });

    const averageScore = quizCount > 0 ? Math.round(totalScore / quizCount) : 0;

    // Update stats (removed percentage-based progress bar)
    const completedModulesEl = document.getElementById('completedModules');
    if (completedModulesEl) completedModulesEl.textContent = completedModules;

    const completedQuizzesEl = document.getElementById('completedQuizzes');
    if (completedQuizzesEl) completedQuizzesEl.textContent = completedQuizzes;

    const averageScoreEl = document.getElementById('averageScore');
    if (averageScoreEl) averageScoreEl.textContent = averageScore + '%';
    
    // Update overall progress badge (if exists) but not as percentage grid
    const overallProgressEl = document.getElementById('overallProgress');
    if (overallProgressEl) {
        const overallProgress = Math.round((completedModules / totalModules) * 100);
        overallProgressEl.textContent = `${completedModules}/${totalModules}`;
    }
    
    // Update SCORM progress if SCORM is initialized
    if (typeof updateSCORMProgress === 'function') {
        updateSCORMProgress();
    }
};

// getModulesData() is now defined in modules-data.js

/**
 * Save progress to localStorage
 */
const saveProgress = () => {
    localStorage.setItem('trainingProgress', JSON.stringify(AppState.progress));
    localStorage.setItem('quizResults', JSON.stringify(AppState.quizResults));
    localStorage.setItem('experienceLevel', AppState.experienceLevel);
};

/**
 * Set experience level and reload modules
 */
const setExperienceLevel = (level) => {
    AppState.experienceLevel = level;
    localStorage.setItem('experienceLevel', level);
    loadModules();
};

/**
 * Copy code to clipboard with debouncing
 */
let copyTimeout = null;
const copyCode = (button) => {
    // Debounce rapid clicks
    if (copyTimeout) return;
    
    const codeSample = button.closest('.code-sample');
    const codeBlock = codeSample?.querySelector('code');
    if (!codeBlock) return;
    
    const text = codeBlock.textContent;
    
    // Use modern clipboard API with fallback
    if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            const originalHTML = button.innerHTML;
            button.innerHTML = '<i class="ti ti-check"></i> Copied!';
            button.classList.add('btn-success');
            button.classList.remove('btn-outline-secondary');
            
            copyTimeout = setTimeout(() => {
                button.innerHTML = originalHTML;
                button.classList.remove('btn-success');
                button.classList.add('btn-outline-secondary');
                copyTimeout = null;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            // Fallback to manual selection
            selectTextForCopy(codeBlock);
        });
    } else {
        // Fallback for older browsers
        selectTextForCopy(codeBlock);
    }
};

/**
 * Fallback text selection for copying
 */
const selectTextForCopy = (element) => {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    try {
        document.execCommand('copy');
        selection.removeAllRanges();
        alert('Code selected. Press Ctrl+C to copy.');
    } catch (err) {
        console.error('Copy command failed:', err);
    }
};

// Make functions available globally
window.copyCode = copyCode;
window.setExperienceLevel = setExperienceLevel;

// Initialize app when DOM is ready
// Use modern event listener with passive option for better performance
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp, { passive: true });
} else {
    // DOM already loaded
    initializeApp();
}

