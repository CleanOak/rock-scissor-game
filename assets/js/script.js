// Wait for DOM to finish running before game starts
//get button elements


document.addEventListener("DOMContentLoaded", function(){
        let buttons = document.getElementsByTagName("button");
        for (let button of buttons) {
        button.addEventListener("click", function(){

            let signType = this.getAttribute("sign-type");
            yourSignChoice(signType);
            computerChoice();
            
        })
    }
    
})

function yourSignChoice(signType){
    console.log("You have clicked on the " + signType);
    
}

function computerChoice (){
   let randomChoice = (Math.floor(Math.random() * 3));

   if (randomChoice === 0){
    console.log("rock");
   }
    else if (randomChoice === 1){
        console.log("paper");
    }
       else if (randomChoice === 2){
            console.log("scissors");
        }   
  
}





