const express = require("express");
const Router = express.Router();

const { createProduct, getAllProducts } = require("../controllers/product");

Router.route("/").get(getAllProducts).post(createProduct);

module.exports = Router;
