<!--- Script Syntax: Similarity Search (CF 2025 Feature Update+) --->
<!--- 
    This example demonstrates how to perform similarity search in a vector store.
    Requires ColdFusion 2025 with the AI feature update installed.
--->
<cfscript>
    // Text-based search (uses embedding model)
    results = vs.search({
        text: "ColdFusion vector stores",
        topK: 5,
        minScore: 0.7
    });
    
    // Vector-based search with metadata filter
    filter = {
        and: [
            { category: { eq: "tech" } },
            { year: { gte: 2025 } }
        ]
    };
    
    results = vs.search({
        vector: [0.1, 0.2, 0.3],
        topK: 5,
        minScore: 0.0,
        filter: filter
    });
    
    for (result in results) {
        writeOutput("<p>" & result.text & " (Score: " & result.score & ")</p>");
    }
</cfscript>
