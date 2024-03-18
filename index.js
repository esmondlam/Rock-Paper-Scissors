const contentContainer = document.querySelector(".content-container");
const btns = document.querySelectorAll(".btns-container button");
const playerScoreText = document.querySelector("#player");
const computerScoreText = document.querySelector("#computer");

let playerScore = 0;
let computerScore = 0;

for (const btn of btns) {
  btn.addEventListener("click", (event) => {
    playAGame(event.target.textContent);
  });
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);

function reset() {
  playerScore = 0;
  computerScore = 0;

  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }

  playerScoreText.textContent = "0";
  computerScoreText.textContent = "0";

  for (const btn of btns) {
    btn.disabled = false;
  }
}

function playAGame(playerChoice) {
  const computerChoice = getComputerChoice();
  let result = playARound(playerChoice, computerChoice);
  console.log(result);
  if (result.includes("win")) playerScore++;
  if (result.includes("lose")) computerScore++;

  const resultTxt = document.createElement("p");
  resultTxt.textContent = result;
  contentContainer.appendChild(resultTxt);
  contentContainer.scrollTop = contentContainer.scrollHeight;

  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;

  endGame();
}

function endGame() {
  if (playerScore === 5) {
    contentContainer.textContent = "You have won!";
    for (const btn of btns) {
      btn.disabled = true;
    }
  }

  if (computerScore === 5) {
    contentContainer.textContent = "You have lost...";
    for (const btn of btns) {
      btn.disabled = true;
    }
  }
}

function getComputerChoice() {
  const CHOICE = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * CHOICE.length);
  console.log(randomIndex);
  return CHOICE[randomIndex];
}

function playARound(playerSelection, computerSelection) {
  const validPlayerSelection = playerSelection.toLowerCase();
  let result;

  if (validPlayerSelection === computerSelection) result = "Tie!";

  if (
    (validPlayerSelection === "rock" && computerSelection === "scissors") ||
    (validPlayerSelection === "scissors" && computerSelection === "paper") ||
    (validPlayerSelection === "paper" && computerSelection === "rock")
  ) {
    result = `You win! ${validPlayerSelection} beats ${computerSelection}`;
  }

  if (
    (validPlayerSelection === "rock" && computerSelection === "paper") ||
    (validPlayerSelection === "scissors" && computerSelection === "rock") ||
    (validPlayerSelection === "paper" && computerSelection === "scissors")
  ) {
    result = `You lose! ${computerSelection} beats ${validPlayerSelection}`;
  }

  return result;
}
