// start hangman game!
// $( document ).ready(function() {
var wordArray=[]
var word = prompt('Player 1, submit a word for Player 2 to guess!: ');
wordArray.push(word)
alert('Player 2, the secret word has ' + word.length + ' letters')
const buttn=$('#button')
const buttn1=$('#button1')



var chosenWord = wordArray[0];
console.log(chosenWord)


  // global variables

var s;
var count = 0;
var answerArray = [];



function begin() {
  for (var i = 0; i < chosenWord.length; i++) {
    answerArray[i] = "_";
    document.write();
    console.log(answerArray)
  }

    // putting in a string
  s = answerArray.join(" ");
  $('#answer').html = s;
}

buttn.on('click', letter)

function letter(){
  var letter = $('#letter').val();

  if (letter.length > 0) {
    for (var i = 0; i < chosenWord.length; i ++) {
      if (chosenWord[i] === letter) {
        answerArray[i] = letter;
        console.log(answerArray.length)
      }
    }

    console.log('here')
    count++;
    console.log(count)
    $('#counter').text('Total Number of guesses: ' + count);
    $('#answer').text(answerArray.join(' '));
    isGameWon()
  }

  if(count > chosenWord.length) {
    $('stat').html('You should have guessed it by now!')
    alert('You should have guessed it by now!')
  }
}

function isGameWon() {
  if ( answerArray.join('') === chosenWord ){
    alert('You have guessed the word, congrats!')
  }
}

buttn1.on('click', startOver)

function startOver(){
  answerArray=[];
  count=0;
  var newWord = prompt("Player 1, choose a word for Player 2 to guess!")
  begin();
}


// })
