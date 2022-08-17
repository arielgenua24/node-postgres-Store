const express = require('express')
const router = express.Router();
const response = require('respuestita')
const controller = require('./controller')

//utilizo el response aprendido de el proyecto backendNode & utilizo el next aprendido backendPostgre

router.get('/', 
    async(req,res,next) => {
        try {
            const productsList = await controller.getProducts()
            response.success(req,res,productsList,200)
        } catch(err) {
            next(err)
        }
})

module.exports = router;