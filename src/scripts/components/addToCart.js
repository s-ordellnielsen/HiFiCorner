
import "../../style/modules/addToCart.scss";

function addToCart() {
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


let cartItems = []

function addItemToCart(){
    console.log("productAdd")

    let ls = localStorage.getItem('cartItems')



    if (ls) {

    cartItems = JSON.parse(ls)

    } else {

        cartItems = []

    }



var amount = document.querySelector('.productAmount').value

var productId = document.querySelector('.productID').value

var productColor = document.querySelector('.productColor').value

console.log("productColor", productColor)



let item = {

amount: amount,

id: productId,

color: productColor

}

console.log("item", item)



cartItems.push(item)

console.log(cartItems);



localStorage.setItem('cartItems', JSON.stringify(cartItems))

    

}