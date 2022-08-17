
function logErrors(err,req,res,next) {
  console.log('logErrors');
  console.error(err)
  next(err)
}

function errorHandler(err,req,res,next) {
  console.log('errorHandler');
  res.status(500).send({
    message: err.message,
    stack: err.stack,
    body: '',
  })

}
module.exports = {logErrors, errorHandler}
