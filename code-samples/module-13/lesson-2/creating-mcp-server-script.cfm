<!--- Script Syntax: Creating MCP Server (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to create an MCP server to expose ColdFusion capabilities.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    configData = {
        serverInfo: {
            name: "My MCP Server",
            version: "1.0.0"
        },
        capabilities: {
            tools: true,
            prompts: true,
            resources: true
        },
        tools: [
            { cfc: "mcp.tools.healthcareTools" },
            { cfc: "mcp.tools.emailTool" }
        ],
        prompts: [
            {
                name: "generate_summary",
                title: "Generate Patient Summary",
                description: "Generate a comprehensive patient summary",
                arguments: [
                    {
                        name: "patientName",
                        description: "Name of the patient",
                        required: true
                    }
                ],
                template: "Generate a summary for patient {patientName}"
            }
        ]
    };
    
    application.mcpServer = createMCPServer(configData);
    
    // Handle incoming requests
    application.mcpServer.handleRequestAndWriteResponse();
</cfscript>
