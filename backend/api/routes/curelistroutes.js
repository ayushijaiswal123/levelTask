'use strict';
var mongoose = require('mongoose'),
  Cure = mongoose.model('Cures');
module.exports = function(app) {
  var cureList = require('../controllers/curelistController');

  // cureList Routes
 
  app.get('/cures',(req, res)  => {
    Cure.find({}, function(err, cure) {
      if (err)
        res.send(err);
      res.json(cure);
    });})
    
  app.route('/cures')
    .post(cureList.create_a_cure);


  app.route('/cures/:cureId')
    .get(cureList.read_a_cure)
    .put(cureList.update_a_cure)
    .delete(cureList.delete_a_cure);
};
