// const path = require('path')
// require('dotenv').config({path:__dirname+'../../.env'});
// const {MONGO_URI} = process.env;

const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

const updateCart = async (req, res) => {
  const {
    _id,
    item_qty,
    // subPrice
  } = req.body;

  const query = Number(_id);
  const qty = Number(item_qty);
  // const price = Number(subPrice);

  try {
    await client.connect();

    const db = client.db("e-commerce");
    const itemFoundInCart = await db.collection("cart").findOne({ _id: query });
    const itemFoundInItems = await db
      .collection("items")
      .findOne({ _id: query });

    if (itemFoundInCart) {
      await db.collection("cart").updateOne(
        { _id: query },
        {
          $set: {
            qty,
            //  price
          },
        }
      );

      return res.status(200).json({
        status: 200,
        message: "Item updated.",
      });
    } else if (itemFoundInItems) {
      await db.collection("cart").insertOne({
        _id: uuidv4(),
        ...itemFoundInItems,
        qty,
        //  price
      });
      return res.status(200).json({
        status: 200,
        message: "Item added to the cart.",
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

module.exports = { updateCart };
