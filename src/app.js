var express = require('express');
var cons = require('consolidate');
var nunjucks = require('nunjucks');
var guestRouter = require('./routes/guest');
var adminRouter = require('./routes/admin');

var app = express();

cons.requires.nunjucks = nunjucks.configure(__dirname+'/views', {
  autoescape: true,
});

app.engine('html', cons.nunjucks);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/', guestRouter);
app.use('/admin', adminRouter);

app.use(express.static(__dirname + '/assets'));

var server = app.listen(3000, function () {
  console.log("Server running locally on port 3000");
});