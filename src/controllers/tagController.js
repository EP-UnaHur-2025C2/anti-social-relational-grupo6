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
        const tagName = req.params.name;
        const tag = await Tag.findOne({ where: { name: tagName } });

        if (!tag) {
            return res.status(404).json({ message: "Tag no encontrado" });
        }
    }
    catch(e){
        console.error(e)
        res.status(500).json({ message:"Error al obtener el tag"})
    }
}


const createTag = async (req, res) => {
    try{
        const { name } = req.body;
        const existingTag = await Tag.findOne({ where: { name } });
        if (existingTag) {
            return res.status(409).json({ message: "El tag ya existe." }); 
        }

        const tag = await Tag.create({ name });
        res.status(201).json(tag);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Error al crear tag" });
    }
}


const deleteTag = async (req, res) => {
    try{
        const tag = await Tag.findByPk(req.params.id);
        if (!tag) { 
            return res.status(404).json({ message: 'Tag no encontrado' });
        }
        await tag.destroy();
        res.json({ message: 'Tag eliminado' });
    }
    catch(error){ 
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}



module.exports= {
    getAllTags,
    getTagByName,
    createTag,
    deleteTag,
}