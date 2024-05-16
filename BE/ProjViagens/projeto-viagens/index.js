// Arquivo: server.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Rota para criar um novo destino
app.post('/destinos', async (req, res) => {
  const { nome, valor, data } = req.body;
  const novoDestino = await prisma.destino.create({
    data: {
      nome,
      valor,
      data,
    },
  });
  res.json(novoDestino);
});

// Rota para obter todos os destinos
app.get('/destinos', async (req, res) => {
  const destinos = await prisma.destino.findMany();
  res.json(destinos);
});

// Rota para criar um novo ponto turístico
app.post('/pontosTuristicos', async (req, res) => {
  const { nome, endereco, telefone, valor, destinoId } = req.body;
  const novoPontoTuristico = await prisma.pontoTuristico.create({
    data: {
      nome,
      endereco,
      telefone,
      valor,
      destinoId,
    },
  });
  res.json(novoPontoTuristico);
});

// Rota para obter todos os pontos turísticos
app.get('/pontosTuristicos', async (req, res) => {
  const pontosTuristicos = await prisma.pontoTuristico.findMany();
  res.json(pontosTuristicos);
});

// Rota para criar um novo hotel
app.post('/hoteis', async (req, res) => {
  const { nome, valor, avaliacao, email, site, destinoId } = req.body;
  const novoHotel = await prisma.hotel.create({
    data: {
      nome,
      valor,
      avaliacao,
      email,
      site,
      destinoId,
    },
  });
  res.json(novoHotel);
});

// Rota para obter todos os hotéis
app.get('/hoteis', async (req, res) => {
  const hoteis = await prisma.hotel.findMany();
  res.json(hoteis);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${3001}`);
});
