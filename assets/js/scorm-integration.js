/**
 * SCORM Integration for LMS Compatibility
 * Supports SCORM 1.2 and SCORM 2004
 * 
 * This module provides SCORM API integration for Adobe Learning Manager
 * and other SCORM-compliant Learning Management Systems.
 */

/**
 * SCORM API Wrapper
 */
class SCORMAPI {
    constructor() {
        this.API = null;
        this.APIHandle = null;
        this.isInitialized = false;
        this.version = '1.2'; // Default to SCORM 1.2
    }

    /**
     * Find and initialize SCORM API
     */
    findAPI(win) {
        let findAttempts = 0;
        const maxAttempts = 7;
        
        while ((win.API == null || win.API_1484_11 == null) && 
               (win.parent != null) && 
               (win.parent != win) && 
               (findAttempts < maxAttempts)) {
            findAttempts++;
            win = win.parent;
        }
        
        if (win.API != null) {
            this.API = win.API;
            this.version = '1.2';
            return true;
        } else if (win.API_1484_11 != null) {
            this.API = win.API_1484_11;
            this.version = '2004';
            return true;
        }
        
        return false;
    }

    /**
     * Initialize SCORM connection
     */
    initialize() {
        if (this.findAPI(window)) {
            const result = this.version === '2004' 
                ? this.API.Initialize('')
                : this.API.LMSInitialize('');
            
            if (result === 'true' || result === true) {
                this.isInitialized = true;
                
                // Load saved progress
                this.loadProgress();
                
                return true;
            }
        }
        
        console.warn('SCORM API not found. Running in standalone mode.');
        return false;
    }

    /**
     * Get SCORM value
     */
    getValue(element) {
        if (!this.isInitialized || !this.API) return null;
        
        try {
            if (this.version === '2004') {
                return this.API.GetValue(element);
            } else {
                return this.API.LMSGetValue(element);
            }
        } catch (e) {
            console.error('SCORM GetValue error:', e);
            return null;
        }
    }

    /**
     * Set SCORM value
     */
    setValue(element, value) {
        if (!this.isInitialized || !this.API) return false;
        
        try {
            let result;
            if (this.version === '2004') {
                result = this.API.SetValue(element, value);
            } else {
                result = this.API.LMSSetValue(element, value);
            }
            
            return result === 'true' || result === true;
        } catch (e) {
            console.error('SCORM SetValue error:', e);
            return false;
        }
    }

    /**
     * Commit changes to LMS
     */
    commit() {
        if (!this.isInitialized || !this.API) return false;
        
        try {
            const result = this.version === '2004'
                ? this.API.Commit('')
                : this.API.LMSCommit('');
            
            return result === 'true' || result === true;
        } catch (e) {
            console.error('SCORM Commit error:', e);
            return false;
        }
    }

    /**
     * Terminate SCORM session
     */
    terminate() {
        if (!this.isInitialized || !this.API) return false;
        
        try {
            const result = this.version === '2004'
                ? this.API.Terminate('')
                : this.API.LMSFinish('');
            
            if (result === 'true' || result === true) {
                this.isInitialized = false;
                return true;
            }
            return false;
        } catch (e) {
            console.error('SCORM Terminate error:', e);
            return false;
        }
    }

    /**
     * Load progress from SCORM suspend_data
     */
    loadProgress() {
        const suspendData = this.getValue('cmi.suspend_data');
        if (suspendData && suspendData !== '') {
            try {
                const progress = JSON.parse(suspendData);
                if (typeof AppState !== 'undefined') {
                    AppState.progress = progress.progress || AppState.progress;
                    AppState.quizResults = progress.quizResults || AppState.quizResults;
                }
            } catch (e) {
                console.error('Error parsing SCORM suspend_data:', e);
            }
        }
    }

