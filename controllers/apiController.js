exports.test = function (req, res) {
    res.send("Hello World! Teste ao Controller...");
}

// Listar os detalhes do BD
exports.details = function (req, res) {
    res.send({type: 'GET'});
}

const PI = require('../models/PImodel');

// Cria registro no banco
exports.create = function(req, res, next) {
    console.log("POST request:", req.body);
    PI.create(req.body)
        .then(function(pi) {
            res.send(pi);
        })
        .catch(next);
}

// Deleta registro no banco
exports.delete = function(req, res, next) {
    // Pesquisar diferença entre Remove e Delete
    console.log("DELETE request - ID:", req.params.id);
    PI.findByIdAndRemove({ _id: req.params.id })
        .then(function(pi) {
            res.send(pi);
        })
        .catch(next);
}

// Atualiza registro no banco
exports.update = function(req, res, next) {
    console.log("UPDATE request:", req.body);
    PI.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(function() {
            // Ver findById
            PI.findOne({ _id: req.params.id })
                .then(function(pi) {
                    res.send(pi);
                });
        })
        .catch(next);
}