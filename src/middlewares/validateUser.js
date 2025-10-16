const Joi = require('joi')

const createUserSchema= Joi.object ({
    nickName: Joi.string.min(3).max(30).required().messages({})
})

// que no ingrese valores vacios, 
// que el nickname no este siendo usado por alguien mas
// que este ingresando valores validos(solo string)
