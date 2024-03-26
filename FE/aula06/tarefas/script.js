const mysql = require('mysql');
const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'gerenciamento_tarefas'
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Função para criptografar senha
const encryptPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Registro de usuário
app.post('/usuarios/registro', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const encryptedPassword = await encryptPassword(senha);

    const sql = 'INSERT INTO Usuarios (Nome, Email, Senha) VALUES (?, ?, ?)';
    db.query(sql, [nome, email, encryptedPassword], (err, result) => {
      if (err) {
        throw err;
      }
      console.log('Usuário registrado com sucesso');
      res.status(200).send('Usuário registrado com sucesso');
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erro ao registrar usuário');
  }
});

// Login de usuário
app.post('/usuarios/login', (req, res) => {
  const { email, senha } = req.body;

  const sql = 'SELECT * FROM Usuarios WHERE Email = ?';
  db.query(sql, [email], async (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length === 0) {
      return res.status(400).send('Usuário não encontrado');
    }

    const user = result[0];
    const match = await bcrypt.compare(senha, user.Senha);
    if (!match) {
      return res.status(401).send('Credenciais inválidas');
    }

    res.status(200).send('Login bem-sucedido');
  });
});

// CRUD de Tarefas
// Implemente as rotas para criar, visualizar, atualizar e excluir tarefas aqui

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});
