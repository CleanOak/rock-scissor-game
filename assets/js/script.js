/**
 * Set up variables for DOM valuse
 */

let userScore = 0;
let computerScore = 0;

let userScoreSpan = document.getElementById("user-score");
let computerScoreSpan = document.getElementById("computer-score");
let resultsComments = document.getElementById("display-comments");
let displayTotalWinner = document.getElementById("display-total-winner");
let userWeapon = document.getElementById("u-weapon");
let computerWeapon = document.getElementById("c-weapon");
let timeLeft = document.getElementById("countdown");
let timeSecond = 20;
let timerId = null;
let gameLevel = 'easy';

/**
 * Add an event listener to the document and run the main screen
 */

document.addEventListener("DOMContentLoaded", function () {

  // initialize reset button
  let resetButtons = document.querySelectorAll(".reset-button");
  resetButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      homeButton();
    });
  });


  /**
   * Initialise buttons for the game
   */
  let choiceButtons = document.getElementsByClassName("choice-button");
  for (let button of choiceButtons) {
    button.addEventListener("click", function () {
      let signType = this.getAttribute("data-sign-type");
      if (timerId == null) {
        timerId = setInterval(countDown, 1000);
      }
      playGame(signType);
    });
  }

  /**
   * Initialise levels buttons to start the game
   */
  let startGameButtons = document.getElementsByClassName("start-game");
  for (let button of startGameButtons) {

    button.addEventListener("click", function () {
      let level = this.getAttribute("data-level");
      gameLevel = level;
      showGameBoard();
    });
  }

  /**
  * Initialise rules button to show rules
  */
  let gameRulesButton = document.getElementById("rules-button");
   gameRulesButton.addEventListener("click", function () {
       rulesPage();
     });
    
  /**
* Initialise rules button to show rules
*/
  let gameFeedbackButton = document.getElementById("feedback-button");
  gameFeedbackButton.addEventListener("click", function () {
    feedbackPage();
  });


});

/**
 * Function for the logic of the game
 */

function playGame(userChoice) {
  let computerChoice = getComputerChoice();

  //display user weapon
  if (userChoice === "rock") {
    userWeapon.innerHTML = "rock";
    userWeapon.style.color = "blue";
  }
  if (userChoice === "paper") {
    userWeapon.innerHTML = "paper";
    userWeapon.style.color = "blue";
  }
  if (userChoice === "scissors") {
    userWeapon.innerHTML = "scissors";
    userWeapon.style.color = "blue";
  }

  if (userChoice === "lizard") {
    userWeapon.innerHTML = "lizard";
    userWeapon.style.color = "blue";
  }

  if (userChoice === "spock") {
    userWeapon.innerHTML = "spock";
    userWeapon.style.color = "blue";
  }

  /**
   * Display user and computer choices in real-time
   */
  if (computerChoice === "rock") {
    computerWeapon.innerHTML = "rock";
    computerWeapon.style.color = "red";
  }
  if (computerChoice === "paper") {
    computerWeapon.innerHTML = "paper";
    computerWeapon.style.color = "red";
  }
  if (computerChoice === "sci") {
    computerWeapon.innerHTML = "scissors";
    computerWeapon.style.color = "red";
  }

  if (computerChoice === "lizard") {
    computerWeapon.innerHTML = "lizard";
    computerWeapon.style.color = "red";
  }

  if (computerChoice === "spock") {
    computerWeapon.innerHTML = "spock";
    computerWeapon.style.color = "red";
  }

  /**
   * Conditions for the user and computer to draw
   */
  if (userChoice === "rock" && computerChoice === "rock") {
    draw();

  }

  if (userChoice === "paper" && computerChoice === "paper") {
    draw();

  }

  if (userChoice === "scissors" && computerChoice === "sci") {
    draw();

  }

  if (userChoice === "lizard" && computerChoice === "lizard") {
    draw();

  }

  if (userChoice === "spock" && computerChoice === "spock") {
    draw();

  }

  /**
   * Conditions for User to win
   */
  if (userChoice === "rock" && computerChoice === "sci") {
    youWin();

  }

  if (userChoice === "paper" && computerChoice === "rock") {
    youWin();

  }

  if (userChoice === "scissors" && computerChoice === "paper") {
    youWin();

  }

  if (userChoice === "lizard" && computerChoice === "paper") {
    youWin();

  }

  if (userChoice === "scissors" && computerChoice === "lizard") {
    youWin();

  }

  if (userChoice === "spock" && computerChoice === "rock") {
    youWin();

  }


  if (userChoice === "paper" && computerChoice === "spock") {
    youWin();

  }

  if (userChoice === "spock" && computerChoice === "sci") {
    youWin();

  }

  /**
   * conditions for computer to win
   */
  if (userChoice === "rock" && computerChoice === "paper") {
    compWin();

  }

  if (userChoice === "paper" && computerChoice === "sci") {
    compWin();

  }

  if (userChoice === "scissors" && computerChoice === "rock") {
    compWin();

  }

  if (userChoice === "lizard" && computerChoice === "rock") {
    compWin();

  }

  if (userChoice === "scissors" && computerChoice === "spock") {
    compWin();

  }

  if (userChoice === "paper" && computerChoice === "lizard") {
    compWin();

  }

  if (userChoice === "rock" && computerChoice === "spock") {
    compWin();

  }

  if (userChoice === "lizard" && computerChoice === "sci") {
    compWin();

  }
}

