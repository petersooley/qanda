var express = require('express');
var router = express.Router();
var repo = require('../models/repo');
var OptionModel = require('../models/option');


function catchErr(res) {
  return function(err) {
    console.trace(err);
    res.status(500);
    return res.render('error', {error: err});
  }
}

function noop(res) {
  return function() {
    console.log('nothing to do');
    return res.send('mk');
  }
}

router.get('/', function (req, res) {
  return repo.findAllShuffle()
    .then(function(questions) {
      return res.render('guest/index', {questions: questions});
    })
    .catch(catchErr(res));
});

router.post('/submit', function (req, res) {
  var meh = noop(res);
  var success = function () {
    return res.send('great!');
  }

  if (req.body && req.body.choice) {
    return OptionModel.findById(req.body.choice)
      .then(function(option) {
        option.increment(['votes'])
          .then(success).catch(meh);
      })
      .catch(catchErr(res));
  }

  return meh();
});

module.exports = router;