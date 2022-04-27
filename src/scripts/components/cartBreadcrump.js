import feather from "feather-icons";
import '../../style/modules/cartBreadcrump.scss'

export default function cartBreadcrump() {
	const element = document.createElement('section');
	element.classList.add('cartBreadcrump');

	element.innerHTML = `
		<div class="cartBreadcrump__backgroundLine"></div>
		<div class="cartBreadcrump__dots">
			<div class="cartBreadcrump__dot cartBreadcrump__dot--success">
				${feather.icons['check-circle'].toSvg()}
				<p>Review</p>
			</div>
			<div class="cartBreadcrump__dot cartBreadcrump__dot--active">
				${feather.icons.truck.toSvg()}
				<p>Delivery</p>
			</div>
			<div class="cartBreadcrump__dot">
				${feather.icons['credit-card'].toSvg()}
				<p>Checkout</p>
			</div>
		</div>
	`;

	return element;
}
