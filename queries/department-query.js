
const sqlAllDept = 
` SELECT * FROM department;`

const sqlAllDeptNames =
`SELECT name FROM department`

const sqlAddDept = 
` INSERT INTO department(name)
  VALUE ("?");`



module.exports = {sqlAllDept,sqlAllDeptNames, sqlAddDept};
