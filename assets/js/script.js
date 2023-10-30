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
  let compterChoice = getComputerChoice();
  console.log(userChoice);

  if(compterChoice === "rock"){
    console.log("This is rock");
  }

}


function getComputerChoice (){

    let choices = ['rock', 'paper', 'sci']
    let randomChoice = (Math.floor(Math.random() * 3));
    console.log(choices[randomChoice]);
   
}



















