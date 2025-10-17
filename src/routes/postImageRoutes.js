const { Router } = require ('express')
const postImageController = require('../controllers/postImageController');


const router = Router()

router.get('/by-id/:id', postImageController.getPostImage)
router.get('/by-post/:postId', postImageController.getPostImageByIdPost)
router.post('/' , postImageController.createPostImage)
router.delete('/:id', postImageController.deletePostImage)
router.put('/:id', postImageController.updatePostImage)


module.exports = router