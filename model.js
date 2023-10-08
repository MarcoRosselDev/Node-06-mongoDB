const { MongoClient } = require("mongodb");
require('dotenv').config();
const uri = process.env.MONGO_URL;

const client = new MongoClient(uri);

const dbname = "test-store";//si no existen esta base de datos se crea
const collectoin_name = "users";//si no existe esta coleccion se crea
const accountsCollection = client.db(dbname).collection(collectoin_name);

//conect to the database
const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Connected to the ${dbname} database`);
  } catch (error) {
    console.error(`Error connectiong to the database: ${error}`)
  }
}

const sambleAccount = {
  name: "marcus",
  lastName: "Rossel",
  last_update: new Date()
}

const manyAcounts = [
  {
    name: "eva",
    lastName: "Rossel",
    last_update: new Date()
  },
  {
    name: "lusho",
    lastName: "Rossel",
    last_update: new Date()
  }
]

const main = async () => {
  try {
    await connectToDatabase()
    //let result = await accountsCollection.insertOne(sambleAccount)
    //await accountsCollection.insertMany(manyAcounts);
    //let result = accountsCollection.find({ "name": { $in: ["eva", "lusho"] } });
    let result = accountsCollection.find()
    await result.forEach(document => console.log(document))
  } catch (error) {
    console.error(`Error inserting document: ${error}`)
  } finally {
    await client.close()
  }
}

main()