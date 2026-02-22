# Module 13: AI & Intelligent Features - Final Structure

## Overview

**Module Title**: AI & Intelligent Features  
**Subtitle**: MCP, AI Services, Embeddings, Vector Stores, and RAG Workflows  
**Version**: ColdFusion 2025 (Feature Update) - **Note**: These features are part of a feature update for CF 2025, not CF 2026  
**Time Estimates**:
- Junior: 10-12 hours
- Mid: 7-9 hours  
- Senior: 5-6 hours

## Structure: Three Parts

---

## Part I: AI Models & Services

### Lesson 1: Introduction to AI in ColdFusion 2025
**Time**: Junior 1.5h, Mid 1h, Senior 0.5h

**Sections**:
1. **Introduction**
   - Overview of AI capabilities in CF 2025 (feature update)
   - Architecture overview
   - Prerequisites and setup
   
2. **Key Concepts**
   - Model Context Protocol (MCP)
   - AI Services framework
   - Embeddings
   - Vector stores
   - RAG workflows
   
3. **Best Practices & Tips**
   - Security first approach
   - Cost management
   - Error handling
   - Data privacy
   
4. **Version-Specific Notes**
   - CF 2025 Feature Update requirements
   - API key configuration
   - Setup instructions
   - How to check if feature update is installed

**Source PDFs**: AI Models.pdf (intro sections)

---

### Lesson 2: AI Models Integration
**Time**: Junior 3h, Mid 2h, Senior 1.5h

**Sections**:
1. **AI Model Configuration**
   - Function: `[Extract from AI Models.pdf]`
   - Provider setup (OpenAI, Azure, etc.)
   - Model selection
   - Configuration options
   
2. **Text Generation**
   - Function: `[Extract from AI Models.pdf]`
   - Prompt engineering basics
   - Response handling
   - Parameters (temperature, max_tokens, etc.)
   
3. **Chat Completions**
   - Function: `[Extract from AI Models.pdf]`
   - Conversation management
   - Message history
   - Context handling
   
4. **Advanced Model Features**
   - Streaming responses
   - Function calling (if available)
   - Model parameters
   - Error handling

**Source PDFs**: AI Models.pdf

---

### Lesson 3: Model Context Protocol (MCP) Integration
**Time**: Junior 2h, Mid 1.5h, Senior 1h

**Sections**:
1. **MCP Overview**
   - What is MCP
   - MCP architecture
   - Use cases
   - Benefits
   
2. **MCP Server Connection**
   - Function: `[Extract from MCP Function Reference.pdf]`
   - Connection configuration
   - Authentication
   - Server setup
   
3. **MCP Tools**
   - Function: `[Extract from MCP Function Reference.pdf]`
   - Available tools
   - Tool invocation
   - Tool parameters
   
4. **MCP Resources**
   - Function: `[Extract from MCP Function Reference.pdf]`
   - Resource access
   - Resource types
   - Resource management
   
5. **MCP Prompts and Completions**
   - Function: `[Extract from MCP Function Reference.pdf]`
   - Prompt templates
   - Completion handling
   - Context management

**Source PDFs**: MCPs with ColdFusion.pdf, MCP Function Reference.pdf

---

## Part II: Embeddings & Vector Infrastructure

### Lesson 4: Creating Embeddings
**Time**: Junior 2h, Mid 1.5h, Senior 1h

**Sections**:
1. **Embedding Concepts**
   - What are embeddings
   - How embeddings work
   - Use cases
   - Dimensions and formats
   
2. **Creating Embeddings**
   - Function: `[Extract from AI Models.pdf]`
   - Text preprocessing
   - Model selection
   - Parameters
   
3. **Embedding Formats**
   - Understanding dimensions
   - Format conversion
   - Storage considerations
   
4. **Batch Embedding Operations**
   - Batch processing
   - Performance optimization
   - Error handling

**Source PDFs**: AI Models.pdf (embedding sections)

---

### Lesson 5: Vector Stores
**Time**: Junior 3h, Mid 2h, Senior 1.5h

**Sections**:
1. **Vector Store Concepts**
   - What are vector stores
   - Use cases for AI applications
   - Architecture overview
   - Storage backends
   
2. **Creating and Configuring Vector Stores**
   - Function: `[Extract from Vector Store Function Reference.pdf]`
   - Storage backend selection
   - Configuration options
   - Initialization
   
3. **Storing Embeddings**
   - Function: `[Extract from Vector Store Function Reference.pdf]`
   - Single embedding storage
   - Batch storage
   - Metadata handling
   - Indexing
   
4. **Similarity Search**
   - Function: `[Extract from Vector Store Function Reference.pdf]`
   - Search parameters
   - Result ranking
   - Performance optimization
   - Filtering
   
