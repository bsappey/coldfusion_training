# ColdFusion 2025 AI Features - PDF Content

This file contains the content extracted from the 5 PDF documentation files. Please paste the content from each PDF into the corresponding section below.

---

## PDF 1: AI Models.pdf

Introduction.............................................................................................................. 1
Why use AI models .................................................................................................... 2
Core architecture ...................................................................................................... 2
Supported ecosystem ............................................................................................... 2
Pre-requisites ........................................................................................................... 3
Chat models ............................................................................................................. 4
getChatModel ........................................................................................................ 4
.chat() ................................................................................................................... 9
Sending prompts to an LLM in ColdFusion................................................................. 10
Introduction ........................................................................................................ 10
Prompt types ....................................................................................................... 10
Use prompts with AI service ..................................................................................... 11
Chat memory .......................................................................................................... 11
How chat memory works in ColdFusion ................................................................. 11
Why is chat memory important? ............................................................................ 12
Example .............................................................................................................. 12
Function tools......................................................................................................... 12
How do function tools work?................................................................................. 12
Why are function tools important? ........................................................................ 13
Example .............................................................................................................. 13
getAIService ........................................................................................................... 15
How does it work? ................................................................................................ 15
Example .............................................................................................................. 16
Introduction
Coldfusion 2025.1 introduces a vendor-neutral framework for integrating generative AI into
enterprise applications. This framework abstracts provider-specific complexities, enabling
developers to build agents, chatbots, and semantic search pipelines using standard CFML.
Switching between models or providers is as simple as updating configuration, with no
need to refactor application code.
Why use AI models
Treating AI models as infrastructure offers several advantages:
• Vendor independence: Switch providers by updating configuration.
• Data privacy: Support for local inference servers (e.g., Ollama) for sensitive data.
• Unified tooling: Standardized features like function calling and retrieval-augmented
generation (RAG).
• Orchestration: Built-in support for model context protocol (MCP) for smooth
integration.
Core architecture
The framework is layered:
• Chat model layer: Stateless, direct access to LLM for text generation, translation, or
code assistance.
• AI service layer: Stateful wrapper managing conversation history (memory),
personas (system messages), and tool execution.
• RAG pipeline: End-to-end solution for document ingestion and retrieval, including
document loaders, text splitters, embedding models, and vector stores.
Supported models
Coldfusion supports a wide array of providers:
• Cloud-hosted: OpenAI, Azure Open AI
• Local/offline: Ollama, Mistral
Open AI
• gpt-3.5-turbo
• gpt-3.5-turbo-1106
• gpt-3.5-turbo-0125
• gpt-3.5-turbo-16k
• gpt-4
• gpt-4-0613
• gpt-4-turbo-preview
• gpt-4-1106-preview
• gpt-4-0125-preview
• gpt-4-turbo
• gpt-4-turbo-2024-04-09
• gpt-4o
• gpt-4o-2024-05-13
• gpt-4o-2024-08-06
• gpt-4o-2024-11-20
• gpt-4o-mini
• gpt-4o-mini-2024-07-18
• o1
• o3
• o3-2025-04-16
• o3-mini
• o3-mini-2025-01-31
• o4-mini
• o4-mini-2025-04-16
• gpt-4.1
• gpt-4.1-2025-04-14
• gpt-4.1-mini
• gpt-4.1-mini-2025-04-14
• gpt-4.1-nano
• gpt-4.1-nano-2025-04-14
• gpt-5
• gpt-5-mini
• gpt-5-nano
• gpt-5.1
Mistral AI
• open-mistral-7b
• open-mixtral-8x7b
• open-mixtral-8x22b
• mistral-small-latest
• mistral-medium-latest
• mistral-large-latest
• open-mistral-nemo
• codestral-latest
Pre-requisites
• Coldfusion version: 2025.1
• Network: Outbound access to provider APIs or local inference server.
• Credentials: API keys for cloud providers; local models may not require keys.
• After installing the update, either install the ai package using the ColdFusion
package manageror install the ai package from the ColdFusion Administrator.
Chat models
The chat model is the fundamental interface for interacting with large language models
(LLMs). It acts as a stateless engine that accepts a sequence of messages and returns a
model-generated message. Unlike the AI service, the chat model does not maintain
conversation history or manage tools automatically.
getChatModel
Description
This function helps in creating a configured chat LLM instance in ColdFusion.
Returns
A chat model instanceis an object to chatModel.chat(...). It returns a chat model instance
from a given provider (OpenAI, Ollama, etc.), using the parameters you pass in. The
returned object exposes chatModel.chat(...) which executes LLM calls and returns a
response struct with message and metadata.
Syntax
Use a configuration struct to instantiate the model:
chatConfig = {
PROVIDER : "openAi",
APIKEY : "#application.apiKey#",
MODELNAME : "gpt-4o-mini",
TEMPERATURE : 0.7
};
chatModel = getChatModel(chatConfig);
Parameters
Configuration parameters
🔴 - Mandatory
🔄 - Conditional
⭕ - Optional
Param Name
Param
Type Description
Requi
red
Op
en
AI
Azu
re
Op
en
AI
Mist
ral Ollama
Default /
Example value
provider String
Provider of the
model openai
baseUrl String
The base URL
for the API
endpoint of the
model.
Example:
https://api.openai.com/v1/
apiKey String
The
authentication
key required to
access the
model's API. Api-key
modelName String
The specific
identifier or
name of the
model to be
used (e.g., "gpt-
4", "gemini-
pro"). gpt-4o
temperature Number
Controls the
randomness of
the output
(higher = more
creative/random
). 0.7
maxTokens Number
maximum
number of
tokens to
generate in the
model's
response. 2048
stop
Array of
String
A list of strings
that, if
generated, will
cause the
model to stop
generating
further tokens. ["\nUser:", "###"]
timeout Number
Maximum time
(in milliseconds
or seconds) to 10
wait for a model
response.
responseForma
t String
Specifies the
desired format
for the model's
output (e.g.,
JSON, text). "json"
httpClientBuilde
r Struct
Configuration
for the
underlying
HTTP client,
including proxy
and executor
pool settings.
topP Number
Filters token
selection by
cumulative
probability; only
tokens above a
certain
probability
threshold are
considered. 0.95
topK Number
Filters token
selection by
choosing only
the top K most
likely next
tokens. 40
maxRetries Number
The maximum
number of times
to retry a failed
API request to
the model. 2
logRequests
Boolea
n
A boolean
indicating
whether to log
the requests
sent to the
model. True
logResponses
Boolea
n
A boolean
indicating
whether to log
the responses
received from
the model. True
thinkingType String
Specifies the
strategy or
mode the model
uses for internal
"thinking" or
processing
before "enabled"
generating a
response.
thinkingBudget
Tokens Number
The maximum
number of
tokens the
model can use
for its internal
"thinking"
process. 512
cacheSystemM
essages
Boolea
n
A boolean
indicating
whether to
cache system
messages to
optimize
repeated
interactions. NA
cacheTools
Boolea
n
A boolean
indicating
whether to
cache tool
definitions or
outputs for
efficiency. NA
repeatPenalty Number
A penalty
applied to
tokens that
have already
appeared in the
text,
discouraging
repetition.
Yes (as
repeatPe
nalty) 0.5
seed Number
A value that,
when set,
makes the
model's output
deterministic for
a given input,
useful for
reproducibility. Yes 1337
numPredict Number
The number of
predictions or
completions to
generate.
Yes (as
numPredi
ct) 2000
presencePenalt
y Number
A penalty
applied to
tokens based
on whether they
are present in
the text,
discouraging
the introduction
of new topics. 0.0
logitBias Struct
Allows biasing
the probability
of specific
tokens
appearing or
not appearing in
the output. {1504: 100}
maxCompletion
Tokens Number
The maximum
total number of
tokens
expected in the
entire output
from the model. 2048
metadata
Map<St
ring,
String>
?
Additional data
or context
passed along
with the
request, often
for logging or
tracking. NA
maxOutputTok
ens Number
The maximum
number of
output tokens
(often
equivalent to
maxTokens or
maxCompletion
Tokens). 2048
candidateCount Number
The number of
alternative
response
candidates the
model should
generate. 1
allowCodeExec
ution
Boolea
n
A boolean
indicating
whether the
model is
allowed to
execute code
as part of its
reasoning or
response
generation. False
includeCodeEx
ecution
Boolea
n
A boolean
indicating
whether the
generated
response
should include
details of any
code execution
performed. False
safetySettings
Array of
String
Configuration
for content
safety filters to
prevent the
generation of
harmful content.
"HARM_CATEGORY_HA
TE_SPEECH"
version String
The specific
version of the
model to be
used. "2023-06-01"
beta
Boolea
n
A flag indicating
whether to use
a beta or
experimental
version of the
model or
feature. False
.chat()
Once configured, send prompts using .chat() with the chat model instance returned from
getChatModel. The .chat method accepts:
• Plain string
• Struct: systemMessage and userMessage
For example,
response = chatModel.chat("Explain quantum computing in one
sentence.");
writeOutput(response.message);
Or with structured messages:
chatRequest = {
systemMessage: "You are a code converter.",
userMessage: { message: "Convert 'console.log(x)' to ColdFusion." }
};
response = chatModel.chat(chatRequest);
Sending prompts to an LLM in ColdFusion
Introduction
Sending prompts is the core way to interact with a large language model (LLM) in
ColdFusion. A prompt is a message or set of messages that tells the model what you want
it to do, such as answering a question, generating text, translating, or performing a task.
ColdFusion’s AI framework provides a unified and flexible way to send prompts, whether
you want simple Q&A or advanced, multi-turn conversations.
Prompt types
You can send prompts to an LLM in two main ways:
Plain string prompt
You pass a single string to the model, which treats it as a user message.
response = chatModel.chat("Summarize the key features of ColdFusion
2025.");
writeOutput(response.message);
Structured chat request
For more control, use a chat request struct. This separates the system message (which
sets the assistant’s persona, rules, or tone) from the user message (the actual question or
instruction).
chatRequest = {
systemMessage: "You are a helpful ColdFusion assistant. Be concise
and accurate.",
userMessage: { message: "Explain the difference between GPT-4o and
GPT-4o-mini." }
};
response = chatModel.chat(chatRequest);
writeOutput(response.message);
• The system message defines how the assistant should behave.
• The user message contains the prompt or question.
Use prompts with AI service
If you use an AI service (for memory, tools, or advanced features), you can send prompts in
the same ways:
• As a plain string (uses the current system persona and memory)
• As a chat request struct (overrides the persona for that call)
For example,
aiService.systemMessage("You are a ColdFusion tutor. Explain
clearly.");
response = aiService.chat("What is a ColdFusion component?",
"user123");
Or, for a one-off persona:
chatRequest = {
systemMessage: "You are a poet. Reply in two lines.",
userMessage: { message: "Describe the ocean." }
};
response = aiService.chat(chatRequest, "user123");
Chat memory
Chat memory is a mechanism that allows conversational AI systems, like those built with
ColdFusion’s AI integration, to remember previous interactions within a conversation.
Instead of treating every prompt as a standalone request, chat memory stores and
retrieves conversation history so that each new chat request can be enriched with relevant
previous messages.
This enables the AI to maintain context, recall user preferences, and behave coherently
over multiple turns, which is essential for building realistic assistants, chatbots, or
workflow agents.
How chat memory works in ColdFusion
• Layered architecture: In ColdFusion, chat memory is not part of the raw chat model
itself. Instead, it’s managed by the AiService layer, which wraps the stateless
ChatModel and adds features like memory, personas, and tool calling.
• Configuration: You define chat memory using a ChatMemory struct, specifying
parameters such as:
o type: The memory strategy (e.g., message window, token window, or custom
implementation).
o maxMessages: How many messages to keep in memory.
o perUser: Whether memory is global or segmented per user/session.
o persistenceStore: Where to persist chat history (e.g., Redis, Memcache,
Ehcache).
Why is chat memory important?
• Contextual Conversations: Without memory, the AI cannot “remember” earlier
questions, user preferences, or intermediate workflow steps. With memory, it can
answer follow-up questions, recall details, and provide a much more natural
conversational experience.
• Multi-user Support: By configuring per-user memory, each user’s conversation
remains isolated, ensuring privacy and personalized context.
Example
Suppose a user tells the AI, “My name is Alice and I live in Paris.” Later, the user asks,
“What is my name and where do I live?” With chat memory enabled, the AI can recall and
answer correctly. If per-user memory is set, each user’s history is kept separate.
chatMemory = {
type: "messageWindowChatMemory",
maxMessages: 20,
perUser: true,
};
Function tools
Function tools are a mechanism that allows Large Language Models (LLMs) integrated into
ColdFusion to call your own business logic, specifically, ColdFusion CFC methods or MCP
clients, during a conversation. Instead of only generating text, the AI can trigger real
actions, fetch data, or perform computations by invoking these tools.
How do function tools work?
• Declaration: You register function tools in the AiService configuration using a
TOOLS array. Each entry specifies which CFC (ColdFusion Component) and which
methods are exposed to the AI.
• Schema: Each tool has a name, description, and a JSON schema describing its
parameters. This schema tells the LLM what the tool does and how to use it.
• Invocation: During a chat, the LLM may decide it needs to call a tool (e.g.,
“getTicketStatus” for a support ticket). The integration layer sends a structured
request to your CFC, gets the result, and passes it back to the model, which then
continues the conversation.
• Description: For each tool method you register, always provide a clear, scenario-
based DESCRIPTION. This tells the AI exactly when and why to use the tool. Without
a descriptive scenario, the AI may not invoke the tool even if the user’s query
matches the intent. For example,
o "Get the status of a support ticket by ID. Use this when the user asks about
the progress or state of a ticket, e.g., 'What is the status of ticket TKT-
12345?'"
o "Create a new support ticket from user input. Use this when the user wants
to report an issue or request support."
Why are function tools important?
• Enterprise integration: They allow your AI assistant to interact with real business
systems, fetching account balances, creating tickets, validating data, or triggering
workflows.
• Enhanced capabilities: The AI can go beyond text generation, performing tasks that
require up-to-date or sensitive information from your internal systems.
• Controlled access: You decide which functions are exposed, ensuring security and
relevance.
Example
Suppose you expose a support tool with two methods:
• getTicketStatus(ticketId): Returns the status of a support ticket.
• createTicket(summary, priority): Creates a new support ticket.
When a user asks, “What is the status of ticket TKT-12345?”, the LLM can invoke
getTicketStatus and respond with the actual status from your system.
ticket.cfm
<cfscript>
// 1. Create the underlying ChatModel
chatModelConfig = {
PROVIDER : "openAi",
APIKEY : "#application.apiKey#",
MODELNAME : "gpt-4o-mini"
};
chatModel = getChatModel(chatModelConfig);
// 2. Configure AiService with ChatMemory and Tools
aiServiceConfig = {
CHATMODEL : chatModel,
CHATMEMORY : { MAXMESSAGES : 20, PERUSER : true },
TOOLS : [
{
CFC : "tool.SupportTool",
METHODS : [
{ METHOD : "getTicketStatus", DESCRIPTION : "Get the status
of a support ticket by ID" },
{ METHOD : "createTicket", DESCRIPTION : "Create a new
support ticket from user input" }
]
}
]
};
aiService = getAiService(aiServiceConfig);
// 3. Use AiService in a conversation
response = aiService.chat("My ticket ID is TKT-12345. What is its status?",
"user1");
writeDump(response.message);
</cfscript>
SupportTool.cfc
component output=false {
public string function getTicketStatus(required string ticketId) {
// Example lookup; real implementation would query a database or API
if (arguments.ticketId == "TKT-12345") {
return "in progress";
} else {
return "closed";
}
}
public struct function createTicket(
required string summary,
required string priority
) {
var ticket = {
id : createUUID(),
summary : arguments.summary,
priority : arguments.priority,
status : "new"
};
// Persist ticket in your system, then return a simple summary
return ticket;
}
}
Best practice
Always include a descriptive scenario in the DESCRIPTION field for each tool method. This
ensures the AI knows exactly when to use the tool in response to user queries, improving
reliability and user experience.
getAIService
The getAiService function in ColdFusion is designed to turn a stateless chat model (created
with getChatModel) into a full conversational AI service. This means it adds advanced
features like:
• Multi-turn conversation management: Handles ongoing dialogue, not just single
prompts.
• Memory: Remembers previous messages, either globally or per user, and can
persist this history using stores like Redis or Memcache.
• System personas: Allows you to set instructions or roles for the AI, such as “You are
a travel assistant.”
• Function/tool calling: Lets the AI invoke ColdFusion functions (CFC methods) or
external MCP clients to perform tasks, fetch data, or trigger actions.
How does it work?
• You pass a configuration struct to getAiService, which must include a chatModel
(the LLM instance).
• Optionally, you can add:
o tools: A list of ColdFusion functions or MCP clients the AI can use.
o chatMemory: Configuration for how conversation history is stored and
managed.
The result is an AI service instance that provides methods like:
• aiService.chat(message): Sends a message with the current persona and memory
context.
• aiService.chat(message, userId): Same as above, but memory is scoped to a
specific user/session.
• aiService.chat(chatRequestStruct): Allows explicit system and user messages.
• aiService.chat(chatRequestStruct, userId): Combines rich requests with per-user
memory.
You can also set a system-level instruction for all subsequent calls using
aiService.systemMessage(messageString).
Example
<cfscript>
writeOutput("<h1>Example 2: AI Service Basics</h1>");
// Setup
chatModelConfig = {
PROVIDER : "openAi",
APIKEY : "api-key",
MODELNAME : "gpt-4o-mini"
};
chatModel = getChatModel(chatModelConfig);
aiServiceConfig = {
CHATMODEL : chatModel
};
aiService = getAiService(aiServiceConfig);
// Method 1: Plain string
writeOutput("<h2>1. Plain String</h2>");
response1 = aiService.chat("What is the capital of Japan?");
writeDump(var=response1.message);
writeOutput("<hr>");
// Method 2: chatRequest struct
writeOutput("<h2>2. chatRequest Struct</h2>");
chatRequest = {
SYSTEMMESSAGE : "You are a poet. Reply in 2 lines.",
USERMESSAGE : { MESSAGE : "Tell me about the ocean." }
};
response2 = aiService.chat(chatRequest);
writeDump(var=response2.message);
writeOutput("<hr>");
// Method 3: System message via function
writeOutput("<h2>3. systemMessage() Function</h2>");
aiService.systemMessage("You are a scientist. Be concise.");
response3 = aiService.chat("Why is the sky blue?");
writeDump(var=response3.message);
writeOutput("<hr>");
// Method 4: Override system message
writeOutput("<h2>4. Override System Message</h2>");
chatRequest2 = {
SYSTEMMESSAGE : "You are a pirate. Use pirate speak.",
USERMESSAGE : { MESSAGE : "What is gravity?" }
};
response4 = aiService.chat(chatRequest2);
writeDump(var=response4.message);
</cfscript>


---

## PDF 2: Vector Stores.pdf

Vector Stores, databases, and embeddings
in ColdFusion 2025.1
ColdFusion 2025.1 introduces a unified vector store API that lets CFML developers work
with embeddings and vector stores to build semantic search, RAG, recommendation, and
other AI-driven features.
Introduction.............................................................................................................. 1
Supported providers............................................................................................... 1
Quick start: Your first Vector Store .......................................................................... 1
Conceptual overview ................................................................................................. 3
What is an embedding? .......................................................................................... 3
What is a vector database? ..................................................................................... 3
What is a vector store in ColdFusion? ...................................................................... 4
Core retrieval concepts ............................................................................................. 5
Similarity search and distance metrics .................................................................... 5
Dense vs sparse vectors ......................................................................................... 5
Metadata and filtering semantics ............................................................................ 6
ColdFusion vector store architecture.......................................................................... 7
Unified VectorStore API and client abstraction ......................................................... 7
Supported providers and in-memory store ............................................................... 8
Connection and collection configuration model ....................................................... 9
Work with embeddings in ColdFusion ......................................................................... 9
Configure embedding models on a client ................................................................. 9
Text-only workflows (implicit embeddings)............................................................. 10
Explicit vector workflows ...................................................................................... 11
Data operations in a vector store .............................................................................. 12
Add and batch items ............................................................................................ 12
Delete by ID, filter, or full clear .............................................................................. 12
Query vector databases........................................................................................... 12
Text-based similarity search ................................................................................. 13
Vector-based similarity search.............................................................................. 13
Top-K, score thresholds, and result shapes............................................................ 15
Collection management .......................................................................................... 16
What is a collection? ............................................................................................ 16
Create a collection............................................................................................... 16
List and delete collections .................................................................................... 17
Environment and multi-tenant patterns ................................................................. 18
Error handling and observability ............................................................................... 19
VectorStoreException hierarchy ............................................................................ 19
Logging ............................................................................................................... 20
Common failure scenarios and mitigation.............................................................. 21
Performance and scalability .................................................................................... 23
Batching and large documents.............................................................................. 23
Index types and tuning.......................................................................................... 25
Latency, throughput, and retry policies .................................................................. 26
Advanced topics ..................................................................................................... 28
Hybrid search (dense + sparse) concepts .............................................................. 28
Asynchronous and concurrent ingestion patterns ................................................... 30
Integrate vector stores into RAG and AI workflows .................................................. 32
Introduction
As Generative AI applications evolve, the need to store and retrieve information based on
meaning rather than just keyword matching has become critical. ColdFusion
2025.1introduces native support for Vector stores.
This feature is the backbone of RAG (Retrieval-Augmented Generation) systems. It allows
you to:
• Store high-dimensional vectors (numerical representations of text).
• Perform semantic similarity searches.
• Filter results using metadata.
• Integrate smoothly with ColdFusion AI services.
Supported providers
ColdFusion provides a unified API for the following providers:
1. InMemory Vector Store (Best for testing/prototyping)
2. Milvus (Open-source, enterprise-grade)
3. Pinecone (Managed SaaS, high scalability)
4. Qdrant (High-performance)
5. Chroma (Lightweight, developer-friendly)
Quick start: Your first Vector Store
The fastest way to understand vector stores in ColdFusion is to use the InMemory Vector
Store. This requires no external setup or API keys.
Step 1: Initialize the Store
Use the GetVectorStoreClient() built-in function. Calling it without arguments creates an
in-memory instance.
// Create an in-memory client
client = GetVectorStoreClient();
Step 2: Add data
Add documents to your store. If you haven't configured an automatic embedding model,
you must provide the vector array manually (for this example, we will assume manual
vectors).
<cfscript>
docs = [
{
"id": "1",
"text": "ColdFusion is a rapid application development platform.",
"vector": [0.1, 0.2, 0.9], // Simplified vector
"metadata": {"category": "tech"}
},
{
"id": "2",
"text": "Python is popular for Data Science.",
"vector": [0.8, 0.1, 0.1],
"metadata": {"category": "data"}
}
];
// Add documents and get their IDs back
addedIds = client.addAll(docs);
writeDump(addedIds);
</cfscript>
Step 3: Search
Perform a similarity search using a query vector.
<cfscript>
// Search for vectors similar to [0.1, 0.2, 0.8]
results = client.search({
"vector": [0.1, 0.2, 0.8],
"topK": 1
});
writeDump(results);
// Output will show the "ColdFusion" document due to vector similarity.
</cfscript>
Conceptual overview
What is an embedding?
An embedding is a fixed-length list of real numbers representing a piece of data (for
example, a text snippet) in a high-dimensional space where semantically similar items lie
close together. In ColdFusion, embeddings can be generated implicitly by configuring an
embedding model on a vector store client, so most application code only deals with text
and metadata while the platform handles numeric vectors and similarity calculations.
<cfscript>
// In-memory store for demo; in production configure a real provider.
vs = GetVectorStoreClient( {
embeddingModel: "text-embedding-3-small",
dimension : 384
} );
id = vs.add( {
text : "ColdFusion supports semantic search with vector stores.",
metadata: { category = "intro", language = "en" }
} );
writeOutput( "<h3>Inserted item ID:</h3>" );
writeDump( id );
</cfscript>
What is a vector store?
A vector store is a specialized datastore for storing and querying high-dimensional vectors
using approximate nearest-neighbor indexes and distance metrics like cosine, Euclidean,
or dot-product. ColdFusion supports multiple providers, InMemory, Milvus, Pinecone,
Qdrant, and Chroma, so you can choose between open-source, self-hosted, or fully
managed services.
<cfscript>
milvusClient = GetVectorStoreClient( {
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
collectionName : "cf_intro",
dimension : 3,
metricType : "COSINE",
indexType : "IVF"
} );
ids = milvusClient.addAll( [
{
id : "cf-intro-1",
text : "ColdFusion is a rapid application development platform.",
vector : [0.10, 0.20, 0.30],
metadata: { topic = "cf", kind = "statement" }
},
{
id : "cf-intro-2",
text : "Vector stores enable semantic search.",
vector : [0.11, 0.19, 0.29],
metadata: { topic = "vector-db", kind = "statement" }
}
] );
results = milvusClient.search( {
vector : [0.10, 0.21, 0.29],
topK : 2,
minScore: 0.0
} );
</cfscript>
What is a vector store in ColdFusion?
A vector store in ColdFusion is the unified GetVectorStoreClient() API that returns a
GetVectorStoreClientClient object used for all data-plane operations such as add, addAll,
search, delete, deleteAll, listCollections, and deleteCollection. This abstraction hides
provider-specific SDKs while enabling seamless migration between backends and
consistent semantics across the platform.
localStore = GetVectorStoreClient();
prodStore = GetVectorStoreClient( {
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
collectionName : "cf_prod",
dimension : 384,
metricType : "COSINE",
indexType : "HNSW"
} );
Core retrieval concepts
Similarity search and distance metrics
Similarity search finds the vectors nearest to a query vector according to a chosen
distance metric such as cosine, Euclidean, or dot-product. The search() API accepts topK
to control how many neighbors to return and minScore to set a similarity threshold, with
provider-specific defaults configurable at the client level.
<cfscript>
vs = GetVectorStoreClient( {
dimension : 3,
metricType: "COSINE"
} );
vs.addAll( [
{ text = "ColdFusion vector stores", vector = [0.10, 0.20, 0.30],
metadata = { tag = "cf" } },
{ text = "Milvus vector store", vector = [0.11, 0.19, 0.31], metadata
= { tag = "db" } },
{ text = "Completely unrelated text", vector = [0.90, 0.10, 0.05],
metadata = { tag = "none" } }
] );
results = vs.search( {
vector : [0.10, 0.21, 0.29],
topK : 2,
minScore: 0.0
} );
</cfscript>
Dense vs sparse vectors
The initial integration focuses on dense vectors, where most dimensions are non-zero and
produced by modern embedding models. Sparse vectors for lexical or hybrid search can
be supported by specific index types in some providers and are considered for future
configuration-driven enhancements rather than a separate CF API.
<cfscript>
vs = GetVectorStoreClient( { dimension: 4, metricType: "COSINE" } );
ids = vs.addAll( [
{ text = "dense vector example 1", vector = [0.1, 0.3, 0.2, 0.4],
metadata = { type = "dense" } },
{ text = "dense vector example 2", vector = [0.2, 0.1, 0.4, 0.3],
metadata = { type = "dense" } }
] );
res = vs.search( { vector: [0.15, 0.25, 0.25, 0.35], topK: 2, minScore:
0.0 } );
</cfscript>
Metadata and filtering semantics
Each vector store item can include a metadata struct, which is attached at write time and
used later for filtering, categorization, and context. ColdFusion standardizes metadata
filtering with a MongoDB-style syntax supporting operators such as eq, ne, gt, gte, lt, lte, in,
nin, and, or, and not, regardless of the underlying provider.
<cfscript>
vs = GetVectorStoreClient( { dimension: 3, metricType: "COSINE" } );
vs.addAll( [
{
text : "CF 2026 vector stores documentation.",
vector : [0.10, 0.20, 0.30],
metadata: { product = "coldfusion", year = 2026, channel = "docs" }
},
{
text : "CF 2025 performance updates.",
vector : [0.12, 0.21, 0.28],
metadata: { product = "coldfusion", year = 2025, channel = "blog" }
},
{
text : "Generic web development article.",
vector : [0.50, 0.60, 0.70],
metadata: { product = "generic", year = 2024, channel = "blog" }
}
] );
filter = {
and = [
{ product = { eq = "coldfusion" } },
{ year = { gte = 2025 } }
]
};
results = vs.search( {
vector : [0.11, 0.22, 0.29],
topK : 10,
minScore: 0.0,
filter : filter
} );
</cfscript>
ColdFusion vector store architecture
Unified GetVectorStoreClient API and client abstraction
GetVectorStoreClient() is a built-in function that constructs a GetVectorStoreClientClient
based on a configuration struct or uses an in-memory implementation if no arguments are
provided. The client encapsulates all data-plane behavior while configuration can be
defined at module, application, or server scope, and reused via aliases.
<cfscript>
function getGetVectorStoreClientClient( string env = "dev" ) {
if ( env == "dev" ) {
return GetVectorStoreClient();
}
return GetVectorStoreClient( {
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
collectionName : "cf_env_example",
dimension : 384,
metricType : "COSINE",
indexType : "HNSW"
} );
}
</cfscript>
Supported providers and in-memory store
ColdFusion supports five vector stores: InMemory, Milvus, Pinecone, Qdrant, and Chroma,
all accessed via the same CFML API. The in-memory store is a simple non-persistent
implementation for developer testing and prototyping; it uses process memory only and is
not suitable for production because data is lost on restart and cannot be scaled
independently.
<cfscript>
function createClientForProvider( string providerName ) {
baseConfig = {
provider : providerName,
collectionName: "cf_switch_demo",
dimension : 384,
metricType : "COSINE",
indexType : "HNSW"
};
switch( lcase( providerName ) ) {
case "milvus":
baseConfig.url = "https://127.0.0.1:19530";
baseConfig.apiKey = "MILVUS_KEY";
break;
case "pinecone":
baseConfig.url = "https://your-project.svc.pinecone.io";
baseConfig.apiKey = "PINECONE_KEY";
break;
}
return GetVectorStoreClient( baseConfig );
}
client = createClientForProvider( "milvus" );
</cfscript>
Connection and collection configuration model
Configuration is split into connection settings (URL, authentication, retries, timeouts,
keep-alive behavior, connection pools) and collection settings (collection/database
names, dimension, metric type, index type, field mappings). Collections are generally
created automatically when the client is initialized, minimizing boilerplate while still
allowing per-provider tuning.
<cfscript>
client = GetVectorStoreClient( {
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
databaseName : "default",
collectionName : "cf_config_demo",
dimension : 128,
metricType : "COSINE",
indexType : "IVF",
idFieldName : "id",
textFieldName : "text",
vectorFieldName : "vector",
metadataFieldName: "metadata",
callTimeout : 10000,
connectTimeout : 10000,
maxRetries : 3,
retryOnRateLimit : true
} );
</cfscript>
Work with embeddings in ColdFusion
Configure embedding models on a client
Specifying an embedding model when creating a client lets ColdFusion generate
embeddings automatically for both stored content and text queries. Explicit vectors still
take precedence if provided, giving flexibility for mixed or migration scenarios.
<cfscript>
client = GetVectorStoreClient( {
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
collectionName : "cf_embed_demo",
dimension : 384,
metricType : "COSINE",
indexType : "IVFFLAT",
embeddingModel : "text-embedding-3-small"
} );
ids = client.addAll( [
{ text = "ColdFusion integrates with vector stores.", metadata =
{ section = "overview" } },
{ text = "Vector stores power semantic search and RAG.", metadata =
{ section = "concepts" } }
] );
</cfscript>
Text-only workflows (implicit embeddings)
With an embedding model configured, applications can use text-only search() calls, and
the platform embeds the query and performs similarity search behind the scenes. This flow
is ideal for knowledge bases, chatbots, and RAG implementations where requests and
content are primarily textual.
<cfscript>
client = GetVectorStoreClient( {
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
collectionName : "cf_text_search_demo",
dimension : 384,
metricType : "COSINE",
indexType : "IVFFLAT",
embeddingModel : "text-embedding-3-small",
topK : 5,
minScore : 0.4
} );
client.addAll( [
{ text = "ColdFusion vector stores provide a unified API over multiple
providers.", metadata = { topic = "cf-vector" } },
{ text = "Retrieval-Augmented Generation uses a vector store as a
retriever.", metadata = { topic = "rag" } }
] );
results = client.search( {
text: "How does ColdFusion support RAG?"
} );
</cfscript>
Explicit vector workflows
For offline workflows or external embedding pipelines, applications can supply explicit
numeric vectors for items and queries. In this model, ColdFusion does not call an
embedding model and assumes vector dimensionality and semantics are handled by the
caller.
<cfscript>
vs = GetVectorStoreClient( {
dimension : 3,
metricType: "COSINE"
} );
ids = vs.addAll( [
{
id : "precomp-1",
text : "Pre-computed embedding for CF documentation.",
vector : [0.10, 0.20, 0.30],
metadata: { source = "batch-job", kind = "doc" }
},
{
id : "precomp-2",
text : "Pre-computed embedding for AI article.",
vector : [0.40, 0.50, 0.60],
metadata: { source = "batch-job", kind = "article" }
}
] );
results = vs.search( {
vector : [0.11, 0.19, 0.29],
topK : 2,
minScore: 0.0
} );
</cfscript>
Data operations in a vector store
Add and batch items
add() inserts a single item and returns its ID, while addAll() accepts an array of items and
returns an array of IDs. Batching large writes reduces network overhead and works in
conjunction with internal batchSize parameters to respect provider limits such as gRPC
message sizes.
<cfscript>
vs = GetVectorStoreClient( { dimension: 3, metricType: "COSINE" } );
id1 = vs.add( {
text : "Single insert example.",
vector : [0.10, 0.20, 0.30],
metadata: { batch = "single" }
} );
ids = vs.addAll( [
{ text = "Batch insert 1.", vector = [0.11, 0.21, 0.31], metadata =
{ batch = "multi" } },
{ text = "Batch insert 2.", vector = [0.12, 0.22, 0.32], metadata =
{ batch = "multi" } }
] );
</cfscript>
Delete by ID, filter, or full clear
delete(id) removes a single item by its ID, while deleteAll() supports three modes: delete by
list of IDs, delete by metadata filter, or delete all items when called with no arguments.
Filter-based deletion is useful when IDs are not tracked externally and you want to purge
items based on tags, version, or environment.
Query vector stores
Text-based similarity search
Text-based similarity search uses the client's configured embedding model to convert the
query into a vector, then finds the nearest neighbors in the store. Defaults for topK and
minScore can be set on the client for consistent semantics across your app.
<cfscript>
client = GetVectorStoreClient( {
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
collectionName : "cf_text_query_demo",
dimension : 384,
metricType : "COSINE",
indexType : "IVFFLAT",
embeddingModel : "text-embedding-3-small",
topK : 3,
minScore : 0.3
} );
client.addAll( [
{ text = "ColdFusion has native support for vector stores.", metadata =
{ section = "intro" } },
{ text = "Vector stores are key for RAG systems.", metadata =
{ section = "rag" } }
] );
results = client.search( {
text: "How do vector stores help RAG?"
} );
</cfscript>
Vector-based similarity search
Vector-based queries send a numeric vector directly to the search() method, bypassing
any embedding model. This mode is common when embeddings are pre-computed
elsewhere or when testing low-level behavior.
<cfscript>
// In-memory store for demo; in production configure a real provider.
vs = GetVectorStoreClient( {
embeddingModel: "text-embedding-3-small",
dimension : 384
} );
id = vs.add( {
text : "ColdFusion supports semantic search with vector stores.",
metadata: { category = "intro", language = "en" }
} );
writeOutput( "<h3>Inserted item ID:</h3>" );
writeDump( id );
</cfscript>
<cfscript>
// 1. Define the Vector Store Client (assuming it's already configured and
connected)
// This client configuration must match the dimension of your search vector
vsClient = GetVectorStoreClient({
provider: "milvus",
url: "https://milvus.example.com",
apiKey: "YOUR_API_KEY",
collectionName: "knowledge_base",
dimension: 1536, // IMPORTANT: Must match the vector dimension
// NOTE: embeddingModel is omitted here, requiring the vector parameter
in search()
});
// 2. Define the Query Vector
// This vector would typically be generated by an external embedding model
// based on the user's search query text.
queryVector = [
0.015, 0.022, 0.031, // ... 1533 more float values ...
0.045, 0.051, 0.063
];
// 3. Perform the Search
results = vsClient.search({
// Use the 'vector' parameter for a raw vector search
vector: queryVector,
// Optional: Specify the number of results to retrieve
topK: 5,
// Optional: Set a minimum similarity score threshold (0.0 to 1.0)
minScore: 0.8,
// Optional: Apply metadata filtering to narrow the search scope
filter: {
category: "API_Reference",
status: { notEquals: "deprecated" }
}
});
</cfscript>
Top-K, score thresholds, and result shapes
topK and minScore tune the balance between recall and precision: higher topK returns
more candidates, while higher minScore filters weaker matches. Search results are arrays
of item structs with fields like id, text, metadata, and optionally vector, depending on
provider and configuration.
<cfscript>
vs = GetVectorStoreClient( { dimension: 3, metricType: "COSINE" } );
vs.addAll( [
{ text = "High similarity sample.", vector = [0.10, 0.20, 0.30],
metadata = { scoreHint = "high" } },
{ text = "Medium similarity sample.", vector = [0.20, 0.10, 0.25],
metadata = { scoreHint = "medium" } },
{ text = "Low similarity sample.", vector = [0.90, 0.05, 0.10],
metadata = { scoreHint = "low" } }
] );
query = [0.11, 0.21, 0.29];
strictResults = vs.search( {
vector : query,
topK : 3,
minScore: 0.7
} );
relaxedResults = vs.search( {
vector : query,
topK : 3,
minScore: 0.0
} );
</cfscript>
Collection management
What is a collection?
A collection in the AI Vector store is the main logical container that holds your vectors and
documents, similar to how a table works in a relational database or an index in a search
engine. Each collection has a unique name or ID (for example, support_kb) and is created
with a fixed embedding dimension (such as 768 or 1536), which all stored vectors must
match.
Within a collection, you store many documents, and each document has a unique id, its
text (or other payload), an embedding (the numeric vector), and optional metadata (such
as tenant, language, or tags). All similarity searches run within a specific collection, when
you query support_kb, only documents in that collection are considered. Collections are
important because they give you isolation and structure: you can separate different
content domains (support articles vs. product docs), enforce different access or tenancy
rules, and tune indexing or model choices per collection. In short, a collection is your
named, isolated bucket of vectors and documents that you query as a unit.
Create a collection
When you initialize a client with collection parameters, ColdFusion automatically creates
the collection if it does not already exist in the underlying vector store. This hides provider-
specific DDL while giving you ready-to-use collections for data operations.
<cfscript>
vs = GetVectorStoreClient( { dimension: 3, metricType: "COSINE" } );
vs.addAll( [
{ text = "Vector-based query example 1.", vector = [0.10, 0.20, 0.30],
metadata = { label = "a" } },
{ text = "Vector-based query example 2.", vector = [0.40, 0.50, 0.60],
metadata = { label = "b" } }
] );
queryVector = [0.11, 0.19, 0.31];
results = vs.search( {
vector : queryVector,
topK : 2,
minScore: 0.0
} );
client = GetVectorStoreClient( {
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
collectionName: "cf_auto_create",
dimension : 3,
metricType : "COSINE",
indexType : "IVF"
} );
id = client.add( {
text : "First document in auto-created collection.",
vector : [0.10, 0.20, 0.30],
metadata: { createdBy = "demo" }
} );
</cfscript>
List and delete collections
listCollections() returns the names of available collections, while deleteCollection(name)
drops a collection and its associated vector data. These APIs are useful for environment
setup/teardown, integration tests, and admin tooling.
<cfscript>
client = GetVectorStoreClient( {
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
collectionName: "cf_temp_collection",
dimension : 3,
metricType : "COSINE",
indexType : "IVF"
} );
client.add( {
text : "Temporary data.",
vector : [0.10, 0.20, 0.30],
metadata: { type = "temp" }
} );
collectionsBefore = client.listCollections();
client.deleteCollection( "cf_temp_collection" );
collectionsAfter = client.listCollections();
</cfscript>
Environment and multi-tenant patterns
By parameterizing collection names and other configuration values, you can isolate
environments (dev/QA/prod) or tenants (per customer) on separate collections in the same
backend. This keeps data boundaries clear while still sharing infrastructure resources.
<cfscript>
function getEnvCollectionName( string env ) {
return "cf_docs_" & lcase( env );
}
env = "dev";
collName = getEnvCollectionName( env );
client = GetVectorStoreClient( {
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
collectionName: collName,
dimension : 3,
metricType : "COSINE",
indexType : "IVF"
} );
client.add( {
text : "Env-specific document for " & env,
vector : [0.10, 0.20, 0.30],
metadata: { env = env }
} );
</cfscript>
Error handling and observability
GetVectorStoreClientException hierarchy
All vector store operations use a common exception hierarchy, with
GetVectorStoreClientException as the base and specific subclasses such as:
• GetVectorStoreClientItemAdditionException
• GetVectorStoreClientItemDeletionException
• GetVectorStoreClientItemSearchException
• FieldValidationException
• UnsupportedMetricTypeException
• UnsupportedIndexTypeException
• GetVectorStoreClientConnectionException,
• VectorDimensionMismatchException
• GetVectorStoreClientInvalidFilterException
These exceptions carry type, message, root cause, and stack trace to support diagnosis.
<cfscript>
try {
vs = GetVectorStoreClient( { dimension: 3, metricType: "COSINE" } );
vs.add( {
text : "Bad vector dimension.",
vector : [0.10, 0.20],
metadata: { test = "dimensionError" }
} );
}
catch( any e ) {
if ( findNoCase( "VectorDimensionMismatchException", e.type ) ) {
writeOutput( "<p>Vector dimension mismatch detected.</p>" );
} else if ( findNoCase( "GetVectorStoreClient", e.type ) ) {
writeOutput( "<p>General GetVectorStoreClient-related error.</p>" );
}
}
</cfscript>
Logging
Provider-specific logs (for Milvus, Pinecone, Chroma, Qdrant) capture backend errors,
retries, and connection details, while in-memory and factory-level messages are written to
application.log. Application-level logging can wrap vector operations to record failures and
correlate them with CFML requests.
<cfscript>
// Configure logging for vector operations
import org.apache.logging.log4j.*;
logger = LoggerFactory.getLogger("VectorOperations");
try {
startTime = now();
vs = GetVectorStoreClient({
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
dimension : 3,
metricType : "COSINE"
});
logger.info("GetVectorStoreClient client created successfully");
// Add document with logging
try {
vs.add({
text : "Sample document for logging demonstration",
vector : [0.1, 0.2, 0.3],
metadata : { source = "demo", version = 1 }
});
logger.info("Document added successfully");
} catch (GetVectorStoreClientItemAdditionException e) {
logger.error("Failed to add document: " & e.message, e);
logger.debug("Error details: " & serializeJSON(e));
}
// Search with logging
try {
results = vs.search({
text : "sample search",
limit : 5,
threshold: 0.7
});
logger.info("Search completed. Found " & arrayLen(results) & "
results");
} catch (GetVectorStoreClientItemSearchException e) {
logger.error("Search failed: " & e.message, e);
}
elapsed = dateDiff("s", startTime, now());
logger.info("GetVectorStoreClient operation completed in " & elapsed & "
seconds");
} catch (GetVectorStoreClientConnectionException e) {
logger.error("Connection error: " & e.message, e);
logger.warn("Vector store may be unavailable");
} catch (any e) {
logger.error("Unexpected error during vector operations: " & e.message,
e);
}
// Application logs in application.log contain all operation details
</cfscript>
Common failure scenarios and mitigation
Typical issues include invalid configuration (wrong URL/API key), wrong vector dimension,
unsupported metric or index type, and malformed filters, each mapping to a specific
exception type. Validating configuration up front and catching vector store exceptions at
boundaries helps maintain robustness in production.
<cfscript>
try {
// Validate configuration before client creation
requiredParams = ['url', 'apiKey', 'dimension', 'metricType'];
requiredValues = [url, apiKey, dimension, metricType];
for (param in requiredParams) {
if (!isDefined(requiredValues[arrayFind(requiredParams, param)]) ||
requiredValues[arrayFind(requiredParams, param)] == "") {
throw(type="ConfigurationException", message="Missing required
parameter: " & param);
}
}
// Verify valid metric type
validMetrics = ['COSINE', 'EUCLIDEAN', 'DOTPRODUCT'];
if (!arrayContains(validMetrics, metricType)) {
throw(type="UnsupportedMetricTypeException", message="Unsupported
metric type: " & metricType);
}
// Verify valid index type
validIndexTypes = ['IVF', 'HNSW', 'FLAT'];
if (!arrayContains(validIndexTypes, indexType)) {
throw(type="UnsupportedIndexTypeException", message="Unsupported
index type: " & indexType);
}
vs = GetVectorStoreClient({
provider : "milvus",
url : url,
apiKey : apiKey,
dimension : dimension,
metricType : metricType,
indexType : indexType
});
writeOutput("<p>GetVectorStoreClient configured successfully.</p>");
} catch (GetVectorStoreClientDimensionMismatchException e) {
writeOutput("<p>Vector dimension mismatch error: " & e.message & "</p>");
// Log and handle gracefully
} catch (UnsupportedMetricTypeException e) {
writeOutput("<p>Unsupported metric type error: " & e.message & "</p>");
// Log and handle gracefully
} catch (ConfigurationException e) {
writeOutput("<p>Configuration error: " & e.message & "</p>");
// Log and handle gracefully
} catch (any e) {
writeOutput("<p>Unexpected GetVectorStoreClient error: " & e.message &
"</p>");
// Log exception details for debugging
}
</cfscript>
Performance and scalability
Batching and large documents
To avoid gRPC message size and memory issues when ingesting large content (for
example, 100 MB documents), the spec recommends chunking documents and
embedding them in batches, with a batch size default around 1000 items. This approach
avoids latency spikes and memory pressure while sustaining throughput.
<cfscript>
// Function to chunk large documents
function chunkDocument(document, chunkSize = 1000) {
chunks = [];
words = listToArray(document, " ");
currentChunk = "";
for (word in words) {
if (len(currentChunk) + len(word) + 1 > chunkSize) {
arrayAppend(chunks, trim(currentChunk));
currentChunk = word;
} else {
currentChunk = currentChunk & " " & word;
}
}
if (len(currentChunk) > 0) {
arrayAppend(chunks, trim(currentChunk));
}
return chunks;
}
// Large document ingestion with batch processing
vs = GetVectorStoreClient({
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
dimension : 768,
metricType : "COSINE"
});
largeDocument = "[Very large text content here - 100+ MB document...]";
batchSize = 1000; // Default batch size to avoid gRPC issues
// Chunk the document
documentChunks = chunkDocument(largeDocument);
writeOutput("<p>Document chunked into " & arrayLen(documentChunks) & "
chunks.</p>");
// Process in batches
for (i = 1; i <= arrayLen(documentChunks); i += batchSize) {
batchEnd = min(i + batchSize - 1, arrayLen(documentChunks));
batch = arraySlice(documentChunks, i, batchEnd - i + 1);
try {
batchItems = [];
for (chunk in batch) {
// Generate embedding for each chunk
embedding = generateEmbedding(chunk);
arrayAppend(batchItems, {
text : chunk,
vector : embedding,
metadata : { chunkIndex = i, totalChunks =
arrayLen(documentChunks) }
});
}
vs.add(batchItems);
writeOutput("<p>Batch " & ceiling(i / batchSize) & "
processed.</p>");
} catch (GetVectorStoreClientItemAdditionException e) {
writeOutput("<p>Error processing batch: " & e.message & "</p>");
}
sleep(100);
}
writeOutput("<p>Document ingestion completed.</p>");
</cfscript>
Index types and tuning
Index types determine how a vector store organizes and searches high-dimensional data
for fast, scalable similarity queries. The choice of index type affects ingestion speed,
memory usage, and query latency. ColdFusion’s vector store API supports explicit index
type selection and validates your choice, throwing an UnsupportedIndexTypeException if
an invalid value is provided.
Common Index Types
IVF (Inverted File Index)
• Purpose: Fast approximate nearest neighbor search, ideal for large datasets.
• How it works: Divides the vector space into clusters (“lists”). During search, only a
subset of clusters is probed, reducing computation.
HNSW (Hierarchical Navigable Small World)
• Purpose: Excellent for low-latency queries, especially with large datasets.
• How it works: Builds a graph structure for efficient navigation and search.
IVF_FLAT
• Purpose: Brute-force search, compares every vector.
• How it works: No indexing, just linear scan.
• Use case: Small datasets, testing, or when absolute accuracy is needed.
How to choose an Index Type
• IVF: Use for large-scale ingestion and when you need fast, approximate search.
• HNSW: Use for real-time, low-latency queries and when you want high recall.
• IVF_FLAT: Use for small datasets or when you need exact results.
<cfscript>
// Index type tuning based on workload requirements
// IVF: Fast approximate nearest neighbor search, good for large datasets
function createIVFIndex(configuration) {
return GetVectorStoreClient({
provider : configuration.provider,
url : configuration.url,
apiKey : configuration.apiKey,
dimension : configuration.dimension,
metricType : configuration.metricType,
indexType : "IVF",
indexParams : {
nlist : 1024, // Number of clusters
nprobe : 32 // Clusters to probe during search
}
});
}
// HNSW: Hierarchical navigable small-world, excellent for low-latency
queries
function createHNSWIndex(configuration) {
return GetVectorStoreClient({
provider : configuration.provider,
url : configuration.url,
apiKey : configuration.apiKey,
dimension : configuration.dimension,
metricType : configuration.metricType,
indexType : "HNSW",
indexParams : {
M : 16, // Max connections per element
efConstruction: 200, // Size of dynamic list during
insertion
ef : 64 // Size of dynamic list during search
}
});
}
// Select index type based on workload
config = {
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
dimension : 768,
metricType: "COSINE"
};
// For high-throughput ingestion scenarios
if (workloadType == "ingestion-heavy") {
try {
vs = createIVFIndex(config);
writeOutput("<p>IVF index created for high-throughput
ingestion.</p>");
} catch (UnsupportedIndexTypeException e) {
writeOutput("<p>IVF index not supported: " & e.message & "</p>");
}
}
// For low-latency query scenarios
else if (workloadType == "query-latency-sensitive") {
try {
vs = createHNSWIndex(config);
writeOutput("<p>HNSW index created for low-latency queries.</p>");
} catch (UnsupportedIndexTypeException e) {
writeOutput("<p>HNSW index not supported: " & e.message & "</p>");
}
}
</cfscript>
Latency, throughput, and retry policies
Performance tuning includes setting retry policies (max retries, exponential backoff), call
and connection timeouts, keep-alive behavior, and connection pooling on providers that
support it. The spec emphasizes profiling under expected load and using provider features
to maintain sub-second query latency.
<cfscript>
// Performance tuning with retry policies and connection pooling
vs = GetVectorStoreClient({
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
dimension : 768,
metricType : "COSINE",
// Connection timeout configuration
connectionTimeout : 5000, // 5 seconds
callTimeout : 10000, // 10 seconds for API calls
keepAlive : true, // Keep connection alive
// Retry policy with exponential backoff
retryPolicy : {
maxRetries : 3,
backoffMultiplier: 2.0,
initialDelayMs : 100,
maxDelayMs : 5000
},
// Connection pooling
connectionPooling : {
corePoolSize : 5,
maxPoolSize : 20,
maxIdleTime : 60000 // 60 seconds
}
});
// Function to execute search with retry and timing profiling
function performSearch(vs, query, maxRetries = 3) {
startTime = getTickCount();
retryCount = 0;
while (retryCount < maxRetries) {
try {
results = vs.search({
text : query,
limit : 10,
threshold : 0.7
});
elapsed = getTickCount() - startTime;
writeOutput("<p>Search completed in " & elapsed & "ms (" &
retryCount & " retries)</p>");
return results;
} catch (GetVectorStoreClientConnectionException e) {
retryCount += 1;
if (retryCount < maxRetries) {
delay = 100 * pow(2, retryCount - 1); // Exponential backoff
sleep(delay);
} else {
writeOutput("<p>Search failed after " & maxRetries & "
retries: " & e.message & "</p>");
throw e;
}
}
}
}
// Execute search with configured retry and timeout settings
try {
results = performSearch(vs, "semantic search query");
writeOutput("<p>Retrieved " & arrayLen(results) & " results within sub-
second latency.</p>");
} catch (any e) {
writeOutput("<p>Search operation failed: " & e.message & "</p>");
}
</cfscript>
Advanced topics
Hybrid search (dense + sparse) concepts
Hybrid search combines dense semantic vectors with sparse lexical features, either via a
single hybrid index or separate indexes merged at query time. Because not all supported
vector stores have first-class hybrid capabilities, ColdFusion defers direct hybrid support
and will treat it as a future configuration-driven enhancement.
<cfscript>
// Hybrid search implementation combining dense and sparse vectors
// Note: Current ColdFusion treats this as application-level hybrid search
getVectorStoreClient = GetVectorStoreClient({
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
dimension : 768,
metricType : "COSINE"
});
// Function to generate sparse lexical features (BM25-like scoring)
function generateSparseFeatures(text) {
words = listToArray(lcase(text), " ");
sparseVector = {};
for (word in words) {
word = trim(word);
if (len(word) > 2) { // Skip very short words
if (isDefined(sparseVector[word])) {
sparseVector[word] += 1;
} else {
sparseVector[word] = 1;
}
}
}
return sparseVector;
}
// Function to execute hybrid search
function hybridSearch(query, denseWeight = 0.7, sparseWeight = 0.3) {
// Dense vector search
denseResults = getVectorStoreClient.search({
text : query,
limit : 20,
threshold : 0.5
});
// Sparse lexical search
sparseFeatures = generateSparseFeatures(query);
// Merge and rank results
mergedResults = [];
scoreMap = {};
// Apply dense score weight
for (result in denseResults) {
scoreMap[result.id] = (result.score * denseWeight);
}
// Apply sparse score weight
for (word in sparseFeatures) {
for (result in denseResults) {
if (findNoCase(word, result.text)) {
if (isDefined(scoreMap[result.id])) {
scoreMap[result.id] += (0.1 * sparseWeight);
} else {
scoreMap[result.id] = (0.1 * sparseWeight);
}
}
}
}
// Sort by combined score
sortedScores = structSort(scoreMap, "numeric", "desc");
return {
results : denseResults,
hybridScores : sortedScores,
denseWeight : denseWeight,
sparseWeight : sparseWeight
};
}
</cfscript>
Asynchronous and concurrent ingestion patterns
Current Java clients do not yet offer asynchronous APIs, so asynchronous ingestion is
managed at the CF level using patterns like cfthread while still relying on synchronous
client calls. The spec notes async support as a future enhancement, and recommends
batching and connection tuning in the meantime.
<cfscript>
vs = GetVectorStoreClient({
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
dimension : 768,
metricType : "COSINE"
});
// Queue for managing asynchronous ingestion tasks
ingestionQueue = [];
queueMutex = createObject("java",
"java.util.concurrent.locks.ReentrantReadWriteLock");
// Function to add items to ingestion queue
function queueIngestionTask(items) {
lock = queueMutex.writeLock();
lock.lock();
try {
arrayAppend(ingestionQueue, items);
} finally {
lock.unlock();
}
}
// Background worker thread for concurrent ingestion
cfthread(name="vectorIngestionWorker") {
while (true) {
lock = queueMutex.readLock();
lock.lock();
hasItems = arrayLen(ingestionQueue) > 0;
lock.unlock();
if (hasItems) {
lock = queueMutex.writeLock();
lock.lock();
try {
if (arrayLen(ingestionQueue) > 0) {
batch = arrayShift(ingestionQueue);
try {
vs.add(batch);
writeOutput("<p>Batch ingested asynchronously.</p>");
} catch (GetVectorStoreClientItemAdditionException e) {
writeOutput("<p>Async ingestion failed: " & e.message
& "</p>");
// Re-queue for retry
arrayPrepend(ingestionQueue, batch);
sleep(5000);
}
}
} finally {
lock.unlock();
}
} else {
sleep(100); // Check queue every 100ms
}
}
};
// Main thread: queue documents concurrently
for (i = 1; i <= 10; i++) {
cfthread(name="ingestionTask_#i#") {
documentBatch = [];
for (j = 1; j <= 100; j++) {
arrayAppend(documentBatch, {
text : "Document " & (i * 100 + j),
vector : [0.1, 0.2, 0.3],
metadata : { batch = i, index = j }
});
}
queueIngestionTask(documentBatch);
writeOutput("<p>Batch " & i & " queued for ingestion.</p>");
}
}
</cfscript>
Integrate vector stores into RAG and AI workflows
In Retrieval-Augmented Generation, the vector store holds embeddings for your knowledge
base and acts as the retriever that supplies context snippets to LLM prompts. ColdFusion's
vector store feature is designed to plug into platform AI services so embeddings, retrieval,
and model calls can be orchestrated from CFML much like frameworks such as LangChain
do in other ecosystems.
<cfscript>
// Initialize vector store for knowledge base
getVectorStoreClient = GetVectorStoreClient({
provider : "milvus",
url : "https://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
dimension : 768,
metricType : "COSINE"
});
// Initialize LLM service
llmService = createObject("component", "com.example.LLMService").init("gpt-
4");
// RAG: Retrieval-Augmented Generation function
function ragWorkflow(userQuery) {
// Step 1: Retrieve relevant context from vector store
retrievedContext = getVectorStoreClient.search({
text : userQuery,
limit : 5,
threshold : 0.6
});
// Step 2: Construct context from results
contextSnippets = [];
for (doc in retrievedContext) {
arrayAppend(contextSnippets, doc.text);
}
context = arrayToList(contextSnippets, chr(10) & chr(10));
// Step 3: Build augmented prompt with context
systemPrompt = "You are a helpful assistant. Use the following context to
answer questions accurately.";
augmentedPrompt = systemPrompt & chr(10) & chr(10) & "Context:" & chr(10)
& context & chr(10) & chr(10) & "Question: " & userQuery;
// Step 4: Call LLM with augmented prompt
try {
llmResponse = llmService.generateCompletion({
prompt : augmentedPrompt,
maxTokens : 500,
temperature : 0.7
});
// Step 5: Return response with source references
return {
answer : llmResponse.text,
sources : retrievedContext,
timestamp : now()
};
} catch (any e) {
return {
error : e.message,
answer : "Unable to process query at this time.",
sources : []
};
}
}
// Execute RAG workflow
userQuestion = "What is the capital of France?";
ragResult = ragWorkflow(userQuestion);
writeOutput("<h3>Question:</h3><p>" & userQuestion & "</p>");
writeOutput("<h3>Answer:</h3><p>" & ragResult.answer & "</p>");
writeOutput("<h3>Sources Retrieved:</h3><ul>");
for (source in ragResult.sources) {
writeOutput("<li>" & source.text & " (Score: " &
numberFormat(source.score, "0.00") & ")</li>");
}
writeOutput("</ul>");
</cfscript>


---

## PDF 3: Vector Store Function Reference.pdf
getVectorStoreClient ................................................................................................. 1
add .......................................................................................................................... 5
addAll ...................................................................................................................... 7
search ...................................................................................................................... 8
delete .................................................................................................................... 10
deleteAll ................................................................................................................. 12
upsert .................................................................................................................... 14
upsertAll ................................................................................................................ 15
listCollections ........................................................................................................ 16
deleteCollection ..................................................................................................... 16
getEmbeddingModel ............................................................................................... 17
embeddingModel.embed......................................................................................... 20
embeddingModel.embedAll ..................................................................................... 21
getVectorStoreClient
Description
Initializes a new Vector Store Client instance. This function acts as the factory for
connecting to various vector store providers (such as InMemory, Milvus, Pinecone,
Chroma, and Qdrant). It handles connection configuration, authentication, and default
collection settings.
Returns
A VectorStoreClient object used to perform data and collection operations.
Category
Vector store functions
Syntax
GetVectorStoreClient (struct configuration)
History
New in ColdFusion 2025.1
Parameters
Parameter Type Required Description
configuration Struct Yes
A structure
containing
connection and
collection
configuration
details.
Configuration struct details
The configuration structure supports the following keys. Applicability may vary by provider
(Milvus, Pinecone, Qdrant, Chroma) .
Key Type Default Description
Supporte
d
Providers
provider String -
The vector
store provider.
Values:
milvus,
pinecone,
qdrant,
chroma (or
inmemory for
testing).
All
url String -
The endpoint
address for
the vector
store API.
Milvus,
Qdrant,
Chroma
apiKey String - The
authentication
Milvus,
Pinecone,
key for the
service.
Qdrant,
Chroma
databaseName String -
The specific
database
instance
name.
Milvus,
Pinecone
collectionName String -
The name of
the collection
to connect to
or create.
All
dimension Numeri
c -
The
dimensionality
of the vectors
(e.g., 128,
1536).
Milvus,
Pinecone
metricType String COSINE
The distance
metric used
for similarity.
Values:
COSINE,
EUCLIDEAN,
DOTPRODUCT.
All
indexType String IVF_FLA
T
The indexing
algorithm
(e.g., IVF,
HNSW,
IVF_FLAT).
Milvus,
Pinecone,
Qdrant
embeddingModel Struct -
The alias of a
configured
embedding
model. If set,
raw vectors
All
are not
required in
add or search
operations.
topK Numeri
c 4
Default
number of
results to
return in a
search.
All
minScore Numeri
c 0
Default
minimum
similarity
score
threshold.
All
callTimeout Numeri
c -
Max time (ms)
to wait for
server
response.
All
connectTimeout Numeri
c -
Max time (ms)
to wait for
connection
establishment
.
All
maxRetries Numeri
c 3
Maximum
retry attempts
for failed
operations.
All
retryOnRateLimit Boolean
Determines
whether to
retry when
encountering
rate limit
Milvus
errors (HTTP
429)
initialBackof Numeri
c
The first delay
interval
between retry
attempts.
All
maxBackOff Numeri
c
Maximum
delay interval
between
retries (caps
exponential
growth).
Except
Chroma
backOffMultiplier Numeri
c
Factor by
which the
delay interval
increases
after each
retry
Except
Chroma
retryTimeout Numeri
c
The maximum
time allowed
for retry
operations to
complete.
Only
Milvus
callTimeout Numeri
c
Maximum
time to wait
for responses
from the
server.
All
connectionTimeout Numeri
c
Maximum
time to wait
for initial
connection
establishment
.
All
keepAlive Boolean
Whether to
send keep-
alive pings
even when no
RPC calls are
active.
Except
Chroma
keepAliveTime Numeri
c
Interval
between
keep-alive
pings to
maintain
connection.
Except
Chroma
keepAliveTimeout Numeri
c
Time to wait
for keep-alive
ping response
before
considering
connection
dead.
Except
Chroma
idleTimeout Numeri
c
Time after
which idle
connections
are closed.
All
maxConnections Numeri
c
The maximum
number of
connections
allowed in the
connection
pool.
Only
Chroma
socketTimeout Numeri
c
The maximum
time to wait
for data
transfer
between the
client and
server after a
connection is
established.
Only
Chroma
connectionRequestTimeou
t
Numeri
c
The maximum
time to wait
for a
connection
from the pool
when all
connections
are in use.
Only
Chroma
Usage
Use this function to establish the connection before performing any CRUD or search
operations. If an embeddingModel is provided in the configuration, the client will
automatically handle text-to-vector conversion.
Example
<cfscript>
// Shared configuration for all VectorStore examples
vectorStoreConfig = {
provider : "milvus",
url : "http://127.0.0.1:19530",
apiKey : "YOUR_API_KEY",
collectionName : "knowledge_base",
dimension : 1536,
metricType : "COSINE",
indexType : "IVF_FLAT",
"embeddingModel": {
"provider": "ollama",
"modelName": "all-minilm:latest",
"baseUrl": "http://127.0.0.1:11434",
"maxRetries": 3
}
topK : 4,
minScore : 0
};
try {
vectorStoreClient = GetVectorStoreClient(vectorStoreConfig);
writeOutput("VectorStore client initialized successfully.<br>");
} catch (any e) {
writeOutput("Error initializing VectorStore client: " & e.message &
"<br>");
}
</cfscript>
add
Description
Adds a single item (document) to the vector store. If an embedding model is configured in
the client, the vector parameter is optional, and the text will be automatically embedded.
Returns
A string containing the ID of the added item.
Category
Vector store functions
Syntax
vectorStoreClient.add(item)
History
New in ColdFusion 2025.1
Parameters
Parameter Type Required Description
item Struct Yes
The data structure
representing the
item to store.
Item struct details
Key Type Required Description
id String No
Unique identifier. If
omitted, one may
be auto-generated
by the provider or
CF.
text String Yes
The raw text
content of the
document.
vector Array No
Array of floats
representing the
embedding.
Required only if
no
embeddingModel
is configured on
the client.
metadata Struct No
Key-value pairs for
filtering (e.g.,
category, date).
Example
<cfscript>
config = {
provider: "milvus",
url: "https://192.168.1.100:19530",
apiKey: "YOUR_API_KEY",
collectionName: "knowledge_base",
dimension: 1536,
metricType: "COSINE",
embeddingModel: "text-embedding-3-small"
};
try {
vsClient = GetVectorStoreClient(config);
writeOutput("Client initialized successfully.");
} catch (any e) {
writeOutput("Error: " & e.message);
}
newItem = {
id: createUUID(),
text: "ColdFusion is a powerful rapid application development platform",
metadata: {
category: "technology",
author: "Adobe"
}
};
docId = vsClient.add(newItem);
</cfscript>
addAll
Description
Adds multiple items to the vector store in a batch. This function is optimized to handle bulk
insertions effectively, utilizing batching mechanisms to manage memory and network
limits (default batch size is typically 1000).
Returns
An array of strings containing the IDs of the added items.
Category
Vector store functions
Syntax
vectorStoreClient.addAll(items)
History
New in ColdFusion 2025.1
Parameters
Parameter Type Required Description
items Array Yes
An array of item
structures (see
add for struct
definition).
Example
<cfscript>
config = {
provider: "milvus",
url: "https://192.168.1.100:19530",
apiKey: "YOUR_API_KEY",
collectionName: "knowledge_base",
dimension: 1536,
metricType: "COSINE",
embeddingModel: "text-embedding-3-small"
};
try {
vsClient = GetVectorStoreClient(config);
writeOutput("Client initialized successfully.");
} catch (any e) {
writeOutput("Error: " & e.message);
}
docs = [
{ text: "Vector DBs are fast", metadata: { type: "db" } },
{ text: "AI requires context", metadata: { type: "ai" } }
];
ids = vsClient.addAll(docs);
</cfscript>
search
Description
Performs a similarity search (for example, Nearest Neighbor search) on the vector store.
You can search using raw text (if an embedding model is configured) or a vector array.
Results can be refined using metadata filters and score thresholds.
Returns
An array of structs, where each struct contains the item's id, text, vector, metadata, and a
similarity score.
Category
Vector store functions
Syntax
vectorStoreClient.search(query)
History
New in ColdFusion 2025.1
Parameters
Parameter Type Required Description
query Struct Yes The search query
configuration.
Query struct details
Key Type Description
text String The text to search for. (Required if vector
is not provided).
vector Array The query embedding vector. (Required if
embeddingModel is not configured).
topK Numeric
The number of approximate nearest
neighbors to return (Overrides client
default).
minScore Numeric The minimum similarity score (0.0 to 1.0)
required for a result to be included.
filter Struct A metadata filter expression to narrow the
search scope.
Filter operators
The filter struct supports the following operators:
• Comparison: equals, notEquals, isGreaterThan, isGreaterThanOrEqual,
isLessThan, isLessThanOrEqual
• Set: isIn (array), notIn (array)
• Logical: and, or, not
Example
<cfscript>
config = {
provider: "milvus",
url: "https://192.168.1.100:19530",
apiKey: "YOUR_API_KEY",
collectionName: "knowledge_base",
dimension: 1536,
metricType: "COSINE",
embeddingModel: "text-embedding-3-small"
};
try {
vsClient = GetVectorStoreClient(config);
writeOutput("Client initialized successfully.");
} catch (any e) {
writeOutput("Error: " & e.message);
}
searchQuery = {
text: "How do I implement RAG?",
topK: 5,
minScore: 0.75,
filter: {
category: "documentation",
year: { isGreaterThanOrEqual: 2025 }
}
};
results = vsClient.search(searchQuery);
</cfscript>
delete
Description
Deletes a single item from the vector store identified by its ID.
Returns
Void
Category
Vector store functions
Syntax
vectorStoreClient.delete(id)
History
New in ColdFusion 2025.1
Parameters
Parameter Type Required Description
id String Yes
The unique
identifier of the
item to delete.
Example
<cfscript>
config = {
provider: "milvus",
url: "https://192.168.1.100:19530",
apiKey: "YOUR_API_KEY",
collectionName: "knowledge_base",
dimension: 1536,
metricType: "COSINE",
embeddingModel: "text-embedding-3-small"
};
try {
vsClient = GetVectorStoreClient(config);
writeOutput("Client initialized successfully.");
} catch (any e) {
writeOutput("Error: " & e.message);
}
newItem = {
id: createUUID(),
text: "ColdFusion is a powerful rapid application development platform",
metadata: {
category: "technology",
author: "Adobe"
}
};
docs = [
{ id: "DOC-123",text: "Vector DBs are fast", metadata: { type: "db" } },
{ id: "DOC-456", text: "AI requires context", metadata: { type: "ai" } }
];
ids = vsClient.addAll(docs);
vsClient.delete("DOC-123")
</cfscript>
deleteAll
Description
Deletes items from the vector store. It can be used in three ways: deleting specific IDs,
deleting items matching a metadata filter, or deleting all items in the collection.
Returns
Void
Category
Vector store functions
Syntax
// 1. Delete by IDs
vectorStoreClient.deleteAll(ids)
// 2. Delete by Filter
vectorStoreClient.deleteAll(filter)
// 3. Delete All
vectorStoreClient.deleteAll()
History
New in ColdFusion 2025.1
Parameters
Parameter Type Required Description
ids Array No A list of specific
IDs to delete.
filter Struct No
A metadata filter
struct (see search
for operators).
Deletes all items
matching the
criteria.
(None) - No
If no argument is
provided, all items
in the store are
deleted.
Example
<cfscript>
config = {
provider: "milvus",
url: "https://192.168.1.100:19530",
apiKey: "YOUR_API_KEY",
collectionName: "knowledge_base",
dimension: 1536,
metricType: "COSINE",
embeddingModel: "text-embedding-3-small"
};
try {
vsClient = GetVectorStoreClient(config);
writeOutput("Client initialized successfully.");
} catch (any e) {
writeOutput("Error: " & e.message);
}
newItem = {
id: createUUID(),
text: "ColdFusion is a powerful rapid application development platform",
metadata: {
category: "technology",
author: "Adobe"
}
};
docs = [
{ id: "DOC-123",text: "Vector DBs are fast", metadata: { type: "db" },
status: "active" },
{ id: "DOC-456", text: "AI requires context", metadata: { type:
"ai" },status: "active" },
{ id: "DOC-789", text: "ColdFusion makes development easy", metadata:
{ type: "dev" }, status: "inactive" },
{ id: "DOC-007", text: "ColdFusion doesn't use COM and DCOM", metadata:
{ type: "dev" }, status: "inactive" }
];
vsClient.addAll(docs);
// Delete by filter
vsClient.deleteAll({
status: "deprecated"
});
</cfscript>
listCollections
Description
Retrieves a list of all collection names available in the connected vector store.
Returns
An array of strings (collection names).
Category
Vector store functions
Syntax
vectorStoreClient.listCollections()
History
New in ColdFusion 2025.1
Parameters
None
Example
collections = vectorStoreClient.listCollections();
// Returns: ["colors", "languages"]
deleteCollection
Description
Permanently deletes a specific collection and all vector data contained within it.
Returns
Void
Category
Vector store functions
Syntax
deleteCollection(collectionName)
History
New in ColdFusion 2025.1
Parameters
Parameter Type Required Description
collectionName String Yes
The name of the
collection to
delete.
Example
vectorStoreClient.deleteCollection("colors");
getEmbeddingModel
Description
Initializes a new Embedding Model client instance. This function acts as the factory for
connecting to various embedding providers (such as OpenAI, Azure OpenAI, local models,
etc.). It encapsulates model configuration (model name, dimension, provider) and
connection settings.
Returns
An EmbeddingModel object used to generate embeddings for text input.
Category
Embedding model functions
Syntax
getEmbeddingModel(struct configuration)
History
New in ColdFusion 2025.1
Parameters
Parameter Type Required Description
configuration Struct Yes Structure containing provider and model
configuration.
Configuration struct details
The configuration structure supports the following common keys. Exact support varies by
provider (OpenAI, AzureOpenAI, local, etc.).
Key Type Default Description
provider String - Embedding
provider. Examples:
"openai",
"azureOpenAI",
"local".
apiKey String - API key or token for
the provider (if
required).
baseUrl String - Optional base
endpoint URL (for
self‑hosted or Azure
endpoints).
modelName String - Embedding model
identifier. Example:
"text-embedding-
3-small".
dimension Numeric - Expected
embedding
dimension (for
validation).
timeout Numeric 10000 Request timeout in
milliseconds.
maxRetries Numeric 2 Maximum retry
attempts for
transient failures.
logRequests Boolean true Whether to log
outbound requests
(for debugging).
logResponses Boolean true Whether to log
responses (for
debugging).
metadata Struct {} Optional key‑value
metadata to tag
embedding calls.
Usage
Use GetEmbeddingModel once during initialization. The returned embeddingModel
instance exposes:
• embed(text) – generate an embedding for a single text string.
• embedAll(textArray) – generate embeddings for an array of text strings.
The model configuration (provider, model name, dimension) is fixed per instance.
Example
<cfscript>
// Create an Embedding Model client for OpenAI
embedConfig = {
provider : "openai",
apiKey : "YOUR_OPENAI_API_KEY",
baseUrl : "https://api.openai.com/v1", // optional for OpenAI-
style endpoints
modelName : "text-embedding-3-small",
dimension : 1536
};
try {
embeddingModel = GetEmbeddingModel(embedConfig);
writeOutput("Embedding model initialized successfully.<br>");
} catch (any e) {
writeOutput("Error initializing embedding model: " & e.message & "<br>");
}
</cfscript>
EmbeddingModel.embed
Description
Generates an embedding vector for a single text input using the configured embedding
model. This is typically used for:
• indexing documents into a VectorStore, or
• creating a query vector for similarity search.
Returns
A struct containing:
• embeddings – the embedding vector (array of numbers)
• tokenUsage – provider‑specific token usage metrics (if available)
• finishReason – reason the call completed (if provided by the provider)
• metadata – additional metadata returned by the provider
Category
Embedding model functions
Syntax
embeddingModel.embed(string text)
History
New in ColdFusion 2025.1
Parameters
Parameter Type Required Description
text String Yes The input text to embed.
Usage
Use embed() for one‑off embedding generation, such as:
• embedding a single user query before calling vectorStoreClient.search({vector: ...}),
or
• embedding a newly created document you’re about to upsert into a VectorStore.
For batch ingestion of many texts, prefer embedAll() to reduce overhead.
Example
<cfscript>
// Assume embeddingModel was created via GetEmbeddingModel(embedConfig)
inputText = "ColdFusion integrates AI models and vector databases.";
result = embeddingModel.embed(inputText);
// result is a struct with:
// - result.embeddings : array of numeric values (the vector)
// - result.tokenUsage : provider-specific token stats (if supported)
// - result.finishReason : string (if provided)
// - result.metadata : struct with extra information (if any)
writeOutput("<h4>Single embedding result</h4>");
writeDump(result);
// Use the embedding vector directly with a VectorStore search, e.g.:
//
// queryVector = result.embeddings;
// searchResult = vectorStoreClient.search({ vector: queryVector, topK: 5 });
</cfscript>
embeddingModel.embedAll
Description
Generates embeddings for multiple text inputs in a single call. This method is optimized for
throughput and is the recommended way to embed:
• document batches during ingestion, or
• large sets of knowledge‑base entries.
Returns
A struct containing:
• embeddings – an array of vectors (one per input string, in the same order).
• tokenUsage – aggregated token usage metrics (if available).
• finishReason – reason the call completed (if provided by the provider).
• metadata – provider‑specific metadata.
Category
Embedding model functions
Syntax
embeddingModel.embedAll(array text)
History
New in ColdFusion 2025.1
Parameters
Parameter Type Required Description
text Array Yes Array of text strings to embed (batch
input).
Usage
Use embedAll() whenever you have more than one string to embed. It is more efficient and
easier to coordinate with batch insert/upsert operations into a VectorStore.
Example
<cfscript>
// Assume embeddingModel was created via GetEmbeddingModel(embedConfig)
// Batch of texts to embed
texts = [
"How to reset your account password in ColdFusion.",
"Using vector databases for semantic search.",
"Retrieval-Augmented Generation (RAG) with ColdFusion."
];
batchResult = embeddingModel.embedAll(texts);
// batchResult.embeddings is an array of vectors with the same length as
`texts`.
writeOutput("<h4>Batch embedding result</h4>");
writeDump(batchResult);
// Example: prepare documents for a VectorStore addAll()
docs = [];
for (i = 1; i <= arrayLen(texts); i++) {
doc = {
id : "DOC-" & numberFormat(i, "000"),
text : texts[i],
vector : batchResult.embeddings[i],
metadata : {
source : "kb",
language : "en",
index : i
}
};
arrayAppend(docs, doc);
}
// Now docs can be passed to vectorStoreClient.addAll(docs);
</cfscript>

---

## PDF 4: MCPs with ColdFusion.pdf

Introduction to MCP .................................................................................................. 1
What is MCP? ........................................................................................................ 1
Key components .................................................................................................... 1
Client vs server in ColdFusion ................................................................................. 1
MCP Client ............................................................................................................... 2
What is an MCP Client? .......................................................................................... 2
Create an MCP Client ............................................................................................. 2
Transport configuration .......................................................................................... 3
HTTP transport ................................................................................................... 3
STDIO transport .................................................................................................. 4
Client capabilities .................................................................................................. 5
Work with tools ...................................................................................................... 5
List available tools – listTools()............................................................................. 6
Call a tool – callTool(toolName, params) .............................................................. 6
Work with resources .............................................................................................. 6
List resources- listResources()............................................................................. 6
Read a resource – readResource(uri) .................................................................... 6
Work with prompts................................................................................................. 7
List prompts – listPrompts() ................................................................................. 7
Get a prompt- getPrompt({ name, arguments }) ..................................................... 7
Sampling ............................................................................................................... 8
Elicitation .............................................................................................................. 9
Manage roots....................................................................................................... 11
Add a root ........................................................................................................ 11
Get a root ......................................................................................................... 11
List roots .......................................................................................................... 11
Remove a root .................................................................................................. 11
Notify root changes ........................................................................................... 11
Logging ............................................................................................................... 11
Configure bulk servers.......................................................................................... 12
MCP Server ............................................................................................................. 15
What is an MCP Server? ........................................................................................ 15
Create an MCP Server .......................................................................................... 15
Server configuration parameters ........................................................................... 16
Server info ........................................................................................................ 16
Capabilities ...................................................................................................... 16
Configure tools .................................................................................................... 17
Configure prompts ............................................................................................... 18
Configure resources............................................................................................. 19
CFC caching ........................................................................................................ 21
CORS configuration ............................................................................................. 21
Request handling (HTTP entry point) ...................................................................... 21
Registering server with a client .............................................................................. 23
Error handling and timeouts ..................................................................................... 24
Timeouts ............................................................................................................. 24
Security and best practices .................................................................................. 24
Protect secrets .................................................................................................... 24
Use roots to enforce scope ................................................................................... 25
Allow list trusted MCP Servers .............................................................................. 25
Harden HTTP endpoints........................................................................................ 25
Frequently asked questions ..................................................................................... 26
Introduction to MCP
What is MCP?
As AI systems evolve from simple chatbots to agents capable of complex tasks, they need
a robust way to access tools and data. The Model Context Protocol (MCP) is an open
standard that defines how AI agents (clients) talk to external systems (servers) in a
consistent, auditable way.
MCP standardizes:
• Tool discovery and invocation (tools/list, tools/call)
• Prompt management (prompts/list, prompts/get)
• Resource access (resources/list, resources/read)
• Optional flows like sampling, elicitation, logging, and roots
For ColdFusion, MCP provides a way to:
• Call MCP servers from your CF app using a single, structured client API.
• Expose ColdFusion business logic, prompts, and resources as an MCP server that
any MCP host can connect to.
Key components
Conceptually, MCP is built around three roles. It’s worth keeping these straight, because
ColdFusion can act as more than one of them:
MCP Host is the outer application that orchestrates the conversation and user experience.
It embeds an MCP client and usually an LLM. Examples include Claude Desktop, Cursor,
and ColdFusion web apps that maintain user sessions and call MCP tools as needed.
MCP Client is the protocol adapter that understands how to talk to MCP servers over HTTP
or STDIO and how to translate between MCP JSON‑RPC requests/responses and CF
structures. In this guide, createMCPClient(configData) is the main entry point for creating
MCP clients.
MCP Server is the provider of capabilities. A server might wrap Jira APIs, a file system, or a
set of CFML CFCs. It receives MCP methods such as tools/list, tools/call, prompts/get,
etc., and returns standardized responses.
Client vs server in ColdFusion
In ColdFusion, the distinction between client and server is straightforward:
• Use the MCP Client portion of this guide when your CF app needs to call MCP
servers (e.g., Jira MCP, Wiki MCP, CF-based MCP, third‑party MCP servers).
• Use the MCP Server portion when your CF app should act as an MCP server, so
agents and tools can call your CF logic and data.
Most teams will eventually do both: they’ll integrate existing MCP servers (client side) and
expose their own CF capabilities via MCP (server side).
MCP Client
What is an MCP Client?
An MCP client in ColdFusion is an object created by createMCPClient(configData) that:
• Manages a connection to one or more MCP servers.
• Performs the initial handshake to exchange capabilities and server info.
• Exposes CF-friendly methods like listTools(), callTool(), listResources(),
readResource(), listPrompts(), and getPrompt().
• Optionally forwards sampling requests to your LLM integration, and elicitation
requests to your UI code.
You configure its behavior using a struct, so it integrates naturally with Application.cfc and
environment-driven config patterns.
Create an MCP Client
To create a client, you build a configData struct and pass it to
createMCPClient(configData). The function returns an array of clients. For single-server
configs, this array contains a single client; for multi-server configs, it can contain one client
per server.
Key fields in configData:
• transport (or configFile for multi-server)
• clientInfo
• capabilities
• initializationTimeout, requestTimeout
• Optional consumer callbacks (sampling, elicitation, logging, root changes)
For example,
<cfscript>
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
mcpClient = createMCPClient(configData);
</cfscript>
Transport configuration
Transports define how the client talks to the server. MCP supports several transports at the
spec level; ColdFusion MCP focuses on:
• HTTP (remote or local over HTTP)
• STDIO (local subprocess)
Each has different trade-offs around deployment, security, and performance.
HTTP transport
HTTP transports are best when:
• The MCP server is remote and shared (e.g., an MCP in an internal environment or a
public MCP).
• You want standard observability and network-level controls.
• You’re exposing a CF MCP server to multiple clients.
For example,
<cfscript>
configData = {
transport: {
type: "http",
url: "https://remote.mcpservers.org/fetch/mcp"
},
clientInfo: {
name: "http-client",
version: "1.0.0"
},
requestTimeout: 30
};
mcpClient = createMCPClient(configData)
</cfscript>
Parameters
Parameter Type Required Description
type String Yes Must be "http"
url String Yes MCP endpoint URL (HTTP/HTTPS)
STDIO transport
STDIO transports works when:
• The MCP server is a local Node/Python/Java.
• You don’t want to expose an HTTP endpoint.
• You want to ship a self-contained utility that runs next to CF.
For example,
<cfscript>
configData = {
transport: {
type: "stdio",
command: "/usr/local/bin/node",
args: ["/Users/user/mcp-servers/server.js"],
env: {
apiKey: "sk-aaa",
NODE_ENV: "production"
}
},
clientInfo: {
name: "stdio-client",
version: "1.0.0"
},
requestTimeout: 60
};
mcpClient = createMCPClient(configData)
</cfscript>
Parameters
Parameter Type Required Description
type String Yes Must be "stdio"
command String Yes Executable path (e.g., node, python)
args Array No Command-line arguments
env Struct No Environment variables
Client capabilities
Client capabilities allow which optional features your MCP client supports. This influences
how the server interacts with you.
Common flags:
• sampling – whether the client can handle sampling requests (LLM calls).
• roots – whether the client will manage roots for resource scoping.
• elicitation – whether the client will handle elicitation flows.
For example,
<cfscript>
configData = {
transport: { /* transport config */ },
capabilities: {
sampling: true, // Enable sampling requests
roots: true, // Enable root resource management
elicitation: true // Enable user input requests
}
};
</cfscript>
You can gradually enable these features: for example, start with sampling = false, roots =
false, elicitation = false and enable as you implement the corresponding callbacks.
Work with tools
Tools are the primary way your client triggers actions on the server side (e.g., fetch data,
update records, transform documents).
List available tools – listTools()
<cfscript>
tools = mcpClient[1].listTools();
writeDump(tools);
</cfscript>
Each tool record typically includes:
• name – the tool’s identifier.
• description – a human-readable explanation.
• inputSchema – a JSON-schema-like structure describing required and optional
parameters.
Call a tool – callTool(toolName, params)
Tools are the primary way your client triggers actions on the server side (e.g., fetch data,
update records, transform documents).
<cfscript>
toolName = "get_weather";
toolParams = { location = "New York" };
result = mcpClient.callTool(toolName, toolParams);
writeDump(result);
</cfscript>
Work with resources
Resources are read-only objects like files, logs, or domain-specific data that the MCP
server exposes.
List resources- listResources()
<cfscript>
resources = mcpClient.listResources();
writeDump(resources);
</cfscript>
Read a resource – readResource(uri)
<cfscript>
uri = "file:///logs/app.log";
if (mcpClient.isResourceReadable(uri)) {
resData = mcpClient.readResource(uri);
logText = "";
if (arrayLen(resData.contents) GT 0 &&
structKeyExists(resData.contents[1], "text")) {
logText = resData.contents[1].text;
}
writeOutput("<pre>" & encodeForHtml(logText) & "</pre>");
} else {
writeOutput("Resource not readable: " & uri);
}
</cfscript>
Work with prompts
Prompts are server-defined templates that describe reusable workflows, often with
arguments. They are essential when multiple clients or teams must reuse the same high-
quality prompt.
List prompts – listPrompts()
<cfscript>
prompts = mcpClient.listPrompts();
writeDump(prompts);
</cfscript>
Get a prompt- getPrompt({ name, arguments })
<cfscript>
promptParams = {
name = "explain-code",
arguments = {
code = "<cfquery ...>",
language = "coldfusion"
}
};
promptDef = mcpClient.getPrompt(promptParams);
writeDump(promptDef);
</cfscript>
The server returns a definition that can include fully structured messages you can send to a
chat model. This ensures consistent, centrally maintained prompts.
Sampling
Sampling is used when the MCP server wants you to call your own LLM and then return the
completion back to the server.
Configuration
<cfscript>
function mySamplingHandler(request) {
var messages = request.messages;
var userMessage = messages[1].content.text;
// Call your LLM here (OpenAI, Bedrock, etc.)
var llmResponse = callMyLLM(userMessage);
// Return as struct with model name
return {
modelname: "gpt-4o",
result: llmResponse
};
// Or return plain string (model name will be "UNKNOWN")
// return llmResponse;
}
configData = {
transport: { /* transport config */ },
capabilities: {
sampling: true
},
samplingConsumer: mySamplingHandler
};
mcpClient = createMCPClient(configData);
</cfscript>
Sampling request format (from server)
{
messages: [
{
role: "user",
content: {
type: "text",
text: "What is the weather in New York?"
}
}
]
}
Struct response (with model name)
return {
modelname: "gpt-4o",
result: "The weather in New York is sunny, 75°F"
};
Servers send sampling requests with a messages array; your handler decides how to
respond and which model to use.
Elicitation
Elicitation is the inverse of sampling: the server asks the client to collect additional user
input according to a schema.
Configuration
<cfscript>
function myElicitationHandler(request) {
var message = request.message;
var requestedSchema = request.requestedSchema;
// Show UI to user to collect input
// Return based on user action
// User accepts:
return {
action: "accept",
content: {
checkAlternatives: "true",
flexibleDates: "next_day"
}
};
// User declines:
// return { action: "decline" };
// User cancels:
// return { action: "cancel" };
}
configData = {
transport: { /* transport config */ },
capabilities: {
elicitation: true
},
elicitationConsumer: myElicitationHandler
};
mcpClient = createMCPClient(configData)
</cfscript>
Elicitation request format (from server)
{
message: "Would you like to check alternative flights?",
requestedSchema: {
type: "object",
properties: {
checkAlternatives: { type: "string" },
flexibleDates: { type: "string" }
}
}
}
Response format
Field Type Required Values Description
action String Yes "accept",
"decline",
"cancel"
User's response
content Struct Conditional Key-value pairs Required if
action is
"accept"
Manage roots
Roots inform servers about relevant resource locations the client can access. Roots are
the client’s way of telling the server:
“Here are the URIs that define my resource boundaries.”
They are critical for:
• Security: limiting which directories, tenants, or systems are considered in-scope.
• Performance: preventing the server from scanning irrelevant or massive resource
spaces.
• Context switching: switching tenant or project context by swapping roots.
Conceptually, a root is a struct with at least name and uri:
Add a root
mcpClient.addRoot("file:///home/user/testcases", "Test Cases");
Get a root
root = mcpClient.getRoot("file:///home/user/testcases");
// Returns: { uri: "file:///...", name: "Test Cases" }
List roots
roots = mcpClient.listRoots();
// Returns: { roots: [{ uri: "...", name: "..." }] }
Remove a root
mcpClient.removeRoot("file:///home/user/testcases");
Notify root changes
mcpClient.rootsListChangedNotification();
Logging
Logging allows the MCP server to ship structured log events back to the client. This is
extremely useful when:
• The MCP server is remote and you do not have direct log access.
• You want to surface MCP-related logs in your existing logging system.
• You need to diagnose failures in tool calls or resource reads.
You attach a loggingConsumer to your client config; the client calls it whenever the server
emits logs.
For example,
<cfscript>
function myLoggingHandler(loggingMessage) {
var level = loggingMessage.level; // e.g., "info", "error", "debug"
var data = loggingMessage.data;
writeLog(type=level, text=data);
return "Log received";
}
configData = {
transport: { /* transport config */ },
loggingConsumer: myLoggingHandler
};
mcpClient = createMCPClient(configData);
</cfscript>
Configure bulk servers
Load multiple servers from a JSON configuration file. When you have multiple MCP servers
to talk to (e.g., Jira, Wiki, GitHub, internal MCPs), it’s easier to externalize them into a JSON
file than to hard-code them in CFML. This also decouples environment changes (e.g., dev
vs prod) from your CF code.
You can supply a configFile key in configData, pointing to a JSON file that lists MCP servers
and their transports.
For example, mcpServers.json
{
"mcpServers": {
"weather-server": {
"url": "http://127.0.0.1:8500/mcp/weather.cfm",
"disabled": false
},
"database-server": {
"url": "http://127.0.0.1:8500/mcp/database.cfm",
"disabled": false
},
"external-api": {
"url": "https://api.example.com/mcp",
"disabled": true
}
}
}
Load multiple servers
<cfscript>
configData = {
configFile: "/path/to/mcpServers.json",
clientInfo: {
name: "bulk-client",
version: "1.0.0"
},
capabilities: {
sampling: true,
roots: true
},
requestTimeout: 30
};
// Returns array of MCP clients (one per enabled server)
mcpClients = createMCPClient(configData);
</cfscript>
Complete example
<cfscript>
function samplingHandler(request) {
// Your LLM integration
return {
modelname: "gpt-4o",
result: callOpenAI(request.messages)
};
}
function elicitationHandler(request) {
// Your UI for user input
return {
action: "accept",
content: collectUserInput(request.message)
};
}
function loggingHandler(loggingMessage) {
writeLog(type=loggingMessage.level, text=loggingMessage.data);
return "Logged";
}
configData = {
transport: {
type: "http",
url: "http://127.0.0.1:8500/mcp/server.cfm"
},
clientInfo: {
name: "my-ai-client",
version: "1.0.0"
},
capabilities: {
sampling: true,
roots: true,
elicitation: true
},
initializationTimeout: 10,
requestTimeout: 30,
samplingConsumer: samplingHandler,
elicitationConsumer: elicitationHandler,
loggingConsumer: loggingHandler
};
mcpClient = createMCPClient(configData);
// Use the client
tools = mcpClient[1].listTools();
result = mcpClient.callTool({
name: "get_weather",
arguments: { location: "New York" }
});
</cfscript>
MCP Server
What is an MCP Server?
An MCP server is the “provider side” of MCP: it receives JSON‑RPC requests and responds
with tools, prompts, resource information, and results. In ColdFusion, an MCP server
wraps your CFCs, prompts, and resources so that external MCP clients can use them in
their own workflows. An MCP Server exposes ColdFusion components (CFCs) as tools,
provides prompt templates, and serves resources to MCP clients.
From an architecture standpoint, a CF MCP server lets you define a clear boundary:
• MCP clients see only your MCP server surface (tools, prompts, resources).
• Internally, you can map those to any CF logic, services, and data sources you want.
Create an MCP Server
You create an MCP server by building a configData struct and passing it to
createMcpServer(configData). This is usually done once in onApplicationStart and stored
in application scope.
For example,
<cfscript>
configData = {
serverInfo: {
name: "Healthcare MCP Server",
version: "1.0.0"
},
capabilities: {
tools: true,
prompts: true,
resources: true
},
tools: [
{ cfc: "mcp.tools.healthcareTools" },
{ cfc: "mcp.tools.emailTool" }
],
prompts: [
{
name: "generate_summary",
title: "Generate Patient Summary",
description: "Generate a comprehensive patient summary",
arguments: [
{
name: "patientName",
description: "Name of the patient",
required: true
}
],
template: "Generate a summary for patient {patientName}"
}
],
resources: resourcesArray,
cfcCaching: true,
corsEnabled: true
};
application.mcpServer = createMcpServer(configData);
// Handle incoming requests
application.mcpServer.handleRequestAndWriteResponse();
</cfscript>
Server configuration parameters
Server info
serverInfo tells clients what this server is called and which version they’re interacting with.
<cfscript>
serverInfo: {
name: "My MCP Server",
version: "1.0.0"
}
</cfscript>
Parameter Type Required Description
name String Yes Server identifier
version String Yes Server version
This information appears in initialize responses, which helps with debugging, logging, and
compatibility checks.
Capabilities
capabilities declare which MCP features your server implements.
<cfscript>
capabilities: {
tools: true, // Enable tool execution
prompts: true, // Enable prompt templates
resources: true // Enable resource access
}
</cfscript>
Capability Description
tools Server can execute CFC methods as tools
prompts Server provides prompt templates
resources Server provides access to resources
A simple server might only set tools = true. A more feature-rich one sets all three to true.
Configure tools
Tools are where your CF business logic gets exposed to MCP. For each CFC listed in tools,
the MCP framework can treat public or remote methods as callable tools.
<cfscript>
tools: [
{ cfc: "mcp.tools.healthcareTools" },
{ cfc: "mcp.tools.emailTool" },
{ cfc: "mcp.tools.pdfTools" }
]
</cfscript>
CFC example
component displayname="healthcareTools" hint="Healthcare tools" {
/**
* Fetch users by search term
* @searchTerm The search term to find users
* @return Struct with user data
*/
remote struct function fetchUsers(required string searchTerm) {
// Implementation
return {
success: true,
users: queryResults,
totalFound: queryResults.recordCount
};
}
/**
* Get patient details
* @patientId Patient identifier
* @return Patient information struct
*/
remote struct function getPatientDetails(required string patientId) {
// Implementation
return {
id: patientId,
name: "John Doe",
age: 45
};
}
}
Rules
1. Only functions with remote access modifier are exposed
2. Function parameters become tool arguments
3. Return values must be structs or simple types
4. Tool name format: componentName.functionName (e.g.,
healthcareTools.fetchUsers)
Configure prompts
Prompts defined on the server allow you to codify workflows in one place and share them
with many clients.
For example,
<cfscript>
prompts: [
{
name: "generate_discharge_summary",
title: "Generate Discharge Summary",
description: "Generate a comprehensive discharge summary for a
patient",
arguments: [
{
name: "patientName",
description: "Name of the patient",
required: true
},
{
name: "includeLabResults",
description: "Include lab results in summary",
required: false
}
],
template: "Generate a comprehensive discharge summary for patient
{patientName}. Include diagnosis, treatment, medications, and follow-up
instructions."
}
]
</cfscript>
Prompt parameters
Parameter Type Required Description
name String Yes Unique prompt identifier
title String Yes Human-readable display name
description String Yes What the prompt does
arguments Array No Expected parameters for the template
template String Yes Prompt text with {placeholders}
Argument parameters
Parameter Type Required Description
name String Yes Parameter name (used in placeholders)
description String Yes Parameter description
required Boolean Yes Whether parameter is mandatory
Clients can then retrieve and use these templates by name, ensuring consistency across
applications.
Configure resources
Resources provide access to files and data. Resources expose documents and other data
sources over MCP. In CF, you typically delegate reading to a helper such as
resourceReader.
For example,
<cfscript>
// Create resource reader helper
resourceReader = createObject("component", "mcp.tools.ResourceReader");
resources: [
{
uri: "healthcare://patient-data/P001/ct-scan",
name: "ct_scan_p001",
title: "Latest Chest CT Scan - John Miller",
description: "Chest CT scan results for patient P001",
mimeType: "application/pdf",
readResourceHandler: function(readResourceReq) {
return resourceReader.readResource("ct-scan-p001.pdf");
}
},
{
uri: "healthcare://templates/discharge-summary",
name: "discharge_template",
title: "Discharge Summary Template",
description: "Standard discharge summary template",
mimeType: "text/plain",
readResourceHandler: function(readResourceReq) {
return resourceReader.readResource("discharge-template.txt");
}
}
]
</cfscript>
Resource parameters
Parameter Type Required Description
uri String Yes Unique resource identifier (custom
protocol)
name String Yes Short identifier
title String Yes Human-readable display name
description String Yes Resource description
mimeType String Yes Content type (e.g.,
"application/pdf", "text/plain")
readResourceHandler Function Yes Function that returns resource content
Common MIME types
MIME Type Description Use Case
application/pdf PDF documents Medical records, reports
text/plain Plain text Notes, templates
application/json JSON data Structured data
text/html HTML documents Formatted reports
image/jpeg JPEG images X-rays, photos
CFC caching
Tool CFCs can be expensive to instantiate repeatedly. The cfcCaching flag lets you cache
them:
<cfscript>
cfcCaching = true;
</cfscript>
With caching:
• The first time a tool is used, its CFC is instantiated and cached.
• Subsequent calls reuse that instance.
This is almost always what you want in production, unless your CFCs have side effects that
require fresh instances.
CORS configuration
Enables browser-based access to the MCP server.
corsEnabled: true
Request handling (HTTP entry point)
After you have a configured MCP server object, you still need a way for external clients to
reach it. The simplest pattern is:
1. Create the server in Application.cfc and store it in application.mcpServer.
2. Implement a CFC with a remote method that acts as the HTTP “front door” for MCP
messages.
For example,
<cfscript>
// Resource reader helper
resourceReader = createObject("component", "mcp.tools.ResourceReader");
// Define resources
resourcesArray = [
{
uri: "healthcare://patient-data/P001/ct-scan",
name: "ct_scan_p001",
title: "CT Scan - Patient P001",
description: "Latest chest CT scan results",
mimeType: "application/pdf",
readResourceHandler: function(req) {
return resourceReader.readResource("ct-scan-p001.pdf");
}
}
];
// Define prompts
promptsArray = [
{
name: "generate_discharge_summary",
title: "Generate Discharge Summary",
description: "Generate comprehensive discharge summary",
arguments: [
{
name: "patientName",
description: "Name of the patient",
required: true
}
],
template: "Generate discharge summary for patient {patientName}
including diagnosis, treatment, and follow-up."
}
];
// Create server configuration
configData = {
serverInfo: {
name: "Healthcare MCP Server",
version: "1.0.0"
},
capabilities: {
tools: true,
prompts: true,
resources: true
},
tools: [
{ cfc: "mcp.tools.healthcareTools" },
{ cfc: "mcp.tools.emailTool" },
{ cfc: "mcp.tools.pdfTools" }
],
prompts: promptsArray,
resources: resourcesArray,
cfcCaching: true,
corsEnabled: true
};
// Create and register server
if (!structKeyExists(application, "mcpServer")) {
application.mcpServer = createMcpServer(configData);
}
// Handle incoming requests
application.mcpServer.handleRequestAndWriteResponse();
</cfscript>
Registering server with a client
Once the server is deployed, register it with an MCP client.
For example,
<cfscript>
// Client configuration pointing to your server
clientConfig = {
transport: {
type: "http",
url: "http://127.0.0.1:8500/mcp/healthcareServer.cfm"
},
clientInfo: {
name: "healthcare-client",
version: "1.0.0"
}
};
mcpClient = createMCPClient(clientConfig);
</cfscript>
Error handling and timeouts
MCP adds a layer of structured protocol on top of your logic. When things go wrong, it’s
important to distinguish between:
1. Transport errors: timeouts, network failures, HTTP 503s, STDIO crashes.
2. JSON‑RPC errors: invalid method, bad params, internal server errors, represented
by a top-level error object.
3. Tool-level errors: business logic failures, flagged via result.isError and possibly
custom fields.
Timeouts
In configData, you define:
• initializationTimeout – how long the client waits for the initialize handshake to
complete.
• requestTimeout – how long the client waits for each MCP request (tool calls,
resource reads, etc).
For example,
<cfscript>
configData = {
transport: { /* ... */ },
clientInfo: { name : "stable-client", version : "1.0.0" },
capabilities: { sampling : false, roots : false, elicitation : false },
initializationTimeout : 10,
requestTimeout : 10
};
</cfscript>
If a server is slow or unresponsive, the client should raise an exception when a timeout is
reached.
Security and best practices
MCP often sits right next to sensitive systems: ticketing, documentation, source control,
customer data, and logs. That makes security and operational hygiene non-negotiable.
Protect secrets
Many MCP servers expect tokens or API keys via environment variables (env) or HTTP
headers. In CF:
• Never log token values. Mask them if you must log their presence.
• Keep secrets out of source control; load them from secure storage or environment.
• Make sure any configFile with secrets or endpoints has restricted permissions.
Use roots to enforce scope
• Roots are not just hints. They should be part of your security design:
• Align roots with tenants, projects, or security domains.
• Change roots when a user’s context changes.
• Avoid giving “one big root” that covers everything unless that is truly necessary.
This reduces the risk of returning or summarizing resources the current user shouldn’t see.
Allow list trusted MCP Servers
Avoid letting users specify arbitrary MCP endpoints:
• Maintain an allow-list of MCP servers (in mcpServers.json or CF config) and validate
that any url or command you use belongs to that list.
• If you accept user input that influences MCP behavior, never let it override the
actual url or command.
This prevents CF from calling malicious or untrusted MCP servers.
Be careful with STDIO servers
STDIO MCP servers run under the same OS user as ColdFusion and therefore inherit its
access:
• Ensure the script you run (e.g., server.js) is from a trusted source and maintained
securely.
• Lock down the directories where these scripts reside (no world-writable
directories).
• Keep environment minimal: only the tokens and settings the server absolutely
needs.
Harden HTTP endpoints
For CF MCP servers exposed via HTTP:
• Use HTTPS in production environments.
• Put them behind auth, firewall rules, or internal networks if necessary.
• Log enough information to trace misuse but not so much that you leak sensitive
data.
By combining capabilities, roots, and careful transport configuration, you can keep your
MCP integration aligned with your broader security posture.
Frequently asked questions
Can I use multiple MCP servers at once?
Yes. Define multiple server configurations (for example in Application.cfc), create one
MCP client per server at startup, and retrieve the appropriate client (like
application.mcpClients["jira"] or ["wiki"]) whenever you need to call a tool.
What happens if an MCP server returns an error?
Wrap every MCP call in try/catch, inspect the returned struct for JSON-RPC errors
(error object) and tool-level flags (result.isError), log the details, and throw a clear
application‑level exception so your code can handle the failure gracefully.
Is MCP secure?
MCP itself supports secure patterns, but security depends on your implementation: keep
API tokens out of logs and source, only connect to trusted/vetted MCP servers, lock down
local stdio servers in production, and keep all MCP components patched and current.
Can MCP access my database directly?
Not automatically. MCP servers can only access databases if you explicitly implement
tools that connect to them. When you do, enforce least privilege on DB credentials and
validate all inputs before executing queries.
Do I need an AI model to use MCP from ColdFusion?
No. You can call MCP tools directly from CFML as structured API calls. AI models are
optional and mainly used when you want natural-language orchestration or agentic
behavior.
Can I use MCP in development but disable it in production?
Yes. Guard MCP initialization with environment checks or feature flags so that certain MCP
clients (especially experimental or local ones) are only created in dev/stage and not in
production.
How do I know which tools a server exposes?
After building the client, call mcpClient.listTools(). This returns a list of tool
definitions (names, descriptions, and possibly schemas) that you can inspect, log, or
display on an admin page.
Can I restrict which tools my CF app is allowed to call?
Yes. Route all tool invocations through a small dispatcher that only permits a curated set
of tool names, and reject or ignore anything outside that allow‑list.
What happens if a local MCP server hangs or crashes?
Your CF calls will time out or throw exceptions. Use initializationTimeout and
requestTimeout in the MCP client config, and always wrap calls in try/catch with
proper logging so you can detect and recover from these conditions.
Is it safe to point CF at public/open MCP servers?
Only if they’re explicitly approved. Treat public MCP servers like any third‑party service:
review their security posture, avoid sending sensitive data, and don’t expose internal
tokens or systems to untrusted endpoints.
Can MCP servers be versioned and upgraded without breaking CF?
Yes, but you should track their versions and rerun your MCP integration tests after each
upgrade. If a server changes tool names or schemas, you may need to update your
ColdFusion code accordingly.
Can I share one MCP client across multiple requests?
Yes. It is common to build MCP clients once (in onApplicationStart) and store them in
application scope, reusing them across requests, assuming you follow the standard
thread‑safe usage patterns.
Does MCP support streaming responses?
The MCP spec supports streaming (for example, streamable HTTP), but whether you can
use it from ColdFusion depends on the current CF MCP client implementation. Unless
explicitly documented, design your integration assuming non‑streaming responses.


---

## PDF 5: MCP Function Reference.pdf

createMCPClient ...................................................................................................... 1
listTools ................................................................................................................... 9
callTool .................................................................................................................. 10
listResources.......................................................................................................... 11
readResource ......................................................................................................... 12
listPrompts ............................................................................................................. 13
getPrompt .............................................................................................................. 13
addRoot ................................................................................................................. 14
getRoot .................................................................................................................. 15
removeRoot ............................................................................................................ 16
listRoots ................................................................................................................. 17
rootsListChangedNotification .................................................................................. 18
createMCPServer .................................................................................................... 19
handleRequestAndWriteResponse ........................................................................... 23
createMCPClient
Description
Create one or more MCP client instances from a configuration struct.
Returns
List of MCP client objects that exposes the runtime methods like:
• listTools()
• callTool()
• listPrompts()
• getPrompt(params)
• listResources()
• readResource(uri)
Category
MCP functions
Syntax
createMCPClient(configStruct)
History
New in ColdFusion 2025.1
Parameters
The configuration struct contains:
Single server
Field Data
type
Requir
ed
Description
transport Struct Yes Describes how the client reaches one MCP
server.
• HTTP transport: Use this when the MCP
server is exposed over HTTP/streamable
HTTP.
transport = {
type = "http",
url =
"https://remote.mcpservers.org/f
etch/mcp"
}
o type: must be "http" for
HTTP-based servers.
o url: full URL to the MCP
endpoint (e.g. /mcp,
/mcp/call, /fetch/mcp), as
shown in spec examples.
• stdio transport: Use this when
the MCP server runs as a local
process spawned by CF
(Node/Python/Java/CF):
transport = {
type : "stdio",
command :
"/usr/local/bin/node",
args :
[ "/path/to/server.js" ],
env = { apiKey : "sk-
xxx" } // optional, server-
specific
};
• type: "stdio" for
subprocess-based servers.
• command: executable to run (e.g.
node, python, java).
• args: arguments array, typically
including the MCP server script or
jar.
• env: (optional) map of
environment variables the MCP
server needs (API keys, hosts,
tokens).
clientInfo Struct No Identifies your MCP client to the server during
initialization.
clientInfo = {
name = "weather MCP Client",
version = "1.0.0"
};
• name: descriptive, helps the
server/logs identify the
client (e.g. “CF Jira
Client”).
• version: version string for
your client (semantic
versioning is good practice).
capabilities Struct No Tells the server which optional MCP features
the client supports and intends to use.
capabilities = {
sampling : true,
roots : true,
elicitation : false
};
• sampling – whether the client
supports MCP sampling (asking
an LLM to generate
intermediate completions).
• roots – whether the client
will provide resource roots
(URIs that scope resources).
• elicitation – whether the
client supports interactive
elicitation workflows.
initializationTim
eout
Numer
ic
No Maximum time to wait for the MCP to
initialize handshake. (default: 10, max: 3600).
initializationTimeout : 10; //
seconds
requestTimeout Numer
ic
No Max time to wait for tool/resource/prompts
calls. (default: 30, max: 3600)
requestTimeout : 10; // seconds
loggingConsumer Functi
on
No Receives structured log events emitted by
the MCP server. This is the primary hook for:
• Centralized logging of MCP server activity.
• Debugging tool calls and resource reads.
• Building observability pipelines.
function loggingConsumer(any messages)
{ ... }
Whenever the server sends logs to the client,
for example, on tool calls, errors, or general
server events. This is especially useful in
production to debug tool behavior without
accessing server logs directly.
samplingConsumer Functi
on
No Receives events related to sampling, when
the MCP client/server interacts with an LLM
to generate intermediate completions or
sampling-based operations. This is useful
when you want to:
• Inspect intermediate prompts.
• Log or audit how sampling is used.
function samplingConsumer(array
messages) { ... }
messages is typically an array of sampling
message objects, often including:
• Role ("assistant", "system", etc.).
• Content (text, tool call suggestions, etc.).
• Metadata (timestamps, IDs).
elicitationConsum
er
Functi
on
No Handles elicitation events, interactive flows
where the server requests additional input or
clarifications (e.g., the system needs more
user info to proceed). This is where you
might:
• Present follow-up questions in a UI.
• Capture additional form fields or user
responses.
• Decide whether to continue or abort a
workflow.
function elicitationConsumer(array
messages) { ... }
Like samplingConsumer, messages is an
array of elicitation messages (questions,
prompts for input, etc.).
toolsChangeConsum
er
Functi
on
No Notified when the available tools change for
that MCP client. This can happen if:
• The MCP server hot‑loads new tools.
• Some tools are disabled/enabled at
runtime.
• A multi‑tenant configuration and your
client’s context changes.
function toolsChangeConsumer(array tools)
{ ... }
Multiple servers
When you want one ColdFusion app to talk to multiple MCP servers at once, you can still
use createMCPClient(configData). The key difference from the single‑server case is that
your configData now references a config file that describes multiple servers, and
createMCPClient will return one client per server.
Field Data type Required Description
configFile String Yes A file path (string) pointing to a
JSON configuration file (for
example, mcpServers.json).
The JSON file describes one or
more MCP servers, each with
its own transport settings (type,
url / command / args / env).
clientInfo Struct No When you use multiple MCP
servers via
createMCPClient(configData)
with a configFile, the clientInfo
field in configData is a shared
identity that is applied to each
MCP client created from that
config.
clientInfo = {
name = "Healthcare
MCP Client",
version = "1.0.0"
};
capabilities Struct No When you configure multiple
MCP servers via
createMCPClient(configData)
with a configFile, the
capabilities field in configData
is a shared capabilities
descriptor that applies to every
MCP client created from that
config.
capabilities = {
sampling : true,
roots : true,
elicitation : false
};
• sampling: client supports
MCP sampling callbacks
(LLM-assisted sampling).
• roots: client understands
and will provide roots to
scope resources.
• elicitation: client
participates in elicitation
(interactive
ask‑for‑more‑info flows).
initializationTimeout Numeric No Same as that of a single MCP
server.
requestTimeout Numeric No Same as that of a single MCP
server.
loggingConsumer Function No Same as that of a single MCP
server.
samplingConsumer Function No Same as that of a single MCP
server.
elicitationConsumer Function No Same as that of a single MCP
server.
Example
Single server
<cfscript>
transportConfig = {
"type" = "http",
"url" = "https://remote.mcpservers.org/fetch/mcp"
};
clientInfo = {
"name" : "CF MCP Client with Consumers",
"version" : "1.0.0"
};
capabilities = {
"sampling" : true,
"roots" : true,
"elicitation" : true
};
configData = {
"transport": transportConfig,
"clientInfo": clientInfo,
"capabilities": capabilities,
"initializationTimeout": 10,
"requestTimeout": 10,
samplingConsumer: function(messages) {
writeLog(file = "MCP_SAMPLING", text = serializeJSON(messages));
},
elicitationConsumer: function(messages) {
application.lastElicitation = messages;
writeLog(file = "MCP_ELICITATION", text = serializeJSON(messages));
},
loggingConsumer: function(logEvent) {
var payload = structKeyExists(logEvent, "data") ? logEvent.data :
logEvent;
writeLog(file = "MCP_LOGS", text = serializeJSON(payload));
},
toolsChangeConsumer: function(tools) {
application.mcpToolsCache = tools;
writeLog(file = "MCP_CHANGES", text = "Tools changed: " &
arrayLen(tools));
}
};
clients = createMCPClient(configData);
mcpClient = clients[1];
</cfscript>
Multiple servers
<cfscript>
var configData = {
// Multi-server JSON descriptor
configFile: getDirectoryFromPath(getCurrentTemplatePath()) &
"mcpServers.json",
// Shared client identity for all MCP servers in the file
clientInfo: {
name : "Healthcare MCP Client",
version : "1.0.0"
},
// Shared capabilities
capabilities: {
sampling : true,
roots : true,
elicitation : false
},
// Shared timeouts
initializationTimeout : 50,
requestTimeout : 50,
// Optional shared consumers
samplingConsumer: function(messages) {
writeLog(file = "MCP_SAMPLING", text = serializeJSON(messages));
},
elicitationConsumer: function(messages) {
application.lastElicitation = messages;
writeLog(file = "MCP_ELICITATION", text = serializeJSON(messages));
},
loggingConsumer: function(logEvent) {
var payload = structKeyExists(logEvent, "data") ? logEvent.data :
logEvent;
writeLog(file = "MCP_LOGS", text = "MCP log: " &
serializeJSON(payload));
},
toolsChangeConsumer: function(tools) {
writeLog(file = "MCP_CHANGES",
text = "Tools changed. Count: " & arrayLen(tools));
},
resourcesChangeConsumer: function(resources) {
writeLog(file = "MCP_CHANGES",
text = "Resources changed. Count: " & arrayLen(resources));
}
};
// Create one client per server defined in mcpServers.json
var clients = createMCPClient(configData);
application.mcpClients = clients; // store for later use
</cfscript>
listTools
Description
The listTools function returns the list of all tools exposed by the connected MCP server for
a given MCP client. Each tool entry includes metadata such as the tool’s name,
description, and input schema. This is typically the first method you call after creating an
MCP client, to discover what capabilities the server provides.
Returns
An array of structs, where each struct describes a tool.
Category
MCP functions
Syntax
listTools()
Called as an instance method on an MCP client object:
tools = mcpClient.listTools()
History
New in ColdFusion 2025.1
Parameters
None
Example
<cfscript>
transport = {
"type": "http",
"url": "https://gitmcp.io/langchain-ai/langgraph"
}
mcpClientConfig = {
"transport": transport,
"requestTimeout": 30,
"initializationTimeout": 10
}
mcpclient = createMCPClient(mcpClientConfig);
myprompts = mcpClient[1].listtools()
toolsArray=myprompts.tools
writeOutput("<b>List of tools</b>" & "<br>")
for (p in toolsArray) {
writeOutput(p.name & "<br>")
}
</cfscript>
Output
List of tools
fetch_langgraph_documentation
search_langgraph_documentation
search_langgraph_code
fetch_generic_url_content
callTool
Description
The callTool function invokes a single MCP tool by name on the connected MCP server,
passing structured arguments and returning the tool’s response. It is the primary way for
your ColdFusion application to execute MCP tools.
Returns
A struct representing the JSON‑RPC result.
Category
MCP functions
Syntax
callTool(string toolName, struct config)
Parameters
Field Data type Required Description
toolName String Yes The name of the tool to invoke.
This must match one of the tool
names returned by listTools()
for that MCP server.
config Struct Yes A struct of arguments to pass to
the tool. Keys and types must
match the tool’s inputSchema
as described in its metadata.
Example argument struct for
get_weather:
{ location = "New York" }
listResources
Description
The listResources function retrieves the list of all resources exposed by the connected
MCP server for the current MCP client. Each resource entry describes an externally
accessible piece of read‑only data (files, documents, logs, custom URIs, etc.) that the
server makes available, typically scoped by roots if your client has configured them.
Returns
An array of structs, where each struct describes a resource.
Category
MCP functions
Syntax
listResources()
Called as an instance method on an MCP client object:
resources = mcpClient.listResources();
History
New in ColdFusion 2025.1
Parameters
None
readResource
Description
The readResource function retrieves the full content of a specific resource from the MCP
server, identified by its URI. This method enables your ColdFusion application to access
external files, documents, logs, or other read-only resources exposed by the server,
provided you have permission. The returned result includes the resource content and
metadata such as MIME type and encoding.
Returns
A struct containing the resource content and metadata.
Category
MCP functions
Syntax
readResource(string uri)
Called as an instance method on an MCP client:
resourceData = mcpClient.readResource(resourceUri);
History
New in ColdFusion 2025.1
Parameters
Field Data type Required Description
uri String Yes The unique URI of the resource to
retrieve, e.g. "file:///logs/app.log"
or "healthcare://patient-
data/P001/ct-scan".
listPrompts
Description
The listPrompts function retrieves the list of all prompts that the MCP server exposes to
your client. Each prompt typically describes a reusable AI interaction pattern, such as
code review, summarization, or workflow step, along with its required and optional
arguments.
Returns
An array of structs, each describing a prompt with its key metadata.
Syntax
listPrompts()
Call as an instance method on your MCP client:
prompts = mcpClient.listPrompts();
History
New in ColdFusion 2025.1
Parameters
None
getPrompt
Description
The getPrompt function retrieves the full, resolved definition of a specific prompt from the
MCP server. While listPrompts() gives you a catalog of prompt names, titles, descriptions,
and argument definitions, getPrompt lets you:
• Fetch a prompt by name.
• Optionally provide argument values.
• Receive a fully constructed prompt payload (often including ready‑to‑use
messages) that your application or AI service can send directly to a model.
Returns
A struct representing the JSON‑RPC result of prompts/get.
Syntax
function getPrompt(struct params)
Called as an instance method on an MCP client object:
promptDef = mcpClient.getPrompt(params);
History
New in ColdFusion 2025.1
Parameters
Field Data type Required Description
name String Yes Name of the prompt to fetch
(must match one of the names
returned by listPrompts()).
params Struct No Key/value pairs for prompt
arguments (e.g. { code = "..." });
used to fill the template or
generate messages.
addRoot
Description
The addRoot function registers a root with your MCP client at runtime. A root is a named
URI that provides instruction to the MCP server.
Roots are used to:
• Scope which resources the client can see (security & least privilege).
• Give the server hints about relevant directories, repositories, or data domains.
• Improve performance and relevance when listing or reading resources.
Returns
Void
Syntax
addRoot(struct root)
Called as an instance method on an MCP client:
mcpClient.addRoot(root)
History
New in ColdFusion 2025.1
Parameters
Field Data type Required Description
name String Yes Logical name/label for this root.
uri String Yes URI for the root (e.g. file:// or
custom schemes).
getRoot
Description
The getRoot function retrieves the definition of a single root previously associated with an
MCP client. A root is a named URI that tells the server where to look for relevant resources
(for example, a directory, repository, or logical data domain).
Use getRoot when you need to:
• Inspect which root a given name resolves to (e.g., "samples" →
file:///home/user/samples).
• Validate that a particular root has been registered before using it in your own logic.
Returns
A struct describing the root if found, or null / undefined (depending on implementation) if
no root with that name exists.
Syntax
getRoot(string name)
Called as an instance method on an MCP client:
root = mcpClient.getRoot("samples");
History
New in ColdFusion 2025.1
Parameters
Field Data type Required Description
name String Yes Logical name/label for this root.
removeRoot
Description
The removeRoot function removes a previously registered root from your MCP client’s
configuration. A root is a named URI that tells the MCP server which locations are in scope
for resources. Removing a root:
• Narrows or changes the set of resources the client can see.
• Is useful when a directory, repository, or data domain should no longer be
accessible in each session.
• Helps enforce least‑privilege and dynamic scoping (e.g., per user, per project).
Returns
Boolean
• True: if a root with the given name was found and removed.
• False: if no root with that name existed and thus nothing was changed.
Syntax
removeRoot(string name)
Called as an instance method on an MCP client:
removed = mcpClient.removeRoot("testcases");
History
New in ColdFusion 2025.1
Parameters
Field Data type Required Description
name String Yes Logical name of the root to
remove.
listRoots
Description
The listRoots function returns the list of all roots currently registered on an MCP client. A
root is a named URI. Listing roots is useful for:
• Inspecting what resource scopes are active for a client.
• Debugging why certain resources are (or are not) visible.
Returns
An array of root structs, each describing one root.
Syntax
listRoots()
Called as an instance method on an MCP client:
roots = mcpClient.listRoots();
History
New in ColdFusion 2025.1
Parameters
None
rootsListChangedNotification
Description
The rootsListChangedNotification function is a callback that your application implements
and passes into the MCP client configuration. It is invoked whenever the MCP client
detects that its list of roots has changed.
You use this notification to:
• Keep an up‑to‑date, in‑memory list of active roots.
• Update UI elements or admin pages that show which directories or data domains
are currently in scope.
• Log and audit changes to resource access scope.
• Trigger recalculation or cache invalidation for resource-dependent features.
Returns
Void
Syntax
rootsListChangedNotification(array roots)
History
New in ColdFusion 2025.1
Parameters
Field Data type Required Description
roots Array Yes The current list of root
descriptors after the change.
createMCPServer
Description
The createMCPServer(config) function creates and initializes a ColdFusion‑based MCP
server from a configuration struct. This server exposes CFML tools (CFC methods),
prompts (templates), and resources (data like files or documents) via the Model Context
Protocol (MCP) so that MCP clients (e.g., ColdFusion apps, Cursor, Claude Desktop) can
call them using standard MCP methods like tools/list, tools/call, prompts/get, and
resources/read.
Returns
any
The returned object represents the MCP server and is normally:
• Stored in application scope (for example, application.mcpServer) so it can serve
JSON‑RPC requests.
• Used internally by your HTTP or stdio entry points to handle incoming MCP calls
(initialize, tools/list, tools/call, prompts/list, resources/read, etc.).
Syntax
createMCPServer(struct config)
Called in CFML as:
mcpServer = createMCPServer(config);
History
New in ColdFusion 2025.1
Parameters
Field Data type Required Description
serverInfo Struct Yes Identifies the MCP server.
serverInfo = {
name : "ColdFusion Healthcare
Server",
version : "1.0"
};
• name: human‑readable name of the
MCP server.
• version: the version of the MCP
server.
capabilities Struct Yes Declares what the MCP server supports
(tools, prompts, resources, logging,
etc.).
capabilities = {
tools : true,
prompts : true,
resources : true,
serverInfo : serverInfo
// may embed or mirror
serverInfo
};
• tools: whether this server
exposes tools.
• prompts: whether it exposes
prompts.
• resources: whether it exposes
resources.
• serverInfo: nested server info,
depending on implementation.
tools Array of
structs
No Lists the CFCs that implement MCP
tools. Each entry describes a CF
component that contains one or more
public functions to be exposed as tools.
tools = [
{ cfc :
"mcp.tools.WeatherTools" },
{ cfc :
"mcp.tools.HealthcareTools" }
];
• cfc: the fully-qualified CFC
name (path resolvable via CF
mappings).
prompts Array of
structs
No Defines prompts that the server
exposes for prompts/list and
prompts/get.
prompts = [
{
name :
"generate_discharge_summary",
title :
"Discharge Summary",
description : "Generate
a patient discharge summary.",
arguments :
[ { name : "patientName",
required : true } ],
template : "Generate
a detailed discharge summary
for patient {patientName}."
}
];
• Name: prompt name (used in
prompts/get).
• title: user-facing title of all prompts.
• description: what the prompt does.
• arguments: array of { name,
required } or richer schema.
• template: prompt text with
placeholders (e.g., {patientName}).
resources Array of
structs
No Defines resources the MCP server
exposes via resources/list and
resources/read.
resources = [
{
uri : "healthcare://patient-
data/P001/ct-scan",
name : "ct_scan",
title : "CT Scan - P001",
description : "Chest CT scan for
patient P001",
mimeType : "application/pdf",
readResourceHandler =
function(req) {
return
fileReadBinary(expandPath("/data/ct-
scan-P001.pdf"));
}
}
];
• uri: resource identifier (custom
scheme or file://).
• name: short name.
• title: human-friendly title.
• description: description.
• mimeType: MIME type
(application/pdf, text/plain, etc.).
• readResourceHandler: CF function
called to produce the content when
resources/read is invoked.
cfcCaching Boolean No Controls whether CFCs used for tools
are cached for performance.
cfcCaching = true
• true: reuse CFC instances
instead of re-instantiating
for each call.
• false: instantiate fresh CFCs per call
(slower, but can be useful for
debugging or if you need truly
stateless behavior).
handleRequestAndWriteResponse
Description
The handleRequestAndWriteResponse function is a server-side helper you implement
(typically in a .cfm or remote CFC method) that:
1. Reads the incoming JSON‑RPC request for MCP (from
getHttpRequestData().content or similar).
2. Forwards the request struct to your MCP server instance (created via
createMCPServer(config)) to be handled.
3. Serializes the MCP server’s response back to the client and writes it as an HTTP
response with application/json content type.
It effectively glues your ColdFusion HTTP endpoint to the MCP server object so external
MCP clients (Cursor, Claude Desktop, other CF apps) can call initialize, tools/list,
tools/call, prompts/get, resources/read, etc. over HTTP.
Returns
Void
Syntax
handleRequestAndWriteResponse()
For example,
handleRequestAndWriteResponse() access="remote" returntype="void" output="false"
handleRequestAndWriteResponse is implemented in the same file or via a reusable
function in a shared CFC.
History
New in ColdFusion 2025.1
Parameters
None

---

## Notes

**Add any additional notes or observations here:**

---
