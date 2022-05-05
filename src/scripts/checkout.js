import header from "./components/header.js"
import cartBreadcrump from "./components/cartBreadcrump.js"
function checkout() {
    const element = document.createElement('Main')
    element.classList.add('checkout__container')
    element.appendChild(header())
    element.appendChild(cartBreadcrump()["success", "success", "active"])

    element.innerHTML = `
    <form action="" class="checkout__form">
        <input type="text" name="" class="checkout__formNameInput" id="checkout__formNameInput" placeholder="Full Name">
        <input type="text" name="" class="checkout__formCardInput" id="checkout__formCardInput" placeholder="Card Number">
        <div>
            <input type="text" name="" class="checkout__formMonthInput" id="checkout__formMonthInput" placeholder="Expire Month">
            <input type="text" name="" class="checkout__formYearInput" id="checkout__formYearInput" placeholder="Expire Year">
            <input type="text" name="" class="checkout__formCVVInput" id="checkout__formCVVInput" placeholder="CVV">
        </div>
        <input type="submit" class="checkout__formSubmit" id="checkout__formSubmit" value="Confirm Purchase">
    </form>

    
    `
    // Code here


    return element
}
document.body.append(checkout())