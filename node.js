var http = require('http');
var fm = require('./module');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
    res.write('The date and the time currently are' + fm.myDateTime());
}).listen(8080);