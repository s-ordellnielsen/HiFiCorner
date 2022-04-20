let ls = localStorage.getItem('cartItem')

if (ls) {
    let cartItems = JSON.parse(ls)
} else {
    let cartItems = []
}

var amount = document.querySelector('.amount').value
var productId = document.querySelector('.productId').value
var color = document.querySelector('color').value

let item {
    amount : amount,
    productId : id,
    color : color
}

cartItems.push(item)

localStorage.setItem('cartItems')