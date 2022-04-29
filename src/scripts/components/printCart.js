import fetchCartItem from './fetchCartItem.js';
import feather from 'feather-icons';
import '../../style/modules/cartItem.scss';

export default function printCart(items) {
	let totalPrice = 0;
	let itemCount = items.length;

	let cartItemsList = document.createElement('ul');
	cartItemsList.classList.add('cartList__list');
	items.forEach(function (item, index) {
		console.log(item.id);
		let itemLi = document.createElement('li');
		itemLi.classList.add('listItem');
		fetchCartItem(item.id).then((product) => {
			itemLi.innerHTML = `
			<h3 class="listItem__header">${product.name}</h3>
			<p class="listItem__price">€${product.price}</p>
			<div className="listItem__amountBtns">
				<button class="listItem__amountBtn listItem__amountBtn--minus">${feather.icons.minus.toSvg()}</button>
				<input type="number" class="listItem__amount" id="amount" value="${
					item.amount
				}" />
				<button class="listItem__amountBtn listItem__amountBtn--plus">${feather.icons.plus.toSvg()}</button>
			</div>
			<p class="listItem__total">€${product.price * item.amount}</p>
		`;
			itemLi
				.querySelector('.listItem__amount')
				.addEventListener('change', function () {
					item.amount = parseInt(this.value)
					items[index] = item
					console.log(item)
				});
		});

		cartItemsList.appendChild(itemLi);
	});
	return cartItemsList;
}
