//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const Item = require("../controllers/item.js");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API Borracharia respondendo!");
}

//Rotas de Saída - Clientes
router.get("/", teste);
router.post("/item", Item.create);
router.get("/item", Item.read);
router.put("/item/:id", Item.update);
router.delete("/item/:id", Item.del);

module.exports = router;