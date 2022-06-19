var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
//connecting to mongodb database
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodedb")
        //creating a collection
        /*
        dbo.createCollection("Department", function(err, res) {
            if (err) throw err;
            console.log("A Department Collection created in nodedb database")
        });
        */
        //inserting documnets/records to the collection
        /*
        //inserting single document
    var doc = { name: "Samuel", age: 22, gender: "Male" };
    dbo.collection("Student").insertOne(doc, function(err, res) {
        if (err) throw err;
        console.log("One object inserted");
        db.close;
    });
    */
        //inserting multiple record
    var docs = [
        { name: "Kidist", age: 22, gender: "Male", department: "Pharmacy" },
        { name: "Ketema", age: 22, gender: "Male" },
        { name: "Haymanot", age: 22, gender: "Male" },
        { name: "Meklit", age: 22, gender: "Male" },
        { name: "Yedawit", age: 22, gender: "Male" }
    ];
    dbo.collection("Student").insertMany(docs, function(err, res) {
        if (err) throw err;
        console.log("Multiple records are inserted to the collection" + res.insertedCount);
        db.close();
    });
});