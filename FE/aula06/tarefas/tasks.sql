-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS gerenciamento_tarefas;

-- Usar o banco de dados
USE gerenciamento_tarefas;

-- Criar tabela de Usuários
CREATE TABLE IF NOT EXISTS Usuarios (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Senha VARCHAR(255) NOT NULL
);

-- Criar tabela de Tarefas
CREATE TABLE IF NOT EXISTS Tarefas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Descricao TEXT NOT NULL,
    DataVencimento DATE,
    Status ENUM('A fazer', 'Em andamento', 'Concluído') DEFAULT 'A fazer',
    UsuarioID INT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID)
);

-- Inserir dados de teste para Usuários
INSERT INTO Usuarios (Nome, Email, Senha) VALUES
('Usuário 1', 'usuario1@example.com', 'senha1'),
('Usuário 2', 'usuario2@example.com', 'senha2');

-- Inserir dados de teste para Tarefas
INSERT INTO Tarefas (Descricao, DataVencimento, UsuarioID) VALUES
('Tarefa 1 do Usuário 1', '2024-03-20', 1),
('Tarefa 2 do Usuário 1', '2024-03-25', 1),
('Tarefa 1 do Usuário 2', '2024-03-22', 2);
