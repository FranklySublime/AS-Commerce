const {MongoClient} = require('mongodb');
const fs = require('file-system')

// require('dotenv').config();
// const {MONGO_URI} = process.env;

const URI = "mongodb+srv://djeehem:j43j5h345hmnb@cluster0.alqgy.mongodb.net/slingair?retryWrites=true&w=majority"

const companies = JSON.parse(fs.readFileSync("./data/companies.json"));
const items = JSON.parse(fs.readFileSync("./data/items.json"));

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


const batchImport = async (req, res) => {
    try {

        // creates a new client
        const client = new MongoClient(URI, options);

        // connect to the client
        await client.connect();

        // connect to the database 
        const db = client.db('e-commerce');
        console.log("connected!");

        // and creating a new collection 'greetings'
        await db.collection("companies").insertMany(companies);
        console.log('Successfully added companies');

        await db.collection("items").insertMany(items);
        console.log('Successfully added items');

        client.close();
    }

    catch (err) {
        console.log("Error");
    }



};

batchImport();