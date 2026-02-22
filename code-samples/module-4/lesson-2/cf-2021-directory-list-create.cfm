<cfsetting showDebugOutput="false">
<cfset sep = createObject("java","java.io.File").separator>
<cfset baseDir = getTempDirectory()>
<cfset workDir = baseDir & "cf-training-dir-" & createUUID()>

<cfdirectory action="create" directory="#workDir#">

<cfset file1 = workDir & sep & "a.txt">
<cfset file2 = workDir & sep & "b.txt">
<cffile action="write" file="#file1#" output="A" charset="utf-8">
<cffile action="write" file="#file2#" output="B" charset="utf-8">

<cfdirectory action="list" directory="#workDir#" name="qFiles">

<cfoutput>
    <h2>CF 2021+ - Directory List Create</h2>
    <p><strong>Directory:</strong> #encodeForHTML(workDir)#</p>
    <ul>
        <cfloop query="qFiles">
            <li>#encodeForHTML(name)# (#encodeForHTML(type)#)</li>
        </cfloop>
    </ul>
</cfoutput>

<!--- Cleanup (optional) --->
<cfset directoryDelete(workDir, true)>
