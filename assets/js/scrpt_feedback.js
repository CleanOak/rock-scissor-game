
/**
 * Add an eventListener to listen for the submit.
 * Sends an email to site owner through emailJS if the submit is fired.
 * Script taken from the official EmailJS tutorial https://www.emailjs.com/docs/tutorial/creating-contact-form/ 
 * and Email Templates Playground environment.
 */


const sendFeedback = document.getElementById ("submit-button");

document.getElementById("feedback-form").addEventListener("submit", function(event){
    event.preventDefault();
    emailjs.init("8TpODwMV8scBpIrCj");
    sendFeedback.value = "Sending..."; //changing value of the button when sending in progress

    emailjs.sendForm("service_aza1rx3","template_x3vmt96", this)
        .then(() => {
            sendFeedback.value = "Send";
           // feedBackMessage();
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
                <h1>Thank you for the feedback</h1>
            `;
    document.getElementById("feedback-form").innerHTML = message;
     
}
    
