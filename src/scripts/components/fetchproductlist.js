import fetchproductList from "./api/getproductlist.js";
import "../../style/layout/productlist.scss"
function fetchproducts() {
    const element = document.createElement('section')
    element.classList.add('productsectionlist')

    fetchproductList()
        .then(products => {
            products.forEach(product => {
                const output = document.createElement("article")
                output.classList.add("productsectionlist__article")
                output.innerHTML = `<div class="productsectionlist__container">
                <img src="http://localhost:3001${product.images[0]}" alt="" >
            </div>
            <div class="productsectionlist__info">
                <h2>${product.name}</h2>
                <p>${product.brand}</p>
                <span>${product.price}£</span>
                <a href="/product/?id=${product.id}">Se mere</a>
                </div>
            `
                element.appendChild(output)
            })
        })
    return element;
}
export default fetchproducts