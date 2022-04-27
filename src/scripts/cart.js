import themeToggle from './components/themeToggle.js'
import cartBreadcrump from './components/cartBreadcrump.js'
import '../style/style.scss'
import '../style/layout/cart.scss'

function cart() {
	const element = document.createElement('div')
	element.classList.add('cart')
	
	// Code here

	element.appendChild(themeToggle())
	element.appendChild(cartBreadcrump())
	
	return element
}
document.body.appendChild(cart())