// const path = require('path')
// require('dotenv').config({path:__dirname+'../../.env'});
// const {MONGO_URI} = process.env;

const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

const URI = "mongodb+srv://djeehem:j43j5h345hmnb@cluster0.alqgy.mongodb.net/e-commerce?retryWrites=true&w=majority"

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(URI, options);

const updateCart = async (req, res) => {
  const {_id, item_qty } = req.body
  const query = Number(_id)
  const qty = Number(item_qty)

  try {
    await client.connect();
    console.log("connected");
  
    const db = client.db("e-commerce");
    const itemFoundInCart = await db.collection("cart").findOne({ _id: query })
    const itemFoundInItems = await db.collection("items").findOne({ _id: query })

    if (itemFoundInCart) {
      await db.collection("cart").updateOne({"_id": query}, { $set: {qty} })
      return res.status(200).json({
        status: 200,
        message: "Item quantity updated."
      })
    } else if (itemFoundInItems) {
      await db.collection('cart').insertOne({_id: uuidv4(), ...itemFoundInItems, qty})

      return res.status(200).json({
        status: 200,
        message: "Item added to the cart."
      })
    } else {
      res.status(400).json({
        status: 400,
        message: 'Item could not be retrieved'
      })
    }
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Server issue" });
  } finally {
    client.close();
  }
};

module.exports = { updateCart };
