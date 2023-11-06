// Wait for DOM to finish running before game starts
//get button elements

let userScore = 0;
let computerScore = 0;

let gameIntro = document.getElementById("game-intro");
let gameBoard = document.getElementById("game-board");
let gameEnd = document.getElementById("game-end");

let userScoreSpan = document.getElementById("user-score");
let computerScoreSpan = document.getElementById("computer-score");
let resultsComments = document.getElementById("display-comments");
let displayTotalWinner = document.getElementById("display-total-winner");
let userWeapon = document.getElementById("u-weapon");
let computerWeapon = document.getElementById("c-weapon");
let timeLeft = document.getElementById("countdown");
let timeSecond = 10;
let timerId = null;
let gameLevel ='easy';

document.addEventListener("DOMContentLoaded", function () {

  // initialize reset button
  let resetButtons = document.getElementsByClassName("reset-button");
  for (let button of resetButtons) {
    button.addEventListener("click", function () {
      reset();
    })
  }


  // initialize game choice buttons
  let choiceButtons = document.getElementsByClassName("choice-button");
  for (let button of choiceButtons) {
    button.addEventListener("click", function () {
      let signType = this.getAttribute("sign-type");
      if (timerId == null) {
        timerId = setInterval(countDown, 1000);
      }
      playGame(signType);
    })
  }

  // initialize start game buttons
  let startGameButtons = document.getElementsByClassName("start-game");
  for (let button of startGameButtons) {

    button.addEventListener("click", function () {
      let level = this.getAttribute("level");
      gameLevel=level;
      showGameBoard();
    })
  }

})

function playGame(userChoice) {
  let computerChoice = getComputerChoice();

  //display user weapon
  if (userChoice === "rock") {
    userWeapon.innerHTML = "rock";
    userWeapon.style.color = "blue"
  }
  if (userChoice === "paper") {
    userWeapon.innerHTML = "paper";
    userWeapon.style.color = "blue"
  }
  if (userChoice === "scissors") {
    userWeapon.innerHTML = "scissors";
    userWeapon.style.color = "blue"
  }

  //display computer weapon
  if (computerChoice === "rock") {
    computerWeapon.innerHTML = "rock";
    computerWeapon.style.color = "red"
  }
  if (computerChoice === "paper") {
    computerWeapon.innerHTML = "paper";
    computerWeapon.style.color = "red"
  }
  if (computerChoice === "sci") {
    computerWeapon.innerHTML = "scissors";
    computerWeapon.style.color = "red"
  }

  //draw conditions
  if (userChoice === "rock" && computerChoice === "rock") {
    draw();

  }

  if (userChoice === "paper" && computerChoice === "paper") {
    draw();

  }

  if (userChoice === "scissors" && computerChoice === "sci") {
    draw();

  }

  //user win conditions
  if (userChoice === "rock" && computerChoice === "sci") {
    youWin();

  }

  if (userChoice === "paper" && computerChoice === "rock") {
    youWin();

  }

  if (userChoice === "scissors" && computerChoice === "paper") {
    youWin();

  }

  //computer win conditions
  if (userChoice === "rock" && computerChoice === "paper") {
    compWin();

  }

  if (userChoice === "paper" && computerChoice === "sci") {
    compWin();

  }

  if (userChoice === "scissors" && computerChoice === "rock") {
    compWin();

  }

}

//Computer choices based on level
function getComputerChoice() {

  let choices;
  let randomChoice;

if(gameLevel == 'easy'){
  choices = ['rock', 'paper']
  randomChoice = (Math.floor(Math.random() * choices.length));
}

if(gameLevel == 'hard'){
  choices = ['rock', 'paper', 'sci']
  randomChoice = (Math.floor(Math.random() * choices.length));
}
  return choices[randomChoice];

}

function youWin() {
  userScore++;
  userScoreSpan.textContent = userScore;
  resultsComments.textContent = "You Win";
}

function compWin() {
  computerScore++;
  computerScoreSpan.textContent = computerScore;
  resultsComments.textContent = "Computer Wins"
}

function draw() {
  resultsComments.textContent = "It's A Draw!!!"
}

function determineTotalWinner() {

  if (computerScore > userScore) {
    displayTotalWinner.textContent = "Computer Wins"
  }

  if (computerScore < userScore) {
    displayTotalWinner.textContent = "You Win"
  }
  if (computerScore == userScore) {
    displayTotalWinner.textContent = "It's A Draw!!!"
  }

  //initialize or reset game state
  //show end div and final winner
  initializeGameState();
  showGameEnd();

}
//reset page
function reset() {

  //window.location.reload();
  document.location.reload();
}



//countdown to reset the game
function countDown() {
  timeSecond--;
  timeLeft.innerHTML = timeSecond;

  if (timeSecond === 0 || timeSecond < 1) {
    clearInterval(timerId);
    determineTotalWinner();

  }
}


function showGameIntro() {
  document.getElementById("game-intro").style.display = "block";
  document.getElementById("game-board").style.display = "none";
  document.getElementById("game-end").style.display = "none";
}

function showGameBoard() {
  document.getElementById("game-intro").style.display = "none";
  document.getElementById("game-board").style.display = "block";
  document.getElementById("game-end").style.display = "none";
}

function showGameEnd() {
  document.getElementById("game-intro").style.display = "none";
  document.getElementById("game-board").style.display = "none";
  document.getElementById("game-end").style.display = "block";
}

function initializeGameState() {
  userScore = 0;
  computerScore = 0;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  resultsComments.textContent = 'Choose your weapon to start Game!!!';
  userWeapon.textContent = '';
  computerWeapon.textContent = '';
  timeSecond = 10;
  timeLeft.textContent = timeSecond;
  timerId = null;
  gameLevel='easy';
  if (timerId != null) {
    clearInterval(timerId);
  }
}















