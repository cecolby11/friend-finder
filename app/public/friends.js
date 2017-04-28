$(document).ready(function(){
    function readJSON() {
        // creates URL as per giphy API documenation
        var queryURL = 'http://localhost:8080/api/friends';
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(result) {
            console.log(result);
            var i = result.length - 1;
            var self = [];
            var match = [];
            self.push(result[i].q1.charAt(0));
            self.push(result[i].q2.charAt(0));
            self.push(result[i].q3.charAt(0));
            self.push(result[i].q4.charAt(0));
            self.push(result[i].q5.charAt(0));
            console.log('Self array: ' + self);
            
            for (var i = 0; i < (result.length - 1); i++) {
                var array = [];
                var score = 0;
                array.push(result[i].q1.charAt(0));
                array.push(result[i].q2.charAt(0));
                array.push(result[i].q3.charAt(0));
                array.push(result[i].q4.charAt(0));
                array.push(result[i].q5.charAt(0));
                console.log('Other array:  ' + array + ' at ' + i);
                for (var x = 0; x < self.length; x++) {
                    var difference = parseInt(self[x]) - parseInt(array[x]);
                    score += Math.abs(difference);
                    console.log('Score in loop ' + score + ' at ' + x);
                    
                }
                match.push(score);
            }
            console.log(match);
            var best = Math.min.apply(null, match);
            console.log('lowest value ' + match.indexOf(best));
            var finalArray = [];
            for (var y = 0; y < match.length; y++) {
                if (match[y] === best) {
                    finalArray.push(result[y]);
                }
            }
            console.log(finalArray);
            displayModal(finalArray);    
        });
    };
    
    readJSON();
    console.log('its working');
    
    $('#match-modal').modal('toggle');
 });