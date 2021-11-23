var mongo = require('mongodb').MongoClient;

var url = 'mongodb+srv://mike:auc98361@cluster0.6abkf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongo.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("vanarts");
    var student = { name: "Damel", school: "vanarts", name: "charlene", school: "vanarts", name: "Niki" };

    dbo.collection("students").insertOne(student, (err, res) => {
        if (err) throw err;
        console.log(" Inserted a document ");
        db.close();

    });



});