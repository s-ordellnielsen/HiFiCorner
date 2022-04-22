export default function cart__breadcrump() {
	let element = document.createElement('section');
	element.classList.add('cartBreadcrump');

	element.innerHTML = `
		<div class="cartBreadcrump__backgroundLine"></div>
		<div class="cartBreadcrump__dots">
			<div class="cartBreadcrump__dot cartBreadcrump__dot--active">
				<i data-feather="check-circle"></i>
				<p>Review</p>
			</div>
			<div class="cartBreadcrump__dot cartBreadcrump__dot">
				<i data-feather="truck"></i>
				<p>Delivery</p>
			</div>
			<div class="cartBreadcrump__dot">
				<i data-feather="credit-card"></i>
				<p>Checkout</p>
			</div>
		</div>
	`;

	return element;
}
