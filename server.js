var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(3005, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Listing to http://127.0.0.1:3005", host, port)
})