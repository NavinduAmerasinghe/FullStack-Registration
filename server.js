const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//import the routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

//middleware
app.use(express.json);
app.use(cors());

//routes middlware
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

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
