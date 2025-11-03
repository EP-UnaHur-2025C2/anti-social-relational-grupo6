const express = require('express')
const db = require('../db/models')
const user = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes');
const postImageRoutes= require('./routes/postImageRoutes');
const tagRoutes = require('./routes/tagRoutes');
const followerRoutes = require('./routes/followersRoutes');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:5173' 
};
app.use(cors(corsOptions));

app.use(express.json())

app.use('/users', user)
app.use('/posts', postRoutes)
app.use('/tag', tagRoutes)
app.use ('/postImage', postImageRoutes )
app.use ('/followers', followerRoutes )


app.listen(PORT, async () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
    try {
        await db.sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
})