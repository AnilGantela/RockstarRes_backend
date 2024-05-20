const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const firmRoutes = require("./routes/firmRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
dotEnv.config();
app.use(cors());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MONGO CONNECTED SUCCESSFULLY");
  })
  .catch((error) => {
    console.log(error);
  });
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server Started running at ${PORT}`);
});
app.use(bodyParser.json());
app.use("/vendor", vendorRoutes);
app.use("/firm", firmRoutes);
app.use("/products", productRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/", (req, res) => {
  res.send("<h1>WELCOME to RockStarRestaurents</h1>");
});
app.post("/restaurents", (req, res) => {});
