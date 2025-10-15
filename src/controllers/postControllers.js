const {Tag,Comment, PostImage,Users, Post } = require('../../db/models/index')


const createPost = async (req, res) => {
    try {
        const { nickName, description, imageUrls, tags } = req.body;
        const tagsCreados = [];
        const user = await Users.findOne({ where: { nickName } });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const post = await Post.create({
            userId: user.id,
            description,
            publishedAt: new Date()
        });

        if (imageUrls && imageUrls.length > 0) {
            const images = imageUrls.map(url => ({
                postId: post.id,
                imageUrl: url
            }));
            await PostImage.bulkCreate(images);
        }
        if (tags && tags.length > 0) {
            for (const tagName of tags) {
                const resultado = await Tag.findOrCreate({
                    where: {name: tagName}
                });
                tagsCreados.push( resultado[0]);
            }
            await post.setTags(tagsCreados)

        }

        res.status(201).json(post);

    } catch (error) {
        console.error('Error al crear post:', error);
        res.status(500).json({ error: 'Error al crear el post' });
    }
};

const addComment = async (req, res) => {
    try {
        const { body,userId} = req.body;
        const postId = req.params.postId;
        const post = await Post.findByPk(postId,{
            include: [
                { model: Comment, as: 'comments' }
        ]});
        if (!post) {
            return res.status(404).json({ error: 'Post no encontrado' });
        }
        const comment = await Comment.create({
            body,
            postId,
            userId
        })
        res.status(201).json(comment);

    }catch (error) {
        console.error('Error al crear el comment:', error);
        res.status(500).json({ error: 'Error al crear el comment' });

    }
}
module.exports = {
    createPost,
    addComment
}