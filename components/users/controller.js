const boom = require('@hapi/boom');

const { models } = require('../../libraries/sequelize')


class UsersServices {
  constructor() {
      
  }  

  async find() {
    const user = await models.User.findAll({
      include: ['customer']
  })
  return user
  }


}

module.exports = UsersServices