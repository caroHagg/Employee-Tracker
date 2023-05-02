const newRoleQuestions = async (departmentList)=>{
    try{
       
        const newRoleQ = [
            {
                type:"input",
                message:"What is the name of the role?",
                name:"title"
            },
            {
                type:"input",
                message:"What is the salary of the role?",
                name:"salary"
            },
            {
                type:"list",
                message:"Which department does the role belong to? ",
                name:"department",
                choices:departmentList
            }
    
        ]
    
        return newRoleQ;
    
    }catch(err){
        throw err;
    }
        
    
    }; 

    module.exports= {newRoleQuestions}