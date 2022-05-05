import feather from "feather-icons";
import '../../style/modules/cartBreadcrump.scss'

export default function cartBreadcrump(activeArray) {
	const element = document.createElement('section');
	element.classList.add('cartBreadcrump');

	element.innerHTML = `
		<div class="cartBreadcrump__backgroundLine"></div>
		<div class="cartBreadcrump__dots">
			<div class="cartBreadcrump__dot">
				${feather.icons['check-circle'].toSvg()}
				<p>Review</p>
			</div>
			<div class="cartBreadcrump__dot">
				${feather.icons.truck.toSvg()}
				<p>Delivery</p>
			</div>
			<div class="cartBreadcrump__dot">
				${feather.icons['credit-card'].toSvg()}
				<p>Checkout</p>
			</div>
		</div>
	`;

	element.querySelectorAll('.cartBreadcrump__dot').forEach( function(e, i) {
		if (activeArray[i] === 'active') {
			e.classList.add('cartBreadcrump__dot--active')
		}
		else if (activeArray[i] === 'success') {
			e.classList.add('cartBreadcrump__dot--success')
		}
	})

	return element;
}
