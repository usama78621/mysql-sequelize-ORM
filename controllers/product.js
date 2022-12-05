const { db } = require("../models/index");
const { StatusCodes } = require("http-status-codes");

console.log(db.products);
let Product = db.products;

const createProduct = async (req, res) => {
  let product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  let products = await Product.findAll();
  res.status(StatusCodes.OK).json({ products, count: products.length });
};

module.exports = {
  getAllProducts,
  createProduct,
};
