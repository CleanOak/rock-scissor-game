// Wait for DOM to finish running before game starts
//get button elements

let userScore = 0;
let computerScore =0;
let comments = "";
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
    let computerChoice = getComputerChoice();
    
    console.log('userChoice =>', userChoice)
    console.log('computerChoice =>', computerChoice)
  
    //draw conditions
    if(userChoice === "rock" && computerChoice === "rock"){
      draw()
    }
    if(userChoice === "paper" && computerChoice === "paper"){
      draw();
    }
  
    if(userChoice === "scissors" && computerChoice === "sci"){
      draw();
    }

    //user win conditions
    if(userChoice === "rock" && computerChoice === "sci"){
     youWin();
    }
    if(userChoice === "paper" && computerChoice === "rock"){
      youWin();
    }
  
    if(userChoice === "scissors" && computerChoice === "paper"){
      youWin();
    }
  
  //computer win conditions

    if(userChoice === "rock" && computerChoice === "paper"){
      compWin();
    }
    if(userChoice === "paper" && computerChoice === "sci"){
      compWin();
    }
  
    if(userChoice === "scissors" && computerChoice === "rock"){
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
    resultsComments.textContent = "You Win"
    userScoreSpan.textContent = userScore;

  }

  function compWin(){
    computerScore++;
    resultsComments.textContent = "Computer Wins"
    computerScoreSpan.textContent = computerScore;
  }

  function draw(){
    resultsComments.textContent = "It's a Draw!!!"
  }



















