const express = require("express");

const teste = (req, res)=>{
  let nome = req.query.nome
  res.send("Back-end respondendo" + nome);
}

const app = express()

app.get("/",teste);

app.listen(3000, ()=>{
    console.log("Back-end respondendo na porta 3000");
});