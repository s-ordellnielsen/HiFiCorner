import fetchCartItem from './fetchCartItem.js';
import feather from 'feather-icons';

export default function printCart(items) {
	let totalPrice = 0;
	let itemCount = items.length;

	let cartItemsList = document.createElement('ul');
	cartItemsList.classList.add('cartList__list');
	items.forEach(function (item) {
		console.log(item.id);
		let itemLi = document.createElement('li');
		itemLi.classList.add('cartList__listItem');
		fetchCartItem(item.id).then((product) => {
			itemLi.innerHTML = `
			<h3>${product.name}</h3>
			<p>€${product.price}</p>
			<div className="amountBtns">
				<button className="amountBtn amountBtn--minus">${feather.icons.minus.toSvg()}</button>
				<input type="number" class="amount" id="amount" value="${item.amount}" />
				<button>${feather.icons.plus.toSvg()}</button>
			</div>
			<p>€${product.price * item.amount}</p>
		`;
		});

		cartItemsList.appendChild(itemLi);
	});
	return cartItemsList;
}
