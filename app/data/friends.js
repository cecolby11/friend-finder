$(document).ready(function(){
    function readJSON() {
        // creates URL as per giphy API documenation
        var queryURL = 'http://localhost:8080/api/friends';
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(result) {
            renderHTML(result);
        });
    };
    // readJSON();
    console.log('its working');
 });