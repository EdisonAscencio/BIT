const estacionModel = require('../models/estacion.model')

exports.create_Estacion = async(req,res) => {
    try {
        const{name, ubicacion, capacidad, bicicletasDisponibles } = req.body
        const existsName = await estacionModel.findOne({name})
        if(existsName) return res.status(400).json({error: 'Esta zona ya se encuentra registrada'})
        
        const new_Estacion = await estacionModel.create({name, ubicacion, capacidad, bicicletasDisponibles})

        res.status(201).json({ msg: 'Estación creada correctamente', estacion: new_Estacion });

    } catch (error) {
        res.status(500).json({error:'Error al registrar esta zona'})
    }
}

exports.get_Estaciones = async(req,res) => {
    try {
        const data = await estacionModel.find({}, 'name')
        res.json(data)
    } catch (error) {
        res.status(500).json({error:'Error al obtener las zonas disponibles'})
    }
}

exports.get_Estaciones_ID = async(req,res) => {
    try {
        const estacionId = req.params.id
        const data = await estacionModel.findById(estacionId)
        if(!data){
            return res.json({msg: 'No se encuentra ninguna estacion registrada con ese id '})
        }
        res.json(data)
    } catch (error) {
        res.status(500).json({error:'Error al obtener la zona por id'})
    }
}