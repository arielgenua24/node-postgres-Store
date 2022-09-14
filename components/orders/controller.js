//order.service.js
const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize')

//6) Creamos los servicios

class OrderService {

  constructor(){
  }
  async create(data) {
    const  newOrder = await models.Order.create(data)
    return newOrder;
  }

  async addItem(data) {
    const newItem = await models.OrderProduct.create(data)
    return newItem;
  } //3) Fijate, llegamos a agregar un Item, pero esta vez AUNQUE EL SERVICIO ESTE EN ORDER, nosotros le mandamos la data a la tabla OrderProduct, por lo tanto, fijate: odels.OrderProduct.create

  async find() {
    const orders = await models.Order.findAll({
      include: ['costumer']
    })
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'costumer',
          include: ['user']
        }
      ]
    })//8) Queremos ir mas alla, es decir, cuando hacer una get a order, gracias a la columan costumerId y la asosiciaion con user, nosotros traemos una la columan de costumer, pero mmm sabemos que costumer esta asociado a user,etnoces, por que no asociarlos tambien? esto se hace como lo ves en el codigo de aca arriba. Lo que estamos haceindo es detallar mas asociaiones. el assocaition es la asociacion de order con costumer e include ['user '] es la asociaicon de costumer con user. yy todo se ve con hacer un simple request asi http://localhost:3001/api/v1/orders/2
    return order;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = OrderService;