import header from "./components/header.js"

function checkout() {
    const element = document.createElement('form')
    element.classList.add('checkout__form')
    element.appendChild(header())
    
    element.innerHTML = `
    
    `
    // Code here
    

    return element
}
document.body.append(checkout())