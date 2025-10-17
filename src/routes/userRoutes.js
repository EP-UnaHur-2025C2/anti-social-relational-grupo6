const { Router } = require ('express')
const userController = require('../controllers/userControllers');
const { validateCreateUser } = require('../middlewares/validateUser');

const router = Router()

router.post('/', validateCreateUser, userController.createUser);
router.get('/', userController.getUsers)
router.post('/' , userController.createUser)
router.delete('/:nickName', userController.deleteUser)
router.get('/:nickName', userController.getUserById)
router.put('/:nickName', userController.updateUser)


module.exports = router