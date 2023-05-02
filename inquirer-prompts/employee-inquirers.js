
const newEmployeeQuestions = (roleList,managerList)=>{

    const newEmployeeQ = [
        {
            type:"input",
            message:"What's the employee's first name",
            name:"first"
        },
        {
            type:"input",
            message:"What's the employee's last name",
            name:"last"
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
            choices:[{name:'None',value:'null'},managerList]

        }

    ]

    return newEmployeeQ;

}

module.exports = {newEmployeeQuestions};
