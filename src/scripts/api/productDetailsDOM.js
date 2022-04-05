
function getProductDetails(id) {
    fetch("http://localhost:3001/products", {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': ' * '
        }
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log('fejl')
                return []
            }
            return response.json()
        })
        .then(function (data) {
            console.log("data fra l 16", data);

            //Herunder sammenligner vi id fra databasen på server med id fra querryString
            //Og ud fra den sammenligning kan vi deklarere en product-variabel
            let product = data.find(element => element.id === id)

            console.log("found", product)
            
            document.title += " - " + product.name

            let productName = document.getElementsByClassName("productDescription__name")[0]
            let productDesc = document.getElementsByClassName("productDescription__desc")[0]
            let productFlavorText = document.getElementsByClassName("productDescription__flavor_text")[0]
            let productPrice = document.getElementsByClassName("productDecription__price")[0]
            let soundDesc = document.getElementsByClassName("productSpecs__soundDesc")[0]
            let productHeight = document.getElementsByClassName("productSpecs__height")[0]

            //Product description
            productName.innerText = product.name
            productDesc.innerText = product.desc
            productFlavorText.innerText = product.flavor_text
            productPrice.innerText = "£" + product.price

            //specs
            soundDesc.innerText = product.specs.sound

            let heightInt = product.specs.design.height;
            let heightString = heightInt.toString();

            productHeight.innertext = heightString + "mm";

            console.log("heightInt", heightInt)

            console.log("heightString", heightString)



           

        })
}

