const { Customer, CustomerSchema} = require('./customer.model')
const { User, UserSchema } = require('./user.model')
const { Product, ProductSchema } = require('./products.model')
const { Category, CategorySchema } = require('./categories.model')
const { Order, OrderSchema } = require('./../models/order.model')

function setUpModels(sequelize) {
  User.init(UserSchema, User.config(sequelize)),
  Customer.init(CustomerSchema, Customer.config(sequelize))
  Category.init(CategorySchema, Category.config(sequelize))
  Product.init(ProductSchema, Product.config(sequelize))
  Order.init(OrderSchema, Order.config(sequelize))

  User.associate(sequelize.models)
  Customer.associate(sequelize.models)
  Category.associate(sequelize.models)
  Product.associate(sequelize.models)
  Order.associate(sequelize.models)
}

module.exports = setUpModels;
