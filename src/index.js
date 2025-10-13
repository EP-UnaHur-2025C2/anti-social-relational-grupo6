const express = require('express')
const db = require('../db/models')
const router = require('./routes/userRoutes')
<<<<<<< HEAD
=======
const postRoutes = require('./routes/postRoutes');

>>>>>>> ifranhugo
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

<<<<<<< HEAD
app.use('/usuarios', router)
=======
app.use('/users', router)
app.use('/posts', postRoutes)
>>>>>>> ifranhugo


app.listen(PORT, async () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
<<<<<<< HEAD
    await db.sequelize.sync({force:true})
=======
    try {
        await db.sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
>>>>>>> ifranhugo
})