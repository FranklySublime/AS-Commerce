"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 4000;

const { getItems } = require("./handlers/getItems");
const { getItem } = require("./handlers/getItem");
const { getCompanies } = require("./handlers/getCompanies");
const { getCompany } = require("./handlers/getCompany");
const { updateInventory } = require("./handlers/updateInventory");
const { updateCart } = require("./handlers/updateCart");
const { getCart } = require("./handlers/getCart");
const { createOrder } = require("./handlers/createOrder");
const { deleteCartItem } = require("./handlers/deleteCartItem");
const { getOrder } = require("./handlers/getOrder");

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints
  .get("/items", getItems)
  .get("/items/:_id", getItem)
  .get("/companies", getCompanies)
  .get("/companies/:companyId", getCompany)
  .patch("/items", updateInventory)
  .post("/cart", updateCart)
  .delete("/cart/:_id", deleteCartItem)
  .get("/cart", getCart)
  .post("/order", createOrder)
  .get("/order", getOrder)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
