/**
 * ColdFusion Training - Quiz Page JavaScript
 * Modernized to ES6+ standards
 */

let quizStarted = false;
let currentQuestion = 0;
let userAnswers = {};
let quizData = null;

// Initialize quiz page
document.addEventListener('DOMContentLoaded', () => {
    // Extract module ID from URL path (e.g., /quizzes/quiz-1.cfm)
    let moduleId = 1;
    const pathMatch = window.location.pathname.match(/quiz-(\d+)\.cfm$/);
    if (pathMatch) {
        moduleId = parseInt(pathMatch[1], 10);
    } else {
        // Fallback to URL parameter for backward compatibility
        const urlParams = new URLSearchParams(window.location.search);
        moduleId = parseInt(urlParams.get('module'), 10) || 1;
    }
    
    loadQuiz(moduleId);
});

/**
 * Load quiz data
 */
const loadQuiz = (moduleId) => {
    quizData = getQuizData(moduleId);
    
    if (!quizData) {
        window.location.href = 'index.cfm';
        return;
    }

    // Update page title
    const pageTitleEl = document.getElementById('pageTitle');
    if (pageTitleEl) pageTitleEl.textContent = `Quiz - Module ${moduleId} - ColdFusion Training`;
    
    const quizTitleEl = document.getElementById('quizTitle');
    if (quizTitleEl) quizTitleEl.textContent = `Module ${moduleId} Quiz`;
    
    // Update breadcrumb
    const moduleLink = document.getElementById('breadcrumbModuleLink');
    if (moduleLink) {
        moduleLink.href = `modules/module-${moduleId}.cfm`;
        const modules = getModulesData();
        const module = modules.find(m => m.id === moduleId);
        moduleLink.textContent = module ? `Module ${moduleId}: ${module.title}` : `Module ${moduleId}`;
    }
    
    // Update back to module buttons (there may be multiple)
    const backBtns = document.querySelectorAll('#backToModuleBtn, #backToModuleBtn2');
    backBtns.forEach(btn => {
        if (btn) {
            btn.href = `modules/module-${moduleId}.cfm`;
        }
    });

    renderQuestions();
};

/**
 * Render quiz questions
 */
const renderQuestions = () => {
    const container = document.getElementById('questionsContainer');
    if (!container || !quizData) return;

    container.innerHTML = quizData.questions.map((question, index) => {
        let answersHtml = '';
        
        if (question.type === 'multiple') {
            // Multiple choice (checkboxes)
            answersHtml = question.answers.map((answer, aIndex) => {
                return `
                    <div class="form-check mb-3">
                        <input class="form-check-input" 
                               type="checkbox" 
                               name="question${index + 1}" 
                               id="q${index + 1}a${aIndex + 1}" 
                               value="${answer.value}">
                        <label class="form-check-label" for="q${index + 1}a${aIndex + 1}">
                            ${answer.text}
                        </label>
                    </div>
                `;
            }).join('');
        } else {
            // Single choice (radio buttons)
            answersHtml = question.answers.map((answer, aIndex) => {
                return `
                    <div class="form-check mb-3">
                        <input class="form-check-input" 
                               type="radio" 
                               name="question${index + 1}" 
                               id="q${index + 1}a${aIndex + 1}" 
                               value="${answer.value}">
                        <label class="form-check-label" for="q${index + 1}a${aIndex + 1}">
                            ${answer.text}
                        </label>
                    </div>
                `;
            }).join('');
        }

        return `
            <div class="card mb-4 quiz-question shadow-sm" data-question="${index + 1}">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">
                            <span class="badge bg-primary me-2">${index + 1}</span>
                            ${question.question}
                        </h5>
                        <span class="badge bg-label-success" style="display: none;">
                            <i class="ti ti-check"></i> Correct
                        </span>
                        <span class="badge bg-label-danger" style="display: none;">
                            <i class="ti ti-x"></i> Incorrect
                        </span>
                    </div>
                </div>
                <div class="card-body">
                    ${answersHtml}
                    ${question.explanation ? `
                        <div class="alert alert-info mt-3" style="display: none;" data-explanation="${index + 1}">
                            <strong>Explanation:</strong> ${question.explanation}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');

    // Add event listeners for answer changes
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
        input.addEventListener('change', () => {
            updateQuizProgress();
            const questionEl = input.closest('.quiz-question');
            if (questionEl) markQuestionAnswered(questionEl);
        });
    });
};

/**
 * Mark question as answered
 */
const markQuestionAnswered = (questionEl) => {
    questionEl.classList.add('answered');
};

