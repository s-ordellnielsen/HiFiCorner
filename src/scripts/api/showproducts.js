const productsdiv = document.getElementsByClassName("products")[0]

function pList(products) {
    products.forEach(function (product) {
        const output = `<article>
        <h1>Name: ${product.name}</h1>
        <h2>id: ${product.id} </h2>
        <p>Brand: ${product.brand}</p>
        <p>description: ${product.desc}</p>
        <p>price: ${product.price}</p>
        </article>`

        productsdiv.innerHTML += output;
    })
}