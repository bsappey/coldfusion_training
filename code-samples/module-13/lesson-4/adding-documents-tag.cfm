<!--- Tag Syntax: Adding Documents (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to add documents to a vector store.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<!--- Single item --->
<cfset id = vs.add({
    text: "ColdFusion supports semantic search with vector stores.",
    metadata: { category: "intro", language: "en" }
})>

<!--- Batch add --->
<cfset docs = [
    { id: "1", text: "Document 1", metadata: { category: "tech" } },
    { id: "2", text: "Document 2", metadata: { category: "data" } }
]>

<cfset addedIds = vs.addAll(docs)>
