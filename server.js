// var http = require('http')
// var fs = require('fs')
//
// http.createServer(onRequest).listen(8888)
// console.log('Server has started')
//
// function onRequest(request, response){
//   switch (request.url) {
//     case "/css/master.css" :
//       fs.readFile('css/master.css', function(err, data) {
//         response.writeHead(200, {'Content-Type' : 'text/css', 'Content-Length': data.length});
//         response.write(data);
//         response.end();
//       })
//       break
//     default:
//       fs.readFile('index.html', function(err, data) {
//         response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
//         response.write(data);
//         response.end();
//       })
//   }
// }

var express = require('express')
var app = express()
//var micromodal = require('micromodal')

app.use(express.static('public/html', {extensions : ['html']}))
app.use(express.static('public', {extensions : ['html']}))

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Express app listening at http://%s:%s', host, port)

})
