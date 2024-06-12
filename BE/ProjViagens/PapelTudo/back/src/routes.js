//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const DestinoTuristico = require("./controllers/destinoTuristico.js");

//Rota de teste
const teste = (req, res) => {
    res.json("API da Agência de Viagens respondendo!");
}

//Rotas de Saída - Destinos Turísticos
router.get("/", teste);
router.post("/destino", DestinoTuristico.create);
router.get("/destino", DestinoTuristico.read);
router.put("/destino/:id", DestinoTuristico.update);
router.delete("/destino/:id", DestinoTuristico.del);

module.exports = router;
