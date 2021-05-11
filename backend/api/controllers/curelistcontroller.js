'use strict';


var mongoose = require('mongoose'),
  Cure = mongoose.model('Cures');





exports.create_a_cure = function(req, res) {
  var new_cure = new Cure(req.body);
  new_cure.save(function(err, cure) {
    if (err)
      res.send(err);
    res.json(cure);
  });
};


exports.read_a_cure = function(req, res) {
  Cure.findById(req.params.cureId, function(err, cure) {
    if (err)
      res.send(err);
    res.json(cure);
  });
};


exports.update_a_cure = function(req, res) {
  Cure.findOneAndUpdate({_id: req.params.cureId}, req.body, {new: true}, function(err, cure) {
    if (err)
      res.send(err);
    res.json(cure);
  });
};


exports.delete_a_cure = function(req, res) {


  Cure.remove({
    _id: req.params.cureId
  }, function(err, cure) {
    if (err)
      res.send(err);
    res.json({ message: 'Cure successfully deleted' });
  });
};


