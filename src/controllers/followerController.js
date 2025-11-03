const { Follower, Users } = require('../../db/models/index');

const followUser = async (req, res) => {
    try {
        const { follower_nickname, followed_nickname } = req.body;

        const follower = await Users.findByPk(follower_nickname);
        const followed = await Users.findByPk(followed_nickname);

        if (!follower) {
            return res.status(404).json({ message: "El usuario seguidor no existe" });
        }

        if (!followed) {
            return res.status(404).json({ message: "El usuario a seguir no existe" });
        }

        const existingFollow = await Follower.findOne({
            where: {
                follower_nickname,
                followed_nickname
            }
        });

        if (existingFollow) {
            return res.status(409).json({ message: "Ya sigues a este usuario" });
        }

        await Follower.create({
            follower_nickname,
            followed_nickname
        });

        res.status(201).json({ message: "Usuario seguido exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al seguir al usuario" });
    }
};

const getFollowers = async (req, res) => {
    try {
        const { nickname } = req.params;

        const user = await Users.findByPk(nickname);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const userWithFollowers = await Users.findByPk(nickname, {
            include: [
                {
                    model: Users,
                    as: 'followers',
                    through: { attributes: [] },
                    attributes: ['nickName']
                }
            ]
        });

        res.status(200).json(userWithFollowers.followers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los seguidores" });
    }
};

const getFollowing = async (req, res) => {
    try {
        const { nickname } = req.params;

        const user = await Users.findByPk(nickname);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const userWithFollowing = await Users.findByPk(nickname, {
            include: [
                {
                    model: Users,
                    as: 'following',
                    through: { attributes: [] },
                    attributes: ['nickName']
                }
            ]
        });

        res.status(200).json(userWithFollowing.following);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los seguidos" });
    }
};

const unfollowUser = async (req, res) => {
    try {
        const { follower_nickname, followed_nickname } = req.body;

        const follow = await Follower.findOne({
            where: {
                follower_nickname,
                followed_nickname
            }
        });

        if (!follow) {
            return res.status(404).json({ message: "No sigues a este usuario" });
        }

        await follow.destroy();

        res.status(200).json({ message: "Dejaste de seguir al usuario" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al dejar de seguir al usuario" });
    }
};

module.exports = {
    followUser,
    getFollowers,
    getFollowing,
    unfollowUser
};
