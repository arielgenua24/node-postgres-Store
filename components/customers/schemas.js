const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3).max(15);
const surname = Joi.string().min(3).max(15);
const userId = Joi.number().integer();
