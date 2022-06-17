var mysql = require('mysql');
//creating connection to the database

var con = mysql.createConnection({
    host: "localhost",
    user: "sami",
    password: "password",
    database: "nodedb"

});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to Database");
    // creating a database

    /*
    con.query("CREATE DATABASE nodedb", function(err, result) {
        if (err) throw err;
        console.log("Database named nodedb created");
    });
    */

    //creating a table

    var sql = "CREATE TABLE Student (id int auto_increment primary key, name varchar(20), age varchar(1))";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("A table named Student created.");
    });




});