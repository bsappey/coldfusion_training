<!--- Tag Syntax: RAG with Explicit Embeddings (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates RAG workflow using explicit embeddings.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<!--- Create embedding model --->
<cfset embeddingModel = GetEmbeddingModel({
    provider: "openai",
    apiKey: application.apiKey,
    modelName: "text-embedding-3-small",
    dimension: 1536
})>

<!--- Generate query embedding --->
<cfset queryResult = embeddingModel.embed(userQuery)>
<cfset queryVector = queryResult.embeddings>

<!--- Search with explicit vector --->
<cfset contextDocs = vs.search({
    vector: queryVector,
    topK: 3,
    minScore: 0.7
})>
