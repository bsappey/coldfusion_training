<!--- 
    ColdFusion Training - Module Base Template
    This is the base template that all module pages use.
    The module ID is automatically extracted from the filename (e.g., module-1.cfm → module ID 1)
--->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="pageTitle">Module - ColdFusion Training</title>
    
    <!-- CSS Framework (adjust path as needed) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" rel="stylesheet">
    
    <!-- Prism.js for syntax highlighting -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet">
    
    <!-- Custom CSS (adjust path as needed) -->
    <link href="../assets/css/style.css" rel="stylesheet">
</head>
<body>
    <!-- Header/Navigation -->
    <header class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" role="banner">
        <div class="container-fluid">
            <a class="navbar-brand" href="../index.cfm" aria-label="Adobe ColdFusion Training Home">
                <i class="ti ti-school me-2" aria-hidden="true"></i>Adobe ColdFusion Training
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto" role="menubar">
                    <li class="nav-item" role="none">
                        <a class="nav-link" href="../index.cfm" role="menuitem">Home</a>
                    </li>
                    <li class="nav-item" role="none">
                        <a class="nav-link" href="../index.cfm#modules" role="menuitem">Modules</a>
                    </li>
                    <li class="nav-item" role="none">
                        <a class="nav-link" href="../index.cfm#progress" role="menuitem">Progress</a>
                    </li>
                    <li class="nav-item" role="none">
                        <a class="nav-link" href="../index.cfm#versions" role="menuitem">Versions</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <div class="container-fluid mt-4" style="padding-top: 20px; max-width: 1600px; margin-left: auto; margin-right: auto;">
        <div class="row">
            <!-- Left Sidebar - Lesson Navigation -->
            <aside class="col-md-3 col-lg-2 mb-4" role="complementary" aria-label="Lesson navigation">
                <nav class="card sticky-top" style="top: 80px; max-height: calc(100vh - 100px); overflow-y: auto;">
                    <div class="card-header d-flex align-items-center">
                        <i class="ti ti-menu-2 me-2" aria-hidden="true"></i>
                        <span class="fw-bold">Lessons</span>
                    </div>
                    <div class="list-group list-group-flush" id="lessonNav" role="navigation" aria-label="Module lessons">
                        <!-- Lesson navigation will be rendered here by module.js -->
                    </div>
                </nav>
            </aside>

            <!-- Main Content Area -->
            <main class="col-md-9 col-lg-10" role="main">
                <!-- Module Header -->
                <div class="card bg-primary text-white mb-4">
                    <div class="card-body">
                        <nav aria-label="breadcrumb" class="mb-2">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item"><a href="../index.cfm" class="text-white-50">Training</a></li>
                                <li class="breadcrumb-item active text-white" id="breadcrumbModule" aria-current="page">Module</li>
                            </ol>
                        </nav>
                        <h1 class="h3 mb-2" id="moduleTitle">Module Title</h1>
                        <p class="mb-2" id="moduleDescription">Module description</p>
                        <div id="moduleVersions" class="mb-2" aria-label="Supported ColdFusion versions">
                            <!-- Version badges will be rendered here -->
                        </div>
                        <div class="d-flex align-items-center gap-2 mt-3 flex-wrap">
                            <a href="../index.cfm#modules" class="btn btn-light me-2" style="background-color: rgba(255, 255, 255, 0.95); color: #1473E6; border: 1px solid rgba(255, 255, 255, 0.3);" aria-label="Back to modules">
                                <i class="ti ti-arrow-left me-1" aria-hidden="true"></i>Back to Modules
                            </a>
                            <a href="#" id="quizLink" class="btn btn-light" aria-label="Take module quiz">
                                <i class="ti ti-help-circle me-1" aria-hidden="true"></i>Take Quiz
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Lessons Container -->
                <div id="lessonsContainer">
                    <!-- Lessons will be rendered here by module.js -->
                </div>

                <!-- Navigation Buttons -->
                <nav class="d-flex justify-content-between mt-4 mb-4" aria-label="Lesson navigation">
                    <button id="prevLesson" class="btn btn-outline-primary" onclick="navigateLesson(-1)" aria-label="Previous lesson">
                        <i class="ti ti-arrow-left me-1" aria-hidden="true"></i>Previous
                    </button>
                    <button id="showSummary" class="btn btn-outline-info" onclick="toggleSummary()" style="display: none;" aria-label="Show module summary">
                        <i class="ti ti-list me-1" aria-hidden="true"></i>Module Summary
                    </button>
                    <button id="nextLesson" class="btn btn-primary" onclick="navigateLesson(1)" aria-label="Next lesson">
                        Next <i class="ti ti-arrow-right ms-1" aria-hidden="true"></i>
                    </button>
                </nav>

                <!-- Module Summary Card -->
                <section class="card mt-4" id="moduleSummary" style="display: none;" aria-labelledby="summary-heading">
                    <div class="card-header">
                        <h2 id="summary-heading" class="h5 mb-0">Module Summary</h2>
                    </div>
                    <div class="card-body" id="summaryContent">
                        <!-- Summary content will be generated here -->
                    </div>
                </section>
            </main>
        </div>
    </div>

    <!-- JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-clike.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
    
    <!-- Application JavaScript -->
    <script src="../assets/js/modules-data.js"></script>
    <script src="../assets/js/app.js"></script>
    <script src="../assets/js/module.js"></script>
    <!-- SCORM Integration (optional, only loads if SCORM API is present) -->
    <script src="../assets/js/scorm-integration.js"></script>
    <script>
        // Add ColdFusion language support for Prism.js with enhanced script syntax
        if (typeof Prism !== 'undefined' && Prism.languages.markup) {
            // Extend markup language for tag syntax, then add ColdFusion-specific tokens
            Prism.languages.coldfusion = Prism.languages.extend('markup', {
                'comment': [
                    {
                        <!--- Avoid literal CF comment markers (<!--- --->) inside a .cfm template --->
                        pattern: /<\!---[\s\S]*?--\->/,
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
                    /<\!---[\s\S]*?--\->/,
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
</body>
</html>

