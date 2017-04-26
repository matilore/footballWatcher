var express = require('express');
var router = express.Router();
var User = require("../models/user")

/* GET home page. */
router.post('/signup', function(req, res, next) {
  console.log(req.body)



  let newUser = User(req.body)

  newUser.save((err, user)=>{
        if (err) {
          console.log('There has been an error');
        } else{
          console.log(user)

          res.json({ user });
        }
      })



});

module.exports = router;
