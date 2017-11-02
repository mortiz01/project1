// start hangman game!
// $( document ).ready(function() {

// No commented out code in production!
// 'start hangman game! => ok!
// Commented out 'document.ready' => not ok!'
var wordArray=[]
var word = prompt('Player 1, submit a word for Player 2 to guess!: ');
wordArray.push(word)
alert('Player 2, the secret word has ' + word.length + ' letters')
const buttn=$('#button')
const buttn1=$('#button1')
// Good job using ids to target elements


var chosenWord = wordArray[0];
console.log(chosenWord)
// Remove console.logs from Production branch, assuming they were used just for testing

// global variables
// I like the global variables section, but maybe sure all your global variables are here
var s;
var count = 0;
var answerArray = [];



function begin() {
  for (var i = 0; i < chosenWord.length; i++) {
    answerArray[i] = "_";
    document.write(); // Don't think you need this
    console.log(answerArray)
  }

    // putting in a string
  s = answerArray.join(" ");
  $('#answer').html = s;
  // Correct JQUERY syntax is $('#answer').html(s);
}

buttn.on('click', letter)

function letter(){
  var letter = $('#letter').val();
  // Good job getting the letter from the input
  // Look into 'maxlength' attribute for your element if you want to limit how many letters can be entered in.
  if (letter.length > 0) {
    for (var i = 0; i < chosenWord.length; i ++) {
      if (chosenWord[i] === letter) {
        answerArray[i] = letter;
        console.log(answerArray.length)
      }
    }
    // Good job figuring out if the guess is in the word

    console.log('here')
    // Again, you should ditch the console logs
    count++;
    console.log(count)
    $('#counter').text('Total Number of guesses: ' + count);
    $('#answer').text(answerArray.join(' '));
    isGameWon()
  }

  if(count > chosenWord.length) {
    $('stat').html('You should have guessed it by now!')
    alert('You should have guessed it by now!')
    // Ouch
  }
}

function isGameWon() {
  if ( answerArray.join('') === chosenWord ){
    alert('You have guessed the word, congrats!')
  }
  // Good use of join
}

buttn1.on('click', startOver)

function startOver(){
  answerArray=[];
  count=0;
  var newWord = prompt("Player 1, choose a word for Player 2 to guess!")
  begin();
}
// Begin is a little screwy, but I think I can see where you were going, trying to make the answer have blank letters until the user guessed correctly.  You're pretty close to making that work.  I would try clean up begin a bit, and get your prompts in the begin function, then you could make a start game button.

// Good job overall.  Your functionality is there.  You have a few more methods and arrays then you need to that are cluttering up your code.  Try to clean up what you have and then try to expand upon the logic. Then add in some bells and whistles to make it more exciting/interactive.


// })
