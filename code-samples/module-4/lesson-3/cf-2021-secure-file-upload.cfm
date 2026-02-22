<cfsetting showDebugOutput="false">

<h2>CF 2021+ - Secure File Upload</h2>
<p>This demo uploads to an <code>uploads/</code> folder next to this file.</p>

<form method="post" enctype="multipart/form-data">
    <p><input type="file" name="fileInput" required></p>
    <p><button type="submit">Upload</button></p>
</form>

<cfif structKeyExists(form, "fileInput")>
    <cfset sep = createObject("java","java.io.File").separator>
    <cfset uploadDir = getDirectoryFromPath(getCurrentTemplatePath()) & "uploads">
    <cfif NOT directoryExists(uploadDir)>
        <cfset directoryCreate(uploadDir)>
    </cfif>

    <cftry>
        <cffile
            action="upload"
            fileField="fileInput"
            destination="#uploadDir#"
            nameConflict="makeUnique"
            strict="true"
            allowedExtensions=".jpg,.jpeg,.png,.pdf"
            result="uploadResult">

        <!--- Defense-in-depth: validate extension after upload --->
        <cfif NOT listFindNoCase("jpg,jpeg,png,pdf", uploadResult.serverFileExt)>
            <cffile action="delete" file="#uploadResult.serverDirectory##sep##uploadResult.serverFile#">
            <cfthrow message="Invalid file type.">
        </cfif>

        <cfoutput>
            <p><strong>Uploaded:</strong> #encodeForHTML(uploadResult.serverFile)#</p>
            <p><strong>Size:</strong> #numberFormat(uploadResult.fileSize/1024, "0.0")# KB</p>
        </cfoutput>

        <cfcatch type="any">
            <cfoutput><p><strong>Upload failed:</strong> #encodeForHTML(cfcatch.message)#</p></cfoutput>
        </cfcatch>
    </cftry>
</cfif>
