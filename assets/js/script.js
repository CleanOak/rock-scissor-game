// Wait for DOM to finish running before game starts
//get button elements

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){

            let signType = this.getAttribute("sign-type");
            alert(signType);
            
        })
    }
})