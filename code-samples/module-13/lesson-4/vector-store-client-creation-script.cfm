<!--- Script Syntax: Vector Store Client Creation (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to create a vector store client.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    // In-memory for testing
    client = GetVectorStoreClient();
    
    // Or with provider configuration
    vs = GetVectorStoreClient({
        provider: "milvus",
        url: "https://127.0.0.1:19530",
        apiKey: "YOUR_API_KEY",
        collectionName: "cf_intro",
        dimension: 384,
        metricType: "COSINE",
        embeddingModel: "text-embedding-3-small"
    });
</cfscript>
