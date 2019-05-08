
  const MongoClient = require('mongodb').MongoClient;
  const client = MongoClient('mongodb+srv://huygaa:pass@cluster0-efgxs.mongodb.net/homework07?retryWrites=true', { useNewUrlParser: true });
  
  function dbConnection(){
    return ((req,res,next)=>{
      client.connect(function(err){
        const collection = client.db('homework07').collection('lectures');
          if(err) throw err;  
        if(collection){
          req.dbConnectionAtlas=collection;
          console.log("db connected");
          next();
          }
        else console.err;
        });

    });
  }

  module.exports = dbConnection;

