var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/vanarts';

mongo.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("vanarts");
    dbo.collection("students").findOne({}, (err, res) => {
        if (err) throw err;
        console.log("view student record ", res.name);
        db.close();

    });



});