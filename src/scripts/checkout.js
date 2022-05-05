import header from "./components/header.js"
import cartBreadcrump from "./components/cartBreadcrump.js"




function checkout() {
    const element = document.createElement('form')
    element.classList.add('checkout__form')
    element.appendChild(cartBreadcrump(['success', 'success', 'active']))

    element.innerHTML = `
        <input type="text" name="" class="checkout__formNameInput" id="checkout__formNameInput" placeholder="Full Name">
        <input type="text" name="CardInput" class="checkout__formCardInput" id="checkout__formCardInput" placeholder="Card Number">
        <div>
            <input type="text" name="" class="checkout__formMonthInput" id="checkout__formMonthInput" placeholder="Expire Month">
            <input type="text" name="" class="checkout__formYearInput" id="checkout__formYearInput" placeholder="Expire Year">
            <input type="text" name="" class="checkout__formCVVInput" id="checkout__formCVVInput" placeholder="CVV">
        </div>
        <input type="submit" class="checkout__formSubmit" id="checkout__formSubmit" value="Confirm Purchase" onclick="">
    `


    return element
}





document.body.append(header())
document.body.append(cartBreadcrump(["success", "success", "active"]))
document.body.append(checkout())


