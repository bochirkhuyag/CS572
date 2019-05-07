var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var fs = require('fs');

const gradeRouter = require('./routes/gradeRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev', {stream: fs.createWriteStream('./log/access.log', {flags: 'a'})}));
app.use(logger('dev'));

//will check incoming request header if it finds content type application/json 
//read body => parses this body and req.body has { ...}
//read body => parses this body  to req.body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var validateJSON = function(req,res,next){
  var body = {};
try{
  express.json();
  console.log('Request BODY : '+JSON.stringify(req.body));
  console.log('Valid JSON object passed');
}
catch{
  res.send('JSON object is invalid');
}
  next();
}
//app.use(validateJSON);
app.use(express.json());
app.use(cors());
app.use('/grades', gradeRouter);
app.listen(4000,()=>console.log('listening'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
