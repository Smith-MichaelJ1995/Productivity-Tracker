const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');


const UserRoutes = require('./users');
const JournalRoutes = require('./journals');


// User Routes
router.post('/register', UserRoutes.register);
router.post('/authenticate', UserRoutes.authenticate);
router.get('/profile', passport.authenticate('jwt', {session:false}), UserRoutes.profile);

// ORGANIZE ROUTES BY WHICH FRONT END SERVICE THEIR DEFINED IN

// Journal Routes 
router.post('/getJournalById', JournalRoutes.getJournalById);
router.post('/deleteJournalById', JournalRoutes.deleteJournalById);
router.post('/createJournal', JournalRoutes.createJournalEntry);


module.exports = router;