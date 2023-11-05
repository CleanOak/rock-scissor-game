// Wait for DOM to finish running before game starts
//get button elements

let userScore = 0;
let computerScore = 0;
let userScoreSpan = document.getElementById("user-score");
let computerScoreSpan = document.getElementById("computer-score");
let resultsComments = document.getElementById("display-comments");
let displayTotalWinner = document.getElementById("display-total-winner");
let userWeapon = document.getElementById("u-weapon");
let computerWeapon = document.getElementById("c-weapon");
let timeLeft = document.getElementById("countdown");
let timeSecond = 10;
let timerId = null;

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {

    button.addEventListener("click", function () {
      if (this.getAttribute("sign-type") === "reset") {
        reset();
      } else {

        let signType = this.getAttribute("sign-type");
        if (timerId==null) {
          timerId = setInterval(countDown, 1000);
        }
        playGame(signType);

      }
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

function getComputerChoice() {

  let choices = ['rock', 'paper', 'sci']
  let randomChoice = (Math.floor(Math.random() * 3));
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

function determineTotalWinner(){

  if(computerScore>userScore){
    displayTotalWinner.textContent = "Computer Wins"
  }

  if(computerScore<userScore){
    displayTotalWinner.textContent = "You Win"
  }
  if(computerScore==userScore){
    displayTotalWinner.textContent = "It's A Draw!!!"
  }
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


















