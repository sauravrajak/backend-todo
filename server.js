const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const todoRoute = require("./route/todoRoute");
const PORT = process.env.PORT || 5000;
const app = express();
const MONGOURL = process.env.MONGOURL || "mongodb://localhost:27017/todo";
app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGOURL)
  .then((conn) => console.log(`connected to db ${conn.connection.host}`))
  .catch((err) => console.log(err.message));

app.use(todoRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
