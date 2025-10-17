const { Router } = require ('express')
const tagController = require('../controllers/tagController');
const { validateCreateTag } = require('../middlewares/validateTag');

const router = Router()

router.get('/', tagController.getAllTags)
router.get('/:name', tagController.getTagByName )
router.post('/', validateCreateTag, tagController.createTag);
router.delete('/:id', tagController.deleteTag)

module.exports = router