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
  repo.findAll()
    .then(function(questions) {
      return res.render('admin/index', {questions: questions});
    })
    .catch(catchErr(res));
});

router.post('/submit', function (req, res) {
  repo.addQuestion(req.body)
    .then(function () {
      res.redirect('/admin');
    })
    .catch(catchErr(res));

});

module.exports = router;