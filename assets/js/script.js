// Wait for DOM to finish running before game starts
//get button elements

let userScore = 0;
let computerScore =0;
let userScoreSpan = document.getElementById("user-score");
let computerScoreSpan = document.getElementById("computer-score");
let resultsComments = document.getElementById("display-comments");
let userWeapon = document.getElementById("u-weapon");
let computerWeapon = document.getElementById("c-weapon");


document.addEventListener("DOMContentLoaded", function(){
        let buttons = document.getElementsByTagName("button");
        for (let button of buttons) {

        button.addEventListener("click", function(){     
          if(this.getAttribute("sign-type") === "reset"){
             // console.log("reset button");
              reset();
              
          } else {    
        let signType = this.getAttribute("sign-type");
        
       playGame(signType);
           }
        })    
    }  
})

function playGame(userChoice){
  let computerChoice = getComputerChoice();
  
 //display user weapon
 if (userChoice === "rock"){
  userWeapon.innerHTML = "rock";
  userWeapon.style.color = "blue"
 }
 if (userChoice === "paper"){
  userWeapon.innerHTML = "paper";
  userWeapon.style.color = "blue"
 }
 if (userChoice === "scissors"){
  userWeapon.innerHTML = "scissors";
  userWeapon.style.color = "blue"
 }

 //display computer weapon
 if (computerChoice === "rock"){
  computerWeapon.innerHTML = "rock";
  computerWeapon.style.color = "red"
 }
 if (computerChoice === "paper"){
  computerWeapon.innerHTML = "paper";
  computerWeapon.style.color = "red"
 }
 if (computerChoice === "sci"){
  computerWeapon.innerHTML = "scissors";
  computerWeapon.style.color = "red"
 }
  
  //draw conditions
  if(userChoice === "rock" && computerChoice === "rock"){
    draw();
    
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

function reset(){
  
  window.location.reload();
}



















