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



















