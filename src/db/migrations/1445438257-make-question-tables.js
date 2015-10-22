var Sequelize = require('sequelize');
var Promise = require('bluebird');
var db = require('../connection.js');
var queryInterface = db.getQueryInterface();
var merge = require('mout/object/merge');

var baseTableAttrs = {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  },
}

function createTable(tableName, attrs) {
  return queryInterface.createTable(tableName, merge(baseTableAttrs, attrs));
}

module.exports = {
  up: function () {
    return new Promise(function(ready, orNot) {
      createTable('questions', {
        body: Sequelize.TEXT,
      });
      createTable('options', {
        body: Sequelize.STRING,
        position: Sequelize.INTEGER,
        questionId: Sequelize.INTEGER.UNSIGNED,
      });
      queryInterface.addIndex('options', ['questionId'], {
        indexName: 'options_question_id',
      })
      ready();
    });
  },
  down: function () {
    return new Promise(function(ready, orNot) {
      queryInterface.dropTable('questions');
      queryInterface.dropTable('options');
      ready();
    });
  }
}