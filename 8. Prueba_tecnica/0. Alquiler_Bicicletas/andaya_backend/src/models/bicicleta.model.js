const mongoose = require('mongoose')

const bicicletaShema = new mongoose.Schema({
    serial: {type: Number, required: true},
    estado: {type: String, enum: ['Disponible', 'Ocupada', 'Mantenimiento'], default: 'Disponible', required: true}
})

module.exports = mongoose.model('Bicicleta', bicicletaShema)