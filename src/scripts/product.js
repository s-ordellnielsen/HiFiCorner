import productMain from "./components/productMain.js"
import getURL from "./singleProduct.js"
import "../../style/base/_variables.scss";




function product () {

    let id = getURL()
    console.log(id)

    const element = document.createElement('div')
    element.classList.add('wrapper')

    


    element.appendChild(productMain(id))
    
    // Code here
    
    return element
}
document.body.appendChild(product())