var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  return res.render('guest/index');
});

module.exports = router;