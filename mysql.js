var mysql = require('mysql');
//creating connection to the database
/*
var con = mysql.createConnection({
    host: "localhost",
    user: "sami",
    password: "password"
});
*/
// creating a database
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to Database");
    con.query("CREATE DATABASE nodedb", function(err, result) {
        if (err) throw err;
        console.log("Database named nodedb created");
    });
});