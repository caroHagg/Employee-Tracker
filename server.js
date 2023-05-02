//initialize dependencies and const
const mysql = require('mysql2');
const inquirer = require("inquirer");
const cTable = require("console.table");
const employeeQuery = require("./queries/employees-query");
const roleQuery = require("./queries/role-query");
const departmentQuery = require("./queries/department-query")



// mysql connection
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'company_db'
    },
  );

//inquirer
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

        if(ans.choice === "View all Employees"){
            await viewAllEmployees();
        }else if(ans.choice == "Add Employee"){

            const queryRole = roleQuery.sqlNameIdRoles;
            const queryManager = employeeQuery.sqlNameIdEmployees;
            const listRole = [];
            const managerList = [];
            const [roleResults] = await db.promise().query(queryRole);
            const [managerResults] =await db.promise().query(queryManager);
            const answers = inquirer



            

        }else if(ans.choice == "Update Employee Role"){ 

        }else if(ans.choice == "View All Departments"){ 
            await viewAllDepartments();

        }else if(ans.choice == "Add Department"){ 

        }else if(ans.choice == "View All Roles"){ 
            await viewAllRoles();

        }else if(ans.choice == "Add a Role"){ 

        }else if(ans.choice == "Quit"){
            console.log(`\n You Have Quit The App, Bye!`);
            db.end();
            
        }
    }catch(err){
        throw err;
    }
};



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
}
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
}

Init();



  




