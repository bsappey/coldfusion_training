<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="pageTitle">Module - ColdFusion Training</title>
    <meta name="description" content="Interactive ColdFusion training module">
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Tabler Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
    <!-- Prism.js for syntax highlighting -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-dark.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" style="background-color: #1473E6 !important;">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="index.cfm">
                <i class="ti ti-school me-2"></i>
                <span><strong>Adobe</strong> ColdFusion Training</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.cfm">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#content">Module</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Module Header -->
    <section class="module-header bg-primary text-white py-4 mt-5">
        <div class="container">
            <nav aria-label="breadcrumb" class="mb-3">
                <ol class="breadcrumb breadcrumb-dark">
                    <li class="breadcrumb-item"><a href="index.cfm" class="text-white-50">Training</a></li>
                    <li class="breadcrumb-item active text-white" id="breadcrumbModule">Module</li>
                </ol>
            </nav>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div>
                    <h2 class="mb-2" id="moduleTitle">Module Title</h2>
                    <p class="mb-0 text-white-50" id="moduleDescription">Module description</p>
                    <div class="mt-2" id="moduleVersions">
                        <!-- Version badges will be inserted here -->
                    </div>
                </div>
                <div class="mt-3 mt-md-0">
                    <a href="#" class="btn btn-light" id="quizLink">
                        <i class="ti ti-question-mark me-1"></i>Take Quiz
                    </a>
                </div>
            </div>
            <div class="progress mt-3 bg-white bg-opacity-25" style="height: 8px;">
                <div class="progress-bar bg-white" 
                     role="progressbar" 
                     style="width: 0%" 
                     id="moduleProgress"
                     aria-valuenow="0" 
                     aria-valuemin="0" 
                     aria-valuemax="100"></div>
            </div>
        </div>
    </section>

    <!-- Module Content -->
    <section id="content" class="py-5">
        <div class="container">
            <div class="row">
                <!-- Sidebar Navigation -->
                <div class="col-lg-3 mb-4">
                    <div class="card shadow-sm sticky-top" style="top: 80px;">
                        <div class="card-header bg-white">
                            <h5 class="mb-0">
                                <i class="ti ti-list me-2"></i>Lessons
                            </h5>
                        </div>
                        <div class="card-body p-0">
                            <div class="list-group list-group-flush" id="lessonNav">
                                <!-- Lesson navigation will be generated here -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="col-lg-9">
                    <div id="lessonsContainer">
                        <!-- Lessons will be generated here -->
                    </div>

                    <!-- Module Summary -->
                    <div class="card shadow-sm mt-4 border-primary" id="moduleSummary" style="display: none;">
                        <div class="card-header bg-primary text-white">
                            <h5 class="mb-0">
                                <i class="ti ti-summary me-2"></i>Module Summary
                            </h5>
                        </div>
                        <div class="card-body" id="summaryContent">
                            <!-- Summary content will be generated here -->
                        </div>
                    </div>

                    <!-- Navigation Buttons -->
                    <div class="card shadow-sm mt-4">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <button class="btn btn-outline-secondary" id="prevLesson" onclick="navigateLesson(-1)" disabled>
                                    <i class="ti ti-arrow-left me-1"></i> Previous
                                </button>
                                <div>
                                    <button class="btn btn-outline-info me-2" id="showSummary" onclick="toggleSummary()" style="display: none;">
                                        <i class="ti ti-summary me-1"></i> Summary
                                    </button>
                                    <button class="btn btn-primary" id="nextLesson" onclick="navigateLesson(1)">
                                        Next <i class="ti ti-arrow-right ms-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Prism.js for syntax highlighting -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
    <script>
        // Add ColdFusion language support for Prism.js (handles both tag and script syntax)
        if (typeof Prism !== 'undefined') {
            Prism.languages.coldfusion = {
                'comment': [
                    // Tag syntax comments
                    /<!---[\s\S]*?--->/,
                    // Script syntax comments (single and multi-line)
                    /\/\/.*/,
                    /\/\*[\s\S]*?\*\//
                ],
                'string': /(["'])(?:(?=(\\?))\2.)*?\1/,
                // Tag syntax keywords
                'tag-keyword': /\b(?:cfif|cfelse|cfelseif|cfset|cfoutput|cfloop|cfquery|cfcomponent|cffunction|cfreturn|cfargument|cfparam|cfinclude|cfabort|cfthrow|cfcatch|cftry|cfswitch|cfcase|cfdefaultcase|cfbreak|cfcontinue|cfmodule|cfimport|cfapplication|cfcookie|cffile|cfdirectory|cfhttp|cfmail|cfdocument|cfpdf|cfimage|cfspreadsheet|cfthread|cfexecute)\b/i,
                // Script syntax keywords
                'script-keyword': /\b(?:var|if|else|elseif|for|while|do|switch|case|default|break|continue|return|function|component|interface|abstract|public|private|package|remote|static|final|override|try|catch|finally|throw|new|this|super|import|include|abort|param|argument|output|query|transaction|lock|thread|execute|http|mail|file|directory|document|pdf|image|spreadsheet)\b/i,
                'tag': /<\/?[a-z][\s\S]*?>/i,
                'function': /\b[A-Z][a-zA-Z0-9_]+\s*\(/,
                'number': /\b\d+(\.\d+)?\b/,
                'operator': /[+\-*\/=<>!&|]+/,
                'punctuation': /[{}[\];(),.:]/,
                // Variable interpolation in tag syntax
                'variable': /#[\w.]+#/
            };
        }
    </script>
    <!-- Custom JS -->
    <script src="assets/js/modules-data.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="assets/js/module.js"></script>
</body>
</html>

