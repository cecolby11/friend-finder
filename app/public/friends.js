$(document).ready(function(){

    // ==================
    // Friends API Query
    // ==================

    function getFriendsData() {
        var queryURL = 'http://localhost:8080/api/friends';
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(result) {
            readJSON(result);
        });
    }

    // ================
    // Process API Data
    // ================

    function readJSON(result) {
        // own answers will be last result item
        var i = result.length - 1;
        var ownAnswers = [];
        var match = [];
        // get each question answer as a single number (as string)
        ownAnswers.push(result[i].q1.charAt(0));
        ownAnswers.push(result[i].q2.charAt(0));
        ownAnswers.push(result[i].q3.charAt(0));
        ownAnswers.push(result[i].q4.charAt(0));
        ownAnswers.push(result[i].q5.charAt(0));
        
        // collect the rest of the user answers, compare them to ownAnswers, and store the resulting score in an array
        for (var i = 0; i < (result.length - 1); i++) {
            var array = [];
            var score = 0;
            // get each other user answer as a single number (as string)
            array.push(result[i].q1.charAt(0));
            array.push(result[i].q2.charAt(0));
            array.push(result[i].q3.charAt(0));
            array.push(result[i].q4.charAt(0));
            array.push(result[i].q5.charAt(0));

            // compare the difference between ownAnswers and each other user's answers by looping through and cross-checking each array item 
            for (var x = 0; x < ownAnswers.length; x++) {
                var difference = parseInt(ownAnswers[x]) - parseInt(array[x]);
                // tally the total score as each item checked (absolute value!)
                score += Math.abs(difference);
            }
            // add the final score of each other-user to the match array (index of score in match array will match index in the api friends data)
            match.push(score);
        }

        // minimum value in match array
        var bestScore = Math.min.apply(null, match);
        // find the indices at all minimums in the final match array (can be multiples)
        var bestMatches = [];
        for (var y = 0; y < match.length; y++) {
            if (match[y] === bestScore) {
                bestMatches.push(result[y]);
            }
        }
        
        // pass the best matches array to the display function to render their information on the page
        displayModal(bestMatches);    
    }

    // ===============
    // Display
    // ===============

    function displayModal(bestMatches) {
        $('#match-modal').modal('toggle');
        var modalContent = $('<div>');

        if (bestMatches.length === 0) {
            var noMatch = '<p>Sorry we need more users before we can display a match!</p>';
            modalContent.append(noMatch);
        } else {
            for(var i = 0; i < bestMatches.length; i++) {
                var matchName = '<h3 class="match-name">' + bestMatches[i].name + '</h3>';
                var matchImage = '<img class="profile-img" src='+bestMatches[i].photoURL + ' onerror="this.src=\'https://placeholdit.imgix.net/~text?txtsize=33&txt=no_photo&w=200&h=200\'">';
                modalContent.append(matchImage).append(matchName).append('<br>');
            }
        }
        $('#match-modal .modal-body').html(modalContent);
    }
    
    // ===============
    // Initialize App
    // ===============

    getFriendsData();

 });
