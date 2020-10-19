# Basics of SQL SYNTAX

Schema = Database
Lightning bolt (regular) - executes command. 

Refresh Schema tab by right clicking and refresh to see new databases created.

Create comments by -- space 
``` sql 

-- This is a comment. 


create table tableName(
  age int(3),
  userName varchar(50),
  hungry bit()


)

insert into FOO2.tableTest (age, userName, hungry)
values(27, "Teacher", True)

update FOO2.tableTest
set hungry = true
where userName = "Rubival"

delete from FOO2.tableTest 
where userName = "Rubival"

select age, userName, hungry
from FOO2.tableTest

select * from FOO2.tableTest limit 1; -- shows the first entry 

```

dataTypes = decimal, char, date, timestamp, 
search(SQL Data Types).

Boolean hungry bit -- true, false, null 

Look Up - difference between null & nulll

BLOB  = Binary Large Object
CLOB = 

right clicking on database / schema on the left toolbar you can set default schema for default command creation. 


When creating a table, its best practice to have a GUID.
Look it up. 

You cannot delete columns from a table with the delete command. 

select * means select everything. 


1. Creating a database - create database `databaseName`
2. Creating a table - create table `tableName`
3. Insert data - insert into `tableName`
4. Update data - update `DatabaseName`.`tableName`
5. Delete data - delete from `DatabaseName`.`tableName` where userName = "Rubival";
6. Select data - select age, username from `DatabaseName`.`tableName`