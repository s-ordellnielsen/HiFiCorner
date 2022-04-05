var loginForm = document.getElementById("login")
var loginUsername = document.getElementById("login_username")
var loginPassword = document.getElementById("login_password")

function logindb(){
    fetch("http://localhost:3001/customers", {
        method: "GET",
    })
    .then((response) => console.log(response))
}


loginForm.addEventListener("submit", login)

function login(event){
    event.preventDefault()
    
}