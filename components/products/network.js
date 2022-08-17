const express = require('express')
const router = express.Router();
const response = require('../../middleware/response.handler')
const controller = require('./controller')



router.get('/',
    async(req,res,next) => {
        try {
            const productsList = -1
            await controller.getProducts() //esto dara error
            response.success(req,res,productsList,200)

        } catch (error) {
            next(error)
        }
})

module.exports = router;
