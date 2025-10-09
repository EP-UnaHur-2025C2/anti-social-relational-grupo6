const { Users } = require('../../db/models/index')

const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll()
        res.status(200).json(users)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error al obtener los usuarios"})
    }
}



module.exports = {
    getUsers,
    /*obtenerSerie,
    crearSerie,
    actualizarSerie,
    eliminarSerie*/
}