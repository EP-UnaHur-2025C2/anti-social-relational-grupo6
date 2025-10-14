const {Tag, Post_Images,Users, Post } = require('../../db/models/index')


const createPost = async (req, res) => {
    try {
        const { nickName, description, imageUrls, tags } = req.body;
        const tagsCreados = [];

        const user = await Users.findOne({ where: { nickName } });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' }); //Esto debe estar en middleware
        }

        const post = await Post.create({
            nickName: user.nickName ,
            description,
            publishedAt: new Date()
        });

        if (imageUrls && imageUrls.length > 0) { //middelware
            const images = imageUrls.map(url => ({
                postId: post.id,
                imageUrl: url
            }));
            await Post_Images.bulkCreate(images);
        }
        if (tags && tags.length > 0) { //midelware
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

module.exports = {
    createPost
}