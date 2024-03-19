CREATE DATABASE regra_constraint;
USE regra_constraint;

CREATE TABLE usuario(
id_cliente INT AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
cpf BIGINT UNIQUE,
pais VARCHAR(50) DEFAULT 'Brasil',
graduado ENUM('Sim', 'Nao'),
num_filhos INT,
CHECK (num_filhos >= 0),
PRIMARY KEY(id_cliente)
);

INSERT INTO usuario
(nome, cpf, pais, graduado, num_filhos)
VALUES 
('Beth', 04316555849, 'Brasil', 'Sim', 2);

INSERT INTO usuario
(nome, cpf, graduado, num_filhos)
VALUES 
('Beth', 6518798189891,'Sim', 2);

INSERT INTO usuario
(nome, cpf, graduado, num_filhos)
VALUES 
('Luiz', 9849898755,'Nao', 2);

INSERT INTO usuario
(nome, cpf, graduado, num_filhos)
VALUES 
('Alberto', 5546879874,'Nao', -2);


SELECT * FROM usuario
