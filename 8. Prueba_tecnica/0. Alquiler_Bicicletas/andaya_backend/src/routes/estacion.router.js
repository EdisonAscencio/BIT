const express = require('express')
const router = express.Router()
const Ubicacion = require('../controllers/estacion.controller')

router.post('/estaciones', Ubicacion.create_Estacion)
router.get('/estaciones', Ubicacion.get_Estaciones)
router.get('/estaciones/:id', Ubicacion.get_Estaciones_ID)

module.exports = router