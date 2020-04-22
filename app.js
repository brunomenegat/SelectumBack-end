const express = require("express");
const bodyParser = require("body-parser"); //Facilita a transmissão do back e front
const app = express(); //criando app
const mongoose = require("mongoose"); // conexão banco de dados
const clientRouter = require("./routes/clientcontroller");
//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://bno:bnobno@cluster0-vmlmz.mongodb.net/test?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true });

//Conectar com database
mongoose
  .connect(
    "mongodb+srv://bno:bnobno@cluster0-vmlmz.mongodb.net/test?retryWrites=true&w=majority",
    
    //"mongodb://localhost:27017",
    { useNewUrlParser: true }
  ) //criadnoconexão e define mongoclient
  .then(() => console.log("DB conectado!!"))
  .catch(err => console.log(`Algum erro ocorreu: ${err}`)); // Função que pega os erro.


//client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
 // client.close();
//});



//controle fluxo de dados
//app.use(express.json());
app.use(bodyParser.json()); //utilizar json - entenda requisicao
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
require("./routes/authcontroller")(app);  // @@Auth - Autenticação

app.post("/client", clientRouter);  // @@Client - 
app.use("", express.static("front"));  // @@HomePage - Páginas
app.listen(5000, () => console.log("Server started."));  // Ligar o servidor na porta especificada
