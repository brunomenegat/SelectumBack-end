const express = require("express");             //web module
const dotenv = require("dotenv");               //for work with .env
const bodyParser = require("body-parser");      //body parsing middleware
const routes = require('./api/routes');         //archieve i created for store routes
const mongoConnection = require("./loaders/mongo")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//usar middlewares
app.use(routes)
app.use((err, req, res, next) => {
    res.status(err.status)
    res.json(err)
    res.end;
    // console.error('\nESTAMOS AQUI NO SERVER\n\n', err)
})

dotenv.config({ path: './src/config/.env' })

mongoConnection()

app.listen(process.env.PORT)
console.log('listenning on port: ',process.env.PORT,"\n")