const { MongoClient } = require("mongodb");
const fs = require("file-system");

require("dotenv").config();
const { MONGO_URI } = process.env;

const companies = JSON.parse(fs.readFileSync("./data/companies.json"));
const items = JSON.parse(fs.readFileSync("./data/items.json"));

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async (req, res) => {
  try {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);

    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("e-commerce");

    // and creating a new collection 'greetings'
    await db.collection("companies").insertMany(companies);

    await db.collection("items").insertMany(items);

    client.close();
  } catch (err) {}
};

batchImport();
