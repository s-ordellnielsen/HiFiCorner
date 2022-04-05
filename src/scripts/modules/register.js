
var form = document.getElementById("register");
var userName = document.getElementById("register_username");
var password = document.getElementById("register_password");
var secondPassword = document.getElementById("register_repeat");
var email = document.getElementById("register_email");
var checkbox = document.getElementById("register_checkbox");
var userLabel = document.getElementsByClassName("user-label")[0]
var emailLabel = document.getElementsByClassName("email-label")[0]
var passwordRepeatLabel = document.getElementById("password-re-label")
var passwordLabel = document.getElementById("password-label")


var randomId = Math.floor(Math.random()* 100000) + 1;
console.log(randomId)





var validregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var errormessages = [];
const errormessagesPlaceholder = document.getElementById("register_errormessage")

form.addEventListener("submit", checker)





function checker(event) {
    event.preventDefault()
    // local storage start
    function localItem(){
    const person = {
        name: userName.value,
        password: password.value,
        email: email.value
        
    }
    window.localStorage.setItem(`#${randomId}`, JSON.stringify(person))
    
    fetch("http://localhost:3001/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(person)
    }).then((response) => response.json()).then(data => console.log(data))

}
// local storage end
    errormessages = []
    
    if (userName.value.lenght === "" || !userName.value > 0 ) {
        errormessages.push(" Username too short")
        userLabel.style.color = "red"
        userName.style.border = "solid red"
    }
    else{
        userName.style.border = "none"
        userLabel.style.color = "black"
    }
    if (!email.value.match(validregex)){
        errormessages.push(` Email is invalid`)
        emailLabel.style.color = "red"
        email.style.border = "solid red"
    }
    else{
        emailLabel.style.color = "black"
        email.style.border = "none"

    }
    if(password.value < 1){
        errormessages.push( " Password is too short")
        passwordLabel.style.color = "red"
        password.style.border = "solid red"
        secondPassword.style.border = "solid red"
        passwordRepeatLabel.style.color = "red"
    }
    else{
        passwordLabel.style.color = "black"
        password.style.border = "none"
        secondPassword.style.border = "none"
        passwordRepeatLabel.style.color = "black"

    }
    if(secondPassword.value < 1 || !secondPassword.value.match(password.value)){
        errormessages.push(" password is incorrect")
        passwordLabel.style.color = "red"
        password.style.border = "solid red"
        secondPassword.style.border = "solid red"
        passwordRepeatLabel.style.color = "red"
    }
    else{

    }
    
    if(errormessages.length !== 0){
        errormessagesPlaceholder.innerText = errormessages
    }
    else{

        // alert("du er registret")
        localItem()
        // window.location.assign("/index.html")
    }
    
}


