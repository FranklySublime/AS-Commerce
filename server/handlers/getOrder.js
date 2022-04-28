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

const getOrder = async (req, res) => {
  try {
    await client.connect();

    const db = client.db("e-commerce");
    const order = await db.collection("order").find().toArray();

    order
      ? res.status(200).json({
          status: 200,
          data: order,
          message: "Order retrieved",
        })
      : res.status(400).json({
          status: 400,
          message: "Order could not be retrieved",
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

module.exports = { getOrder };
