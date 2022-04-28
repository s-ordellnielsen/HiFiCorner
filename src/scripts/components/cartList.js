import printCart from './printCart.js'
import '../../style/modules/cartList.scss'
import ghostImg from '../../images/cart-human.svg'

export default function cartList() {
	let element = document.createElement('section')
	element.classList.add('cartList')

	let cartItemsLs = localStorage.getItem('cartItems')
	let cartItems = []

	if (cartItemsLs) {
		cartItems = JSON.parse(cartItemsLs)

		element.appendChild(printCart(cartItems))
	}
	else {
		let burnerItem = {
			amount: 3,
			id: 12345,
			color: "Black"
		}
		let burnerItem2 = {
			amount: 1,
			id: 12348,
			color: "Red"
		}

		cartItems.push(burnerItem)
		cartItems.push(burnerItem2)

		localStorage.setItem('cartItems', JSON.stringify(cartItems))

		emptyCart()
	}

	// console.log(cartItems);

	function emptyCart() {
		element.classList.add('cartList--empty')
		element.innerHTML = `
			<h1 class="cartList__emptyHeader">Nothing to see here ... yet</h1>
			<p class="cartList__emptyText">But take a look at our wide range of premium HiFi equipment</p>
			<div class="cartList__emptyBtns">
				<a href="../categories" class="cartList__emptyBtn">Browse Products</a>
				<a href="#" class="cartList__emptyBtn cartList__emptyBtn--random">Find a random product</a>
			</div>
			<img src="${ghostImg}" alt="" class="cartList__emptyHero" />
		`
	}

	return element
}