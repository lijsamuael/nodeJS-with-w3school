var http = require('http');
var fm = require('./module');
var fs = require('fs');
var url = require('url');
/*
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
//}).listen(8080);



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

/*deleting a file

fs.unlink(
    'newfile2.txt',
    function(err) {
        if (err) throw err;
        console.log('File Deleted');
    }
);

*/

//*********************working with url module************************************* */
/*extracting info from url

var adr = 'https://localhost:8080/index.html?name=Samuael&age=22';
var q = url.parse(adr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata = q.query;
console.log(qdata.name);
console.log(qdata.age);
*/

/* 
http.createServer(
    function(req,res){
        var q = url.parse(req.url, true);
        var filname = '.' + q.pathname;
        fs.readFile(filename,
            function(err, data){
                if(err){
                    res.writeHead(400,{})
                }
            }
            )
    }
);

*/

/*
//using upeer_case module
uc = require('upper-case');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc.upperCase("I am Samuel Ketema. And i am tring to use the upper-case module."));
    res.end;
}).listen(7070);
*/

// uploading
var formidable = require('formidable');
var fs = require('fs');
http.createServer(function(req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            var newpath = 'A:/Educational/Books/' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function(err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('< form action = "fileupload" method = "post" enctype = "multipart/form-data" >');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(7070);