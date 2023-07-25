const output = document.getElementById("output");
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const playerPointsPara = document.getElementById("player-points");
const computerPointsPara = document.getElementById("computer-points");
const winner = document.getElementById("winner");

let userChoice;
let computerChoice;
let result = '';
let computerPoints = 0;
let playerPoints = 0;
// When user clicks on button, button id is display under user choice display 
let promp = prompt("Choose rock paper or scissors");
if (promp == "rock") {
    alert("Wow, good choice! You rock!")
} if (promp == 'scissors') {
    alert("Cut up the competition!")
} if (promp == "paper") {
    alert("You are a paper chaser!")
}

promp;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    resultsFunc()
    reset(computerPoints, playerPoints)
}))
function generateComputerChoice() {
    const randNum = Math.floor(Math.random() * possibleChoices.length) + 1;
    if (randNum === 1) {
        computerChoice = "Rock"
    }
    if (randNum === 2) {
        computerChoice = "Paper"
    }
    if (randNum === 3) {
        computerChoice = "Scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function resultsFunc(computerChoiceDisplay, userChoiceDisplay) {
    let log = ""
    if (computerChoice === userChoice) {
        resultDisplay.innerText = `${computerChoice} And ${userChoice} Is A Tie!`
    }
    if (
        (computerChoice === "Rock" && userChoice === "Scissors") ||
        (computerChoice === "Paper" && userChoice === "Rock") ||
        (computerChoice === 'Scissors' && userChoice === "Paper")
    ) {
        resultDisplay.innerText = `You Lose, ${computerChoice} Beats ${userChoice}`;
        computerPoints++;
        log = `You Lose, ${computerChoice} Beats ${userChoice}`;

    }
    if (
        (computerChoice === "Scissors" && userChoice === "Rock") ||
        (computerChoice === "Rock" && userChoicee === "Paper") ||
        (computerChoice === "Paper" && userChoice === 'Scissors')
    ) {
        resultDisplay.innerText = `You Win ${userChoice} Beats ${computerChoice}`
        playerPoints++;
        log = `You Win, ${userChoice} Beats ${computerChoice}`;
    }
    playerPointsPara.innerHTML = `${playerPoints}`;
    computerPointsPara.innerHTML = `${computerPoints}`;
    endGame(playerPoints, computerPoints);
    return log;
    reset();
}
function endGame() {
    if (computerPoints == 5) {
        computerPoints = 0;
        playerPoints = 0;
        winner.innerHTML = 'YOU LOST!'
        playerPointsPara = `${playerPoints}`;
        computerPointsPara = `${computerPoints}`;

    }
    else if (playerPoints == 5) {
        computerPoints = 0;
        playerPoints = 0;
        winner.innerHTML = 'YOU WON!';
        playerPointsPara = `${playerPoints}`;
        computerPointsPara = `${computerPoints}`;

    }
};
function reset(playerPoints, computerPoints) {
    if (endGame) {
        winner.innerHTML = 'Choose Rock Paper or Scissors';
    }

}