var express = require("express");
var router = express.Router();
var dbConnection = require("../dbconnection");

router.get("/", function (req, res, next) {
  res.render("index");
});

let addedDrinks = {};

router.post("/cart", function (req, res, next) {
  addedDrinks = req.body;
});

router.get("/cart", function (req, res, next) {
  let totalPrice = 0;
  for (drinks in addedDrinks) {
    totalPrice += Number(addedDrinks[drinks]["price"]);
  }
  res.render("cart", { addedDrinks, totalPrice });
});

router.get("/payment", function (req, res, next) {
  res.render("payment");
});

router.post("/checkout", function (req, res, next) {
  if (req.body.fullName == undefined && req.body.name == undefined) {
    res.render("payment", {
      message: "Put your full name and a valid phone number",
    });
  } else if (
    req.body.fullName == "" ||
    req.body.fullName.length < 5 ||
    req.body.phone.length < 11
  ) {
    console.log(req.body.fullName.length);
    console.log(req.body.phone.length);
    res.render("payment", {
      message: "Put your full name and a valid phone number",
    });
  } else {
    dbConnection.query(
      "INSERT INTO drinks.orders VALUES()",
      (err, rows, fields) => {
        if (err) throw err;
        console.log("Order Placed");
        console.log(rows);
        id = rows.insertId;
        res.render("checkout", {
          message: `Order has been placed. \nYour order Id ${id}`,
        });
      }
    );
  }
});

module.exports = router;
