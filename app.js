const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// Database Config File
const config = require('./config/database')

// Database Connect
mongoose.connect(config.database, config.urlParser);

// On connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database: ' + config.database);
})

// On connection Error
mongoose.connection.on('error', () => {
  console.log('Database error: ' + err);
})

const app = express();

const users = require('./routes/users');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser Middleware
app.use( bodyParser.json() )

// Passport Middleware
app.use( passport.initialize() );
app.use( passport.session() );

// Load passport config
require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});

// Start Server
app.listen(port, () => {
  console.log('server started on port ' + port);
})