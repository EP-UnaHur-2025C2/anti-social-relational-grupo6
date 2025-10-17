const Joi = require('joi');

const createUserSchema = Joi.object({
    nickName: Joi.string()
        .alphanum() 
        .min(3)     
        .max(30)    
        .trim()     
        .required() 
        .messages({ 
            'string.base': 'El nickName debe ser texto.',
            'string.alphanum': 'El nickName solo puede contener letras y números.',
            'string.empty': 'El nickName no puede estar vacío.',
            'string.min': 'El nickName debe tener al menos 3 caracteres.',
            'any.required': 'El nickName es un campo obligatorio.'
        })
});

const validateCreateUser = (req, res, next) => {
    const { error } = createUserSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

module.exports = {
    validateCreateUser
};