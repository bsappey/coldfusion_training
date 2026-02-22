<!--- Script Syntax: Collection Management (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to manage collections in a vector store.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    // List collections
    collections = vs.listCollections();
    
    // Delete a collection
    vs.deleteCollection("old-collection");
    
    // Delete items by filter
    vs.deleteAll({ status: "deprecated" });
</cfscript>
