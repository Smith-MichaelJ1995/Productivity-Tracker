const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Journal = require('./JournalSchema');

Journal.getJournalById = function(id, callback) {
  Journal.findById(id, callback);
}


module.exports = Journal;