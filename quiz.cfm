<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="pageTitle">Quiz - ColdFusion Training</title>
    <meta name="description" content="Test your ColdFusion knowledge">
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Tabler Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
    <!-- Prism.js for syntax highlighting - Using dark theme -->
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
                        <a class="nav-link active" href="#quiz">Quiz</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Quiz Header -->
    <section class="quiz-header bg-primary text-white py-4 mt-5">
        <div class="container">
            <nav aria-label="breadcrumb" class="mb-3">
                <ol class="breadcrumb breadcrumb-dark">
                    <li class="breadcrumb-item"><a href="index.cfm" class="text-white-50">Training</a></li>
                    <li class="breadcrumb-item"><a href="#" class="text-white-50" id="breadcrumbModuleLink">Module</a></li>
                    <li class="breadcrumb-item active text-white">Quiz</li>
                </ol>
            </nav>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div>
                    <h2 class="mb-2" id="quizTitle">Module Quiz</h2>
                    <p class="mb-0 text-white-50">Test your knowledge of the concepts covered in this module</p>
                </div>
                <div class="mt-3 mt-md-0">
                    <span class="badge bg-light text-dark fs-6 px-3 py-2">
                        <i class="ti ti-clock me-1"></i>
                        <span id="timeRemaining">No time limit</span>
                    </span>
                </div>
            </div>
            <div class="progress mt-3 bg-white bg-opacity-25" style="height: 8px;">
                <div class="progress-bar bg-white" 
                     role="progressbar" 
                     style="width: 0%" 
                     id="quizProgress"
                     aria-valuenow="0" 
                     aria-valuemin="0" 
                     aria-valuemax="100"></div>
            </div>
        </div>
    </section>

    <!-- Quiz Instructions -->
    <section id="quizInstructions" class="py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card border-primary shadow-sm">
                        <div class="card-body p-4">
                            <h5 class="mb-3">
                                <i class="ti ti-info-circle text-primary me-2"></i>
                                Quiz Instructions
                            </h5>
                            <ul class="mb-4">
                                <li>Read each question carefully before selecting your answer</li>
                                <li>You can change your answer before submitting</li>
                                <li>Some questions may have multiple correct answers</li>
                                <li>Your score will be displayed after submission</li>
                                <li>You need 70% or higher to pass</li>
                                <li>Review explanations for incorrect answers to reinforce learning</li>
                            </ul>
                            <div class="text-center">
                                <button class="btn btn-primary btn-lg" onclick="startQuiz()">
                                    Start Quiz <i class="ti ti-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quiz Questions -->
    <section id="quizContainer" class="py-5" style="display: none;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <form id="quizForm">
                        <div id="questionsContainer">
                            <!-- Questions will be generated here -->
                        </div>

                        <!-- Submit Button -->
                        <div class="card shadow-sm mt-4">
                            <div class="card-body text-center">
                                <button type="button" class="btn btn-primary btn-lg" onclick="submitQuiz()" id="submitBtn">
                                    <i class="ti ti-send me-2"></i>Submit Quiz
                                </button>
                                <button type="button" class="btn btn-outline-secondary btn-lg ms-2" onclick="resetQuiz()" id="resetBtn" style="display: none;">
                                    <i class="ti ti-refresh me-2"></i>Try Again
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Results -->
    <section id="quizResults" class="py-5" style="display: none;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card shadow-lg border-0">
                        <div class="card-body text-center py-5">
                            <div class="mb-4">
                                <span class="avatar avatar-xl bg-label-success rounded-circle mb-3" id="resultIcon">
                                    <i class="ti ti-check"></i>
                                </span>
                            </div>
                            <h2 class="mb-2" id="resultTitle">Congratulations!</h2>
                            <p class="text-muted mb-4" id="resultMessage">You passed the quiz!</p>
                            <div class="row justify-content-center mb-4">
                                <div class="col-md-6">
                                    <div class="card bg-light">
                                        <div class="card-body py-4">
                                            <h3 class="mb-0 text-primary" id="finalScore">0%</h3>
                                            <small class="text-muted">Your Score</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center gap-3 flex-wrap">
                                <a href="#" class="btn btn-outline-primary" id="backToModuleBtn">
                                    <i class="ti ti-arrow-left me-1"></i> Back to Module
                                </a>
                                <a href="index.cfm" class="btn btn-primary">
                                    View All Modules <i class="ti ti-arrow-right ms-1"></i>
                                </a>
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
        // Add ColdFusion language support for Prism.js
            Prism.languages.coldfusion = {
                'comment': [
                    /<!---[\s\S]*?--->/,
                    /\/\/.*/,
                    /\/\*[\s\S]*?\*\//
                ],
                'string': /(["'])(?:(?=(\\?))\2.)*?\1/,
                'tag-keyword': /\b(?:cfif|cfelse|cfelseif|cfset|cfoutput|cfloop|cfquery|cfcomponent|cffunction|cfreturn|cfargument|cfparam|cfinclude|cfabort|cfthrow|cfcatch|cftry|cfswitch|cfcase|cfdefaultcase|cfbreak|cfcontinue|cfmodule|cfimport|cfapplication|cfcookie|cffile|cfdirectory|cfhttp|cfmail|cfdocument|cfpdf|cfimage|cfspreadsheet|cfthread|cfexecute)\b/i,
                'script-keyword': /\b(?:var|if|else|elseif|for|while|do|switch|case|default|break|continue|return|function|component|interface|abstract|public|private|package|remote|static|final|override|try|catch|finally|throw|new|this|super|import|include|abort|param|argument|output|query|transaction|lock|thread|execute|http|mail|file|directory|document|pdf|image|spreadsheet)\b/i,
                'tag': /<\/?[a-z][\s\S]*?>/i,
                'function': /\b[A-Z][a-zA-Z0-9_]+\s*\(/,
                'number': /\b\d+(\.\d+)?\b/,
                'operator': /[+\-*\/=<>!&|]+/,
                'punctuation': /[{}[\];(),.:]/,
                'variable': /#[\w.]+#/
            };
    </script>
    <!-- Custom JS -->
    <script src="assets/js/modules-data.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="assets/js/quiz.js"></script>
</body>
</html>

