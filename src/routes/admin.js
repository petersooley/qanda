var express = require('express');
var router = express.Router();
var Question = require('../models/question');
var Option = require('../models/option');

router.get('/', function (req, res) {
  Question.findAll({
    include: [Option],
    //order: 'questions.updatedAt DESC' //fixme
  })
    .then(function(questions) {
      return res.render('admin/index', {questions: questions});
    })
    .catch(function(err) {
      console.trace(err);
      res.status(500);
      return res.render('error', {error: err});
    });

});

module.exports = router;