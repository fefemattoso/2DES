const express = require('express');
const router = express.Router();
const Funcionario = require('../connection/mysql');

// CREATE - Cria um novo funcionário
router.post('/', async (req, res) => {
    try {
        const funcionario = new Funcionario(req.body);
        await funcionario.save();
        res.status(201).send(funcionario);
    } catch (error) {
        res.status(400).send(error);
    }
});

// READ - Lista todos os funcionários
router.get('/', async (req, res) => {
    try {
        const funcionarios = await Funcionario.find();
        res.send(funcionarios);
    } catch (error) {
        res.status(500).send(error);
    }
});

// UPDATE - Atualiza um funcionário por ID
router.put('/:id', async (req, res) => {
    try {
        const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!funcionario) {
            return res.status(404).send({ message: 'Funcionário não encontrado' });
        }
        res.send(funcionario);
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE - Remove um funcionário por ID
router.delete('/:id', async (req, res) => {
    try {
        const funcionario = await Funcionario.findByIdAndDelete(req.params.id);
        if (!funcionario) {
            return res.status(404).send({ message: 'Funcionário não encontrado' });
        }
        res.send({ message: 'Funcionário excluído com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
