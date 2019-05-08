var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  req.dbConnection.findOne({},{key:1,message:1},function(err,doc){
    console.log('Document is here : '+doc);
    var encryptor = require('simple-encryptor/index')(doc.key);
    var decryptor = encryptor.decrypt(doc.message)
    res.send(`Decrypted text : ${decryptor}`);
  });
});

module.exports = router;
