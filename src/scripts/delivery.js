import header from "./components/header.js"
import footerElement from "./components/footerElement.js"
import cartBreadcrump from "./components/cartBreadcrump.js"
import deliveryForm from "./components/deliveryForm.js"
import '../style/style.scss'
import '../style/layout/cart.scss'

function delivery() {
	const element = document.createElement('main')
	element.classList.add('cart')
	
	element.appendChild(cartBreadcrump(['success', 'active', '']))
	element.appendChild(deliveryForm())

	return element
}
document.body.appendChild(header())
document.body.appendChild(delivery())
document.body.appendChild(footerElement())