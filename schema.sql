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
    (11,2) NULL,
    stock_quantity INT,
    product_sales DECIMAL(11, 2) DEFAULT 0 NOT NULL,
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
            (product_name, department_name, price, stock_quantity, product_sales)
        VALUES
            ("Nintendo Switch", "Video Games", "299.99", 15, 0),
            ("Northface Jacket", "Clothing", "149.99", 3, 0),
            ("Leather Couch", "Furniture", "100", 45, 0),
            ("Oranges", "Food", "0.99", 250, 0),
            ("Watermelon", "Food", "9.99", 2, 0),
            ("Mario Kart 8 Deluxe", "Video Games", "59.99", 75, 0),
            ("Playstation 4 Pro", "Video Games", "399.99", 45, 0),
            ("Socks", "Clothing", "2.99", 215, 0),
            ("Dining Room Table", "Furniture", "250", 4, 0),
            ("Persona 5", "Video Games", "59.99", 35, 0);

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