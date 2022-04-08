const cartDiv = document.getElementsByClassName("cartDiv")[0]
const findListOfItems = document.querySelector(".list-of-items")

fetch("http://localhost:3001/products")
    .then(response => response.json())
    .then(productsArray => renderAllProducts(productsArray))

function renderAllProducts(productsArray) {
    productsArray.forEach(product => renderOneProduct(product))
}

function renderOneProduct(products) {
const newElement = document.createElement("div")    
    newElement.className = "content"
    newElement.innerHTML = `
        <div class="cartDiv__product"
            <div class="cartDiv_center"
                <img src="http://localhost:3001${products.images[0]}"
                <h2>${products.name}</h2>
                <p> Price:  £${products.price}</p>
                <button class="cartDiv__addButton">Add to cart</button>
            </div>
        </div>
    `
    cartDiv.appendChild(newElement)
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
    newLi.innerHTML = `<p id="pTag"> ${cartItem.products.name}:  £${cartItem.products.price}
    <button class="cardDiv__deleteButton"
        <span>Remove</span>
    </button>
    </p>
    `
    findListOfItems.append(newLi)
}

//add Btn
const addButton = newElement.querySelector(".cartDiv__addButton")
addButton.addEventListener("click", event => {
    findListOfItems.innerText = ""

    fetch("http://localhost:3001/cart_items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            cart_id: 1,
            product_id: product.id
        })
    })
        .then(response => response.json())
        .then(newCartItem => {
            cartArray.push(newCartItem);
            renderAllCartItems(cartArray)
        })
})

//remove Btn
const removeButton = newLi.querySelector(".cardDiv__deleteButton")
removeButton.addEventListener("click", event => {
    newLi.remove()
    fetch(`http://localhost:3001/cart_items/${cartItem.id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(results => {
        cartArray = results
        findListOfItems.innerHTML = ""
        renderAllCartItems(cartArray)
    })
})
