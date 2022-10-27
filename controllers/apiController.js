const PI = require('../models/PImodel');

// Listar os detalhes do BD
exports.details = function (req, res) {
    PI.find({}).then(function(pi) {
        res.send(pi);
    });
}

// Cria registro no banco
exports.create = function(req, res, next) {
    console.log("POST request:", req.body);
    let name = req.body.name;
    let dt = req.body.details;
    let lat = req.body.lat;
    let lng = req.body.lng;

    let data = {
        name: name,
        details: dt,
        status: true,
        geometry: {
            "type": "point",
            "coordinates": [lat, lng]
        }
    }

    PI.create(data)
        .then(function(pi) {
            res.send("Documento criado com sucesso!");
            console.log("Documento criado com sucesso!");
            console.log(pi);
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

exports.test = function (req, res) {
    // res.send("Hello World! Teste ao Controller...");
    res.render('createPI');
}