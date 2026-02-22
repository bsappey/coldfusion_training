<!--- Tag Syntax: MCP Client Creation (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to create an MCP client to connect to MCP servers.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfset configData = {
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
}>

<cfset mcpClients = createMCPClient(configData)>
<cfset mcpClient = mcpClients[1]>

<!--- List available tools --->
<cfset tools = mcpClient.listTools()>

<cfoutput>
    <cfloop array="#tools#" item="tool">
        <p>Tool: #tool.name# - #tool.description#</p>
    </cfloop>
</cfoutput>
