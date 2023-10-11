const mongoose = require('mongoose');

const kittySchema = new mongoose.Schema({
  name: String,
  lastname: String,
  age: Number
});

module.exports = mongoose.model('Kittie', kittySchema);