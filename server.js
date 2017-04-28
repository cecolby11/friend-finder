// =============
// DEPENDENCIES
// =============

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = 8080;

var app = express();

// configuration setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// listener 
app.listen(port, function(error) {
  if(error) {
    console.log(error);
  } else {
    console.log('listening on ' + port);
  }
});

var htmlRoutes = require('./app/routing/htmlRoutes')(app);
var apiRoutes = require('./app/routing/apiRoutes')(app);


//TODO - put routes in htmlRoutes.js instead of server.js and use module.exports/require to pull them in 
// TODO - what is a use route (home)