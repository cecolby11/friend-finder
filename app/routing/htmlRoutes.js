// DEPENDENCIES
var express = require('express');
var app = express();
var path = require('path');

// ROUTES
module.exports = function(app) {
    app.get("/", function(request, response) {
        response.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    app.get("/survey", function(request, response) {
        response.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    // serve up static files
    app.use(express.static(__dirname + "/../public"));
};