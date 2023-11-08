

const sendFeedback = document.getElementById ("submit-button");

document.getElementById("feedback").addEventListener("submit", function(event){
    event.preventDefault();

    emailjs.init("8TpODwMV8scBpIrCj");
    sendFormButton.value = "Sending..."; //changing value of the button when sending in progress

    emailjs.sendForm("service_aza1rx3","template_x3vmt96", this)
        .then(() => {
            sendFormButton.value = "Send";
            feedBackMessage();

        }, (err) => {
            console.log(JSON.stringify(err));
        });

    });   

/**
 * Display a thank you image on the screen once the contact form has been submitted
 */
function feedBackMessage() {
    let message = `
            <div class="">
                <h1>Thank you for the feedback</h1>
            </div>
            <a href="index.html">Go back to game</a>
            `;
    document.getElementById("feedback").innerHTML = message;
}
    
