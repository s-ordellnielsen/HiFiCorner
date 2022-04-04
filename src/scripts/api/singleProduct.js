import getProductDetails from "productDetailsDOM.js"

let queries = new URLSearchParams(window.location.search)

let id = queries.get("id")
console.log(id);

if (!id){
    alert("fejl")
} else {
    getProductDetails(id)
}