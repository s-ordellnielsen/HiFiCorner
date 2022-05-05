import heroProduct from "./getHeroProduct.js";

function heroDom() {
    const element = document.createElement("article")
    element.classList.add("landing__heroProduct")
    heroProduct()
        .then(products => {
            const first = products[17]
            element.innerHTML = `
                <h2 class="landing__heroProductBody">${first.name}</h2>
                <img class="landing__heroProductImage" src="http://localhost:3001${first.images[0]}">
                <a class="landing__heroProductLink" href="cart.html">Buy Now</a>
            `
        })
    return element
}

export default heroDom