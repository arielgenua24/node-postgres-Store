const boom = require('@hapi/boom')
const pool = require('../../libraries/postgres.pool')
const sequelize = require('../../libraries/sequelize')


class ProductsService {
  constructor(){
  }

  async create(data) {
    //const products = await models.Product.create(data)
    //return products
    const product = data;
    return product;
  }


  async find() {
    //const products = await models.Product.findAll(options);
    /*const products = -1;
    if(products === -1) {
      throw boom.notFound('Product not found');
    } else {
      return products
    } */

    const query = 'SELECT * FROM tasks'
    const [data, medadata] = await sequelize.query(query);
    return data; //2) Accedemos a pool y especifcamente le passamos el query que este metodo necesita

  }

  async findOne(options) {
   
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
