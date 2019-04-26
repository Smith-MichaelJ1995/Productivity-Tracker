const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./UserSchema');


User.getUserByID = function(id, callback) {
  User.findById(id, callback)
}

User.getUserByUsername = function(username, callback) {
  const query = {username: username}
  User.findOne(query, callback)
}

User.addUser = function(newUser, callback){

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback)
    })
  });

}

User.comparePassword = function(canidatePassword, hash, callback) {
  bcrypt.compare(canidatePassword, hash, (err, isMatch) => {

    if(err) throw err;
    callback( null, isMatch );

  });
}

User.insertJournalOID = function (newJournalOID, userID, callback) {

    var query = {'_id': userID};
    
    User.update(query, {$push: { journals: newJournalOID }}, callback);

}


module.exports = User;