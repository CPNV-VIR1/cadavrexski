//app.js
const express = require("express");
const app = express();
const port = 8080
const { router } = require("./routes")

app.use("/assets",express.static(__dirname + "/assets"));
app.use(express.json())
app.use("/api/v1", router)
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log("Server is running on port" + port )
})
