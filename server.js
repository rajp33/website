var http = require('http')
var fs = require('fs')

http.createServer(onRequest).listen(8888)
console.log('Server has started')

function onRequest(request, response){
  fs.readFile('index.html', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
    response.write(data);
    response.end();
  })
}
