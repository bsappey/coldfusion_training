<!--- Tag Syntax: Basic Chat Model Usage (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to create a chat model and send a simple prompt.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfset chatConfig = {
    PROVIDER: "openAi",
    APIKEY: application.apiKey,
    MODELNAME: "gpt-4o-mini",
    TEMPERATURE: 0.7
}>

<cfset chatModel = getChatModel(chatConfig)>

<!--- Send a simple prompt --->
<cfset response = chatModel.chat("Explain quantum computing in one sentence.")>

<cfoutput>#response.message#</cfoutput>
