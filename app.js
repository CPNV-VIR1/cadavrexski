//app.js
const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.use("/assets",express.static(__dirname + "/assets"));
app.listen(port);
console.log('Server started at http://localhost:' + port);
module.exports = app;
