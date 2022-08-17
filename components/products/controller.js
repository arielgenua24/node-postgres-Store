
class ProductsService {
  constructor(){}

  async create(data) {
      const products = await models.Product.create(data)
      return products
  }
}

module.exports = ProductsService;
