function loginElement(){

    var loginForm = document.getElementById("login")
    var loginUsername = document.getElementById("login_username")
    var loginPassword = document.getElementById("login_password")
    var loginErrorPassword = document.getElementById("login_errorpassword")
var loginErrorUsername = document.getElementById("login_errorusername")
var loginUErrormessage = []
var loginPErrormessage = []



function db(customers){
    
    customers.find(element => element.username === loginUsername.value)
}
function Pdb(costumers){
    costumers.find(element => element.password === loginPassword.value)
    console.log(customers.find(element => element.password === loginPassword.value))
}




loginForm.addEventListener("submit", login)

function login(event){
    event.preventDefault()
    fetch(`http://localhost:3001/customers?username=${loginUsername.value}&password=${loginPassword.value}`).then(response => response.json()).then(data => {
        
        if(data.length == 0){
            loginUErrormessage.push(" there was an error with your login")
        }
        else{
            sessionStorage.setItem("user", JSON.stringify(data[0]))
            window.location.href = "profile.html"
            
        }
    })
}
var loginE = document.querySelector("#login")
if(logine){
    loginElement()
}
    
    
    
    
    
    // if(!loginUsername.value ){
    //     loginUErrormessage.push(" there is no username")
    // }
    // else{
        
   
    // }
    // if(!loginPassword.value){
    //     loginPErrormessage.push(" there was an error with the password")
    // }
    // else{
    //     fetch("http://localhost:3001/customers").then(response => response.json()).then(data => Pdb(data))
    // }
    // if(loginUErrormessage.length !== 0){
    //     loginErrorUsername.innerText = loginUErrormessage
    // }
    // if(loginErrorPassword.length !== 0){
    //     loginErrorPassword.innerText = loginPErrormessage
    // }
    // if(!loginErrorPassword && !loginErrorUsername){
    //     window.location.href = "profile.html"
    // }
    
    
}