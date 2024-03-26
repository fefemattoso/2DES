--DESAFIO 3

DROP DATABASE IF EXISTS transportadora;
CREATE DATABASE transportadora CHARSET=UTF8 COLLATE utf8_general_ci;
USE transportadora;

CREATE TABLE Funcionario (
    matricula INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(50) NOT NULL
);

CREATE TABLE Veiculo (
    placa VARCHAR(10) NOT NULL PRIMARY KEY,
    modelo VARCHAR(20) NOT NULL,
    marca VARCHAR(20) NOT NULL,
    ano INT NOT NULL
);

CREATE TABLE Manutencao (
    id_manutencao INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    inicio_manutencao DATE NOT NULL,
    fim_manutencao DATE NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    matricula INT NOT NULL,
    placa VARCHAR(10) NOT NULL,
    FOREIGN KEY (matricula) REFERENCES Funcionario(matricula),
    FOREIGN KEY (placa) REFERENCES Veiculo(placa)
);

--DESAFIO 4

INSERT INTO Funcionario (nome, telefone) VALUES
("Osvaldo Oliveira", "19-72077-0521,19-06078-6843"),
("Jaqueline Teixeira", "19-23003-4864"),
("Keli Matos", "19-06486-6449,19-53266-7923"),
("Ursula Souza", "19-64378-2404"),
("Evandro Silva", "19-53315-2734");

INSERT INTO Veiculo (placa, modelo, marca, ano) VALUES
("DEA-7981", "Uno", "Fiat", 2005),
("CBC-4945", "Fiorino", "Fiat", 2007),
("BEE-7735", "Saveiro", "VW", 2015),
("CBA-4403", "Sandeiro", "Renaut", 2012),
("BBC-8504", "Palio", "Fiat", 2004),
("BEB-5885", "Gol", "VW", 2013),
("EDB-2475", "Ranger", "Ford", 2005);

INSERT INTO Manutencao (inicio_manutencao, fim_manutencao, descricao, matricula, placa) VALUES
("2023-02-25", "2023-03-04", "Lanterna queimada", 48482, "DEA-7981"),
("2023-03-13", "2023-03-21", "Farol queimado", 48542, "CBC-4945"),
("2023-03-29", "2023-04-05", "Troca de pneus dianteiros", 48522, "BEE-7735"),
("2023-04-14", "2023-04-24", "Troca de pneus dianteiros", 48502, "CBA-4403"),
("2023-04-30", "2023-05-07", "Farol queimado", 48502, "BBC-8504"),
("2023-05-16", "2023-05-25", "Troca de pneus traseiros", 48482, "BEB-5885"),
("2023-06-05", "2023-06-10", "Retrovizor quebrado", 48482, "EDB-2475"),
("2023-06-25", "2023-07-02", "Troca de óleo e revisão geral", 48502, "CBC-4945"),
("2023-07-15", "2023-07-19", "Troca de Flúido de Freio", 48482, "EDB-2475"),
("2023-08-04", "2023-08-10", "Problemas no cabo do acelerador", 48502, "DEA-7981"),
("2023-08-24", "2023-08-31", "Pane elétrica", 48562, "CBA-4403"),
("2023-08-27", "2023-09-04", "Rebimboca da parafuzeta", 48522, "BBC-8504"),
("2023-08-30", "2023-09-04", "Troca de cavalos por poneis", 48542, "BEE-7735"),
("2023-09-02", "2023-09-07", "Lanterna queimada", 48482, "BEB-5885");

select * from Funcionario;
select * from Veiculo;
select * from Manutencao;

--DESAFIO 5

-- Consulta 1: Listar os funcionários em ordem alfabética de nome
SELECT * FROM Funcionario ORDER BY nome;

-- Consulta 2: Listar todos os funcionários e seus telefones
SELECT nome, telefone FROM Funcionario;

-- Consulta 3: Mostrar somente os veículos da marca 'Fiat' ordenados pelo ano decrescente
SELECT * FROM Veiculo WHERE marca = 'Fiat' ORDER BY ano DESC;

-- Consulta 4: Mostrar todos os dados dos veículos e a quantidade de manutenções realizadas em cada um
SELECT V.placa, V.modelo, COUNT(M.placa) AS total_manutencoes
FROM Veiculo V
LEFT JOIN Manutencao M ON V.placa = M.placa
GROUP BY V.placa, V.modelo;

-- DESAFIO 6

-- Criação de uma visão que mostra todas as manutenções com nome do funcionário e modelo do veículo
CREATE VIEW vw_todas_as_manutencoes AS
SELECT M.id_manutencao, M.inicio_manutencao, M.fim_manutencao, M.descricao, F.nome AS nome_funcionario, V.modelo AS modelo_veiculo
FROM Manutencao M
INNER JOIN Funcionario F ON M.matricula = F.matricula
INNER JOIN Veiculo V ON M.placa = V.placa;

