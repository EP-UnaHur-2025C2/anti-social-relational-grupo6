const { Router } = require('express')
const postController = require('../controllers/postControllers')
const {  validateCreatePosts, validateUpdatePost } = require('../middlewares/validatePosts')

const router = Router()
router.get('/', postController.getAllPosts);
router.post('/',validateCreatePosts, postController.createPost)
router.get('/:id', postController.getPostById);
router.post('/:postId/add-comment', postController.addComment)
router.delete('/:id', postController.deletePost);
router.put('/:id', validateUpdatePost, postController.updatePost);

module.exports = router