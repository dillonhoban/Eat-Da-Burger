var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function (req, res) {
  burger.all(function (data) {
    res.render("index", {
      burger_data: data
    });
  });
});

router.post("/burgers/create", function (req, res) {
  burger.create(req.body.name, req.body.sleepy, function (result) {
    console.log(result);
    res.redirect('/');
  });
});

router.put("/burgers/:id", function (req, res) {
  burger.update(req.params.id, function (result) {
    console.log(result);
      res.status(200).end();
    });
  });

// Export routes for server.js to use.
module.exports = router;