const { Router } = require ('express')
const userController = require('../controllers/userControllers');

const router = Router()

router.get('/', userController.getUsers)
router.post('/' , userController.createUser)
router.delete('/:nickName', userController.deleteUser)
router.get('/:nickName', userController.getUserById)
router.put('/:nickName', userController.updateUser)


module.exports = router