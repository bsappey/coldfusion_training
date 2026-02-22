<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adobe ColdFusion Training - Interactive Learning Platform</title>
    <meta name="description" content="Master ColdFusion development with interactive lessons, code samples, and quizzes covering CF 2021, 2023, and 2025">
    <meta name="keywords" content="ColdFusion, CFML, CF 2021, CF 2023, CF 2025, training, tutorial, learning, SCORM, LMS">
    <meta name="author" content="Adobe ColdFusion Training">
    <meta name="theme-color" content="#1473E6">
    
    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="Adobe ColdFusion Training Platform">
    <meta property="og:description" content="Comprehensive ColdFusion training covering versions 2021, 2023, and 2025 with SCORM/LMS integration">
    <meta property="og:type" content="website">
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Tabler Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
    <!-- Prism.js for syntax highlighting - Using dark theme -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-dark.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" style="background-color: #1473E6 !important;" role="navigation" aria-label="Main navigation">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="index.cfm" aria-label="Adobe ColdFusion Training Home">
                <i class="ti ti-school me-2" aria-hidden="true"></i>
                <span><strong>Adobe</strong> ColdFusion Training</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto" role="menubar">
                    <li class="nav-item" role="none">
                        <a class="nav-link active" href="index.cfm" role="menuitem" aria-current="page">Home</a>
                    </li>
                    <li class="nav-item" role="none">
                        <a class="nav-link" href="#modules" role="menuitem">Modules</a>
                    </li>
                    <li class="nav-item" role="none">
                        <a class="nav-link" href="#progress" role="menuitem">Progress</a>
                    </li>
                    <li class="nav-item" role="none">
                        <a class="nav-link" href="#versions" role="menuitem">Versions</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section" aria-labelledby="hero-title">
        <div class="container">
            <div class="row justify-content-center text-center py-5">
                <div class="col-lg-10">
                    <div class="hero-content">
                        <div class="hero-icon mb-4" aria-hidden="true">
                            <i class="ti ti-school"></i>
                        </div>
                        <h1 id="hero-title" class="display-4 fw-bold mb-3">Adobe ColdFusion Training</h1>
                        <p class="lead mb-4">
                            Master ColdFusion development with comprehensive training covering CF 2021, 2023, and 2025. 
                            Interactive lessons, hands-on code samples, and engaging quizzes for self-paced or instructor-led learning.
                        </p>
                        <div class="d-flex justify-content-center gap-3 flex-wrap mb-4">
                            <span class="badge bg-label-success fs-6 px-3 py-2">
                                <i class="ti ti-check me-1"></i>Interactive Quizzes
                            </span>
                            <span class="badge bg-label-info fs-6 px-3 py-2">
                                <i class="ti ti-code me-1"></i>Code Examples
                            </span>
                            <span class="badge bg-label-warning fs-6 px-3 py-2">
                                <i class="ti ti-chart-line me-1"></i>Progress Tracking
                            </span>
                            <span class="badge bg-label-secondary fs-6 px-3 py-2">
                                <i class="ti ti-users me-1"></i>Instructor-Led Support
                            </span>
                        </div>
                        <div class="d-flex justify-content-center gap-2 flex-wrap mb-5">
                            <span class="badge bg-light text-dark fs-6 px-3 py-2">
                                <i class="ti ti-brand-adobe me-1"></i>CF 2021
                            </span>
                            <span class="badge bg-light text-dark fs-6 px-3 py-2">
                                <i class="ti ti-brand-adobe me-1"></i>CF 2023
                            </span>
                            <span class="badge bg-light text-dark fs-6 px-3 py-2">
                                <i class="ti ti-brand-adobe me-1"></i>CF 2025
                            </span>
                        </div>
                        <a href="#modules" class="btn btn-light btn-lg" style="background-color: #FFFFFF; color: #1473E6; border: none; font-weight: 600;">
                            Get Started <i class="ti ti-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Version Information -->
    <section id="versions" class="py-5 bg-white">
        <div class="container">
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <h2 class="display-6 fw-bold mb-3">Version Coverage</h2>
                    <p class="text-muted">This training covers features across multiple ColdFusion versions</p>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card h-100 border-primary">
                        <div class="card-header bg-primary text-white">
                            <h5 class="mb-0"><i class="ti ti-brand-adobe me-2"></i>ColdFusion 2021</h5>
                        </div>
                        <div class="card-body">
                            <p class="text-muted">Foundation features and core functionality available in CF 2021.</p>
                            <ul class="list-unstyled">
                                <li><i class="ti ti-check text-success me-2"></i>Core Language Features</li>
                                <li><i class="ti ti-check text-success me-2"></i>Database Integration</li>
                                <li><i class="ti ti-check text-success me-2"></i>File Operations</li>
                                <li><i class="ti ti-check text-success me-2"></i>Security Fundamentals</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-info">
                        <div class="card-header bg-info text-white">
                            <h5 class="mb-0"><i class="ti ti-brand-adobe me-2"></i>ColdFusion 2023</h5>
                        </div>
                        <div class="card-body">
                            <p class="text-muted">Enhanced features and improvements introduced in CF 2023.</p>
                            <ul class="list-unstyled">
                                <li><i class="ti ti-check text-info me-2"></i>Property Visibility</li>
                                <li><i class="ti ti-check text-info me-2"></i>Performance Enhancements</li>
                                <li><i class="ti ti-check text-info me-2"></i>Cloud Storage Integration</li>
                                <li><i class="ti ti-check text-info me-2"></i>Modern OOP Features</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-success">
                        <div class="card-header bg-success text-white">
                            <h5 class="mb-0"><i class="ti ti-brand-adobe me-2"></i>ColdFusion 2025</h5>
                        </div>
                        <div class="card-body">
                            <p class="text-muted">Latest features and cutting-edge capabilities in CF 2025.</p>
                            <ul class="list-unstyled">
                                <li><i class="ti ti-check text-success me-2"></i>Interface Support</li>
                                <li><i class="ti ti-check text-success me-2"></i>JIT Compilation</li>
                                <li><i class="ti ti-check text-success me-2"></i>Enhanced Security</li>
                                <li><i class="ti ti-check text-success me-2"></i>Docker Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Progress Overview -->
    <section id="progress" class="py-5 bg-light" aria-labelledby="progress-heading">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card shadow-sm">
                        <div class="card-header bg-white">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h2 id="progress-heading" class="h5 mb-0">
                                    <i class="ti ti-chart-line me-2" style="color: #1473E6;" aria-hidden="true"></i>
                                    Your Progress
                                </h2>
                                <div class="d-flex align-items-center gap-2">
                                    <label for="experienceLevel" class="small text-muted mb-0">Experience Level:</label>
                                    <select id="experienceLevel" class="form-select form-select-sm" style="width: auto;" onchange="setExperienceLevel(this.value)" aria-label="Select experience level for time estimates">
                                        <option value="junior">Junior</option>
                                        <option value="mid" selected>Mid-Level</option>
                                        <option value="senior">Senior</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row text-center">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <div class="stat-card">
                                        <h3 class="mb-1 text-primary" id="completedModules">0</h3>
                                        <small class="text-muted">Modules Completed</small>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <div class="stat-card">
                                        <h3 class="mb-1 text-success" id="completedQuizzes">0</h3>
                                        <small class="text-muted">Quizzes Passed</small>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="stat-card">
                                        <h3 class="mb-1 text-info" id="averageScore">0%</h3>
                                        <small class="text-muted">Average Score</small>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 text-center">
                                <small class="text-muted" id="overallProgress">0/0 modules completed</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Training Modules -->
    <section id="modules" class="py-5" aria-labelledby="modules-heading">
        <div class="container">
            <div class="row mb-5">
                <div class="col-12 text-center">
                    <h2 id="modules-heading" class="display-5 fw-bold mb-3">Training Modules</h2>
                    <p class="text-muted lead">Choose a module to begin your learning journey</p>
                </div>
            </div>

            <div class="row g-4" id="modulesContainer">
                <!-- Module cards will be generated here -->
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-light py-4 mt-5" style="background-color: #2C2C2C !important;">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="mb-0">&copy; <cfoutput>#Year(Now())#</cfoutput> Adobe ColdFusion Training. All rights reserved.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <p class="mb-0">Built with <i class="ti ti-heart text-danger"></i> for learning</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Bootstrap 5 JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Prism.js for syntax highlighting -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
    <script>
        // Add ColdFusion language support for Prism.js with enhanced script syntax
        // Must be defined after markup is loaded
        if (typeof Prism !== 'undefined' && Prism.languages.markup) {
            // Extend markup language for tag syntax, then add ColdFusion-specific tokens
            Prism.languages.coldfusion = Prism.languages.extend('markup', {
                'comment': [
                    {
                        pattern: /<!---[\s\S]*?--->/,
                        greedy: true
                    },
                    {
                        pattern: /\/\/.*/,
                        greedy: true
                    },
                    {
                        pattern: /\/\*[\s\S]*?\*\//,
                        greedy: true
                    }
                ],
                'tag-keyword': {
                    pattern: /\b(?:cfif|cfelse|cfelseif|cfset|cfoutput|cfloop|cfquery|cfcomponent|cffunction|cfreturn|cfargument|cfparam|cfinclude|cfabort|cfthrow|cfcatch|cftry|cfswitch|cfcase|cfdefaultcase|cfbreak|cfcontinue|cfmodule|cfimport|cfapplication|cfcookie|cffile|cfdirectory|cfhttp|cfmail|cfdocument|cfpdf|cfimage|cfspreadsheet|cfthread|cfexecute)\b/i,
                    alias: 'keyword'
                },
                'script-keyword': {
                    pattern: /\b(?:var|if|else|elseif|for|while|do|switch|case|default|break|continue|return|function|component|interface|abstract|public|private|package|remote|static|final|override|try|catch|finally|throw|new|this|super|import|include|abort|param|argument|output|query|transaction|lock|thread|execute|http|mail|file|directory|document|pdf|image|spreadsheet|writeOutput|ArrayLen|StructKeyExists|Trim|Val|ToString|TypeOf|IsNumeric|IsString|IsDate|CreateUUID|Now|DateFormat|DateDiff|DateAdd|DollarFormat)\b/i,
                    alias: 'keyword'
                },
                'function': {
                    pattern: /\b[A-Z][a-zA-Z0-9_]+\s*\(/,
                    alias: 'function'
                },
                'number': {
                    pattern: /\b\d+(\.\d+)?\b/,
                    alias: 'number'
                },
                'boolean': {
                    pattern: /\b(?:true|false)\b/i,
                    alias: 'boolean'
                },
                'variable': {
                    pattern: /#[\w.]+#/,
                    alias: 'variable'
                },
                'scope': {
                    pattern: /\b(?:Variables|Request|Session|Application|Server|Form|URL|CGI|Cookie|Arguments|This|Local|Client|Attributes|Caller|Super|Thread)\b/i,
                    alias: 'constant'
                },
                'property': {
                    pattern: /\.\w+/,
                    alias: 'property'
                }
            });
            
            // Also register as 'cfml' for compatibility
            Prism.languages.cfml = Prism.languages.coldfusion;
        } else if (typeof Prism !== 'undefined') {
            // Fallback if markup isn't loaded
            Prism.languages.coldfusion = {
                'comment': [
                    /<!---[\s\S]*?--->/,
                    /\/\/.*/,
                    /\/\*[\s\S]*?\*\//
                ],
                'string': /(["'])(?:(?=(\\?))\2.)*?\1/,
                'tag-keyword': /\b(?:cfif|cfelse|cfelseif|cfset|cfoutput|cfloop|cfquery|cfcomponent|cffunction|cfreturn|cfargument|cfparam|cfinclude|cfabort|cfthrow|cfcatch|cftry|cfswitch|cfcase|cfdefaultcase|cfbreak|cfcontinue|cfmodule|cfimport|cfapplication|cfcookie|cffile|cfdirectory|cfhttp|cfmail|cfdocument|cfpdf|cfimage|cfspreadsheet|cfthread|cfexecute)\b/i,
                'script-keyword': /\b(?:var|if|else|elseif|for|while|do|switch|case|default|break|continue|return|function|component|interface|abstract|public|private|package|remote|static|final|override|try|catch|finally|throw|new|this|super|import|include|abort|param|argument|output|query|transaction|lock|thread|execute|http|mail|file|directory|document|pdf|image|spreadsheet|writeOutput|ArrayLen|StructKeyExists|Trim|Val|ToString|TypeOf|IsNumeric|IsString|IsDate|CreateUUID|Now|DateFormat|DateDiff|DateAdd|DollarFormat)\b/i,
                'tag': /<\/?[a-z][\s\S]*?>/i,
                'function': /\b[A-Z][a-zA-Z0-9_]+\s*\(/,
                'number': /\b\d+(\.\d+)?\b/,
                'boolean': /\b(?:true|false)\b/i,
                'operator': /[+\-*\/=<>!&|]+/,
                'punctuation': /[{}[\];(),.:]/,
                'variable': /#[\w.]+#/,
                'scope': /\b(?:Variables|Request|Session|Application|Server|Form|URL|CGI|Cookie|Arguments|This|Local|Client|Attributes|Caller|Super|Thread)\b/i,
                'property': /\.\w+/
            };
        }
    </script>
    <!-- Custom JS -->
    <script src="assets/js/modules-data.js"></script>
    <script src="assets/js/app.js"></script>
    <!-- SCORM Integration (optional, only loads if SCORM API is present) -->
    <script src="assets/js/scorm-integration.js"></script>
    <script>
        // Initialize experience level selector
        document.addEventListener('DOMContentLoaded', () => {
            const levelSelector = document.getElementById('experienceLevel');
            if (levelSelector) {
                const savedLevel = localStorage.getItem('experienceLevel') || 'mid';
                levelSelector.value = savedLevel;
                if (typeof AppState !== 'undefined') {
                    AppState.experienceLevel = savedLevel;
                }
            }
        });
    </script>
</body>
</html>

