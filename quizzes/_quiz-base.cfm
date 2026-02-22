<!--- 
    ColdFusion Training - Quiz Base Template
    This is the base template that all quiz pages use.
    The module ID is automatically extracted from the filename (e.g., quiz-1.cfm → module ID 1)
--->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="pageTitle">Quiz - ColdFusion Training</title>
    
    <!-- CSS Framework -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" rel="stylesheet">
    
    <!-- Custom CSS -->
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
    <main class="container mt-4" style="padding-top: 20px;" role="main">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="mb-3">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="../index.cfm">Training</a></li>
                <li class="breadcrumb-item"><a href="#" id="breadcrumbModuleLink">Module</a></li>
                <li class="breadcrumb-item active" aria-current="page">Quiz</li>
            </ol>
        </nav>

        <!-- Quiz Header -->
        <header class="card bg-primary text-white mb-4">
            <div class="card-body">
                <h1 class="h3 mb-0" id="quizTitle">Module Quiz</h1>
            </div>
        </header>

        <!-- Quiz Instructions -->
        <section class="card mb-4" id="quizInstructions" aria-labelledby="instructions-heading">
            <div class="card-body">
                <h2 id="instructions-heading" class="h5 card-title">Quiz Instructions</h2>
                <ul class="mb-0">
                    <li>Read each question carefully</li>
                    <li>Select the best answer(s) for each question</li>
                    <li>You can review your answers before submitting</li>
                    <li>Your score will be displayed after submission</li>
                </ul>
                <button class="btn btn-primary mt-3" onclick="startQuiz()" aria-label="Start the quiz">
                    <i class="ti ti-play me-1" aria-hidden="true"></i>Start Quiz
                </button>
            </div>
        </section>

        <!-- Quiz Container -->
        <section class="card mb-4" id="quizContainer" style="display: none;" aria-labelledby="quiz-questions-heading">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h2 id="quiz-questions-heading" class="h5 mb-0">Quiz Questions</h2>
                <div class="d-flex align-items-center" aria-live="polite" aria-atomic="true">
                    <div class="progress me-3" style="width: 200px; height: 8px;" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" id="quizProgress" style="width: 0%"></div>
                    </div>
                    <span class="text-muted small" id="progressText" aria-label="Progress">0 / 0</span>
                </div>
            </div>
            <div class="card-body">
                <form id="quizForm" aria-label="Quiz form">
                    <div id="questionsContainer" role="group" aria-label="Quiz questions">
                        <!-- Questions will be rendered here by quiz.js -->
                    </div>
                    <div class="d-flex justify-content-between mt-4">
                        <a href="#" id="backToModuleBtn" class="btn btn-outline-secondary" aria-label="Return to module">
                            <i class="ti ti-arrow-left me-1" aria-hidden="true"></i>Back to Module
                        </a>
                        <button type="button" class="btn btn-primary" onclick="submitQuiz()" aria-label="Submit quiz answers">
                            <i class="ti ti-check me-1" aria-hidden="true"></i>Submit Quiz
                        </button>
                    </div>
                </form>
            </div>
        </section>

        <!-- Quiz Results -->
        <section class="card mb-4" id="quizResults" style="display: none;" aria-labelledby="result-title" aria-live="polite">
            <div class="card-body text-center">
                <div id="resultIcon" class="mb-3" style="font-size: 4rem;" aria-hidden="true"></div>
                <h2 id="result-title" class="h3 mb-2"></h2>
                <p id="resultMessage" class="text-muted mb-3"></p>
                <div class="display-4 mb-4" id="finalScore" aria-label="Final quiz score"></div>
                <div class="d-flex justify-content-center gap-2">
                    <button id="resetBtn" class="btn btn-outline-primary" onclick="resetQuiz()" style="display: none;" aria-label="Retake the quiz">
                        <i class="ti ti-refresh me-1" aria-hidden="true"></i>Retake Quiz
                    </button>
                    <a href="#" id="backToModuleBtn2" class="btn btn-primary" aria-label="Return to module">
                        <i class="ti ti-arrow-left me-1" aria-hidden="true"></i>Back to Module
                    </a>
                </div>
            </div>
        </section>
    </main>

    <!-- JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Application JavaScript -->
    <script src="../assets/js/modules-data.js"></script>
    <script src="../assets/js/app.js"></script>
    <script src="../assets/js/quiz.js"></script>
    <!-- SCORM Integration (optional, only loads if SCORM API is present) -->
    <script src="../assets/js/scorm-integration.js"></script>
</body>
</html>

