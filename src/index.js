const express = require('express');             //web module
const dotenv = require("dotenv");               //for work with .env
const mongoose = require('mongoose');           //write objects for MongoDB as you would in JavaScript
const bodyParser = require("body-parser");      //body-parser
const routes = require('./routes');             //archieve i created for store routes

const app = express();

app.use(express.json());
app.use(routes);

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB CONNECTED!!"))
.catch(err => console.log(`Error ocurred: ${err}`)); // função que pega e printa o erro

app.listen(process.env.PORT);




//TESTANDO ADICAO DE COLETA
var createAndPush = function(done) {
    var Condominio = require("./models/condominio").Condominio
    var atol = new Condominio({
        nome: "Atol das Rocas",
        fone: "44441111",
        endereco: "rua 526",
        apartamentos: {total: 20, contratados: 10, naoContratados: 10} 
    });
    /*atol.save(function(err, data) {
        if (err) return console.error(err);
        done(null, data);
    });  */
    console.log("logo após criação:\n"+atol)
    atol.addColeta({
        metal: 23.2,
        papel: 2.2,
        plastico: 15.5,
        vidro: 20.2
    }, 
    function(err, data) {
        if(err) return console.error(err)
        done(err, data);
    });
}

createAndPush(function(err, data) {console.log("\nApós adição da primeira coleta:\n"+data)})
