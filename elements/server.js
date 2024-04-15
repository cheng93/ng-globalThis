const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(express.static(path.join(__dirname, "dist", "elements", "browser")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