/**
 * Start quiz
 */
const startQuiz = () => {
    quizStarted = true;
    document.getElementById('quizInstructions').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    // Scroll to first question
    document.getElementById('quizContainer').scrollIntoView({ behavior: 'smooth' });
    
    updateQuizProgress();
};

/**
 * Update quiz progress
 */
const updateQuizProgress = () => {
    if (!quizData) return;
    
    const totalQuestions = quizData.questions.length;
    const answeredQuestions = document.querySelectorAll('.quiz-question.answered').length;
    const progress = Math.round((answeredQuestions / totalQuestions) * 100);
    
    const progressBar = document.getElementById('quizProgress');
    if (progressBar) {
        progressBar.style.width = progress + '%';
        progressBar.setAttribute('aria-valuenow', progress);
    }
};

/**
 * Submit quiz
 */
const submitQuiz = () => {
    if (!quizData) return;
    
    // Collect answers
    const answers = {};
    let allAnswered = true;
    
    quizData.questions.forEach((question, index) => {
        const questionNum = index + 1;
        const inputs = document.querySelectorAll(`input[name="question${questionNum}"]:checked`);
        
        if (inputs.length === 0) {
            allAnswered = false;
            return;
        }
        
        if (question.type === 'multiple') {
            answers[questionNum] = Array.from(inputs).map(input => input.value);
        } else {
            answers[questionNum] = inputs[0].value;
        }
    });
    
    if (!allAnswered) {
        if (confirm('You haven\'t answered all questions. Submit anyway?')) {
            gradeQuiz(answers);
        }
    } else {
        gradeQuiz(answers);
    }
};

/**
 * Grade quiz
 */
const gradeQuiz = (answers) => {
    if (!quizData) return;
    
    let correct = 0;
    const total = quizData.questions.length;
    
    quizData.questions.forEach((question, index) => {
        const questionNum = index + 1;
        const questionEl = document.querySelector(`.quiz-question[data-question="${questionNum}"]`);
        const userAnswer = answers[questionNum];
        const correctAnswer = question.correct;
        
        let isCorrect = false;
        
        if (question.type === 'multiple') {
            // For multiple choice, check if arrays match
            const userArray = Array.isArray(userAnswer) ? userAnswer.sort() : [userAnswer];
            const correctArray = Array.isArray(correctAnswer) ? correctAnswer.sort() : [correctAnswer];
            isCorrect = JSON.stringify(userArray) === JSON.stringify(correctArray);
        } else {
            isCorrect = userAnswer === correctAnswer;
        }
        
        if (isCorrect) {
            correct++;
            questionEl.classList.add('correct');
            questionEl.querySelector('.bg-label-success').style.display = 'inline-block';
        } else {
            questionEl.classList.add('incorrect');
            questionEl.querySelector('.bg-label-danger').style.display = 'inline-block';
        }
        
        // Show explanation
        const explanation = questionEl.querySelector('[data-explanation]');
        if (explanation) {
            explanation.style.display = 'block';
        }
        
        // Disable inputs
        questionEl.querySelectorAll('input').forEach(input => {
            input.disabled = true;
        });
    });
    
    const score = Math.round((correct / total) * 100);
    const passed = score >= 70;
    
    // Save results
    const pathMatch = window.location.pathname.match(/quiz-(\d+)\.cfm$/);
    const moduleId = pathMatch ? parseInt(pathMatch[1], 10) : 
                     (parseInt(new URLSearchParams(window.location.search).get('module'), 10) || 1);
    
    AppState.quizResults[moduleId] = {
        score: score,
        correct: correct,
        total: total,
        passed: passed,
        date: new Date().toISOString()
    };
    saveProgress();
    
    // Report to SCORM if available
    if (typeof reportQuizToSCORM === 'function') {
        reportQuizToSCORM(moduleId, score, passed);
    }
    
    // Show results
    showResults(score, passed, correct, total);
};

/**
 * Show quiz results
 */
const showResults = (score, passed, correct, total) => {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const finalScore = document.getElementById('finalScore');
    
    if (passed) {
        resultIcon.className = 'avatar avatar-xl bg-label-success rounded-circle mb-3';
        resultIcon.innerHTML = '<i class="ti ti-check"></i>';
        resultTitle.textContent = 'Congratulations!';
        resultMessage.textContent = `You passed the quiz with a score of ${score}%!`;
    } else {
        resultIcon.className = 'avatar avatar-xl bg-label-danger rounded-circle mb-3';
        resultIcon.innerHTML = '<i class="ti ti-x"></i>';
        resultTitle.textContent = 'Keep Learning!';
        resultMessage.textContent = `You scored ${score}%. You need 70% to pass. Review the module and try again!`;
    }
    
    finalScore.textContent = score + '%';
    
    // Scroll to results
    document.getElementById('quizResults').scrollIntoView({ behavior: 'smooth' });
    
    // Show reset button
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) resetBtn.style.display = 'inline-block';
};

