const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const bodyParser = require('body-parser');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rotas para destinos
app.get('/destinos', async (req, res) => {
  const destinos = await prisma.destino.findMany();
  res.json(destinos);
});

app.post('/destinos', async (req, res) => {
  const { nome, descricao } = req.body;
  const destino = await prisma.destino.create({ data: { nome, descricao } });
  res.json(destino);
});

// Rotas para hoteis
app.get('/hoteis', async (req, res) => {
  const hoteis = await prisma.hotel.findMany();
  res.json(hoteis);
});

app.post('/hoteis', async (req, res) => {
  const { nome, endereco, destinoId } = req.body;
  const hotel = await prisma.hotel.create({ data: { nome, endereco, destinoId } });
  res.json(hotel);
});

// Rotas para pontos turísticos
app.get('/pontos-turisticos', async (req, res) => {
  const pontosTuristicos = await prisma.pontoTuristico.findMany();
  res.json(pontosTuristicos);
});

app.post('/pontos-turisticos', async (req, res) => {
  const { nome, descricao, destinoId } = req.body;
  const pontoTuristico = await prisma.pontoTuristico.create({ data: { nome, descricao, destinoId } });
  res.json(pontoTuristico);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
