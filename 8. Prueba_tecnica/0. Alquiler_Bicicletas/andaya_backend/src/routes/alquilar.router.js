const express = require('express')
const router = express.Router()
const Alquiler = require('../controllers/alquiler.controller')

router.post('/alquilar', Alquiler.register_alquiler)
router.post('/devolver', Alquiler.finalizar_alquiler)

module.exports = router