import header from "./components/header.js"
import cartBreadcrump from "./components/cartBreadcrump.js"
function checkout() {
    const element = document.createElement('form')
    element.classList.add('checkout__form')
    element.appendChild(header())
    element.appendChild(cartBreadcrump()["success", "success", "active"])

    element.innerHTML = `
    <input type="text" name="" id="" placeholder="Full Name">
    <input type="text" name="" id="" placeholder="Card Number">
    <div>
        <input type="text" name="" id="" placeholder="Expire Month">
        <input type="text" name="" id="" placeholder="Expire Year">
        <input type="text" name="" id="" placeholder="CVV">
    </div>

    
    `
    // Code here
    

    return element
}
document.body.append(checkout())