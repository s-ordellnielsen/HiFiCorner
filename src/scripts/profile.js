import profileDetail from "./components/modules/user_detail.js"
import footerElement from "./components/footerElement.js"
import header from "./components/header.js"

function profile() {
    const element = document.createElement('div')
    element.classList.add('wrapper')
    

    element.appendChild(header())
    element.appendChild(profileDetail())
    element.appendChild(footerElement())
    // Code here
    
    return element
}
document.body.append(profile())