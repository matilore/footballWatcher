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
  let teamAdded = req.body.team
  let userId = jwt.verify(req.body.user_token, "ironhack").id;
  User.findByIdAndUpdate({_id: userId}, {$push: {teams: teamAdded}}, {new: true}, (err, user) => {
    if (err) {
      throw err
    }
    let lastTeamAdded = user.teams[user.teams.length - 1]
    res.json({message: "user updated", teamAdded});
  })

});


router.post('/removeteam', function(req, res, next) {
  console.log(req.body.teamName)
  let userId = jwt.verify(req.body.user_token, "ironhack").id;
  User.findByIdAndUpdate({_id: userId}, {$pull: {teams: {name: req.body.teamName}}}, {new: true}, (err, user) => {
    if (err) {
      throw err
    }
    res.json({user});
  })

});

module.exports = router;
