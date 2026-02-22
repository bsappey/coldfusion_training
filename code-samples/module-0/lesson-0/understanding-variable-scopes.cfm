<!--- Tag Syntax: Variable Scopes --->
<!--- Variables scope (default) --->
<cfset Variables.name = "Local Variable">

<!--- Request scope (request lifecycle) --->
<cfset Request.data = "Request Data">

<!--- Session scope (user session) --->
<cfset Session.userId = 123>

<!--- Application scope (application lifecycle) --->
<cfset Application.counter = 0>

<!--- Server scope (server lifecycle) --->
<cfset Server.startTime = Now()>

<cfoutput>
    <h2>Variable Scopes</h2>
    <p>Variables: #Variables.name#</p>
    <p>Request: #Request.data#</p>
    <p>Session: #Session.userId#</p>
    <p>Application: #Application.counter#</p>
    <p>Server Start: #Server.startTime#</p>
</cfoutput>

