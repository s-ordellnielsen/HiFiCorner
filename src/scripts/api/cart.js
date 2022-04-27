let ls = localStorage.getItem('cartItem')

if (ls) {
    let cartItems = JSON.parse(ls)
} else {
    let cartItems = []
}

var amount = document.querySelector('.productDescription__amount').value
var productId = document.querySelector('.productDescription__id').value
var color = document.querySelector('.productDescription__color').value

let item = {
    'amount' : amount,
    'id' : productId,
    'color' : color
}

cartItems.push(item)

localStorage.setItem('cartItems')