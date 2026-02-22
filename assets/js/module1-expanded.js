/**
 * Module 1: Language Fundamentals - EXPANDED VERSION
 * Comprehensive examples for Variables, Data Types, Functions, and Flow Control
 */

function getModule1DataExpanded() {
    return {
        title: 'Language Fundamentals',
        description: 'Variables, Data Types, Functions, and Flow Control',
        versions: ['2021', '2023', '2025'],
        lessons: [
            {
                title: '1. Variables, Data Types, and Scopes',
                content: 'Variables are the foundation of any programming language. ColdFusion provides dynamic typing and multiple variable scopes. Understanding how to declare, assign, and scope variables is essential for effective ColdFusion development.',
                sections: [
                    {
                        title: '1.1 Basic Variable Assignment',
                        content: 'Learn how to declare and assign values to variables in both tag and script syntax.',
                        code: {
                            tag: '<!--- Tag Syntax: Basic Variable Assignment --->\n<cfset name = "John Doe">\n<cfset age = 30>\n<cfset salary = 50000.50>\n<cfset isActive = true>\n<cfset hireDate = Now()>\n\n<cfoutput>\n    <p>Name: #name#</p>\n    <p>Age: #age#</p>\n    <p>Salary: #DollarFormat(salary)#</p>\n    <p>Active: #isActive#</p>\n    <p>Hired: #DateFormat(hireDate, "full")#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Basic Variable Assignment --->\n<cfscript>\n    name = "John Doe";\n    age = 30;\n    salary = 50000.50;\n    isActive = true;\n    hireDate = Now();\n    \n    writeOutput("<p>Name: " & name & "</p>");\n    writeOutput("<p>Age: " & age & "</p>");\n    writeOutput("<p>Salary: " & DollarFormat(salary) & "</p>");\n    writeOutput("<p>Active: " & isActive & "</p>");\n    writeOutput("<p>Hired: " & DateFormat(hireDate, "full") & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Basic Variable Assignment (CF 2021+)'
                    },
                    {
                        title: '1.2 Variable Naming Conventions',
                        content: 'Follow best practices for naming variables to improve code readability and maintainability.',
                        list: [
                            '<strong>Use descriptive names:</strong> <code>userName</code> instead of <code>u</code>',
                            '<strong>Use camelCase:</strong> <code>firstName</code>, <code>lastName</code>',
                            '<strong>Boolean variables:</strong> Prefix with <code>is</code>, <code>has</code>, or <code>can</code> (e.g., <code>isActive</code>, <code>hasPermission</code>)',
                            '<strong>Avoid reserved words:</strong> Don\'t use CFML keywords as variable names',
                            '<strong>Be consistent:</strong> Use the same naming style throughout your application'
                        ],
                        code: {
                            tag: '<!--- Good Variable Names --->\n<cfset firstName = "John">\n<cfset lastName = "Doe">\n<cfset isActive = true>\n<cfset hasPermission = false>\n<cfset userCount = 150>\n\n<!--- Bad Variable Names (avoid these) --->\n<cfset x = "John">\n<cfset temp = 150>\n<cfset data = "something">',
                            script: '<!--- Good Variable Names --->\n<cfscript>\n    firstName = "John";\n    lastName = "Doe";\n    isActive = true;\n    hasPermission = false;\n    userCount = 150;\n    \n    // Bad Variable Names (avoid these)\n    // x = "John";\n    // temp = 150;\n    // data = "something";\n</cfscript>'
                        },
                        codeTitle: 'Variable Naming Best Practices (CF 2021+)'
                    },
                    {
                        title: '1.3 Understanding Data Types',
                        content: 'ColdFusion is dynamically typed, but understanding data types helps you write better code.',
                        code: {
                            tag: '<!--- Tag Syntax: Working with Different Data Types --->\n<!--- String --->\n<cfset text = "Hello World">\n<cfset textLength = Len(text)>\n\n<!--- Numeric (Integer) --->\n<cfset count = 42>\n<cfset doubled = count * 2>\n\n<!--- Numeric (Decimal) --->\n<cfset price = 19.99>\n<cfset tax = price * 0.08>\n\n<!--- Boolean --->\n<cfset isLoggedIn = true>\n<cfset canEdit = false>\n\n<!--- Date/Time --->\n<cfset today = Now()>\n<cfset tomorrow = DateAdd("d", 1, today)>\n\n<!--- Array --->\n<cfset colors = ["Red", "Green", "Blue"]>\n<cfset firstColor = colors[1]>\n\n<!--- Struct --->\n<cfset person = {name: "John", age: 30, city: "NYC"}>\n<cfset personName = person.name>\n\n<cfoutput>\n    <p>Text: #text# (Length: #textLength#)</p>\n    <p>Count: #count# (Doubled: #doubled#)</p>\n    <p>Price: #DollarFormat(price)# (Tax: #DollarFormat(tax)#)</p>\n    <p>Logged In: #isLoggedIn#</p>\n    <p>Today: #DateFormat(today, "full")#</p>\n    <p>First Color: #firstColor#</p>\n    <p>Person: #personName#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Working with Different Data Types --->\n<cfscript>\n    // String\n    text = "Hello World";\n    textLength = Len(text);\n    \n    // Numeric (Integer)\n    count = 42;\n    doubled = count * 2;\n    \n    // Numeric (Decimal)\n    price = 19.99;\n    tax = price * 0.08;\n    \n    // Boolean\n    isLoggedIn = true;\n    canEdit = false;\n    \n    // Date/Time\n    today = Now();\n    tomorrow = DateAdd("d", 1, today);\n    \n    // Array\n    colors = ["Red", "Green", "Blue"];\n    firstColor = colors[1];\n    \n    // Struct\n    person = {name: "John", age: 30, city: "NYC"};\n    personName = person.name;\n    \n    writeOutput("<p>Text: " & text & " (Length: " & textLength & ")</p>");\n    writeOutput("<p>Count: " & count & " (Doubled: " & doubled & ")</p>");\n    writeOutput("<p>Price: " & DollarFormat(price) & " (Tax: " & DollarFormat(tax) & ")</p>");\n    writeOutput("<p>Logged In: " & isLoggedIn & "</p>");\n    writeOutput("<p>Today: " & DateFormat(today, "full") & "</p>");\n    writeOutput("<p>First Color: " & firstColor & "</p>");\n    writeOutput("<p>Person: " & personName & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Working with Data Types (CF 2021+)'
                    },
                    {
                        title: '1.4 Variable Scopes',
                        content: 'Understanding variable scopes is crucial for managing data across your application lifecycle.',
                        code: {
                            tag: '<!--- Tag Syntax: Variable Scopes --->\n<!--- Variables scope (default, request-level) --->\n<cfset Variables.name = "Local Variable">\n<cfset name = "Also Variables scope">\n\n<!--- Request scope (entire request lifecycle) --->\n<cfset Request.requestId = CreateUUID()>\n<cfset Request.startTime = Now()>\n\n<!--- Session scope (user session) --->\n<cfset Session.userId = 123>\n<cfset Session.userName = "john.doe">\n<cfset Session.loginTime = Now()>\n\n<!--- Application scope (application lifecycle) --->\n<cfset Application.counter = 0>\n<cfset Application.appName = "My Application">\n\n<!--- Server scope (server lifecycle) --->\n<cfset Server.startTime = Now()>\n<cfset Server.instanceId = CreateUUID()>\n\n<!--- Form scope (form submissions) --->\n<cfif StructKeyExists(Form, "submit")>\n    <cfset Form.submittedAt = Now()>\n</cfif>\n\n<!--- URL scope (query parameters) --->\n<cfif StructKeyExists(URL, "id")>\n    <cfset URL.recordId = URL.id>\n</cfif>\n\n<cfoutput>\n    <h3>Variable Scopes</h3>\n    <p>Variables: #Variables.name#</p>\n    <p>Request ID: #Request.requestId#</p>\n    <p>Session User: #Session.userName#</p>\n    <p>Application: #Application.appName#</p>\n    <p>Server Started: #DateFormat(Server.startTime, "full")#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Variable Scopes --->\n<cfscript>\n    // Variables scope (default, request-level)\n    Variables.name = "Local Variable";\n    name = "Also Variables scope";\n    \n    // Request scope (entire request lifecycle)\n    Request.requestId = CreateUUID();\n    Request.startTime = Now();\n    \n    // Session scope (user session)\n    Session.userId = 123;\n    Session.userName = "john.doe";\n    Session.loginTime = Now();\n    \n    // Application scope (application lifecycle)\n    Application.counter = 0;\n    Application.appName = "My Application";\n    \n    // Server scope (server lifecycle)\n    Server.startTime = Now();\n    Server.instanceId = CreateUUID();\n    \n    // Form scope (form submissions)\n    if (StructKeyExists(Form, "submit")) {\n        Form.submittedAt = Now();\n    }\n    \n    // URL scope (query parameters)\n    if (StructKeyExists(URL, "id")) {\n        URL.recordId = URL.id;\n    }\n    \n    writeOutput("<h3>Variable Scopes</h3>");\n    writeOutput("<p>Variables: " & Variables.name & "</p>");\n    writeOutput("<p>Request ID: " & Request.requestId & "</p>");\n    writeOutput("<p>Session User: " & Session.userName & "</p>");\n    writeOutput("<p>Application: " & Application.appName & "</p>");\n    writeOutput("<p>Server Started: " & DateFormat(Server.startTime, "full") & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Understanding Variable Scopes (CF 2021+)'
                    },
                    {
                        title: '1.5 Type Checking and Conversion',
                        content: 'Learn how to check variable types and convert between different data types.',
                        code: {
                            tag: '<!--- Tag Syntax: Type Checking and Conversion --->\n<cfset value1 = "123">\n<cfset value2 = 456>\n<cfset value3 = "45.67">\n\n<!--- Check variable types --->\n<cfset type1 = IsNumeric(value1)>\n<cfset type2 = IsNumeric(value2)>\n<cfset type3 = IsString(value1)>\n<cfset type4 = IsDate(value1)>\n\n<!--- Type conversion --->\n<cfset numFromString = Val(value1)>\n<cfset stringFromNum = ToString(value2)>\n<cfset decimalFromString = Val(value3)>\n\n<!--- Using cfparam for type enforcement --->\n<cfparam name="age" type="numeric" default="0">\n<cfparam name="name" type="string" default="">\n<cfparam name="isActive" type="boolean" default="false">\n\n<cfoutput>\n    <p>Value1 ("123") is numeric: #type1#</p>\n    <p>Value2 (456) is numeric: #type2#</p>\n    <p>Value1 is string: #type3#</p>\n    <p>Converted: #numFromString# (type: #TypeOf(numFromString)#)</p>\n    <p>String from number: #stringFromNum#</p>\n    <p>Decimal: #decimalFromString#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Type Checking and Conversion --->\n<cfscript>\n    value1 = "123";\n    value2 = 456;\n    value3 = "45.67";\n    \n    // Check variable types\n    type1 = IsNumeric(value1);\n    type2 = IsNumeric(value2);\n    type3 = IsString(value1);\n    type4 = IsDate(value1);\n    \n    // Type conversion\n    numFromString = Val(value1);\n    stringFromNum = ToString(value2);\n    decimalFromString = Val(value3);\n    \n    // Using param for type enforcement\n    param name="age" type="numeric" default="0";\n    param name="name" type="string" default="";\n    param name="isActive" type="boolean" default="false";\n    \n    writeOutput("<p>Value1 (\"123\") is numeric: " & type1 & "</p>");\n    writeOutput("<p>Value2 (456) is numeric: " & type2 & "</p>");\n    writeOutput("<p>Value1 is string: " & type3 & "</p>");\n    writeOutput("<p>Converted: " & numFromString & " (type: " & TypeOf(numFromString) & ")</p>");\n    writeOutput("<p>String from number: " & stringFromNum & "</p>");\n    writeOutput("<p>Decimal: " & decimalFromString & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Type Checking and Conversion (CF 2021+)'
                    }
                ]
            },
            {
                title: '2. Expressions and Operators',
                content: 'ColdFusion supports a wide range of operators for mathematical, logical, and string operations. Mastering operators is essential for building complex expressions and logic.',
                sections: [
                    {
                        title: '2.1 Mathematical Operators',
                        content: 'Perform basic and advanced mathematical operations.',
                        code: {
                            tag: '<!--- Tag Syntax: Mathematical Operators --->\n<cfset a = 10>\n<cfset b = 3>\n<cfset c = 2>\n\n<!--- Basic operations --->\n<cfset sum = a + b>\n<cfset difference = a - b>\n<cfset product = a * b>\n<cfset quotient = a / b>\n<cfset remainder = a MOD b>\n<cfset power = a ^ c>\n\n<!--- Compound assignment --->\n<cfset total = 100>\n<cfset total = total + 50>\n<cfset total = total - 25>\n<cfset total = total * 2>\n<cfset total = total / 5>\n\n<!--- Increment and decrement --->\n<cfset counter = 0>\n<cfset counter++>\n<cfset counter++>\n<cfset counter-->\n\n<cfoutput>\n    <h3>Mathematical Operations</h3>\n    <p>a = #a#, b = #b#, c = #c#</p>\n    <p>Sum: #a# + #b# = #sum#</p>\n    <p>Difference: #a# - #b# = #difference#</p>\n    <p>Product: #a# * #b# = #product#</p>\n    <p>Quotient: #a# / #b# = #quotient#</p>\n    <p>Remainder: #a# MOD #b# = #remainder#</p>\n    <p>Power: #a# ^ #c# = #power#</p>\n    <p>Counter: #counter#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Mathematical Operators --->\n<cfscript>\n    a = 10;\n    b = 3;\n    c = 2;\n    \n    // Basic operations\n    sum = a + b;\n    difference = a - b;\n    product = a * b;\n    quotient = a / b;\n    remainder = a MOD b;\n    power = a ^ c;\n    \n    // Compound assignment\n    total = 100;\n    total = total + 50;\n    total = total - 25;\n    total = total * 2;\n    total = total / 5;\n    \n    // Increment and decrement\n    counter = 0;\n    counter++;\n    counter++;\n    counter--;\n    \n    writeOutput("<h3>Mathematical Operations</h3>");\n    writeOutput("<p>a = " & a & ", b = " & b & ", c = " & c & "</p>");\n    writeOutput("<p>Sum: " & a & " + " & b & " = " & sum & "</p>");\n    writeOutput("<p>Difference: " & a & " - " & b & " = " & difference & "</p>");\n    writeOutput("<p>Product: " & a & " * " & b & " = " & product & "</p>");\n    writeOutput("<p>Quotient: " & a & " / " & b & " = " & quotient & "</p>");\n    writeOutput("<p>Remainder: " & a & " MOD " & b & " = " & remainder & "</p>");\n    writeOutput("<p>Power: " & a & " ^ " & c & " = " & power & "</p>");\n    writeOutput("<p>Counter: " & counter & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Mathematical Operations (CF 2021+)'
                    },
                    {
                        title: '2.2 Comparison Operators',
                        content: 'Compare values using various comparison operators.',
                        code: {
                            tag: '<!--- Tag Syntax: Comparison Operators --->\n<cfset x = 10>\n<cfset y = 20>\n<cfset z = 10>\n<cfset name1 = "John">\n<cfset name2 = "Jane">\n\n<!--- Equality operators --->\n<cfif x EQ z>\n    <cfset result1 = "x equals z">\n</cfif>\n\n<cfif x NEQ y>\n    <cfset result2 = "x does not equal y">\n</cfif>\n\n<!--- Comparison operators --->\n<cfif x GT y>\n    <cfset result3 = "x is greater than y">\n<cfelseif x LT y>\n    <cfset result3 = "x is less than y">\n</cfif>\n\n<cfif x GTE z>\n    <cfset result4 = "x is greater than or equal to z">\n</cfif>\n\n<cfif x LTE y>\n    <cfset result5 = "x is less than or equal to y">\n</cfif>\n\n<!--- String comparison --->\n<cfif name1 EQ name2>\n    <cfset result6 = "Names are equal">\n<cfelse>\n    <cfset result6 = "Names are different">\n</cfif>\n\n<cfoutput>\n    <h3>Comparison Results</h3>\n    <p>#result1#</p>\n    <p>#result2#</p>\n    <p>#result3#</p>\n    <p>#result4#</p>\n    <p>#result5#</p>\n    <p>#result6#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Comparison Operators --->\n<cfscript>\n    x = 10;\n    y = 20;\n    z = 10;\n    name1 = "John";\n    name2 = "Jane";\n    \n    // Equality operators\n    if (x == z) {\n        result1 = "x equals z";\n    }\n    \n    if (x != y) {\n        result2 = "x does not equal y";\n    }\n    \n    // Comparison operators\n    if (x > y) {\n        result3 = "x is greater than y";\n    } else if (x < y) {\n        result3 = "x is less than y";\n    }\n    \n    if (x >= z) {\n        result4 = "x is greater than or equal to z";\n    }\n    \n    if (x <= y) {\n        result5 = "x is less than or equal to y";\n    }\n    \n    // String comparison\n    if (name1 == name2) {\n        result6 = "Names are equal";\n    } else {\n        result6 = "Names are different";\n    }\n    \n    writeOutput("<h3>Comparison Results</h3>");\n    writeOutput("<p>" & result1 & "</p>");\n    writeOutput("<p>" & result2 & "</p>");\n    writeOutput("<p>" & result3 & "</p>");\n    writeOutput("<p>" & result4 & "</p>");\n    writeOutput("<p>" & result5 & "</p>");\n    writeOutput("<p>" & result6 & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Comparison Operators (CF 2021+)'
                    },
                    {
                        title: '2.3 Logical Operators',
                        content: 'Combine conditions using logical operators (AND, OR, NOT).',
                        code: {
                            tag: '<!--- Tag Syntax: Logical Operators --->\n<cfset age = 25>\n<cfset hasLicense = true>\n<cfset hasInsurance = false>\n<cfset isWeekend = false>\n\n<!--- AND operator --->\n<cfif age GTE 18 AND hasLicense>\n    <cfset canDrive = true>\n<cfelse>\n    <cfset canDrive = false>\n</cfif>\n\n<!--- OR operator --->\n<cfif hasLicense OR hasInsurance>\n    <cfset canRent = true>\n<cfelse>\n    <cfset canRent = false>\n</cfif>\n\n<!--- NOT operator --->\n<cfif NOT isWeekend>\n    <cfset isWorkday = true>\n<cfelse>\n    <cfset isWorkday = false>\n</cfif>\n\n<!--- Complex logical expressions --->\n<cfif (age GTE 18 AND hasLicense) AND (hasInsurance OR NOT isWeekend)>\n    <cfset canRentCar = true>\n<cfelse>\n    <cfset canRentCar = false>\n</cfif>\n\n<cfoutput>\n    <h3>Logical Operations</h3>\n    <p>Age: #age#, License: #hasLicense#, Insurance: #hasInsurance#</p>\n    <p>Can Drive: #canDrive#</p>\n    <p>Can Rent: #canRent#</p>\n    <p>Is Workday: #isWorkday#</p>\n    <p>Can Rent Car: #canRentCar#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: Logical Operators --->\n<cfscript>\n    age = 25;\n    hasLicense = true;\n    hasInsurance = false;\n    isWeekend = false;\n    \n    // AND operator\n    if (age >= 18 && hasLicense) {\n        canDrive = true;\n    } else {\n        canDrive = false;\n    }\n    \n    // OR operator\n    if (hasLicense || hasInsurance) {\n        canRent = true;\n    } else {\n        canRent = false;\n    }\n    \n    // NOT operator\n    if (!isWeekend) {\n        isWorkday = true;\n    } else {\n        isWorkday = false;\n    }\n    \n    // Complex logical expressions\n    if ((age >= 18 && hasLicense) && (hasInsurance || !isWeekend)) {\n        canRentCar = true;\n    } else {\n        canRentCar = false;\n    }\n    \n    writeOutput("<h3>Logical Operations</h3>");\n    writeOutput("<p>Age: " & age & ", License: " & hasLicense & ", Insurance: " & hasInsurance & "</p>");\n    writeOutput("<p>Can Drive: " & canDrive & "</p>");\n    writeOutput("<p>Can Rent: " & canRent & "</p>");\n    writeOutput("<p>Is Workday: " & isWorkday & "</p>");\n    writeOutput("<p>Can Rent Car: " & canRentCar & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'Logical Operators (CF 2021+)'
                    },
                    {
                        title: '2.4 String Operators',
                        content: 'Concatenate and manipulate strings using string operators.',
                        code: {
                            tag: '<!--- Tag Syntax: String Operators --->\n<cfset firstName = "John">\n<cfset lastName = "Doe">\n<cfset greeting = "Hello">\n\n<!--- String concatenation --->\n<cfset fullName = firstName & " " & lastName>\n<cfset message = greeting & ", " & fullName & "!">\n\n<!--- String comparison --->\n<cfset text1 = "Hello">\n<cfset text2 = "World">\n<cfset combined = text1 & " " & text2>\n\n<!--- String functions with operators --->\n<cfset upperName = UCase(firstName)>\n<cfset lowerName = LCase(lastName)>\n<cfset nameLength = Len(fullName)>\n\n<!--- String contains check --->\n<cfset searchText = "John Doe is a developer">\n<cfset containsName = FindNoCase(fullName, searchText) GT 0>\n\n<cfoutput>\n    <h3>String Operations</h3>\n    <p>Full Name: #fullName#</p>\n    <p>Message: #message#</p>\n    <p>Combined: #combined#</p>\n    <p>Upper: #upperName#</p>\n    <p>Lower: #lowerName#</p>\n    <p>Length: #nameLength#</p>\n    <p>Contains Name: #containsName#</p>\n</cfoutput>',
                            script: '<!--- Script Syntax: String Operators --->\n<cfscript>\n    firstName = "John";\n    lastName = "Doe";\n    greeting = "Hello";\n    \n    // String concatenation\n    fullName = firstName & " " & lastName;\n    message = greeting & ", " & fullName & "!";\n    \n    // String comparison\n    text1 = "Hello";\n    text2 = "World";\n    combined = text1 & " " & text2;\n    \n    // String functions with operators\n    upperName = UCase(firstName);\n    lowerName = LCase(lastName);\n    nameLength = Len(fullName);\n    \n    // String contains check\n    searchText = "John Doe is a developer";\n    containsName = FindNoCase(fullName, searchText) > 0;\n    \n    writeOutput("<h3>String Operations</h3>");\n    writeOutput("<p>Full Name: " & fullName & "</p>");\n    writeOutput("<p>Message: " & message & "</p>");\n    writeOutput("<p>Combined: " & combined & "</p>");\n    writeOutput("<p>Upper: " & upperName & "</p>");\n    writeOutput("<p>Lower: " & lowerName & "</p>");\n    writeOutput("<p>Length: " & nameLength & "</p>");\n    writeOutput("<p>Contains Name: " & containsName & "</p>");\n</cfscript>'
                        },
                        codeTitle: 'String Operators (CF 2021+)'
                    }
                ]
            }
        ]
    };
}

