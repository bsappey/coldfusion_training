/**
 * ColdFusion Functions Reference
 * Structured documentation for AI agent consumption
 * 
 * This file provides structured data about ColdFusion functions,
 * their syntax, parameters, return types, and usage patterns.
 */

/**
 * Get function reference data
 * @returns {Object} Complete functions reference
 */
function getFunctionsReference() {
    return {
        // String Functions
        string: {
            Len: {
                description: 'Returns the length of a string',
                syntax: {
                    tag: '<cfset result = Len(string)>',
                    script: 'result = Len(string);'
                },
                parameters: [
                    {
                        name: 'string',
                        type: 'string',
                        required: true,
                        description: 'The string to measure'
                    }
                ],
                returnType: 'numeric',
                versions: ['2021', '2023', '2025'],
                examples: [
                    {
                        code: { tag: '<cfset length = Len("Hello")>', script: 'length = Len("Hello");' },
                        result: '5',
                        description: 'Returns the length of the string'
                    }
                ],
                relatedFunctions: ['Len', 'Left', 'Right', 'Mid'],
                complexity: 'basic',
                security: 'none'
            },
            UCase: {
                description: 'Converts a string to uppercase',
                syntax: {
                    tag: '<cfset result = UCase(string)>',
                    script: 'result = UCase(string);'
                },
                parameters: [
                    {
                        name: 'string',
                        type: 'string',
                        required: true,
                        description: 'The string to convert'
                    }
                ],
                returnType: 'string',
                versions: ['2021', '2023', '2025'],
                examples: [
                    {
                        code: { tag: '<cfset upper = UCase("hello")>', script: 'upper = UCase("hello");' },
                        result: 'HELLO',
                        description: 'Converts string to uppercase'
                    }
                ],
                relatedFunctions: ['LCase', 'UCase', 'Trim'],
                complexity: 'basic',
                security: 'none'
            },
            Trim: {
                description: 'Removes leading and trailing whitespace from a string',
                syntax: {
                    tag: '<cfset result = Trim(string)>',
                    script: 'result = Trim(string);'
                },
                parameters: [
                    {
                        name: 'string',
                        type: 'string',
                        required: true,
                        description: 'The string to trim'
                    }
                ],
                returnType: 'string',
                versions: ['2021', '2023', '2025'],
                examples: [
                    {
                        code: { tag: '<cfset trimmed = Trim("  hello  ")>', script: 'trimmed = Trim("  hello  ");' },
                        result: 'hello',
                        description: 'Removes leading and trailing spaces'
                    }
                ],
                relatedFunctions: ['LTrim', 'RTrim', 'Trim'],
                complexity: 'basic',
                security: 'low',
                notes: 'Use for input validation to prevent whitespace issues'
            }
        },
        
        // Array Functions
        array: {
            ArrayLen: {
                description: 'Returns the length of an array',
                syntax: {
                    tag: '<cfset length = ArrayLen(array)>',
                    script: 'length = ArrayLen(array);'
                },
                parameters: [
                    {
                        name: 'array',
                        type: 'array',
                        required: true,
                        description: 'The array to measure'
                    }
                ],
                returnType: 'numeric',
                versions: ['2021', '2023', '2025'],
                examples: [
                    {
                        code: { tag: '<cfset arr = [1, 2, 3]><cfset len = ArrayLen(arr)>', script: 'arr = [1, 2, 3];\nlen = ArrayLen(arr);' },
                        result: '3',
                        description: 'Returns the number of elements in the array'
                    }
                ],
                relatedFunctions: ['ArrayLen', 'ArrayAppend', 'ArrayPrepend'],
                complexity: 'basic',
                security: 'none'
            },
            ArrayAppend: {
                description: 'Appends an element to the end of an array',
                syntax: {
                    tag: '<cfset ArrayAppend(array, value)>',
                    script: 'ArrayAppend(array, value);'
                },
                parameters: [
                    {
                        name: 'array',
                        type: 'array',
                        required: true,
                        description: 'The array to modify'
                    },
                    {
                        name: 'value',
                        type: 'any',
                        required: true,
                        description: 'The value to append'
                    }
                ],
                returnType: 'boolean',
                versions: ['2021', '2023', '2025'],
                examples: [
                    {
                        code: { tag: '<cfset arr = [1, 2]><cfset ArrayAppend(arr, 3)>', script: 'arr = [1, 2];\nArrayAppend(arr, 3);' },
                        result: '[1, 2, 3]',
                        description: 'Adds element to end of array'
                    }
                ],
                relatedFunctions: ['ArrayAppend', 'ArrayPrepend', 'ArrayInsertAt'],
                complexity: 'basic',
                security: 'none'
            }
        },
        
        // Struct Functions
        struct: {
            StructKeyExists: {
                description: 'Checks if a key exists in a structure',
                syntax: {
                    tag: '<cfif StructKeyExists(struct, "key")>',
                    script: 'if (StructKeyExists(struct, "key")) { }'
                },
                parameters: [
                    {
                        name: 'struct',
                        type: 'struct',
                        required: true,
                        description: 'The structure to check'
                    },
                    {
                        name: 'key',
                        type: 'string',
                        required: true,
                        description: 'The key to check for'
                    }
                ],
                returnType: 'boolean',
                versions: ['2021', '2023', '2025'],
                examples: [
                    {
                        code: { tag: '<cfset person = {name: "John"}><cfif StructKeyExists(person, "name")>', script: 'person = {name: "John"};\nif (StructKeyExists(person, "name")) { }' },
                        result: 'true',
                        description: 'Checks if key exists before accessing'
                    }
                ],
                relatedFunctions: ['StructKeyExists', 'StructKeyList', 'StructCount'],
                complexity: 'basic',
                security: 'low',
                notes: 'Always use before accessing struct keys to prevent errors'
            }
        },
        
        // Date Functions
        date: {
            Now: {
                description: 'Returns the current date and time',
                syntax: {
                    tag: '<cfset currentTime = Now()>',
                    script: 'currentTime = Now();'
                },
                parameters: [],
                returnType: 'datetime',
                versions: ['2021', '2023', '2025'],
                examples: [
                    {
                        code: { tag: '<cfset now = Now()>', script: 'now = Now();' },
                        result: '2025-01-15 10:30:00',
                        description: 'Gets current date and time'
                    }
                ],
                relatedFunctions: ['Now', 'DateAdd', 'DateDiff', 'DateFormat'],
                complexity: 'basic',
                security: 'none'
            },
            DateFormat: {
                description: 'Formats a date according to a specified format',
                syntax: {
                    tag: '<cfset formatted = DateFormat(date, "mask")>',
                    script: 'formatted = DateFormat(date, "mask");'
                },
                parameters: [
                    {
                        name: 'date',
                        type: 'datetime',
                        required: true,
                        description: 'The date to format'
                    },
                    {
                        name: 'mask',
                        type: 'string',
                        required: false,
                        description: 'Format mask (e.g., "mm/dd/yyyy")'
                    }
                ],
                returnType: 'string',
                versions: ['2021', '2023', '2025'],
                examples: [
                    {
                        code: { tag: '<cfset formatted = DateFormat(Now(), "mm/dd/yyyy")>', script: 'formatted = DateFormat(Now(), "mm/dd/yyyy");' },
                        result: '01/15/2025',
                        description: 'Formats date with mask'
                    }
                ],
                relatedFunctions: ['DateFormat', 'TimeFormat', 'DateAdd'],
                complexity: 'basic',
                security: 'none'
            }
        },
        
        // Query Functions
        query: {
            QueryNew: {
                description: 'Creates a new query object',
                syntax: {
                    tag: '<cfset qry = QueryNew("column1,column2")>',
                    script: 'qry = QueryNew("column1,column2");'
                },
                parameters: [
                    {
                        name: 'columnList',
                        type: 'string',
                        required: true,
                        description: 'Comma-separated list of column names'
                    }
                ],
                returnType: 'query',
                versions: ['2021', '2023', '2025'],
                examples: [
                    {
                        code: { tag: '<cfset qry = QueryNew("name,age")>', script: 'qry = QueryNew("name,age");' },
                        result: 'Empty query with name and age columns',
                        description: 'Creates empty query structure'
                    }
                ],
                relatedFunctions: ['QueryNew', 'QueryAddRow', 'QuerySetCell'],
                complexity: 'intermediate',
                security: 'none'
            }
        },
        
        // Validation Functions
        validation: {
            IsNumeric: {
                description: 'Checks if a value is numeric',
                syntax: {
                    tag: '<cfif IsNumeric(value)>',
                    script: 'if (IsNumeric(value)) { }'
                },
                parameters: [
                    {
                        name: 'value',
                        type: 'any',
                        required: true,
                        description: 'The value to check'
                    }
                ],
                returnType: 'boolean',
                versions: ['2021', '2023', '2025'],
                examples: [
                    {
                        code: { tag: '<cfif IsNumeric("123")>', script: 'if (IsNumeric("123")) { }' },
                        result: 'true',
                        description: 'Validates numeric input'
                    }
                ],
                relatedFunctions: ['IsNumeric', 'IsString', 'IsDate', 'IsBoolean'],
                complexity: 'basic',
                security: 'medium',
                notes: 'Critical for input validation to prevent injection attacks'
            },
            IsValid: {
                description: 'Validates a value against a type or format',
                syntax: {
                    tag: '<cfif IsValid("type", value)>',
                    script: 'if (IsValid("type", value)) { }'
                },
                parameters: [
                    {
                        name: 'type',
                        type: 'string',
                        required: true,
                        description: 'Type to validate against (e.g., "email", "url", "numeric")'
                    },
                    {
                        name: 'value',
                        type: 'any',
                        required: true,
                        description: 'The value to validate'
                    }
                ],
                returnType: 'boolean',
                versions: ['2021', '2023', '2025'],
                examples: [
                    {
                        code: { tag: '<cfif IsValid("email", emailAddress)>', script: 'if (IsValid("email", emailAddress)) { }' },
                        result: 'true/false',
                        description: 'Validates email format'
                    }
                ],
                relatedFunctions: ['IsValid', 'IsNumeric', 'IsString'],
                complexity: 'intermediate',
                security: 'high',
                notes: 'Essential for security - always validate user input'
            }
        },
        
        // AI Functions (ColdFusion 2025 Feature Update)
        ai: {
            getChatModel: {
                description: 'Creates a configured chat LLM instance for interacting with large language models',
                syntax: {
                    tag: '<cfset chatModel = getChatModel(chatConfig)>',
                    script: 'chatModel = getChatModel(chatConfig);'
                },
                parameters: [
                    {
                        name: 'chatConfig',
                        type: 'struct',
                        required: true,
                        description: 'Configuration struct with PROVIDER, APIKEY, MODELNAME, TEMPERATURE, etc.'
                    }
                ],
                returnType: 'object',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset chatConfig = {PROVIDER: "openAi", APIKEY: application.apiKey, MODELNAME: "gpt-4o-mini"}>\n<cfset chatModel = getChatModel(chatConfig)>',
                            script: 'chatConfig = {PROVIDER: "openAi", APIKEY: application.apiKey, MODELNAME: "gpt-4o-mini"};\nchatModel = getChatModel(chatConfig);'
                        },
                        result: 'Chat model object',
                        description: 'Creates a chat model instance'
                    }
                ],
                relatedFunctions: ['getAIService'],
                complexity: 'intermediate',
                security: 'high',
                notes: 'Requires API keys - store securely. CF 2025 Feature Update required.'
            },
            getAIService: {
                description: 'Turns a stateless chat model into a full conversational AI service with memory, persona, and tool calling',
                syntax: {
                    tag: '<cfset aiService = getAIService(aiServiceConfig)>',
                    script: 'aiService = getAIService(aiServiceConfig);'
                },
                parameters: [
                    {
                        name: 'aiServiceConfig',
                        type: 'struct',
                        required: true,
                        description: 'Configuration struct with chatModel, systemMessage, chatMemory, tools, etc.'
                    }
                ],
                returnType: 'object',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset aiServiceConfig = {chatModel: chatModel, systemMessage: "You are a helpful assistant."}>\n<cfset aiService = getAIService(aiServiceConfig)>',
                            script: 'aiServiceConfig = {chatModel: chatModel, systemMessage: "You are a helpful assistant."};\naiService = getAIService(aiServiceConfig);'
                        },
                        result: 'AI service object',
                        description: 'Creates an AI service with memory and persona management'
                    }
                ],
                relatedFunctions: ['getChatModel'],
                complexity: 'advanced',
                security: 'high',
                notes: 'CF 2025 Feature Update required. Supports per-user memory scoping.'
            },
            GetVectorStoreClient: {
                description: 'Creates a unified vector store client for storing and searching embeddings',
                syntax: {
                    tag: '<cfset client = GetVectorStoreClient(config)>',
                    script: 'client = GetVectorStoreClient(config);'
                },
                parameters: [
                    {
                        name: 'config',
                        type: 'struct',
                        required: false,
                        description: 'Optional configuration struct with provider, url, apiKey, dimension, metricType, etc. If omitted, creates in-memory store.'
                    }
                ],
                returnType: 'object',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset client = GetVectorStoreClient()>',
                            script: 'client = GetVectorStoreClient();'
                        },
                        result: 'Vector store client object',
                        description: 'Creates in-memory vector store for testing'
                    }
                ],
                relatedFunctions: ['GetEmbeddingModel'],
                complexity: 'intermediate',
                security: 'medium',
                notes: 'CF 2025 Feature Update required. Supports in-memory, Milvus, Pinecone, Qdrant, Chroma.'
            },
            GetEmbeddingModel: {
                description: 'Initializes an embedding model client for generating vector representations of text',
                syntax: {
                    tag: '<cfset embeddingModel = GetEmbeddingModel(embedConfig)>',
                    script: 'embeddingModel = GetEmbeddingModel(embedConfig);'
                },
                parameters: [
                    {
                        name: 'embedConfig',
                        type: 'struct',
                        required: true,
                        description: 'Configuration struct with provider, apiKey, modelName, dimension, etc.'
                    }
                ],
                returnType: 'object',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset embedConfig = {provider: "openai", apiKey: application.apiKey, modelName: "text-embedding-3-small", dimension: 1536}>\n<cfset embeddingModel = GetEmbeddingModel(embedConfig)>',
                            script: 'embedConfig = {provider: "openai", apiKey: application.apiKey, modelName: "text-embedding-3-small", dimension: 1536};\nembeddingModel = GetEmbeddingModel(embedConfig);'
                        },
                        result: 'Embedding model object',
                        description: 'Creates embedding model for generating vectors'
                    }
                ],
                relatedFunctions: ['GetVectorStoreClient'],
                complexity: 'intermediate',
                security: 'high',
                notes: 'CF 2025 Feature Update required. Requires API keys for cloud providers.'
            },
            createMCPClient: {
                description: 'Creates an MCP client to connect to MCP servers and access tools, resources, and prompts',
                syntax: {
                    tag: '<cfset mcpClients = createMCPClient(configData)>',
                    script: 'mcpClients = createMCPClient(configData);'
                },
                parameters: [
                    {
                        name: 'configData',
                        type: 'struct',
                        required: true,
                        description: 'Configuration struct with transport, clientInfo, capabilities, etc.'
                    }
                ],
                returnType: 'array',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset configData = {transport: {type: "http", url: "http://127.0.0.1:8500/mcp/server.cfm"}, clientInfo: {name: "my-client", version: "1.0.0"}}>\n<cfset mcpClients = createMCPClient(configData)>',
                            script: 'configData = {transport: {type: "http", url: "http://127.0.0.1:8500/mcp/server.cfm"}, clientInfo: {name: "my-client", version: "1.0.0"}};\nmcpClients = createMCPClient(configData);'
                        },
                        result: 'Array of MCP client objects',
                        description: 'Creates MCP client(s) for connecting to MCP servers'
                    }
                ],
                relatedFunctions: ['createMCPServer'],
                complexity: 'advanced',
                security: 'high',
                notes: 'CF 2025 Feature Update required. Returns array (one client per server).'
            },
            createMCPServer: {
                description: 'Creates an MCP server to expose ColdFusion business logic, prompts, and resources',
                syntax: {
                    tag: '<cfset mcpServer = createMCPServer(configData)>',
                    script: 'mcpServer = createMCPServer(configData);'
                },
                parameters: [
                    {
                        name: 'configData',
                        type: 'struct',
                        required: true,
                        description: 'Configuration struct with serverInfo, capabilities, tools, prompts, resources, etc.'
                    }
                ],
                returnType: 'object',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset configData = {serverInfo: {name: "My Server", version: "1.0.0"}, capabilities: {tools: true, prompts: true}, tools: [{cfc: "mcp.tools.myTools"}]}>\n<cfset mcpServer = createMCPServer(configData)>',
                            script: 'configData = {serverInfo: {name: "My Server", version: "1.0.0"}, capabilities: {tools: true, prompts: true}, tools: [{cfc: "mcp.tools.myTools"}]};\nmcpServer = createMCPServer(configData);'
                        },
                        result: 'MCP server object',
                        description: 'Creates MCP server to expose CF capabilities'
                    }
                ],
                relatedFunctions: ['createMCPClient'],
                complexity: 'advanced',
                security: 'high',
                notes: 'CF 2025 Feature Update required. Usually created in onApplicationStart.'
            },
            // Chat Model Methods
            chatModel_chat: {
                description: 'Sends prompts to a chat model. Accepts plain string or structured chat request.',
                syntax: {
                    tag: '<cfset response = chatModel.chat(message)>',
                    script: 'response = chatModel.chat(message);'
                },
                parameters: [
                    {
                        name: 'message',
                        type: 'string|struct',
                        required: true,
                        description: 'Plain string prompt or struct with systemMessage and userMessage'
                    }
                ],
                returnType: 'struct',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset response = chatModel.chat("Explain quantum computing.")>',
                            script: 'response = chatModel.chat("Explain quantum computing.");'
                        },
                        result: '{message: "...", metadata: {...}}',
                        description: 'Sends a simple text prompt'
                    }
                ],
                relatedFunctions: ['getChatModel'],
                complexity: 'intermediate',
                security: 'medium',
                notes: 'Returns struct with message and metadata. CF 2025 Feature Update required.'
            },
            // AI Service Methods
            aiService_chat: {
                description: 'Sends a message to AI service with optional user ID for memory scoping.',
                syntax: {
                    tag: '<cfset response = aiService.chat(message, userId)>',
                    script: 'response = aiService.chat(message, userId);'
                },
                parameters: [
                    {
                        name: 'message',
                        type: 'string|struct',
                        required: true,
                        description: 'Message string or chat request struct'
                    },
                    {
                        name: 'userId',
                        type: 'string',
                        required: false,
                        description: 'User ID for per-user memory scoping'
                    }
                ],
                returnType: 'struct',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset response = aiService.chat("What is the capital of Japan?", "user123")>',
                            script: 'response = aiService.chat("What is the capital of Japan?", "user123");'
                        },
                        result: '{message: "...", metadata: {...}}',
                        description: 'Chat with per-user memory'
                    }
                ],
                relatedFunctions: ['getAIService'],
                complexity: 'intermediate',
                security: 'medium',
                notes: 'CF 2025 Feature Update required. Memory is scoped to userId if provided.'
            },
            aiService_systemMessage: {
                description: 'Sets the system message (persona) for the AI service.',
                syntax: {
                    tag: '<cfset aiService.systemMessage(message)>',
                    script: 'aiService.systemMessage(message);'
                },
                parameters: [
                    {
                        name: 'message',
                        type: 'string',
                        required: true,
                        description: 'System message defining AI persona'
                    }
                ],
                returnType: 'void',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset aiService.systemMessage("You are a helpful ColdFusion assistant.")>',
                            script: 'aiService.systemMessage("You are a helpful ColdFusion assistant.");'
                        },
                        result: 'void',
                        description: 'Sets the AI persona'
                    }
                ],
                relatedFunctions: ['getAIService'],
                complexity: 'basic',
                security: 'low',
                notes: 'CF 2025 Feature Update required. Overrides default system message.'
            },
            // Vector Store Client Methods
            vectorStore_add: {
                description: 'Adds a single item to the vector store.',
                syntax: {
                    tag: '<cfset id = vs.add(item)>',
                    script: 'id = vs.add(item);'
                },
                parameters: [
                    {
                        name: 'item',
                        type: 'struct',
                        required: true,
                        description: 'Struct with text, vector (optional), metadata (optional), and id (optional)'
                    }
                ],
                returnType: 'string',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset id = vs.add({text: "Document text", metadata: {category: "tech"}})>',
                            script: 'id = vs.add({text: "Document text", metadata: {category: "tech"}});'
                        },
                        result: 'Item ID string',
                        description: 'Adds single document'
                    }
                ],
                relatedFunctions: ['GetVectorStoreClient', 'vectorStore_addAll'],
                complexity: 'intermediate',
                security: 'low',
                notes: 'CF 2025 Feature Update required. If embedding model configured, vector generated automatically.'
            },
            vectorStore_addAll: {
                description: 'Batch adds multiple items to the vector store.',
                syntax: {
                    tag: '<cfset ids = vs.addAll(items)>',
                    script: 'ids = vs.addAll(items);'
                },
                parameters: [
                    {
                        name: 'items',
                        type: 'array',
                        required: true,
                        description: 'Array of item structs'
                    }
                ],
                returnType: 'array',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset ids = vs.addAll([{text: "Doc 1"}, {text: "Doc 2"}])>',
                            script: 'ids = vs.addAll([{text: "Doc 1"}, {text: "Doc 2"}]);'
                        },
                        result: 'Array of item IDs',
                        description: 'Batch add documents'
                    }
                ],
                relatedFunctions: ['GetVectorStoreClient', 'vectorStore_add'],
                complexity: 'intermediate',
                security: 'low',
                notes: 'CF 2025 Feature Update required. More efficient than multiple add() calls.'
            },
            vectorStore_search: {
                description: 'Performs similarity search in the vector store.',
                syntax: {
                    tag: '<cfset results = vs.search(query)>',
                    script: 'results = vs.search(query);'
                },
                parameters: [
                    {
                        name: 'query',
                        type: 'struct',
                        required: true,
                        description: 'Query struct with text or vector, topK, minScore, and optional filter'
                    }
                ],
                returnType: 'array',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset results = vs.search({text: "query", topK: 5, minScore: 0.7})>',
                            script: 'results = vs.search({text: "query", topK: 5, minScore: 0.7});'
                        },
                        result: 'Array of matching items with scores',
                        description: 'Text-based similarity search'
                    }
                ],
                relatedFunctions: ['GetVectorStoreClient'],
                complexity: 'intermediate',
                security: 'low',
                notes: 'CF 2025 Feature Update required. Supports text (auto-embedded) or explicit vector queries.'
            },
            vectorStore_deleteAll: {
                description: 'Deletes items by IDs, filter, or all items.',
                syntax: {
                    tag: '<cfset vs.deleteAll(ids|filter)>',
                    script: 'vs.deleteAll(ids|filter);'
                },
                parameters: [
                    {
                        name: 'ids|filter',
                        type: 'array|struct|none',
                        required: false,
                        description: 'Array of IDs, filter struct, or omitted to delete all'
                    }
                ],
                returnType: 'void',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset vs.deleteAll({status: "deprecated"})>',
                            script: 'vs.deleteAll({status: "deprecated"});'
                        },
                        result: 'void',
                        description: 'Delete by metadata filter'
                    }
                ],
                relatedFunctions: ['GetVectorStoreClient'],
                complexity: 'intermediate',
                security: 'medium',
                notes: 'CF 2025 Feature Update required. Use with caution - can delete all data if no arguments provided.'
            },
            vectorStore_listCollections: {
                description: 'Lists all collection names in the vector store.',
                syntax: {
                    tag: '<cfset collections = vs.listCollections()>',
                    script: 'collections = vs.listCollections();'
                },
                parameters: [],
                returnType: 'array',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset collections = vs.listCollections()>',
                            script: 'collections = vs.listCollections();'
                        },
                        result: 'Array of collection name strings',
                        description: 'List all collections'
                    }
                ],
                relatedFunctions: ['GetVectorStoreClient'],
                complexity: 'basic',
                security: 'low',
                notes: 'CF 2025 Feature Update required.'
            },
            vectorStore_deleteCollection: {
                description: 'Deletes a collection and all its data.',
                syntax: {
                    tag: '<cfset vs.deleteCollection(collectionName)>',
                    script: 'vs.deleteCollection(collectionName);'
                },
                parameters: [
                    {
                        name: 'collectionName',
                        type: 'string',
                        required: true,
                        description: 'Name of collection to delete'
                    }
                ],
                returnType: 'void',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset vs.deleteCollection("old-collection")>',
                            script: 'vs.deleteCollection("old-collection");'
                        },
                        result: 'void',
                        description: 'Delete a collection'
                    }
                ],
                relatedFunctions: ['GetVectorStoreClient'],
                complexity: 'intermediate',
                security: 'high',
                notes: 'CF 2025 Feature Update required. Permanent operation - use with caution.'
            },
            // Embedding Model Methods
            embeddingModel_embed: {
                description: 'Generates an embedding vector for a single text input.',
                syntax: {
                    tag: '<cfset result = embeddingModel.embed(text)>',
                    script: 'result = embeddingModel.embed(text);'
                },
                parameters: [
                    {
                        name: 'text',
                        type: 'string',
                        required: true,
                        description: 'Input text to embed'
                    }
                ],
                returnType: 'struct',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset result = embeddingModel.embed("Text to embed")>',
                            script: 'result = embeddingModel.embed("Text to embed");'
                        },
                        result: '{embeddings: [...], tokenUsage: {...}, ...}',
                        description: 'Generate single embedding'
                    }
                ],
                relatedFunctions: ['GetEmbeddingModel', 'embeddingModel_embedAll'],
                complexity: 'intermediate',
                security: 'low',
                notes: 'CF 2025 Feature Update required. Returns struct with embeddings array and metadata.'
            },
            embeddingModel_embedAll: {
                description: 'Generates embeddings for multiple texts in batch.',
                syntax: {
                    tag: '<cfset result = embeddingModel.embedAll(texts)>',
                    script: 'result = embeddingModel.embedAll(texts);'
                },
                parameters: [
                    {
                        name: 'texts',
                        type: 'array',
                        required: true,
                        description: 'Array of text strings to embed'
                    }
                ],
                returnType: 'struct',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset result = embeddingModel.embedAll(["Text 1", "Text 2"])>',
                            script: 'result = embeddingModel.embedAll(["Text 1", "Text 2"]);'
                        },
                        result: '{embeddings: [[...], [...]], tokenUsage: {...}, ...}',
                        description: 'Batch generate embeddings'
                    }
                ],
                relatedFunctions: ['GetEmbeddingModel', 'embeddingModel_embed'],
                complexity: 'intermediate',
                security: 'low',
                notes: 'CF 2025 Feature Update required. More efficient than multiple embed() calls.'
            },
            // MCP Client Methods
            mcpClient_listTools: {
                description: 'Lists available tools from the MCP server.',
                syntax: {
                    tag: '<cfset tools = mcpClient.listTools()>',
                    script: 'tools = mcpClient.listTools();'
                },
                parameters: [],
                returnType: 'array',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset tools = mcpClient.listTools()>',
                            script: 'tools = mcpClient.listTools();'
                        },
                        result: 'Array of tool definitions',
                        description: 'List available tools'
                    }
                ],
                relatedFunctions: ['createMCPClient'],
                complexity: 'basic',
                security: 'low',
                notes: 'CF 2025 Feature Update required.'
            },
            mcpClient_callTool: {
                description: 'Calls a tool on the MCP server.',
                syntax: {
                    tag: '<cfset result = mcpClient.callTool(toolName, params)>',
                    script: 'result = mcpClient.callTool(toolName, params);'
                },
                parameters: [
                    {
                        name: 'toolName',
                        type: 'string',
                        required: true,
                        description: 'Name of the tool to call'
                    },
                    {
                        name: 'params',
                        type: 'struct',
                        required: true,
                        description: 'Tool parameters'
                    }
                ],
                returnType: 'any',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset result = mcpClient.callTool("get_weather", {location: "NYC"})>',
                            script: 'result = mcpClient.callTool("get_weather", {location: "NYC"});'
                        },
                        result: 'Tool execution result',
                        description: 'Call a tool'
                    }
                ],
                relatedFunctions: ['createMCPClient'],
                complexity: 'intermediate',
                security: 'medium',
                notes: 'CF 2025 Feature Update required. Validate tool names and parameters.'
            },
            mcpClient_listResources: {
                description: 'Lists available resources from the MCP server.',
                syntax: {
                    tag: '<cfset resources = mcpClient.listResources()>',
                    script: 'resources = mcpClient.listResources();'
                },
                parameters: [],
                returnType: 'array',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset resources = mcpClient.listResources()>',
                            script: 'resources = mcpClient.listResources();'
                        },
                        result: 'Array of resource definitions',
                        description: 'List available resources'
                    }
                ],
                relatedFunctions: ['createMCPClient'],
                complexity: 'basic',
                security: 'low',
                notes: 'CF 2025 Feature Update required.'
            },
            mcpClient_readResource: {
                description: 'Reads a resource by URI from the MCP server.',
                syntax: {
                    tag: '<cfset resData = mcpClient.readResource(uri)>',
                    script: 'resData = mcpClient.readResource(uri);'
                },
                parameters: [
                    {
                        name: 'uri',
                        type: 'string',
                        required: true,
                        description: 'Resource URI'
                    }
                ],
                returnType: 'struct',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset resData = mcpClient.readResource("file:///logs/app.log")>',
                            script: 'resData = mcpClient.readResource("file:///logs/app.log");'
                        },
                        result: 'Resource content struct',
                        description: 'Read a resource'
                    }
                ],
                relatedFunctions: ['createMCPClient'],
                complexity: 'intermediate',
                security: 'medium',
                notes: 'CF 2025 Feature Update required. Validate URIs before reading.'
            },
            mcpClient_listPrompts: {
                description: 'Lists available prompts from the MCP server.',
                syntax: {
                    tag: '<cfset prompts = mcpClient.listPrompts()>',
                    script: 'prompts = mcpClient.listPrompts();'
                },
                parameters: [],
                returnType: 'array',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset prompts = mcpClient.listPrompts()>',
                            script: 'prompts = mcpClient.listPrompts();'
                        },
                        result: 'Array of prompt definitions',
                        description: 'List available prompts'
                    }
                ],
                relatedFunctions: ['createMCPClient'],
                complexity: 'basic',
                security: 'low',
                notes: 'CF 2025 Feature Update required.'
            },
            mcpClient_getPrompt: {
                description: 'Gets a prompt template with arguments from the MCP server.',
                syntax: {
                    tag: '<cfset promptDef = mcpClient.getPrompt(params)>',
                    script: 'promptDef = mcpClient.getPrompt(params);'
                },
                parameters: [
                    {
                        name: 'params',
                        type: 'struct',
                        required: true,
                        description: 'Struct with name and arguments'
                    }
                ],
                returnType: 'struct',
                versions: ['2025'],
                examples: [
                    {
                        code: {
                            tag: '<cfset promptDef = mcpClient.getPrompt({name: "explain-code", arguments: {code: "..."}})>',
                            script: 'promptDef = mcpClient.getPrompt({name: "explain-code", arguments: {code: "..."}});'
                        },
                        result: 'Prompt definition struct',
                        description: 'Get a prompt template'
                    }
                ],
                relatedFunctions: ['createMCPClient'],
                complexity: 'intermediate',
                security: 'low',
                notes: 'CF 2025 Feature Update required.'
            }
        }
    };
}

/**
 * Get function by name
 * @param {string} functionName - Name of the function
 * @returns {Object|null} Function reference or null if not found
 */
function getFunctionByName(functionName) {
    const ref = getFunctionsReference();
    
    // Search through all categories
    for (const category in ref) {
        if (ref[category][functionName]) {
            return ref[category][functionName];
        }
    }
    
    return null;
}

/**
 * Get functions by version
 * @param {string} version - ColdFusion version (e.g., '2021', '2023', '2025')
 * @returns {Array} Array of functions available in that version
 */
function getFunctionsByVersion(version) {
    const ref = getFunctionsReference();
    const functions = [];
    
    for (const category in ref) {
        for (const funcName in ref[category]) {
            const func = ref[category][funcName];
            if (func.versions && func.versions.includes(version)) {
                functions.push({
                    name: funcName,
                    category: category,
                    ...func
                });
            }
        }
    }
    
    return functions;
}

// Make functions available globally
if (typeof window !== 'undefined') {
    window.getFunctionsReference = getFunctionsReference;
    window.getFunctionByName = getFunctionByName;
    window.getFunctionsByVersion = getFunctionsByVersion;
}
