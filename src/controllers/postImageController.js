const { PostImage } = require('../../db/models/index')

const getPostImage = async (req,res)=> {
    try { 
        const postImage = await PostImage.findAll(
            { where: { postId: req.params.postId }})
        res.status(200).json(postImage)
    } catch(e) {
        console.error(e);
        res.status(500).json( {message: "Error al obtener las imagenes de este post"})
    }
}
const deletePostImage = async (req,res)=> {

}
const createPostImage = async (req,res)=> {
    try{
        const imageUrl = req.params.imageUrl
        const postId= req.params.postId
        const postImage = PostImage.create({
            imageUrl, postId
        })
        res.status(201).json({ mensaje: "Imagen del post creado"})
    }
    catch(e) {}
}
const updatePostImage = async (req,res)=> {}
