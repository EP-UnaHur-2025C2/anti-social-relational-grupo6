const { Router } = require('express');
const postImageController = require('../controllers/postImageController');

const { 
    validateIdParam, 
    validatePostIdParam, 
    validateCreatePostImage, 
    validateUpdatePostImage 
} = require('../middlewares/validatePostImage');

const router = Router();

router.get('/by-id/:id', validateIdParam, postImageController.getPostImage);
router.get('/by-post/:postId', validatePostIdParam, postImageController.getPostImageByIdPost);
router.post('/', validateCreatePostImage, postImageController.createPostImage);
router.delete('/:id', validateIdParam, postImageController.deletePostImage);
router.put('/:id', validateIdParam, validateUpdatePostImage, postImageController.updatePostImage);

module.exports = router;