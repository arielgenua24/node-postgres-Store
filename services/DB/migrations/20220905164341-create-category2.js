'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('./../models/categories.model')


module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE, CategorySchema) 
  }
};