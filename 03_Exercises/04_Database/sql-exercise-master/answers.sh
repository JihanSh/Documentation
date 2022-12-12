"select * from students"
"select * from students where age>30"
"select * from students where gender="F" and age>30"
"select Points from students where Name="Alex"
"Insert into students values (7,"Jihan",25,"F",200)"
"update students set points=350 where name="Basma""
"update students set points=100 where name="Alex""



"CREATE TABLE graduates (
    ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL UNIQUE,
	Age INTEGER,
	Gender TEXT,
	Points INTEGER,
	Graduation TEXT
);"




"INSERT INTO graduates (ID, name, Age, Gender, Points) SELECT * FROM students WHERE name = 'Layal'"


"UPDATE graduates SET Graduation = '08/09/2019' WHERE name = 'Layal'"




"DELETE from students WHERE name = 'Layal'"

"SELECT employees.Name, employees.Company, companies.Date
 FROM employees 
 INNER JOIN companies ON companies.Name = employees.Company"

 "SELECT employees.Name FROM employees 
  INNER JOIN companies ON companies.Name = employees.Company
  WHERE companies.Date < 2000"

"SELECT companies.Name FROM employees 
 INNER JOIN companies ON companies.Name = employees.Company
 WHERE employees.Role = 'Graphic Designer'"
