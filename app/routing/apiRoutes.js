var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app) {
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get('/api/friends', function(request, response) {
    // TODO
    response.send('it works!');
  });


  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post('/api/friends', function(request, response) {
    // TODO
    var newFriend = request.body;
    console.log(newFriend);
    response.json(newFriend);
  });
}