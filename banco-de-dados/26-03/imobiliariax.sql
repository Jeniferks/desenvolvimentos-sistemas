CREATE DATABASE imobiliariax;
USE imobiliariax;

CREATE TABLE imovel(
id_imovel INT AUTO_INCREMENT,
tipo VARCHAR(50) NULL,
padrao VARCHAR(50) NULL,
codigo INT,
PRIMARY KEY (id_imovel)
);

CREATE TABLE corretor(
id_corretor INT AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
ano_nascimento DATE,
cpf INT UNIQUE,
cidade VARCHAR(100),
estado VARCHAR(50),
PRIMARY KEY (id_corretor)
);

ALTER TABLE corretor
MODIFY COLUMN ano_nascimento YEAR;

ALTER TABLE corretor
MODIFY COLUMN cpf VARCHAR(50) UNIQUE;


CREATE TABLE contrato(
id_contrato INT AUTO_INCREMENT,
data_horario_contrato DATETIME,
imovel_id INT,
FOREIGN KEY(imovel_id)
REFERENCES imovel(id_imovel),
corretor_id INT,
FOREIGN KEY(corretor_id)
REFERENCES corretor(id_corretor),
PRIMARY KEY (id_contrato)
);


SELECT * FROM imovel;
SELECT * FROM corretor;
SELECT * FROM contrato;

INSERT INTO imovel
(tipo, padrao, codigo)
VALUES
("Casa ","Luxo","5487965"),
("Apartamento","Super Luxo","7854695"),
("Casa ", "Alto Padrão","8795461"),
("Casa ", "Luxo","8798985"),
("Apartamento","Alto padrão","4584556");

INSERT INTO corretor
(nome, ano_nascimento, cpf, cidade, estado)
VALUES
("Jenifer k",1992,"54698745268","Florianópolis","SC"),
("Akin K",1992,"32654783952","Florianópolis","SC"),
("Elisabeth K",1959,"54687951222","Gravatal","SC"),
("Vilson V",1952,"45698752362","Florianópolis","SC"),
("Andreia",1994,"5462158965","Palmas","TO");

