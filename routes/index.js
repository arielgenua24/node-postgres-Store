const products = require('../components/products/network')
const categories = require('../components/categories/network')
const users = require('../components/users/network')
const customers = require('../components/customers/network')



function routerApi(app) {
  app.use('/api/v1/products', products)
  app.use('/api/v1/categories', categories)
  app.use('/api/v1/users', users)
  app.use('/api/v1/customers', customers)



}

module.exports = routerApi
