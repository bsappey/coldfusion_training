<cfsetting showDebugOutput="false">
<cfset currentTemplate = getCurrentTemplatePath()>
<cfset currentDir = getDirectoryFromPath(currentTemplate)>
<cfset tempDir = getTempDirectory()>

<cfoutput>
    <h2>CF 2021+ - Paths and Temp Dir</h2>
    <p><strong>Template:</strong> #encodeForHTML(currentTemplate)#</p>
    <p><strong>Template dir:</strong> #encodeForHTML(currentDir)#</p>
    <p><strong>Temp dir:</strong> #encodeForHTML(tempDir)#</p>
    <hr>
    <p>
        Tip: For downloadable demo files, write them to <code>#encodeForHTML(currentDir)#</code>
        and link to the filename.
    </p>
</cfoutput>
