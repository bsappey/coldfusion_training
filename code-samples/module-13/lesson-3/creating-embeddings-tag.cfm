<!--- Tag Syntax: Creating Embeddings (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to create embeddings for text using GetEmbeddingModel().
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfset embedConfig = {
    provider: "openai",
    apiKey: application.apiKey,
    modelName: "text-embedding-3-small",
    dimension: 1536
}>

<cfset embeddingModel = GetEmbeddingModel(embedConfig)>

<!--- Generate single embedding --->
<cfset text = "ColdFusion integrates AI models and vector databases.">
<cfset result = embeddingModel.embed(text)>

<cfoutput>
    <p>Embedding dimension: #arrayLen(result.embeddings)#</p>
    <p>Tokens used: #result.tokenUsage.totalTokens#</p>
</cfoutput>
