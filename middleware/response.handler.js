
function sucess(req,res,message,status) {
  res.status(status || 200).send({
    error: '',
    body: message
  })

}

module.exports = {sucess};
