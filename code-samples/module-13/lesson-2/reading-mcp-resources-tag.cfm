<!--- Tag Syntax: Reading MCP Resources (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to read resources from an MCP server.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfset resources = mcpClient.listResources()>

<cfset uri = "file:///logs/app.log">
<cfif mcpClient.isResourceReadable(uri)>
    <cfset resData = mcpClient.readResource(uri)>
    <cfoutput>
        <pre>#HTMLEditFormat(resData.contents[1].text)#</pre>
    </cfoutput>
</cfif>
