var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  // var myobj = items;
  dbo.collection("customers").find({}, { projection: {_id: 0, modulename: 1 }} ).toArray(function(err, res) {
    if (err) throw err;
    var test = res.length;
    db.close();
    console.log(test);
  });
});
