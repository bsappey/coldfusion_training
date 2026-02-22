<!--- Tag Syntax: Collection Management (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to manage collections in a vector store.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<!--- List collections --->
<cfset collections = vs.listCollections()>

<!--- Delete a collection --->
<cfset vs.deleteCollection("old-collection")>

<!--- Delete items by filter --->
<cfset vs.deleteAll({ status: "deprecated" })>
