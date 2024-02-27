CREATE DATABASE banco;
USE banco;


CREATE TABLE categoria(
id_categoria INT NOT NULL AUTO_INCREMENT,
nome VARCHAR (100),
PRIMARY KEY(id_categoria)
);

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
CNPJ_CPF BIGINT(14),
celular BIGINT(14),
rua VARCHAR(100),
numero INT(100),
PRIMARY KEY (id_cliente),
cliente_id INT,
FOREIGN KEY (cliente_id)
REFERENCES categoria(id_categoria)
);

CREATE TABLE agencia(
id_agencia INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(100),
PRIMARY KEY (id_agencia)
);

CREATE TABLE tipo(
id_tipo INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(100),
PRIMARY KEY (id_tipo)
);
-- 27.02 --
-- inserindo valores na coluna --

INSERT INTO cliente 
(nome)
VALUES
('Jenifer'),
('Akin');

-- para verificar os valores inseridos --

SELECT * FROM cliente;

SELECT nome FROM cliente;


