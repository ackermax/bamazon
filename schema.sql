DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products
(
    item_id INTEGER(11) NOT NULL
    AUTO_INCREMENT,
    product_name VARCHAR
    (255) NULL,
    department_name VARCHAR
    (255) NULL,
    price DECIMAL
    (10,2) NULL,
    stock_quantity INT,
    product_sales INT,
    PRIMARY KEY
    (item_id)
);

    CREATE TABLE departments
    (
        department_id INTEGER(11) NOT NULL
        AUTO_INCREMENT,
    department_name VARCHAR
        (255) NULL,
    over_head_costs INTEGER
        (11) NULL,
    PRIMARY KEY
        (department_id)
);

        SELECT *
        FROM products;
        INSERT INTO products
            (product_name, department_name, price, stock_quantity)
        VALUES
            ("Nintendo Switch", "Video Games", "299.99", 15),
            ("Northface Jacket", "Clothing", "149.99", 3),
            ("Leather Couch", "Furniture", "100", 45),
            ("Oranges", "Food", "0.99", 250),
            ("Watermelon", "Food", "9.99", 2),
            ("Mario Kart 8 Deluxe", "Video Games", "59.99", 75),
            ("Playstation 4 Pro", "Video Games", "399.99", 45),
            ("Socks", "Clothing", "2.99", 215),
            ("Dining Room Table", "Furniture", "250", 4),
            ("Persona 5", "Video Games", "59.99", 35);

        SELECT *
        FROM departments;
        INSERT INTO departments
            (department_name, over_head_costs)
        VALUES
            ("Food", 2000),
            ("Furniture", 3500),
            ("Video Games", 3000),
            ("Clothing", 2350),
            ("Other", 1250);