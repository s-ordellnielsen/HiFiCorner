import fetchFavoriteProducts from "./fetchFavoriteProducts.js";

function favoriteProductsList() {
    const section = document.createElement('section')
    section.classList.add('wrapper')

    fetchFavoriteProducts()
        .then(productFavorites => {
            productFavorites.forEach(productFavorit => {
                const favoriteProductsSection = document.createElement('section')
                favoriteProductsSection.classList.add('packageSectionFavorites')
                favoriteProductsSection = `
                    <h2>hrello</h2>
                    <p>hrello</p>
                `
                section.appendChild(favoriteProductsSection)
            })
        })

    // Code here

    return section;
}
export default favoriteProductsList