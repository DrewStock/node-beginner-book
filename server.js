const http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.write('Hello there! How are you?');
  res.end();
  console.log('server running on port 8888');
}).listen(8888);
