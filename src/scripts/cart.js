import themeToggle from './components/themeToggle.js'
import cartBreadcrump from './components/cartBreadcrump.js'
import '../style/style.scss'

function cart() {
	const element = document.createElement('div')
	element.classList.add('wrapper')
	
	// Code here

	element.appendChild(themeToggle())
	element.appendChild(cartBreadcrump())
	
	return element
}
document.body.appendChild(cart())