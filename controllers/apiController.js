exports.test = function (req, res) {
    res.send("Hello World! Teste ao Controller...");
}

// Listar os detalhes do BD
exports.details = function (req, res) {
    res.send({type: 'GET'});
}

// Adicionar no BD
exports.add = function (req, res) {
    res.send({type: 'POST'});
}

// Alterar no BD
exports.update = function (req, res) {
    res.send({type: 'PUT'});
}

// Deletar no BD
exports.delete = function (req, res) {
    res.send({type: 'DELETE'});
}