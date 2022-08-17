const response = require('./response.handler')

function logErrors(err,req,res,next) {
  console.log('logErrors');
  console.error(err)
  next(err)
}

function errorHandler(err,req,res,next) {
  console.log('errorHandler');
  response
}

module.exports = {logErrors, errorHandler}
