CREATE DATABASE IF NOT EXISTS app_parking;

USE app_parking;

CREATE TABLE usuarios(
id INT(11) NOT NULL AUTO_INCREMENT,
user varchar(45) DEFAULT NULL,
password varchar(45) NOT NULL,
tipo INT(1) DEFAULT NULL,
PRIMARY KEY id
);

DESCRIBE usuarios;

INSERT INTO usuarios VALUES
  (1, 'admin', '1234', 1),
  (2, 'operador', '1234', 2);