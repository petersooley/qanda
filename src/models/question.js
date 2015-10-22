var Sequelize = require('sequelize');
var db = require('../db/connection.js');

module.exports = db.define('question', {
  body: Sequelize.TEXT,
});