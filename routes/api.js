const express = require('express');
const router = express.Router();
const passport = require('passport');


const UserRoutes = require('./users');
const JournalRoutes = require('./journals');


// Authentication Routes
router.post('/register', UserRoutes.register);
router.post('/authenticate', UserRoutes.authenticate);

// User Routes
router.get('/profile', passport.authenticate('jwt', {session:false}), UserRoutes.profile);

// ORGANIZE ROUTES BY WHICH FRONT END SERVICE THEIR DEFINED IN

// Journal Routes 
router.get('/getJournalById/:id', JournalRoutes.getJournalById);
router.post('/deleteJournalById', JournalRoutes.deleteJournalById);
router.post('/createJournal', JournalRoutes.createJournalEntry);
router.put('/insertJournalOID', UserRoutes.insertJournalOID);
router.post('/fetchAllJournalEntries', JournalRoutes.fetchAllJournalEntries);




module.exports = router;