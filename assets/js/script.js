// Wait for DOM to finish running before game starts
//get button elements


//let winner = getResuls(yourSignChoice, getComputerChoice);
let compChoice;
document.addEventListener("DOMContentLoaded", function(){
        let buttons = document.getElementsByTagName("button");
        for (let button of buttons) {

        button.addEventListener("click", function(){           
        let signType = this.getAttribute("sign-type");
        
        getWinner(yourSignChoice(signType), getComputerChoice());
        })
    }
    
})

function yourSignChoice(signType){
   console.log (signType);  
  
}

function getComputerChoice (){
    
   let randomChoice = (Math.floor(Math.random() * 3));

   if (randomChoice === 0){
        compChoice = "ro";
        console.log(compChoice);
   }
    else if (randomChoice === 1){
        compChoice = "pa";
        console.log(compChoice);
    }
       else if (randomChoice === 2){
        compChoice = "sci";
        console.log(compChoice);
        }   
  
}

function getWinner(user, computer){
  
if (user === "rock" && computer === "ro")
 
    console.log("Hello world");
}












