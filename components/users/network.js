const express = require('express')
const router = express.Router()
const success = require('../../middleware/response.handler')
const validatorHandler = require('../../middleware/validator.handler')
const { getUserSchema, createUserSchema, updateUserSchema } = require('./schemas')
const UsersServices = require('./controller')
const CONTROLLER = new UsersServices()

router.get('/', async(req,res,next) => {
    try {
        const categories = await CONTROLLER.find()
        success(req,res,categories,'200','')
    } catch(error) {
        next(error)
    }
})

router.get('/:id',
    validatorHandler(getUserSchema, 'params'),
    async(req,res,next) => {
        try {
            const { id } = req.params
            const category = await CONTROLLER.find(id)
            success(req,res,categories,'200','')
        } catch(error) {
            next(error)
        }
})

router.post('/',
    validatorHandler(createUserSchema, 'body'),
    async(req,res,next) => {
        try {
            const body = req.body
            const category = await CONTROLLER.create(body)
            success(req,res,category,'201','')
        } catch(error) {
            next(error)
        }
})

router.patch('/:id',
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    async(req,res,next) => {
        try {
            const body = req.body
            const { id } = req.params
            const category = await CONTROLLER.create(body, id)
            success(req,res,category,'200','')
        } catch(error) {
            next(error)
        }
})

router.delete('/:id',
    validatorHandler(getUserSchema, 'params'),
    async(req,res,next) => {
        try {
            const { id } = req.params
            const category = await CONTROLLER.delete(id)
            success(req,res,category,'200','')
        } catch(error) {
            next(error)
        }
})

module.exports = router;