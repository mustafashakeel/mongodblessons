var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/vanarts';

mongo.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("vanarts");
    var student = { name: "Damel", school: "vanarts" };

    dbo.collection("students").insertOne(student, (err, res) => {
        if (err) throw err;
        console.log(" Inserted a document ");
        db.close();

    });



});