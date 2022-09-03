const express = require('express')
const router = express.Router()
const success = require('../../middleware/response.handler')
const validatorHandler = require('../../middleware/validator.handler')
const {createCategorySchema, updateCategorySchema, getCategorySchema} = require('./schemas')
const CategoriesService = require('./controller')
const CONTROLLER = new CategoriesService()


router.get('/', async(req,res,next) => {
    try {
        const categories = await CONTROLLER.find()
        success(req,res,categories,200,'')
    } catch (error){
        next(error)
    }
})

router.get('/id',   
    validatorHandler(getCategorySchema, 'params'),
    async(req,res,next) => {
        try {
            const { id } = req.params;
            const categories = await CONTROLLER.findOne(id)
            success(req,res,categories,200,'')
        } catch (error){
            next(error)
        }
})

router.post('/',   
    validatorHandler(createCategorySchema, 'body'),
    async(req,res,next) => {
        try {
            const { id } = req.params;
            const categories = await CONTROLLER.create()
            success(req,res,categories,201,'')
        } catch (error){
            next(error)
        }
})

router.patch('/id',   
    validatorHandler(getCategorySchema, 'params'),
    validatorHandler(updateCategorySchema, 'body'),
    async(req,res,next) => {
        try {
            const { id } = req.params;
            const  body  = req.body;
            const categories = await CONTROLLER.update()
            success(req,res,categories,200,'')
        } catch (error){
            next(error)
        }
})


router.delete('/id',   
    validatorHandler(getCategorySchema, 'params'),
    async(req,res,next) => {
        try {
            const { id } = req.params;
            const categories = await CONTROLLER.delete()
            success(req,res,categories,200,'')
        } catch (error){
            next(error)
        }
})


module.exports = router;