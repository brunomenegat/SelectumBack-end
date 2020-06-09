var express = require("express");             //web module
var dotenv = require("dotenv");               //for work with .env
var mongoose = require('mongoose');           //write objects for MongoDB as you would in JavaScript
var bodyParser = require("body-parser");      //body parsing middleware
var routes = require('./routes');             //archieve i created for store routes

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes);

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB CONNECTED!! \n"))
.catch(err => console.log(`Error ocurred: ${err}`));

app.listen(process.env.PORT);

