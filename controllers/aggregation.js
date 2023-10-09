const { MongoClient } = require("mongodb");

require('dotenv').config();
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri);

const dbname = "sample_weatherdata";
const collection_name = 'data';
const accountsCollection = client.db(dbname).collection(collection_name);

const getFirst = async (req, res) => {
  try {
    await client.connect();
    let request = await accountsCollection.aggregate([
      {
        $project: {
          position: 1
        }
      },
      { $limit: 4 }
    ]);
    let response = [];
    await request.forEach(er => response.push(er));
    res.status(200).json(response);
  } catch (error) {
    console.error(error)
  } finally {
    client.close();
  }
}
module.exports = {
  getFirst
}