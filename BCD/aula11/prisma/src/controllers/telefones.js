const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const { clienteId } = req.params;
        const data = req.body;

        const telefone = await prisma.telefones.create({
            data: {
                ...data,
                cliente: { connect: { id: parseInt(clienteId) } }
            }
        });

        res.status(201).json(telefone);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar telefone' });
    }
}

const read = async (req, res) => {
    try {
        const telefones = await prisma.telefones.findMany();

        res.status(200).json(telefones);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar telefones' });
    }
}

const del = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.telefones.delete({
            where: { id: parseInt(id) }
        });

        res.status(200).json({ message: 'Telefone excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir telefone' });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updatedTelefone = await prisma.telefones.update({
            where: { id: parseInt(id) },
            data
        });

        res.status(200).json(updatedTelefone);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar telefone' });
    }
}

module.exports = {
    create,
    read,
    del,
    update
}
