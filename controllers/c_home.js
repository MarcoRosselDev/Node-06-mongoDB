// funcionalidad
const { MongoClient } = require("mongodb");

require('dotenv').config();
const uri = process.env.MONGO_URL;

// Replace the uri string with your connection string.
// const uri = "<connection string uri>";     --->don
const client = new MongoClient(uri);

const dbname = "sample_weatherdata";
const collection_name = 'data';
const accountsCollection = client.db(dbname).collection(collection_name);

async function getFirst() {
  try {
    await client.connect();
    let request = await accountsCollection.aggregate([
      {
        $project: {
          position: 1
        }
      },
      { $limit: 4 }
    ])
    let response = [];
    await request.forEach(er => response.push(er))
    return await response;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function getOne() {
  try {
    await client.connect();
    let result = await accountsCollection.findOne();
    return await result;
  } finally {
    await client.close()
  }
}

module.exports = {
  getFirst,
  getOne
}