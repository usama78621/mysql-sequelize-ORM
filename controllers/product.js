const db = require("../models");

const Product = db.products;

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({});
  res.status(200).send(products);
};

module.exports = {
  getAllProducts,
};
