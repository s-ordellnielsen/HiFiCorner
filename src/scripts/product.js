import productMain from "./components/productMain.js"
import header from "./components/header.js"
import getURL from "./singleProduct.js"
import footerElement from "./components/footerElement.js"





function product () {

    let id = getURL()
    console.log(id)

    const element = document.createElement('div')
    element.classList.add('wrapper')

    

    element.appendChild(header())
    element.appendChild(productMain(id))
    element.appendChild(footerElement())
    
    // Code here
    
    return element
}
document.body.appendChild(product())