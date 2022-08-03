const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let computerChoice;
let userChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    showWinner();
  })
);

function generateComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber == 1) {
    computerChoice = "Rock";
  } else if (randomNumber == 2) {
    computerChoice = "Paper";
  } else if (randomNumber == 3) {
    computerChoice = "Scissors";
  }

  console.log("Computer Choice is " + computerChoice);
  computerChoiceDisplay.innerHTML = computerChoice;
}

function showWinner() {
  if (computerChoice === userChoice) {
    result = "DRAW!";
  }
  if (userChoice === "Rock" && computerChoice === "Paper") {
    result = "YOU DIED";
  }
  if (userChoice === "Rock" && computerChoice === "Scissors") {
    result = "YOU WIN";
  }
  if (userChoice === "Paper" && computerChoice === "Scissors") {
    result = "YOU DIED";
  }
  if (userChoice === "Paper" && computerChoice === "Rock") {
    result = "YOU WIN";
  }
  if (userChoice === "Scissors" && computerChoice === "Rock") {
    result = "YOU DIED";
  }
  if (userChoice === "Scissors" && computerChoice === "Paper") {
    result = "YOU WIN";
  }
  resultDisplay.innerHTML = result;
}
