var express = require("express");
var router = express.Router();
var dbConnection = require("../dbconnection");

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/cart", function (req, res, next) {
  res.render("cart");
});

module.exports = router;
