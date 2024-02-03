const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/toDoRestAPI');

const Table = mongoose.model('tasks', {
    title: String,
    description: String
});

const ObjectId = mongoose.Types.ObjectId;

module.exports = { Table, ObjectId };