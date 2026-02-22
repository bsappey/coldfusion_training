# Module 13: AI & Intelligent Features - Code Samples

This directory contains code samples for Module 13, covering ColdFusion 2025 AI features including:
- AI Models Integration (getChatModel, getAIService)
- Model Context Protocol (MCP) Integration
- Creating Embeddings
- Vector Stores
- RAG (Retrieval Augmented Generation) Workflows
- AI Security and Best Practices

## Prerequisites

- ColdFusion 2025 with the AI feature update installed
- API keys for AI providers (OpenAI, Azure, etc.) if using cloud services
- Vector store provider configured (optional - in-memory available for testing)

## Directory Structure

```
module-13/
├── lesson-1/  # AI Models Integration
├── lesson-2/  # MCP Integration
├── lesson-3/  # Creating Embeddings
├── lesson-4/  # Vector Stores
├── lesson-5/  # RAG Workflows
└── lesson-6/  # Security and Best Practices
```

## Usage

Each code sample is provided in both tag and script syntax versions:
- Files ending with `-tag.cfm` use CFML tag syntax
- Files ending with `-script.cfm` use CFScript syntax

## Important Notes

1. **API Keys**: Replace placeholder API keys with your actual keys stored securely
2. **Configuration**: Update provider URLs and settings to match your environment
3. **Testing**: Start with in-memory vector stores for testing before configuring production providers
4. **Security**: Always validate and sanitize user inputs before sending to AI services

## Related Documentation

- [ColdFusion 2025 AI Features Documentation](https://helpx.adobe.com/coldfusion/using/ai-features.html)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- Module 13 training content in the main application
