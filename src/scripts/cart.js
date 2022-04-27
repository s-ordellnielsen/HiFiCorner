import themeToggle from './components/themeToggle.js'
import cartBreadcrump from './components/cartBreadcrump.js'
import footerElement from './components/footerElement.js'
import cartList from './components/cartList.js'
import '../style/style.scss'
import '../style/layout/cart.scss'

function cart() {
	const element = document.createElement('div')
	element.classList.add('cart')
	
	element.appendChild(themeToggle())
	element.appendChild(cartBreadcrump())
	element.appendChild(cartList())
	
	return element
}
document.body.appendChild(cart())
document.body.appendChild(footerElement())