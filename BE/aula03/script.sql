drop database if exists banco
create database banco
use banco;
create table Cliente(
    cpf varchar(20) not null primary key,
    nome varchar(100) not null,
    enderecoCep varchar(10) not null,
    enderecoNum varchar (5),
    enderecoComplemento varchar(50)
);

create table Telefone(
    id int not null primary key auto_increment,
    cpf varchar(20) not null,
    tipo varchar(20) not null,
    numero varchar(20) not null,
    foreign key (cpf) references Cliente(cpf)
);

create table Contas(
    nConta int not null auto_increment,
    cpf varchar(20) not null,
    tipo varchar(10) not null,
    foreign key (cpf) references Cliente(cpf)
);

create table Movimentacoes(
    id int not null primary key auto_increment,
    tipo varchar(20) not null,
    valor float(10,2) not null,
    origem varchar(50) not null,
    destino varchar(50) not null,
    nConta int not null,
    quando DateTime not null default(curtime()),
    foreign key (nConta) references Contas(nConta)
);