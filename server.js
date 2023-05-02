//initialize dependencies and const
const mysql = require('mysql2');
const inquirer = require("inquirer");
const cTable = require("console.table");
const employeeQuestions = require("./inquirer-prompts/employee-inquirers");
const roleQuery = require("./queries/role-query");
const roleQuestions = require("./inquirer-prompts/role-inquirer")
const departmentQuery = require("./queries/department-query");
const employeeQuery = require("./queries/employees-query");
const departmentQuestion =require("./inquirer-prompts/department-inquirer")




// mysql connection
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'company_db'
    },
  );

//Init async function recursive 
const Init = async()=>{
    try{
        const ans = await inquirer.prompt([
            {
                type:"list",
                name: "choice",
                message:"What would you like to do? ",
                choices: ["View all Employees", "Add Employee","Update Employee Role","View All Departments","Add Department","View All Roles","Add a Role","Quit"]
            }
        ]);
// If statements for user choice
        if(ans.choice === "View all Employees"){
            await viewAllEmployees();
        }else if(ans.choice == "Add Employee"){
            await addNewEmployee();
        }else if(ans.choice == "Update Employee Role"){ 
            await updateEmployeeRole();
        }else if(ans.choice == "View All Departments"){ 
            await viewAllDepartments();
        }else if(ans.choice == "Add Department"){ 
            await addDepartment();
        }else if(ans.choice == "View All Roles"){ 
            await viewAllRoles();
        }else if(ans.choice == "Add a Role"){ 
            await addNewRole();
        }else if(ans.choice == "Quit"){
            console.log(`\n You Have Quit The App, Bye!`);
            db.end();
            
        }
    }catch(err){
        throw err;
    }
};


//VIEW ALL EMPLOYEES
const viewAllEmployees = async ()=>{
    try{
        const query = employeeQuery.sqlAllEmployees;
        const [results] = await db.promise().query(query);
        const table = cTable.getTable(results)
        console.log(`\n\n`+table);
        Init();
    }catch(err){
        throw err;
    }

};
// ADD NEW EMPLOYEE
const addNewEmployee = async ()=>{
    try{
            const sqlQuery = employeeQuery.sqlNameIdEmployees;
            const queryRole = roleQuery.sqlNameIdRoles;
            // promise queries to get all roles and employees 
            const [roleResults] = await db.promise().query(queryRole);
            const [managerResults] =await db.promise().query(sqlQuery);
            //call to get the questions for adding employee
            const questionsEmp = await employeeQuestions.newEmployeeQuestions(roleResults,managerResults);
            const answers = await inquirer.prompt(questionsEmp);
            const empQuery = employeeQuery.sqlAddEmployee;
            await db.promise().query(empQuery,[answers.first_name,answers.last_name,answers.role,answers.manager]);
            console.log(`\n---- New Employee Has Been Added ---- \n`);
            Init();
    }catch(err){
        throw err;
    }
};
// UPDATE ROLE FOR SPECIFIC EMPLOYEE
const updateEmployeeRole = async ()=>{
    try{
            const sqlQuery = employeeQuery.sqlNameIdEmployees;
            const queryRole = roleQuery.sqlNameIdRoles;

            const [roleResults] = await db.promise().query(queryRole);
            const [employeeResults] =await db.promise().query(sqlQuery);
            const questionsEmp = await employeeQuestions.updateEmployeeQuestions(employeeResults,roleResults);
            const answers = await inquirer.prompt(questionsEmp);
            const empQuery = employeeQuery.sqlUpdateEmployeeRole;
            await db.promise().query(empQuery,[answers.role,answers.employee]);
            console.log(`\n----  Employee's role has been updated ---- \n`);
            Init();
    }catch(err){
        throw err;
    }



};
// VIEW ALL DEPARTMENTS
const viewAllDepartments = async () =>{
    try{
        const query = departmentQuery.sqlAllDept;
        const [results] = await db.promise().query(query);
        const table = cTable.getTable(results)
        console.log(`\n\n`+table);
        Init();
    }catch(err){
        throw err;
    }
};
// ADD NEW DEPARTMENT
const addDepartment = async () =>{
    try{
        const questionsDept = departmentQuestion.departmentQuestions;
        const answers = await inquirer.prompt(questionsDept);
        const empQuery = departmentQuery.sqlAddDept;
        await db.promise().query(empQuery,[answers.name]);
        console.log(`\n---- New Department Has Been Added ---- \n`);
        Init();
}catch(err){
    throw err;
}

};
// VIEW ALL ROLES
const viewAllRoles = async() =>{
    try{
        const query = roleQuery.sqlAllRoles;
        const [results] = await db.promise().query(query)
        const table = cTable.getTable(results);
        console.log(`\n\n`+table);
        Init();

    }catch(err){
        throw err;
    }
};
//ADD NEW ROLE 
const addNewRole = async() =>{
    try{
            const sqlQuery = departmentQuery.sqlAllNameAndIdDept;
            // promise queries to get all roles and employees 
            const [deptResults] = await db.promise().query(sqlQuery);
            const questionsRole = await roleQuestions.newRoleQuestions(deptResults);
            const answers = await inquirer.prompt(questionsRole);
            const empQuery = roleQuery.sqlAddRole;
            await db.promise().query(empQuery,[answers.title,answers.salary,answers.department]);
            console.log(`\n---- New Role Has Been Added ---- \n`);
            Init();
    }catch(err){
        throw err;
    }
}

//initializing questions to User
Init();



  




