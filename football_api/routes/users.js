var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');


const User = require("../models/user")
const Team = require("../models/team")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/addteam', function(req, res, next) {
  console.log(req.body)

  let userId = jwt.verify(req.body.user_token, "ironhack").id;
  User.findByIdAndUpdate({_id: userId}, {$push: {teams: req.body.team}}, (err, user) => {
    if (err) {
      throw err
    }
    res.json({message: "user updated"});
  })

});

module.exports = router;
