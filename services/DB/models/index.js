const { Customer, CustomerSchema} = require('./customer.model')
const { User, UserSchema } = require('./user.model')
//const { Product, ProductSchema } = require('./products.model')
//const { Category, CategorySchema } = require('./category.model')

function setUpModels(sequelize) {
  User.init(UserSchema, User.config(sequelize)),
  Customer.init(CustomerSchema, Customer.config(sequelize))
 


}

module.exports = setUpModels;
