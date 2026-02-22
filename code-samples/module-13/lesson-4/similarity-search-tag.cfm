<!--- Tag Syntax: Similarity Search (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to perform similarity search in a vector store.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<!--- Text-based search (uses embedding model) --->
<cfset results = vs.search({
    text: "ColdFusion vector stores",
    topK: 5,
    minScore: 0.7
})>

<!--- Vector-based search with metadata filter --->
<cfset filter = {
    and: [
        { category: { eq: "tech" } },
        { year: { gte: 2025 } }
    ]
}>

<cfset results = vs.search({
    vector: [0.1, 0.2, 0.3],
    topK: 5,
    minScore: 0.0,
    filter: filter
})>

<cfoutput>
    <cfloop array="#results#" item="result">
        <p>#result.text# (Score: #result.score#)</p>
    </cfloop>
</cfoutput>
