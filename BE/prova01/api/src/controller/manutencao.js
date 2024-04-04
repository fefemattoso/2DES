const Manutencao = require('../connection/mysql');

// CREATE - Cria uma nova manutenção
exports.create = async (req, res) => {
    try {
        const manutencao = new Manutencao(req.body);
        await manutencao.save();
        res.status(201).send(manutencao);
    } catch (error) {
        res.status(400).send(error);
    }
};

// READ - Lista todas as manutenções
exports.list = async (req, res) => {
    try {
        const manutencoes = await Manutencao.find();
        res.send(manutencoes);
    } catch (error) {
        res.status(500).send(error);
    }
};

// UPDATE - Atualiza uma manutenção por ID
exports.update = async (req, res) => {
    try {
        const manutencao = await Manutencao.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!manutencao) {
            return res.status(404).send({ message: 'Manutenção não encontrada' });
        }
        res.send(manutencao);
    } catch (error) {
        res.status(400).send(error);
    }
};

// DELETE - Remove uma manutenção por ID
exports.delete = async (req, res) => {
    try {
        const manutencao = await Manutencao.findByIdAndDelete(req.params.id);
        if (!manutencao) {
            return res.status(404).send({ message: 'Manutenção não encontrada' });
        }
        res.send({ message: 'Manutenção excluída com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
};
