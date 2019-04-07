const Journal = require('../models/journals/JournalDBFunctions');
const jwt = require('jsonwebtoken');
const config = require('../config/database')

const JournalRoutes = {};


JournalRoutes.getJournalById = (req, res) => {

    let journalId = req.body.id; 
    
    Journal.getJournalById( journalId, (err, journal) => {

      if(err) {
        console.log('the following error has occurred: ', err);
        res.json({'err': err});
      } else {
        res.json({ "journal":journal });
      }

    });

}

module.exports = JournalRoutes;
