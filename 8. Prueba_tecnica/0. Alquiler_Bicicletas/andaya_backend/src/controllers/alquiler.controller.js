const alquilerModel = require('../models/alquiler.model')
const bicicletaModel = require('../models/bicicleta.model')
const estacionModel = require('../models/estacion.model')

exports.register_alquiler = async(req,res) => {
    try {
        const {usuario, bicicleta, estacionSalida } = req.body

        const existsAlquiler = await alquilerModel.findOne({usuario, activo: true})
        if(existsAlquiler) return res.status(400).json({error: 'Este usuario ya tiene un alquiler activo '})

        const bicicletaDisponible = await bicicletaModel.findById(bicicleta)
        if(!bicicletaDisponible) return res.status(400).json({error: 'El ID que pusiste no pertenece a ninguna bicicleta'})

        if(bicicletaDisponible.estado !== "Disponible") return res.status(400).json({error: 'La bicicleta no se encuentra disponible'})

        await bicicletaModel.findByIdAndUpdate(bicicleta, {estado: "Ocupada"})
        
        const newAlquiler = await alquilerModel.create({usuario, bicicleta, estacionSalida, fechaInicio: Date.now(), fechaFin: undefined, activo: true})

        const alquilerConDatos = await alquilerModel.findById(newAlquiler._id)
            .populate('bicicleta', 'serial estado')
            .populate('estacionSalida', 'name ubicacion');

        res.status(201).json({
            msg: 'Alquiler registrado correctamente.',
            alquiler: alquilerConDatos
        });

    } catch (error) {
        console.error('Error en register_alquiler:', error)
        res.status(500).json({error:'Error al registrar alquiler'})
    }
}

exports.finalizar_alquiler = async (req, res) => {
    try {
        const { usuario } = req.body;

        // Busca el alquiler activo del usuario
        const alquilerActivo = await alquilerModel.findOne({ usuario, activo: true });

        if (!alquilerActivo) {
            return res.status(404).json({ error: 'No hay ningún alquiler activo para este usuario.' });
        }

        // Finaliza el alquiler
        alquilerActivo.activo = false;
        alquilerActivo.fechaFin = Date.now();
        await alquilerActivo.save();

        await bicicletaModel.findByIdAndUpdate(alquilerActivo.bicicleta, {estado: "Disponible"})

        const alquilerFinalizado = await alquilerModel.findById(alquilerActivo._id)
            .populate('bicicleta', 'serial')
            .populate('estacionSalida', 'name');

        res.status(200).json({ msg: 'Alquiler finalizado correctamente.', alquiler: alquilerFinalizado });

    } catch (error) {
        console.error('Error en finalizar el alquiler:', error)
        res.status(500).json({ error: 'Error al finalizar el alquiler.', detalle: error.mensage})
        
    }
};
