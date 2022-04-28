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

const getCompany = async (req, res) => {
  const { companyId } = req.params;
  const query = Number(companyId);

  try {
    await client.connect();

    const db = client.db("e-commerce");
    const companyInfo = await db
      .collection("companies")
      .findOne({ _id: query });

    companyInfo
      ? res.status(200).json({
          status: 200,
          data: companyInfo,
          message: "Company retrieved",
        })
      : res.status(400).json({
          status: 400,
          message: "Company could not be retrieved",
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

module.exports = { getCompany };
