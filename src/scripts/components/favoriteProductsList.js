import fetchFavoriteProducts from "./api/fetchFavoriteProducts.js";

function favoriteProductsList() {
    const section = document.createElement('section')
    section.classList.add('favoriteProductsList__container')

    fetchFavoriteProducts()
        .then(productFavorites => {
            productFavorites.forEach(productFavorit => {
                const favoriteProductsSection = document.createElement('article')
                favoriteProductsSection.classList.add('favoriteProductsList')
                favoriteProductsSection.innerHTML = `
                    <a class="favoriteProductsList__aTag" href="cart.html">
                        <div class="favoriteProductsList__imgContainer">
            <img class="favoriteProductsList__img" src="http://localhost:3001${productFavorit.images[0]}">
            </div>
            <div class="favoriteProductsList__tagContainer">
                <h2 class="favoriteProductsList__itemName">${productFavorit.name}</h2>
                <span class="favoriteProductsList__price">${productFavorit.price}£</span>
            </div>
        </a>
                `
                section.appendChild(favoriteProductsSection)
            })
        })

    // Code here
    return section;
}
export default favoriteProductsList