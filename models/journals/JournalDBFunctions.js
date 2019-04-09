const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Journal = require('./JournalSchema');

// fetch based on corresponding ID
Journal.getJournalById = function(id, callback) {
  Journal.findById(id, callback);
}

// delete based on corresponding ID
Journal.deleteJournalById = function(id, callback) {
  Journal.findOneAndDelete(id, callback);
}

Journal.createJournalEntry = function(newJournalObject, callback) {

  newJournalObject.save(callback);
}


module.exports = Journal;