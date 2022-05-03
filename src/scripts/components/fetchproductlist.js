import fetchproductList from "./api/getproductlist.js";
function fetchproducts() {
    const element = document.createElement('section')
    element.classList.add('productsectionlist')

    fetchproductList()
        .then(products => {
            products.forEach(products => {
                const output = document.createElement("article")
                output.classList.add("productsectionlist__article")
                output.innerHTML = `<div class="productsectionlist__container">
                <img src="http://localhost3001${products.images[0]}" alt="" />
            </div>
            <div>
                <h2>${products.name}</h2>
                <p>${products.brand}</p>
                <span>${products.price}£</span>
                <a href="">${products.id}</a>
                </div>
                
            `
                element.appendChild(output)
            })
        })
    // html stopper her


    var productlink = element.querySelector("productsectionlist__container")

    productlink.addEventListener("click", function () {
        console.log("hej")
    })

    // Code here

    return element
}
export default fetchproducts