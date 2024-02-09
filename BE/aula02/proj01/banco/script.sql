-- DDL - Estrutura
drop database if exists locadora;
create database locadora;
use locadora;
create table Filmes(
    id integer primary key auto_increment,
    nome varchar(50) not null,
    direcao varchar(50) not null,
    estudio varchar(50) not null,
    faixa integer not null,
    ano integer not null
);
describe Filmes;

-- DML - Popular com dados de teste
insert into Filmes(nome, direcao, estudio, faixa, ano)
values  
("Coraline","Henry Selick","laika","10","2009"),
("Evil Bong","Charles Band","Full Moon","14","2006"),
("Gingerdead Man","Charles Band","Full Moon","15","2005"),
("The Refrigerator","Nicholas Jacob","Avenue D","16","1991");
select * from Filmes;