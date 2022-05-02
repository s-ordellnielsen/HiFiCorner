import "../../../style/layout/register.scss"
import profileicon from "../../../images/profile.png"

function signUpForm() {
    const element = document.createElement('form')
    element.classList.add('register')
    element.innerHTML = `
    <h1>Register</h1>

    <label for="register_username">Username</label>
    <input type="text" class="register_username"/>
    <span class="errormessage_username"></span>
    <label for="register_email">Email</label>
    <input type="email" class="register_email" />
    <span class="errormessage_email"></span>
    <label for="register_password">Password</label>
    <input type="password" class="register_password" />
    <span class="errormessage_password"></span>
    <label for="register_password_repeat">Repeat password</label>
    <input type="password" class="register_password_repeat" />
    <span class="errormessage_repeat"></span>
    <div class="register_checkbox">
        <input type="checkbox" name="" id="register_inputcheckbox" />
        <label for="register_inputcheckbox">Subscribe to the newsletter</label>
    </div>
    <input type="submit" value="Registre" class="register_submit" />

    `
    //html stopper her

    var registerUsername = element.querySelector(".register_username")
    var registerEmail = element.querySelector(".register_email")
    var registerPassword = element.querySelector(".register_password")
    var registerRepeat = element.querySelector(".register_password_repeat")
    var validregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // errormessages


    var errorUsername = element.querySelector(".errormessage_username")
    var errorEmail = element.querySelector(".errormessage_email")
    var errorPassword = element.querySelector(".errormessage_password")
    var errorRepeat = element.querySelector(".errormessage_repeat")

    var errorUsernamePlaceholder = []
    var errorPasswordPlaceholder = []
    var errorEmailPlaceholder = []
    var errorRepeatPlaceholder = []

    console.log(errorPassword)

    registerUsername.addEventListener("input", function(){
        if(registerUsername.value.length < 1){
            errorUsername.style.display = "inline"

        }
        
    })
    registerPassword.addEventListener("input", function(){
        if(registerPassword.value.length < 1 || registerPassword.value.match(registerRepeat)){
            errorPassword.style.display = "inline"
            errorRepeat.style.display = "inline"

        }
        
    })

    element.addEventListener("submit", registerValidate)
    
    function registerValidate(event) {
        event.preventDefault()
        
        function data() {
            
            const person = {
                username: registerUsername.value,
                first_name: "",
                last_name: "",
                email: registerEmail.value,
                profile_picture: profileicon,
                phone: "",
                password: registerPassword.value,
                adress: {
                    street: "",
                    number: "",
                    apartment: "",
                    zip_code: "",
                    city: "",
                    country: "",
                    states: ""
                },
                favorites: [],
                orders: [

                ]
                
            }
            console.log(person)
            
            fetch("http://localhost:3001/customers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(person)
            }).then(response => response.json()).then(profiledata => console.log(profiledata))
        }
        

        if(registerUsername.value.length < 1){
            errorUsernamePlaceholder.push("Your username was too short")
        }
        if(registerPassword.value.length < 1){
            errorPasswordPlaceholder.push("Error with your password")
            console.log(errorPasswordPlaceholder)

        }
        if(!registerEmail.value.match(validregex)){
            errorEmailPlaceholder.push("Your email is invalid")
        }
        if(!registerRepeat.value.match(registerPassword.value)){
            errorRepeatPlaceholder.push("Your password doesnt match")
        }



        if(!errorEmailPlaceholder.length == 0){
            errorEmail.innerHTML = errorEmailPlaceholder
        }
        if(!errorPasswordPlaceholder.length == 0){
            errorPassword.innerHTML = errorPasswordPlaceholder
        }
        if(!errorRepeatPlaceholder.length == 0){
            errorRepeat.innerHTML = errorRepeatPlaceholder
        }
        if(!errorUsernamePlaceholder.length == 0){
            errorUsername.innerHTML = errorUsernamePlaceholder
        }

        else{
            data()
            window.location.href = "/"
        }
        
        
    }

    // Code here

    return element
}
export default signUpForm