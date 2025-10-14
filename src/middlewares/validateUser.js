const Joi = require('joi')

const createUserSchema= Joi.object ({
    nickName: Joi.string.min(3).max(30).required().messages({})
})

// que el nickname no este vacio, 
// que el nickname no este siendo usado por alguien mas
