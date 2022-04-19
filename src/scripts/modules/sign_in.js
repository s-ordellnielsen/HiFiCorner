var loginForm = document.getElementById("login")
var loginUsername = document.getElementById("login_username")
var loginPassword = document.getElementById("login_password")
var loginErrorPassword = document.getElementById("login_errorpassword")
var loginErrorUsername = document.getElementById("login_errorusername")
var loginUErrormessage = []
var loginPErrormessage = []



function db(customers){
    console.log(customers.find(element => element.username === loginUsername.value))
    customers.find(element => element.username === loginUsername.value)
}



console.log(loginForm)

loginForm.addEventListener("submit", login)

function login(event){
    event.preventDefault()
    
    



    if(!loginUsername.value ){
        loginUErrormessage.push(" there is no username")
    }
    else{
        console.log(loginUsername.value)
        fetch("http://localhost:3001/customers").then(response => response.json()).then(data => db(data))
   
    }
    if(!loginPassword.value){
        loginPErrormessage.push(" there was an error with the password")
    }
    else{
        fetch("http://localhost:3001/customers").then(response => response.json()).then(data => db(data))
    }
    if(loginUErrormessage.length !== 0){
        loginErrorUsername.innerText = loginUErrormessage
    }
    if(loginErrorPassword.lenght !== 0){
        loginErrorPassword.innerText = loginPErrormessage
    }
    if(loginErrorPassword == 0 & loginErrorUsername.lenght == 0){
        window.location.assign("/src/pages/profile")
    }
    
    
}