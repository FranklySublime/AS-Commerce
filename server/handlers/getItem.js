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

const getItem = async (req, res) => {
  const { _id } = req.params;
  const query = Number(_id);

  try {
    await client.connect();

    const db = client.db("e-commerce");
    const itemInfo = await db.collection("items").findOne({ _id: query });

    itemInfo
      ? res.status(200).json({
          status: 200,
          data: itemInfo,
          message: "Item retrieved",
        })
      : res.status(400).json({
          status: 400,
          message: "Item could not be retrieved",
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

module.exports = { getItem };
