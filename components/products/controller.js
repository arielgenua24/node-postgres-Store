const boom = require('@hapi/boom')

class ProductsService {
  constructor(){
  }

  async create(data) {
    const products = await models.Product.create(data)
    return products
  }


  async find() {
    const products = await models.Product.findAll(options);
    return products
  }

  async findOne(options) {
    const product = await models.Product.findAll(options);
    return product
  }


  async update(id, changes) {
    const product  = await this.findOne(id)
    if(!product) {
      throw boom.notFound('Product not found');
    } else {
      const updated = await models.Product.update(changes)
      return updated;
    }
  }


  async delete(id) {
    const index = this.products.findIndex(product => product.id = id)
    if(index === -1) {
      throw boom.notFound('Product nor found');
    }
  }
}

module.exports = ProductsService;
