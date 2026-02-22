<!--- Script Syntax: Batch Embedding Generation (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to generate embeddings for multiple texts in batch.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    texts = [
        "How to reset your account password in ColdFusion.",
        "Using vector databases for semantic search.",
        "Retrieval-Augmented Generation (RAG) with ColdFusion."
    ];
    
    batchResult = embeddingModel.embedAll(texts);
    
    writeOutput("<p>Generated " & arrayLen(batchResult.embeddings) & " embeddings</p>");
    writeOutput("<p>Total tokens: " & batchResult.tokenUsage.totalTokens & "</p>");
</cfscript>
