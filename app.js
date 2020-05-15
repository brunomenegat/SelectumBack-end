const express = require("express");
const bodyParser = require("body-parser"); //Facilita a transmissão do back e front
const app = express(); //criando app
const mongoose = require("mongoose"); // conexão banco de dados
const clientRouter = require("./routes/clientcontroller");

//Conectar com database
mongoose
  .connect(
    //"mongodb+srv://bno:bnobno@cluster0-vmlmz.mongodb.net/test?retryWrites=true&w=majority",
    "mongodb://localhost:27017",
    { useNewUrlParser: true }
  ) //criadnoconexão e define mongoclient
  .then(() => console.log("DB conectado!!"))
  .catch(err => console.log(`Algum erro ocorreu: ${err}`)); // Função que pega os erro.
    