/**
 * Reset quiz
 */
const resetQuiz = () => {
    // Reset state
    quizStarted = false;
    currentQuestion = 0;
    userAnswers = {};
    
    // Hide results
    document.getElementById('quizResults').style.display = 'none';
    
    // Reset form
    document.getElementById('quizForm').reset();
    
    // Remove classes
    document.querySelectorAll('.quiz-question').forEach(question => {
        question.classList.remove('answered', 'correct', 'incorrect');
        question.querySelectorAll('.badge').forEach(badge => {
            badge.style.display = 'none';
        });
        question.querySelectorAll('[data-explanation]').forEach(explanation => {
            explanation.style.display = 'none';
        });
        question.querySelectorAll('input').forEach(input => {
            input.disabled = false;
        });
    });
    
    // Show instructions
    document.getElementById('quizInstructions').style.display = 'block';
    document.getElementById('quizContainer').style.display = 'none';
    
    // Reset progress
    const progressBar = document.getElementById('quizProgress');
    if (progressBar) {
        progressBar.style.width = '0%';
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Get quiz data
 */
const getQuizData = (moduleId) => {
    const quizzes = {
        1: {
            questions: [
                {
                    question: 'What file extension is used for ColdFusion pages?',
                    type: 'single',
                    answers: [
                        { text: '.cf', value: 'a' },
                        { text: '.cfm', value: 'b' },
                        { text: '.coldfusion', value: 'c' },
                        { text: '.cfml', value: 'd' }
                    ],
                    correct: 'b',
                    explanation: 'ColdFusion pages use the <code>.cfm</code> extension, which stands for ColdFusion Markup.'
                },
                {
                    question: 'Which tag is used to output content in ColdFusion?',
                    type: 'single',
                    answers: [
                        { text: '&lt;cfdisplay&gt;', value: 'a' },
                        { text: '&lt;cfoutput&gt;', value: 'b' },
                        { text: '&lt;cfshow&gt;', value: 'c' },
                        { text: '&lt;cfecho&gt;', value: 'd' }
                    ],
                    correct: 'b',
                    explanation: 'The <code>&lt;cfoutput&gt;</code> tag is used to output content and evaluate ColdFusion expressions.'
                },
                {
                    question: 'How do you set a variable in ColdFusion?',
                    type: 'single',
                    answers: [
                        { text: '&lt;cfvar name="variable" value="value"&gt;', value: 'a' },
                        { text: '&lt;cfset variable = "value"&gt;', value: 'b' },
                        { text: '&lt;cfvariable name="variable" value="value"&gt;', value: 'c' },
                        { text: 'variable = "value"', value: 'd' }
                    ],
                    correct: 'b',
                    explanation: 'The <code>&lt;cfset&gt;</code> tag is used to set variables in ColdFusion.'
                },
                {
                    question: 'Which of the following are ColdFusion data types? (Select all that apply)',
                    type: 'multiple',
                    answers: [
                        { text: 'String', value: 'string' },
                        { text: 'Numeric', value: 'numeric' },
                        { text: 'Boolean', value: 'boolean' },
                        { text: 'Array', value: 'array' }
                    ],
                    correct: ['string', 'numeric', 'boolean', 'array'],
                    explanation: 'All of these are valid ColdFusion data types. ColdFusion also supports structures, queries, dates, and more.'
                },
                {
                    question: 'What is the correct syntax to output a variable inside a cfoutput tag?',
                    type: 'single',
                    answers: [
                        { text: '&lt;cfoutput&gt;variable&lt;/cfoutput&gt;', value: 'a' },
                        { text: '&lt;cfoutput&gt;#variable#&lt;/cfoutput&gt;', value: 'b' },
                        { text: '&lt;cfoutput&gt;${variable}&lt;/cfoutput&gt;', value: 'c' },
                        { text: '&lt;cfoutput&gt;{variable}&lt;/cfoutput&gt;', value: 'd' }
                    ],
                    correct: 'b',
                    explanation: 'Variables are output using hash marks (#) around the variable name: <code>#variable#</code>'
                }
            ]
        },
        13: {
            questions: [
                {
                    question: 'Which function is used to create a chat model instance in ColdFusion 2025?',
                    type: 'single',
                    answers: [
                        { text: 'createChatModel()', value: 'a' },
                        { text: 'getChatModel()', value: 'b' },
                        { text: 'newChatModel()', value: 'c' },
                        { text: 'initChatModel()', value: 'd' }
                    ],
                    correct: 'b',
                    explanation: 'The <code>getChatModel()</code> function creates a configured chat LLM instance. It requires a configuration struct with PROVIDER, APIKEY, and MODELNAME.'
                },
                {
                    question: 'What is the correct way to send a prompt to a chat model?',
                    type: 'single',
                    answers: [
                        { text: 'chatModel.send("prompt")', value: 'a' },
                        { text: 'chatModel.chat("prompt")', value: 'b' },
                        { text: 'chatModel.query("prompt")', value: 'c' },
                        { text: 'chatModel.ask("prompt")', value: 'd' }
                    ],
                    correct: 'b',
                    explanation: 'The <code>.chat()</code> method is used to send prompts to a chat model. It accepts either a plain string or a structured chat request with systemMessage and userMessage.'
                },
                {
                    question: 'Which function turns a stateless chat model into a conversational AI service with memory?',
                    type: 'single',
                    answers: [
                        { text: 'getAIService()', value: 'a' },
                        { text: 'createAIService()', value: 'b' },
                        { text: 'initAIService()', value: 'c' },
                        { text: 'newAIService()', value: 'd' }
                    ],
                    correct: 'a',
                    explanation: 'The <code>getAIService()</code> function wraps a chat model and adds features like memory, persona management, and tool calling. It requires a chatModel in its configuration.'
                },
                {
                    question: 'What are the main features added by getAIService()? (Select all that apply)',
                    type: 'multiple',
                    answers: [
                        { text: 'Multi-turn conversation management', value: 'memory' },
                        { text: 'Memory for previous messages', value: 'memory' },
                        { text: 'System personas', value: 'persona' },
                        { text: 'Function/tool calling', value: 'tools' }
                    ],
                    correct: ['memory', 'persona', 'tools'],
                    explanation: 'getAIService() adds memory (per-user or global), system personas (via systemMessage), and function/tool calling capabilities to enable the AI to call your CFC methods.'
                },
                {
                    question: 'Which function creates a vector store client for storing and searching embeddings?',
                    type: 'single',
                    answers: [
                        { text: 'GetVectorStore()', value: 'a' },
                        { text: 'GetVectorStoreClient()', value: 'b' },
                        { text: 'createVectorStore()', value: 'c' },
                        { text: 'newVectorStore()', value: 'd' }
                    ],
                    correct: 'b',
                    explanation: 'The <code>GetVectorStoreClient()</code> function creates a unified client for working with vector stores. It can be called without arguments for in-memory storage or with a configuration struct for providers like Milvus, Pinecone, Qdrant, or Chroma.'
                },
                {
                    question: 'How do you add a single document to a vector store?',
                    type: 'single',
                    answers: [
                        { text: 'vs.insert(item)', value: 'a' },
                        { text: 'vs.add(item)', value: 'b' },
                        { text: 'vs.store(item)', value: 'c' },
                        { text: 'vs.save(item)', value: 'd' }
                    ],
                    correct: 'b',
                    explanation: 'The <code>.add()</code> method adds a single item to the vector store. For batch operations, use <code>.addAll()</code> with an array of items.'
                },
                {
                    question: 'What method is used to perform similarity search in a vector store?',
                    type: 'single',
                    answers: [
                        { text: 'vs.find(query)', value: 'a' },
                        { text: 'vs.search(query)', value: 'b' },
                        { text: 'vs.query(query)', value: 'c' },
                        { text: 'vs.lookup(query)', value: 'd' }
                    ],
                    correct: 'b',
                    explanation: 'The <code>.search()</code> method performs similarity search. It accepts a query struct with text (auto-embedded) or vector, along with topK, minScore, and optional filter parameters.'
                },
                {
                    question: 'Which function creates an embedding model client?',
                    type: 'single',
                    answers: [
                        { text: 'GetEmbedding()', value: 'a' },
                        { text: 'GetEmbeddingModel()', value: 'b' },
                        { text: 'createEmbedding()', value: 'c' },
                        { text: 'newEmbedding()', value: 'd' }
                    ],
                    correct: 'b',
                    explanation: 'The <code>GetEmbeddingModel()</code> function initializes an embedding model client. It requires a configuration struct with provider, apiKey, modelName, and dimension.'
                },
                {
                    question: 'What method generates embeddings for multiple texts in a single call?',
                    type: 'single',
                    answers: [
                        { text: 'embeddingModel.embedAll(texts)', value: 'a' },
                        { text: 'embeddingModel.batchEmbed(texts)', value: 'b' },
                        { text: 'embeddingModel.embedMany(texts)', value: 'c' },
                        { text: 'embeddingModel.generateAll(texts)', value: 'd' }
                    ],
                    correct: 'a',
                    explanation: 'The <code>.embedAll()</code> method generates embeddings for multiple texts efficiently. It returns a struct with an array of embeddings and token usage information.'
                },
                {
                    question: 'Which function creates an MCP client to connect to MCP servers?',
                    type: 'single',
                    answers: [
                        { text: 'createMCPClient()', value: 'a' },
                        { text: 'getMCPClient()', value: 'b' },
                        { text: 'newMCPClient()', value: 'c' },
                        { text: 'initMCPClient()', value: 'd' }
                    ],
                    correct: 'a',
                    explanation: 'The <code>createMCPClient()</code> function creates an MCP client to connect to MCP servers. It returns an array of clients (one per server configuration).'
                },
                {
                    question: 'What MCP client methods are available? (Select all that apply)',
                    type: 'multiple',
                    answers: [
                        { text: 'listTools()', value: 'tools' },
                        { text: 'callTool(name, params)', value: 'call' },
                        { text: 'listResources()', value: 'resources' },
                        { text: 'readResource(uri)', value: 'read' }
                    ],
                    correct: ['tools', 'call', 'resources', 'read'],
                    explanation: 'MCP clients provide methods for tools (listTools, callTool), resources (listResources, readResource), and prompts (listPrompts, getPrompt).'
                },
                {
                    question: 'What does RAG stand for in the context of AI workflows?',
                    type: 'single',
                    answers: [
                        { text: 'Retrieval Augmented Generation', value: 'a' },
                        { text: 'Response Augmented Generation', value: 'b' },
                        { text: 'Retrieval Automated Generation', value: 'c' },
                        { text: 'Response Automated Generation', value: 'd' }
                    ],
                    correct: 'a',
                    explanation: 'RAG stands for Retrieval Augmented Generation. It combines vector store retrieval with AI generation to provide context-aware responses by including relevant documents in the AI prompt.'
                },
                {
                    question: 'What are the typical steps in a RAG workflow? (Select all that apply)',
                    type: 'multiple',
                    answers: [
                        { text: 'Create chat model and AI service', value: 'step1' },
                        { text: 'Search vector store for relevant context', value: 'step2' },
                        { text: 'Build context string from results', value: 'step3' },
                        { text: 'Generate response with context', value: 'step4' }
                    ],
                    correct: ['step1', 'step2', 'step3', 'step4'],
                    explanation: 'A complete RAG workflow involves: 1) Creating the AI service, 2) Searching the vector store, 3) Building a context string, and 4) Generating a response that includes the retrieved context.'
                },
                {
                    question: 'Which ColdFusion version is required for AI features?',
                    type: 'single',
                    answers: [
                        { text: 'ColdFusion 2021', value: 'a' },
                        { text: 'ColdFusion 2023', value: 'b' },
                        { text: 'ColdFusion 2025 with feature update', value: 'c' },
                        { text: 'ColdFusion 2026', value: 'd' }
                    ],
                    correct: 'c',
                    explanation: 'AI features require ColdFusion 2025 with the AI feature update installed. These features are not available in earlier versions.'
                },
                {
                    question: 'What security best practices should be followed when using AI features? (Select all that apply)',
                    type: 'multiple',
                    answers: [
                        { text: 'Validate and sanitize all user inputs', value: 'validate' },
                        { text: 'Never hardcode API keys', value: 'keys' },
                        { text: 'Implement rate limiting', value: 'rate' },
                        { text: 'Log all AI interactions', value: 'log' }
                    ],
                    correct: ['validate', 'keys', 'rate', 'log'],
                    explanation: 'Security best practices include: prompt injection prevention through validation, secure API key storage, rate limiting to prevent abuse, and audit logging for compliance.'
                }
            ]
        }
    };
    
    return quizzes[moduleId] ?? null;
};

// Make functions available globally
window.startQuiz = startQuiz;
window.submitQuiz = submitQuiz;
window.resetQuiz = resetQuiz;