/**
 * Computer choices made based on levels
 * Easy level has has only two choices from the array
 * Medium level has three choices from the array
 * Hard level has five choices based on the array
 */
function getComputerChoice() {

  let choices;
  let randomChoice;

  if (gameLevel == 'easy') {
    choices = ['rock', 'paper'];
    randomChoice = (Math.floor(Math.random() * choices.length));
  }

  if (gameLevel == 'medium') {
    choices = ['rock', 'paper', 'sci'];
    randomChoice = (Math.floor(Math.random() * choices.length));
  }

  if (gameLevel == 'hard') {
    choices = ['rock', 'paper', 'sci', 'lizard', 'spock'];
    randomChoice = (Math.floor(Math.random() * choices.length));
  }
  return choices[randomChoice];

}

/**
 * Display user comments when winning 
 */
function youWin() {
  userScore++;
  userScoreSpan.textContent = userScore;
  resultsComments.textContent = "You Win";
}

/**
 * Display computer comments when winning
 */
function compWin() {
  computerScore++;
  computerScoreSpan.textContent = computerScore;
  resultsComments.textContent = "Computer Wins";
}

function draw() {
  resultsComments.textContent = "It's A Draw!!!";
}

function determineTotalWinner() {

  if (computerScore > userScore) {
    displayTotalWinner.textContent = "Computer Wins";
  }

  if (computerScore < userScore) {
    displayTotalWinner.textContent = "You Win";
  }
  if (computerScore == userScore) {
    displayTotalWinner.textContent = "It's A Draw!!!";
  }

  /**
   * initialize or reset game state
   * show end div and final winner
   */
  initializeGameState();
  showGameEnd();

}

/**
 * countdown to reset the game
 */
function countDown() {
  timeSecond--;
  timeLeft.innerHTML = timeSecond;

  if (timeSecond === 0 || timeSecond < 1) {
    clearInterval(timerId);
    determineTotalWinner();

  }
}

/**
 * Game board is displayed when user selects a level
 * Initial screen is hidden when user starts playing game
 * Finish screen is hidden until game ends
 */

function showGameBoard() {
  document.getElementById("game-intro").style.display = "none";
  document.getElementById("game-board").style.display = "block";
  document.getElementById("game-end").style.display = "none";
}

/**
 * Game and Initial screens are hidden to display final screen
 */
function showGameEnd() {
  document.getElementById("game-intro").style.display = "none";
  document.getElementById("game-board").style.display = "none";
  document.getElementById("game-end").style.display = "block";
}

//Button to the Rules page
function rulesPage() {

  location.href = 'rules.html';
}

//Home button
function homeButton() {
  location.href = 'index.html';
}

//Button to the feedback page
function feedbackPage() {
  location.href = 'feedback.html';
}


/**
 * Set game to initial state 
 */
function initializeGameState() {
  userScore = 0;
  computerScore = 0;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  resultsComments.textContent = 'Choose your weapon to start Game!!!';
  userWeapon.textContent = '';
  computerWeapon.textContent = '';
  timeSecond = 20;
  timeLeft.textContent = timeSecond;
  timerId = null;
  gameLevel = 'easy';
  if (timerId != null) {
    clearInterval(timerId);
  }
}















