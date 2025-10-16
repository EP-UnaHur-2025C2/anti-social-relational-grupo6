//probando que funcione
const { Router } = require ('express')
const tagController = require('../controllers/tagController');

const router = Router()

router.get('/', tagController.getAllTags)
router.get('/:name', tagController.getTagByName )
router.post('/' ,tagController.createTag )
router.delete('/:id', tagController.deleteTag)

module.exports = router