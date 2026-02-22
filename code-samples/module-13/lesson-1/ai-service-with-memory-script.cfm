<!--- Script Syntax: AI Service with Memory (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to create an AI service with memory and persona management.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    chatModelConfig = {
        PROVIDER: "openAi",
        APIKEY: application.apiKey,
        MODELNAME: "gpt-4o-mini"
    };
    
    chatModel = getChatModel(chatModelConfig);
    
    aiServiceConfig = {
        chatModel: chatModel,
        systemMessage: "You are a helpful ColdFusion assistant.",
        chatMemory: {
            maxMessages: 20,
            perUser: true
        }
    };
    
    aiService = getAIService(aiServiceConfig);
    
    // Chat with memory (scoped to user)
    response = aiService.chat("What is the capital of Japan?", "user123");
    
    writeOutput(response.message);
</cfscript>
