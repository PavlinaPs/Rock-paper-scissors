const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
console.log(possibleChoices);

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    yourChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    generateWinResult();
    generateLoseResult();
    generateDrawResult();
    getResult();
}) )

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);  /*integer*/

    switch(randomNumber) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult () {
    result = "";
    switch(true) {
        case computerChoice === userChoice:
            result = drawResult;
            break;
        case computerChoice === 'rock' && userChoice === 'paper':
        case computerChoice === 'paper' && userChoice === 'scissors':
        case computerChoice === 'scissors' && userChoice === 'rock':
            result = winResult;
            break;
        case computerChoice === 'rock' && userChoice === 'scissors':
        case computerChoice === 'paper' && userChoice === 'rock':
        case computerChoice === 'scissors' && userChoice === 'paper':
            result = loseResult;
            break;
    }
    resultDisplay.innerHTML = result;
}

const winQuotesArray = [
    "You win!", 
    "You are the best!", 
    "Not too shabby!", 
    "Pikachu chooses you!",
    "Cool",
    "I couldn\’t agree more",
    "Hear! Hear! You win!",
    "Crushin\' it"
];
let winResult

function generateWinResult() {
    winResult = winQuotesArray[Math.floor(Math.random() * winQuotesArray.length)];
};

const loseQuotesArray = [
    "You lose", 
    "Crap", 
    "Not the best choice", 
    "Better luck next time!",
    "Computer defeated!"
];
let loseResult;

function generateLoseResult() {
    loseResult = loseQuotesArray[Math.floor(Math.random() * loseQuotesArray.length)];
};

const drawQuotesArray = [
    "It\'s a draw!", 
    "Click again",
    "Carry on",
    "Stalemate",
];
let drawResult;

function generateDrawResult() {
    drawResult = drawQuotesArray[Math.floor(Math.random() * drawQuotesArray.length)];
};