const mongoose = require('mongoose');
const Note = mongoose.model('Note')

exports.findAll = function(req, res) {
    Note.find({}, function(err, results) {
        return res.send(results);
    });
};

exports.create = function(req, res) {
    Note.create(req.body, (err, note) => {
        if (err) return console.log(err);
        return res.send(note);
    });
};

exports.update = function() {
    const id = req.params.id;
    const updates = req.body;

    Note.update({ _id: id }, updates, function(err) {
        if (err) return console.log(err);
        return res.sendStatus(200);
    });
};

exports.deleteOne = function(req, res) {
    let id = req.params.id;
    Note.deleteOne({ _id: id }, result => {
      return res.sendStatus(200);
    });
};

exports.importEm = function(req, res) {
    var note1 = {
        subject: "First note",
        body: "This is the first note",
        created: 1545428549089,
    }
    var note2 = {
        subject: "Second note",
        body: "This is the second note",
        created: 1545428664003,
    }
    var note3 = {
        subject: "Third note",
        body: "This is the third note",
        created: 1545427284003,
    }
    var notesAll = {
        note1, note2, note3,
    }

    Note.create(
        note1,
        note2,
        note3,
        function(err) {
        if (err) return console.log(err);
        // return res.sendStatus(202);
        return res.send(notesAll);
        },
    )
};