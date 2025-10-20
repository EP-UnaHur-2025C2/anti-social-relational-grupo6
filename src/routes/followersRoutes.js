const { Router } = require('express');
const followerController = require('../controllers/followerController');

const router = Router();

// Seguir a un usuario
router.post('/', followerController.followUser);

// Obtener usuarios que sigue un usuario (debe ir antes de /:nickname)
router.get('/following/:nickname', followerController.getFollowing);

// Obtener seguidores de un usuario
router.get('/:nickname', followerController.getFollowers);

// Dejar de seguir a un usuario
router.delete('/', followerController.unfollowUser);

module.exports = router;
