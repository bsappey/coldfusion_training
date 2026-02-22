<!--- Tag Syntax: Secure AI Integration (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates secure AI integration with input validation and error handling.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfset userInput = HTMLEditFormat(Form.userQuery)>
<cfset sanitizedInput = ValidatePrompt(userInput)>

<cftry>
    <cfset response = aiService.chat(sanitizedInput, session.userId)>
    <cfset LogAIInteraction(userInput, response)>
    <cfcatch>
        <!--- Fallback response --->
        <cfset response = {message: "I apologize, but I cannot process that request at this time."}>
        <cfset LogError(cfcatch)>
    </cfcatch>
</cftry>

<cfoutput>#HTMLEditFormat(response.message)#</cfoutput>
