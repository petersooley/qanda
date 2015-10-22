var Umzug = require('umzug');
var db = require('./connection');
var forEach = require('mout/collection/forEach');
var Promise = require('bluebird');

var schema = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: db,
  },
  migrations: {
    path: __dirname + '/migrations',
  }
});


module.exports = {
  setup: function() {
    return new Promise(function (ready, orNot) {
      schema.up().then(function(migrations) {
        forEach(migrations, function (migration) {
          console.log('Successfully ran migration '+migration.file);
        });
        ready();
      });
    });
  },
  teardown: function() {
    return new Promise(function (ready, orNot) {
      schema.down().then(function(migrations) {
        forEach(migrations, function (migration) {
          console.log('Successfully rolled back migration '+migration.file);
        });
        ready();
      });
    });

  }
}