import feather from "feather-icons"
import '../../style/modules/btn.scss'

export default function btn(func) {
	let btn = document.createElement('button')
	btn.classList.add('btn', 'cart__btn')
	btn.innerHTML = `Go to delivery ${feather.icons.truck.toSvg()}`
	btn.addEventListener('click', func)

	return btn
}