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

//A GET Route to /survey which should display the survey page.
app.get('/survey', function(request, response) {
  response.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

// A default root route that leads to home.html which displays the home page.
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'app/public/home.html'));
});

//TODO - put routes in htmlRoutes.js instead of server.js and use module.exports/require to pull them in 
// TODO - what is a use route (home)