var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/vanarts';

mongo.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("vanarts");
    var query = { name: "Demel Nigmatova" };
    dbo.collection("students").deleteOne(query, (err, res) => {
        if (err) throw err;
        console.log("Deleted ", res);
        db.close();
    });
});