const Joi = require('joi');
const { Post } = require('../../db/models/index'); 


const idParamSchema = Joi.object({
    id: Joi.number().integer().positive().required()
});

const validateIdParam = (req, res, next) => {
    const { error } = idParamSchema.validate(req.params);
    if (error) {
        return res.status(400).json({ message: `El parámetro ID es inválido: ${error.details[0].message}` });
    }
    next();
};

const postIdParamSchema = Joi.object({
    postId: Joi.number().integer().positive().required()
});

const validatePostIdParam = (req, res, next) => {
    const { error } = postIdParamSchema.validate(req.params);
    if (error) {
        return res.status(400).json({ message: `El parámetro PostID es inválido: ${error.details[0].message}` });
    }
    next();
};

const createPostImageSchema = Joi.object({
    imageUrl: Joi.string().uri().required(),
    postId: Joi.number().integer().positive().required()
});

const validateCreatePostImage = (req, res, next) => {
    const { error } = createPostImageSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: `Datos de entrada inválidos: ${error.details[0].message}` });
    }
    next();
};

const updatePostImageSchema = Joi.object({
    imageUrl: Joi.string().uri().required()
});

const validateUpdatePostImage = (req, res, next) => {
    const { error } = updatePostImageSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: `Datos de entrada inválidos: ${error.details[0].message}` });
    }
    next();
};

module.exports = {
    validateIdParam,
    validatePostIdParam,
    validateCreatePostImage,
    validateUpdatePostImage
};