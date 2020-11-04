const express = require("express");
const path = require("path");
const productRouter = require("./routes/product");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/products", productRouter);

const server = app.listen(8000, function () {
  console.log(`Server listening http://localhost:${server.address().port}`);
});

module.exports = app;
