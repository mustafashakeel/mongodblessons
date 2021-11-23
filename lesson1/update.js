var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/vanarts';

mongo.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("vanarts");
    var query = { name: "Damel" };
    var newValues = { $set: { name: "Demel Nigmatova", school: "Vancouver school of Arts" } };
    dbo.collection("students").updateOne(query, newValues, (err, res) => {
        if (err) throw err;
        console.log("updated ", res);
        db.close();

    });
});