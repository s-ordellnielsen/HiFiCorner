export default function cartList() {
	let element = document.createElement('section')
	element.classList.add('cartList')

	let cartItemsLs = localStorage.getItem('cartItems')
	let cartItems = []

	if (cartItemsLs) {
		cartItems = JSON.parse(cartItemsLs)
	}
	else {
		let burnerItem = {
			amount: 3,
			id: 12345,
			color: "Black"
		}

		cartItems.push(burnerItem)

		localStorage.setItem('cartItems', JSON.stringify(cartItems))
	}

	console.log(cartItems);

	element.innerHTML = `

	`

	return element
}