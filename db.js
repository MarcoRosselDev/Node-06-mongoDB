const { MongoClient } = require("mongodb");

require('dotenv').config();
const uri = process.env.MONGO_URL;

// Replace the uri string with your connection string.
// const uri = "<connection string uri>";     --->don
const client = new MongoClient(uri);

const database = client.db('node-06');
const airbnb = database.collection('sample_airbnb');
const dbname = "sample_weatherdata";
const collection_name = 'data';
const accountsCollection = client.db(dbname).collection(collection_name);

async function getFirst() {
  try {
    await client.connect();
    //const getData = await airbnb.aggregate([{ $limit: 3 }])
    let result = await accountsCollection.findOne()
    //const getData = await airbnb.findOne()
    await console.log(result);
    //console.log(getData);
    //return getData;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

getFirst().catch(console.dir);

module.exports = getFirst;