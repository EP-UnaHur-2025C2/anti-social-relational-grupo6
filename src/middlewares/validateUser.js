const Joi = require('joi')

const createUserSchema= Joi.object ({
    nickName: Joi.string.min(3).max(30).required().messages({})
})

const validateCreateUser = (req, res, next) => {
    const { error, value } = createUserSchema.validate(req.body)
     if (error) {
      const mensajes = error.details.map(err => err.message);
        res.status(400).json({ errores: mensajes });
    }
  
    next()
}

const validateDeleteUser = (req, res, next) => {

}
module.exports = {
    validateCreateUser, validateDeleteUser }
