const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PISchema = new Schema({
    name: {
        type: String,
        required: [true, '*Campo obrigatório']
    },
    details: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    }
});

const PI = mongoose.model('PessoaInteresse', PISchema);
module.exports = PI;