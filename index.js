const express = require('express');
const routerApi = require('./routes')
const { logErrors, errorHandler,boomErrorHandler } = require('./middleware/error.handler')
const app = express()
const port = 3000

app.use(express.json())
routerApi(app)

app.use(logErrors)
app.use(errorHandler)
app.use(boomErrorHandler)




app.get('/', (req,res) => {
    res.send('Hola mi server en express')
})

app.listen(port, () => {
    console.log('mi port ' + port)
})

