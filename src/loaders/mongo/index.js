const mongoose = require("mongoose"); //write objects for MongoDB as you would in JS (ODM)
const dotenv = require("dotenv");     //para trabalhar com variaveis de ambiente

dotenv.config({ path: '../../src/config/.env' });

mongoConnection = async () => {
    return await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('DB Connected! PORT: 27017'))
    .catch(err => {console.log(`Erro ao tentar conectar com o servidor de BD: ${err}`)})
}

module.exports = mongoConnection;
