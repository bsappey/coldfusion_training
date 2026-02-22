<cfsetting showDebugOutput="false">
<cfset tempDir = getTempDirectory()>
<cfset filePath = tempDir & "cf-training-" & createUUID() & ".txt">

<cffile action="write" file="#filePath#" output="Line 1" charset="utf-8" addNewLine="yes">
<cffile action="append" file="#filePath#" output="Line 2" charset="utf-8" addNewLine="yes">
<cffile action="read" file="#filePath#" variable="fileContents" charset="utf-8">

<cfoutput>
    <h2>CF 2021+ - Read Write Append</h2>
    <p><strong>File path:</strong> #encodeForHTML(filePath)#</p>
    <pre style="background:#111; color:#eee; padding:12px; border-radius:6px;">#encodeForHTML(fileContents)#</pre>
    <p>Note: This writes into the server temp directory. It’s typically not web-accessible (by design).</p>
</cfoutput>
