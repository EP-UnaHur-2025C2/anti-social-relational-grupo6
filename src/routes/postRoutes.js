const { Router } = require('express')
const userController = require('../controllers/postControllers')
const {  validateCreatePosts } = require('../middlewares/validatePosts')

const router = Router()
router.post('/',validateCreatePosts, userController.createPost)
router.post('/:postId/add-comment', userController.addComment)


module.exports = router