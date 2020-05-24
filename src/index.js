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
