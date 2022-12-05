const express = require("express");
const cors = require("cors");
const { connectDb } = require("./models/index");
require("dotenv").config();
const app = express();

const productRoutes = require("./routes/productRoutes");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/product", productRoutes);

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("get all");
  console.log(`get all this`);
});

const start = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`Servering running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
