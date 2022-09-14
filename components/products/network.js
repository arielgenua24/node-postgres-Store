const express = require('express')
const router = express.Router();
const success = require('../../middleware/response.handler')
const validatorHandler = require('../../middleware/validator.handler')
const {createProductSchema, updateProductSchema, getProductSchema, queryProductSchema} = require('./schemas')
const ProductsService = require('./controller')
const CONTROLLER = new ProductsService()



//no utilizamos validtor hanlder aca porque el usuario no utilizara ningun dato.
router.get('/',
    validatorHandler(queryProductSchema, 'query'),
    async(req,res,next) => {
        try {
            const products = await CONTROLLER.find(req.query) //esto dara error
            success(req,res,products,200,'')
        } catch (error) {
            next(error)
        }
})


router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async(req,res,next) => {
        try {
            const { id } = req.params;
            const product = await CONTROLLER.findOne(id) //esto dara error
            success(req,res,product,200,'')
        } catch (error) {
            next(error)
        }
})

router.post('/',
    validatorHandler(createProductSchema,'body'),
    async(req,res,next) => {
        try {
            const body  = req.body;
            const product = await CONTROLLER.create(body) //esto dara error
            success(req,res,product,200,'Created')
        } catch (error) {
            next(error)
        }
})

router.patch('/:id',
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async(req,res,next) => {
        try {
            const { id }  = req.params;
            const body = req.body;
            const product = await CONTROLLER.update(id,body)
            success(req,res,product,200,'Updated')
        } catch (error) {
            next(error)
        }
})



module.exports = router;
