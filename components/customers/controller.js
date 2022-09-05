const boom = require('@hapi/boom');

const { models } = require('../../libraries/sequelize')


class customersServices {
    constructor(){}

    async create(data) {
        const newCustomer = await models.Customer.create(data,{
            include: ['user']
        })
        return newCustomer
    }

    /*async findOne(){

    } 
    async update() {

    }
    
    */

    async find() {
        const customer = await models.Customer.findAll({
            include: ['user']
        })
        return customer
    }
    

   

    
}

module.exports = customersServices;