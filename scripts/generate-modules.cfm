<!--- 
    ColdFusion Script to Generate Module and Quiz Files
    Run this file directly in your browser or via CommandBox: box run scripts/generate-modules.cfm
--->

<cfscript>
    // Module data - matches the structure in modules-data.js
    modules = [
        {id: 0, title: "Welcome & Setup"},
        {id: 1, title: "Language Fundamentals"},
        {id: 2, title: "Web & Application Structure"},
        {id: 3, title: "Data Connectivity & Manipulation"},
        {id: 4, title: "File & Document Operations"},
        {id: 5, title: "Cloud Storage Integration"},
        {id: 6, title: "Security Fundamentals"},
        {id: 7, title: "Object-Oriented Programming"},
        {id: 8, title: "What's New: Version Comparison"},
        {id: 9, title: "Advanced Topics"},
        {id: 10, title: "Quality Assurance & Debugging"},
        {id: 11, title: "Migration & Compatibility"},
        {id: 12, title: "Projects & Labs"}
    ];

    // Get paths
    projectRoot = ExpandPath("../");
    modulesDir = projectRoot & "modules/";
    quizzesDir = projectRoot & "quizzes/";
    baseModuleTemplate = modulesDir & "_module-base.cfm";
    baseQuizTemplate = quizzesDir & "_quiz-base.cfm";

    // Ensure directories exist
    if (!DirectoryExists(modulesDir)) {
        DirectoryCreate(modulesDir);
        WriteOutput("Created modules directory<br>");
    }

    if (!DirectoryExists(quizzesDir)) {
        DirectoryCreate(quizzesDir);
        WriteOutput("Created quizzes directory<br>");
    }

    // Read base templates
    if (FileExists(baseModuleTemplate)) {
        moduleTemplate = FileRead(baseModuleTemplate);
        WriteOutput("✓ Read module base template<br>");
    } else {
        WriteOutput("ERROR: Module template not found at: #baseModuleTemplate#<br>");
        abort;
    }

    if (FileExists(baseQuizTemplate)) {
        quizTemplate = FileRead(baseQuizTemplate);
        WriteOutput("✓ Read quiz base template<br>");
    } else {
        WriteOutput("ERROR: Quiz template not found at: #baseQuizTemplate#<br>");
        abort;
    }

    // Generate module files
    WriteOutput("<br><strong>Generating module files...</strong><br>");
    for (module in modules) {
        fileName = "module-" & module.id & ".cfm";
        filePath = modulesDir & fileName;
        FileWrite(filePath, moduleTemplate);
        WriteOutput("  ✓ Created #fileName#<br>");
    }

    // Generate quiz files
    WriteOutput("<br><strong>Generating quiz files...</strong><br>");
    for (module in modules) {
        fileName = "quiz-" & module.id & ".cfm";
        filePath = quizzesDir & fileName;
        FileWrite(filePath, quizTemplate);
        WriteOutput("  ✓ Created #fileName#<br>");
    }

    WriteOutput("<br><strong>✅ Successfully generated all module and quiz files!</strong><br>");
    WriteOutput("<br>Generated #ArrayLen(modules)# module files in: #modulesDir#<br>");
    WriteOutput("Generated #ArrayLen(modules)# quiz files in: #quizzesDir#<br>");
</cfscript>


