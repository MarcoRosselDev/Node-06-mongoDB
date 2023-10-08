const { MongoClient } = require("mongodb");

require('dotenv').config();
const uri = process.env.MONGO_URL;

// Replace the uri string with your connection string.
// const uri = "<connection string uri>";     --->don
const client = new MongoClient(uri);

async function getFirst() {
  try {
    const database = client.db('Cluster0');
    const airbnb = database.collection('sample_airbnb');
    // Query for a movie that has the title 'Back to the Future'
    //const query = { title: 'Back to the Future' };
    //const movie = await movies.findOne(query);
    //console.log(movie);
    const get10 = await airbnb.aggregate([{ $limit: 10 }])
    //console.log(get10);
    return get10;
    //console.log(get10);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//run().catch(console.dir);

module.exports = getFirst;