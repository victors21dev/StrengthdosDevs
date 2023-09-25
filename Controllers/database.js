const { MongoClient } = require('mongodb');
const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())

const dotenv = require("dotenv")
dotenv.config();

const MONGO_CNSTRING = process.env.MONGO_CNSTRING;

// Connection URL
const url = MONGO_CNSTRING;
const client = new MongoClient(url);

// Database Name
const dbName = 'Strength';

async function main(collection_arg) {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName)
  const collection_ = db.collection(`${collection_arg}`)

  const findResult = await collection_.find({}).toArray();
  return findResult
}

module.exports = main