CREATE DATABASE livraria;
USE livraria;

CREATE TABLE editora(
id_editora INT NOT NULL AUTO_INCREMENT,
nome VARCHAR (100),
razaoSocial BIGINT(100),
rua VARCHAR(45),
numero INT,
cidade VARCHAR(45),
CEP BIGINT(100),
telefone VARCHAR(45),
PRIMARY KEY(id_editora)
);

CREATE TABLE autor(
id_autor INT NOT NULL AUTO_INCREMENT,
nome VARCHAR (100),
RG BIGINT(100),
PRIMARY KEY(id_autor)
);

CREATE TABLE financiador(
id_financiador INT NOT NULL AUTO_INCREMENT,
nome VARCHAR (100),
CNPJ BIGINT(100),
PRIMARY KEY(id_financiador)
);

CREATE TABLE livro(
id_livro INT NOT NULL AUTO_INCREMENT,
ISBN BIGINT(45),
titulo VARCHAR(200),
preco REAL,
categoria VARCHAR(45),
PRIMARY KEY (id_livro),
editora_id INT,
autor_id INT,
financiador_id INT,
FOREIGN KEY (editora_id)
REFERENCES editora(id_editora),
FOREIGN KEY (autor_id)
REFERENCES autor(id_autor),
FOREIGN KEY (financiador_id)
REFERENCES financiador(id_financiador)
);



CREATE TABLE pedido(
id_pedido INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id_pedido),
pedido_id INT,
FOREIGN KEY (pedido_id)
REFERENCES livro(id_livro),
quantidade INT
);

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT,
nome VARCHAR (100),
RG BIGINT(100),
CPF BIGINT(100),
rua VARCHAR(45),
numero INT,
cidade VARCHAR(45),
CEP BIGINT(100),
telefone VARCHAR(45),
PRIMARY KEY(id_cliente),
cliente_id INT,
FOREIGN KEY (cliente_id)
REFERENCES pedido(id_pedido)
);



INSERT INTO autor
(nome, RG)
VALUES
("George Orwell", 658874-3),
("Paulo Coelho", 564879-3),
("Stephen King", 658972-3),
("J.k Rowling", 457821-3),
("Itamar Vieira", 325411-3); 

INSERT INTO financiador
(nome, CNPJ)
VALUES
("Jenifer Kindermann", 458778845/0001),
("Julia Silva", 87995462/0001),
("Joao Junior", 784521202/0001),
("Andréia Santos", 5877854210/0001),
("Julio Juliano", 784631254/0001);

INSERT INTO cliente
(nome, RG, CPF, rua, numero, cidade, CEP, telefone)
VALUES
("Roberto Rogerio", 658874-3, 45687795214, "Bocaiuva", 2205, " Florianópolis", 88015530, 489991990550),
("Luiza Canada", 849975-2, 10245578423, "Esteve Junior", 13, " Florianópolis", 88015500, 48994885220),
("Roberta Julia", 578520-5, 89574865596, "Gama Deça", 100, " Florianópolis", 88015520, 48991554470),
("Vilson Silveira", 654780-7, 7845512017, "Almirante Lamego", 879, " Florianópolis", 88015510, 48991996582),
("Gabriel Gabriela", 478520-9, 32056601903, "Rafael Bandeira", 350, " Florianópolis", 88015580, 48985412053);

insert into editora
(nome, razaoSocial, rua, numero, cidade, CEP, telefone)
VALUES
("Abril", 89984984, "Bocaiuva", 2205, " Florianópolis", 88015530, 489991990550),
("Super Interessante", 6546684891, "Esteve Junior", 13, "Florianópolis", 88015500, 48994885220),
("Senai",88494984984, "Gama Deça", 100, "Florianópolis", 88015520, 48991554470),
("Biblica",984984984, "Almirante Lamego", 879, " Florianópolis", 88015510, 48991996582),
("Espirita", 7849849848, "Rafael Bandeira", 350, " Florianópolis", 88015580, 48985412053);


CREATE TABLE editora(
id_editora INT NOT NULL AUTO_INCREMENT,
nome VARCHAR (100),
razaoSocial BIGINT(100),
rua VARCHAR(45),
numero INT,
cidade VARCHAR(45),
CEP BIGINT(100),
telefone VARCHAR(45),
PRIMARY KEY(id_editora)
);








