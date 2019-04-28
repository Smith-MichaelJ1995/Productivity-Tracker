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

// Journal Routes - fetching journal records
router.get('/getJournalById/:id', JournalRoutes.getJournalById);
router.post('/fetchJournalsWithMatchingText', JournalRoutes.fetchJournalsWithMatchingText);
router.post('/fetchAllJournalEntries', JournalRoutes.fetchAllJournalEntries);

// Journal Routes - update, delete, create a record in Journal DB
router.put('/updateJournalById', JournalRoutes.updateExistingJournalEntryById)
router.delete('/deleteJournalById', JournalRoutes.deleteJournalById);
router.post('/createJournal', JournalRoutes.createJournalEntry);

// Insert journal ID to user's collection.
router.put('/insertJournalOID', UserRoutes.insertJournalOID);

// delete journal ID from user's collection.
router.put('/deleteJournalOID', UserRoutes.deleteJournalOID)





module.exports = router;