5. **Vector Store Management**
   - Update operations
   - Delete operations
   - Index management
   - Maintenance
   - Backup and restore

**Source PDFs**: Vector Stores.pdf, Vector Store Function Reference.pdf

---

## Part III: Advanced AI Workflows

### Lesson 6: RAG (Retrieval Augmented Generation) Workflows
**Time**: Junior 2h, Mid 1.5h, Senior 1h

**Sections**:
1. **RAG Concepts**
   - What is RAG
   - Why use RAG
   - RAG architecture
   - Use cases
   
2. **RAG Implementation Pattern**
   - Step 1: Create query embedding
   - Step 2: Search vector store
   - Step 3: Retrieve context
   - Step 4: Generate response with context
   - Complete workflow example
   
3. **Advanced RAG Patterns**
   - Multi-step retrieval
   - Re-ranking
   - Context window management
   - Chunking strategies
   
4. **RAG Optimization**
   - Performance tips
   - Cost optimization
   - Quality improvement
   - Error handling

**Source PDFs**: All PDFs (combines AI Models + Vector Stores + MCP)

---

### Lesson 7: AI Security and Best Practices
**Time**: Junior 1h, Mid 0.5h, Senior 0.5h

**Sections**:
1. **Security Best Practices**
   - Prompt injection prevention
   - API key security
   - Data privacy
   - Input validation
   - Output sanitization
   
2. **Error Handling Patterns**
   - AI service failures
   - Rate limiting
   - Timeout handling
   - Fallback strategies
   
3. **Cost Management**
   - API usage monitoring
   - Rate limiting
   - Caching strategies
   - Cost optimization
   
4. **Monitoring and Logging**
   - Audit logging
   - Performance monitoring
   - Usage tracking
   - Error logging
   
5. **Compliance and Privacy**
   - Data handling
   - GDPR considerations
   - Data retention
   - User consent

**Source PDFs**: All PDFs (security sections)

---

## Code Sample Organization

```
code-samples/
  module-13/
    lesson-1/
      introduction-overview.cfm
      setup-configuration.cfm
    lesson-2/
      ai-model-configuration-tag.cfm
      ai-model-configuration-script.cfm
      text-generation-tag.cfm
      text-generation-script.cfm
      chat-completions-tag.cfm
      chat-completions-script.cfm
    lesson-3/
      mcp-connection-tag.cfm
      mcp-connection-script.cfm
      mcp-tools-tag.cfm
      mcp-tools-script.cfm
      mcp-resources-tag.cfm
      mcp-resources-script.cfm
    lesson-4/
      create-embedding-tag.cfm
      create-embedding-script.cfm
      batch-embeddings-tag.cfm
      batch-embeddings-script.cfm
    lesson-5/
      vector-store-create-tag.cfm
      vector-store-create-script.cfm
      vector-store-add-tag.cfm
      vector-store-add-script.cfm
      vector-store-search-tag.cfm
      vector-store-search-script.cfm
    lesson-6/
      rag-workflow-complete-tag.cfm
      rag-workflow-complete-script.cfm
      rag-advanced-tag.cfm
      rag-advanced-script.cfm
    lesson-7/
      secure-ai-call-tag.cfm
      secure-ai-call-script.cfm
      error-handling-patterns-tag.cfm
      error-handling-patterns-script.cfm
```

---

## Function Reference Categories

### AI Model Functions
- [To be extracted from AI Models.pdf]

### Vector Store Functions
- [To be extracted from Vector Store Function Reference.pdf]

### MCP Functions
- [To be extracted from MCP Function Reference.pdf]

### Embedding Functions
- [To be extracted from AI Models.pdf]

---

## Prerequisites

- ColdFusion 2025 with latest feature update installed
- API keys for AI services (OpenAI, Azure, etc.)
- Understanding of REST APIs
- Basic understanding of arrays and structs
- Familiarity with error handling in ColdFusion

**Note**: These features require ColdFusion 2025 with the AI feature update. Check your CF version to ensure the update is installed.

---

## Learning Path

1. **Start with**: Introduction to understand the big picture
2. **Then**: AI Models to learn basic AI operations
3. **Next**: MCP for advanced AI integration
4. **Then**: Embeddings to understand vector representations
5. **Follow with**: Vector Stores to learn data infrastructure
6. **Combine**: RAG to see everything working together
7. **Finish with**: Security to ensure production readiness

---

## Next Steps

1. Extract function names and syntax from PDFs
2. Update `getModule13Data()` in `modules-data.js`
3. Create code sample files
4. Update function reference
5. Create quiz questions
6. Test and validate
