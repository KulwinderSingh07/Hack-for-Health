require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.DB_URL;
const dbconnection = mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    dbName: "Hack-For-Health",
  }).then(
  () => {
    console.log("db has connected");
  }
);
module.exports = dbconnection;