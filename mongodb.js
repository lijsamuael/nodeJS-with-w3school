var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodedb")
    dbo.createCollection("Department", function(err, res) {
        if (err) throw err;
        console.log("A Department Collection created in nodedb database")
    });
});