const express = require('express');
const router = express.Router();
const Veiculo = require('../connection/mysql');

// CREATE - Cria um novo veículo
router.post('/', async (req, res) => {
    try {
        const veiculo = new Veiculo(req.body);
        await veiculo.save();
        res.status(201).send(veiculo);
    } catch (error) {
        res.status(400).send(error);
    }
});

// READ - Lista todos os veículos
router.get('/', async (req, res) => {
    try {
        const veiculos = await Veiculo.find();
        res.send(veiculos);
    } catch (error) {
        res.status(500).send(error);
    }
});

// UPDATE - Atualiza um veículo por placa
router.put('/:placa', async (req, res) => {
    try {
        const veiculo = await Veiculo.findOneAndUpdate({ placa: req.params.placa }, req.body, { new: true });
        if (!veiculo) {
            return res.status(404).send({ message: 'Veículo não encontrado' });
        }
        res.send(veiculo);
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE - Remove um veículo por placa
router.delete('/:placa', async (req, res) => {
    try {
        const veiculo = await Veiculo.findOneAndDelete({ placa: req.params.placa });
        if (!veiculo) {
            return res.status(404).send({ message: 'Veículo não encontrado' });
        }
        res.send({ message: 'Veículo excluído com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
