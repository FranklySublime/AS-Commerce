// const path = require('path')
// require('dotenv').config({path:__dirname+'../../.env'});
// const {MONGO_URI} = process.env;

const { MongoClient } = require("mongodb");

const URI =
  "mongodb+srv://djeehem:j43j5h345hmnb@cluster0.alqgy.mongodb.net/e-commerce?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(URI, options);

const createOrder = async (req, res) => {
  try {
    await client.connect();

    const db = client.db("e-commerce");
    const cartItems = await db.collection("cart").find().toArray();
    // await db.dropCollection("order")
    // await db.dropCollection("cart")
    // await db.collection("order").remove()
    // await db.collection("cart").drop()
    await db.collection("order").deleteMany({});
    await db.collection("cart").deleteMany({});

    if (cartItems) {
      const orderItems = await db.collection("order").insertMany(cartItems);

      return res.status(200).json({
        status: 200,
        data: cartItems,
        confirmation: orderItems,
        message: "Cart moved to order.",
      });
    }

    res.status(400).json({
      status: 400,
      message: "Cart could not be retrieved.",
    });
    await db.dropCollection("order");
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Server issue",
    });
  } finally {
    client.close();
  }
};

module.exports = { createOrder };
