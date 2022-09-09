'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('./../models/products.model')
const { CategorySchema, CATEGORY_TABLE} = require('./../models/categories.model')


module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE, ProductSchema) 
  }
};