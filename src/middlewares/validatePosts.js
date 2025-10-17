const Joi = require('joi')

const createPostSchema = Joi.object({
    description: Joi.string().min(2).max(200).trim().required()
                .messages({
                    'string.base': 'La descripción debe ser texto.',
                    'string.empty': 'La descripción no puede estar vacía.',
                    'string.min': 'La descripción debe tener al menos 5 caracteres.',
                    'any.required': 'La descripción es un campo obligatorio.'
                }),
    imageUrls: Joi.array().min(1).items(Joi.string().uri()).optional()
                .messages({
                    'array.base': 'imageUrls debe ser un array.',
                    'string.uri': 'Cada elemento en imageUrls debe ser una URL válida.'
                }),
    tags: Joi.array().items(Joi.string().min(2)).optional()
                .messages({
                    'array.base': 'tags debe ser un array.',
                    'string.base': 'Cada tag debe ser texto.'
                }),

    nickName:  Joi.string().min(2).trim().required()
                .messages({
                    'string.empty': 'El nickName no puede estar vacío.',
                    'any.required': 'El nickName es un campo obligatorio.'
        }),
})

const updatePostSchema = Joi.object({
    description: Joi.string()
        .min(2)
        .max(200)
        .trim()
        .required()
        .messages({
            'string.base': 'La descripción debe ser texto.',
            'string.empty': 'La descripción no puede estar vacía.',
            'string.min': 'La descripción debe tener al menos 5 caracteres.',
            'any.required': 'La descripción es un campo obligatorio.'
        })
});

const validateCreatePosts = (req, res, next) => {
    const { error } = createPostSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

const validateUpdatePost = (req, res, next) => {
    const { error } = updatePostSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

module.exports = {
    validateCreatePosts,
    validateUpdatePost
}