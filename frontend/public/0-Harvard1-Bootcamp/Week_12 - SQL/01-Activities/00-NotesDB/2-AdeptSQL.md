# Adept (Beginner) SQL Notes




## SQL CODE below with comments. 
``` SQL
-- Use code below to change the password so node servers can access database. 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'

-- The following below is how you make a column the primary key --> 2 different ways
nameofColumn int(10) not null primary key auto_increment,
primary key(nameOfColumn)

-- We can use the and keyword to make additional update changes. 
update tableName
set hungry = false
where yeahMaybe = 44 and columnName = "Jim";
-- you can also use "or" and "!="

order by yeahMaybe desc;



```

## Additional Notes

> The following are used in datatypes for columns:
not null - 
primary key - 
auto_increment - 
default - 
drop - used to remove aspects of the database as well as the database itself. 
as - used to make writing commands easier. ex. student as s 


## SQL Data Joins 

Go to i.stack.imgur.com/UI25E.jpg or simply look up different types of SQL data joins. 