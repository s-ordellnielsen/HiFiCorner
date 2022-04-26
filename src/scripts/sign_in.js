import SignFormElement from "./components/modules/Sign_in_form.js"


function SigninElement() {
    const element = document.createElement('div')
    element.classList.add('loginform')

    element.appendChild(SignFormElement())
    
    
    // Code here
    
    return element
}
document.body.append(SigninElement())