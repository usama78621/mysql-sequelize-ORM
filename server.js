const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("get all");
  console.log(`get all this`);
});

app.listen(port, () => {
  try {
    console.log(`Servering running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
