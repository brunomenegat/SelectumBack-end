const express = require("express");


const app = express();


app.get('/users', (request, response) => {
 
  return Response.json({
    TipoCliente: 'Comercio',
    Cliente: 'Ryori'

  });
});

app.listen(3333);