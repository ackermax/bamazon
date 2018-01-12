DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products
(
    item_id INTEGER(11) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NULL,
    department_name VARCHAR(255) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

SELECT *
FROM products;
INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("Nintendo Switch", "Video Games", "299.99", 15),
    ("Northface Jacket", "Clothing", "149.99", 10),
    ("Leather Couch", "Furniture", "100", 45),
    ("Oranges", "Food", "0.99", 250),
    ("Watermelon", "Food", "9.99", 55),
    ("Mario Kart 8 Deluxe", "Video Games", "59.99", 75),
    ("Playstation 4 Pro", "Video Games", "399.99", 45),
    ("Socks", "Clothing", "2.99", 215),
    ("Dining Room Table", "Furniture", "250", 40),
    ("Persona 5", "Video Games", "59.99", 35);