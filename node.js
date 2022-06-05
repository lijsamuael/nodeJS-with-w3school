var http = require('http');
var fm = require('./module');
var fs = require('fs');

http.createServer(function(req, res) {
    //reading a html file from the same directory.
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
    /*working with modules
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('The date and the time currently are' + fm.myDateTime())
    res.write(req.url);
    res.end('Hello World! ena min yitebes');
    */
}).listen(8080);

/*creating a file 

fs.appendFile(
    'newfile.txt', 'Hello This is a file created by node js file!',
    function(err) {
        if (err) throw err;
        console.log('Saved!');
    }
);
*/

/*opening a file
fs.open(
    'newfile.txt', 'w',
    function(err, file) {
        if (err) throw err;
        console.log('Saved');
    }
);
*/

/*writing a file that may replace it the specified file exist
fs.writeFile(
    'newfile2.txt', 'This is another file',
    function(err) {
        if (err) throw err;
        console.log('File replaced');
    }
);
*/

// deleting a file

fs.unlink(
    'newfile2.txt',
    function(err) {
        if (err) throw err;
        console.log('File Deleted');
    }
);