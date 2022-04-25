import "../style/style.scss"
import cart__breadcrump from "./components/cart__breadcrump.js"

function cart() {
    const element = document.createElement('div')
    element.classList.add('wrapper')
    
    element.appendChild(cart__breadcrump())
    return element
}
document.body.append(cart())