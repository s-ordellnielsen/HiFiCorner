var form = document.getElementById("register");
var userName = document.getElementById("register_username");
var password = document.getElementById("register_password");
var secondPassword = document.getElementById("register_repeat");
var email = document.getElementById("register_email");
var checkbox = document.getElementById("register_checkbox");





var validregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var errormessages = [];
const errormessagesPlaceholder = document.getElementById("register_errormessage")

form.addEventListener("submit", checker)


function checker(event) {
    event.preventDefault()
    errormessages = []
    
    
    
    if (!userName.value.lenght > 0) {
        errormessages.push(" Username too short")
    }
    if (!email.value.match(validregex)){
        errormessages.push(` Email is invalid`)
    }
    if(password.value < 1){
        errormessages.push( " Password is too short")  
    }
    if(secondPassword.value < 1 || !secondPassword.value.match(password.value)){
        errormessages.push(" password is incorrect")
    }
    
    if(errormessages.length !== 0){
        errormessagesPlaceholder.innerText = errormessages
    }
    else{
        alert("du er registret")
    }
    
}
// local storage 
function localItem(){
    localStorage.setItem(`${userName.value}`, `5`)
}