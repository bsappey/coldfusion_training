<!--- Tag Syntax: AI Service with Memory (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to create an AI service with memory and persona management.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfset chatModelConfig = {
    PROVIDER: "openAi",
    APIKEY: application.apiKey,
    MODELNAME: "gpt-4o-mini"
}>

<cfset chatModel = getChatModel(chatModelConfig)>

<cfset aiServiceConfig = {
    chatModel: chatModel,
    systemMessage: "You are a helpful ColdFusion assistant.",
    chatMemory: {
        maxMessages: 20,
        perUser: true
    }
}>

<cfset aiService = getAIService(aiServiceConfig)>

<!--- Chat with memory (scoped to user) --->
<cfset response = aiService.chat("What is the capital of Japan?", "user123")>

<cfoutput>#response.message#</cfoutput>
