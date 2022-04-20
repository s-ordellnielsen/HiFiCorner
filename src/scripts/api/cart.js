let ls = localStorage.getItem('cartItem')

if (ls) {
    let cartItems = JSON.parse(ls)
} else {
    let cartItems = []
}

var amount = document.querySelector('').value
var productId = document.querySelector('').value
var color = document.querySelector('').value

let item {
    amount : amount,
    productId : id,
    color : color
}

cartItems.push(item)

localStorage.setItem('cartItems')