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
    <header class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="../index.cfm">
                <i class="ti ti-school me-2"></i>Adobe ColdFusion Training
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="../index.cfm">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.cfm#modules">Modules</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.cfm#progress">Progress</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.cfm#versions">Versions</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <div class="container mt-4" style="padding-top: 20px;">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="mb-3">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="../index.cfm">Training</a></li>
                <li class="breadcrumb-item"><a href="#" id="breadcrumbModuleLink">Module</a></li>
                <li class="breadcrumb-item active">Quiz</li>
            </ol>
        </nav>

        <!-- Quiz Header -->
        <div class="card bg-primary text-white mb-4">
            <div class="card-body">
                <h1 class="h3 mb-0" id="quizTitle">Module Quiz</h1>
            </div>
        </div>

        <!-- Quiz Instructions -->
        <div class="card mb-4" id="quizInstructions">
            <div class="card-body">
                <h5 class="card-title">Quiz Instructions</h5>
                <ul class="mb-0">
                    <li>Read each question carefully</li>
                    <li>Select the best answer(s) for each question</li>
                    <li>You can review your answers before submitting</li>
                    <li>Your score will be displayed after submission</li>
                </ul>
                <button class="btn btn-primary mt-3" onclick="startQuiz()">
                    <i class="ti ti-play me-1"></i>Start Quiz
                </button>
            </div>
        </div>

        <!-- Quiz Container -->
        <div class="card mb-4" id="quizContainer" style="display: none;">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">Quiz Questions</h5>
                <div class="d-flex align-items-center">
                    <div class="progress me-3" style="width: 200px; height: 8px;">
                        <div class="progress-bar" role="progressbar" id="quizProgress" style="width: 0%"></div>
                    </div>
                    <span class="text-muted small" id="progressText">0 / 0</span>
                </div>
            </div>
            <div class="card-body">
                <form id="quizForm">
                    <div id="questionsContainer">
                        <!-- Questions will be rendered here by quiz.js -->
                    </div>
                    <div class="d-flex justify-content-between mt-4">
                        <a href="#" id="backToModuleBtn" class="btn btn-outline-secondary">
                            <i class="ti ti-arrow-left me-1"></i>Back to Module
                        </a>
                        <button type="button" class="btn btn-primary" onclick="submitQuiz()">
                            <i class="ti ti-check me-1"></i>Submit Quiz
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Quiz Results -->
        <div class="card mb-4" id="quizResults" style="display: none;">
            <div class="card-body text-center">
                <div id="resultIcon" class="mb-3" style="font-size: 4rem;"></div>
                <h3 id="resultTitle" class="mb-2"></h3>
                <p id="resultMessage" class="text-muted mb-3"></p>
                <div class="display-4 mb-4" id="finalScore"></div>
                <div class="d-flex justify-content-center gap-2">
                    <button id="resetBtn" class="btn btn-outline-primary" onclick="resetQuiz()" style="display: none;">
                        <i class="ti ti-refresh me-1"></i>Retake Quiz
                    </button>
                    <a href="#" id="backToModuleBtn2" class="btn btn-primary">
                        <i class="ti ti-arrow-left me-1"></i>Back to Module
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Application JavaScript -->
    <script src="../assets/js/modules-data.js"></script>
    <script src="../assets/js/app.js"></script>
    <script src="../assets/js/quiz.js"></script>
</body>
</html>

