<!--- Tag Syntax: Complete RAG Workflow (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates a complete RAG (Retrieval Augmented Generation) workflow.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfset userQuery = "How do I use AI in ColdFusion?">

<!--- Step 1: Create chat model and AI service --->
<cfset chatModel = getChatModel({
    PROVIDER: "openAi",
    APIKEY: application.apiKey,
    MODELNAME: "gpt-4o-mini"
})>

<cfset aiService = getAIService({
    chatModel: chatModel,
    systemMessage: "You are a helpful ColdFusion assistant."
})>

<!--- Step 2: Search vector store for relevant context --->
<cfset contextDocs = vs.search({
    text: userQuery,
    topK: 3,
    minScore: 0.7
})>

<!--- Step 3: Build context string --->
<cfset context = "">
<cfloop array="#contextDocs#" item="doc">
    <cfset context = context & doc.text & "
">
</cfloop>

<!--- Step 4: Generate response with context --->
<cfset chatRequest = {
    systemMessage: "You are a helpful assistant. Use the provided context to answer questions accurately.",
    userMessage: {
        message: "Context:
" & context & "

Question: " & userQuery
    }
}>

<cfset response = aiService.chat(chatRequest, "user123")>

<cfoutput>#response.message#</cfoutput>
