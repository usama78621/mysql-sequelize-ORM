const { db } = require("../models/index");
const { StatusCodes } = require("http-status-codes");

let Product = db.products;

const createProduct = async (req, res) => {
  let product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({});
  res.status(StatusCodes.OK).json({ products, count: products.length });
};

const getSingleProduct = async (req, res) => {
  let { id } = req.params;
  let product = await Product.findOne({ where: { id: id } });
  res.status(StatusCodes.OK).json({ product });
};

const updateProduct = async (req, res) => {
  let { id } = req.params;
  let product = await Product.update({ ...req.body }, { where: { id: id } });
  res.status(StatusCodes.OK).json({ product });
};

const deleteProduct = async (req, res) => {
  let { id } = req.params;
  await Product.destroy({ where: { id: id } });
  res.status(StatusCodes.OK).json(`product delete Successfully ${id}`);
};

module.exports = {
  getAllProducts,
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct
};
