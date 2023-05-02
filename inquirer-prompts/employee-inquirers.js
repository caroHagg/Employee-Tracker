
const newEmployeeQuestions = async (roleList,managerList)=>{
try{
    const noneItem = {name:'None',value:null}
    managerList.unshift(noneItem);

    const newEmployeeQ = [
        {
            type:"input",
            message:"What's the employee's first name",
            name:"first_name"
        },
        {
            type:"input",
            message:"What's the employee's last name",
            name:"last_name"
        },
        {
            type:"list",
            message:"Choose a role: ",
            name:"role",
            choices:roleList
    
        },
        {
            type:"list",
            message:"Choose a manager: ",
            name:"manager",
            choices:managerList

        }

    ]

    return newEmployeeQ;

}catch(err){
    throw err;
}
    

};
const updateEmployeeQuestions = async (employeeList,roleList)=>{
    try{
        
        const updateEmployeeQ = [
          
            {
                type:"list",
                message:"Which employee's role do you want to update? ",
                name:"employee",
                choices:employeeList
        
            },
            {
                type:"list",
                message:"Which role do you want to assign the selected employee?",
                name:"role",
                choices:roleList
    
            }
    
        ]
    
        return updateEmployeeQ;
    
    }catch(err){
        throw err;
    }
        
    
    };



module.exports = {newEmployeeQuestions,updateEmployeeQuestions};
