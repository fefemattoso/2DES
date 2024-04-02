-- Consulta 1: Listar os clientes em ordem alfabética de nome
SELECT *
FROM Clientes
ORDER BY nome_cliente;

-- Consulta 2: Listar todos os clientes e seus telefones
SELECT nome_cliente, telefone
FROM Clientes;

-- Consulta 3: Listar todos os veículos em ordem crescente de marca e modelo
SELECT *
FROM Carros
ORDER BY marca, modelo;

-- Consulta 4: Mostrar somente os veículos da marca 'Fiat' ordenados pela diária decrescente
SELECT *
FROM Carros
WHERE marca = 'Fiat'
ORDER BY diaria DESC;

-- Consulta 5: Mostrar todos os dados dos veículos e a quantidade de aluguéis realizadas em cada um
SELECT c.*, COUNT(a.placa) AS quantidade_alugueis
FROM Carros c
LEFT JOIN Alugueis a ON c.placa = a.placa
GROUP BY c.placa;

-- Criação da Visão vw_todos_os_alugueis
CREATE VIEW vw_todos_os_alugueis AS
SELECT a.*, c.nome_cliente, car.modelo, car.marca
FROM Alugueis a
INNER JOIN Clientes c ON a.cpf_cliente = c.cpf_cliente
INNER JOIN Carros car ON a.placa = car.placa;