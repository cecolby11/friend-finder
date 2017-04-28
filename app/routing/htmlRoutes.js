var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app) {
  //A GET Route to /survey which should display the survey page.
  app.get('/survey', function(request, response) {
    response.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // A default USE route that leads to home.html which displays the home page.
  app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../public/home.html'));
  });

  app.get('/survey/friends.js', function(request, response) {
    console.log('HERE');
    response.sendFile(path.join(__dirname, 'friends.js'));
  });
}
