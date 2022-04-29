export default function updateCart(product, item) {	
	let itemCount = 0
	let totalPrice = 0
	let ls = JSON.parse(localStorage.getItem('cartItems'))
	ls.forEach(function(elm) {
		itemCount += elm.amount
		totalPrice += elm.amount * product.price
	})
	document.querySelector('.listItem__total').innerHTML = `€${product.price * item.amount}`
	document.querySelector('.listItem__totalAmount').innerHTML = itemCount
	document.querySelector('.listItem__totalPrice').innerHTML = totalPrice
}