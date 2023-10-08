const { MongoClient } = require("mongodb");

require('dotenv').config();
const uri = process.env.MONGO_URL;

// Replace the uri string with your connection string.
// const uri = "<connection string uri>";     --->don
const client = new MongoClient(uri);

async function getFirst() {
  try {
    //await client.connect();
    const database = client.db('database');
    const airbnb = database.collection('sample_airbnb');
    //const getData = await airbnb.aggregate([{ $limit: 3 }])
    const getData = await airbnb.findOne({})
    console.log(getData);
    //return getData;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

getFirst().catch(console.dir);

module.exports = getFirst;