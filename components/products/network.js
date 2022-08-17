const express = require('express')
const router = express.Router();
const success = require('../../middleware/response.handler')
const controller = require('./controller')



router.get('/',
    async(req,res,next) => {
        try {
            const products = await controller.getProducts() //esto dara error
            success(req,res,products,200,'')
        } catch (error) {
            next(error)
        }
})


router.get('/:id',
    async(req,res,next) => {
        try {
            const { id } = req.params;
            const product = await controller.getProducts(id) //esto dara error
            success(req,res,product,200,'')
        } catch (error) {
            next(error)
        }
})

router.post('/',
    async(req,res,next) => {
        try {
            const body  = req.body;
            const product = await controller.create(id) //esto dara error
            success(req,res,body,200,'Created')
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
