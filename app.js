//app.js
const express = require("express");
const app = express();
const port = 8080
const { router } = require("./routes")

app.set('view engine', 'ejs');
app.use("/assets",express.static(__dirname + "/assets"));
app.use(express.json())
app.use("/api/v1", router)

app.get("/", (req, res) => {
  res.redirect("/api/v1/phrases")
});

app.listen(port, () => {
  console.log("Server is running on port" + port )
})

module.exports = {
  app
}
