//GAME FUNCTION
// -player must guess a number between a min and max
// player gets a certain number of guesses
// notify player of guesses remaining
// notify playe of correct answer if lose
// let player choose to play again.


//GAME VALUES
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//UI ELEMENTS
const game = document.querySelector('game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

//ASSIGN UI MIN AND MAX
minNum.textContent = min;
maxNum.textContent = max;

//PLAY AGAIN EVENT LISTENER
guessBtn.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});



//LISTEN FOR GUESS
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    //if guess is equal to NaN OR guesss is less than min OR guess is greater than max...
    setMessage(`please enter number between ${min} and ${max}`, 'red'); //we create this function setMessage to show this message
  }


  //CHECK IF WINNER - conditional statement
  if (guess === winningNum) { // game over you won
    gameOver(true, `${winningNum} is correct! YOU WIN!`);

  } else {
    // WRONG NUMBER
    guessesLeft -= 1; //same as saying guessesLeft = guessesLeft minus 1
    if (guessesLeft === 0) { //if guessesLeft equals 0 then game over u lost
      gameOver(false, `GAME OVER - you lost. The correct number was ${winningNum}`);
    } else {
      //game still continues - last answer wrong
      guessInput.style.borderColor = 'purple'; //change border colour to purple
      guessInput.value = ''; //clear input
      setMessage(`${guess} is not correct, you have ${guessesLeft} guesses left.`, 'blue');
    } // tell user wrong number
  }
});

//GAME OVER FUNCTION - for both winning and losing
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red'; //ternery operator conditional statement - if won is true the text colour should be green, otherwise it should be red
  //disable input
  guessInput.disabled = true;
  //change border colour to green
  guessInput.style.borderColor = color;
  message.style.color = color;
  //set message
  setMessage(msg);

  //play again?
  guessBtn.value = 'Play Again'; //change submit button text to 'play again'
  guessBtn.className = 'play-again'; //change class name of button
}

// set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}