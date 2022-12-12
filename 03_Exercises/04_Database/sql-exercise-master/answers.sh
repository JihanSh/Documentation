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