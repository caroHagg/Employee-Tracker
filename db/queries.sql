USE company_db;

SELECT STRING_AGG(title,',')
FROM role;

SELECT E1.id ,E1.first_name, E1.last_name ,title, department.name AS department,salary,CONCAT(E2.first_name,' ',E2.last_name) AS manager 
FROM employee E1  
LEFT JOIN employee E2 ON E1.manager_id = E2.id
JOIN role ON role.id = E1.role_id
JOIN department ON role.department_id = department.id
ORDER BY E1.id ASC;

SELECT role.id, title, name AS department, salary
 FROM role
 JOIN department ON department.id = department_id
 ORDER BY role.id ASC;


