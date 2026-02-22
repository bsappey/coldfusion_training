/**
 * ColdFusion Patterns Library
 * Common code patterns for AI agent consumption
 * 
 * This file provides reusable code patterns for common ColdFusion tasks,
 * including validation, queries, error handling, security, and API patterns.
 */

/**
 * Get patterns library
 * @returns {Object} Complete patterns library
 */
function getPatternsLibrary() {
    return {
        // Validation Patterns
        validation: {
            formValidation: {
                name: 'Form Input Validation',
                description: 'Validates form input with multiple checks',
                complexity: 'intermediate',
                security: 'high',
                versions: ['2021', '2023', '2025'],
                tag: `<!--- Form Input Validation Pattern --->
<cfparam name="Form.email" type="string" default="">
<cfparam name="Form.age" type="numeric" default="0">

<cfset errors = []>

<!--- Validate email --->
<cfif NOT IsValid("email", Form.email)>
    <cfset ArrayAppend(errors, "Invalid email address")>
</cfif>

<!--- Validate age --->
<cfif NOT IsNumeric(Form.age) OR Form.age LT 18>
    <cfset ArrayAppend(errors, "Age must be 18 or older")>
</cfif>

<!--- Check for errors --->
<cfif ArrayLen(errors) EQ 0>
    <!--- Process valid form --->
    <cfset result = "Form is valid">
<cfelse>
    <!--- Display errors --->
    <cfloop array="#errors#" item="error">
        <cfoutput>#error#<br></cfoutput>
    </cfloop>
</cfif>`,
                script: `// Form Input Validation Pattern
param name="Form.email" type="string" default="";
param name="Form.age" type="numeric" default="0";

errors = [];

// Validate email
if (!IsValid("email", Form.email)) {
    ArrayAppend(errors, "Invalid email address");
}

// Validate age
if (!IsNumeric(Form.age) || Form.age < 18) {
    ArrayAppend(errors, "Age must be 18 or older");
}

// Check for errors
if (ArrayLen(errors) == 0) {
    // Process valid form
    result = "Form is valid";
} else {
    // Display errors
    for (error in errors) {
        writeOutput(error & "<br>");
    }
}`,
                bestPractices: [
                    'Always validate on server-side, never trust client-side validation',
                    'Use IsValid() for format validation (email, URL, etc.)',
                    'Use type checking functions (IsNumeric, IsString) for type validation',
                    'Collect all errors before displaying to user',
                    'Sanitize input after validation'
                ],
                commonMistakes: [
                    'Only validating on client-side',
                    'Not checking for empty values',
                    'Not validating data types',
                    'Displaying errors one at a time instead of collecting them'
                ]
            },
            
            inputSanitization: {
                name: 'Input Sanitization',
                description: 'Sanitizes user input to prevent XSS attacks',
                complexity: 'intermediate',
                security: 'high',
                versions: ['2021', '2023', '2025'],
                tag: `<!--- Input Sanitization Pattern --->
<cfset userInput = Form.comment>

<!--- Remove HTML tags --->
<cfset sanitized = ReReplace(userInput, "<[^>]*>", "", "ALL")>

<!--- Escape special characters for HTML output --->
<cfset safeOutput = HTMLEditFormat(sanitized)>

<!--- For database, use parameterized queries --->
<cfquery name="insertComment" datasource="mydb">
    INSERT INTO comments (content)
    VALUES (<cfqueryparam value="#sanitized#" cfsqltype="CF_SQL_VARCHAR">)
</cfquery>`,
                script: `// Input Sanitization Pattern
userInput = Form.comment;

// Remove HTML tags
sanitized = ReReplace(userInput, "<[^>]*>", "", "ALL");

// Escape special characters for HTML output
safeOutput = HTMLEditFormat(sanitized);

// For database, use parameterized queries
queryExecute(
    "INSERT INTO comments (content) VALUES (:content)",
    {content: {value: sanitized, cfsqltype: "CF_SQL_VARCHAR"}},
    {datasource: "mydb"}
);`,
                bestPractices: [
                    'Always sanitize user input before storing or displaying',
                    'Use HTMLEditFormat() for HTML output',
                    'Use parameterized queries for database operations',
                    'Remove HTML tags if not needed',
                    'Validate input format before sanitization'
                ],
                securityNotes: [
                    'Prevents XSS (Cross-Site Scripting) attacks',
                    'Prevents SQL injection when combined with parameterized queries',
                    'Always sanitize before output, not just before storage'
                ]
            }
        },
        
        // Database Query Patterns
        database: {
            parameterizedQuery: {
                name: 'Parameterized Query',
                description: 'Safe database query using parameters to prevent SQL injection',
                complexity: 'intermediate',
                security: 'high',
                versions: ['2021', '2023', '2025'],
                tag: `<!--- Parameterized Query Pattern --->
<cfquery name="getUser" datasource="mydb">
    SELECT id, name, email
    FROM users
    WHERE id = <cfqueryparam value="#URL.id#" cfsqltype="CF_SQL_INTEGER">
      AND active = <cfqueryparam value="1" cfsqltype="CF_SQL_BIT">
</cfquery>

<cfif getUser.RecordCount GT 0>
    <cfoutput query="getUser">
        <p>#name# - #email#</p>
    </cfoutput>
<cfelse>
    <p>User not found</p>
</cfif>`,
                script: `// Parameterized Query Pattern
getUser = queryExecute(
    "SELECT id, name, email FROM users WHERE id = :id AND active = :active",
    {
        id: {value: URL.id, cfsqltype: "CF_SQL_INTEGER"},
        active: {value: 1, cfsqltype: "CF_SQL_BIT"}
    },
    {datasource: "mydb"}
);

if (getUser.RecordCount > 0) {
    for (row in getUser) {
        writeOutput("<p>" & row.name & " - " & row.email & "</p>");
    }
} else {
    writeOutput("<p>User not found</p>");
}`,
                bestPractices: [
                    'Always use cfqueryparam or queryExecute with parameters',
                    'Never concatenate user input directly into SQL',
                    'Specify appropriate CFSQLType for each parameter',
                    'Use named parameters in queryExecute for clarity',
                    'Validate input before using in queries'
                ],
                securityNotes: [
                    'Prevents SQL injection attacks',
                    'Automatically handles data type conversion',
                    'Escapes special characters properly'
                ]
            },
            
            transactionPattern: {
                name: 'Database Transaction',
                description: 'Ensures multiple database operations succeed or fail together',
                complexity: 'advanced',
                security: 'medium',
                versions: ['2021', '2023', '2025'],
                tag: `<!--- Transaction Pattern --->
<cftransaction>
    <cftry>
        <!--- First operation --->
        <cfquery name="insertOrder" datasource="mydb">
            INSERT INTO orders (user_id, total)
            VALUES (<cfqueryparam value="#Session.userId#" cfsqltype="CF_SQL_INTEGER">,
                    <cfqueryparam value="#Form.total#" cfsqltype="CF_SQL_DECIMAL">)
        </cfquery>
        
        <!--- Second operation --->
        <cfquery name="updateInventory" datasource="mydb">
            UPDATE products
            SET stock = stock - 1
            WHERE id = <cfqueryparam value="#Form.productId#" cfsqltype="CF_SQL_INTEGER">
        </cfquery>
        
        <cftransaction action="commit">
        
        <cfcatch>
            <cftransaction action="rollback">
            <cfset errorMessage = "Transaction failed: " & cfcatch.message>
            <!--- Handle error --->
        </cfcatch>
    </cftry>
</cftransaction>`,
                script: `// Transaction Pattern
transaction {
    try {
        // First operation
        queryExecute(
            "INSERT INTO orders (user_id, total) VALUES (:userId, :total)",
            {
                userId: {value: Session.userId, cfsqltype: "CF_SQL_INTEGER"},
                total: {value: Form.total, cfsqltype: "CF_SQL_DECIMAL"}
            },
            {datasource: "mydb"}
        );
        
        // Second operation
        queryExecute(
            "UPDATE products SET stock = stock - 1 WHERE id = :productId",
            {productId: {value: Form.productId, cfsqltype: "CF_SQL_INTEGER"}},
            {datasource: "mydb"}
        );
        
        transactionCommit();
        
    } catch (any e) {
        transactionRollback();
        errorMessage = "Transaction failed: " & e.message;
        // Handle error
    }
}`,
                bestPractices: [
                    'Use transactions for multiple related database operations',
                    'Always include error handling with try/catch',
                    'Rollback on any error to maintain data integrity',
                    'Keep transactions as short as possible',
                    'Test transaction rollback scenarios'
                ],
                commonMistakes: [
                    'Forgetting to commit or rollback',
                    'Not handling errors within transaction',
                    'Making transactions too long',
                    'Nesting transactions incorrectly'
                ]
            }
        },
        
        // Error Handling Patterns
        errorHandling: {
            tryCatchPattern: {
                name: 'Try/Catch Error Handling',
                description: 'Proper error handling with try/catch blocks',
                complexity: 'intermediate',
                security: 'medium',
                versions: ['2021', '2023', '2025'],
                tag: `<!--- Try/Catch Error Handling Pattern --->
<cftry>
    <!--- Risky operation --->
    <cfset result = riskyOperation()>
    
    <!--- Success handling --->
    <cfset success = true>
    <cfset message = "Operation completed successfully">
    
    <cfcatch type="DatabaseException">
        <!--- Database-specific error --->
        <cfset success = false>
        <cfset message = "Database error: " & cfcatch.message>
        <!--- Log error --->
        <cflog file="errors" text="Database error: #cfcatch.message#">
    </cfcatch>
    
    <cfcatch type="Any">
        <!--- Generic error handling --->
        <cfset success = false>
        <cfset message = "An error occurred: " & cfcatch.message>
        <!--- Log error --->
        <cflog file="errors" text="Error: #cfcatch.message#">
    </cfcatch>
</cftry>`,
                script: `// Try/Catch Error Handling Pattern
try {
    // Risky operation
    result = riskyOperation();
    
    // Success handling
    success = true;
    message = "Operation completed successfully";
    
} catch (DatabaseException e) {
    // Database-specific error
    success = false;
    message = "Database error: " & e.message;
    // Log error
    writeLog(file: "errors", text: "Database error: " & e.message);
    
} catch (Any e) {
    // Generic error handling
    success = false;
    message = "An error occurred: " & e.message;
    // Log error
    writeLog(file: "errors", text: "Error: " & e.message);
}`,
                bestPractices: [
                    'Always use try/catch for operations that might fail',
                    'Catch specific exception types first, then generic',
                    'Log errors for debugging and monitoring',
                    'Never expose internal error details to users',
                    'Provide user-friendly error messages'
                ],
                commonMistakes: [
                    'Catching generic exceptions first',
                    'Exposing internal error details to users',
                    'Not logging errors',
                    'Swallowing errors silently'
                ]
            }
        },
        
        // API Patterns
        api: {
            restEndpoint: {
                name: 'REST API Endpoint',
                description: 'RESTful API endpoint pattern with JSON response',
                complexity: 'advanced',
                security: 'high',
                versions: ['2021', '2023', '2025'],
                tag: `<!--- REST API Endpoint Pattern --->
<cfsetting enablecfoutputonly="true" showdebugoutput="false">

<cfheader name="Content-Type" value="application/json; charset=utf-8">

<cftry>
    <!--- Get request method --->
    <cfset method = CGI.REQUEST_METHOD>
    
    <cfif method EQ "GET">
        <!--- Handle GET request --->
        <cfset id = URL.id ?: 0>
        <cfquery name="getData" datasource="mydb">
            SELECT * FROM items WHERE id = <cfqueryparam value="#id#" cfsqltype="CF_SQL_INTEGER">
        </cfquery>
        
        <cfset response = {
            success: true,
            data: getData
        }>
        
    <cfelseif method EQ "POST">
        <!--- Handle POST request --->
        <cfset jsonData = DeserializeJSON(GetHTTPRequestData().content)>
        
        <cfquery name="insertData" datasource="mydb">
            INSERT INTO items (name, value)
            VALUES (<cfqueryparam value="#jsonData.name#" cfsqltype="CF_SQL_VARCHAR">,
                    <cfqueryparam value="#jsonData.value#" cfsqltype="CF_SQL_VARCHAR">)
        </cfquery>
        
        <cfset response = {
            success: true,
            message: "Item created successfully"
        }>
        
    <cfelse>
        <cfset response = {
            success: false,
            error: "Method not allowed"
        }>
    </cfif>
    
    <cfoutput>#SerializeJSON(response)#</cfoutput>
    
    <cfcatch>
        <cfset errorResponse = {
            success: false,
            error: "An error occurred",
            message: cfcatch.message
        }>
        <cfoutput>#SerializeJSON(errorResponse)#</cfoutput>
    </cfcatch>
</cftry>`,
                script: `// REST API Endpoint Pattern
setting enablecfoutputonly=true showdebugoutput=false;

header name="Content-Type" value="application/json; charset=utf-8";

try {
    // Get request method
    method = CGI.REQUEST_METHOD;
    
    if (method == "GET") {
        // Handle GET request
        id = URL.id ?: 0;
        getData = queryExecute(
            "SELECT * FROM items WHERE id = :id",
            {id: {value: id, cfsqltype: "CF_SQL_INTEGER"}},
            {datasource: "mydb"}
        );
        
        response = {
            success: true,
            data: getData
        };
        
    } else if (method == "POST") {
        // Handle POST request
        jsonData = DeserializeJSON(GetHTTPRequestData().content);
        
        queryExecute(
            "INSERT INTO items (name, value) VALUES (:name, :value)",
            {
                name: {value: jsonData.name, cfsqltype: "CF_SQL_VARCHAR"},
                value: {value: jsonData.value, cfsqltype: "CF_SQL_VARCHAR"}
            },
            {datasource: "mydb"}
        );
        
        response = {
            success: true,
            message: "Item created successfully"
        };
        
    } else {
        response = {
            success: false,
            error: "Method not allowed"
        };
    }
    
    writeOutput(SerializeJSON(response));
    
} catch (any e) {
    errorResponse = {
        success: false,
        error: "An error occurred",
        message: e.message
    };
    writeOutput(SerializeJSON(errorResponse));
}`,
                bestPractices: [
                    'Always set Content-Type header for JSON responses',
                    'Use proper HTTP methods (GET, POST, PUT, DELETE)',
                    'Validate and sanitize all input',
                    'Use consistent JSON response structure',
                    'Handle errors gracefully with appropriate HTTP status codes',
                    'Enable CORS headers if needed for cross-origin requests'
                ],
                securityNotes: [
                    'Validate all input from API requests',
                    'Use authentication/authorization for protected endpoints',
                    'Rate limit API endpoints to prevent abuse',
                    'Log API access for security monitoring'
                ]
            }
        },
        
        // Security Patterns
        security: {
            authenticationCheck: {
                name: 'Authentication Check',
                description: 'Checks if user is authenticated before allowing access',
                complexity: 'intermediate',
                security: 'high',
                versions: ['2021', '2023', '2025'],
                tag: `<!--- Authentication Check Pattern --->
<cfif NOT StructKeyExists(Session, "userId") OR NOT IsNumeric(Session.userId)>
    <cflocation url="login.cfm" addtoken="false">
</cfif>

<!--- Optional: Check user role --->
<cfif NOT StructKeyExists(Session, "userRole") OR Session.userRole NEQ "admin">
    <cfset errorMessage = "Access denied">
    <cfinclude template="error.cfm">
    <cfabort>
</cfif>

<!--- User is authenticated, continue --->`,
                script: `// Authentication Check Pattern
if (!StructKeyExists(Session, "userId") || !IsNumeric(Session.userId)) {
    location(url: "login.cfm", addtoken: false);
}

// Optional: Check user role
if (!StructKeyExists(Session, "userRole") || Session.userRole != "admin") {
    errorMessage = "Access denied";
    include "error.cfm";
    abort;
}

// User is authenticated, continue`,
                bestPractices: [
                    'Check authentication at the start of protected pages',
                    'Use Session variables to store authentication state',
                    'Always validate Session data exists and is correct type',
                    'Redirect to login page if not authenticated',
                    'Check user roles/permissions for authorization',
                    'Use secure session management'
                ],
                securityNotes: [
                    'Never trust client-side authentication checks',
                    'Always validate on server-side',
                    'Use secure session cookies',
                    'Implement session timeout',
                    'Log authentication failures for security monitoring'
                ]
            }
        }
    };
}

/**
 * Get pattern by name
 * @param {string} category - Pattern category (validation, database, errorHandling, api, security)
 * @param {string} patternName - Name of the pattern
 * @returns {Object|null} Pattern object or null if not found
 */
function getPattern(category, patternName) {
    const patterns = getPatternsLibrary();
    return patterns[category]?.[patternName] || null;
}

/**
 * Get patterns by complexity
 * @param {string} complexity - Complexity level (basic, intermediate, advanced)
 * @returns {Array} Array of patterns matching the complexity
 */
function getPatternsByComplexity(complexity) {
    const patterns = getPatternsLibrary();
    const result = [];
    
    for (const category in patterns) {
        for (const patternName in patterns[category]) {
            const pattern = patterns[category][patternName];
            if (pattern.complexity === complexity) {
                result.push({
                    category: category,
                    name: patternName,
                    ...pattern
                });
            }
        }
    }
    
    return result;
}

// Make functions available globally
if (typeof window !== 'undefined') {
    window.getPatternsLibrary = getPatternsLibrary;
    window.getPattern = getPattern;
    window.getPatternsByComplexity = getPatternsByComplexity;
}
