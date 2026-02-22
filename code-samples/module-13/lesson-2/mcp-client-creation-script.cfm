<!--- Script Syntax: MCP Client Creation (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to create an MCP client to connect to MCP servers.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    configData = {
        transport: {
            type: "http",
            url: "http://127.0.0.1:8500/mcp/server.cfm"
        },
        clientInfo: {
            name: "my-coldfusion-client",
            version: "1.0.0"
        },
        capabilities: {
            sampling: true,
            roots: true,
            elicitation: true
        },
        initializationTimeout: 10,
        requestTimeout: 30
    };
    
    mcpClients = createMCPClient(configData);
    mcpClient = mcpClients[1];
    
    // List available tools
    tools = mcpClient.listTools();
    
    for (tool in tools) {
        writeOutput("<p>Tool: " & tool.name & " - " & tool.description & "</p>");
    }
</cfscript>
