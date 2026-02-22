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
    <div class="container-fluid mt-4" style="padding-top: 20px; max-width: 1600px; margin-left: auto; margin-right: auto;">
        <div class="row">
            <!-- Left Sidebar - Lesson Navigation -->
            <div class="col-md-3 col-lg-2 mb-4">
                <div class="card sticky-top" style="top: 80px; max-height: calc(100vh - 100px); overflow-y: auto;">
                    <div class="card-header d-flex align-items-center">
                        <i class="ti ti-menu-2 me-2"></i>
                        <span class="fw-bold">Lessons</span>
                    </div>
                    <div class="list-group list-group-flush" id="lessonNav">
                        <!-- Lesson navigation will be rendered here by module.js -->
                    </div>
                </div>
            </div>

            <!-- Main Content Area -->
            <div class="col-md-9 col-lg-10">
                <!-- Module Header -->
                <div class="card bg-primary text-white mb-4">
                    <div class="card-body">
                        <nav aria-label="breadcrumb" class="mb-2">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item"><a href="../index.cfm" class="text-white-50">Training</a></li>
                                <li class="breadcrumb-item active text-white" id="breadcrumbModule">Module</li>
                            </ol>
                        </nav>
                        <h1 class="h3 mb-2" id="moduleTitle">Module Title</h1>
                        <p class="mb-2" id="moduleDescription">Module description</p>
                        <div id="moduleVersions" class="mb-2">
                            <!-- Version badges will be rendered here -->
                        </div>
                        <div class="d-flex align-items-center mt-3">
                            <div class="progress flex-grow-1 me-3" style="height: 8px;">
                                <div class="progress-bar bg-white" role="progressbar" id="moduleProgress" style="width: 0%"></div>
                            </div>
                            <a href="#" id="quizLink" class="btn btn-light">
                                <i class="ti ti-help-circle me-1"></i>Take Quiz
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Lessons Container -->
                <div id="lessonsContainer">
                    <!-- Lessons will be rendered here by module.js -->
                </div>

                <!-- Navigation Buttons -->
                <div class="d-flex justify-content-between mt-4 mb-4">
                    <button id="prevLesson" class="btn btn-outline-primary" onclick="navigateLesson(-1)">
                        <i class="ti ti-arrow-left me-1"></i>Previous
                    </button>
                    <button id="showSummary" class="btn btn-outline-info" onclick="toggleSummary()" style="display: none;">
                        <i class="ti ti-list me-1"></i>Module Summary
                    </button>
                    <button id="nextLesson" class="btn btn-primary" onclick="navigateLesson(1)">
                        Next <i class="ti ti-arrow-right ms-1"></i>
                    </button>
                </div>

                <!-- Module Summary Card -->
                <div class="card mt-4" id="moduleSummary" style="display: none;">
                    <div class="card-header">
                        <h5 class="mb-0">Module Summary</h5>
                    </div>
                    <div class="card-body" id="summaryContent">
                        <!-- Summary content will be generated here -->
                    </div>
                </div>
            </div>
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
</body>
</html>

