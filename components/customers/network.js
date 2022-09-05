const express = require('express')
const router = express.Router()
const success = require('../../middleware/response.handler')
const validatorHandler = require('../../middleware/validator.handler')
const {getCustomerSchema, createCustomerSchema, updateCustomerSchema} = require('./schemas')
const customersServices = require('./controller')
const CONTROLLER = new customersServices()


router.get('/', async(req,res,next) => {
        try {
            const customers = await CONTROLLER.find()
            success(req,res,customers,'200','')
        } catch (error) {
            next(error)
        }
})

router.get('/:id', 
    validatorHandler(getCustomerSchema, 'params'),
    async(req,res,next) => {
        try {
            const { id } = req.params
            const customer = await CONTROLLER.findOne(id)
            success(req,res,customer,'200','')
        } catch (error) {
            next(error)
        }
})

router.post('/', 
    validatorHandler(createCustomerSchema, 'body'),
    async(req,res,next) => {
        try {
            const body = req.body
            const customer = await CONTROLLER.create(body)
            success(req,res,customer,'201','')
        } catch (error) {
            next(error)
        }
})

router.patch('/:id', 
    validatorHandler(getCustomerSchema, 'params'),
    validatorHandler(updateCustomerSchema, 'body'),
    async(req,res,next) => {
        try {
            const { id } = req.params
            const body = req.body
            const customer = await CONTROLLER.update(body, id)
            success(req,res,customer,'200','')
        } catch (error) {
            next(error)
        }
})

router.delete('/:id', 
    validatorHandler(getCustomerSchema, 'params'),
    async(req,res,next) => {
        try {
            const { id } = req.params
            const customer = await CONTROLLER.delete(body, id)
            success(req,res,customer,'200','Customer deleted')
        } catch (error) {
            next(error)
        }
})


module.exports = router;