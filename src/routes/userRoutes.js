const { Router } = require ('express')
const userController = require('../controllers/userControllers');

const validateUser = requiere ('../')
const router = Router()

router.get('/', userController.getUsers)
router.post('/' , userController.createUser)
router.delete('/:id', userController.deleteUser)
router.get('/:id', userController.getUserById)
router.put('/:id', userController.updateUser)


module.exports = router