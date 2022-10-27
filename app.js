const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Abrir o mongo.exe
mongoose.connect('mongodb://127.0.0.1:27017/');

mongoose.connection.on('connected', function() {
    console.log('Connected to Database');
});

mongoose.connection.on('error', function(err) {
    console.log('Database Error: ' + err);
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

// Configuração da View Engine
app.set("view engine", 'ejs');

// Define uso dos arquivos da pasta public
app.use(express.static(__dirname + '/public'));

// Error connect
app.use(function(err, req, res, next) {
    console.log(err);

    res.status(422).send({ error: err.message });
})

app.get('/', function(req, res) {
    res.send("Rota não encontrada!");
});

const routes = require('./routes/api');
app.use('/api', routes);

let port = 8080;

app.listen(port, () => {
    console.log("Servidor executando na porta: " + port);
})