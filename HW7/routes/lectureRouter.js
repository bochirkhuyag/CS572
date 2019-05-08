var express = require('express');
var router = express.Router();
var mongo = require('mongodb');

/* GET users listing. */
router.get('/', function(req, res, next) {

    const cursor = req.dbConnectionAtlas.find({}).toArray((err,data)=>{
        res.json(data)
        });
    });

router.get('/:id',function(req,res,next){
    //req.params.id
    var objId = new mongo.ObjectID(req.params.id);
    req.dbConnectionAtlas.findOne({'_id' : objId},{projection: { '_id': false }},function(err,data){
      
       res.json(data);
    });
});

router.post('/',function(req,res,next){
    newObj = req.body;
    console.log(req.body);
    req.dbConnectionAtlas.insertOne(newObj,function(err,data){
        if(err) res.send('Something wrong happened');
        res.send('Lecture added');
    })
})

router.delete('/:id',(req,res,next)=>{
    var objId = new mongo.ObjectID(req.params.id);
    req.dbConnectionAtlas.deleteOne({'_id':objId},function(err,obj){
        if(err) res.send('Something wrong happened');
        res.send('Lecture deleted');
    })
})

router.post('/search/:q',(req,res,next)=>{
    
    req.dbConnectionAtlas.find({'course': {'$regex':`*${req.params.q}*`,'$options':'i'}}).toArray((err,data)=>{
        res.json(data)
        });

})
module.exports = router;
