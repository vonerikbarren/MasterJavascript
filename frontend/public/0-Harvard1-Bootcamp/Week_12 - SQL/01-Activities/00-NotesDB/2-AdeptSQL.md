# Adept (Beginner) SQL Notes




## SQL CODE below with comments. 
``` SQL
-- Use code below to change the password so node servers can access database. 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'

-- The following below is how you make a column the primary key --> 2 different ways
nameofColumn int(10) not null primary key auto_increment,
primary key(nameOfColumn)

```

## Additional Notes

> The following are used in datatypes for columns:
not null - 
primary key - 
auto_increment