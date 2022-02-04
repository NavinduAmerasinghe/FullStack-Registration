const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//middleware
app.use(express.json);
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connected Successfully !");
  });

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`server is running on port ${port}`));
