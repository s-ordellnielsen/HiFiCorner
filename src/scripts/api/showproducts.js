const productsdiv = document.getElementsByClassName("categories__list")[0]

function pList(products) {
    products.forEach(function (product) {
        const output = `<article class="categories__listProduct">
        <img src="${product.images[0]}"
        <h2>Name: ${product.name}</h2>
        <span>price: ${product.price}</span>
        </article>`

        productsdiv.innerHTML += output;
    })
}