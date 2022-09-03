const Joi = require('joi')
const { createUserSchema, updateUserSchema } = require('./schemas')

const id = Joi.number().integer(); 
const name = Joi.string().min(1);
const surname = Joi.string().min(1);
const phone = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string()
const userId = Joi.number().integer();


const createCustomerSchema = Joi.object({
    name: name.required(),
    surname: surname.required(),
    phone: phone.required(),
    user:  Joi.object({
        email: email.required(),
        password: password.required(),
    })
})

const updateCustomerSchema = Joi.object({
    name: name,
    surname: surname,
    phone: phone,
   
})


const getConsumerSchema = Joi.object({
    id: id.required(),
  });


  module.exports = { createCustomerSchema, updateCustomerSchema, getConsumerSchema }