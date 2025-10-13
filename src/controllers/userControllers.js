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

const createUser = async (req, res) => {
    try {
        const nickName = req.body.nickName
        const user = await Users.create({
            nickName
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ messaje: error})
    }
}
module.exports = {
    getUsers,
    createUser,
    /*crearSerie,
    actualizarSerie,
    eliminarSerie*/
}