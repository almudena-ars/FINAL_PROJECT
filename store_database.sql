DROP SCHEMA IF EXISTS makeup_store;
CREATE SCHEMA makeup_store;
USE makeup_store;

CREATE TABLE product(
id BIGINT,
quantity INT,
PRIMARY KEY(id)
);

INSERT INTO product(id, quantity) VALUES
(1,10),
(2,4),
(5,7),
(6,1),
(3,4),
(9,8);

DROP TABLE IF EXISTS cart;

CREATE TABLE cart(
id BIGINT NOT NULL AUTO_INCREMENT,
user_id BIGINT,
product_id BIGINT,
PRIMARY KEY(id)
);

SELECT id FROM product p WHERE p.quantity>0;


DROP TABLE IF EXISTS users ;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NULL DEFAULT NULL,
  first_name VARCHAR(255) NULL DEFAULT NULL,
  last_name VARCHAR(255) NULL DEFAULT NULL,
  password VARCHAR(255) NULL DEFAULT NULL,
  role VARCHAR(255) NULL,
  PRIMARY KEY (id));



DROP TABLE IF EXISTS tokens ;

CREATE TABLE IF NOT EXISTS tokens (
  id INT NOT NULL AUTO_INCREMENT,
  created_date DATETIME(6) NULL DEFAULT NULL,
  token VARCHAR(255) NULL DEFAULT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
    FOREIGN KEY (user_id)
    REFERENCES users (id));
    
    DROP TABLE IF EXISTS transaction;
    
    CREATE TABLE transaction(
    id BIGINT NOT NULL AUTO_INCREMENT,
    purchase_date DATETIME NOT NULL
                DEFAULT CURRENT_TIMESTAMP,
	user_id BIGINT,
    product_id BIGINT,
    PRIMARY KEY(id)
    
    );



SELECT * FROM tokens;
SELECT * FROM users;
SELECT * FROM product;
SELECT * FROM cart;
SELECT * FROM transaction;



