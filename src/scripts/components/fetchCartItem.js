export default function fetchCartItem(id) {
	console.log(`http://localhost:3001/products/${id}`)
	return fetch(`http://localhost:3001/products/${id}`)
		.then(function (res) {
			if (res.status !== 200) {
				console.log('Fejl');
				return [];
			} else {
				return res.json();
			}
		})
		.then(function (data) {
			return data
		});
}
