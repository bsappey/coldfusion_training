<!--- Script Syntax: Calling MCP Tools (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to call tools provided by an MCP server.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    toolName = "get_weather";
    toolParams = { location: "New York" };
    
    result = mcpClient.callTool(toolName, toolParams);
    
    writeOutput(result);
</cfscript>
