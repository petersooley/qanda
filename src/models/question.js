var Sequelize = require('sequelize');
var db = require('../db/connection.js');
var OptionModel = require('./option');

var QuestionModel = db.define('question', {
  body: Sequelize.TEXT,
});

QuestionModel.hasMany(OptionModel);
OptionModel.belongsTo(QuestionModel);

module.exports = QuestionModel;