// funcionalidad
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');

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

const getOne = async (req, res) => {

  try {
    await client.connect();
    let result = await accountsCollection.findOne();
    res.status(200).json(result);
  } catch (error) {
    console.error(error)
  } finally {
    client.close();
  }
  // realizar una peticion a mongodb
  //   const dateRetrun = await getOne().catch(console.dir);
  //   if (dateRetrun) {
  //     res.status(200).json(dateRetrun)
  //   } else {
  //     res.status(404).json({ data: 'no se encontro nada' })
  //   }
}
// async function getOne() {
//   try {
//     await client.connect();
//     let result = await accountsCollection.findOne();
//     return await result;
//   } finally {
//     await client.close()
//   }
// }

// para hacer esto importamos nuestro esquema de gatitos
const { kittySchema } = require('../schema/kittens.js');

const postKitten = async () => {
  const Kitten = mongoose.model('Kitten', kittySchema);
  const silence = new Kitten({ name: 'Silence' });

}

module.exports = {
  getFirst,
  getOne
}