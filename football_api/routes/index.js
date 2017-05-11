var express = require('express');
var router = express.Router();

const User = require("../models/user")

const jwt = require('jsonwebtoken');


/* GET home page. */
router.post('/', function(req, res, next) {

  let userId = jwt.verify(req.body.token, "ironhack").id;

  User.findById({_id: userId}, (err, user) => {
    if (err) {
      throw err
    }
    res.json({ user });
  })

});

module.exports = router;
