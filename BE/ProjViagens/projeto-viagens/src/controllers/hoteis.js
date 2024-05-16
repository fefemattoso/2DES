const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// criar um novo hotel
const criarHotel = async (nome, valor, avaliacao, email, site, destinoId) => {
  try {
    const novoHotel = await prisma.hotel.create({
      data: {
        nome,
        valor,
        avaliacao,
        email,
        site,
        destinoId,
      },
    });
    return novoHotel;
  } catch (error) {
    throw new Error('Erro ao criar hotel');
  }
};

// buscar todos os hotéis
const buscarHoteis = async () => {
  try {
    const hoteis = await prisma.hotel.findMany();
    return hoteis;
  } catch (error) {
    throw new Error('Erro ao buscar hotéis');
  }
};

module.exports = {
  criarHotel,
  buscarHoteis,
};
