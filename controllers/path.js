// funcionalidad
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
// para hacer esto importamos nuestro esquema de gatitos
const Kitten = require('../schema/kittens.js');

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
  try {
    await client.connect()
    //console.log(req.body);
    const newKitten = new Kitten({ name: "mokillo" });
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