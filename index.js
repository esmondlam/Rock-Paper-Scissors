function playAGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    // const playerChoice = prompt("What's your choice this round?");
    const computerChoice = getComputerChoice();
    let result = playARound(playerChoice, computerChoice);
    console.log(result);
    if (result.includes("Win")) playerScore++;
    if (result.includes("Lose")) computerScore++;
  }

  if (playerScore === computerScore) {
    console.log("You have tied with the computer!");
  } else {
    let winner =
      playerScore > computerScore ? "You are the Winner!" : "You lose...";
    console.log(winner);
  }
}

function getComputerChoice() {
  const CHOICE = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * CHOICE.length);
  return CHOICE[randomIndex];
}

function playARound(playerSelection, computerSelection) {
  const validPlayerSelection = playerSelection.toLowerCase();
  let result;

  if (playerSelection === computerSelection) result = "Tie!";

  if (
    (validPlayerSelection === "rock" && computerSelection === "scissors") ||
    (validPlayerSelection === "scissors" && computerSelection === "paper") ||
    (validPlayerSelection === "paper" && computerSelection === "rocks")
  ) {
    result = `You Win! ${validPlayerSelection} beats ${computerSelection}`;
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

playAGame();
