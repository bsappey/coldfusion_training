<!--- Script Syntax: Creating Embeddings (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to create embeddings for text using GetEmbeddingModel().
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    embedConfig = {
        provider: "openai",
        apiKey: application.apiKey,
        modelName: "text-embedding-3-small",
        dimension: 1536
    };
    
    embeddingModel = GetEmbeddingModel(embedConfig);
    
    // Generate single embedding
    text = "ColdFusion integrates AI models and vector databases.";
    result = embeddingModel.embed(text);
    
    writeOutput("<p>Embedding dimension: " & arrayLen(result.embeddings) & "</p>");
    writeOutput("<p>Tokens used: " & result.tokenUsage.totalTokens & "</p>");
</cfscript>
