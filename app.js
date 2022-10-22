const express = require("express");

const app = express();

app.get('/', function(req, res) {
    res.send("Rota não encontrada!");
});

const routes = require('./routes/api');
app.use('/api', routes);

let port = 8080;

app.listen(port, () => {
    console.log("Servidor executando na porta: " + port);
})