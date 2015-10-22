var Sequelize = require('sequelize');
var fs = require('fs');

var dbPath = __dirname + '/database.sqlite';

if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, '');
  console.log('creating file ' + dbPath);
}

var connection = new Sequelize('qanda', 'fanny', 'price', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: dbPath,
});

module.exports = connection;