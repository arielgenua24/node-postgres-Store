const boom = require('@hapi/boom')
const { models } = require('../../libraries/sequelize')
const { Op } = require('sequelize')

class ProductsService {
  constructor(){
  }

  async create(data) {
    const product = await models.Product.create(data)
    return product
    
  }


  async find(query) {
    const {limit, offset, price, price_min, price_max} = query;
    const options = {
      include: ['category'],
      where: {}
    }
    
    if(limit && offset) {
      options.limit = limit;
      options.offset = offset;
    } 
    if(price) {
      options.where.price = price
    }

    if(price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max,
      }
    };

    const products = await models.Product.findAll(options);
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
