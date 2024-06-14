-- SQL do banco de dados de Inventários com apenas uma tabela
DROP DATABASE IF EXISTS inventario;
CREATE DATABASE inventario CHARSET=UTF8 COLLATE utf8_general_ci;
USE inventario;
-- DDL Criação da estrutura da tabela
CREATE TABLE item (
    id integer not null primary key  auto_increment, 
    nome varchar(50) not null,
    descricao text,
    valor decimal(10,2) not null
);

-- DML Popular a tabela com dados de teste para itens de papelaria
INSERT INTO item VALUES
('p001','Caneta','Caneta esferográfica preta',1.50),
('p002','Caderno','Caderno pautado 100 folhas',8.00),
('p003','Lápis','Lápis HB #2',0.50),
('p004','Borracha','Borracha branca',1.00),
('p005','Clips','Clips metálicos',2.50),
('p006','Papel','Papel sulfite A4 (500 folhas)',20.00);


select * from item;