//initialize dependencies and const
const mysql = require('mysql2');
const inquirer = require("inquirer");
const cTable = require("console.table");
const employeeQuery = require("./queries/employees-query");
const { exit } = require('process');


const PORT = process.env.PORT || 3001;


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
                choices: ["View all Employees", "Add Employee","Update Employee Role","View All Departments","Add Department","View All Roles","Quit"]
            }
        ]);

        if(ans.choice === "View all Employees"){
            const query = employeeQuery.sqlAllEmployees;
            db.query(query,(err,results)=>{
                if(err){
                    throw err;
                }
                const table = cTable.getTable(results)
               console.log(`\n \n`+ table)
               Init();
            })
        }else if(ans.choice == "Add Employee"){ 
            

        }else if(ans.choice == "Update Employee Role"){ 

        }else if(ans.choice == "View All Departments"){ 

        }else if(ans.choice == "Add Department"){ 

        }else if(ans.choice == "View All Roles"){ 

        }else if(ans.choice == "Quit"){
            console.log(`\n You Have Quit The App, Bye!`);
            db.end();
            
        }
    }catch(err){
        throw err;
    }
};

Init();

  




