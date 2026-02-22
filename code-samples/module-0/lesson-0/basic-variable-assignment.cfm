<!--- Tag Syntax: Basic Variable Assignment --->
<cfset name = "John Doe">
<cfset age = 30>
<cfset salary = 50000.50>
<cfset isActive = true>
<cfset hireDate = Now()>

<cfoutput>
    <p>Name: #name#</p>
    <p>Age: #age#</p>
    <p>Salary: #DollarFormat(salary)#</p>
    <p>Active: #isActive#</p>
    <p>Hired: #DateFormat(hireDate, "full")#</p>
</cfoutput>

