<!--- Script Syntax: Reading MCP Resources (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to read resources from an MCP server.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    resources = mcpClient.listResources();
    
    uri = "file:///logs/app.log";
    if (mcpClient.isResourceReadable(uri)) {
        resData = mcpClient.readResource(uri);
        if (arrayLen(resData.contents) > 0 && structKeyExists(resData.contents[1], "text")) {
            writeOutput("<pre>" & encodeForHtml(resData.contents[1].text) & "</pre>");
        }
    }
</cfscript>
