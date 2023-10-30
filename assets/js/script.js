// Wait for DOM to finish running before game starts
//get button elements


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

  if(userChoice === "rock" && computerChoice === "rock"){
    console.log ("It's a Draw!!!");
  }
  if(userChoice === "paper" && computerChoice === "paper"){
    console.log("It's a Draw!!!");
  }

  if(userChoice === "scissors" && computerChoice === "sci"){
    console.log("It's a Draw!!!");
  }

  

}


function getComputerChoice (){

    let choices = ['rock', 'paper', 'sci']
    let randomChoice = (Math.floor(Math.random() * 3));
    return choices[randomChoice];
   
}



















