const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conectado exitosamente a MongoDB'))
.catch(err => console.error('Error al conectarse a MongoDB', err))

app.use('/api', require('./routes/bicicleta.router'))
app.use('/api', require('./routes/estacion.router'))
app.use('/api', require('./routes/alquilar.router'))

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})