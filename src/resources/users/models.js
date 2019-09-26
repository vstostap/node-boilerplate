/**
 * Imports
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { statuses } = require('./constants');

/**
 * Data model schema example
 */
const userSchema = new Schema({
  name: {
    type    : String,
    required: true,
  },
  email: {
    type     : String,
    index    : true,
    unique   : true,
    required : true,
    trim     : true,
    lowercase: true,
    minlength: 5,
    maxlength: 254,
  },
  status: {
    type: Number,
    enum: statuses,
  },
  createdAt: {
    type   : Date,
    default: new Date(),
  },
});

/**
 * Exports
 */
module.exports = mongoose.model('User', userSchema);
