const landingHero = document.getElementsByClassName("landing__hero")[0]

function heroDom(products) {
    products.forEach(function (product) {
        const output = `<article class="landing__heroProduct">
        <h2 class="landing__heroProductBody">${product.name}</h2>
        <img class="landing__heroProductImage" src="http://localhost:3001${product.images[0]}">
        <a class="landing__heroProductLink" href="cart.html">Buy Now</a>
        </article>`

        landingHero.innerHTML = output;
    })
}