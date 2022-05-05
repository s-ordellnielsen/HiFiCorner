import header from "./components/header.js"
import footerElement from "./components/footerElement.js"

function confa() {
    const element = document.createElement('article')
    element.classList.add('confa__container')
    // Code here

    element.innerHTML = `
    <h1>Thank for your purchase, your items will arrive in a few days</h1>


    `


    return element
}
document.body.append(header())
document.body.append(confa())
document.body.append(footerElement())