const sqlAllRoles =
`SELECT role.id, title, name AS department, salary
FROM role
JOIN department ON department.id = department_id
ORDER BY role.id ASC;`

const sqlNameIdRoles =
`SELECT title as name,id as value FROM role`

const sqlAddRole = 
`INSERT INTO role (title, salary, department_id)
 VALUE (?,?,?);`



 module.exports = {sqlAllRoles,sqlNameIdRoles,sqlAddRole};