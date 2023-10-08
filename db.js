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
    //const getData = await airbnb.aggregate([{ $limit: 3 }])
    //let result = await accountsCollection.findOne()
    let result = await accountsCollection.aggregate([
      {
        $project: {
          position: 1
        }
      },
      { $limit: 4 }
    ])
    //await result.forEach(er => console.log(er))
    //await console.log(result);
    return await result;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = getFirst;