const express = require('express');
const destinos = require('./controllers/destinos');
const pontosTuristicos = require('./controllers/pontosTuristicos');
const hoteis = require('./controllers/hoteis');

const router = express.Router();

// criar um novo destino
router.post('./controllers/destino', async (req, res) => {
  const { nome, valor, data } = req.body;
  try {
    const novoDestino = await destinos.criarDestino(nome, valor, data);
    res.status(201).json(novoDestino);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// obter todos os destinos
router.get('./controllers/destinos', async (req, res) => {
  try {
    const destinos = await destinos.buscarDestinos();
    res.status(200).json(destinos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// criar um novo ponto turístico
router.post('./controllers/pontosTuristicos', async (req, res) => {
  const { nome, endereco, telefone, valor, destinoId } = req.body;
  try {
    const novoPontoTuristico = await pontosTuristicos.criarPontoTuristico(
      nome,
      endereco,
      telefone,
      valor,
      destinoId
    );
    res.status(201).json(novoPontoTuristico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// obter todos os pontos turísticos
router.get('./controllers/pontosTuristicos', async (req, res) => {
  try {
    const pontosTuristicos = await pontosTuristicos.buscarPontosTuristicos();
    res.status(200).json(pontosTuristicos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// criar um novo hotel
router.post('./controllers/hoteis', async (req, res) => {
  const { nome, valor, avaliacao, email, site, destinoId } = req.body;
  try {
    const novoHotel = await hoteis.criarHotel(nome, valor, avaliacao, email, site, destinoId);
    res.status(201).json(novoHotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// obter todos os hotéis
router.get('./controllers/hoteis', async (req, res) => {
  try {
    const hoteis = await hoteisController.buscarHoteis();
    res.status(200).json(hoteis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
