const User = require('../models/users/UserDBFunctions');
const jwt = require('jsonwebtoken');
const config = require('../config/database')

const UserRoutes = {};


UserRoutes.authenticate =  (req, res, next) => {


  // console.log('req.body = ', req.body);

  // Get params from request
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {

    if(err) throw err;

    if(!user) return res.json({success: false, msg: "User Not Found"})

    User.comparePassword(password, user.password, (err, isMatch) => {

      if(err) throw err;

      if(isMatch) {

        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800
        });

        return res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            birthday: user.birthday,
            journals: user.journals,
            cards: user.cards,
            goals: user.goals
          }
        });

      } else {
        return res.json({ success: false, msg: "Wrong Password"})
      }

    });

  })
};

UserRoutes.register = (req, res, next) => {


  let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      birthday: req.body.birthday
  });


  User.addUser(newUser, (err, user) => {
    if(err) {
        console.log('err = ', err)
        res.json({success: false, msg: 'Failed to register user'})
    } else {
        res.json({success: true, msg:'User registered'})
    }
  });
};

UserRoutes.profile = (req, res, next) => {
  // console.log('inside UserRoutes.profile');
  res.json({user: req.user})
};





module.exports = UserRoutes;