drop database if exists transportadora;
create database transportadora;
use transportadora;

create table Cliente(
    IdCliente integer primary key auto_increment,
    Nome varchar(100) not null,
    Endereco varchar(50) not null,
    Telefone varchar(12) not null,
    Email varchar(100) not null
);

create table Funcionario(
    IdFuncionario integer primary key auto_increment,
    Nome varchar(100) not null,
    Cargo varchar(30) not null, 
    Salario decimal(5,2) not null
);

create table Veiculo(
    IdVeiculo integer primary key auto_increment,
    Placa varchar(10) not null,
    Modelo varchar(20) not null,
    Capacidade varchar(10) not null
);

create table Rota(
    IdRota integer primary key auto_increment,
    Origem varchar(30) not null,
    Destino varchar(30) not null,
    Distancia varchar(10)
);

create table Entrega(
    IdEntrega integer primary key auto_increment,
    Inicio varchar(20) not null,
    Fim varchar(20) not null,
    Estatus varchar(12) not null,
    IdRota integer not null,
    IdVeiculo integer not null,
    Motorista integer not null,
    foreign key (IdRota) references Rota(IdRota),
    foreign key (IdVeiculo) references Veiculo(IdVeiculo),
    foreign key (Motorista) references Funcionario(IdFuncionario)
);

create table Pedido(
    IdPedido integer primary key auto_increment,
    DataPedido date not null,
    Valor decimal(5,2),
    IdCliente integer not null,
    IdEntrega integer not null,
    foreign key (Idcliente) references Cliente(IdCliente),
    foreign key (IdEntrega) references Entrega(IdEntrega)
);

INSERT INTO Cliente (Nome, Endereco, Telefone, Email) VALUES
('Luna Valente', 'Rua 1, 56', '(19) 92234-5228', 'luna@example.com'),
('Simon Álvarez', 'Av. MER, 345', '(19) 92245-6009', 'simon@example.com'),
('Matteo Balsano', 'Rua Y, 666', '(19) 96667-8971', 'matteo@example.com');

INSERT INTO Funcionario (Nome, Cargo, Salario) VALUES
('Ramiro Ponce', 'Motorista', 3000.00),
('Jimena Medina', 'Gerente', 5000.00),
('Yamila Sanchez', 'Assistente', 2500.00);

INSERT INTO Veiculo (Placa, Modelo, Capacidade) VALUES
('FDP1224', 'Caminhão', '1000kg'),
('VSF5666', 'Van', '600kg'),
('CUH9090', 'Caminhonete', '700kg');

INSERT INTO Rota (Origem, Destino, Distancia) VALUES
('Buenos Aires', 'Córdoba', '800km'),
('Córdoba', 'Rosario', '300km'),
('Rosario', 'Mendoza', '700km'),
('Mendoza', 'San Juan', '400km'),
('San Juan', 'Salta', '600km');


INSERT INTO Entrega (Inicio, Fim, Estatus, IdRota, IdVeiculo, Motorista) VALUES
('2024-03-06', '2024-03-07', 'Pendente', 3, 3, 2),
('2024-03-07', '2024-03-08', 'Pendente', 1, 1, 1),
('2024-03-02', '2024-03-03', 'Pendente', 2, 2, 1),
('2024-03-03', '2024-03-04', 'Pendente', 3, 3, 2),
('2024-03-01', '2024-03-02', 'Pendente', 1, 1, 1),
('2024-02-28', '2024-03-01', 'Pendente', 2, 2, 1),
('2024-02-27', '2024-02-28', 'Pendente', 1, 1, 1),
('2024-03-04', '2024-03-05', 'Pendente', 1, 1, 1),
('2024-02-29', '2024-03-01', 'Pendente', 3, 3, 2),
('2024-03-05', '2024-03-06', 'Pendente', 2, 2, 1);


INSERT INTO Pedido (DataPedido, Valor, IdCliente, IdEntrega) VALUES
('2024-02-29', 75.00, 5, 3),
('2024-02-29', 90.00, 1, 3),
('2024-03-01', 55.00, 2, 4),
('2024-03-02', 120.00, 3, 7),
('2024-02-29', 60.00, 2, 3),
('2024-03-02', 85.00, 5, 6),
('2024-02-28', 120.00, 3, 2),
('2024-03-01', 95.00, 1, 4),
('2024-03-01', 80.00, 4, 5),
('2024-03-02', 100.00, 1, 6),
('2024-03-02', 50.00, 4, 8),
('2024-02-28', 70.00, 4, 2),
('2024-02-27', 50.00, 2, 1),
('2024-03-02', 70.00, 2, 7),
('2024-02-27', 100.00, 1, 1),
('2024-02-29', 80.00, 5, 3),
('2024-02-27', 100.00, 1, 1),
('2024-03-02', 65.00, 5, 8),
('2024-03-01', 130.00, 3, 5),
('2024-03-01', 80.00, 4, 5);