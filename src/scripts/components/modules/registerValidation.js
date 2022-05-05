import "../../../style/layout/register.scss"
import profileicon from "../../../images/profile.png"
console.log(profileicon.split("/").at(-1))

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

    var tester = true



    element.addEventListener("submit", registerValidate)

    function registerValidate(event) {
        event.preventDefault()





        function data() {

            const person = {
                username: registerUsername.value,
                first_name: "",
                last_name: "",
                email: registerEmail.value,
                profile_picture: "/images/ProfilePics/profile.png",
                phone: "",
                password: registerPassword.value,
                address: {
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


        if (registerUsername.value.length < 1) {
            errorUsername.innerHTML = "error with username"
            tester = false
        }
        else {
            errorUsername.innerHTML = ""
            tester = true
        }
        if (registerPassword.value.length < 1) {
            errorPassword.innerHTML = "error with you password"
            tester = false
        }
        else {
            errorPassword.innerHTML = ""
            tester = true
        }
        if (!registerEmail.value.match(validregex)) {
            errorEmail.innerHTML = "Your email is invalid"
            tester = false
        }
        else {
            errorEmail.innerHTML = ""
            tester = true
        }
        if (!registerRepeat.value.match(registerPassword.value) || registerRepeat.value.length < 1) {
            tester = false
            errorRepeat.innerHTML = "Your password doesnt match"

        }
        else {
            tester = true
            errorRepeat.innerHTML = ""
        }






        if (tester == true) {
            alert("Your profile has been created")
            window.location.href = "/"
            data()
        }


    }

    // Code here

    return element
}
export default signUpForm