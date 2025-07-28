const bicicletaModel = require('../models/bicicleta.model')

exports.create_Bicicleta = async(req,res) => {
    try {
        const{serial, estado} = req.body
        const existsBicicleta = await bicicletaModel.findOne({serial})
        if(existsBicicleta) return res.status(400).json({error: 'La bicicleta ya se encuentra registrada'})
        
        const new_Bicicleta = await bicicletaModel.create({serial, estado})

        res.status(201).json({ msg: 'La bicicleta se creo correctamente', estacion: new_Bicicleta });
    } catch (error) {
        res.status(500).json({error:'Error al registrar la bicicleta, verifique el estado'})
    }
}

exports.get_Bicicleta_Estado_Disponible = async(req,res) => {
    try {
        const data = await bicicletaModel.find({estado: "Disponible"})
        
        if(data.length === 0){
            return res.json({msg: 'No se encontro ninguna bicicleta disponible'})
        }
        res.json(data)
    } catch (error) {
        res.status(500).json({error:'Error al obtener las bicicletas por el estado'})
    }
}

exports.get_Bicicleta_Estado_Ocupada = async(req,res) => {
    try {
        const data = await bicicletaModel.find({estado: "Ocupada"})
        
        if(data.length === 0){
            return res.json({msg: 'No se encontro ninguna bicicleta ocupada'})
        }
        res.json(data)
    } catch (error) {
        res.status(500).json({error:'Error al obtener las bicicletas por el estado'})
    }
}

exports.get_Bicicleta_Estado_Mantenimiento = async(req,res) => {
    try {
        const data = await bicicletaModel.find({estado: "Mantenimiento"})
        
        if(data.length === 0){
            return res.json({msg: 'No se encontro ninguna bicicleta en mantenimiento'})
        }
        res.json(data)
    } catch (error) {
        res.status(500).json({error:'Error al obtener las bicicletas por el estado'})
    }
}