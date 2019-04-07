const express = require('express');
const router = express.Router();
const passport = require('passport');


const UserRoutes = require('./users');

console.log('UserRoutes = ', UserRoutes)

// Register
router.post('/register', UserRoutes.register);

// Authenticate
router.post('/authenticate', UserRoutes.authenticate);


router.get('/profile', passport.authenticate('jwt', {session:false}), UserRoutes.profile)


module.exports = router;