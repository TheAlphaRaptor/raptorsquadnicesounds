var express = require('express');
var app = express();

export default class Server{

    public
  startServer() {
app.get('/homepage', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
    }

    private




}

