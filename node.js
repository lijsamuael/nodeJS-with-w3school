var http = require('http');
var fm = require('./module');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('The date and the time currently are' + fm.myDateTime())
    res.write(req.url);
    res.end('Hello World! ena min yitebes');
}).listen(8080);