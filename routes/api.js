const express = require('express');
const router = express.Router();
const passport = require('passport');


const UserRoutes = require('./users');
const JournalRoutes = require('./journals');


// User Routes
router.post('/register', UserRoutes.register);
router.post('/authenticate', UserRoutes.authenticate);
router.get('/profile', passport.authenticate('jwt', {session:false}), UserRoutes.profile);


// Journal Routes 
router.post('/journal', JournalRoutes.getJournalById)


module.exports = router;