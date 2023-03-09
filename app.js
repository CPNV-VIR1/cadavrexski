//app.js
const express = require("express");
const path = require("path");
const app = express();


app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});
module.exports = app;