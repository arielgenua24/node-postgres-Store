const products = require('../components/products/network')

function routerApi(app) {
    app.use('/api/v1/products', products)
} 

module.exports = {routerApi}