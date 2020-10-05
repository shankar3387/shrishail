var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const db = MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("supernebr");
    return db.db("supernebr")
});

function createDatabase() {
    MongoClient.connect("mongodb://localhost:27017/supernebr", function(err, db) {
        if (err) throw err;
        console.log("Database created!");
    });
}

function createTable(tableName) {
    db.createCollection(tableName, function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
}

module.exports = { createDatabase: createDatabase, db: db, createTable: createTable }