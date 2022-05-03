// import themeToggle from './components/themeToggle.js'
import cartBreadcrump from './components/cartBreadcrump.js'
import footerElement from './components/footerElement.js'
import cartList from './components/cartList.js'
import header from './components/header.js'
import cartBtn from './components/cartBtn.js'
import btn from './components/btn.js'
import '../style/style.scss'
import '../style/layout/cart.scss'

function cart() {
	const element = document.createElement('main')
	element.classList.add('cart')
	
	element.appendChild(cartBreadcrump(['active', '', '']))
	element.appendChild(cartList())
	element.appendChild(btn(cartBtn))
	
	return element
}
document.body.appendChild(header())
document.body.appendChild(cart())
document.body.appendChild(footerElement())
