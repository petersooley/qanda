var express = require('express');
var app = express();
var cons = require('consolidate');
var guestRouter = require('./routes/guest');
var adminRouter = require('./routes/admin');

app.engine('hbs', cons.handlebars);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use('/', guestRouter);
app.use('/admin', adminRouter);

var server = app.listen(3000, function () {
  console.log("Server running locally on port 3000");
});