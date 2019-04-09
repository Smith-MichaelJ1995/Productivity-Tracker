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

JournalRoutes.deleteJournalById = (req, res) => {

  let idToBeDeleted = req.body.id;

  Journal.deleteJournalById(idToBeDeleted, (err, deletedJournal) => {

    if (err) return res.status(500).send(err);
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    const response = {
        message: "Journal Entry successfully deleted",
        journal: deletedJournal
    };
    return res.status(200).send(response);

  })

}


JournalRoutes.createJournalEntry = (req, res) => {
  
  const newJournalParam = req.body.journal;

  const newJournal = new Journal(newJournalParam);

  Journal.createJournalEntry(newJournal, err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send({
      'newJournalObject': newJournal,
    });
  })

}





module.exports = JournalRoutes;
