const express = require('express');
const routes = express.Router();

const Veiculo = require('./controllers/veiculo');

routes.get('/', (req, res) => {
    res.json("API Manutenções 1.0");
});
// Rotas para Funcionários
routes.post('/funcionarios', funcionario.create);
routes.get('/funcionarios', funcionario.list);
routes.put('/funcionarios/:id', funcionario.update);
routes.delete('/funcionarios/:id', funcionario.delete);

// Rotas para Telefones
routes.post('/telefones', telefone.create);
routes.get('/telefones', telefone.list);
routes.put('/telefones/:id', telefone.update);
routes.delete('/telefones/:id', telefone.delete);

// Rotas para Veículos
routes.post('/veiculos', veiculo.create);
routes.get('/veiculos', veiculo.list);
routes.put('/veiculos/:placa', veiculo.update);
routes.delete('/veiculos/:placa', veiculo.delete);

// Rotas para Manutenções
routes.post('/manutencoes', manutencao.create);
routes.get('/manutencoes', manutencao.list);
routes.put('/manutencoes/:id', manutencao.update);
routes.delete('/manutencoes/:id', manutencao.delete);

module.exports = routes;
