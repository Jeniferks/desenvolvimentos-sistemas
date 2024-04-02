CREATE DATABASE familiar;
USE familiar;

CREATE TABLE filho(
id_filho INT AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
PRIMARY KEY (id_filho)
);

CREATE TABLE pai(
id_pai INT AUTO_INCREMENT,
nome VARCHAR(50) not null,
PRIMARY KEY (id_pai),
filho_id INT,
FOREIGN KEY (filho_id)
REFERENCES filho(id_filho)
);

INSERT INTO filho
(nome)
VALUES
("Joaozinho"),
("Mariazinha"),
("Carlinha"),
("Aninha");



INSERT INTO pai
(nome, filho_id)
VALUES
("Antonio", 4),
("Antonio", 3),
("Carlos", 2);

INSERT INTO pai
(nome)
VALUES
("Mateus");

SELECT pai.nome, filho.nome FROM pai
JOIN filho
ON pai.filho_id = filho.id_filho;

-- LEFT JOIN - traz tudo que se relaciona e quem esta a esquerda
SELECT pai.nome, filho.nome FROM pai
LEFT JOIN filho
ON pai.filho_id = filho.id_filho;

-- RIGHT JOIN - traz tudo que se relaciona e quem esta a esquerda
SELECT pai.nome, filho.nome FROM pai
RIGHT JOIN filho
ON pai.filho_id = filho.id_filho;

-- FULL JOIN - retorna relacionados, os que estao a esquerda e a direita

SELECT pai.nome, filho.nome FROM pai
LEFT JOIN filho
ON pai.filho_id = filho.id_filho
UNION
SELECT pai.nome, filho.nome FROM pai
RIGHT JOIN filho
ON pai.filho_id = filho.id_filho;



SELECT * FROM filho;
SELECT * FROM pai
