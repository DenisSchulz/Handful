var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.modulename);
    db.close();
  });
});


// find documents in Collection and add to array
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({},
    {
      projection: {_id: 0, wikiurl: 1, skills: 1}
    }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[4].wikiurl);
    db.close();
  });
});

// query database by setting different filters; eg. specific modulname 

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { modulename: 'DataScience'};
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
