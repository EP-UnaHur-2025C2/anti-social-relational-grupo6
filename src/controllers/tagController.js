const {Tag} = require ('../../db/models/index')

const getAllTags = async (req, res) => {
    try{
        const tags = await Tag.findAll()
        res.status(200).json(tags)
    }
    catch(e){
        console.error(e)
        res.status(500).json({message: "Error al obtener los tags"})
    }
}

const getTagByName = async (req, res) => {
    try{
        const tag= await Tag.findAll({where: {name : req.params.name}});
        res.status(200).json(tag)
    }
    catch(e){
        console.error(e)
        res.status(500).json({ message:"Error al obtener el tag"})
    }
}


const createTag = async (req, res) => {
    try{
        const {name}= req.body
        const tag= await Tag.create({name})
        res.status(204).json({ message:"Tag creado exitosamente"})
    }
    catch(e){
        console.error(e)
        res.status(500).json({ message: "error al crear tag"})
    }
}


const deleteTag = async (req, res) => {
    try{
        const tag= Tag.findByPk(req.params.id)
        await tag.destroy()
        res.json({ message: 'Usuario eliminado' });
    }
    catch(e){
        console.error(e)
        res.status(500).json({ error: error.message });
    }
}




module.exports= {
    getAllTags,
    getTagByName,
    createTag,
    deleteTag,
}