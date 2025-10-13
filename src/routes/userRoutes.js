const { Router } = require('express')
const userController = require('../controllers/userControllers')
const router = Router()

router.get('/', userController.getUsers)
<<<<<<< HEAD
=======
router.post('/', userController.createUser)
>>>>>>> ifranhugo
/*router.get('/:id', actorController.obtenerActor)
router.post('/', actorController.crearActor)
router.put('/:id', actorController.actualizarActor)
router.delete('/:id', actorController.eliminarActor)*/

module.exports = router