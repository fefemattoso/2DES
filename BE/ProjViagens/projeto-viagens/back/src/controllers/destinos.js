const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// criar um novo destino
const criarDestino = async (nome, valor, data) => {
  try {
    const novoDestino = await prisma.destino.create({
      data: {
        nome,
        valor,
        data,
      },
    });
    return novoDestino;
  } catch (error) {
    throw new Error('Erro ao criar destino');
  }
};

// buscar todos os destinos
const buscarDestinos = async () => {
  try {
    const destinos = await prisma.destino.findMany();
    return destinos;
  } catch (error) {
    throw new Error('Erro ao buscar destinos');
  }
};

module.exports = {
  criarDestino,
  buscarDestinos,
};
