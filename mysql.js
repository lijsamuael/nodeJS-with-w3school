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
    /*

    var sql = "CREATE TABLE Student (id int auto_increment primary key, name varchar(20), age varchar(1))";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("A table named Student created.");
    });
    */

    //Altering a table

    /*
    var alter = "ALTER TABLE Student ADD COLUMN gender varchar(1)";
    con.query(alter, function(err, result) {
        if (err) throw err;
        console.log("The Student table is altered and now it has another column called gender");

    });
    */

    //inserting values to the table
    // inserting a single value
    /*
    var insert = "INSERT INTO Student VALUES (1, 'Sami', 22, 'M')";
    con.query(insert, function(err, result) {
        if (err) throw err;
        console.log("1 recored inserted");
    });
    */

    //inserting multiple values
    /*
    var insert = "INSERT INTO Student VALUES ?";
    var values = [
        [10, 'Dagne', 32, 'M'],
        [9, 'Sewalem', 29, 'M'],
    ];
    con.query(insert, [values], function(err, result) {
        if (err) throw err;
        console.log(" 2 rows are inserted");
    });
    */

    //selecting values from a table
    con.query("SELECT *FROM student", function(err, result) {
        if (err) throw err;
        console.log(result);
    });

});