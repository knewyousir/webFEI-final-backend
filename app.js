// Requires/Libraries
var path = require('path');
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');

// Model and Controllers for note objects
const noteModel = require('./api/note.model')
const notes = require('./api/note.controllers')

// Mongo DB string
const mongoUri = 'mongodb://test_user:asdf1234@ds263989.mlab.com:63989/notely';

// Declare express and add middlewares
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Routes
app.get('/api/notes', notes.findAll);
app.post('/api/notes', notes.create);
app.post('/api/notes/:id', notes.update);
app.delete('/api/notes/:id', notes.deleteOne);
app.get('/api/import', notes.importEm);

// Default route
app.get('*', function(req, res) {
    res.sendFile('/frontend/public/index.html', {root: './..'});
  });

// initialization
mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = app;