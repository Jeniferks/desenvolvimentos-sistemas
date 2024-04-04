CREATE DATABASE concessionaria;
USE concessionaria;

CREATE TABLE cliente(
id_cliente INT AUTO_INCREMENT,
nome_cliente VARCHAR (50) NOT NULL,
data_nascimento DATE,
PRIMARY KEY (id_cliente)
);



CREATE TABLE categoria(
id_categoria INT AUTO_INCREMENT,
nome_categoria VARCHAR (50) NOT NULL,
descricao VARCHAR(100),
PRIMARY KEY (id_categoria)
);

CREATE TABLE veiculo(
id_veiculo INT AUTO_INCREMENT,
nome_veiculo VARCHAR(50) NOT NULL,
placa VARCHAR(50),
cor VARCHAR(50),
cliente_id INT,
FOREIGN KEY (cliente_id)
REFERENCES cliente(id_cliente),
categoria_id INT,
FOREIGN KEY (categoria_id)
REFERENCES categoria(id_categoria),
PRIMARY KEY (id_veiculo)
);

CREATE TABLE estacionamento(
id_estacionamento INT AUTO_INCREMENT,
nome_estacionamento VARCHAR(50) NOT NULL,
capacidade INT,
data_entrada DATE,
data_saida DATE,
hora_entrada TIME,
hora_saida time,
veiculo_id INT,
FOREIGN KEY (veiculo_id)
REFERENCES veiculo(id_veiculo),
PRIMARY KEY (id_estacionamento)
);

INSERT INTO cliente
(nome_cliente, data_nascimento)
VALUES
("Jenifer Kindermann", "1992-05-04"),
("Akin Kindermann", "1992-05-04"),
("Andréia Kindermann", "1994-02-15");

SELECT * FROM cliente;

INSERT INTO categoria
(nome_categoria, descricao)
VALUES
("utilitários", "tipo de carros"),
("Van", "tipo de furgão"),
("Pickup", "tipo de caminhonete");

INSERT INTO veiculo
(nome_veiculo, placa, cor, cliente_id, categoria_id)
VALUES
("Corsa", "AAA-2320", "Preto", "1", 1),
("Gol", "CDE-3030", "Vermelho", "2", 1),
("Creta", "RAB-4474", "Branco", "3", 3),
("Savero", "TEF-7899", "Cinza", "3", 3);

INSERT INTO veiculo
(nome_veiculo, placa, cor)
VALUES
("Doble", "FED-2895", "Azul");

INSERT INTO estacionamento
(nome_estacionamento, capacidade, data_entrada, data_saida, hora_entrada, hora_saida,veiculo_id)
VALUES
("Zona1", 50, "2024-03-11", "2024-03-20", "12:30:10", "19:30:10", 1),
("Zona2", 55, "2024-02-12", "2024-03-20", "15:30:10", "18:30:10", 2),
("Zona3", 100, "2024-01-13", "2024-02-23", "16:30:10", "17:30:10", 3);


SELECT * FROM veiculo
JOIN categoria
ON veiculo.categoria_id = categoria.id_categoria
JOIN cliente
ON veiculo.cliente_id = cliente.id_cliente;

SELECT * FROM veiculo
LEFT JOIN cliente
ON veiculo.cliente_id = cliente.id_cliente;

SELECT * FROM veiculo
LEFT JOIN categoria
ON veiculo.categoria_id = categoria.id_categoria;

-- full join - utiliza o comando UNION

SELECT * FROM veiculo
LEFT JOIN cliente
ON veiculo.cliente_id = cliente.id_cliente
UNION
SELECT * FROM veiculo
RIGHT JOIN cliente
ON veiculo.cliente_id = cliente.id_cliente;

-- Realize um INNER JOIN entre as tabelas veiculo e cliente, é para aparecer nas colunas da consultas as
-- seguintes descrições: (id_veiculo, placa_registrada, cor, nome_do_cliente

SELECT veiculo.id_veiculo, veiculo.placa, veiculo.cor, veiculo.cliente_id, nome_cliente, data_nascimento FROM veiculo
INNER JOIN cliente
ON veiculo.cliente_id = cliente.id_cliente;

CREATE VIEW vw_veiculo_cliente AS
SELECT veiculo.id_veiculo, veiculo.placa, veiculo.cor, veiculo.cliente_id, nome_cliente, data_nascimento FROM veiculo
INNER JOIN cliente
ON veiculo.cliente_id = cliente.id_cliente;



SELECT * FROM vw_veiculo_cliente;

SELECT nome_cliente, placa FROM vw_veiculo_cliente;

SELECT nome_cliente, data_nascimento FROM vw_veiculo_cliente WHERE placa = "AAA-2320";

SELECT placa, cor FROM vw_veiculo_cliente WHERE id_estacionamento = "1";






