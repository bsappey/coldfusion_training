<!--- Tag Syntax: Structured Chat Request (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to use structured chat requests with system and user messages.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfset chatRequest = {
    systemMessage: "You are a code converter.",
    userMessage: { message: "Convert 'console.log(x)' to ColdFusion." }
}>

<cfset response = chatModel.chat(chatRequest)>

<cfoutput>#response.message#</cfoutput>
