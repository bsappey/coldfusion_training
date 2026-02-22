# Extracted Functions Summary from PDFs

## AI Models Functions

### getChatModel(config)
**Purpose**: Creates a configured chat LLM instance  
**Returns**: Chat model object with `.chat()` method  
**Syntax (Script)**:
```cfscript
chatConfig = {
    PROVIDER: "openAi",
    APIKEY: "#application.apiKey#",
    MODELNAME: "gpt-4o-mini",
    TEMPERATURE: 0.7
};
chatModel = getChatModel(chatConfig);
```
**Key Parameters**:
- provider (required): "openai", "azureOpenAI", "mistral", "ollama"
- apiKey (required for cloud): API key
- modelName (required): Model identifier
- temperature (optional): 0.7 default
- maxTokens (optional): 2048 default
- timeout (optional): 10 default

### chatModel.chat(message)
**Purpose**: Sends prompts to the LLM  
**Returns**: Struct with `message` and `metadata`  
**Syntax (Script)**:
```cfscript
// Plain string
response = chatModel.chat("Explain quantum computing in one sentence.");
writeOutput(response.message);

// Structured request
chatRequest = {
    systemMessage: "You are a code converter.",
    userMessage: { message: "Convert 'console.log(x)' to ColdFusion." }
};
response = chatModel.chat(chatRequest);
```

### getAIService(config)
**Purpose**: Turns stateless chat model into full conversational AI service  
**Returns**: AI service object with memory, tools, and persona management  
**Syntax (Script)**:
```cfscript
aiServiceConfig = {
    chatModel: chatModel,
    tools: [/* CFC methods or MCP clients */],
    systemMessage: "You are a helpful assistant."
};
aiService = getAIService(aiServiceConfig);
```
**Methods**:
- `aiService.chat(message)` - Send message with memory
- `aiService.chat(message, userId)` - Scoped to user
- `aiService.chat(chatRequestStruct)` - Explicit system/user messages
- `aiService.systemMessage(message)` - Set system persona

---

## Vector Store Functions

### GetVectorStoreClient(config)
**Purpose**: Creates a vector store client for all data operations  
**Returns**: VectorStoreClient object  
**Syntax (Script)**:
```cfscript
// In-memory (for testing)
client = GetVectorStoreClient();

// With provider
vs = GetVectorStoreClient({
    provider: "milvus",
    url: "https://127.0.0.1:19530",
    apiKey: "YOUR_API_KEY",
    collectionName: "cf_intro",
    dimension: 384,
    metricType: "COSINE",
    indexType: "HNSW",
    embeddingModel: "text-embedding-3-small"
});
```
**Key Parameters**:
- provider: "inmemory", "milvus", "pinecone", "qdrant", "chroma"
- dimension (required): Vector dimension
- metricType: "COSINE", "EUCLIDEAN", "DOTPRODUCT"
- embeddingModel: Auto-generate embeddings from text

### client.add(item)
**Purpose**: Add single item to vector store  
**Returns**: Item ID (string)  
**Syntax (Script)**:
```cfscript
id = vs.add({
    text: "ColdFusion supports semantic search with vector stores.",
    metadata: { category: "intro", language: "en" }
});
```

### client.addAll(items)
**Purpose**: Batch add multiple items  
**Returns**: Array of item IDs  
**Syntax (Script)**:
```cfscript
docs = [
    { id: "1", text: "Document 1", metadata: { category: "tech" } },
    { id: "2", text: "Document 2", metadata: { category: "data" } }
];
addedIds = client.addAll(docs);
```

### client.search(query)
**Purpose**: Perform similarity search  
**Returns**: Array of matching items with scores  
**Syntax (Script)**:
```cfscript
// Text-based search (uses embedding model)
results = client.search({
    text: "ColdFusion vector stores",
    topK: 5,
    minScore: 0.7
});

// Vector-based search
results = client.search({
    vector: [0.1, 0.2, 0.3],
    topK: 5,
    minScore: 0.0,
    filter: {
        and: [
            { category: { eq: "tech" } },
            { year: { gte: 2025 } }
        ]
    }
});
```

### client.deleteAll(ids/filter)
**Purpose**: Delete items by IDs, filter, or all  
**Returns**: Void  
**Syntax (Script)**:
```cfscript
// Delete by IDs
client.deleteAll(["id1", "id2"]);

// Delete by filter
client.deleteAll({ status: "deprecated" });

// Delete all
client.deleteAll();
```

### client.listCollections()
**Purpose**: List all collection names  
**Returns**: Array of strings  
**Syntax (Script)**:
```cfscript
collections = client.listCollections();
```

### client.deleteCollection(collectionName)
**Purpose**: Delete a collection  
**Returns**: Void  
**Syntax (Script)**:
```cfscript
client.deleteCollection("collection-name");
```

---

## Embedding Functions

### GetEmbeddingModel(config)
**Purpose**: Creates an embedding model client  
**Returns**: EmbeddingModel object  
**Syntax (Script)**:
```cfscript
embedConfig = {
    provider: "openai",
    apiKey: "YOUR_OPENAI_API_KEY",
    modelName: "text-embedding-3-small",
    dimension: 1536
};
embeddingModel = GetEmbeddingModel(embedConfig);
```

### embeddingModel.embed(text)
**Purpose**: Generate embedding for single text  
**Returns**: Struct with `embeddings` (array), `tokenUsage`, `finishReason`, `metadata`  
**Syntax (Script)**:
```cfscript
result = embeddingModel.embed("ColdFusion integrates AI models.");
vector = result.embeddings; // Array of numbers
```

