var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/vanarts';

mongo.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("vanarts");
    var query = { name: "Damel" };
    var mysort = { name: 1 }
    dbo.collection("students").find().sort(mysort).toArray((err, res) => {
        if (err) throw err;
        console.log("query ", res);
        db.close();

    });



});