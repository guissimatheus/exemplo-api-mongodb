const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

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
    },
    geometry: GeoSchema
});

const PI = mongoose.model('PessoaInteresse', PISchema);
module.exports = PI;