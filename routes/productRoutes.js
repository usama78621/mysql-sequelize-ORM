const express = require("express");
const Router = express.Router();

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product");

Router.route("/").get(getAllProducts).post(createProduct);
Router.route("/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = Router;
