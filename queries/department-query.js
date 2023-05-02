
const sqlAllDept = 
` SELECT * FROM department;`

const sqlAllDeptNames =
`SELECT name FROM department`
const sqlAllNameAndIdDept = `SELECT name , id AS value FROM department`

const sqlAddDept = 
` INSERT INTO department(name)
  VALUE (?);`




module.exports = {sqlAllDept,sqlAllDeptNames,sqlAllNameAndIdDept,sqlAddDept};
