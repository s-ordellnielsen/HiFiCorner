import "../../style/base/_variables.scss";
import "./addToCart.scss";

function addToCart(product) {
    const element = document.createElement('button')
    element.classList.add('productDecription__addToCart')
    element.classList.add('standardBtn')

    let addToCartH4 = document.createElement("h4")
    addToCartH4.innerText = `Add to cart`
    element.appendChild(addToCartH4)
    
    element.addEventListener("click", addItemToCart)
    
    return element
}
export default addToCart

function addItemToCart(product){
    console.log("productAdd")
}