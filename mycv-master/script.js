document.querySelector('#contactForm').onsubmit = function(event){
    event.preventDefault();
    let firstname = document.querySelector("#contactForm").firstname.value;
    let email = document.querySelector("#contactForm").email.value;
    let message = document.querySelector("#contactForm").message.value;
   
    if((firstname.length>0)&&(email.length>0)&&(message.length>0)){
        document.querySelector("#error").style.display = "none";
        document.querySelector("#success").style.display = "block";
        document.querySelector("#success").textContent = `Thank you ${firstname}.Your message has been received.`;
    }
    else{
    document.querySelector("#success").style.display = "none";
    document.querySelector("#error").style.display = "block";
    document.querySelector("#error").textContent = `Please fill the blank`; 
    }
} 
function date(){
    let d = new Date();
    document.querySelector("#adeayo").innerHTML = d.toDateString();
}




