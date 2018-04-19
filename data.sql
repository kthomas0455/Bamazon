DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  itemID int(11) NOT NULL AUTO_INCREMENT,
  productName varchar(45) NOT NULL,
  departmentName varchar(45) NOT NULL,
  price int(11) NOT NULL,
  stockQuantity int(11) NOT NULL,
  PRIMARY KEY (itemID)
);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('microwave', 'household', 100, 50);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('TV', 'electronics', 550, 50);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('floor steamer', 'household', 125, 50);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('rug', 'household', 50, 50);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('roomba', 'household', 250, 50);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('headphones', 'electronics', 115, 50);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('compound bow', 'outdoor', 205, 30);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('MacBook', 'electronics', 2575, 50);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('kayak', 'outdoor', 199, 30);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('xbox', 'electronics', 250, 15);

