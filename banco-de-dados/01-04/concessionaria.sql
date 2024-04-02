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