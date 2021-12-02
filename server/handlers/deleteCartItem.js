// const path = require('path')
// require('dotenv').config({path:__dirname+'../../.env'});
// const {MONGO_URI} = process.env;

const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

const URI =
  "mongodb+srv://djeehem:j43j5h345hmnb@cluster0.alqgy.mongodb.net/e-commerce?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(URI, options);

const deleteCartItem = async (req, res) => {
  const { _id } = req.params;
  const query = Number(_id);

  try {
    await client.connect();

    const db = client.db("e-commerce");

    const itemFound = await db.collection("cart").findOne({ _id: query });

    if (itemFound) {
      await db.collection("cart").deleteOne({ _id: query });
      return res.status(200).json({
        status: 200,
        message: "Item removed from cart.",
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "Item could not be retrieved",
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Server issue",
    });
  } finally {
    client.close();
  }
};

module.exports = { deleteCartItem };
