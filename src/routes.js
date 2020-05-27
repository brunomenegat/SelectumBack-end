var express = require('express');
var routes = express.Router();

routes.post("/create-comerce", function(req, res) {
    var Comercio = require("./models/comercio").Comercio
    
    Comercio.create(req.body, function(err, data) {
        if (err) return console.error(err);
        console.log("Comercio criado e salvo!!!")
        res.json(data)
    })
});

module.exports = routes;
