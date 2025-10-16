const { PostImage } = require('../../db/models/index')

const getPostImage = async (req,res)=> {
    try { 
        const postImage = await PostImage.findByPk(req.params.id)
        res.status(200).json(postImage)
    } catch(e) {
        console.error(e);
        res.status(500).json( {message: "Error al obtener la imagen"})
    }
}

const getPostImageByIdPost = async (req, res) => {
    try { 
        const postImage = await PostImage.findAll({
            where: { postId: req.params.postId }
        });
        res.status(200).json(postImage);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Error al obtener las imágenes de este post" });
    }
};


const deletePostImage = async (req,res)=> {
    try{
        const postImage = await PostImage.findByPk(req.params.id);
        await postImage.destroy();
        res.status(204).json({ mensaje: 'Imagen del post eliminado' });
    }
    catch(e){
        console.error(e);
        res.status(500).json( {message: "Error al eliminar la imagen del post"})
    }

}
const createPostImage = async (req,res)=> {
    try{
        const { imageUrl, postId } = req.body;
        const postImage = PostImage.create({
            imageUrl, postId
        })
        res.status(201).json({ mensaje: "Imagen del post creado"})
    }
    catch(e) {
        console.error(e);
        res.status(500).json( {message: "Error al crear la imagen"})
    }
}
const updatePostImage = async (req,res)=> {
    try {
        const postImage = await PostImage.findByPk(req.params.id);
        postImage.imageUrl = req.body.imageUrl;
        await postImage.save();
        res.status(204).json({ mensaje: 'Usuario modificado' });
  } catch (e) {
        console.error(e);
        res.status(500).json( {message: "Error al modificar la imagen"})
  }
}


module.exports = {
    getPostImage,
    getPostImageByIdPost,
    deletePostImage,
    createPostImage,
    updatePostImage,
}