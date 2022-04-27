import "../../../style/style.scss"
import usericon from "../../../images/profile.png"
function SignFormElement() {
    
var typechange = ""


// html code

    const element = document.createElement('form')
    element.classList.add('login')
    element.innerHTML = `
    <img src="${usericon}" alt="" />
    <label for="login_username">skriv dit brugernavn</label>
    <input type="text" id="login_username"/>
    <span>Har du glemt dit brugernavn <a href="/" id="login_help">Klik her</a></span>
    <label for="login_password">Skriv din adgangskode</label>
    <input type="password" id="login_password" autocomplete="username" />
    <input type="checkbox" id="typechange" />
    <span>show password</span>
    <span>Har du glemt din adgangskode <a id="login_help" href="/">Klik her</a></span>
    <span id="login_error"></span>
    <input type="submit" id="login_button" value="Login" />
    <p>eller</p>
    <a href="/sign_up" id="login_button">Tilmeld</a>`


//validate 

var loginusername = element.querySelector("#login_username")
var loginpassword = element.querySelector("#login_password")
// var loginelement = element.querySelector(".login")
const loginplaceErrorMessage = element.querySelector("#login_error")
var loginErrorMessage = []
var types = element.querySelector("#typechange")

types.addEventListener("click", function(event){
    
    if(event.target.checked){
     loginpassword.type = "text"   
    }
    else{
        loginpassword.type = "password"
    }

})





element.addEventListener("submit", loginvalidate)

function loginvalidate(event){
    event.preventDefault()
    loginErrorMessage = []
    fetch(`http://localhost:3001/customers?username=${loginusername.value}&password=${loginpassword.value}`).then(response => response.json()).then(data => {
        if(data.length == 0){
            loginErrorMessage.push("there was an error with your login")
            loginplaceErrorMessage.innerHTML = loginErrorMessage
        }
        else{
            sessionStorage.setItem('user', JSON.stringify(data[0]))
            window.location.href = '/profile'
        }
        
})
}
    // Code here
    
    return element
}
export default SignFormElement