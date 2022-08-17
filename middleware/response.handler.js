
function success(req,res,detail,status,message) {
  res.status(status || 200).send({
    error: '',
    message: message,
    body: detail
  })

}

module.exports = success;
