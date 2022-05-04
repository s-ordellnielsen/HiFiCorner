import fetchproducts from "./components/fetchproductlist.js"
import footerElement from "./components/footerElement.js"
import header from "./components/header.js"

function productlist() {
    const element = document.createElement('div')
    element.classList.add('wrapper')
    

    element.appendChild(header())
    element.appendChild(fetchproducts())
    element.appendChild(footerElement())
    
    // Code here
    
    return element
}
document.body.appendChild(productlist())
