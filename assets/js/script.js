// Wait for DOM to finish running before game starts
//get button elements

let userScore = 0;
let computerScore =0;
let userScoreSpan = document.getElementById("user-score");
let computerScoreSpan = document.getElementById("computer-score");
let resultsComments = document.getElementById("display-comments");

document.addEventListener("DOMContentLoaded", function(){
        let buttons = document.getElementsByTagName("button");
        for (let button of buttons) {

        button.addEventListener("click", function(){           
        let signType = this.getAttribute("sign-type");
        
       playGame(signType);
    
        })    
    }  
})

function playGame(userChoice){
  let compterChoice = getComputerChoice();
  
  console.log('user choice =>', userChoice);
  console.log('computer choice =>', compterChoice);

  //draw conditions
  if(userChoice === "rock" && compterChoice === "rock"){
    draw();
  }

  if(userChoice === "paper" && compterChoice === "paper"){
    draw();
  }

  if(userChoice === "scissors" && compterChoice === "sci"){
    draw();
  }

  //user win conditions
  if(userChoice === "rock" && compterChoice === "sci"){
    youWin();
  }

  if(userChoice === "paper" && compterChoice === "rock"){
    youWin();
  }

  if(userChoice === "scissors" && compterChoice === "paper"){
    youWin();
  }
  
  //computer win conditions
  if(userChoice === "rock" && compterChoice === "paper"){
    compWin();
  }

  if(userChoice === "paper" && compterChoice === "sc"){
    compWin();
  }

  if(userChoice === "scissors" && compterChoice === "rock"){
    compWin();
  }

}

function getComputerChoice (){

    let choices = ['rock', 'paper', 'sci']
    let randomChoice = (Math.floor(Math.random() * 3));
    return choices[randomChoice];
   
}

function youWin(){
userScore++;
userScoreSpan.textContent = userScore;
resultsComments.textContent = "You Win";
}

function compWin(){
computerScore++;
computerScoreSpan.textContent = computerScore;
resultsComments.textContent = "Computer Wins"
}

function draw(){
resultsComments.textContent = "It's A Draw!!!"
}



















