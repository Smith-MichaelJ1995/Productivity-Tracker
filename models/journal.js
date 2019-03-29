const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Journal Schema
const JournalSchema = mongoose.Schema({
  date: {
    type: String,
  },
  IMGs: {
    type: Array,
    required: true
  },
  cards: {
    type: Array,
    required: true
  },
  tags: {
    type: Array,
    required: true
  }, 
  commits: {
    type: Array,
    required: true
  },
  userID: {
    type: String,
    required: true
  }
});


const Journal = module.exports = mongoose.model('Journal', JournalSchema);


module.exports.getJournalByUserID_Date = function(userID, date, callback) {
  // console.log('userID = ', userID);
  // console.log('date = ', date);
  const query = {userID: userID, date: date}
  Journal.findOne(query, callback)
}