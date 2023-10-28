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
        console.log("ro");
        
   }
    else if (randomChoice === 1){
        console.log("pa");
        
    }
       else if (randomChoice === 2){
        console.log("sci");
        }   
  
}

function getWinner(user, computer){
  
    if (user)
}












