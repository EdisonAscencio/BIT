const mongoose = require('mongoose')

const AlquierShema = new mongoose.Schema({
    usuario: {type: String, required: true},
    bicicleta: {type: mongoose.Schema.Types.ObjectId, ref: 'Bicicleta', required: true},
    estacionSalida: { type: mongoose.Schema.Types.ObjectId, ref: 'Estacion', required: true},
    fechaInicio: {type: Date},
    fechaFin: {type: Date},
    activo: {type: Boolean, default: false}
})

module.exports = mongoose.model('Alquiler', AlquierShema)