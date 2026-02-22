<!--- Script Syntax: Basic Chat Model Usage (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to create a chat model and send a simple prompt.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    chatConfig = {
        PROVIDER: "openAi",
        APIKEY: application.apiKey,
        MODELNAME: "gpt-4o-mini",
        TEMPERATURE: 0.7
    };
    
    chatModel = getChatModel(chatConfig);
    
    // Send a simple prompt
    response = chatModel.chat("Explain quantum computing in one sentence.");
    
    writeOutput(response.message);
</cfscript>
