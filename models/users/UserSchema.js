const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }, 
  birthday: {
    type: Date,
    required: true
  },
  journals: {
    type: Array,
    required: true
  },
  cards: {
    type: Array,
    required: true
  },
  goals: {
    type: Array,
    required: true
  }
});


module.exports = mongoose.model('User', UserSchema);