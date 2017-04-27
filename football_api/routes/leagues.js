var express = require('express');
var router = express.Router();

const League = require("../models/league")


/* GET users listing. */
router.get('/leagues', function(req, res, next) {
  League.find({}, (err, leagues) => {
    if(err) throw err;
    res.json({leagues});
  });
});

module.exports = router;
