const Journal = require('../models/journals/JournalDBFunctions');

const JournalRoutes = {};


/* Retrieve Journal based on User ID*/
JournalRoutes.getJournalById = (req, res) => {

    let journalId = req.params.id;
    
    Journal.findById(journalId, (err, journal) => {

      if(err) {
        console.log('the following error has occurred: ', err);
        res.json({'err': err});
      } else {
        res.json({ "journal":journal });
      }

    });

}

/* Delete Journal based on its ID value*/
JournalRoutes.deleteJournalById = (req, res) => {

  let idToBeDeleted = req.body.id;

  Journal.findOneAndDelete(idToBeDeleted, (err, deletedJournal) => {

    if (err) return res.status(500).send(err);
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    const response = {
        message: "Journal Entry successfully deleted",
        journal: deletedJournal
    };
    return res.status(200).send(response);

  });

}

/* Push a new Journal Object*/
JournalRoutes.createJournalEntry = (req, res) => {
  
  const newJournalParam = req.body.journal;

  const newJournal = new Journal(newJournalParam);

  newJournal.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send({
      'newJournalObject': newJournal,
    });
  })

}

/* Return all Journals based on user's OIDs */
JournalRoutes.fetchAllJournalEntries = (req, res) => {

  const journalEntryOIDs = req.body._ids;

  const query = {
    '_id': { $in: _ids }
  }

  Journal.find(query, journalEntryOIDs, (err, docs) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send({
      'docs': docs,
    });
  })

}




module.exports = JournalRoutes;
