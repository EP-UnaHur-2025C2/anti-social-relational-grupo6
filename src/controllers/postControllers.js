const {Tag,Comment, PostImage,Users, Post } = require('../../db/models/index')
const { Op } = require('sequelize');

const createPost = async (req, res) => {
    try {
        const { nickName, description, imageUrls, tags } = req.body;
        const tagsCreados = [];
        const user = await Users.findOne({ where: { nickName } });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' }); 
        }

        const post = await Post.create({
            nickName: user.nickName ,
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
        const { body, nickName } = req.body;
        const postId = req.params.postId;
        const post = await Post.findByPk(postId,{
            include: [
                { model: Comment, as: 'comments' }
        ]});
        if (!post) {
            return res.status(404).json({ error: 'Post no encontrado' });
        }

        const user = await Users.findByPk(nickName);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const comment = await Comment.create({
            body,
            postId,
            nickName
        })
        res.status(201).json(comment);

    }catch (error) {
        console.error('Error al crear el comment:', error);
        res.status(500).json({ error: 'Error al crear el comment' });

    }
}

const getAllPosts = async (req, res) => {
    try {
        const monthsToKeep = process.env.COMMENT_VISIBILITY_MONTHS || 6;
        const cutoffDate = new Date();
        cutoffDate.setMonth(cutoffDate.getMonth() - parseInt(monthsToKeep));
        const posts = await Post.findAll({
            order: [['createdAt', 'DESC']],
            
            include: [
                {
                    model: Users,
                    as: 'author', 
                    attributes: ['nickName'] 
                },
                {
                    model: PostImage,
                    as: 'images',
                    attributes: ['imageUrl'] 
                },
                {
                    model: Comment,
                    as: 'comments',
                    attributes: ['body', 'nickName', 'createdAt'],
                    where: {
                        createdAt: {
                            [Op.gte]: cutoffDate 
                        }
                    },
                    required: false 
                },
                {
                    model: Tag,
                    as: 'tags',
                    attributes: ['name'], 
                    through: { attributes: [] } 
                }
            ]
        });

        res.status(200).json(posts);

    } catch (error) {
        console.error('Error al obtener los posts:', error);
        res.status(500).json({ error: 'Error al obtener los posts' });
    }
};

const getPostById = async (req, res) => {
    try {
        const monthsToKeep = process.env.COMMENT_VISIBILITY_MONTHS || 6;
        const cutoffDate = new Date();
        cutoffDate.setMonth(cutoffDate.getMonth() - parseInt(monthsToKeep));
        
        const postId = req.params.id;
        const post = await Post.findByPk(postId, {
            include: [
                {
                    model: Users,
                    as: 'author',
                    attributes: ['nickName']
                },
                {
                    model: PostImage,
                    as: 'images',
                    attributes: ['id', 'imageUrl']
                },
                {
                    model: Comment,
                    as: 'comments',
                    attributes: ['id', 'body', 'nickName', 'createdAt']
                },
                {
                    model: Tag,
                    as: 'tags',
                    attributes: ['id', 'name'],
                    through: { attributes: [] }
                }
            ]
        });

        if (!post) {
            return res.status(404).json({ error: 'Post no encontrado' });
        }

        res.status(200).json(post);

    } catch (error) {
        console.error('Error al obtener el post:', error);
        res.status(500).json({ error: 'Error al obtener el post' });
    }
};

const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findByPk(postId);

        if (!post) {
            return res.status(404).json({ error: 'Post no encontrado' });
        }

        await post.destroy(); 

        res.status(200).json({ message: 'Post eliminado con exito' });

    } catch (error) {
        console.error('Error al eliminar el post:', error);
        res.status(500).json({ error: 'Error al eliminar el post' });
    }
};

const updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const { description } = req.body; 

        const post = await Post.findByPk(postId);

        if (!post) {
            return res.status(404).json({ error: 'Post no encontrado' });
        }

        post.description = description;

        await post.save();

        res.status(200).json({ message: 'Post actualizado exitosamente', post });

    } catch (error) {
        console.error('Error al actualizar el post:', error);
        res.status(500).json({ error: 'Error al actualizar el post' });
    }
};

module.exports = {
    createPost,
    addComment,
    getAllPosts,
    getPostById,
    deletePost,
    updatePost
};
