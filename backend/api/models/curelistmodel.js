'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CureSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the disease'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  cause: {
    type: String,
    required: 'Kindly enter the name of the cause'
  },
  antidote:{
    type: String,
    required: 'Kindly enter the name of the affirmation antidote'
  }
});

module.exports = mongoose.model('Cures', CureSchema);