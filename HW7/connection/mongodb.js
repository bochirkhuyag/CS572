
  const MongoClient = require('mongodb').MongoClient;
  const client = MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01', { useNewUrlParser: true });
  
  function dbConnection(){
    return ((req,res,next)=>{
      client.connect(function(err){
        const db = client.db('homework01');
        const collection = db.collection('data');
          if(err) throw err;  
        if(collection){
          req.dbConnection=collection;
          console.log('working');
          next();
          }
        else console.err;
        });

    });
  }

  module.exports = dbConnection;

