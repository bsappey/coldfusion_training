<cfsetting showDebugOutput="false">
<cfset outDir = getDirectoryFromPath(getCurrentTemplatePath())>
<cfset imgName = "demo-" & createUUID() & ".png">
<cfset imgPath = outDir & imgName>

<cfset img = imageNew("", 400, 200, "rgb", "##1473E6")>
<cfset imageResize(img, 200, 100, "highQuality", 2)>
<cfset imageWrite(img, imgPath, 1, true)>

<cfoutput>
    <h2>CF 2021+ - Resize Image</h2>
    <p><img src="#imgName#" alt="Generated image" style="max-width:100%; height:auto;"></p>
</cfoutput>
