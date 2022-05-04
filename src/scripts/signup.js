import signUpForm from "./components/modules/registerValidation.js"
import footerElement from "./components/footerElement.js"
import burgerToggle from "./components/burgerToggle.js"

function signUp() {
    const element = document.createElement('div')
    element.classList.add('wrapper')

    element.appendChild(burgerToggle())
    element.appendChild(signUpForm())
    element.appendChild(footerElement())

    // Code here

    return element
}
document.body.appendChild(signUp())