const express = require('express')
const db = require('../db/models')
const router = require('./routes/userRoutes')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use('/usuarios', router)


app.listen(PORT, async () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
    await db.sequelize.sync({force:true})
})