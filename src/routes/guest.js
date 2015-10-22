var express = require('express');
var router = express.Router();
var repo = require('../models/repo');


function catchErr(res) {
  return function(err) {
    console.trace(err);
    res.status(500);
    return res.render('error', {error: err});
  }
}

router.get('/', function (req, res) {
  return repo.findAllShuffle()
    .then(function(questions) {
      return res.render('guest/index', {questions: questions});
    })
    .catch(catchErr(res));

});

module.exports = router;