var loginForm = document.getElementById("login")
var loginUsername = document.getElementById("login_username")
var loginPassword = document.getElementById("login_password")
var loginErrorPassword = document.getElementById("")
var loginErrorUsername = document.getElementById("")

var logindb = fetch("http://localhost:3001/customers", {
    method: "GET",
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify()
})
.then((response) => response.json()).then(data => console.log(data))

console.log(logindb)





loginForm.addEventListener("submit", login)

function login(event){
    event.preventDefault()
    
}