var Sequelize = require('sequelize');
var db = require('../db/connection.js');
var QuestionModel = require('./question');

var OptionModel = db.define('option', {
  body: Sequelize.STRING,
  position: Sequelize.INTEGER,
});

OptionModel.belongsTo(QuestionModel);

module.exports = OptionModel;