    /**
     * Save progress to SCORM suspend_data
     */
    saveProgress() {
        if (!this.isInitialized) return false;
        
        const progressData = {
            progress: AppState?.progress || {},
            quizResults: AppState?.quizResults || {},
            timestamp: new Date().toISOString()
        };
        
        const saved = this.setValue('cmi.suspend_data', JSON.stringify(progressData));
        if (saved) {
            this.commit();
        }
        return saved;
    }

    /**
     * Update lesson status
     */
    setLessonStatus(status) {
        // Valid statuses: 'passed', 'completed', 'incomplete', 'browsed', 'failed', 'not attempted'
        return this.setValue('cmi.core.lesson_status', status);
    }

    /**
     * Set score
     */
    setScore(raw, max = 100, min = 0) {
        if (this.version === '2004') {
            this.setValue('cmi.score.scaled', raw / max);
            this.setValue('cmi.score.raw', raw);
            this.setValue('cmi.score.max', max);
            this.setValue('cmi.score.min', min);
        } else {
            this.setValue('cmi.core.score.raw', raw);
            this.setValue('cmi.core.score.max', max);
            this.setValue('cmi.core.score.min', min);
        }
        return this.commit();
    }

    /**
     * Set total time
     */
    setTotalTime(timeString) {
        // Time format: PT1H30M15S (ISO 8601 duration)
        if (this.version === '2004') {
            return this.setValue('cmi.total_time', timeString);
        } else {
            return this.setValue('cmi.core.total_time', timeString);
        }
    }
}

// Global SCORM API instance
const scormAPI = new SCORMAPI();

/**
 * Initialize SCORM on page load
 */
const initSCORM = () => {
    if (scormAPI.initialize()) {
        console.log('SCORM initialized successfully');
        
        // Set initial status
        scormAPI.setLessonStatus('incomplete');
        scormAPI.commit();
        
        // Auto-save progress periodically
        setInterval(() => {
            if (scormAPI.isInitialized) {
                scormAPI.saveProgress();
            }
        }, 30000); // Every 30 seconds
        
        // Save on page unload
        window.addEventListener('beforeunload', () => {
            if (scormAPI.isInitialized) {
                scormAPI.saveProgress();
                scormAPI.terminate();
            }
        });
    }
};

/**
 * Update SCORM progress when training progress changes
 */
const updateSCORMProgress = () => {
    if (!scormAPI.isInitialized) return;
    
    const modules = getModulesData();
    const totalModules = modules.length;
    let completedModules = 0;
    let totalScore = 0;
    let quizCount = 0;
    
    modules.forEach(module => {
        const progress = AppState.progress[module.id] || 0;
        if (progress >= 100) completedModules++;
        
        const quizResult = AppState.quizResults[module.id];
        if (quizResult) {
            totalScore += quizResult.score;
            quizCount++;
        }
    });
    
    const completionPercent = (completedModules / totalModules) * 100;
    const averageScore = quizCount > 0 ? Math.round(totalScore / quizCount) : 0;
    
    // Update lesson status
    if (completionPercent === 100) {
        scormAPI.setLessonStatus('completed');
    } else if (completionPercent > 0) {
        scormAPI.setLessonStatus('incomplete');
    }
    
    // Update score if quizzes completed
    if (quizCount > 0) {
        scormAPI.setScore(averageScore);
    }
    
    // Save progress
    scormAPI.saveProgress();
};

/**
 * Report quiz completion to SCORM
 */
const reportQuizToSCORM = (moduleId, score, passed) => {
    if (!scormAPI.isInitialized) return;
    
    scormAPI.setScore(score);
    scormAPI.setLessonStatus(passed ? 'passed' : 'failed');
    scormAPI.saveProgress();
};

// Initialize SCORM when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSCORM);
} else {
    initSCORM();
}

// Make functions available globally
if (typeof window !== 'undefined') {
    window.scormAPI = scormAPI;
    window.updateSCORMProgress = updateSCORMProgress;
    window.reportQuizToSCORM = reportQuizToSCORM;
}
