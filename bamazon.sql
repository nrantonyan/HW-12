DROP DATABASE bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    item_id INT NOT NULL IDENTITY(1,1),
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(45) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('XTRA TOASTY Cheese Flavored Crackers - Now with REAL crack!','Pharmacy', '80.99', '100');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Smoregasm Eye Shadow - WARNING: FEMININE PRODUCT', 'Cosmetics', '12.99', '1');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Map to Uranus', 'Travel', '7.10', '7');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Wango Tango Sweet Tea', 'Food & Drink', '1.59', '100');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Son of a Stitch! - The all-purpose bandage ', 'Pharmacy', '5.99', '50');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bread, Get it', 'Food & Drink', '0.00', '2303');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('iPhone Uncharger - Drains your battery even faster!', 'Electronics', '20.99', '26');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Mustache you a Question - Frantic fun for the not so frantic men', 'Toys & Games', '14.99', '79');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Not a Jet-Pack', 'Travel', '3999.99', '10');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('A Child - Literally a child', 'Trade', '968.07', '420');
