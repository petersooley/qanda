require('dotenv').load();

var Sequelize = require('sequelize');
var fs = require('fs');

var dbDialect = process.env.DB_DIALECT;
var dbName    = process.env.DB_NAME;
var dbHost    = process.env.DB_HOST;
var dbPort    = process.env.DB_PORT;
var dbUser    = process.env.DB_USER;
var dbPass    = process.env.DB_PASS;

if (!dbDialect || !dbName || !dbHost || !dbUser) {
  console.log({
    dialect: dbDialect,
    name: dbName,
    host: dbHost,
    user: dbUser,
  });
  throw "Missing DB configurations. Make sure you have a .env file.";
}

if (dbPass == '') {
  dbPass = null;
}

var connection;

switch(dbDialect) {
  case 'sqlite': {
    var dbPath = __dirname + '/database.sqlite';

    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, '');
      console.log('creating file ' + dbPath);
    }

    connection = new Sequelize(dbName, dbUser, dbPass, {
      host: dbHost,
      dialect: 'sqlite',
      storage: dbPath,
    });

    break;
  }
  case 'mysql': {
    var opts = {
      host: dbHost,
      dialect: 'mysql',
    };

    if (dbPort) {
      opts.port = dbPort;
    }
    connection = new Sequelize(dbName, dbUser, dbPass, opts);
    break;
  }

  default:
    throw "Don't know what you talkin' bout. What even is '"+dbDialect+"'?";

}


module.exports = connection;