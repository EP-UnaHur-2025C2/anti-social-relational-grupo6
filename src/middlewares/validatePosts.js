const Joi = require('joi')
const createPostSchema = Joi.object({
    description: Joi.string().min(10).trim().required(),
    imageUrls: Joi.array().min(1),
    tags: Joi.array().min(1),
    nickName:  Joi.string().min(2).trim().required(),
})
const validateCreatePosts = (req, res, next) => {
    const { error, value } = createPostSchema.validate(req.body)
    if(error){
        return res.status(400).json({ message: error.details[0].message })
    }
    req.body = value
    next()
}
module.exports = {
    validateCreatePosts
}