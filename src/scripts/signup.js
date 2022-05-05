import signUpForm from "./components/modules/registerValidation.js"
import footerElement from "./components/footerElement.js"
import header from "./components/header.js"

function signUp() {
    const element = document.createElement('div')
    element.classList.add('wrapper')

    element.appendChild(header())
    element.appendChild(signUpForm())
    element.appendChild(footerElement())

    return element
}
document.body.appendChild(signUp())