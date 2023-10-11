const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000
const home = require('./routes/home.js')

require('dotenv').config();
const uri = process.env.MONGO_URL;



app.use(express.urlencoded({ extended: false })); // solved bug mongo db
app.use(express.json());
app.use('/api/v1', home)

try {
  mongoose.connect(
    uri
  )
    .then(() => console.log('connected'))
    .catch(e => console.log(e));
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
} catch (error) {
  console.log(error);
}

