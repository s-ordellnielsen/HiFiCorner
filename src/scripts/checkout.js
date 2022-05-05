import header from "./components/header.js"
import cartBreadcrump from "./components/cartBreadcrump.js"
import footerElement from "./components/footerElement.js"
import checkoutForm from "./components/checkoutForm.js"
function checkout() {
    const element = document.createElement('div')
    element.classList.add('checkout__formContainer')
    element.appendChild(cartBreadcrump(['success', 'success', 'active']))
    element.appendChild(checkoutForm())
    // Code here


    return element
}





document.body.append(header())
document.body.append(checkout())
document.body.append(footerElement())
