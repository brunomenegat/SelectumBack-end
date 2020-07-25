const express = require("express");             //web module
const dotenv = require("dotenv");               //for work with .env
const mongoose = require("mongoose");           //write objects for MongoDB as you would in JS (ODM)
const bodyParser = require("body-parser");      //body parsing middleware
const routes = require('./api/routes');         //archieve i created for store routes

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//usar middlewares
app.use(routes)
//usar tratamento de erro

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB CONNECTED!! \n"))
.catch(err => console.log(`Error ocurred: ${err}`));

app.listen(process.env.PORT);

