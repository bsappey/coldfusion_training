<!--- Tag Syntax: Batch Embedding Generation (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to generate embeddings for multiple texts in batch.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfset texts = [
    "How to reset your account password in ColdFusion.",
    "Using vector databases for semantic search.",
    "Retrieval-Augmented Generation (RAG) with ColdFusion."
]>

<cfset batchResult = embeddingModel.embedAll(texts)>

<cfoutput>
    <p>Generated #arrayLen(batchResult.embeddings)# embeddings</p>
    <p>Total tokens: #batchResult.tokenUsage.totalTokens#</p>
</cfoutput>
