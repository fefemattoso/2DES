const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body
    console.log(data)
    const cliente = await prisma.clientes.create({
        data 
    });

    res.status(201).json(cliente).end();
}

const read = async (req, res) => {

    const cliente = await prisma.clientes.findMany();

    res.status(201).json(cliente).end();
}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await prisma.clientes.findUnique({
            where: { id: parseInt(id) }
        });

        if (!cliente) {
            res.status(404).json({ error: 'Cliente não encontrado' });
        } else {
            res.status(200).json(cliente);
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cliente' });
    }
}

const del = async(req, res) =>{
    const cliente =  await prisma.clientes.delete({
        where:{
            id: Number(req.params.id)
        }
    });

    res.status(200).json(cliente).end();
}

const update =  async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    const cliente = await prisma.clientes.update({
        where:{
            id
        },
        data
    });

    res.status(200).json(cliente).end();
}

module.exports = {
    create,
    read,
    del,
    update,
    getById
}