const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const kittySchema = new mongoose.Schema({
  name: String,
  lastname: String,
});

module.exports = mongoose.model('Kittie', kittySchema);