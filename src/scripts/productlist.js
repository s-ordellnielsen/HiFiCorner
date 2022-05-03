import fetchproductList from "./components/api/getproductlist";

function productlist() {
    const element = document.createElement('div')
    element.classList.add('wrapper')
    
    element.appendChild(fetchproductList())


    // Code here
    
    return element
}
document.body.appendChild(productlist())