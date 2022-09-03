const { Sequelize } = require('sequelize')
const { config } = require('../config')
const setUpModels = require('../services/DB/models') //5)asi es como importamos la funcion setUpModels de index.js de la carptea models




const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)


const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log
})

setUpModels(sequelize)



module.exports = sequelize;
