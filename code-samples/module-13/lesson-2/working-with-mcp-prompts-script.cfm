<!--- Script Syntax: Working with MCP Prompts (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to work with prompts from an MCP server.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    prompts = mcpClient.listPrompts();
    
    promptDef = mcpClient.getPrompt({
        name: "explain-code",
        arguments: {
            code: "<cfquery name='q' datasource='ds'>SELECT * FROM users</cfquery>",
            language: "coldfusion"
        }
    });
    
    writeOutput(promptDef);
</cfscript>
