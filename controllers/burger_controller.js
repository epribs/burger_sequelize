var express = require("express");
var router = express.Router();

var burger = require("../config/orm");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObj = {
      burgers: data
    };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

router.post("/create", function(req,res) {
  burger.insertOne(
    req.body.name, function(data) {
      res.redirect("/");
  });
});

router.put("/update", function(req, res) {

  burger.updateOne(
    req.body.id, function(data) {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (data) {
    res.redirect("/");
  });
});

module.exports = router;
