const mongoose = require('mongoose')

const estacionShema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    ubicacion: {type: String, enum: ['Usaquen', 'Chapinero', 'Santa Fe', 'La Candelaria', 'Calle 100', 'Tunjuelito', 'Bosa', 'Kennedy', 'Soacha', 'Modelia' ], required: true},
    capacidad: {type: Number, required: true},
    bicicletasDisponibles: {type: [mongoose.Schema.Types.ObjectId]},
})

module.exports = mongoose.model('Estacion', estacionShema)