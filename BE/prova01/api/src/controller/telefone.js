const express = require('express');
const router = express.Router();
const Telefone = require('../connection/mysql');

// CREATE - Cria um novo telefone para um funcionário
router.post('/', async (req, res) => {
    try {
        const telefone = new Telefone(req.body);
        await telefone.save();
        res.status(201).send(telefone);
    } catch (error) {
        res.status(400).send(error);
    }
});

// READ - Lista todos os telefones
router.get('/', async (req, res) => {
    try {
        const telefones = await Telefone.find();
        res.send(telefones);
    } catch (error) {
        res.status(500).send(error);
    }
});

// UPDATE - Atualiza um telefone por ID
router.put('/:id', async (req, res) => {
    try {
        const telefone = await Telefone.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!telefone) {
            return res.status(404).send({ message: 'Telefone não encontrado' });
        }
        res.send(telefone);
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE - Remove um telefone por ID
router.delete('/:id', async (req, res) => {
    try {
        const telefone = await Telefone.findByIdAndDelete(req.params.id);
        if (!telefone) {
            return res.status(404).send({ message: 'Telefone não encontrado' });
        }
        res.send({ message: 'Telefone excluído com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
