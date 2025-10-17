const Joi = require('joi');

const createTagSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .lowercase() 
        .trim()
        .required()
        .messages({
            'string.base': 'El nombre del tag debe ser texto.',
            'string.empty': 'El nombre del tag no puede estar vacío.',
            'string.min': 'El nombre del tag debe tener al menos 2 caracteres.',
            'any.required': 'El nombre del tag es un campo obligatorio.'
        })
});

const validateCreateTag = (req, res, next) => {
    const { error } = createTagSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    
    next();
};

module.exports = {
    validateCreateTag
};