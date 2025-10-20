const { Router } = require('express');
const followerController = require('../controllers/followerController');

const router = Router();

router.post('/', followerController.followUser);
router.get('/following/:nickname', followerController.getFollowing);
router.get('/:nickname', followerController.getFollowers);
router.delete('/', followerController.unfollowUser);

module.exports = router;
