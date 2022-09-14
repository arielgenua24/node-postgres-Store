const express = require('express')
const router = express.Router()
const success = require('../../middleware/response.handler')
const validatorHandler = require('../../middleware/validator.handler')
const {getOrderSchema, createOrderSchema, addItemSchema} = require('./schemas')
const OrderService = require('./controller')
const CONTROLLER = new OrderService()


router.get('/', async (req, res, next) => {
    try {
      const orders = await CONTROLLER.find();
      res.json(orders);
    } catch (error) {
      next(error);
    }
  });
  
  router.get('/:id',
    validatorHandler(getOrderSchema, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const order = await CONTROLLER.findOne(id);
        res.json(order);
      } catch (error) {
        next(error);
      }
    }
  );
  
  
  router.post('/',
    validatorHandler(createOrderSchema, 'body'),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newOrder = await CONTROLLER.create(body);
        success(req,res,newOrder,'201','')
      } catch (error) {
        next(error);
      }
    }
  );
  
  router.post('/add-item/',
    validatorHandler(addItemSchema, 'body'),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newItem = await CONTROLLER.addItem(body);
        success(req,res,newItem,'201','')
      } catch (error) {
        next(error);
      }
    }
  );


module.exports = router; 