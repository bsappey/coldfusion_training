<!--- Script Syntax: Secure AI Integration (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates secure AI integration with input validation and error handling.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    userInput = HTMLEditFormat(Form.userQuery);
    sanitizedInput = ValidatePrompt(userInput);
    
    try {
        response = aiService.chat(sanitizedInput, session.userId);
        LogAIInteraction(userInput, response);
    } catch (any e) {
        // Fallback response
        response = {message: "I apologize, but I cannot process that request at this time."};
        LogError(e);
    }
    
    writeOutput(HTMLEditFormat(response.message));
</cfscript>
