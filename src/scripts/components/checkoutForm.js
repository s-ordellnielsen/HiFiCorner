
export default function checkoutForm() {
    const element = document.createElement('form')
    // element.setAttribute('action', './confa/')
    element.classList.add('checkout__form')



    element.innerHTML = `
        <div class="checkout__formInputFlex">
            <label class="checkout__formInputLabel" for="checkout__formNameInput">Card Holder</label>
            <input type="text" class="checkout__formInputAll checkout__formNameInput" id="checkout__formNameInput" placeholder="Tat Yung Boug">
        </div>
        <div class="checkout__formInputFlex">
            <label class="checkout__formInputLabel" for="checkout__formCardInput">Card Number</label>
            <input type="text" class="checkout__formInputAll checkout__formCardInput" id="checkout__formCardInput" placeholder="1234 5678 8901 2345">
        </div>
        <div class="checkout__formFlexContainer">
            <div class="checkout__formInputFlex">
                <label class="checkout__formInputLabel" for="checkout__formMonth">Expire Month</label>
                <input type="text" class="checkout__formInputAll checkout__formMonthInput" id="checkout__formMonthInput" placeholder="05">
            </div>    
            <div class="checkout__formInputFlex">
                <label class="checkout__formInputLabel" for="checkout__formYearInput">Expire Year</label>
                <input type="text" class="checkout__formInputAll checkout__formYearInput" id="checkout__formYearInput" placeholder="34">
            </div>    
            <div class="checkout__formInputFlex">
                <label class="checkout__formInputLabel" for="checkout__formCVVInput">CVV</label>
                <input type="text" class="checkout__formInputAll checkout__formCVVInput" id="checkout__formCVVInput" placeholder="123">
            </div>    
        </div>
        <div class="checkout__formSubmitContainer">
            <input type="button" class="checkout__formSubmit" id="checkout__formSubmit" value="Confirm Purchase" onclick="location.href ='/cart/confa/';"/>
        </div>
    `

    return element
}