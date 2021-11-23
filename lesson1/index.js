var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/vanarts';

mongo.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("vanarts");
    dbo.createCollection("students", (err, res) => {
        if (err) throw err;
        console.log(" Colletion Created");
        db.close();

    });



});