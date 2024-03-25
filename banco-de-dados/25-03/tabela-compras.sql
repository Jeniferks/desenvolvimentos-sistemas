CREATE DATABASE compras;
USE compras;

CREATE TABLE cliente(
id_cliente INT AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
cidade VARCHAR(50),
PRIMARY KEY (id_cliente)
);

CREATE TABLE acompanhamento(
id_acompanhamento INT AUTO_INCREMENT,
situacao VARCHAR(50),
PRIMARY KEY (id_acompanhamento)
);

CREATE TABLE pedido(
id_pedido INT AUTO_INCREMENT,
data_pedido DATE,
valor REAL,
cliente_id INT,
FOREIGN KEY(cliente_id)
REFERENCES cliente(id_cliente),
acompanhamento_id INT,
FOREIGN KEY(acompanhamento_id)
REFERENCES acompanhamento(id_acompanhamento),
PRIMARY KEY (id_pedido)
);

INSERT INTO cliente
(nome, cidade)
VALUES 
('João','Macaé'),
('Carlos','Salvador'),
('Maria','Niterói'),
('Ana','Campinas'),
('Marcos','Santos');

INSERT INTO acompanhamento
(situacao)
VALUES
('Registrado'),
('Em transporte'),
('Entregue');

SELECT * FROM acompanhamento