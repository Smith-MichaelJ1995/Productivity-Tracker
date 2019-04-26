const mongoose = require('mongoose');

// User Schema
const JournalSchema = mongoose.Schema({
  tags: {
    type: Array,
    required: true
  },
  commits: {
    type: Array,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  dayRating: {
    type: Number,
    required: true
  }, 
  text: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Journal', JournalSchema);