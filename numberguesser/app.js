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

//LISTEN FOR GUESS
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    //if guess is equal to NaN OR guesss is less than min OR guess is greater than max...
    setMessage(`please enter number between ${min} and ${max}`, 'red'); //we create this function setMessage to show this message
  }


  //CHECK IF WINNER - conditional statement
  if (guess === winningNum) {
    //disable input
    guessInput.disabled = true;
    //change border colour to green
    guessInput.style.borderColor = 'green';
    //set message
    setMessage(`${winningNum} is correct! YOU WIN`, 'green');

  } else {

  }
});

// set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}