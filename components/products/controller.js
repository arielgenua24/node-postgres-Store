const boom = require('@hapi/boom')
const { models } = require('../../libraries/sequelize')

class ProductsService {
  constructor(){
  }

  async create(data) {
    const product = await models.Product.create(data)
    return product
    
  }


  async find() {
    const products = await models.Product.findAll();
    return products

  }

  async findOne(id) {
    const product = await models.Product.findByPk(id, {
      include: ['category']
    });
    return product
  }


  async update(id, changes) {
    const product  = await this.findOne(id)
    if(!product) {
      throw boom.notFound('Product not found');
    } else {
      const updated = await product.update(changes)
      return updated;
    }
  }


  async delete(id) {
    const product = await this.findOne(id)
    const deleted = await product.delete()
    return deleted
  }
}

module.exports = ProductsService;
