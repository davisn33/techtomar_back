const Joi  = require('joi')

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
        .email()
        .required(),
        password: Joi.string()
        .required()
    })
    return schema.validate(data)
}

const addPolicyValidation = (data) => {
    const schema = Joi.object({
        eng_title: Joi.string()
        .required(),
        ger_title: Joi.string()
        .required(),
        eng_description: Joi.string()
        .required(),
        ger_description: Joi.string()
        .required()
    })
    return schema.validate(data)
}
const addCookiesValidation = (data) => {
    const schema = Joi.object({
        eng_title: Joi.string()
        .required(),
        ger_title: Joi.string()
        .required(),
        eng_description: Joi.string()
        .required(),
        ger_description: Joi.string()
        .required()
    })
    return schema.validate(data)
}

const addSliderValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string()
        .required()
    }).options({allowUnknown: true})
    return schema.validate(data)
}
const deleteSliderValidation = (data) => {
    const schema = Joi.object({
        slider_id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
            "string.pattern.base": "Invalid user_id"
        })
        .required()
    }).options({allowUnknown: true})
    return schema.validate(data)
}

module.exports.loginValidation = loginValidation
module.exports.addPolicyValidation = addPolicyValidation
module.exports.addCookiesValidation = addCookiesValidation
module.exports.addSliderValidation = addSliderValidation
module.exports.deleteSliderValidation = deleteSliderValidation