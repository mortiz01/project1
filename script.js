// start hangman game!

var wordArray=[]
var word = prompt('Player 1, submit a word for Player 2 to guess!: ');
wordArray.push(word)


// using above array we choose a random word.
var chosenWord = wordArray[0];


// global variables

var s;
var count = 0;
var answerArray = [];


// filling the answer array with underscores as required
// number of underscores correlates to the randomly selected word in the array



function startUp() {
  for (var i = 0; i < chosenWord.length; i++) {
    answerArray[i] = "_";
    document.write();
  }

  // putting in a string
  s = answerArray.join(" ");
  document.getElementById("answer").innerHTML = s;
}

function letter() {
  var letter = document.getElementById("letter").value;

  if (letter.length > 0) {
    for (var i = 0; i < chosenWord.length; i ++) {
      if (chosenWord[i] === letter) {
        answerArray[i] = letter;
        document.write('Correct guess')
      }
    } 
  }
    document.getElementById("counter").innerHTML = "Number of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }

function incorrectGuess(){

  if (chosenWord[i] !== letter) {
    count++;
    document.write('Incorrect guess')
    }
  if(count>5) {
    document.getElementById("stat").innerHTML = "You should have guessed it by now! You're dead!";
  }
