var Promise = require('bluebird');
var Sequelize = require('sequelize');
var db = require('../connection.js');

var QuestionModel = db.define('question', {
  body: Sequelize.TEXT
});
var OptionModel = db.define('option', {
  name: Sequelize.STRING
});

OptionModel.belongsTo(QuestionModel);

module.exports = {
  up: function () {
    return new Promise(function(ready, orNot) {
      db.sync({force: true});
      ready();
    });
  },
  down: function () {
    return new Promise(function(ready, orNot) {
      OptionModel.drop();
      QuestionModel.drop();
      ready();
    });
  }
}