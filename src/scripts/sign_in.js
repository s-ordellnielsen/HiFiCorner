import SignFormElement from "./components/modules/Sign_in_form.js"
import header from "./components/header.js"
import footerElement from "./components/footerElement.js"

function SigninElement() {
    const element = document.createElement('div')
    element.classList.add('loginform')


    element.appendChild(header())
    element.appendChild(SignFormElement())
    element.appendChild(footerElement())
    
    
    // Code here
    
    return element
}
document.body.append(SigninElement())