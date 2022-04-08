fetch("http://localhost:3001/products")
    .then(response => response.json())
    .then(productsArray => renderAllProducts(productsArray))

function renderAllProducts(productsArray) {
    productsArray.forEach(product => renderOneProduct(product))
}

const productsDiv = document.querySelector("#productsDiv")

function renderOneProduct(products) {
    const newElement = document.createElement("div")
    newElement.className = "content"
    newElement.innerHTML = `
        <div class="product-card"
            <div class="center"
                <img src="${products.images}"
                <h2>${products.name}</h2>
                <p> Price: €${products.price}</p>
                <button class="add-item">Add to cart</button>
            </div>
        </div>
    `
    productsDiv.appendChild(newElement)
}

fetch("http://localhost:3001/cart_items")
    .then(response => response.json())
    .then(cartItemsArray => {
        cartArray = cartItemsArray;
        renderAllCartItems(cartArray)
    })

function renderAllCartItems(cartItemsArray) {
    cartItemsArray.forEach(cartItem => renderCartItem(cartItem))
}

function renderCartItem(cartItem) {
    const newLi = document.createElement("li")
    newLi.innerHTML = `<p id="pTag"> ${cartItem.product.name}: €${cartItem.product.price}
    <button class="delete-button"
        <span>Remove</span>
    </button>
    </p>
    `
    findListOfItems.append(newLi)
}

