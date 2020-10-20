DROP DATABASE IF EXISTS phone_pricesDB;

CREATE DATABASE phone_pricesDB;

USE phone_pricesDB;

CREATE TABLE products
(
  id INT NOT NULL
  AUTO_INCREMENT,
  brand VARCHAR
  (45) NULL,
  product VARCHAR
  (45) NULL,
  avgColor VARCHAR
  (50) NULL,
  price DECIMAL
  (10,2) NULL,
  normalRating INT NULL,
  myRating INT NULL,
  ProAvailable BIT NULL, 

  PRIMARY KEY
  (id)
);

  INSERT INTO products
    (brand, product, avgColor, price, normalRating, myRating, ProAvailable)
  VALUES
    ("Apple", "iPhone12", "black", 650.99, 10, 8, 1);

  INSERT INTO products
    (brand, product, avgColor, price, normalRating, myRating, ProAvailable)
  VALUES
    ("Apple", "iPhone12 Pro", "black", 999.99, 10, 10, 1);

  INSERT INTO products
    (brand, product, avgColor, price, normalRating, myRating, ProAvailable)
  VALUES
    ("Samsung", "Galaxy Z Fold", "black", 1999.99, 10, 5, 1);

  INSERT INTO products
    (brand, product, avgColor, price, normalRating, myRating, ProAvailable)
  VALUES
    ("Samsung", "Galaxy Note", "black", 799.99, 10, 8, 1);

  INSERT INTO products
    (brand, product, avgColor, price, normalRating, myRating, ProAvailable)
  VALUES
    ("Google", "Pixel 5", "black", 699.99, 10, 8, 0 );

  INSERT INTO products
    (brand, product, avgColor, price, normalRating, myRating, ProAvailable)
  VALUES
    ("brand", "V60 ThinQ", "black", 650.99, 10, 8, 0);





-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
