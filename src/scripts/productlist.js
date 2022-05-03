import fetchproductList from "./components/api/getproductlist";

function productlist() {
    const element = document.createElement('div')
    element.classList.add('wrapper')
    
    
    
    // Code here
    
    return element
}
document.body.appendChild(fetchproductList())
document.body.appendChild(productlist())