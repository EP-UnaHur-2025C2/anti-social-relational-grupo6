const { Router } = require('express')
const userController = require('../controllers/postControllers')
const {  validateCreatePosts } = require('../middlewares/validatePosts')

const router = Router()
router.post('/',validateCreatePosts, userController.createPost)


module.exports = router