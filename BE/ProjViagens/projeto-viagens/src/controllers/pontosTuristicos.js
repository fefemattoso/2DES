const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// criar um novo ponto turístico
const criarPontoTuristico = async (nome, endereco, telefone, valor, destinoId) => {
  try {
    const novoPontoTuristico = await prisma.pontoTuristico.create({
      data: {
        nome,
        endereco,
        telefone,
        valor,
        destinoId,
      },
    });
    return novoPontoTuristico;
  } catch (error) {
    throw new Error('Erro ao criar ponto turístico');
  }
};

// buscar todos os pontos turísticos
const buscarPontosTuristicos = async () => {
  try {
    const pontosTuristicos = await prisma.pontoTuristico.findMany();
    return pontosTuristicos;
  } catch (error) {
    throw new Error('Erro ao buscar pontos turísticos');
  }
};

module.exports = {
  criarPontoTuristico,
  buscarPontosTuristicos,
};
