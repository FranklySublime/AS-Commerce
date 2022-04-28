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

const updateInventory = async (req, res) => {
  // items_ids needs to be of this format: "item_ids": [6543, 6544, 6545]

  const { item_ids } = req.body;
  const purcharsed_ids = Object.values(item_ids);

  try {
    await client.connect();

    const db = client.db("e-commerce");

    // const result = await db.collection("items").updateMany(
    //   { _id : { $in : purcharsedItems }},
    //   { $inc: { "numInStock" : -1 }}
    // );

    for (let i = 0; i < purcharsed_ids.length; i++) {
      await db
        .collection("items")
        .findOneAndUpdate(
          { _id: purcharsed_ids[i] },
          { $inc: { numInStock: -1 } }
        );
    }

    // const result = purcharsed_ids.forEach((id) => {
    //   await db
    //     .collection("items")
    //     .findOneAndUpdate({ _id: id }, { $inc: { numInStock: -1 } });
    // });

    // db.collection("items").find( { _id : { $in : item_ids } } );

    // forEach item in items

    // const updateDoc = {
    //   $set: {
    //     invetory_count: item.inventory_count--
    //   },
    // };

    // const result = await collection.updateOne({}, updateDoc, {});

    return res.status(200).json({
      message: "all good!",
    });

    // result.matchedCount === result.modifiedCount ?
    //   res.status(200).json({
    //     data: result
    //   }) :
    //   res.status(400).json({
    //     status: 400,
    //     message: `Could not update inventory for ${data.matchedCount - data.modifiedCount} items(s)`
    //   })
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: "Server issue",
    });
  } finally {
    client.close();
  }
};

module.exports = { updateInventory };
