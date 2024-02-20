CREATE DATABASE estacionamento;
USE estacionamento;

CREATE TABLE ticket(
id_ticket INT NOT NULL AUTO_INCREMENT,
codigo_barra INT,
PRIMARY KEY(id_ticket)
);

CREATE TABLE estacionamento(
id_estacionamento INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
CNPJ BIGINT(14),
PRIMARY KEY (id_estacionamento),
ticket_id INT,
FOREIGN KEY (ticket_id)
REFERENCES ticket(id_ticket)
);

CREATE TABLE setor(
id_setor INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
descricao VARCHAR(45),
PRIMARY KEY (id_setor),
setor_id INT,
FOREIGN KEY (setor_id)
REFERENCES estacionamento(id_estacionamento)
);

CREATE TABLE vaga (
id_vaga INT NOT NULL AUTO_INCREMENT,
numero_vagas varchar(45),
PRIMARY KEY (id_vaga),
vaga_id INT,
FOREIGN KEY (id_vaga)
REFERENCES setor(id_setor)
);


ALTER TABLE ticket
ADD COLUMN observacao TEXT