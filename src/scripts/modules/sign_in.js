var loginForm = document.getElementById("login")
var loginUsername = document.getElementById("login_username")
var loginPassword = document.getElementById("login_password")

function logindb(){
fetch("http://localhost:3001/customers", {
    method: "GET",
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify()
})
.then((response) => response.json()).then(data => console.log(data))

}
logindb()



loginForm.addEventListener("submit", login)

function login(event){
    event.preventDefault()
    
}