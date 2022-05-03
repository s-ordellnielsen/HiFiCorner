function productSpecsConnectivityTypeUL(product) {
    const ULelement = document.createElement('ul')
    ULelement.classList.add('productSpecs__type')


    let productConnectivityTypes = product.specs.connectivity.type

            console.log("productConnectivityTypes", productConnectivityTypes)

            productConnectivityTypes.forEach(function (element) {
                console.log("huligennem")
                let connectivitytypeLi = document.createElement("li")
                let typeInnerText = document.createTextNode(element)
                connectivitytypeLi.appendChild(typeInnerText)
                connectivitytypeLi.classList.add("productSpecs__connectivityType")
                ULelement.appendChild(connectivitytypeLi)
                
            })


    
    // Code here
    
    return ULelement
}
export default productSpecsConnectivityTypeUL