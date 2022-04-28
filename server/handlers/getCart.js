// const path = require('path')
// require('dotenv').config({path:__dirname+'../../.env'});
// const {MONGO_URI} = process.env;

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

const getCart = async (req, res) => {
  try {
    await client.connect();

    const db = client.db("e-commerce");
    const items = await db.collection("cart").find().toArray();

    items
      ? res.status(200).json({
          status: 200,
          data: items,
          message: "All items retrieved",
        })
      : res.status(400).json({
          status: 400,
          message: "Items could not be retrieved",
        });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Server issue",
    });
  } finally {
    client.close();
  }
};

module.exports = { getCart };
