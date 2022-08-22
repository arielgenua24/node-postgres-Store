const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10)
const image = Joi.string().uri();
const categoryId = Joi.number().integer();
const value = Joi.number().integer().min(10);


const limit = Joi.number().integer();
const offset = Joi.number().integer();

const price_min = Joi.number().integer();
const price_max = Joi.number().integer();


const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  value: value.required(),
  image: image.required(),
  description: description.required(),
  categoryId: categoryId.required()
})

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId: categoryId.required() //Requiero el id en la actualizacion porque puede que actualice el producto de categoria.
})

const getProductSchema = Joi.object({
  id: id.required(),
});


const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max
}) //3) Estos son opcionales


module.exports = {createProductSchema, updateProductSchema, getProductSchema, queryProductSchema}