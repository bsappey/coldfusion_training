<!--- Tag Syntax: Calling MCP Tools (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to call tools provided by an MCP server.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfset toolName = "get_weather">
<cfset toolParams = { location: "New York" }>

<cfset result = mcpClient.callTool(toolName, toolParams)>

<cfoutput>#result#</cfoutput>
