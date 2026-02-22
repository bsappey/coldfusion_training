<!--- Script Syntax: Function Tools with AI Service (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to register CFC methods as function tools for the AI to call.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    chatModel = getChatModel({
        PROVIDER: "openAi",
        APIKEY: application.apiKey,
        MODELNAME: "gpt-4o-mini"
    });
    
    aiServiceConfig = {
        chatModel: chatModel,
        systemMessage: "You are a support assistant.",
        tools: [
            {
                cfc: "tool.SupportTool",
                methods: [
                    {
                        method: "getTicketStatus",
                        description: "Get the status of a support ticket by ID. Use when user asks about ticket status."
                    },
                    {
                        method: "createTicket",
                        description: "Create a new support ticket from user input. Use when user wants to report an issue."
                    }
                ]
            }
        ]
    };
    
    aiService = getAIService(aiServiceConfig);
    
    // AI can now call your CFC methods
    response = aiService.chat("My ticket ID is TKT-12345. What is its status?", "user1");
    
    writeOutput(response.message);
</cfscript>
