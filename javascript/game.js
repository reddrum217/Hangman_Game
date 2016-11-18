
 $(document).ready(function() {


// Turns what key the user choose into a string

	document.onkeyup = function(event){
        

        //var computerChoice = 'p';
        var computerChoice = String.fromCharCode(event.keycode);.tolowercase
        console.log(userGguess)}



      var options = ['andrea', 'beth', 'deanna', 'denise', 'glenn', 'governor', 'lizzie', 'merle', 'noah', 'penny', 'siggard', 'sophia'];
      var wins = 0;
      var losses = 0;
      var ties = 0;
      var guesses = [];
      var display = document.querySelector("#displayResults");

        // 	1. Have zombie noises playing to start
        // 2. Allow the user to press any key to start
        // 	3. Put in an array Walking Dead characters for user to choose
        // 4. Display the empty lines representing the missing letters
        // 5. Allow the user to guess 10 times
        // 6. Display the users guessed letters
        // 6. if user presses same key twice do not take away a guess
        // 7. Display the number of guesses remaining
        // 8. When user win display the charatcer's photo.
        // 9. When user wiins play sound clip of character.
        // 10. Make the game automatically choose another word.
</script>
        