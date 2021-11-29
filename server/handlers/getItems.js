// require('dotenv').config();
// const {MONGO_URI} = process.env;

const { MongoClient } = require("mongodb");

const URI = "mongodb+srv://djeehem:j43j5h345hmnb@cluster0.alqgy.mongodb.net/slingair?retryWrites=true&w=majority"

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getItems = async (req, res) => {
  try {
    const client = new MongoClient(URI, options);
    await client.connect();
    console.log("connected");
  
    const db = client.db("e-commerce");
    const items = await db.collection("items").find().toArray()
  
    items ?
      res.status(200).json({
        status: 200,
        data: items,
        message: "All items retrieved"
      }) :
      res.status(400).json({
        status: 400,
        message: 'Items could not be retrieved'
      })
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Server issue" });
  }
  // client.close();
};

module.exports = {
  getItems
}
