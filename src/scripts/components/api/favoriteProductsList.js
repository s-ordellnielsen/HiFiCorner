import fetchFavoriteProducts from "./fetchFavoriteProducts";

function favoriteProductsList() {
    const element = document.createElement('')
    element.classList.add('wrapper')

    fetchFavoriteProducts()
        .then(productFavorites => {
            productFavorites.forEach(productFavorit => {
                const favoriteSection = document.createElement('section')
                favoriteSection.classList.add('packageSectionFavorites')
                favoriteSection = `
                    <h2>hrello</h2>
                    <p>hrello</p>
                `
            })
        })

    // Code here

    return element
}
export default favoriteProductsList