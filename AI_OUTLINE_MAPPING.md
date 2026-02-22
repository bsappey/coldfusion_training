# AI Training Modules — Adobe Outline Mapping

This document maps **Adobe’s ColdFusion 2025.07 Alpha Refresh** chapter/topic outline to this project’s **modules** (no “chapters” in the UI). Content can be expanded from the **CF 2025.07 Alpha Refresh** documentation when that is available in the project root.

---

## Module ↔ Outline Mapping

| Module | Title | Adobe outline (reference only) | Topic codes |
|--------|--------|--------------------------------|-------------|
| **13** | Introduction to AI in ColdFusion | Ch 22 | 22_01–22_07 |
| **14** | Chat Models and Prompting | Ch 23 | 23_01–23_08 |
| **15** | AIService and Conversational Memory | Ch 24 | 24_01–24_08 |
| **16** | Function Tools and AI Orchestration | Ch 25 | 25_01–25_07 |
| **17** | Retrieval Augmented Generation (RAG) | Ch 26 | 26_01–26_09 |
| **18** | Vector Databases and Embeddings | Ch 27 | 27_01–27_09 |
| **19** | Document Processing for AI | Ch 28 | 28_01–28_07 |
| **20** | Model Context Protocol (MCP) | Ch 29 | 29_01–29_09 |
| **21** | Building AI Agents in ColdFusion | Ch 30 | 30_01–30_07 |
| **22** | Performance, Monitoring and AI Operations | Ch 31 | 31_01–31_07 |
| **23** | Enterprise AI Patterns in ColdFusion | Ch 32 | 32_01–32_07 |

---

## Lesson ↔ Topic Mapping (by module)

### Module 13 — Introduction to AI in ColdFusion
- 22_01 What is AI integration in ColdFusion  
- 22_02 Vendor-neutral AI architecture  
- 22_03 Supported model providers (OpenAI, Mistral, Ollama, etc.)  
- 22_04 Chat Model vs AI Service vs RAG architecture  
- 22_05 Why AI as infrastructure (privacy, portability, orchestration)  
- 22_06 Installing and enabling AI packages (CFPM)  
- 22_07 Core AI workflow overview  

### Module 14 — Chat Models and Prompting
- 23_01 Creating a ChatModel instance  
- 23_02 Chat model configuration parameters  
- 23_03 Sending prompts using .chat()  
- 23_04 Prompt types and system messages  
- 23_05 Managing temperature and token limits  
- 23_06 Response formats and structured output  
- 23_07 Model switching without code changes  
- 23_08 Logging requests and responses  

### Module 15 — AIService and Conversational Memory
- 24_01 AIService overview  
- 24_02 Difference between ChatModel and AIService  
- 24_03 Chat memory and persistent context  
- 24_04 Persona and system prompts  
- 24_05 Managing conversation lifecycle  
- 24_06 Function tools integration  
- 24_07 Using Redis/Memcached for chat memory  
- 24_08 Building conversational agents  

### Module 16 — Function Tools and AI Orchestration
- 25_01 What are function tools  
- 25_02 Tool calling architecture  
- 25_03 Creating callable functions  
- 25_04 Tool selection by AI models  
- 25_05 Integrating APIs with tools  
- 25_06 Security considerations  
- 25_07 Real-world orchestration patterns  

### Module 17 — RAG
- 26_01 What is RAG and why use it  
- 26_02 RAG architecture overview  
- 26_03 Simple RAG quick start  
- 26_04 Document ingestion pipeline  
- 26_05 Document loaders and splitters  
- 26_06 Embedding models  
- 26_07 Querying with ask() vs chat()  
- 26_08 Sync vs async ingestion  
- 26_09 Best practices for enterprise RAG  

### Module 18 — Vector Databases and Embeddings
- 27_01 What is an embedding  
- 27_02 Vector databases explained  
- 27_03 VectorStore API overview  
- 27_04 Supported providers (Milvus, Pinecone, Qdrant, Chroma)  
- 27_05 Creating an in-memory vector store  
- 27_06 Adding and searching vectors  
- 27_07 Distance metrics (Cosine, Euclidean, DotProduct)  
- 27_08 Metadata filtering  
- 27_09 Hybrid search concepts  

### Module 19 — Document Processing for AI
- 28_01 DocumentProcessor overview  
- 28_02 Loading documents  
- 28_03 Splitting text into chunks  
- 28_04 Transforming documents  
- 28_05 Ingesting into vector stores  
- 28_06 Async document processing  
- 28_07 Supported document formats  

### Module 20 — MCP
- 29_01 Introduction to MCP  
- 29_02 MCP Client vs MCP Server  
- 29_03 Creating MCPClient in ColdFusion  
- 29_04 HTTP vs STDIO transports  
- 29_05 Tool discovery and invocation  
- 29_06 Working with resources and prompts  
- 29_07 Roots and scoping  
- 29_08 Sampling and elicitation flows  
- 29_09 Security best practices  

### Module 21 — Building AI Agents
- 30_01 Agent architecture overview  
- 30_02 Multi-tool orchestration  
- 30_03 Knowledge assistants with RAG  
- 30_04 API-integrated agents  
- 30_05 Event-driven workflows  
- 30_06 Observability and logging  
- 30_07 Scaling AI workloads  

### Module 22 — Performance, Monitoring and AI Operations
- 31_01 Performance considerations for AI calls  
- 31_02 Token optimization strategies  
- 31_03 Caching AI responses  
- 31_04 Error handling for AI workflows  
- 31_05 Monitoring MCP and RAG pipelines  
- 31_06 Secure credential management  
- 31_07 Governance and compliance  

### Module 23 — Enterprise AI Patterns
- 32_01 Multi-model routing  
- 32_02 Local vs cloud models  
- 32_03 Hybrid RAG architectures  
- 32_04 Structured output pipelines  
- 32_05 Agent chains and workflows  
- 32_06 Advanced prompt engineering  
- 32_07 AI governance strategies  

---

## Content source

- **Primary:** Expand lesson content from the **CF 2025.07 Alpha Refresh** documentation when it is placed in the project root (`C:\Users\admin\Documents\gitkraken\coldfusion_training`).
- **Fallback:** Adobe ColdFusion 2025 AI docs and the outline above.

---

## File locations

- **Module list and content:** `assets/js/modules-data.js`  
  - `getModulesData()` — list of modules 0–23  
  - `getModuleData(id)` — full content for a module  
  - `getModule13Data()` … `getModule23Data()` — AI module content  
- **Module pages:** `modules/module-13.cfm` … `modules/module-23.cfm` (each includes `_module-base.cfm`).
