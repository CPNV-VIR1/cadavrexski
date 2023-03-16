//app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.use("/assets",express.static(__dirname + "/assets"));
module.exports = app;
