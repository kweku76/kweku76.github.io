//Cacheing the DOM - storing these elements in variables for future use
let userScore = 0; // the value of these variables changes so they are Let, not const
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const sizz_div = document.getElementById('sizz');

function getComputerChoice() { //this function controls the computers random choice
    const choices = ['rock', 'paper', 'sizz']; // an array for rock paper scissors
    const randomNumber = Math.floor(Math.random() * 3); //generate random number between 0 and 2 with Math object and floor, random methods.
    return choices[randomNumber];
}

function convertToWord(letter) { // this function changes the display of rock paper sizz id's to print Rock Paper Scissors
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Paper";
    if (letter === "sizz") return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore; //this will print the score on screen for the user - only when the user wins
    computerScore_span.innerHTML = computerScore;
    const tinyUserWd = "user".fontsize(3).sup();
    const tinyCompWd = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${tinyUserWd} beats ${convertToWord(computerChoice)}${tinyCompWd}, you win!🔥`; //using ES6 style, no quotes or pluses

    fade();
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('green-glow')
    }, 1500);

}


function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore; //this will print the score on screen for the user - only when the user wins
    computerScore_span.innerHTML = computerScore;
    const tinyUserWd = "user".fontsize(3).sup();
    const tinyCompWd = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${tinyUserWd} loses to ${convertToWord(computerChoice)}${tinyCompWd}, you lost...💩`; //using ES6 style, no quotes or pluses
    console.log('LOSE');
    fade();
}

function draw(userChoice, computerChoice) {
    const tinyUserWd = "user".fontsize(3).sup();
    const tinyCompWd = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${tinyUserWd} draws with ${convertToWord(computerChoice)}${tinyCompWd} 🥱`; //using ES6 style, no quotes or pluses
    console.log('DRAW');
    fade();
}

function game(userChoice) { // this function is for our choice
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) { // using switch statement to build different outcomes
        case 'rocksizz':
        case 'paperrock':
        case 'sizzpaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'papersizz':
        case 'sizzrock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'sizzsizz':
            draw(userChoice, computerChoice);
            break;
    }

}

function fade() {
    result_p.animate([{
        opacity: '0'
    }, {
        opacity: '1.0'
    }], {
        duration: 500,
        fill: 'forwards'
    });
}

function main() {
    rock_div.addEventListener('mousedown', function () {
        game('rock');
    })

    paper_div.addEventListener('click', function () {
        game('paper');
    })

    sizz_div.addEventListener('click', function () {
        game('sizz');
    })

}

main();