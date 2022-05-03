function favoriteProductsHeader() {
    const header = document.createElement('div')
    header.classList.add('favoriteProductsHeader')

    header.innerHTML = `
        <h2 class="favoriteProductsList__header">Popular Products</h2>
    `
    return header
}
export default favoriteProductsHeader