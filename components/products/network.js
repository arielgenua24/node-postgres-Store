const express = require('express')
const router = express.Router();
const success = require('../../middleware/response.handler')
const ProductsService = require('./controller')
const CONTROLLER = new ProductsService()



router.get('/',
    async(req,res,next) => {
        try {
            const products = await CONTROLLER.find() //esto dara error
            success(req,res,products,200,'')
        } catch (error) {
            next(error)
        }
})


router.get('/:id',
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
    async(req,res,next) => {
        try {
            const { id }  = req.params;
            const body = req.body;
            const product = await controller.update(id,body)
            success(req,res,product,200,'Updated')
        } catch (error) {
            next(error)
        }
})



module.exports = router;
