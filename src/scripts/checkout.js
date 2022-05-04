import header from "./components/header.js"
import cartBreadcrump from "./components/cartBreadcrump.js"
function checkout() {
    const element = document.createElement('form')
    element.classList.add('checkout__form')
    element.appendChild(header())
    element.appendChild(cartBreadcrump()[""])

    element.innerHTML = `
    
    `
    // Code here
    

    return element
}
document.body.append(checkout())