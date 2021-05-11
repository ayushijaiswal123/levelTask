var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  Cure = require('./api/models/curelistmodel'), //created model loading here
  bodyParser = require('body-parser');
  var cors = require('cors')
  // var MongoClient = require('mongodb').MongoClient;
 
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Curedb', {useNewUrlParser: true,useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false}).then(()=>{
    console.log(`connection to database established`)
}).catch(err=>{
    console.log(`db error ${err.message}`);
    process.exit(-1)
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

var routes = require('./api/routes/curelistroutes'); //importing route
routes(app); //register the route


app.listen(port);
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

console.log('cure list RESTful API server started on: ' + port);