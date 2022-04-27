const landingHero = document.getElementsByClassName("landing__hero")[0]

function heroDom(products) {
    const first = products[17]
        const output = `<article class="landing__heroProduct">
        <h2 class="landing__heroProductBody">${first.name}</h2>
        <img class="landing__heroProductImage" src="http://localhost:3001${first.images[0]}">
        <a class="landing__heroProductLink" href="cart.html">Buy Now</a>
        </article>`

        landingHero.innerHTML = output;
}