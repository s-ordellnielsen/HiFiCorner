export default function updateCart(product, item, index, prices) {	
	let itemCount = 0
	let totalPrice = 0
	let ls = JSON.parse(localStorage.getItem('cartItems'))
	ls.forEach(function(elm, i) {
		itemCount += elm.amount
		totalPrice += elm.amount * prices[i]
	})
	document.getElementsByClassName('listItem__total')[index].innerHTML = `€${product.price * item.amount}`
	document.querySelector('.listItem__totalAmount').innerHTML = `Items in cart: ${itemCount}`
	document.querySelector('.listItem__totalPrice').innerHTML = `Total: €${totalPrice}`
}