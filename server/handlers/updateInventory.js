// const path = require('path')
// require('dotenv').config({path:__dirname+'../../.env'});
// const {MONGO_URI} = process.env;

const { MongoClient } = require("mongodb");

const URI = "mongodb+srv://djeehem:j43j5h345hmnb@cluster0.alqgy.mongodb.net/e-commerce?retryWrites=true&w=majority"

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(URI, options);

const updateInventory = async (req, res) => {
  // items_ids needs to be of this format: "item_ids": [6543, 6544, 6545]
  const  { item_ids }  = req.body
  const purcharsed_ids = Object.values(item_ids)

  try {
    await client.connect();
    console.log("connected");
  
    const db = client.db("e-commerce");
    
    // const result = await db.collection("items").updateMany(
    //   { _id : { $in : purcharsedItems }},
    //   { $inc: { "numInStock" : -1 }}
    // );

    const result = purcharsed_ids.forEach(id => {
      db.collection("items").findOneAndUpdate(
        {_id: id},
        {$inc: { "numInStock" : -1 }}
      )
    })

    // db.collection("items").find( { _id : { $in : item_ids } } );

    // forEach item in items

    // const updateDoc = {
    //   $set: {
    //     invetory_count: item.inventory_count--              
    //   },
    // };

    // const result = await collection.updateOne({}, updateDoc, {});

    return res.status(200).json({
      data: result
    })

    // result.matchedCount === result.modifiedCount ?
    //   res.status(200).json({
    //     data: result
    //   }) :
    //   res.status(400).json({
    //     status: 400,
    //     message: `Could not update inventory for ${data.matchedCount - data.modifiedCount} items(s)`
    //   })
    } 
    catch (e) {
      res.status(500).json({
        status: 500,
        message: "Server issue"
      });
  } finally {
    client.close();
  }
};

module.exports = { updateInventory };