### embeddingModel.embedAll(texts)
**Purpose**: Batch generate embeddings  
**Returns**: Struct with `embeddings` (array of arrays), `tokenUsage`, etc.  
**Syntax (Script)**:
```cfscript
texts = ["Text 1", "Text 2", "Text 3"];
batchResult = embeddingModel.embedAll(texts);
// batchResult.embeddings is array of vectors
```

---

## MCP Functions

### createMCPClient(configData)
**Purpose**: Creates MCP client to connect to MCP servers  
**Returns**: Array of MCP client objects  
**Syntax (Script)**:
```cfscript
configData = {
    transport: {
        type: "http",
        url: "http://127.0.0.1:8500/mcp/server.cfm"
    },
    clientInfo: {
        name: "my-coldfusion-client",
        version: "1.0.0"
    },
    capabilities: {
        sampling: true,
        roots: true,
        elicitation: true
    },
    initializationTimeout: 10,
    requestTimeout: 30
};
mcpClients = createMCPClient(configData);
mcpClient = mcpClients[1]; // First client
```

### mcpClient.listTools()
**Purpose**: List available tools from MCP server  
**Returns**: Array of tool definitions  
**Syntax (Script)**:
```cfscript
tools = mcpClient.listTools();
```

### mcpClient.callTool(toolName, params)
**Purpose**: Call a tool on the MCP server  
**Returns**: Tool execution result  
**Syntax (Script)**:
```cfscript
result = mcpClient.callTool("get_weather", { location: "New York" });
```

### mcpClient.listResources()
**Purpose**: List available resources  
**Returns**: Array of resource definitions  
**Syntax (Script)**:
```cfscript
resources = mcpClient.listResources();
```

### mcpClient.readResource(uri)
**Purpose**: Read a resource by URI  
**Returns**: Resource content struct  
**Syntax (Script)**:
```cfscript
resData = mcpClient.readResource("file:///logs/app.log");
```

### mcpClient.listPrompts()
**Purpose**: List available prompts  
**Returns**: Array of prompt definitions  
**Syntax (Script)**:
```cfscript
prompts = mcpClient.listPrompts();
```

### mcpClient.getPrompt(params)
**Purpose**: Get a prompt template with arguments  
**Returns**: Prompt definition struct  
**Syntax (Script)**:
```cfscript
promptDef = mcpClient.getPrompt({
    name: "explain-code",
    arguments: {
        code: "<cfquery ...>",
        language: "coldfusion"
    }
});
```

### mcpClient.addRoot(uri, name)
**Purpose**: Add a root for resource scoping  
**Returns**: Void  
**Syntax (Script)**:
```cfscript
mcpClient.addRoot("file:///home/user/testcases", "Test Cases");
```

### mcpClient.getRoot(uri)
**Purpose**: Get root by URI  
**Returns**: Root struct  
**Syntax (Script)**:
```cfscript
root = mcpClient.getRoot("file:///home/user/testcases");
```

### mcpClient.listRoots()
**Purpose**: List all roots  
**Returns**: Struct with roots array  
**Syntax (Script)**:
```cfscript
roots = mcpClient.listRoots();
```

### mcpClient.removeRoot(uri)
**Purpose**: Remove a root  
**Returns**: Void  
**Syntax (Script)**:
```cfscript
mcpClient.removeRoot("file:///home/user/testcases");
```

### createMCPServer(config)
**Purpose**: Creates an MCP server to expose ColdFusion capabilities  
**Returns**: MCP server object  
**Syntax (Script)**:
```cfscript
serverConfig = {
    serverInfo: {
        name: "my-cf-server",
        version: "1.0.0"
    },
    tools: [/* tool definitions */],
    prompts: [/* prompt definitions */],
    resources: [/* resource definitions */]
};
mcpServer = createMCPServer(serverConfig);
```

---

## Function Categories Summary

### AI Model Functions
1. `getChatModel(config)` - Create chat model
2. `chatModel.chat(message)` - Send prompts
3. `getAIService(config)` - Create AI service
4. `aiService.chat(message, userId)` - Chat with memory
5. `aiService.systemMessage(message)` - Set persona

### Vector Store Functions
1. `GetVectorStoreClient(config)` - Create client
2. `client.add(item)` - Add single item
3. `client.addAll(items)` - Batch add
4. `client.search(query)` - Similarity search
5. `client.deleteAll(ids/filter)` - Delete items
6. `client.listCollections()` - List collections
7. `client.deleteCollection(name)` - Delete collection

### Embedding Functions
1. `GetEmbeddingModel(config)` - Create embedding model
2. `embeddingModel.embed(text)` - Single embedding
3. `embeddingModel.embedAll(texts)` - Batch embeddings

### MCP Client Functions
1. `createMCPClient(config)` - Create client
2. `mcpClient.listTools()` - List tools
3. `mcpClient.callTool(name, params)` - Call tool
4. `mcpClient.listResources()` - List resources
5. `mcpClient.readResource(uri)` - Read resource
6. `mcpClient.listPrompts()` - List prompts
7. `mcpClient.getPrompt(params)` - Get prompt
8. `mcpClient.addRoot(uri, name)` - Add root
9. `mcpClient.getRoot(uri)` - Get root
10. `mcpClient.listRoots()` - List roots
11. `mcpClient.removeRoot(uri)` - Remove root

### MCP Server Functions
1. `createMCPServer(config)` - Create server

---

## Next Steps

Now that we have all the function names and syntax, I can:
1. Update Module 13 with actual functions
2. Replace placeholder code with real syntax
3. Create code sample files
4. Update function reference
