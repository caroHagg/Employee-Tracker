USE company_db;

INSERT INTO department(name)
VALUE ("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO role (title,salary,department_id)
VALUE("Salesperson",70000,1),
("Software Engineer",90000,2),
("Accountant",80000,3),
("Lawyer",95000,4);

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUE("Sam","Doe",1,null),
("Kate","Williams",2,1),
("Ashley","Right",3,null),
("Tom","Wales",4,null),
("Charles","Wright",1,null);
