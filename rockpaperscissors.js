// rock paper scissors app

let playerScore=0
let computerScore = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    roundWinner = "player";
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerScore++;
    roundWinner = "computer";
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

function getRandomSelection() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

const scoreInfo = document.getElementsByClassName("score-info")[0];
const scoreMessage = document.getElementsByClassName("score-msg")[0];
const playerScoreDisp = document.getElementsByClassName("player-score")[0];
const computerScoreDisp = document.getElementsByClassName("computer-score")[0];
const playerSign = document.getElementsByClassName("player-pick")[0];
const computerSign = document.getElementsByClassName("computer-pick")[0];
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

rockBtn.addEventListener("click", () => onClick("ROCK"));
paperBtn.addEventListener("click", () => onClick("PAPER"));
scissorsBtn.addEventListener("click", () => onClick("SCISSORS"));

function onClick(playerSelection) {
  if (isGameOver()) {
    alert("Game Over!");
    return;
  }

  const computerSelection = getRandomSelection();
  playRound(playerSelection, computerSelection);
  updateSelection(playerSelection, computerSelection);
  updateScore();

  if (isGameOver()) {
    alert("Game Over! \n Reload to play again!");
    return;
  }
}

function updateSelection(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "ROCK":
      playerSign.textContent = "✊";
      break;
    case "PAPER":
      playerSign.textContent = "✋";
      break;
    case "SCISSORS":
      playerSign.textContent = "✌️";
      break;
  }

  switch (computerSelection) {
    case "ROCK":
      computerSign.textContent = "✊";
      break;
    case "PAPER":
      computerSign.textContent = "✋";
      break;
    case "SCISSORS":
      computerSign.textContent = "✌️";
      break;
  }
}

function updateScore() {
  if (roundWinner === "tie") {
    scoreInfo.textContent = "It's a tie!";
  } else if (roundWinner === "player") {
    scoreInfo.textContent = "You won!";
  } else if (roundWinner === "computer") {
    scoreInfo.textContent = "You lost!";
  }

  playerScoreDisp.textContent = `Player: ${playerScore}`;
  computerScoreDisp.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === "player") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}`;
    return;
  }
  if (winner === "computer") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is beaten by ${computerSelection.toLowerCase()}`;
    return;
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(
    playerSelection
  )} ties with ${computerSelection.toLowerCase()}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

