const { Users } = require('../../db/models/index')

const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll()
        res.status(200).json(users)
        
    } catch (e) {
        console.error(e);
        res.status(500).json( {message: "Error al obtener los usuarios"})
    }
}

const getUserById = async (req, res) => {
    try{
        const user = await Users.findByPk(req.params.nickName);
        res.status(200).json(user)
    } catch(e) {
        console.error(e);
        res.status(500).json({message: "Error al obtener el usuario"})
    }
    }



const createUser = async (req, res) => {
    try {
        const { nickName } = req.body;

        const existingUser = await Users.findByPk(nickName);
        if (existingUser) {
            return res.status(409).json({ message: "El nickName ya está en uso." }); 
        }

        const user = await Users.create({
            nickName
        })
        res.status(201).json({ message: "Usuario creado"})
    } catch (error) {
        console.error(e)
        res.status(500).json({ message: "error al crear usuario"})
    }
}

const deleteUser =  async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.nickName);
        if (!user) { 
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await user.destroy();
        res.json({ message: 'Usuario eliminado' });
    } catch (error) { 
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.nickName);
        if (!user) { 
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        user.nickName = req.body.nickName;
        await user.save();
        res.status(200).json({ message: 'Usuario modificado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = {
    getUsers,
    createUser,
    deleteUser, 
    getUserById,
    updateUser,
    
}