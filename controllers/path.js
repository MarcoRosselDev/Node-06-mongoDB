// funcionalidad
const { MongoClient } = require("mongodb");
// para hacer esto importamos nuestro esquema de gatitos
const Kittie = require('../schema/kittens.js');

require('dotenv').config();
const uri = process.env.MONGO_URL;

// Replace the uri string with your connection string.
// const uri = "<connection string uri>";     --->don
const client = new MongoClient(uri);

const dbname = "sample_weatherdata";
const collection_name = 'data';
const accountsCollection = client.db(dbname).collection(collection_name);
const kittenCollection = client.db("kittens").collection("data");


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
}

const postKitten = async (req, res) => {
  console.log(req.body);
  try {
    await client.connect()
    const newKitten = new Kittie(req.body);
    //const newKitten = req.body
    const result = await kittenCollection.insertOne(newKitten);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

module.exports = {
  getOne,
  postKitten
}