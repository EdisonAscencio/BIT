const express = require('express')
const router = express.Router()
const Bicicleta = require('../controllers/bicicleta.controller')

router.post('/bicicletas', Bicicleta.create_Bicicleta)
router.get('/bicicletas/disponible', Bicicleta.get_Bicicleta_Estado_Disponible)
router.get('/bicicletas/ocupada', Bicicleta.get_Bicicleta_Estado_Ocupada)
router.get('/bicicletas/mantenimiento', Bicicleta.get_Bicicleta_Estado_Mantenimiento)

module.exports = router